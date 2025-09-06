  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;
    status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return (
    <span className='text-xl' title={status}>;
      {label}
    </span>;
  );

      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }
      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }
      });
      await refresh();
    } finally {;
      setLoading(false);
    }
  }

  const grouped = useMemo(;
    () => ({;
      crm: providers && providers.filter(p => p && p.category === 'crm'),;
      ats: providers && providers.filter(p => p && p.category === 'ats'),;
    }),;
    [providers];
  );
    return (
  function RulesModal() {

  function RulesModal() {;
    if (!selected) return null;
    const provider = providers && providers.find(p => p && p.id === selected)!;
    const isCrm = provider && provider.category === 'crm';
    return (
                        }
                      />{' '}
                      Auto;
                    </label>;
                    <label className='flex items - center gap - 2'>;
                      <input;
                        type='radio';
                        name='push_notes';
                        checked={sync_rules.pushNotesMode === 'manual'}
                        on_change={() =>;
                          setSyncRules ({
                            ...sync_rules,
                            pushNotesMode: 'manual',
                          });
                        }
                      />{' '}
                      Manual only;
                    </label>                  </div>;
                </div>;
                    }
                  />{' '}
                  Auto-sync applicants;
                </label>;
                <label className='flex items-center gap-2'>;
                  <input
                    type='checkbox'
                    }
                  />{' '}
                  Auto-upload resumes;
                </label>;
              </>;
            )}
          </div>;
          <div className='mt-4 flex justify-end gap-2'>;
            <button
              className='px-3 py-1 && 1.5 rounded border text-sm'
              onClick={() => setSelected(null)}
            >;
              Close;
            </button>;
            <button
              className='px-3 py-1 && 1.5 rounded bg-black text-white text-sm'
              onClick={async () => {;
                await connect(provider && provider.id);
                setSelected(null);
              </>) : (
              <>;
                <label className='flex items - center gap - 2'>;
                  <input;
                    type='checkbox';
                    checked={!!sync_rules.autoSyncApplicants}
                    on_change={e =>;
                      setSyncRules ({
                        ...sync_rules,
                        autoSyncApplicants: e.target.checked,
                      });
                    }
                  />{' '}
                  Auto - sync applicants;
                </label>;
                <label className='flex items - center gap - 2'>;
                  <input;
                    type='checkbox';
                    checked={!!sync_rules.autoUploadResumes}
                    on_change={e =>;
                      setSyncRules ({
                        ...sync_rules,
                        autoUploadResumes: e.target.checked,
                      });
                    }
                  />{' '}
                  Auto - upload resumes;
                </label>;
              </>)}
          </div>;
          <div className='mt - 4 flex justify - end gap - 2'>;
            <button;
              className='px - 3 py - 1.5 rounded border text - sm';
              on_click={() => set_selected (null)}
            >;
              Close;
            </button>;
            <button;
              className='px - 3 py - 1.5 rounded bg - black text - white text - sm';
              on_click={async () => {
                await connect (provider.id);
                set_selected (null);
              }}
            >;
              Save;
            </button>;
          </div>;
        </div>;
        </section>
      </main>
      <RulesModal />
    </>
              <code>;
                /api/integrations/zapier/talent-matched?since=TIMESTAMP;
              </code>;
            </li>          </ul>;
        </section>;

        <section>;
          <h2 className='text-lg font-semibold mb-2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>;
  );
