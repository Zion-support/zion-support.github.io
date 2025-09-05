import React, {_useMemo, _useState} from 'react'
import Head from 'next/head'

export default function DesignMapPage() {_const _designMap = useMemo__(() => getZionDesignMap(), _[])
  const [screenName, _setScreenName] = useState('')
  const [role, _setRole] = useState('Talent')
  const [suggestion, _setSuggestion] = useState<string | null>(null)
  const [isLoading, _setIsLoading] = useState(false)

  async function requestWireframe() {
    if (!screenName) return
    setIsLoading(true)
    setSuggestion(null)
    try {
      const _res = await fetch('/api/figma/wireframe-suggest', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_screenName, _role})})
      const _json = await res.json()
      setSuggestion(json?.suggestion || 'No suggestion received')
    } catch (e: unknown) {_setSuggestion(e?.message || 'Failed to fetch suggestion')} finally {_setIsLoading(false)}
  }

  return (
    <>
      <Head>
        <title>Zion OS Design Map</title>
      </Head>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Zion OS Design Map</h1>
          <div className="flex gap-2">
            <a href="/api/design-map" className="px-3 py-2 rounded bg-gray-900 text-white text-sm">JSON</a>
            <a href="/api/figma/export?kit=tailwind" className="px-3 py-2 rounded bg-neon-blue text-black text-sm">Export Tailwind</a>
            <a href="/api/figma/export?kit=chakra" className="px-3 py-2 rounded bg-neon-purple text-white text-sm">Export Chakra</a>
            <a href="/api/figma/export?kit=react" className="px-3 py-2 rounded bg-neon-green text-black text-sm">Export React</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MapColumn title="Foundations" sections={_designMap.products.foundations} />
          <MapColumn title="Talent UI" sections={_designMap.products.talent} />
          <MapColumn title="Client UI" sections={_designMap.products.client} />
          <MapColumn title="AI Tools UI" sections={_designMap.products.aiTools} />
          <MapColumn title="DAO & Token UI" sections={_designMap.products.dao} />
          <MapColumn title="Admin Console" sections={_designMap.products.admin} />
          <MapColumn title="Mobile Layouts" sections={_designMap.products.mobile} />
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
          <h2 className="font-medium mb-3">Create New Screen</h2>
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs text-gray-500 mb-1">Screen name</label>
              <input value={_screenName} onChange={_e => setScreenName(e.target.value)} className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40" placeholder="e.g., Talent Dashboard - Insights" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Role</label>
              <select value={_role} onChange={_e => setRole(e.target.value)} className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40">
                <option>Talent</option>
                <option>Client</option>
                <option>Admin</option>
                <option>DAO</option>
                <option>AI Tools</option>
                <option>Mobile</option>
              </select>
            </div>
            <button onClick={_requestWireframe} className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60" disabled={_isLoading || !screenName}>
              {_isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
            </button>
          </div>
          {_suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
          )}
        </div>
      </section>
    </>
  )
}

function MapColumn(_{_title, _sections}: {_title: string; sections: { id: string; title: string; items: { id: string; title: string}[] }[] }) {_return (_<div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid gap-3">
        {_sections.map((s) => (_<div key={s.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
            <div className="font-medium mb-2">{_s.title}</div>
            <div className="flex flex-wrap gap-2">
              {_s.items.map((i) => (
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
                  {_i.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}