import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { getBadgeLabels } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user');
  const [role, setRole] = useState<KycRole>('client');
  const [profile, setProfile] = useState<KycProfile | null>(null);
<<<<<<< HEAD
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>(
    []
  );
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>(
    []
  );
=======
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string>('');

  const progress = useMemo(() => {
    if (!profile) return 0;
<<<<<<< HEAD
    const uploaded = new Set((profile.documents || []).map(d => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter(k =>
      requiredDocs.includes(k as any)
    ).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0; // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved);
=======
    const uploaded = new Set((profile.documents || []).map((d) => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter((k) => requiredDocs.includes(k as any)).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }, [profile, requiredDocs]);

  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
      body: JSON.stringify({
        userId,
        role,
        fullLegalName,
        businessName,
        businessRegistrationNumber: businessReg,
      }),
    });
=======
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setRequiredDocs(data.requiredDocuments);
<<<<<<< HEAD
      setOptionalDocs(data.optionalDocuments);
    } else {
      setMessage(data.error || 'Failed to start');
    }
    setBusy(false);
=======
      setOptionalDocs(data.optionalDocuments)
    } else {
      setMessage(data.error || 'Failed to start')
    }
    setBusy(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
      body: JSON.stringify({ userId, kind, filename }),
    });
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
    } else {
      setMessage(data.error || 'Upload failed');
    }
    setBusy(false);
=======
      body: JSON.stringify({ userId, kind, filename })});
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile)
    } else {
      setMessage(data.error || 'Upload failed')
    }
    setBusy(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  async function submit() {
    setBusy(true);
    const res = await fetch('/api/kyc/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setMessage('Submitted. AML check performed.');
    } else {
      setMessage(data.error || 'Submit failed');
    }
    setBusy(false);
=======
      body: JSON.stringify({ userId })}),
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setMessage('Submitted. AML check performed.')
    } else {
      setMessage(data.error || 'Submit failed')
    }
    setBusy(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const labels = getBadgeLabels(profile || undefined);

  return (
    <>
      <Head>
        <title>Verify Identity - Zion</title>
<<<<<<< HEAD
        <meta
          name='description'
          content='Complete KYC/AML verification to secure marketplace trust'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Identity Verification</h1>
        <p className='text-sm text-gray-600 mb-6'>
          Guided step-by-step KYC/AML verification with progress tracking.
        </p>

        {labels.length > 0 && (
          <div className='mb-4'>
=======
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity Verification</h1>
        <p className="text-sm text-gray-600 mb-6">Guided step-by-step KYC/AML verification with progress tracking.</p>

        {labels.length > 0 && (
          <div className="mb-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            <VerifiedBadge labels={labels} />
          </div>
        )}

<<<<<<< HEAD
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium'>User ID</label>
            <input
              className='mt-1 w-full border rounded px-3 py-2'
              value={userId}
              onChange={e => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Role</label>
            <select
              className='mt-1 w-full border rounded px-3 py-2'
              value={role}
              onChange={e => setRole(e.target.value as KycRole)}
            >
              <option value='client'>Client</option>
              <option value='talent'>Talent</option>
              <option value='enterprise'>Enterprise</option>
            </select>
          </div>
          <div className='md:col-span-2'>
            <label className='block text-sm font-medium'>Full legal name</label>
            <input
              className='mt-1 w-full border rounded px-3 py-2'
              value={fullLegalName}
              onChange={e => setFullLegalName(e.target.value)}
            />
=======
        <div className="mb-6 grid grid-cols-1 md: grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">User ID</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select className="mt-1 w-full border rounded px-3 py-2" value={role} onChange={(e) => setRole(e.target.value as KycRole)}>
              <option value="client">Client</option>
              <option value="talent">Talent</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Full legal name</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={fullLegalName} onChange={(e) => setFullLegalName(e.target.value)} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
          {role === 'enterprise' && (
            <>
              <div>
<<<<<<< HEAD
                <label className='block text-sm font-medium'>
                  Business name
                </label>
                <input
                  className='mt-1 w-full border rounded px-3 py-2'
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  Registration number
                </label>
                <input
                  className='mt-1 w-full border rounded px-3 py-2'
                  value={businessReg}
                  onChange={e => setBusinessReg(e.target.value)}
                />
=======
                <label className="block text-sm font-medium">Business name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Registration number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              </div>
            </>
          )}
        </div>

<<<<<<< HEAD
        <div className='mb-6'>
          <button
            disabled={busy}
            onClick={start}
            className='rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50'
          >
            Start/Update
          </button>
        </div>

        {profile && (
          <div className='space-y-6'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm text-gray-600'>Progress</span>
                <span className='text-sm font-medium'>
                  {progress}% {profile.status === 'submitted' && '→ Pending ID'}{' '}
                  {profile.status === 'approved' && '→ Approved'}
                </span>
              </div>
              <div className='w-full bg-gray-100 rounded h-3 overflow-hidden'>
                <div
                  className='bg-blue-600 h-3'
                  style={{ width: `${progress}%` }}
                />
=======
        <div className="mb-6">
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>
        </div>

        {profile && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{progress}% {profile.status === 'submitted' && '→ Pending ID'} {profile.status === 'approved' && '→ Approved'}</span>
              </div>
              <div className="w-full bg-gray-100 rounded h-3 overflow-hidden">
                <div className="bg-blue-600 h-3" style={{ width: `${progress}%` }} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              </div>
            </div>

            <section>
<<<<<<< HEAD
              <h2 className='font-semibold mb-2'>Required documents</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {requiredDocs.map(k => {
                  const hasIt = (profile.documents || []).some(
                    d => d.kind === k
                  );
                  
                    >
                      <div>
                        <div className='text-sm font-medium'>{k}</div>
                        <div className='text-xs text-gray-500'>
                          {hasIt ? 'Uploaded' : 'Missing'}
                        </div>
                      </div>
                      <button
                        disabled={busy}
                        onClick={() => upload(k)}
                        className='text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50'
                      >
                        {hasIt ? 'Replace' : 'Upload'}
                      </button>
                    </div>
                  );
=======
              <h2 className="font-semibold mb-2">Required documents</h2>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                {requiredDocs.map((k) => {
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">
                      <div>
                        <div className="text-sm font-medium">{k}</div>
                        <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled: opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                    </div>
                  )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                })}
              </div>
            </section>

            {optionalDocs.length > 0 && (
              <section>
<<<<<<< HEAD
                <h2 className='font-semibold mb-2'>Optional documents</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {optionalDocs.map(k => {
                    const hasIt = (profile.documents || []).some(
                      d => d.kind === k
                    );
                    
                      >
                        <div>
                          <div className='text-sm font-medium'>{k}</div>
                          <div className='text-xs text-gray-500'>
                            {hasIt ? 'Uploaded' : 'Optional'}
                          </div>
                        </div>
                        <button
                          disabled={busy}
                          onClick={() => upload(k)}
                          className='text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50'
                        >
                          {hasIt ? 'Replace' : 'Upload'}
                        </button>
                      </div>
                    );
=======
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k);
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
                    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  })}
                </div>
              </section>
            )}

            <div>
<<<<<<< HEAD
              <button
                disabled={
                  busy ||
                  profile.status === 'submitted' ||
                  profile.status === 'approved'
                }
                onClick={submit}
                className='rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50'
              >
                Submit for review
              </button>
            </div>

            {message && <div className='text-sm text-blue-700'>{message}</div>}
=======
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>

            {message && <div className="text-sm text-blue-700">{message}</div>}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
        )}
      </main>
    </>
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
