<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head';

interface ProviderMeta {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  category: 'crm' | 'ats';
  description?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ConnectionMap {;
  [providerId: string]: any,;
=======


interface ConnectionMap {;
  [providerId: string]: any,;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function StatusIcon(): any ({;
  status,;
}: {;
  status: 'connected' | 'warning' | 'disconnected',;
}) {;
  const label =;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return (
    <span className='text-xl' title={status}>;
      {label}
    </span>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string }
interface ConnectionMap { [providerId: string]: any }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface ConnectionMap {;
  [key: string]: boolean,;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useEffect, useMemo, useState } from 'react';
=======

import { useEffect, useMemo, useState } from 'react';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';


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
interface ConnectionMap {;
  [key: string]: boolean,;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function AdminIntegrationsPage() {
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
  useEffect(() => {
    refresh();
  }, []);
  async function connect(providerId: string) {
    setLoading(true)
    try {
      // Open mock oauth popup
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [syncRules, setSyncRules] = useState<any>({;
    autoCreateContacts: true,;
    pushNotesMode: 'auto',;
    autoSyncApplicants: true,;
    autoUploadResumes: true,;
  });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function refresh() {;
    const [p, s] = await Promise && Promise.all([;
      fetch('/api/integrations/providers').then(r => r && r.json()),;
      fetch('/api/integrations/status').then(r => r && r.json()),;
    ]);
    setProviders(p && p.providers || []);
    setConnections(s && s.connections || {});
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700');
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) });
      await refresh()
    } finally { setLoading(false) }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  async function disconnect(providerId: string) {
    setLoading(true)
    try {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  async function disconnect(providerId: string) {
    setLoading(true)
    try {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function disconnect(): any (providerId: string) {;
    setLoading(true),;
    try {;
      await fetch('/api/integrations/disconnect', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      await refresh();
    } finally {;
      setLoading(false);
    }  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function resync(): any (providerId: string) {;
    setLoading(true),;
    try {;
      await fetch('/api/integrations/resync', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ providerId }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      await refresh();
    } finally {;
      setLoading(false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] |{ status: 'disconnected' }
    const isConnected = conn.status === 'connected';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      await fetch('/api/integrations/disconnect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }
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
<<<<<<< HEAD
      window.open(
        `/api/integrations/oauth/${providerId}/start`
        'oauth'
        'width=500,height=700'
      );
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ providerId, syncRules })
      });
      await refresh();
    } finally {
      setLoading(false);
    }  }
  async function disconnect(providerId: string) {
    setLoading(true)
    try {
      await fetch('/api/integrations/disconnect', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ providerId })
      });
      await refresh();
    } finally {
      setLoading(false);
    }  }
  async function resync(providerId: string) {
    setLoading(true)
    try {
      await fetch('/api/integrations/resync', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ providerId })
      });
      await refresh();
    } finally {
      setLoading(false);
    }
  }
  const grouped = useMemo(
    () => ({
      crm: providers.filter(p => p.category === 'crm')
      ats: providers.filter(p => p.category === 'ats')
    })
    [providers]
  );
import { useEffect, useMemo, useState } from 'react';
import React, { useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
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
    } finally {
      setLoading(false);
    }  }

