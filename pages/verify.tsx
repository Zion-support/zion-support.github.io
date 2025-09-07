import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { getBadgeLabels } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [role, setRole] = useState<KycRole>('client'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]),
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]),
  const [fullLegalName, setFullLegalName] = useState($2);
  const [businessName, setBusinessName] = useState($2);
  const [businessReg, setBusinessReg] = useState($2);
  const [busy, setBusy] = useState($2);
  const [message, setMessage] = useState<string>(''),

  const progress = $2;
    const uploaded = $2;
    const required = $2;
    const have = $2;
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = $2;
    const approved = $2;
    return Math.max(base, submitted, approved)
  }, [profile, requiredDocs]),

  async function start() {
    setBusy($2);
    setMessage($2);
    const res = await fetch('/api/kyc/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg})}),
    const data = await res.json($2);
    if (data.ok) {
      setProfile($2);
      setRequiredDocs($2);
      setOptionalDocs(data.optionalDocuments)
    } else {
      setMessage(data.error || 'Failed to start')
    }
    setBusy(false)
  }

  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = $2;
    if (!filename) return,
    setBusy($2);
    const res = await fetch('/api/kyc/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, kind, filename })}),
    const data = await res.json($2);
    if (data.ok) {
      setProfile(data.profile)
    } else {
      setMessage(data.error || 'Upload failed')
    }
    setBusy(false)
  }

  async function submit() {
    setBusy($2);
    const res = await fetch('/api/kyc/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })}),
    const data = await res.json($2);
    if (data.ok) {
      setProfile($2);
      setMessage('Submitted. AML check performed.')
    } else {
      setMessage(data.error || 'Submit failed')
    }
    setBusy(false)
  }

  const labels = getBadgeLabels($2);
  return (
    <>
      <Head>
        <title>Verify Identity - Zion</title>
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />
        <meta name="viewport" content="width=device-width, initial-scale = $2;
                  return (
                    <div key = $2;
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>

            {message && <div className="text-sm text-blue-700">{message}</div>}
          </div>
        )}
      </main>
    </>
  )
}