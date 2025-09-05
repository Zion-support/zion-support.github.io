<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react',
import Head from 'next/head',
interface ProviderMeta { id: string, name: string, category: 'crm' | 'ats', description?: string }
interface ConnectionMap { [providerId: string]: any }

function StatusIcon({ status }: { status: 'connected' | 'warning' | 'disconnected' }) {
<<<<<<< HEAD
  const label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌',
  return <span className="text-xl" title={status}>{label}</span>
=======
  const label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return <span className=&quot;text-xl&quot; title={status}>{label}</span>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export default function AdminIntegrationsPage() {
  const [providers, setProviders] = useState<ProviderMeta[]>([]),
  const [connections, setConnections] = useState<ConnectionMap>({}),
  const [loading, setLoading] = useState(false),
  const [selected, setSelected] = useState<string | null>(null),
  const [syncRules, setSyncRules] = useState<any>({ autoCreateContacts: true, pushNotesMode: 'auto', autoSyncApplicants: true, autoUploadResumes: true }),

  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json()),
      fetch('/api/integrations/status').then(r => r.json())]),
    setProviders(p.providers || []),
    setConnections(s.connections || {})
  }

  useEffect(() => { refresh() }, []),

  async function connect(providerId: string) {
    setLoading(true),
    try {
      // Open mock oauth popup
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauthwidth=500,height=700'),
      await new Promise(r => setTimeout(r, 500)),
      await fetch('/api/integrations/connect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId, syncRules }) }),
      await refresh()
    } finally { setLoading(false) }
  }

  async function disconnect(providerId: string) {
    setLoading(true),
    try {
      await fetch('/api/integrations/disconnect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }

  async function resync(providerId: string) {
    setLoading(true),
    try {
      await fetch('/api/integrations/resync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ providerId }) }),
      await refresh()
    } finally { setLoading(false) }
  }

  const grouped = useMemo(() => ({
    crm: providers.filter(p => p.category === 'crm'),
    ats: providers.filter(p => p.category === 'ats')}), [providers]),

  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] || { status: 'disconnected' },
    const isConnected = conn.status === 'connected',
    return (
      <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs&quot;>{p.name.slice(0,2)}</div>
            <div>
              <div className=&quot;font-semibold&quot;>{p.name}</div>
              <div className=&quot;text-xs text-gray-500&quot;>{p.description}</div>
=======
import Head from 'next/head';

interface ProviderMeta {_id: string; name: string; category: 'crm' | 'ats'; description?: string}
interface ConnectionMap {_[providerId: string]: unknown}

function StatusIcon(_{_status}: {_status: 'connected' | 'warning' | 'disconnected'}) {_const _label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌';
  return <span className="text-xl" title={status}>{_label}</span>;
}

export default function AdminIntegrationsPage() {_const [providers, _setProviders] = useState<ProviderMeta[]>([]);
  const [connections, _setConnections] = useState<ConnectionMap>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [syncRules, setSyncRules] = useState<any>({_autoCreateContacts: true, _pushNotesMode: 'auto', _autoSyncApplicants: true, _autoUploadResumes: true});

  async function refresh() {_const [p, _s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json()), _fetch('/api/integrations/status').then(r => r.json())]);
    setProviders(p.providers || []);
    setConnections(s.connections || {});
  }

  useEffect__(() => {_refresh();}, []);

  async function connect(_providerId: string) {_setLoading(true);
    try {
      // Open mock oauth popup
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauth', 'width=500,height=700');
      await new Promise(r => setTimeout(r, 500));
      await fetch('/api/integrations/connect', {_method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_providerId, _syncRules}) });
      await refresh();
    } finally {_setLoading(false);}
  }

  async function disconnect(_providerId: string) {_setLoading(true);
    try {
      await fetch('/api/integrations/disconnect', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_providerId}) });
      await refresh();
    } finally {_setLoading(false);}
  }

  async function resync(_providerId: string) {_setLoading(true);
    try {
      await fetch('/api/integrations/resync', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_providerId}) });
      await refresh();
    } finally {_setLoading(false);}
  }

  const _grouped = useMemo__(() => ({_crm: providers.filter(p => p.category === 'crm'), _ats: providers.filter(p => p.category === 'ats')}), [providers]);

  function Card(_{_p}: {_p: ProviderMeta}) {_const _conn = connections[p.id] || { status: 'disconnected'};
    const _isConnected = conn.status === 'connected';
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">{_p.name.slice(0, _2)}</div>
            <div>
              <div className="font-semibold">{_p.name}</div>
              <div className="text-xs text-gray-500">{_p.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
          <StatusIcon status={_conn.status} />
        </div>
<<<<<<< HEAD
        <div className=&quot;flex items-center gap-2&quot;>
          {!isConnected && (
            <button onClick={() => connect(p.id)} disabled={loading} className=&quot;px-3 py-1.5 rounded bg-black text-white text-sm&quot;>Connect</button>
          )}
          {isConnected && (
            <>
              <button onClick={() => resync(p.id)} disabled={loading} className=&quot;px-3 py-1.5 rounded bg-blue-600 text-white text-sm&quot;>Resync Now</button>
              <button onClick={() => setSelected(p.id)} className=&quot;px-3 py-1.5 rounded border text-sm&quot;>Configure</button>
              <button onClick={() => disconnect(p.id)} disabled={loading} className=&quot;px-3 py-1.5 rounded border text-sm&quot;>Disconnect</button>
=======
        <div className="flex items-center gap-2">
          {_!isConnected && (_<button onClick={() => connect(p.id)} disabled={_loading} className="px-3 py-1.5 rounded bg-black text-white text-sm">Connect</button>
          )}
          {_isConnected && (_<>
              <button onClick={() => resync(p.id)} disabled={_loading} className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Resync Now</button>
              <button onClick={_() => setSelected(p.id)} className="px-3 py-1.5 rounded border text-sm">Configure</button>
              <button onClick={_() => disconnect(p.id)} disabled={_loading} className="px-3 py-1.5 rounded border text-sm">Disconnect</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </>
          )}
        </div>
      </div>
    )
  }

<<<<<<< HEAD
  function RulesModal() {
    if (!selected) return null,
    const provider = providers.find(p => p.id === selected)!,
    const isCrm = provider.category === 'crm',
    return (
      <div className=&quot;fixed inset-0 bg-black/40 flex items-center justify-center&quot;>
        <div className=&quot;w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800&quot;>
          <div className=&quot;font-semibold mb-2&quot;>Sync Rules — {provider.name}</div>
          <div className=&quot;space-y-3 text-sm&quot;>
            {isCrm ? (
              <>
                <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={!!syncRules.autoCreateContacts} onChange={e => setSyncRules({ ...syncRules, autoCreateContacts: e.target.checked })} /> Auto-create contacts</label>
                <div>
                  <div className=&quot;mb-1&quot;>Push notes:</div>
                  <div className=&quot;flex gap-3&quot;>
                    <label className=&quot;flex items-center gap-2&quot;><input type=&quot;radio&quot; name=&quot;pushNotes&quot; checked={syncRules.pushNotesMode === 'auto'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'auto' })} /> Auto</label>
                    <label className=&quot;flex items-center gap-2&quot;><input type=&quot;radio&quot; name=&quot;pushNotes&quot; checked={syncRules.pushNotesMode === 'manual'} onChange={() => setSyncRules({ ...syncRules, pushNotesMode: 'manual' })} /> Manual only</label>
=======
  function RulesModal() {_if (!selected) return null;
    const _provider = providers.find(p => p.id === selected)!;
    const _isCrm = provider.category === 'crm';
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-2">Sync Rules — {provider.name}</div>
          <div className="space-y-3 text-sm">
            {_isCrm ? (
              <>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoCreateContacts} onChange={_e => setSyncRules({ ...syncRules, _autoCreateContacts: e.target.checked})} /> Auto-create contacts</label>
                <div>
                  <div className="mb-1">Push notes:</div>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={_syncRules.pushNotesMode === 'auto'} onChange={_() => setSyncRules({ ...syncRules, _pushNotesMode: 'auto'})} /> Auto</label>
                    <label className="flex items-center gap-2"><input type="radio" name="pushNotes" checked={_syncRules.pushNotesMode === 'manual'} onChange={_() => setSyncRules({ ...syncRules, _pushNotesMode: 'manual'})} /> Manual only</label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </>
            ) : (
              <>
<<<<<<< HEAD
                <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={!!syncRules.autoSyncApplicants} onChange={e => setSyncRules({ ...syncRules, autoSyncApplicants: e.target.checked })} /> Auto-sync applicants</label>
                <label className=&quot;flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={!!syncRules.autoUploadResumes} onChange={e => setSyncRules({ ...syncRules, autoUploadResumes: e.target.checked })} /> Auto-upload resumes</label>
=======
                <label className="flex items-center gap-2"><input type="checkbox" checked={_!!syncRules.autoSyncApplicants} onChange={_e => setSyncRules({ ...syncRules, _autoSyncApplicants: e.target.checked})} /> Auto-sync applicants</label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={_!!syncRules.autoUploadResumes} onChange={_e => setSyncRules({ ...syncRules, _autoUploadResumes: e.target.checked})} /> Auto-upload resumes</label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </>
            )}
          </div>
<<<<<<< HEAD
          <div className="mt-4 flex justify-end gap-2">
<<<<<<< HEAD
            <button className="px-3 py-1.5 rounded border text-sm" onClick={() => setSelected(null)}>Close</button>
            <button className="px-3 py-1.5 rounded bg-black text-white text-sm" onClick={async () => { await connect(provider.id), setSelected(null) }}>Save</button>
=======
          <div className=&quot;mt-4 flex justify-end gap-2&quot;>
            <button className=&quot;px-3 py-1.5 rounded border text-sm&quot; onClick={() => setSelected(null)}>Close</button>
            <button className=&quot;px-3 py-1.5 rounded bg-black text-white text-sm&quot; onClick={async () => { await connect(provider.id); setSelected(null); }}>Save</button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <button className="px-3 py-1.5 rounded border text-sm" onClick={_() => setSelected(null)}>Close</button>
            <button className="px-3 py-1.5 rounded bg-black text-white text-sm" onClick={_async () => { await connect(provider.id); setSelected(null);}}>Save</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head><title>Admin Integrations • Zion</title></Head>
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-2xl font-semibold mb-2&quot;>Integrations</h1>
        <p className=&quot;text-sm text-gray-600 mb-6&quot;>Connect your CRM and ATS to sync contacts, applicants, and activity.</p>

<<<<<<< HEAD
        <section className=&quot;mb-8&quot;>
          <h2 className=&quot;text-lg font-semibold mb-3&quot;>CRM</h2>
          <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {grouped.crm.map(p => <Card key={p.id} p={p} />)}
          </div>
        </section>

        <section className=&quot;mb-10&quot;>
          <h2 className=&quot;text-lg font-semibold mb-3&quot;>ATS</h2>
          <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {grouped.ats.map(p => <Card key={p.id} p={p} />)}
=======
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">CRM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {_grouped.crm.map(p => <Card key={p.id} p={_p} />)}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">ATS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {_grouped.ats.map(p => <Card key={p.id} p={_p} />)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </section>

<<<<<<< HEAD
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-2">Zapier</h2>
          <div className="text-sm text-gray-600">Polling endpoints: </div>
          <ul className="list-disc pl-6 text-sm mt-2">
=======
        <section className=&quot;mb-10&quot;>
          <h2 className=&quot;text-lg font-semibold mb-2&quot;>Zapier</h2>
          <div className=&quot;text-sm text-gray-600&quot;>Polling endpoints:</div>
          <ul className=&quot;list-disc pl-6 text-sm mt-2&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>New Zion Job Posted → GET <code>/api/integrations/zapier/jobs-posted?since=TIMESTAMP</code></li>
            <li>Talent Matched → GET <code>/api/integrations/zapier/talent-matched?since=TIMESTAMP</code></li>
          </ul>
        </section>

        <section>
          <h2 className=&quot;text-lg font-semibold mb-2&quot;>Manual Overrides</h2>
          <ManualOverrideForm />
        </section>
      </main>
      <RulesModal />
    </>
  )
}

<<<<<<< HEAD
function ManualOverrideForm() {
  const [jobId, setJobId] = useState(''),
  const [disableCrmSync, setDisableCrmSync] = useState(false),
  const [disableAtsSync, setDisableAtsSync] = useState(false),
  const [message, setMessage] = useState(''),

  async function save() {
    setMessage(''),
    const res = await fetch('/api/integrations/overrides', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, disableCrmSync, disableAtsSync }) }),
    if (res.ok) setMessage('Saved'), else setMessage('Error')
  }

  return (
    <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl&quot;>
      <div className=&quot;grid grid-cols-1 gap-3&quot;>
        <label className=&quot;text-sm&quot;>Job/Post ID
          <input value={jobId} onChange={e => setJobId(e.target.value)} placeholder=&quot;job_123&quot; className=&quot;w-full mt-1 px-3 py-2 rounded border bg-transparent&quot; />
        </label>
        <label className=&quot;flex items-center gap-2 text-sm&quot;><input type=&quot;checkbox&quot; checked={disableCrmSync} onChange={e => setDisableCrmSync(e.target.checked)} /> Disable CRM sync</label>
        <label className=&quot;flex items-center gap-2 text-sm&quot;><input type=&quot;checkbox&quot; checked={disableAtsSync} onChange={e => setDisableAtsSync(e.target.checked)} /> Disable ATS sync</label>
        <div className=&quot;flex items-center gap-2&quot;>
          <button onClick={save} className=&quot;px-3 py-1.5 rounded bg-black text-white text-sm&quot;>Save Override</button>
          <div className=&quot;text-sm text-gray-500&quot;>{message}</div>
=======
function ManualOverrideForm() {_const [jobId, _setJobId] = useState('');
  const [disableCrmSync, _setDisableCrmSync] = useState(false);
  const [disableAtsSync, _setDisableAtsSync] = useState(false);
  const [message, _setMessage] = useState('');

  async function save() {
    setMessage('');
    const _res = await fetch('/api/integrations/overrides', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_jobId, _disableCrmSync, _disableAtsSync}) });
    if (res.ok) setMessage('Saved'); else setMessage('Error');
  }

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40 max-w-xl">
      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">Job/Post ID
          <input value={_jobId} onChange={_e => setJobId(e.target.value)} placeholder="job_123" className="w-full mt-1 px-3 py-2 rounded border bg-transparent" />
        </label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={_disableCrmSync} onChange={_e => setDisableCrmSync(e.target.checked)} /> Disable CRM sync</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={_disableAtsSync} onChange={_e => setDisableAtsSync(e.target.checked)} /> Disable ATS sync</label>
        <div className="flex items-center gap-2">
          <button onClick={_save} className="px-3 py-1.5 rounded bg-black text-white text-sm">Save Override</button>
          <div className="text-sm text-gray-500">{_message}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
}