  async function disconnect(providerId: string) {
    setLoading(true),
    try {
      await fetch('/api/integrations/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
      });
      await refresh();
    } finally {
      setLoading(false);
    }  }

  async function resync(providerId: string) {
    setLoading(true),
    try {
      await fetch('/api/integrations/resync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId }),
      });
      await refresh();
    } finally {
      setLoading(false);
    }
  }

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">{p.name.slice(0,2)}</div>
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">{p.description}</div>
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
<<<<<<< HEAD
}
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
              </button>            </>
          )}
        </div>
      </div>
    );  }

              <button onClick={() => resync(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Resync Now</button>
              <button onClick={() => setSelected(p.id)} className="px-3 py-1.5 rounded border text-sm">Configure</button>
              <button onClick={() => disconnect(p.id)} disabled={loading} className="px-3 py-1.5 rounded border text-sm">Disconnect</button>
            </>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  function RulesModal() {

<<<<<<< HEAD
function RulesModal() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  function RulesModal() {;
    if (!selected) return null;
    const provider = providers && providers.find(p => p && p.id === selected)!;
    const isCrm = provider && provider.category === 'crm';
    return (
<<<<<<< HEAD
                    checked={!!syncRules && syncRules.autoCreateContacts}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoCreateContacts: e && e.target.checked,;
                      });
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </div>
    ),
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  function RulesModal() {
    if (!selected) return null,
    const provider = providers.find(p => p.id === selected)!,
    const isCrm = provider.category === 'crm',
    return (
=======

  async function resync(providerId: string) {
    setLoading(true);
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {isCrm ? (
              <>
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  Auto-create contacts;
                </label>;
                <div>;
                  <div className='mb-1'>Push notes:</div>;
                  <div className='flex gap-3'>;
                    <label className='flex items-center gap-2'>;
                      <input
                        type='radio'
                        name='pushNotes'
                        checked={syncRules && syncRules.pushNotesMode === 'auto'}
                        onChange={() =>;
                          setSyncRules({ ...syncRules, pushNotesMode: 'auto' });
;
interface ConnectionMap {
  [provider_id: string]: any,
/**
 * StatusIcon - Function description
 */
function StatusIcon() {
  const label =;
    status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return (
    <span className='text - xl' title={status}>;
      {label}
    </span>);
;
interface ConnectionMap {
  [key: string]: boolean,
const AdminIntegrationsPage: React.FC = () => {  const [providers, set_providers] = useState < ProviderMeta[]>([]);
  const [connections, set_connections] = useState < ConnectionMap>({});
  const [loading, set_loading] = useState (false);
  const [selected, set_selected] = useState < string | null>(null);
  const [sync_rules, setSyncRules] = useState < any>({
    autoCreateContacts: true,
    pushNotesMode: 'auto',
    autoSyncApplicants: true,
    autoUploadResumes: true,
  });
;
  async /**
 * refresh - Function description
 */
function refresh() {
    const [p, s] = await Promise.all ([;
      fetch ('/api / integrations / providers').then (r => r.json ()),
      fetch ('/api / integrations / status').then (r => r.json ()),
    ]);
    set_providers (p.providers || []);
    set_connections (s.connections || {});
  }
  useEffect (() => {
    refresh ();
  }, []);
  async /**
 * connect - Function description
 */
function connect() {
    set_loading (true),
    try {
      // Open mock oauth popup;
      window.open (
        `/api / integrations / oauth/${provider_id}/start`,
        'oauth',
        'width = 500, height = 700');
      await new Promise (r => set_timeout (r, 500));
      await fetch ('/api / integrations / connect', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ provider_id, sync_rules }),
      });
      await refresh ();
    } finally {
      set_loading (false);
    }  }
  async /**
 * disconnect - Function description
 */
function disconnect() {
    set_loading (true),
    try {
      await fetch ('/api / integrations / disconnect', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ provider_id }),
      });
      await refresh ();
    } finally {
      set_loading (false);
    }  }
  async /**
 * resync - Function description
 */
function resync() {
    set_loading (true),
    try {
      await fetch ('/api / integrations / resync', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ provider_id }),
      });
      await refresh ();
    } finally {
      set_loading (false);
    }
  }
  const grouped = useMemo (
    () => ({
      crm: providers.filter (p => p.category === 'crm'),
      ats: providers.filter (p => p.category === 'ats'),
    }),
    [providers]);
;
  /**
 * Card - Function description
 */
function Card() {
    const conn = connections[p.id] || { status: 'disconnected' }
    const is_connected = conn.status === 'connected';
    return (
      <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 flex flex - col gap - 3 bg - white / 60 dark:bg - black / 40'>;
        <div className='flex items - center justify - between'>;
          <div className='flex items - center gap - 3'>;
            <div className='h - 8 w - 8 rounded bg - gray - 100 dark:bg - gray - 800 flex items - center justify - center text - xs'>;
              {p.name.slice (0, 2)}
            </div>;
            <div>;
              <div className='font - semibold'>{p.name}</div>;
              <div className='text - xs text - gray - 500'>{p.description}</div>            </div>;
          </div>;
          <StatusIcon status={conn.status} />;
        </div>;
        <div className='flex items - center gap - 2'>;
          {!is_connected && (
            <button;
              on_click={() => connect (p.id)}
              disabled={loading}
              className='px - 3 py - 1.5 rounded bg - black text - white text - sm';
            >;
              Connect;
            </button>)}
          {is_connected && (
            <>;
              <button;
                on_click={() => resync (p.id)}
                disabled={loading}
                className='px - 3 py - 1.5 rounded bg - blue - 600 text - white text - sm';
              >;
                Resync Now;
              </button>;
              <button;
                on_click={() => set_selected (p.id)}
                className='px - 3 py - 1.5 rounded border text - sm';
              >;
                Configure;
              </button>;
              <button;
                on_click={() => disconnect (p.id)}
                disabled={loading}
                className='px - 3 py - 1.5 rounded border text - sm';
              >;
                Disconnect;
              </button>            </>)}
        </div>;
      </div>);  }
  /**
 * RulesModal - Function description
 */
function RulesModal() {
    // Check condition
if (return null) {
  $2
}
    const provider = providers.find (p => p.id === selected)!;
    const is_crm = provider.category === 'crm';
    return (
      <div className='fixed inset - 0 bg - black / 40 flex items - center justify - center'>;
        <div className='w - full max - w-md rounded - lg bg - white dark:bg - neutral - 900 p - 4 border border - gray - 200 dark:border - gray - 800'>;
          <div className='font - semibold mb - 2'>Sync Rules — {provider.name}</div>;
          <div className='space - y-3 text - sm'>;
            {is_crm ? (
              <>;
                <label className='flex items - center gap - 2'>;
                  <input;
                    type='checkbox';
                    checked={!!sync_rules.autoCreateContacts}
                    on_change={e =>;
                      setSyncRules ({
                        ...sync_rules,
                        autoCreateContacts: e.target.checked,
                      });
                    }
                  />{' '}
                  Auto - create contacts;
                </label>;
                <div>;
                  <div className='mb - 1'>Push notes:</div>;
                  <div className='flex gap - 3'>;
                    <label className='flex items - center gap - 2'>;
                      <input;
                        type='radio';
                        name='push_notes';
                        checked={sync_rules.pushNotesMode === 'auto'}
                        on_change={() =>;
                          setSyncRules ({ ...sync_rules, pushNotesMode: 'auto' });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        }
                      />{' '}
                      Auto;
                    </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        checked={syncRules && syncRules.pushNotesMode === 'manual'}
                        onChange={() =>;
                          setSyncRules({;
                            ...syncRules,;
                            pushNotesMode: 'manual',;
                          });
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    checked={!!syncRules && syncRules.autoSyncApplicants}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoSyncApplicants: e && e.target.checked,;
                      });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }
                  />{' '}
                  Auto-sync applicants;
                </label>;
                <label className='flex items-center gap-2'>;
                  <input
                    type='checkbox'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    checked={!!syncRules && syncRules.autoUploadResumes}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoUploadResumes: e && e.target.checked,;
                      });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>;
      <Head>;
        <title>Admin Integrations • Zion</title>;
      </Head>;
      <main className='container mx-auto px-4 py-8'>;
        <h1 className='text-2xl font-semibold mb-2'>Integrations</h1>;
        <p className='text-sm text-gray-600 mb-6'>;
          Connect your CRM and ATS to sync contacts, applicants, and activity.;
        </p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className='mb-8'>;
          <h2 className='text-lg font-semibold mb-3'>CRM</h2>;
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {grouped && grouped.crm.map(p => (;
              <Card key={p && p.id} p={p} />;
            ))}
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className='mb-10'>;
          <h2 className='text-lg font-semibold mb-3'>ATS</h2>;
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {grouped && grouped.ats.map(p => (;
              <Card key={p && p.id} p={p} />;
            ))}
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className='mb-10'>;
          <h2 className='text-lg font-semibold mb-2'>Zapier</h2>;
          <div className='text-sm text-gray-600'>Polling endpoints:</div>;
          <ul className='list-disc pl-6 text-sm mt-2'>;
            <li>;
<<<<<<< HEAD
              New Zion Job Posted → GET{' '}
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>;
            </li>;
            <li>;
              Talent Matched → GET{' '}
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {isCrm ? (
              <>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoCreateContacts} onChange={e => setSyncRules({ ...syncRules, autoCreateContacts: e.target.checked })} /> Auto-create contacts</label>
=======
                  Auto-create contacts
                </label>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                      Auto
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='pushNotes'
                        checked={syncRules.pushNotesMode === 'manual'}
                        onChange={() =>
                          setSyncRules({
                            ...syncRules
                            pushNotesMode: 'manual'
                          })
=======
                      Auto;
                    </label>;

                        checked={syncRules && syncRules.pushNotesMode === 'manual'}
                        onChange={() =>;
                          setSyncRules({;
                            ...syncRules,;
                            pushNotesMode: 'manual',;
                          });

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        }
                      />{' '}
                      Manual only
                    </label>                  </div>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoCreateContacts} onChange={e => setSyncRules({ ...syncRules, autoCreateContacts: e.target.checked })} /> Auto-create contacts</label>
                <div>
                  <div className="mb-1">Push notes:</div>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={syncRules.pushNotesMode === 'auto'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'auto' })} /> Auto</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={syncRules.pushNotesMode === 'manual'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'manual' })} /> Manual only</label>
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
                  />{' '}
