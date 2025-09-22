import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';

  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;
:pages_backup/admin/integrations.tsx
  return (

  return ('
    <span className='text-xl' title={status}>;
      {label}
    </span>;
  );
:pages_backup/admin/integrations.tsx
import Head from 'next/head';
'
import Head from 'next/head';'
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string }
interface ConnectionMap { [providerId: string]: any }

interface ConnectionMap {;
  [key: string]: boolean,;

:pages_backup/admin/integrations.tsx
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string   } catch (error) {
    console.error("Error:", error);
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
:pages_backup/admin/integrations.tsx
export default function AdminIntegrationsPage() {
import React, { useState } from 'react';
import Head from 'next/head';
  [key: string]: boolean;

const AdminIntegrationsPage: React.FC = () => {
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
:pages_backup/admin/integrations.tsx
  const [syncRules, setSyncRules] = useState<any>({ autoCreateContacts: true, pushNotesMode: 'auto', autoSyncApplicants: true, autoUploadResumes: true }),
  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json());
      fetch('/api/integrations/status').then(r => r.json())]);
    setProviders(p.providers || []);
    setConnections(s.connections || {})
  }

  async function connect(providerId: string) {

      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }

:pages_backup/admin/integrations.tsx
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700');
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) });
      await refresh()
    } finally { setLoading(false) }
  }

  async function disconnect(providerId: string) {
    setLoading(true)
    try {
      // Open mock oauth popup

import Head from 'next/head';
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
interface ConnectionMap { [providerId: string]: any   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function StatusIcon({ status }: { status: 'connected' | 'warning' | 'disconnected' }) {
  const label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return <span className="text-xl" title={status}>{label}</span>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function AdminIntegrationsPage() {
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

const [syncRules, setSyncRules] = useState<any>({
    autoCreateContacts: true,
    pushNotesMode: 'auto',
    autoSyncApplicants: true,
    autoUploadResumes: true,
  });
  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json())
      fetch('/api/integrations/status').then(r => r.json())
    ]);
    setProviders(p.providers |[]);
    setConnections(s.connections |{});
  }
  useEffect(() => {
    refresh();
  }, []);

  async function connect(providerId: string) {
    setLoading(true)
    try {
      // Open mock oauth popup
window.open(
        `/api/integrations/oauth/${providerId}/start`,
        'oauth',
        'width=500,height=700'
      );
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ providerId, syncRules })
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }


  async function resync(): any (providerId: string) {;
    setLoading(true),;
    try {;
      await fetch('/api/integrations/resync', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId }),;

    }
  }

  async function disconnect(providerId: string) {
    setLoading(true)
    try {
await fetch('/api/integrations/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      await refresh();
    } finally {;
      setLoading(false);
    }
  }

  async function resync(providerId: string) {
    setLoading(true)
    try {
await fetch('/api/integrations/resync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      await refresh();
    } finally {;
      setLoading(false);
    }
  }
:pages_backup/admin/integrations.tsx
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
:pages_backup/admin/integrations.tsx
    } finally {
      setLoading(false);
    }  }
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  async function disconnect(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/disconnect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) });
      await refresh();
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) });
      await refresh();
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const grouped = useMemo(() => ({
    crm: providers.filter(p => p.category === 'crm'),
    ats: providers.filter(p => p.category === 'ats')
  }), [providers]);

const grouped = useMemo(
    () => ({
      crm: providers.filter(p => p.category === 'crm'),
      ats: providers.filter(p => p.category === 'ats'),
    }),
    [providers]
  );
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  async function disconnect(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/disconnect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) });
      await refresh();
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) });
      await refresh();
    } finally { setLoading(false);   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const grouped = useMemo(() => ({
    crm: providers.filter(p => p.category === 'crm'),
    ats: providers.filter(p => p.category === 'ats')
  }), [providers]);
function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] |{ status: 'disconnected' }
    const isConnected = conn.status === 'connected';


  function Card() { return null; }
    const conn = connections[p.id] |{ status: 'disconnected' }'
    const isConnected = conn.status === 'connected';
