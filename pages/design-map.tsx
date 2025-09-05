import React, {useMemo, useState} from 'react'
import Head from 'next/head'

export default function DesignMapPage() {const designMap = useMemo_(() => getZionDesignMap(), _[])
  const [screenName, setScreenName] = useState('')
  const [role, setRole] = useState('Talent')
  const [suggestion, setSuggestion] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function requestWireframe() {
    if (!screenName) return,
setIsLoading(true)
    setSuggestion(null)
    try {
      const res = await fetch('/api/figma/wireframe-suggest', _{
        method: 'POST', headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({screenName, role})})
      const json = await res.json()
      setSuggestion(json?.suggestion || 'No suggestion received')
    } catch (e: unknown) {setSuggestion(e?.message || 'Failed to fetch suggestion')} finally {setIsLoading(false)}
  }

  return (
    <>
      <Head>
        <title>Zion OS Design Map</title>
      </Head>
      <section className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Zion OS Design Map</h1>
          <div className=&quot;flex gap-2&quot;>
            <a href=&quot;/api/design-map&quot; className=&quot;px-3 py-2 rounded bg-gray-900 text-white text-sm&quot;>JSON</Link>
            <a href=&quot;/api/figma/export?kit=tailwind&quot; className=&quot;px-3 py-2 rounded bg-neon-blue text-black text-sm&quot;>Export Tailwind</Link>
            <a href=&quot;/api/figma/export?kit=chakra&quot; className=&quot;px-3 py-2 rounded bg-neon-purple text-white text-sm&quot;>Export Chakra</Link>
            <a href=&quot;/api/figma/export?kit=react&quot; className=&quot;px-3 py-2 rounded bg-neon-green text-black text-sm&quot;>Export React</Link>
          </div>
        </div>

        <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
          <MapColumn title=&quot;Foundations&quot; sections={designMap.products.foundations} />
          <MapColumn title=&quot;Talent UI&quot; sections={designMap.products.talent} />
          <MapColumn title=&quot;Client UI&quot; sections={designMap.products.client} />
          <MapColumn title=&quot;AI Tools UI&quot; sections={designMap.products.aiTools} />
          <MapColumn title=&quot;DAO & Token UI&quot; sections={designMap.products.dao} />
          <MapColumn title=&quot;Admin Console&quot; sections={designMap.products.admin} />
          <MapColumn title=&quot;Mobile Layouts&quot; sections={designMap.products.mobile} />
        </div>

        <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40&quot;>
          <h2 className=&quot;font-medium mb-3&quot;>Create New Screen</h2>
          <div className=&quot;flex flex-col md:flex-row gap-3 items-start md:items-end&quot;>
            <div className=&quot;flex-1 w-full&quot;>
              <label className=&quot;block text-xs text-gray-500 mb-1&quot;>Screen name</label>
              <input value={screenName} onChange={e => setScreenName(e.target.value)} className=&quot;w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40&quot; placeholder=&quot;e.g., Talent Dashboard - Insights&quot; />
            </div>
            <div>
              <label className=&quot;block text-xs text-gray-500 mb-1&quot;>Role</label>
              <select value={role} onChange={e => setRole(e.target.value)} className=&quot;px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40&quot;>                <option>Talent</option>
                <option>Client</option>
                <option>Admin</option>
                <option>DAO</option>
                <option>AI Tools</option>
                <option>Mobile</option>
              </select>
            </div>
            <button onClick={requestWireframe} className=&quot;px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60&quot; disabled={isLoading || !screenName}>
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
            </button>
          </div>
          {suggestion && (
            <pre className=&quot;mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800&quot;>{suggestion}</pre>          )}
        </div>
      </section>
    </>
  )
}

function MapColumn({ title, sections }: { title: string, sections: { id: string, title: string, items: { id: string, title: string }[] }[] }) {
  return (
    <div className=&quot;space-y-3&quot;>
      <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
      <div className=&quot;grid gap-3&quot;>
        {sections.map((s) => (
          <div key={s.id} className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40&quot;>
            <div className=&quot;font-medium mb-2&quot;>{s.title}</div>
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {s.items.map((i) => (
                <span key={i.id} className=&quot;text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800&quot;>
                  {i.title}                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}