<<<<<<< HEAD
                  Auto-sync applicants
                </label>
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!!syncRules.autoUploadResumes}
                    onChange={e =>
                      setSyncRules({
                        ...syncRules
                        autoUploadResumes: e.target.checked
                      })
=======
                  Auto-sync applicants;
                </label>;
                <label className='flex items-center gap-2'>;
                  <input
                    type='checkbox'

                    checked={!!syncRules && syncRules.autoUploadResumes}
                    onChange={e =>;
                      setSyncRules({;
                        ...syncRules,;
                        autoUploadResumes: e && e.target.checked,;
                      });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />{' '}
                  Auto-upload resumes
                </label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoSyncApplicants} onChange={e => setSyncRules({ ...syncRules, autoSyncApplicants: e.target.checked })} /> Auto-sync applicants</label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoUploadResumes} onChange={e => setSyncRules({ ...syncRules, autoUploadResumes: e.target.checked })} /> Auto-upload resumes</label>
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
    );  }
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              New Zion Job Posted → GET{' '}
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>
            </li>
            <li>
              Talent Matched → GET{' '}
<<<<<<< HEAD
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
              <code>
                /api/integrations/zapier/talent-matched?since=TIMESTAMP
              </code>
            </li>          </ul>
      <Head><title>Admin Integrations • Zion</title></Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-sm text-gray-600 mb-6">Connect your CRM and ATS to sync contacts, applicants, and activity.</p>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">CRM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.crm.map(p => <Card key={p.id} p={p} />)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
              <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code>;
            </li>;
            <li>;
              Talent Matched → GET{' '}


        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </section>
      </main>
      <RulesModal />
    </>