:pages_backup/admin/integrations.tsx
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">{p.name.slice(0,2)}</div>
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{p.description}</div>
            <div>
              <div className='font-semibold'>{p.name}</div>
              <div className='text-xs text-gray-500'>{p.description}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
          <StatusIcon status={conn.status} />
        </div>
        <div className="flex items-center gap-2">
          {!isConnected && (
            <button onClick={() => connect(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-black text-white text-sm">Connect</button>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

              <button onClick={() => resync(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Resync Now</button>
              <button onClick={() => setSelected(p.id)} className="px-3 py-1.5 rounded border text-sm">Configure</button>
              <button onClick={() => disconnect(p.id)} disabled={loading} className="px-3 py-1.5 rounded border text-sm">Disconnect</button>
            </>
<div className='flex items-center gap-2'>
          {!isConnected && (
            <button
              onClick={() => connect(p.id)}
              disabled={loading}
              className='px-3 py-1.5 rounded bg-black text-white text-sm'
            >
              Connect
            </button>
          )}
          {isConnected && (
            <>
              <button
                onClick={() => resync(p.id)}
                disabled={loading}
                className='px-3 py-1.5 rounded bg-blue-600 text-white text-sm'
              >
                Resync Now
              </button>
              <button
                onClick={() => setSelected(p.id)}
                className='px-3 py-1.5 rounded border text-sm'
              >
                Configure
              </button>
              <button
                onClick={() => disconnect(p.id)}
                disabled={loading}
                className='px-3 py-1.5 rounded border text-sm'
              >
                Disconnect
              </button>
            </>
          )}
        </div>
      </div>
);
  }

  function RulesModal() {
    if (!selected) return null,
    const provider = providers.find(p => p.id === selected)!,
    const isCrm = provider.category === 'crm',
return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {isCrm ? (
              <>

                  <div className="mb-1">Push notes:</div>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={syncRules.pushNotesMode === 'auto'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'auto' })} /> Auto</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={syncRules.pushNotesMode === 'manual'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'manual' })} /> Manual only</label>
                  </div>

                </div>
              </>
            ) : (
              <>

              </>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button className="px-3 py-1.5 rounded border text-sm" onClick={() => setSelected(null)}>Close</button>
            <button className="px-3 py-1.5 rounded bg-black text-white text-sm" onClick={async () => { await connect(provider.id), setSelected(null), }}>Save</button>
          </div>
        </div>
      </div>

      <Head><title>Admin Integrations • Zion</title></Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-sm text-gray-600 mb-6">Connect your CRM and ATS to sync contacts, applicants, and activity.</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Zapier</h2>
          <div className="text-sm text-gray-600">Polling endpoints: </div>
          <ul className="list-disc pl-6 text-sm mt-2">
            <li>New Zion Job Posted → GET <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code></li>
            <li>Talent Matched → GET <code>/api/integrations/zapier/talent-matched?since=TIMESTAMP</code></li>
          </ul>

  const grouped = useMemo(;
    () => ({;
      crm: providers && providers.filter(p => p && p.category === 'crm'),;
      ats: providers && providers.filter(p => p && p.category === 'ats'),;
    }),;
    [providers];
  );

  function Card(): any ({ p }: { p: ProviderMeta }) {;
    const conn = connections[p && p.id] || { status: 'disconnected' };
    const isConnected = conn && conn.status === 'connected';
    return (

  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }

  const grouped = useMemo(;
    () => ({;
      crm: providers && providers.filter(p => p && p.category === 'crm'),;
      ats: providers && providers.filter(p => p && p.category === 'ats'),;
    }),;
    [providers];
  );
function Card(): any ({ p }: { p: ProviderMeta }) {;
    const conn = connections[p && p.id] || { status: 'disconnected' };
    const isConnected = conn && conn.status === 'connected';
    return (

  function RulesModal() {

  function RulesModal() {;
    if (!selected) return null;
    const provider = providers && providers.find(p => p && p.id === selected)!;
    const isCrm = provider && provider.category === 'crm';
    return (

<div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
        <div className='w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800'>
          <div className='font-semibold mb-2'>Sync Rules — {provider.name}</div>
          <div className='space-y-3 text-sm'>
            {isCrm ? (
              <>
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!!syncRules.autoCreateContacts}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules
                        autoCreateContacts: e.target.checked
                      })
                    }
                  />{' '}
                  Auto-create contacts
                </label>
                <div>
                  <div className='mb-1'>Push notes:</div>
                  <div className='flex gap-3'>
                    <label className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='pushNotes'
                        checked={syncRules.pushNotesMode === 'auto'}
                        onChange={() =>
                          setSyncRules({ ...syncRules, pushNotesMode: 'auto' })
                        }
                      />{' '}
                      Auto;
                    </label>;

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
:pages_backup/admin/integrations.tsx
                        }
                      />{' '}
:pages/admin/integrations.tsx
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
                      Manual only
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
<label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!!syncRules.autoSyncApplicants}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules
                        autoSyncApplicants: e.target.checked
                      })
                    }
                        }'
                      />{' '}

                    }'
                  />{' '}
                  Auto-sync applicants;
                </label>;'
                <label className='flex items-center gap-2'>;
                  <input'
                    type='checkbox'
              <code>
                /api/integrations/zapier/talent-matched?since=TIMESTAMP
              </code>
            </li>          </ul>
                    checked={!!syncRules.autoUploadResumes}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules
                        autoUploadResumes: e.target.checked
                      })
                    }
                  />{' '}
                  Auto-upload resumes
                </label>
              </>
            )}
          </div>
          <div className='mt-4 flex justify-end gap-2'>
            <button
              className='px-3 py-1.5 rounded border text-sm'
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <button
              className='px-3 py-1.5 rounded bg-black text-white text-sm'
              onClick={async () => {
                await connect(provider.id);
                setSelected(null);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
<Head>
        <title>Admin Integrations • Zion</title>
      </Head>
      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-semibold mb-2'>Integrations</h1>
        <p className='text-sm text-gray-600 mb-6'>
          Connect your CRM and ATS to sync contacts, applicants, and activity.
        </p>
        <section className='mb-8'>
          <h2 className='text-lg font-semibold mb-3'>CRM</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {grouped.crm.map(p => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </section>
        <section className='mb-10'>
          <h2 className='text-lg font-semibold mb-3'>ATS</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {grouped.ats.map(p => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </section>
        <section className='mb-10'>
          <h2 className='text-lg font-semibold mb-2'>Zapier</h2>
          <div className='text-sm text-gray-600'>Polling endpoints:</div>
          <ul className='list-disc pl-6 text-sm mt-2'>
            <li>
              New Zion Job Posted → GET{' '}

              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>
            </li>
            <li>
              Talent Matched → GET{' '}

        </section>
<section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">ATS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.ats.map(p => <Card key={p.id} p={p} />)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Zapier</h2>
          <div className="text-sm text-gray-600">Polling endpoints: </div>
          <ul className="list-disc pl-6 text-sm mt-2">
            <li>New Zion Job Posted → GET <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code></li>
            <li>Talent Matched → GET <code>/api/integrations/zapier/talent-matched?since=TIMESTAMP</code></li>
          </ul>


        </section>

        <section>"
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />
:pages_backup/admin/integrations.tsx
origin/cursor/automate-test-improve-and-merge-code-2533

origin/cursor/automate-test-improve-and-merge-code-2533
        </section>
      </main>
      <RulesModal />
    </>
  );
function ManualOverrideForm() {;
);

function ManualOverrideForm() {
origin/cursor/automate-test-improve-and-merge-code-2533
);

function ManualOverrideForm() {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [jobId, setJobId] = useState('');
  const [disableCrmSync, setDisableCrmSync] = useState(false);
  const [disableAtsSync, setDisableAtsSync] = useState(false);
  const [message, setMessage] = useState('');
setMessage('');
    const res = await fetch('/api/integrations/overrides', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ jobId, disableCrmSync, disableAtsSync }),;

    });
    if (res && res.ok) setMessage('Saved');
    else setMessage('Error');

  }

  );
function ManualOverrideForm() { return null; }
  }

  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/admin/integrations.tsx
function ManualOverrideForm() {
  const [jobId, setJobId] = useState(''),
  const [disableCrmSync, setDisableCrmSync] = useState(false),
  const [disableAtsSync, setDisableAtsSync] = useState(false),
  const [message, setMessage] = useState(''),
  async function save() {
    setMessage(''),
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) }),
    if (res.ok) setMessage('Saved'), else setMessage('Error'),
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/admin/integrations.tsx
  }

  return (

  return (
    setMessage('');
const res = await fetch('/api/integrations/overrides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }),
    });
    if (res.ok) setMessage('Saved');
    else setMessage('Error');
origin/cursor/automate-test-improve-and-merge-code-2533
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

:pages_backup/admin/integrations.tsx
  return (
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl">
      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">Job/Post ID

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

}
}
}
}
}
}

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

:pages_backup/admin/integrations.tsx


}
}
}
}
}
}

:pages_backup/admin/integrations.tsx

  ),
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/admin/integrations.tsx
  );
origin/cursor/automate-test-improve-and-merge-code-2533

'"`
  );
origin/cursor/automate-test-improve-and-merge-code-2533
