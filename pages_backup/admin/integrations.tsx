<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======


interface ConnectionMap {;
  [providerId: string]: any,;
function StatusIcon(): any ({;
  status,;
}: {;
  status: 'connected' | 'warning' | 'disconnected',;
}) {;
  const label =;

    status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <span className='text-xl' title={status}>;
      {label}
    </span>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
import { useEffect, useMemo, useState } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next/head';
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string }
interface ConnectionMap { [providerId: string]: any }


interface ConnectionMap {;
  [key: string]: boolean,;


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import { useEffect, useMemo, useState } from 'react';
=======
import React, { useState } from 'react';
=======
import { useEffect, useMemo, useState } from 'react';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function AdminIntegrationsPage() {
=======
export default function AdminIntegrationsPage() {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
import React, { useState } from 'react';
import Head from 'next/head';
  [key: string]: boolean;

const AdminIntegrationsPage: React.FC = () => {
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const [syncRules, setSyncRules] = useState<any>({ autoCreateContacts: true, pushNotesMode: 'auto', autoSyncApplicants: true, autoUploadResumes: true }),
  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json());
      fetch('/api/integrations/status').then(r => r.json())]);
    setProviders(p.providers || []);
    setConnections(s.connections || {})
  }

  async function connect(providerId: string) {
=======
<<<<<<< HEAD
=======

  const [syncRules, setSyncRules] = useState<any>({;
    autoCreateContacts: true,;
    pushNotesMode: 'auto',;
    autoSyncApplicants: true,;
    autoUploadResumes: true,;
  });
  async function refresh() {;
    const [p, s] = await Promise && Promise.all([;
      fetch('/api/integrations/providers').then(r => r && r.json()),;
      fetch('/api/integrations/status').then(r => r && r.json()),;
    ]);
    setProviders(p && p.providers || []);
    setConnections(s && s.connections || {});
  }
  useEffect(() => {;
    refresh();
  }, []);
  async function connect(): any (providerId: string) {;
    setLoading(true),;
    try {;
      // Open mock oauth popup;
      window && window.open(;
        `/api/integrations/oauth/${providerId}/start`,;
        'oauth',;
        'width=500,height=700';
      );
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId, syncRules }),;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }
<<<<<<< HEAD
=======

      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700');
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) });
      await refresh()
    } finally { setLoading(false) }
  }


  async function disconnect(providerId: string) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setLoading(true)
    try {
      // Open mock oauth popup

<<<<<<< HEAD
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
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
  const [providers, setProviders] = useState<ProviderMeta[]>([]);
  const [connections, setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
<<<<<<< HEAD:pages/admin/integrations.tsx
=======

  async function disconnect(): any (providerId: string) {;
    setLoading(true),;
    try {;
      await fetch('/api/integrations/disconnect', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId }),;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
      });
      await refresh();
    } finally {;
      setLoading(false);
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
    }  }
<<<<<<< HEAD
=======


  async function resync(): any (providerId: string) {;
    setLoading(true),;
    try {;
      await fetch('/api/integrations/resync', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId }),;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
    }  }
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
      });
      await refresh();
    } finally {;
      setLoading(false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [syncRules, setSyncRules] = useState<any>({ autoCreateContacts: true, pushNotesMode: 'auto', autoSyncApplicants: true, autoUploadResumes: true });
  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json()),
      fetch('/api/integrations/status').then(r => r.json())
    ]);
    setProviders(p.providers || []);
    setConnections(s.connections || {});
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  useEffect(() => { refresh(); }, []);
  async function connect(providerId: string) {
    setLoading(true);
    try {
      // Open mock oauth popup
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700');
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) });
      await refresh();
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {
      setLoading(false);
    }  }

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
  const grouped = useMemo(
    () => ({
      crm: providers.filter(p => p.category === 'crm'),
      ats: providers.filter(p => p.category === 'ats'),
    }),
    [providers]
  );

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] |{ status: 'disconnected' }
    const isConnected = conn.status === 'connected';

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] |{ status: 'disconnected' }
    const isConnected = conn.status === 'connected';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">{p.name.slice(0,2)}</div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{p.description}</div>