<<<<<<< HEAD


              <code>;
<<<<<<< HEAD
<code>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                /api/integrations/zapier/talent-matched?since=TIMESTAMP;
              </code>;
            </li>          </ul>;
        </section>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}


<<<<<<< HEAD
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section>;
          <h2 className='text-lg font-semibold mb-2'>Manual Overrides</h2>          <ManualOverrideForm />;
        </section>;
      </main>;
      <RulesModal />;
    </>;
<<<<<<< HEAD
  );
function ManualOverrideForm() {;
  );
function ManualOverrideForm() {
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
function ManualOverrideForm() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
function ManualOverrideForm() {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [jobId, setJobId] = useState('');
  const [disableCrmSync, setDisableCrmSync] = useState(false);
  const [disableAtsSync, setDisableAtsSync] = useState(false);
  const [message, setMessage] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  async function save() {
=======


  async function save() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  async function save() {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setMessage('');
    const res = await fetch('/api/integrations/overrides', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ jobId, disableCrmSync, disableAtsSync }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    if (res && res.ok) setMessage('Saved');
    else setMessage('Error');

  }
<<<<<<< HEAD
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
    setMessage(''),
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) }),
    if (res.ok) setMessage('Saved'), else setMessage('Error'),
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) });
    if (res.ok) setMessage('Saved'), else setMessage('Error')
  }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

<<<<<<< HEAD
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
