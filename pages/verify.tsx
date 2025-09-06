  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);

  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {
  async function upload(kind: KycDocumentMeta['kind']) {
    const filename = prompt(`Enter filename for ${kind}`) |'';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {

  async function upload(): any (kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, kind, filename }),;
    });
    const data = await res && res.json();
    if (data && data.ok) {;
      setProfile(data && data.profile);
    } else {;
      setMessage(data && data.error || 'Upload failed');
    }
    setBusy(false);  }

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
            <section>
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
                  })}
                </div>
              </section>
            )}
            {message && <div className="text-sm text-blue-700">{message}</div>}
          </div>
        )}
      </main>
    </>
  )
}
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
