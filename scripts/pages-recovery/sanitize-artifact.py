"""Prepare a local Pages archive with one verified file removed. No publishing."""
from pathlib import Path, PurePosixPath
import hashlib, io, os, tarfile, zipfile

TARGET = 'ops/comms/CEO-OPS.md'

def clean(source, output, expected_zip_sha256, expected_blob):
    source, output = Path(source), Path(output)
    if output.exists(): raise ValueError('Output already exists')
    raw=source.read_bytes()
    if hashlib.sha256(raw).hexdigest()!=expected_zip_sha256: raise ValueError('Archive digest mismatch')
    with zipfile.ZipFile(io.BytesIO(raw)) as z:
        names=[x for x in z.infolist() if not x.is_dir()]
        if len(names)!=1 or names[0].filename!='artifact.tar': raise ValueError('Unexpected ZIP structure')
        original=z.read(names[0])
    before={}; members=[]; removed=0
    with tarfile.open(fileobj=io.BytesIO(original),mode='r:*') as archive:
        for member in archive.getmembers():
            path=PurePosixPath(member.name)
            if path.is_absolute() or '..' in path.parts: raise ValueError('Unsafe archive path')
            name=str(path)
            if name in before: raise ValueError('Duplicate archive member')
            if not (member.isdir() or member.isfile()): raise ValueError('Links or special archive members rejected')
            data=archive.extractfile(member).read() if member.isfile() else b''
            before[name]=hashlib.sha256(data).hexdigest()
            if name==TARGET:
                if not member.isfile(): raise ValueError('Target is not a regular file')
                gitblob=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
                if gitblob!=expected_blob: raise ValueError('Private document blob mismatch')
                removed+=1
            else: members.append((member,data))
    if removed!=1: raise ValueError('Expected exactly one target')
    buf=io.BytesIO()
    with tarfile.open(fileobj=buf,mode='w') as archive:
        for member,data in members: archive.addfile(member,io.BytesIO(data) if member.isfile() else None)
    cleaned=buf.getvalue()
    with tarfile.open(fileobj=io.BytesIO(cleaned),mode='r:') as archive:
        after={str(PurePosixPath(m.name)): hashlib.sha256(archive.extractfile(m).read() if m.isfile() else b'').hexdigest() for m in archive.getmembers()}
    del before[TARGET]
    if before!=after: raise ValueError('Unexpected artifact content change')
    fd=os.open(output,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
    with os.fdopen(fd,'wb') as f: f.write(cleaned); f.flush(); os.fsync(f.fileno())
    return {'removed_files':removed,'preserved_members':len(after),'source_unchanged':hashlib.sha256(source.read_bytes()).hexdigest()==expected_zip_sha256,'output_sha256':hashlib.sha256(cleaned).hexdigest()}
