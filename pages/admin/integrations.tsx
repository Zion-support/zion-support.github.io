import React, { useEffect, useState } from 'react';
import Head from 'next/head';

interface ProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;
}

interface ConnectionMap {
  [providerId: string]: {
    status: 'connected' | 'warning' | 'disconnected';
  };
}

function StatusIcon({ status }: { status: 'connected' | 'warning' | 'disconnected' }) {
  const label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return <span className="text-xl" title={status}>{label}</span>;
}

export default function AdminIntegrationsPage() {
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [syncRules, setSyncRules] = useState({
    autoCreateContacts: true,
    pushNotesMode: 'auto' as 'auto' | 'manual',
    autoSyncApplicants: true,
    autoUploadResumes: true,
  });

  async function refresh() {
    try {
      const [p, s] = await Promise.all([
        fetch('/api/integrations/providers').then(r => r.json()),
        fetch('/api/integrations/status').then(r => r.json())
      ]);
      setProviders(p.providers || []);
      setConnections(s.connections || {});
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function connect(providerId: string) {
    setLoading(true);
    try {
      // Open mock oauth popup
      window.open(
        `/api/integrations/oauth/${providerId}/start`,
        'oauth',
        'width=500,height=700'
      );
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId, syncRules }),
      });
      await refresh();
    } catch (error) {
      console.error('Error connecting:', error);
    } finally {
      setLoading(false);
    }
  }

  async function disconnect(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
      });
      await refresh();
    } catch (error) {
      console.error('Error disconnecting:', error);
    } finally {
      setLoading(false);
    }
  }

  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
      });
      await refresh();
    } catch (error) {
      console.error('Error resyncing:', error);
    } finally {
      setLoading(false);
    }
  }

  const grouped = {
    crm: providers.filter(p => p.category === 'crm'),
    ats: providers.filter(p => p.category === 'ats'),
  };

  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] || { status: 'disconnected' };
    const isConnected = conn.status === 'connected';

    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">
              {p.name.slice(0, 2)}
            </div>
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{p.description}</div>
            </div>
          </div>
          <StatusIcon status={conn.status} />
        </div>
        <div className="flex items-center gap-2">
          {!isConnected && (
            <button
              onClick={() => connect(p.id)}
              disabled={loading}
              className="px-3 py-1.5 rounded bg-black text-white text-sm hover:bg-gray-800 disabled:opacity-50"
            >
              Connect
            </button>
          )}
          {isConnected && (
            <>
              <button
                onClick={() => resync(p.id)}
                disabled={loading}
                className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-50"
              >
                Resync Now
              </button>
              <button
                onClick={() => setSelected(p.id)}
                className="px-3 py-1.5 rounded border text-sm hover:bg-gray-100"
              >
                Configure
              </button>
              <button
                onClick={() => disconnect(p.id)}
                disabled={loading}
                className="px-3 py-1.5 rounded border text-sm hover:bg-gray-100 disabled:opacity-50"
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
    if (!selected) return null;
    const provider = providers.find(p => p.id === selected);
    if (!provider) return null;
    
    const isCrm = provider.category === 'crm';

    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {isCrm ? (
              <>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={syncRules.autoCreateContacts}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules,
                        autoCreateContacts: e.target.checked,
                      })
                    }
                  />
                  Auto-create contacts
                </label>
                <div>
                  <div className="mb-1">Push notes:</div>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pushNotes"
                        checked={syncRules.pushNotesMode === 'auto'}
                        onChange={() =>
                          setSyncRules({ ...syncRules, pushNotesMode: 'auto' })
                        }
                      />
                      Auto
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pushNotes"
                        checked={syncRules.pushNotesMode === 'manual'}
                        onChange={() =>
                          setSyncRules({ ...syncRules, pushNotesMode: 'manual' })
                        }
                      />
                      Manual only
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={syncRules.autoSyncApplicants}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules,
                        autoSyncApplicants: e.target.checked,
                      })
                    }
                  />
                  Auto-sync applicants
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={syncRules.autoUploadResumes}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules,
                        autoUploadResumes: e.target.checked,
                      })
                    }
                  />
                  Auto-upload resumes
                </label>
              </>
            )}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              className="px-3 py-1.5 rounded border text-sm hover:bg-gray-100"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <button
              className="px-3 py-1.5 rounded bg-black text-white text-sm hover:bg-gray-800"
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
        <title>Admin Integrations • Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-sm text-gray-600 mb-6">
          Connect your CRM and ATS to sync contacts, applicants, and activity.
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">CRM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.crm.map(p => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">ATS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.ats.map(p => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Zapier</h2>
          <div className="text-sm text-gray-600">Polling endpoints:</div>
          <ul className="list-disc pl-6 text-sm mt-2">
            <li>
              New Zion Job Posted → GET{' '}
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>
            </li>
            <li>
              Talent Matched → GET{' '}
              <code>/api/integrations/zapier/talent-matched?since=TIMESTAMP</code>
            </li>
          </ul>
        </section>
      </main>
      <RulesModal />
    </>
  );
}