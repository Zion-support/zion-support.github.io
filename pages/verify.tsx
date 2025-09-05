import React, {_useEffect, _useMemo, _useState} from 'react';
import Head from 'next/head';
import type {_KycProfile, _KycRole, _KycDocumentMeta} from '../utils/kyc';

export default function VerifyPage() {_const [userId, _setUserId] = useState<string>('demo-user');
  const [role, _setRole] = useState<KycRole>('client');
  const [profile, _setProfile] = useState<KycProfile | null>(null);
  const [requiredDocs, _setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, _setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [fullLegalName, _setFullLegalName] = useState('');
  const [businessName, _setBusinessName] = useState('');
  const [businessReg, _setBusinessReg] = useState('');
  const [busy, _setBusy] = useState(false);
  const [message, _setMessage] = useState<string>('');

  const _progress = useMemo__(() => {
    if (!profile) return 0;
    const _uploaded = new Set((profile.documents || []).map(_(d) => d.kind));
    const _required = requiredDocs.length;
    const _have = Array.from(uploaded).filter(_(k) => requiredDocs.includes(k as any)).length;
    const _base = required > 0 ? Math.round((have / required) * 80) : 0; // up to 80%
    const _submitted = profile.status === 'submitted' ? 90 : 0;
    const _approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, _submitted, _approved);}, [profile, requiredDocs]);

  async function start() {_setBusy(true);
    setMessage('');
    const _res = await fetch('/api/kyc/start', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId, _role, _fullLegalName, _businessName, _businessRegistrationNumber: businessReg})});
    const _data = await res.json();
    if (data.ok) {_setProfile(data.profile);
      setRequiredDocs(data.requiredDocuments);
      setOptionalDocs(data.optionalDocuments);} else {_setMessage(data.error || 'Failed to start');}
    setBusy(false);
  }

  async function upload(_kind: KycDocumentMeta['kind']) {_const _filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const _res = await fetch('/api/kyc/upload', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId, _kind, _filename})});
    const _data = await res.json();
    if (data.ok) {_setProfile(data.profile);} else {_setMessage(data.error || 'Upload failed');}
    setBusy(false);
  }

  async function submit() {_setBusy(true);
    const _res = await fetch('/api/kyc/submit', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId})});
    const _data = await res.json();
    if (data.ok) {_setProfile(data.profile);
      setMessage('Submitted. AML check performed.');} else {_setMessage(data.error || 'Submit failed');}
    setBusy(false);
  }

  const _labels = getBadgeLabels(profile || undefined);

  return (
    <>
      <Head>
        <title>Verify Identity - Zion</title>
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity Verification</h1>
        <p className="text-sm text-gray-600 mb-6">Guided step-by-step KYC/AML verification with progress tracking.</p>

        {_labels.length > 0 && (
          <div className="mb-4">
            <VerifiedBadge labels={labels} />
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">User ID</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={_userId} onChange={_(_e) => setUserId(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select className="mt-1 w-full border rounded px-3 py-2" value={_role} onChange={_(_e) => setRole(e.target.value as KycRole)}>
              <option value="client">Client</option>
              <option value="talent">Talent</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Full legal name</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={_fullLegalName} onChange={_(_e) => setFullLegalName(e.target.value)} />
          </div>
          {_role === 'enterprise' && (_<>
              <div>
                <label className="block text-sm font-medium">Business name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={_(e) => setBusinessName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Registration number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={_businessReg} onChange={_(_e) => setBusinessReg(e.target.value)} />
              </div>
            </>
          )}
        </div>

        <div className="mb-6">
          <button disabled={_busy} onClick={_start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>
        </div>

        {_profile && (_<div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{progress}% {_profile.status === 'submitted' && '→ Pending ID'} {_profile.status === 'approved' && '→ Approved'}</span>
              </div>
              <div className="w-full bg-gray-100 rounded h-3 overflow-hidden">
                <div className="bg-blue-600 h-3" style={_{ width: `${progress}%` }} />
              </div>
            </div>

            <section>
              <h2 className="font-semibold mb-2">Required documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {_requiredDocs.map((k) => {
                  const _hasIt = (profile.documents || []).some(_(d) => d.kind === k);
                  return (_<div key={k} className="flex items-center justify-between border rounded p-3">
                      <div>
                        <div className="text-sm font-medium">{_k}</div>
                        <div className="text-xs text-gray-500">{_hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
                      <button disabled={_busy} onClick={_() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{_hasIt ? 'Replace' : 'Upload'}</button>
                    </div>
                  );
                })}
              </div>
            </section>

            {_optionalDocs.length > 0 && (_<section>
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const _hasIt = (profile.documents || []).some(_(d) => d.kind === k);
                    return (_<div key={k} className="flex items-center justify-between border rounded p-3">
                        <div>
                          <div className="text-sm font-medium">{_k}</div>
                          <div className="text-xs text-gray-500">{_hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={_busy} onClick={_() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{_hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            <div>
              <button disabled={_busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={_submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>

            {_message && <div className="text-sm text-blue-700">{message}</div>}
          </div>
        )}
      </main>
    </>
  );
}