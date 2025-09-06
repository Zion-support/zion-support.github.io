
=======

  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);

  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {

=======
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

  async function upload(): any (kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, kind, filename }),;
    });

    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);

    const data = await res.json();
    if (data.ok) {;
      setProfile(data.profile);
      setMessage('Submitted. AML check performed.');

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

        {labels.length > 0 && (
          <div className="mb-4">
            <VerifiedBadge labels={labels} />
          </div>

=======

        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                <label className="block text-sm font-medium">Registration number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" value={businessReg} onChange={(e) => setBusinessReg(e.target.value)} />
              </div>
            </>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </div>
            </div>
            <section>

                      <div>
                        <div className="text-sm font-medium">{k}</div>
                        <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Missing'}</div>
                      </div>

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
                      >;
                        <div>;
                          <div className='text-sm font-medium'>{k}</div>;
                          <div className='text-xs text-gray-500'>;

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


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
<<<<<<< HEAD
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
