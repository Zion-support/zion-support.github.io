

  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;

  return ('
    <span className='text-xl' title={status}>;
      {label}
    </span>;
  );
'
import Head from 'next/head';'
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string }
interface ConnectionMap { [providerId: string]: any }


interface ConnectionMap {;
  [key: string]: boolean,;


'
import Head from 'next/head';'
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string   } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
interface ConnectionMap { [providerId: string]: any   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
function StatusIcon() { return null; }
  return <span className="text-xl" title={status}>{label}</span>;
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


export default function AdminIntegrationsPage() {};
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

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
'
  const [syncRules, setSyncRules] = useState<any>({ autoCreateContacts: true, pushNotesMode: 'auto', autoSyncApplicants: true, autoUploadResumes: true });
  async function refresh() {}
    const [p, s] = await Promise.all(['
      fetch('/api/integrations/providers').then(r => r.json()),'
      fetch('/api/integrations/status').then(r => r.json())
    ]);
    setProviders(p.providers || []);
    setConnections(s.connections || {});
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => { refresh(); }, []);
  async function connect(providerId: string) {}
    setLoading(true);
    try {}
      // Open mock oauth popup'
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700');
      await new Promise(r => setTimeout(r, 500));'
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) });
      await refresh();




  function Card() { return null; }
    const conn = connections[p.id] |{ status: 'disconnected' }'
    const isConnected = conn.status === 'connected';

    return (


  function RulesModal() {}
  function RulesModal() { return null; }
                        }'
                      />{' '}
                      Auto;
                    </label>;
'
                    <label className='flex items - center gap - 2'>;
                      <input;'
                        type='radio';'
                        name='push_notes';'
                        checked={sync_rules.pushNotesMode === 'manual'}
                        on_change={() =>;
                          setSyncRules ({}
                            ...sync_rules,'
                            pushNotesMode: 'manual',
                          });
                        }'
                      />{' '}

                    }'
                  />{' '}
                  Auto-sync applicants;
                </label>;'
                <label className='flex items-center gap-2'>;
                  <input'
                    type='checkbox'



        </section>





        </section>

        <section>"
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />


        </section>
      </main>
      <RulesModal />
    </>


        <section>;'
          <h2 className='text-lg font-semibold mb-2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>;




  );
function ManualOverrideForm() { return null; }
  }




  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
function ManualOverrideForm() { return null; }
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) }),'
    if (res.ok) setMessage('Saved'), else setMessage('Error'),
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}




  return (


  return (

"
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl">"
      <div className="grid grid-cols-1 gap-3">"
        <label className="text-sm">Job/Post ID"
          <input value={jobId} onChange={e => setJobId(e.target.value)} placeholder="job_123" className="w-full mt-1 px-3 py-2 rounded border bg-transparent" />
        </label>"
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={disableCrmSync} onChange={e => setDisableCrmSync(e.target.checked)} /> Disable CRM sync</label>"
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={disableAtsSync} onChange={e => setDisableAtsSync(e.target.checked)} /> Disable ATS sync</label>"
        <div className="flex items-center gap-2">"
          <button onClick={save} className="px-3 py-1.5 rounded bg-black text-white text-sm">Save Override</button>"
          <div className="text-sm text-gray-500">{message}</div>
        </div>
      </div>
    </div>

      </div>);  }
  return (
    <>;
      <Head>;
        <title > Admin Integrations • Zion</title>;
      </Head>;'
      <main className='container mx - auto px - 4 py - 8'>;'
        <h1 className='text - 2xl font - semibold mb - 2'>Integrations</h1>;'
        <p className='text - sm text - gray - 600 mb - 6'>;
          Connect your CRM and ATS to sync contacts, applicants, and activity.;
        </p>;'
        <section className='mb - 8'>;'
          <h2 className='text - lg font - semibold mb - 3'>CRM</h2>;'
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {grouped.crm.map (p => (
              <Card key={p.id} p={p} />))}
          </div>;
        </section>;'
        <section className='mb - 10'>;'
          <h2 className='text - lg font - semibold mb - 3'>ATS</h2>;'
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {grouped.ats.map (p => (
              <Card key={p.id} p={p} />))}
          </div>;
        </section>;'
        <section className='mb - 10'>;'
          <h2 className='text - lg font - semibold mb - 2'>Zapier</h2>;'
          <div className='text - sm text - gray - 600'>Polling endpoints:</div>;'
          <ul className='list - disc pl - 6 text - sm mt - 2'>;
            <li>;'
              New Zion Job Posted → GET{' '}
              <code>/api / integrations / zapier / jobs - posted?since = TIMESTAMP</code>;
            </li>;
            <li>;'
              Talent Matched → GET{' '}
              <code>;
                /api / integrations / zapier / talent - matched?since = TIMESTAMP;
              </code>;
            </li>          </ul>;
        </section>;
        <section>;'
          <h2 className='text - lg font - semibold mb - 2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>);
/**
 * ManualOverrideForm - Function description;
 */
function ManualOverrideForm() { return null; }
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ job_id, disableCrmSync, disableAtsSync }),
    });'
    if (set_message ('Saved')) {}
  $2;
}'
    else set_message ('Error');
  }
  return ('
    <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40 max - w-xl'>;'
      <div className='grid grid - cols - 1 gap - 3'>;'
        <label className='text - sm'>;
          Job / Post ID;
          <input;
            value={job_id}
            on_change={e => setJobId (e.target.value)}'
            placeholder='job_123';'
            className='w - full mt - 1 px - 3 py - 2 rounded border bg - transparent';
          />;
        </label>;'
        <label className='flex items - center gap - 2 text - sm'>;
          <input;'
            type='checkbox';
            checked={disableCrmSync}
            on_change={e => setDisableCrmSync (e.target.checked)}'
          />{' '}
          Disable CRM sync;
        </label>;'
        <label className='flex items - center gap - 2 text - sm'>;
          <input;'
            type='checkbox';
            checked={disableAtsSync}
            on_change={e => setDisableAtsSync (e.target.checked)}'
          />{' '}
          Disable ATS sync;
        </label>;'
        <div className='flex items - center gap - 2'>;
          <button;
            on_click={save}'
            className='px - 3 py - 1.5 rounded bg - black text - white text - sm';
          >;
            Save Override;
          </button>;'
          <div className='text - sm text - gray - 500'>{message}</div>;
        </div>;
      </div>;
    </div>);
;






}
}
}
}
}
}


  ),
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"`