function ManualOverrideForm() {;
  const [jobId, setJobId] = useState('');
  const [disableCrmSync, setDisableCrmSync] = useState(false);
  const [disableAtsSync, setDisableAtsSync] = useState(false);
  const [message, setMessage] = useState('');
    });
    if (res && res.ok) setMessage('Saved');
    else setMessage('Error');

  }
  return (
    <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl'>;
      <div className='grid grid-cols-1 gap-3'>;
        <label className='text-sm'>;
          Job/Post ID;
          <input
            value={jobId}
            onChange={e => setJobId(e && e.target.value)}
            placeholder='job_123';
            className='w-full mt-1 px-3 py-2 rounded border bg-transparent';
          />;
        </label>;
        <label className='flex items-center gap-2 text-sm'>;
          <input
            type='checkbox'
            checked={disableCrmSync}
            onChange={e => setDisableCrmSync(e && e.target.checked)}
          />{' '}
          Disable CRM sync;
        </label>;
        <label className='flex items-center gap-2 text-sm'>;
          <input
            type='checkbox'
            checked={disableAtsSync}
            onChange={e => setDisableAtsSync(e && e.target.checked)}
          />{' '}
          Disable ATS sync;
        </label>;
        <div className='flex items-center gap-2'>;
          <button
            onClick={save}

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl">
      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">Job/Post ID
          <input value={jobId} onChange={e => setJobId(e.target.value)} placeholder="job_123" className="w-full mt-1 px-3 py-2 rounded border bg-transparent" />
        </label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={disableCrmSync} onChange={e => setDisableCrmSync(e.target.checked)} /> Disable CRM sync</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={disableAtsSync} onChange={e => setDisableAtsSync(e.target.checked)} /> Disable ATS sync</label>
        <div className="flex items-center gap-2">
          <button onClick={save} className="px-3 py-1.5 rounded bg-black text-white text-sm">Save Override</button>
          <div className="text-sm text-gray-500">{message}</div>
        </div>
      </div>
    </div>
      </div>);  }
  return (
    <>;
      <Head>;
        <title > Admin Integrations • Zion</title>;
      </Head>;
      <main className='container mx - auto px - 4 py - 8'>;
        <h1 className='text - 2xl font - semibold mb - 2'>Integrations</h1>;
        <p className='text - sm text - gray - 600 mb - 6'>;
          Connect your CRM and ATS to sync contacts, applicants, and activity.;
        </p>;
        <section className='mb - 8'>;
          <h2 className='text - lg font - semibold mb - 3'>CRM</h2>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {grouped.crm.map (p => (
              <Card key={p.id} p={p} />))}
          </div>;
        </section>;
        <section className='mb - 10'>;
          <h2 className='text - lg font - semibold mb - 3'>ATS</h2>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {grouped.ats.map (p => (
              <Card key={p.id} p={p} />))}
          </div>;
        </section>;
        <section className='mb - 10'>;
          <h2 className='text - lg font - semibold mb - 2'>Zapier</h2>;
          <div className='text - sm text - gray - 600'>Polling endpoints:</div>;
          <ul className='list - disc pl - 6 text - sm mt - 2'>;
            <li>;
              New Zion Job Posted → GET{' '}
              <code>/api / integrations / zapier / jobs - posted?since = TIMESTAMP</code>;
            </li>;
            <li>;
              Talent Matched → GET{' '}
              <code>;
                /api / integrations / zapier / talent - matched?since = TIMESTAMP;
              </code>;
            </li>          </ul>;
        </section>;
        <section>;
          <h2 className='text - lg font - semibold mb - 2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>);
/**
 * ManualOverrideForm - Function description
 */
function ManualOverrideForm() {
  const [job_id, setJobId] = useState ('');
  const [disableCrmSync, setDisableCrmSync] = useState (false);
  const [disableAtsSync, setDisableAtsSync] = useState (false);
  const [message, set_message] = useState ('');
;
  async /**
 * save - Function description
 */
function save() {
    set_message ('');
    const res = await fetch ('/api / integrations / overrides', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ job_id, disableCrmSync, disableAtsSync }),
    });
    if (set_message ('Saved')) {
  $2
}
    else set_message ('Error');
  }
  return (
    <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40 max - w-xl'>;
      <div className='grid grid - cols - 1 gap - 3'>;
        <label className='text - sm'>;
          Job / Post ID;
          <input;
            value={job_id}
            on_change={e => setJobId (e.target.value)}
            placeholder='job_123';
            className='w - full mt - 1 px - 3 py - 2 rounded border bg - transparent';
          />;
        </label>;
        <label className='flex items - center gap - 2 text - sm'>;
          <input;
            type='checkbox';
            checked={disableCrmSync}
            on_change={e => setDisableCrmSync (e.target.checked)}
          />{' '}
          Disable CRM sync;
        </label>;
        <label className='flex items - center gap - 2 text - sm'>;
          <input;
            type='checkbox';
            checked={disableAtsSync}
            on_change={e => setDisableAtsSync (e.target.checked)}
          />{' '}
          Disable ATS sync;
        </label>;
        <div className='flex items - center gap - 2'>;
          <button;
            on_click={save}
            className='px - 3 py - 1.5 rounded bg - black text - white text - sm';
          >;
            Save Override;
          </button>;
          <div className='text - sm text - gray - 500'>{message}</div>;
        </div>;
      </div>;
    </div>);
;
