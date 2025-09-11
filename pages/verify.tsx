<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react',
import Head from 'next/head';
import { getBadgeLabels  } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
import { VerifiedBadge  } from '../components/ui/VerifiedBadge';
export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [role, setRole] = useState<KycRole>('client'),
  const [profile, setProfile] = useState<KycProfile | null>(null),
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { getBadgeLabels } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
<<<<<<< HEAD
<<<<<<< HEAD
import { VerifiedBadge } from '../components/ui/VerifiedBadge';
export default function VerifyPage(req, res) {
  try {
  const [userId, setUserId] = useState<string>('demo-user');
  const [role, setRole] = useState<KycRole>('client');
  const [profile, setProfile] = useState<KycProfile | null>(null);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { VerifiedBadge } from '../components/ui/VerifiedBadge';

export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user');
  const [role, setRole] = useState<KycRole>('client');
  const [profile, setProfile] = useState<KycProfile | null>(null);
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const uploaded = new Set((profile.documents || []).map((d) => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter((k) => requiredDocs.includes(k as any)).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved)
  }, [profile, requiredDocs]);

<<<<<<< HEAD
<<<<<<< HEAD
  const [message, setMessage] = useState<string>('');
  const progress = useMemo(() => {
    if (!profile) return 0;
    const uploaded = new Set((profile.documents |[]).map(d => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter(k =>
      requiredDocs.includes(k as any)
    ).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0; // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved);  }, [profile, requiredDocs]);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {
<<<<<<< HEAD
<<<<<<< HEAD
async function upload(kind: KycDocumentMeta['kind']) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),
<<<<<<< HEAD
const data = await res.json();
=======
    const data = await res.json();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const filename = prompt(`Enter filename for ${kind}`) |'';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, kind, filename })
    });
  const [message, setMessage] = useState<string>('');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const progress = useMemo(() => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%;

    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max (base, submitted, approved);  }, [profile, required_docs]);
;
<<<<<<< HEAD
<<<<<<< HEAD
  async /**
 * start - Function description
 */
function start() {
    set_busy (true);
    set_message ('');
    const res = await fetch ('/api / kyc / start', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({
        user_id,
        role,
        fullLegalName,
        business_name,
        businessRegistrationNumber: business_reg,
      }),
    });    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      set_profile (data.profile);
      setRequiredDocs (data.required_documents);
      setOptionalDocs (data.optional_documents);
    } else {
      set_message (data.error || 'Failed to start');
    }
    set_busy (false);  }
  async /**
 * upload - Function description
 */
function upload() {
    const filename = prompt (`Enter filename for ${kind}`) || '';
    // Check condition
if (return) {
  $2
}
    set_busy (true);
    const res = await fetch ('/api / kyc / upload', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, kind, filename }),
    });
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      set_profile (data.profile);
    } else {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function upload(kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ userId, kind, filename })}),;
<<<<<<< HEAD

    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);


    } else {;
      setMessage(data && data.error || 'Failed to start');
    }
    setBusy(false);  }
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);
    } else {
      setMessage(data.error |'Upload failed');
    }
    setBusy(false);  }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
async function submit() {
=======


  async function submit() {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
async function upload(): any (kind: KycDocumentMeta['kind']) {;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  async function upload(): any (kind: KycDocumentMeta['kind']) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


  async function submit() {
    setBusy(true);

    const res = await fetch('/api/kyc/submit', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId })
    });
    } else {;
      setMessage(data.error || 'Upload failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  async function upload(): any (kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, kind, filename }),;
    });
