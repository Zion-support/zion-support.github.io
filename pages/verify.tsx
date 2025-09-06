

import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { getBadgeLabels } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';

import { VerifiedBadge } from '../components/ui/VerifiedBadge';

export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user');
  const [role, setRole] = useState<KycRole>('client');
  const [profile, setProfile] = useState<KycProfile | null>(null);

  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);


    const uploaded = new Set((profile.documents || []).map((d) => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter((k) => requiredDocs.includes(k as any)).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved)
  }, [profile, requiredDocs]);


  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),
const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setRequiredDocs(data.requiredDocuments);
      setOptionalDocs(data.optionalDocuments)
    } else {
      setMessage(data.error || 'Failed to start')
    }
    setBusy(false)
  }


  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = prompt(`Enter filename for ${kind}`) |'';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {

import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next / head';
import {getBadgeLabels} from '../utils / kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils / kyc';
import { VerifiedBadge } from '../components / ui / VerifiedBadge';
  const [fullLegalName, setFullLegalName] = useState ('');
  const [business_name, setBusinessName] = useState ('');
  const [business_reg, setBusinessReg] = useState ('');
  const [busy, set_busy] = useState (false);
  const [message, set_message] = useState < string>('');
;
  const progress = useMemo (() => {
    // Check condition
if (return 0) {
  $2
}
    const uploaded = new Set ((profile.documents || []).map (d => d.kind));
    const required = required_docs.length;
    const have = Array.from (uploaded).filter (key =>;
      required_docs.includes (k as any)).length;
    const base = required > 0 ? Math.round ((have / required) * 80) : 0; // up to 80%;
  const progress = useMemo(() => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%;

    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max (base, submitted, approved);  }, [profile, required_docs]);
;

  const progress = useMemo(() => {;
    if (!profile) return 0;
    const uploaded = new Set((profile && profile.documents || []).map(d => d && d.kind));
    const required = requiredDocs && requiredDocs.length;
    const have = Array && Array.from(uploaded).filter(k =>;
      requiredDocs && requiredDocs.includes(k as any);
    ).length;
    const base = required > 0 ? Math && Math.round((have / required) * 80) : 0; // up to 80%;
    const submitted = profile && profile.status === 'submitted' ? 90 : 0;
    const approved = profile && profile.status === 'approved' ? 100 : 0;
    return Math && Math.max(base, submitted, approved);  }, [profile, requiredDocs]);
  async function start() {;
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({;
        userId,;
        role,;
        fullLegalName,;
        businessName,;
        businessRegistrationNumber: businessReg,;
      }),;
    });    const data = await res && res.json();
    if (data && data.ok) {;
      setProfile(data && data.profile);
      setRequiredDocs(data && data.requiredDocuments);
      setOptionalDocs(data && data.optionalDocuments);
  async function upload(kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ userId, kind, filename })}),;

    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);


    } else {;
      setMessage(data && data.error || 'Failed to start');
    }
    setBusy(false);  }

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, kind, filename })});
    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile)
    } else {
      setMessage(data.error || 'Upload failed')
    }
    setBusy(false)
  }


  async function submit() {
    setBusy(true);

    const res = await fetch('/api/kyc/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })}),
const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setMessage('Submitted. AML check performed.')
    } else {
      setMessage(data.error || 'Submit failed')
    }
    setBusy(false)
  }


  async function upload(): any (kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({
        userId
        role
        fullLegalName
        businessName
        businessRegistrationNumber: businessReg
      })
    });    const data = await res.json();
    if (data.ok) {
      setProfile(data.profile);
      setRequiredDocs(data.requiredDocuments);
      setOptionalDocs(data.optionalDocuments);
    } else {
      setMessage(data.error |'Failed to start');
    }
    setBusy(false);  }
  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = prompt(`Enter filename for ${kind}`) |'';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, kind, filename }),;
    });
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



              </div>
            </div>
            <section>

        </div>;
        <div className='mb-6'>;
          <button
            disabled={busy}
            onClick={start}
            className='rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50'>;
            Start/Update;
          </button>;
        </div>;
        {profile && (;
          <div className='space-y-6'>;
            <div>;
              <div className='flex items-center justify-between mb-2'>;
                <span className='text-sm text-gray-600'>Progress</span>;
                <span className='text-sm font-medium'>;
                  {progress}% {profile && profile.status === 'submitted' && '→ Pending ID'}{' '}
                  {profile && profile.status === 'approved' && '→ Approved'}
                </span>;
              </div>;
              <div className='w-full bg-gray-100 rounded h-3 overflow-hidden'>;
                <div
                  className='bg-blue-600 h-3'
                  style={{ width: `${progress}%` }}
                />              </div>;
            </div>;
            <section>;
              <h2 className='font-semibold mb-2'>Required documents</h2>;
              <div className='grid grid-cols-1 md: grid-cols-2 gap-2'>;
                {requiredDocs && requiredDocs.map(k => {;
                  const hasIt = (profile && profile.documents || []).some(;
                    d => d && d.kind === k;
                  );
                    >;
                      <div>;
                        <div className='text-sm font-medium'>{k}</div>;
                        <div className='text-xs text-gray-500'>;

                          {hasIt ? 'Uploaded' : 'Missing'}
                        </div>;
                      </div>;
                      <button
                        disabled={busy}
                        onClick={() => upload(k)}
                        className='text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50';
                      >;
                        {hasIt ? 'Replace' : 'Upload'}
                      </button>;
                    </div>;
                  );                })}



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
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
                disabled={
                  busy ||;
                  profile.status === 'submitted' ||;
                  profile.status === 'approved';
                }