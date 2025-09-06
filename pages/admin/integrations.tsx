import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'

interface ProviderMeta { 
  id: string
  name: string
  category: 'crm' | 'ats'
  description?: string 
}

interface ConnectionMap { 
  [providerId: string]: any 
}

function StatusIcon({ status }: { status: 'connected' | 'warning' | 'disconnected' }) {
  const label = status === 'connected' ? '✅' : status === 'warning' ? '⚠️' : '❌'
  return <span className="text-xl" title={status}>{label}</span>
}

export default function AdminIntegrationsPage() {
  const [providers, setProviders] = useState<ProviderMeta[]>([])
  const [connections, setConnections] = useState<ConnectionMap>({})
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [syncRules, setSyncRules] = useState<any>({ 
    autoCreateContacts: true, 
    pushNotesMode: 'auto', 
    autoSyncApplicants: true, 
    autoUploadResumes: true 
  })

  async function refresh() {
    const [p, s] = await Promise.all([
      fetch('/api/integrations/providers').then(r => r.json()),
      fetch('/api/integrations/status').then(r => r.json())
    ])
    setProviders(p.providers || [])
    setConnections(s.connections || {})
  }

  useEffect(() => { refresh() }, [])

  async function connect(providerId: string) {
    setLoading(true)
    try {
      // Open mock oauth popup
      window.open(`/api/integrations/oauth/${providerId}/start`, 'oauth', 'width=500,height=700')
      await new Promise(r => setTimeout(r, 500))
      await fetch('/api/integrations/connect', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ providerId, syncRules }) 
      })
      await refresh()
    } finally { 
      setLoading(false) 
    }
  }

  async function disconnect(providerId: string) {
    setLoading(true)
    try {
      await fetch('/api/integrations/disconnect', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ providerId }) 
      })
      await refresh()
    } finally { 
      setLoading(false) 
    }
  }

  async function resync(providerId: string) {
    setLoading(true)
    try {
      await fetch('/api/integrations/resync', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ providerId }) 
      })
      await refresh()
    } finally { 
      setLoading(false) 
    }
  }

  const grouped = useMemo(() => ({
    crm: providers.filter(p => p.category === 'crm'),
    ats: providers.filter(p => p.category === 'ats')
  }), [providers])

  function Card({ p }: { p: ProviderMeta }) {
    const conn = connections[p.id] || { status: 'disconnected' }
    const isConnected = conn.status === 'connected'
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white/60 dark:bg-black/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">{p.name.slice(0, 2)}</div>
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
          )}
          {isConnected && (
            <>
              <button onClick={() => resync(p.id)} disabled={loading} className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Resync Now</button>
              <button onClick={() => setSelected(p.id)} className="px-3 py-1.5 rounded border text-sm">Configure</button>
              <button onClick={() => disconnect(p.id)} disabled={loading} className="px-3 py-1.5 rounded border text-sm">Disconnect</button>
            </>
          )}
        </div>
      </div>
    )
  }

  function RulesModal() {
    if (!selected) return null;
    const provider = providers.find(p => p.id === selected)!;
    const isCrm = provider.category === 'crm';
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4">Sync Rules for {provider.name}</h3>
          <div className="space-y-3">
            {isCrm ? (
              <>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!syncRules.autoSyncContacts} onChange={e => setSyncRules({ ...syncRules, autoSyncContacts: e.target.checked })} />
                    Auto-sync contacts
                  </label>
                </div>
              </>
            ) : (
              <>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoSyncApplicants} onChange={e => setSyncRules({ ...syncRules, autoSyncApplicants: e.target.checked })} /> Auto-sync applicants</label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={!!syncRules.autoUploadResumes} onChange={e => setSyncRules({ ...syncRules, autoUploadResumes: e.target.checked })} /> Auto-upload resumes</label>
              </>
            )}
          </div>
          <div className="flex gap-2 mt-6">
            <button onClick={() => setSelected(null)} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button onClick={handleSaveRules} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Rules</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head><title>Admin Integrations • Zion</title></Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-sm text-gray-600 mb-6">Connect your CRM and ATS to sync contacts, applicants, and activity.</p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">CRM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.crm.map(p => <Card key={p.id} p={p} />)}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">ATS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped.ats.map(p => <Card key={p.id} p={p} />)}
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

        <section>
          <h2 className="text-lg font-semibold mb-2">Manual Overrides</h2>
          <ManualOverrideForm />
        </section>
      </main>
      <RulesModal />
    </>
  )
}

function ManualOverrideForm() {
  const [jobId, setJobId] = useState('');
  const [disableCrmSync, setDisableCrmSync] = useState(false);
  const [disableAtsSync, setDisableAtsSync] = useState(false);
  const [message, setMessage] = useState('');
  
  return (
    <div className="mt-6 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Manual Override</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Job ID</label>
          <input 
            type="text" 
            value={jobId} 
            onChange={(e) => setJobId(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter job ID"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={disableCrmSync} 
              onChange={(e) => setDisableCrmSync(e.target.checked)}
            />
            Disable CRM Sync
          </label>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={disableAtsSync} 
              onChange={(e) => setDisableAtsSync(e.target.checked)}
            />
            Disable ATS Sync
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Override reason..."
          />
        </div>
        <button 
          onClick={() => setMessage('Override applied')}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Apply Override
        </button>
      </div>
    </div>
  );
}