<<<<<<< HEAD
<<<<<<< HEAD
    } else {;
      setMessage(data && data.error || 'Submit failed');
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const data = await res && res.json();
    if (data && data.ok) {;
      setProfile(data && data.profile);
    } else {;
      setMessage(data && data.error || 'Upload failed');
    }
    setBusy(false);  }


    } else {;
      setMessage(data && data.error || 'Submit failed');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setBusy(false);  }
  const labels = getBadgeLabels(profile |undefined);
  return (
    <>;
      <Head>;
        <title>Verify Identity - Zion</title>;
        <meta
          name='description'
          content='Complete KYC/AML verification to secure marketplace trust'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
      </Head>;
      <main className='max-w-3xl mx-auto px-4 py-8'>;
        <h1 className='text-2xl font-bold mb-4'>Identity Verification</h1>;
        <p className='text-sm text-gray-600 mb-6'>;
          Guided step-by-step KYC/AML verification with progress tracking.;
        </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {labels && labels.length > 0 && (;
          <div className='mb-4'>            <VerifiedBadge labels={labels} />;
          </div>;
        )}
<<<<<<< HEAD
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>User ID</label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>User ID</label>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              className='mt-1 w-full border rounded px-3 py-2'
              value={userId}
              onChange={e => setUserId(e && e.target.value)}
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Role</label>;
            <select
              className='mt-1 w-full border rounded px-3 py-2'
              value={role}
              onChange={e => setRole(e && e.target.value as KycRole)}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      set_message (data.error || 'Upload failed');
    }
    set_busy (false);  }
  async /**
 * submit - Function description
 */
function submit() {
    set_busy (true);
    const res = await fetch ('/api / kyc / submit', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id }),
    });
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      set_profile (data.profile);
      set_message ('Submitted. AML check performed.');
    } else {
      set_message (data.error || 'Submit failed');
    }
    set_busy (false);  }
  const labels = getBadgeLabels (profile || undefined);
;
  return (
    <>;
      <Head>;
        <title > Verify Identity - Zion</title>;
        <meta;
          name='description';
          content='Complete KYC / AML verification to secure marketplace trust';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1' />;
      </Head>;
      <main className='max - w-3xl mx - auto px - 4 py - 8'>;
        <h1 className='text - 2xl font - bold mb - 4'>Identity Verification</h1>;
        <p className='text - sm text - gray - 600 mb - 6'>;
          Guided step - by - step KYC / AML verification with progress tracking.;
        </p>;
        {labels.length > 0 && (
          <div className='mb - 4'>            <VerifiedBadge labels={labels} />;
          </div>)}
        <div className='mb - 6 grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <div>;
            <label className='block text - sm font - medium'>User ID</label>;
            <input;
              className='mt - 1 w - full border rounded px - 3 py - 2';
              value={user_id}
              on_change={e => setUserId (e.target.value)}
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Role</label>;
            <select;
              className='mt - 1 w - full border rounded px - 3 py - 2';
              value={role}
              on_change={e => set_role (e.target.value as KycRole)}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              <option value='client'>Client</option>;
              <option value='talent'>Talent</option>;
              <option value='enterprise'>Enterprise</option>;
            </select>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='md:col - span - 2'>;
            <label className='block text - sm font - medium'>Full legal name</label>;
            <input;
              className='mt - 1 w - full border rounded px - 3 py - 2';
              value={fullLegalName}
              on_change={e => setFullLegalName (e.target.value)}
            />          </div>;
          {role === 'enterprise' && (
            <>;
              <div>;
                <label className='block text - sm font - medium'>;
                  Business name;
                </label>;
                <input;
                  className='mt - 1 w - full border rounded px - 3 py - 2';
                  value={business_name}
                  on_change={e => setBusinessName (e.target.value)}
                />;
              </div>;
              <div>;
                <label className='block text - sm font - medium'>;
                  Registration number;
                </label>;
                <input;
                  className='mt - 1 w - full border rounded px - 3 py - 2';
                  value={business_reg}
                  on_change={e => setBusinessReg (e.target.value)}
                />              </div>;
            </>)}
        </div>;
        <div className='mb - 6'>;
          <button;
            disabled={busy}
            on_click={start}
            className='rounded bg - blue - 600 text - white px - 4 py - 2 disabled:opacity - 50';
          >;
            Start / Update;
          </button>;
        </div>;
        {profile && (
          <div className='space - y-6'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <span className='text - sm text - gray - 600'>Progress</span>;
                <span className='text - sm font - medium'>;
                  {progress}% {profile.status === 'submitted' && '→ Pending ID'}{' '}
                  {profile.status === 'approved' && '→ Approved'}
                </span>;
              </div>;
              <div className='w - full bg - gray - 100 rounded h - 3 overflow - hidden'>;
                <div;
                  className='bg - blue - 600 h - 3';
                  style={{ width: `${progress}%` }}

  const [message, setMessage] = useState<string>('');
  const progress = useMemo(() => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%;
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved);
  }, [profile, requiredDocs]),;
  async function start() {;
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),;
    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);
      setRequiredDocs(data.requiredDocuments);
      setOptionalDocs(data.optionalDocuments);
    } else {;
      setMessage(data.error || 'Failed to start');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    setBusy(false);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
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
    } else {
      setMessage(data.error |'Upload failed');
    }
    setBusy(false);  }
  async function submit() {
    setBusy(true);
    const res = await fetch('/api/kyc/submit', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId })
    });
    } else {;
      setMessage(data.error || 'Upload failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    setBusy(false);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  async function submit() {;
    setBusy(true);
    const res = await fetch('/api/kyc/submit', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ userId })}),;
    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);
      setMessage('Submitted. AML check performed.');
    } else {
      setMessage(data.error |'Submit failed');
    }
    setBusy(false);  }
  const labels = getBadgeLabels(profile |undefined);
    } else {;
      setMessage(data.error || 'Submit failed');
    } else {;
      setMessage(data.error || 'Submit failed');
    }
    setBusy(false);  }

  const labels = getBadgeLabels(profile || undefined);

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    setBusy(false);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const labels = getBadgeLabels(profile || undefined),
  return (
    <>
      <Head>
        <title>Verify Identity - Zion</title>
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Identity Verification</h1>
        <p className='text-sm text-gray-600 mb-6'>
          Guided step-by-step KYC/AML verification with progress tracking.
        </p>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Identity Verification</h1>
        <p className="text-sm text-gray-600 mb-6">Guided step-by-step KYC/AML verification with progress tracking.</p>
=======

          )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {labels.length > 0 && (
          <div className="mb-4">
            <VerifiedBadge labels={labels} />
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
        )}
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        )}
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          </div>
          {role === 'enterprise' && (
            <>
              <div>
                <label className="block text-sm font-medium">Business name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
              </div>
              <div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <label className='block text-sm font-medium'>
                  Registration number
                </label>
                <input
                  className='mt-1 w-full border rounded px-3 py-2'
                  value={businessReg}
                  onChange={e => setBusinessReg(e.target.value)}
                />              </div>
            </>
          )}
        </div>
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <label className="block text-sm font-medium">Registration number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />
              </div>
            </>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}
        </div>
