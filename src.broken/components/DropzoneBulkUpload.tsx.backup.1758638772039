<<<<<<< HEAD
import { useCallbackuseState } from 'react';
=======
import { useCallback, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface UploadError {
  row: number;
  error: string;
}

interface UploadReport {
  created: number;
  errors: UploadError[];
}

export function DropzoneBulkUpload() {
<<<<<<< HEAD
  const [filesetFile] = useState<File | null>(null);
  const [progressetProgress] = useState(0);
  const [reportsetReport] = useState<UploadReport | null>(null);
  const [errorUrlsetErrorUrl] = useState<string | null>(null);
=======
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<UploadReport | null>(null);
  const [errorUrl, setErrorUrl] = useState<string | null>(null);
>>>>>>> origin/auto/autonomy-17186719616

  const onDrop = useCallback((accepted: File[]) => {
    if (accepted.length) {
      setFile(accepted[0]);
      setReport(null);
      setErrorUrl(null);
    }
<<<<<<< HEAD
  }[]);

  const { getRootPropsgetInputPropsisDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] }});
=======
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
  });
>>>>>>> origin/auto/autonomy-17186719616

  const handleUpload = async () => {
    if (!file) return;
    setProgress(10);
    const formData = new FormData();
<<<<<<< HEAD
    formData.append('file'file);
    try {
      const res = await fetch('/products/bulk-upload'{
        method: 'POST',
        body: formData});
=======
    formData.append('file', file);
    try {
      const res = await fetch('/products/bulk-upload', {
        method: 'POST',
        body: formData,
      });
>>>>>>> origin/auto/autonomy-17186719616
      setProgress(70);
      const data = await res.json();
      setReport(data);
      if (data.errors && data.errors.length) {
<<<<<<< HEAD
        const csv = ['row,error'...data.errors.map((e: UploadError) => `${e.row},"${e.error}"`)].join('\n');
        const blob = new Blob([csv]{ type: 'text/csv' });
=======
        const csv = ['row,error', ...data.errors.map((e: UploadError) => `${e.row},"${e.error}"`)].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
>>>>>>> origin/auto/autonomy-17186719616
        setErrorUrl(URL.createObjectURL(blob));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProgress(100);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps({
          className:
<<<<<<< HEAD
            'border-2 border-dashed border-muted rounded-md p-8 text-center cursor-pointer'})}
=======
            'border-2 border-dashed border-muted rounded-md p-8 text-center cursor-pointer',
        })}
>>>>>>> origin/auto/autonomy-17186719616
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV here...</p>
        ) : (
<<<<<<< HEAD
          <p>Drag and drop CSV file hereor click to select file</p>
=======
          <p>Drag and drop CSV file here, or click to select file</p>
>>>>>>> origin/auto/autonomy-17186719616
        )}
      </div>
      {file && <p className="text-sm">Selected: {file.name}</p>}
      <Button onClick={handleUpload} disabled={!file}>Upload</Button>
      {progress > 0 && progress < 100 && <Progress value={progress} />}
      {report && (
        <div className="text-sm">
          <p>Created: {report.created}</p>
          {report.errors.length > 0 && (
            <div className="mt-2">
              <p className="text-red-500">Errors: {report.errors.length}</p>
              {errorUrl && (
                <a href={errorUrl} download="errors.csv" className="underline">
                  Download error CSV
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