=======
            <div>
              <div className='font-semibold'>{p.name}</div>
              <div className='text-xs text-gray-500'>{p.description}</div>
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
            </div>
          </div>
          <StatusIcon status={conn.status} />
        </div>
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
        <div className="flex items-center gap-2">
          {!isConnected && (
            <button onClick={() => connect(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-black text-white text-sm">Connect</button>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        <div className="flex items-center gap-2">
          {!isConnected && (
            <button onClick={() => connect(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-black text-white text-sm">Connect</button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              <button onClick={() => resync(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Resync Now</button>
              <button onClick={() => setSelected(p.id)} className="px-3 py-1.5 rounded border text-sm">Configure</button>
              <button onClick={() => disconnect(p.id)} disabled={loading} className="px-3 py-1.5 rounded border text-sm">Disconnect</button>
            </>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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

<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
  function RulesModal() {
    if (!selected) return null,
    const provider = providers.find(p => p.id === selected)!,
    const isCrm = provider.category === 'crm',
<<<<<<< HEAD
<<<<<<< HEAD
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {isCrm ? (
              <>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
=======
=======
=======
      await fetch('/api/integrations/disconnect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const grouped = useMemo(;
    () => ({;
      crm: providers && providers.filter(p => p && p.category === 'crm'),;
      ats: providers && providers.filter(p => p && p.category === 'ats'),;
    }),;
    [providers];
  );
<<<<<<< HEAD
  function Card(): any ({ p }: { p: ProviderMeta }) {;
    const conn = connections[p && p.id] || { status: 'disconnected' };
    const isConnected = conn && conn.status === 'connected';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (


  function RulesModal() {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  function RulesModal() {;
    if (!selected) return null;
    const provider = providers && providers.find(p => p && p.id === selected)!;
    const isCrm = provider && provider.category === 'crm';
    return (


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  function Card(): any ({ p }: { p: ProviderMeta }) {;
    const conn = connections[p && p.id] || { status: 'disconnected' };
    const isConnected = conn && conn.status === 'connected';
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
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
                        }
                      />{' '}
                      Auto;
                    </label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                        checked={syncRules && syncRules.pushNotesMode === 'manual'}
                        onChange={() =>;
                          setSyncRules({;
                            ...syncRules,;
                            pushNotesMode: 'manual',;
                          });

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        }
                      />{' '}
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      Manual only;
                    </label>                  </div>;
                </div>;

                    checked={!!syncRules && syncRules.autoSyncApplicants}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoSyncApplicants: e && e.target.checked,;
                      });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
                    }
                  />{' '}
                  Auto-sync applicants;
                </label>;
                <label className='flex items-center gap-2'>;
                  <input
                    type='checkbox'
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
              <code>
                /api/integrations/zapier/talent-matched?since=TIMESTAMP
              </code>
            </li>          </ul>
<<<<<<< HEAD
=======

                    checked={!!syncRules && syncRules.autoUploadResumes}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoUploadResumes: e && e.target.checked,;
                      });

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

    <>;
      <Head>;
        <title>Admin Integrations • Zion</title>;
      </Head>;
      <main className='container mx-auto px-4 py-8'>;
        <h1 className='text-2xl font-semibold mb-2'>Integrations</h1>;
        <p className='text-sm text-gray-600 mb-6'>;
          Connect your CRM and ATS to sync contacts, applicants, and activity.;
        </p>;

        <section className='mb-8'>;
          <h2 className='text-lg font-semibold mb-3'>CRM</h2>;
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {grouped && grouped.crm.map(p => (;
              <Card key={p && p.id} p={p} />;
            ))}
          </div>;
        </section>;

        <section className='mb-10'>;
          <h2 className='text-lg font-semibold mb-3'>ATS</h2>;
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {grouped && grouped.ats.map(p => (;
              <Card key={p && p.id} p={p} />;
            ))}
          </div>;
        </section>;

        <section className='mb-10'>;
          <h2 className='text-lg font-semibold mb-2'>Zapier</h2>;
          <div className='text-sm text-gray-600'>Polling endpoints:</div>;
          <ul className='list-disc pl-6 text-sm mt-2'>;
            <li>;

              New Zion Job Posted → GET{' '}
<<<<<<< HEAD
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>;
            </li>;
            <li>;
              Talent Matched → GET{' '}
              <code>
                /api/integrations/zapier/talent-matched?since=TIMESTAMP
              </code>
            </li>          </ul>
    ),
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <>
      <Head>
=======


        </section>

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>
            </li>
            <li>
              Talent Matched → GET{' '}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


        </section>
<<<<<<< HEAD
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </section>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <section>
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              <code>
                /api/integrations/zapier/talent-matched?since=TIMESTAMP
              </code>
            </li>
          </ul>
        </section>

        <section>
<h2 className='text-lg font-semibold mb-2'>Manual Overrides</h2>
          <ManualOverrideForm />
<<<<<<< HEAD:pages/admin/integrations.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
        </section>
      </main>
      <RulesModal />
    </>
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


              <code>;
                /api/integrations/zapier/talent-matched?since=TIMESTAMP;
              </code>;
            </li>          </ul>;
        </section>;

=======
  )
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

        <section>;
          <h2 className='text-lg font-semibold mb-2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
function ManualOverrideForm() {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  );
function ManualOverrideForm() {;
=======
);

function ManualOverrideForm() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);

function ManualOverrideForm() {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
  const [jobId, setJobId] = useState('');
  const [disableCrmSync, setDisableCrmSync] = useState(false);
  const [disableAtsSync, setDisableAtsSync] = useState(false);
  const [message, setMessage] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

  async function save() {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setMessage('');
    const res = await fetch('/api/integrations/overrides', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ jobId, disableCrmSync, disableAtsSync }),;

    });
    if (res && res.ok) setMessage('Saved');
    else setMessage('Error');
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function ManualOverrideForm() {
  const [jobId, setJobId] = useState(''),
  const [disableCrmSync, setDisableCrmSync] = useState(false),
  const [disableAtsSync, setDisableAtsSync] = useState(false),
  const [message, setMessage] = useState(''),
  async function save() {
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setMessage(''),
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) }),
    if (res.ok) setMessage('Saved'), else setMessage('Error'),
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  return (
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

            className='px-3 py-1 && 1.5 rounded bg-black text-white text-sm'>;
            Save Override;
          </button>;
          <div className='text-sm text-gray-500'>{message}</div>;
        </div>;
      </div>;
    </div>;
  );

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages/admin/integrations.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
);

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

}
}
}
}
}
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


}
}
}
}
}
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ),
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/integrations.tsx