<div className="mb-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
        <div className="mb-6">
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>
        </div>
=======
          )}
        </div>

        <div className="mb-6">
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>
        </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {profile && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{progress}% {profile.status === 'submitted' && '→ Pending ID'} {profile.status === 'approved' && '→ Approved'}</span>
              </div>
              <div className="w-full bg-gray-100 rounded h-3 overflow-hidden">
                <div className="bg-blue-600 h-3" style={{ width: `${progress}%` }} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
<<<<<<< HEAD
            </div>
            <section>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              <h2 className="font-semibold mb-2">Required documents</h2>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                {requiredDocs.map((k) => {
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">
<<<<<<< HEAD
              </div>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            <section>
              <h2 className='font-semibold mb-2'>Required documents</h2>
              <div className='grid grid-cols-1 md: grid-cols-2 gap-2'>
                {requiredDocs.map(k => {
                  const hasIt = (profile.documents |[]).some(
                    d => d.kind === k
                  );
                    >
              <h2 className="font-semibold mb-2">Required documents</h2>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                {requiredDocs.map((k) => {
<<<<<<< HEAD
                  const hasIt = (profile.documents || []).some((d) => d.kind === k),
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div>
                        <div className="text-sm font-medium">{k}</div>
                        <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled: opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>

=======
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled: opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                  )
                })}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
            </section>
{optionalDocs.length > 0 && (
              <section>


              </div>;
            </section>;
            {optionalDocs && optionalDocs.length > 0 && (;
              <section>;
                <h2 className='font-semibold mb-2'>Optional documents</h2>;
                <div className='grid grid-cols-1 md: grid-cols-2 gap-2'>;
                  {optionalDocs && optionalDocs.map(k => {;
                    const hasIt = (profile && profile.documents || []).some(;
                      d => d && d.kind === k;
                    );
=======
              </div>
            </section>
            {optionalDocs.length > 0 && (
              <section>
                <h2 className='font-semibold mb-2'>Optional documents</h2>
                <div className='grid grid-cols-1 md: grid-cols-2 gap-2'>
                  {optionalDocs.map(k => {
                    const hasIt = (profile.documents |[]).some(
                      d => d.kind === k
                    );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >;
                        <div>;
                          <div className='text-sm font-medium'>{k}</div>;
                          <div className='text-xs text-gray-500'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {hasIt ? 'Uploaded' : 'Optional'}
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
                    );                  })}
                </div>;
              </section>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>



<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )
;
  const labels = getBadgeLabels(profile || undefined);
  return (;
    <>;
      <Head>;
        <title>Verify Identity - Zion</title>;
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;
      <main className="max-w-3xl mx-auto px-4 py-8">;
        <h1 className="text-2xl font-bold mb-4">Identity Verification</h1>;
        <p className="text-sm text-gray-600 mb-6">Guided step-by-step KYC/AML verification with progress tracking.</p>;
        {labels.length > 0 && (;
          <div className="mb-4">;
            <VerifiedBadge labels={labels} />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm font-medium">User ID</label>;
            <input className="mt-1 w-full border rounded px-3 py-2" value={userId} onChange={(e) => setUserId(e.target.value)} />;
          </div>;
          <div>;
            <label className="block text-sm font-medium">Role</label>;
            <select className="mt-1 w-full border rounded px-3 py-2" value={role} onChange={(e) => setRole(e.target.value as KycRole)}>;
              <option value="client">Client</option>;
              <option value="talent">Talent</option>;
              <option value="enterprise">Enterprise</option>;
            </select>;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm font-medium">Full legal name</label>;
            <input className="mt-1 w-full border rounded px-3 py-2" value={fullLegalName} onChange={(e) => setFullLegalName(e.target.value)} />;
          </div>;
          {role === 'enterprise' && (;
            <>;
              <div>;
                <label className="block text-sm font-medium">Business name</label>;
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />;
              </div>;
              <div>;
                <label className="block text-sm font-medium">Registration number</label>;
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />;
              </div>;
            </>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
        <div className="mb-6">;
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>;
        </div>;
        {profile && (;
          <div className="space-y-6">;

            <div>;
              <button
                disabled={
                  busy ||
                  profile && profile.status === 'submitted' ||
                  profile && profile.status === 'approved'
                }
                onClick={submit}
                className='rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50'>;
                Submit for review;
              </button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            {message && <div className='text-sm text-blue-700'>{message}</div>}          </div>;
        )}
      </main>;
    </>;
  );
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k);
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
<<<<<<< HEAD
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                    </div>
                  )
                })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
            </section>
            {optionalDocs.length > 0 && (
              <section>
                <h2 className='font-semibold mb-2'>Optional documents</h2>
                <div className='grid grid-cols-1 md: grid-cols-2 gap-2'>
                  {optionalDocs.map(k => {
                    const hasIt = (profile.documents |[]).some(
                      d => d.kind === k
                    );
                      >

                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
<<<<<<< HEAD
                    );                  })}
                </div>
              </section>
            )}
            <div>
              <button
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                />              </div>;
            </div>;
            <section>;
              <h2 className='font - semibold mb - 2'>Required documents</h2>;
              <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 2'>;
                {required_docs.map (key => {
                  const has_it = (profile.documents || []).some (
                    d => d.kind === k);
;
                    >;
                      <div>;
                        <div className='text - sm font - medium'>{k}</div>;
                        <div className='text - xs text - gray - 500'>;
                          {has_it ? 'Uploaded' : 'Missing'}
                        </div>;
                      </div>;
                      <button;
                        disabled={busy}
                        on_click={() => upload (k)}
                        className='text - sm px - 3 py - 1 rounded bg - gray - 900 text - white disabled:opacity - 50';
                      >;
                        {has_it ? 'Replace' : 'Upload'}
                      </button>;
                    </div>);                })}
              </div>;
            </section>;
            {optional_docs.length > 0 && (
              <section>;
                <h2 className='font - semibold mb - 2'>Optional documents</h2>;
                <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 2'>;
                  {optional_docs.map (key => {
                    const has_it = (profile.documents || []).some (
                      d => d.kind === k);
;
                      >;
                        <div>;
                          <div className='text - sm font - medium'>{k}</div>;
                          <div className='text - xs text - gray - 500'>;
                            {has_it ? 'Uploaded' : 'Optional'}
                          </div>;
                        </div>;
                        <button;
                          disabled={busy}
                          on_click={() => upload (k)}
                          className='text - sm px - 3 py - 1 rounded bg - gray - 900 text - white disabled:opacity - 50';
                        >;
                          {has_it ? 'Replace' : 'Upload'}
                        </button>;
                      </div>);                  })}
                </div>;
              </section>)}
            <div>;
              <button;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                disabled={
                  busy ||;
                  profile.status === 'submitted' ||;
                  profile.status === 'approved';
                }
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={submit}
                className='rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50'
              >
                Submit for review
              </button>
            </div>
            {message && <div className='text-sm text-blue-700'>{message}</div>}          </div>
        )}
      </main>
    </>
);

                    )
;
  const labels = getBadgeLabels(profile || undefined);
  return (;
    <>;
      <Head>;
        <title>Verify Identity - Zion</title>;
        <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;
      <main className="max-w-3xl mx-auto px-4 py-8">;
        <h1 className="text-2xl font-bold mb-4">Identity Verification</h1>;
        <p className="text-sm text-gray-600 mb-6">Guided step-by-step KYC/AML verification with progress tracking.</p>;
        {labels.length > 0 && (;
          <div className="mb-4">;
            <VerifiedBadge labels={labels} />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm font-medium">User ID</label>;
            <input className="mt-1 w-full border rounded px-3 py-2" value={userId} onChange={(e) => setUserId(e.target.value)} />;
          </div>;
          <div>;
            <label className="block text-sm font-medium">Role</label>;
            <select className="mt-1 w-full border rounded px-3 py-2" value={role} onChange={(e) => setRole(e.target.value as KycRole)}>;
              <option value="client">Client</option>;
              <option value="talent">Talent</option>;
              <option value="enterprise">Enterprise</option>;
            </select>;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm font-medium">Full legal name</label>;
            <input className="mt-1 w-full border rounded px-3 py-2" value={fullLegalName} onChange={(e) => setFullLegalName(e.target.value)} />;
          </div>;
          {role === 'enterprise' && (;
            <>;
              <div>;
                <label className="block text-sm font-medium">Business name</label>;
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />;
              </div>;
              <div>;
                <label className="block text-sm font-medium">Registration number</label>;
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />;
              </div>;
            </>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
        <div className="mb-6">;
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>;
        </div>;
        {profile && (;
          <div className="space-y-6">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <span className="text-sm text-gray-600">Progress</span>;
                <span className="text-sm font-medium">{progress}% {profile.status === 'submitted' && '→ Pending ID'} {profile.status === 'approved' && '→ Approved'}</span>;
              </div>;
              <div className="w-full bg-gray-100 rounded h-3 overflow-hidden">;
                <div className="bg-blue-600 h-3" style={{ width: `${progress}%` }} />;
              </div>;
            </div>;
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                on_click={submit}
                className='rounded bg - green - 600 text - white px - 4 py - 2 disabled:opacity - 50';
              >;
                Submit for review;
              </button>;
            </div>;
            {message && <div className='text - sm text - blue - 700'>{message}</div>}          </div>)}
      </main>;
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section>;
              <h2 className="font-semibold mb-2">Required documents</h2>;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">;
                {requiredDocs.map((k) => {;
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (;
                    <div key={k} className="flex items-center justify-between border rounded p-3">;
                      <div>;
                        <div className="text-sm font-medium">{k}</div>;
                        <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Missing'}</div>;
                      </div>;
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>;
                    </div>;
                  );
                })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </section>;
            {optionalDocs.length > 0 && (;
              <section>;
                <h2 className="font-semibold mb-2">Optional documents</h2>;
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">;
                  {optionalDocs.map((k) => {;
                    const hasIt = (profile.documents || []).some((d) => d.kind === k);
                    return (;
                      <div key={k} className="flex items-center justify-between border rounded p-3">;
                        <div>;
                          <div className="text-sm font-medium">{k}</div>;
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>;
                        </div>;
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>;
                      </div>;
                    );
                  })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </section>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>


<<<<<<< HEAD
<<<<<<< HEAD
            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>
            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>
            {message && <div className='text-sm text-blue-700'>{message}</div>}          </div>
        )}
      </main>
    </>
);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {message && <div className="text-sm text-blue-700">{message}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
