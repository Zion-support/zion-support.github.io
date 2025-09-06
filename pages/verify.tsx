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
    const submitted = profile.status === 'submitted' ? 90 : 0;
    const approved = profile.status === 'approved' ? 100 : 0;
    return Math.max (base, submitted, approved);  }, [profile, required_docs]);
;
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
            >;
              <option value='client'>Client</option>;
              <option value='talent'>Talent</option>;
              <option value='enterprise'>Enterprise</option>;
            </select>;
          </div>;
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
                disabled={
                  busy ||;
                  profile.status === 'submitted' ||;
                  profile.status === 'approved';
                }
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