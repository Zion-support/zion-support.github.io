  const [requiredDocs, setRequiredDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [optionalDocs, setOptionalDocs] = useState<KycDocumentMeta['kind'][]>([]);
  const [fullLegalName, setFullLegalName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessReg, setBusinessReg] = useState('');
  const [busy, setBusy] = useState(false);
  async function start() {
    setBusy(true);
    setMessage('');
    const res = await fetch('/api/kyc/start', {

  async function upload(): any (kind: KycDocumentMeta['kind']) {;
    const filename = prompt(`Enter filename for ${kind}`) || '';
    if (!filename) return;
    setBusy(true);
    const res = await fetch('/api/kyc/upload', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
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
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Identity Verification</h1>
        <p className='text-sm text-gray-600 mb-6'>
          Guided step-by-step KYC/AML verification with progress tracking.
        </p>
            >;
              <option value='client'>Client</option>;
              <option value='talent'>Talent</option>;
              <option value='enterprise'>Enterprise</option>;
            </select>;
          </div>;

          )}

        {labels.length > 0 && (
          <div className="mb-4">
            <VerifiedBadge labels={labels} />
          </div>
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          )}
        </div>

        <div className="mb-6">
          <button disabled={busy} onClick={start} className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50">Start/Update</button>
        </div>

        {profile && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
              </div>
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
                })}
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
                    const hasIt = (profile.documents || []).some((d) => d.kind === k),
                    return (
                      <div key={k} className="flex items-center justify-between border rounded p-3">
                        <div>
                          <div className="text-sm font-medium">{k}</div>
                          <div className="text-xs text-gray-500">{hasIt ? 'Uploaded' : 'Optional'}</div>
                        </div>
                        <button disabled={busy} onClick={() => upload(k)} className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50">{hasIt ? 'Replace' : 'Upload'}</button>
                      </div>
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
                  busy |
                  profile.status === 'submitted' |
                  profile.status === 'approved'
                }
                onClick={submit}
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
