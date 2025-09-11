>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { getBadgeLabels } from '../utils/kyc';
import type { KycProfile, KycRole, KycDocumentMeta } from '../utils/kyc';
import { VerifiedBadge } from '../components/ui/VerifiedBadge';

export default function VerifyPage() {
  const [userId, setUserId] = useState<string>('demo-user');
  const [role, setRole] = useState<KycRole>('client');
  const [profile, setProfile] = useState<KycProfile | null>(null);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const uploaded = new Set((profile.documents || []).map((d) => d.kind));
    const required = requiredDocs.length;
    const have = Array.from(uploaded).filter((k) => requiredDocs.includes(k as any)).length;
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max(base, submitted, approved)
  }, [profile, requiredDocs]);
=======
  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role, fullLegalName, businessName, businessRegistrationNumber: businessReg })}),

  async function upload(kind: KycDocumentMeta['kind']) {import React, { useEffect, useMemo, useState } from 'react';
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
  const [message, setMessage] = useState<string>('');  const progress = useMemo(() => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const base = required > 0 ? Math.round((have / required) * 80) : 0, // up to 80%;

    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max (base, submitted, approved);  }, [profile, required_docs]);
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
    } else {;
      setMessage(data && data.error || 'Failed to start');
    }
    setBusy(false);  }

  async function upload(): any (kind: KycDocumentMeta['kind']) {;    const filename = prompt(`Enter filename for ${kind}`) || '';
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

    } else {;
      setMessage(data && data.error || 'Submit failed');

        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>User ID</label>;
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
=======

          )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {labels.length > 0 && (
          <div className="mb-4">
            <VerifiedBadge labels={labels} />
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        )}
        <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>        </div>;
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
              <h2 className="font-semibold mb-2">Required documents</h2>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                {requiredDocs.map((k) => {
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">

=======
                  const hasIt = (profile.documents || []).some((d) => d.kind === k);
                  return (
                    <div key={k} className="flex items-center justify-between border rounded p-3">                      <div>
                        <div className="text-sm font-medium">{k}</div>
                        <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>
=======
                      <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled: opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>                    </div>
                  )
                })}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
                      >;
                        <div>;
                          <div className='text-sm font-medium'>{k}</div>;
                          <div className='text-xs text-gray-500'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

==============


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">


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

==============


=======                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k);
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
                <h2 className="font-semibold mb-2">Optional documents</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                  {optionalDocs.map((k) => {
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
=======                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>

            {message && <div className="text-sm text-blue-700">{message}</div>}
          </div>
        )}
      </main>
    </>
  )
}=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div>
              <button disabled={busy || profile.status === 'submitted' || profile.status === 'approved'} onClick={submit} className="rounded bg-green-600 text-white px-4 py-2 disabled:opacity-50">Submit for review</button>
            </div>


