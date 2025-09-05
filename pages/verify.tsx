<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react',
import Head from 'next/head',
import { getBadgeLabels } from '../utils/kyc',
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc',
import { VerifiedBadge } from '../components/ui/VerifiedBadge',
export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [role, setRole] = useState<KycRole>('client'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]),
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]),
  const [fullLegalName, setFullLegalName] = useState(''),
  const [businessName, setBusinessName] = useState(''),
  const [businessReg, setBusinessReg] = useState(''),
  const [busy, setBusy] = useState(false),
  const [message, setMessage] = useState<string>(''),

  const progress = useMemo(() => {
    if (!profile) return 0,
    const uploaded = new Set((profile.documents || []).map((d) => d.kind)),
    const required = requiredDocs.length,
    const have = Array.from(uploaded).filter((k) => requiredDocs.includes(k as any)).length,
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0,
    const approved = profile.status === 'approved' ? 100 : 0,
    return Math.max(base, submitted, approved)
  }, [profile, requiredDocs]),

  async function start() {
    setBusy(true),
    setMessage(''),
    const res = await fetch('/api/kyc/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),
    const data = await res.json(),
    if (data.ok) {
      setProfile(data.profile),
      setRequiredDocs(data.requiredDocuments),
      setOptionalDocs(data.optionalDocuments)
    } else {
      setMessage(data.error || 'Failed to start')
    }
    setBusy(false)
  }

  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = prompt(`Enter filename for ${kind}`) || '',
    if (!filename) return,
    setBusy(true),
    const res = await fetch('/api/kyc/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, kind, filename })}),
    const data = await res.json(),
    if (data.ok) {
      setProfile(data.profile)
    } else {
      setMessage(data.error || 'Upload failed')
    }
    setBusy(false)
  }

  async function submit() {
    setBusy(true),
    const res = await fetch('/api/kyc/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })}),
    const data = await res.json(),
    if (data.ok) {
      setProfile(data.profile),
      setMessage('Submitted. AML check performed.')
    } else {
      setMessage(data.error || 'Submit failed')
    }
    setBusy(false)
  }

  const labels = getBadgeLabels(profile || undefined),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Verify Identity - Zion</title>
        <meta name=&quot;description&quot; content=&quot;Complete KYC/AML verification to secure marketplace trust&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
      </Head>
      <main className=&quot;max-w-3xl mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-2xl font-bold mb-4&quot;>Identity Verification</h1>
        <p className=&quot;text-sm text-gray-600 mb-6&quot;>Guided step-by-step KYC/AML verification with progress tracking.</p>

<<<<<<< HEAD
        {labels.length > 0 && (
          <div className=&quot;mb-4&quot;>
=======
        {_labels.length > 0 && (
          <div className="mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <VerifiedBadge labels={labels} />
          </div>
        )}

        <div className=&quot;mb-6 grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
<<<<<<< HEAD
            <label className=&quot;block text-sm font-medium&quot;>User ID</label>
            <input className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Role</label>
            <select className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={role} onChange={(e) => setRole(e.target.value as KycRole)}>
              <option value=&quot;client&quot;>Client</option>
              <option value=&quot;talent&quot;>Talent</option>
              <option value=&quot;enterprise&quot;>Enterprise</option>
            </select>
          </div>
          <div className=&quot;md:col-span-2&quot;>
            <label className=&quot;block text-sm font-medium&quot;>Full legal name</label>
            <input className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={fullLegalName} onChange={(e) => setFullLegalName(e.target.value)} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          {_role === 'enterprise' && (_<>
              <div>
<<<<<<< HEAD
                <label className=&quot;block text-sm font-medium&quot;>Business name</label>
                <input className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium&quot;>Registration number</label>
                <input className=&quot;mt-1 w-full border rounded px-3 py-2&quot; value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />
=======
                <label className="block text-sm font-medium">Business name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={_(e) => setBusinessName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Registration number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={_businessReg} onChange={_(_e) => setBusinessReg(e.target.value)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </>
          )}
        </div>

<<<<<<< HEAD
        <div className=&quot;mb-6&quot;>
          <button disabled={busy} onClick={start} className=&quot;rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50&quot;>Start/Update</button>
        </div>

        {profile && (
          <div className=&quot;space-y-6&quot;>
            <div>
              <div className=&quot;flex items-center justify-between mb-2&quot;>
                <span className=&quot;text-sm text-gray-600&quot;>Progress</span>
                <span className=&quot;text-sm font-medium&quot;>{progress}% {profile.status === 'submitted' && '→ Pending ID'} {profile.status === 'approved' && '→ Approved'}</span>
              </div>
              <div className=&quot;w-full bg-gray-100 rounded h-3 overflow-hidden&quot;>
                <div className=&quot;bg-blue-600 h-3&quot; style={{ width: `${progress}%` }} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>

            <section>
<<<<<<< HEAD
              <h2 className="font-semibold mb-2">Required documents</h2>
<<<<<<< HEAD
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
=======
              <h2 className=&quot;font-semibold mb-2&quot;>Required documents</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                {requiredDocs.map((k) => {
                  const hasIt = (profile.documents || []).some((d) => d.kind === k),
                  return (
                    <div key={k} className=&quot;flex items-center justify-between border rounded p-3&quot;>
                      <div>
                        <div className=&quot;text-sm font-medium&quot;>{k}</div>
                        <div className=&quot;text-xs text-gray-500&quot;>{hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
                      <button disabled={busy} onClick={() => upload(k)} className=&quot;text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50&quot;>{hasIt ? 'Replace' : 'Upload'}</button>
=======
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {_requiredDocs.map((k) => {
                  const _hasIt = (profile.documents || []).some(_(d) => d.kind === k);
                  return (_<div key={k} className="flex items-center justify-between border rounded p-3">
                      <div>
                        <div className="text-sm font-medium">{_k}</div>
                        <div className="text-xs text-gray-500">{_hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
                      <button disabled={_busy} onClick={_() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{_hasIt ? 'Replace' : 'Upload'}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  )
                })}
              </div>
            </section>

<<<<<<< HEAD
            {optionalDocs.length > 0 && (
              <section>
<<<<<<< HEAD
=======
            {_optionalDocs.length > 0 && (_<section>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
=======
                <h2 className=&quot;font-semibold mb-2&quot;>Optional documents</h2>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  {optionalDocs.map((k) => {
<<<<<<< HEAD
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className=&quot;flex items-center justify-between border rounded p-3&quot;>
                        <div>
                          <div className=&quot;text-sm font-medium&quot;>{k}</div>
                          <div className=&quot;text-xs text-gray-500&quot;>{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className=&quot;text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50&quot;>{hasIt ? 'Replace' : 'Upload'}</button>
=======
                    const _hasIt = (profile.documents || []).some(_(d) => d.kind === k);
                    return (_<div key={k} className="flex items-center justify-between border rounded p-3">
                        <div>
                          <div className="text-sm font-medium">{_k}</div>
                          <div className="text-xs text-gray-500">{_hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={_busy} onClick={_() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{_hasIt ? 'Replace' : 'Upload'}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            <div>
<<<<<<< HEAD
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className=&quot;rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50&quot;>Submit for review</button>
            </div>

            {message && <div className=&quot;text-sm text-blue-700&quot;>{message}</div>}
=======
              <button disabled={_busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={_submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>

            {_message && <div className="text-sm text-blue-700">{message}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
      </main>
    </>
  )
}