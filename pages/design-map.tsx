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

<<<<<<< HEAD
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
              <select value={role} onChange={e => setRole(e.target.value)} className=&quot;px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <option>Talent</option>
                <option>Client</option>
                <option>Admin</option>
                <option>DAO</option>
                <option>AI Tools</option>
                <option>Mobile</option>
              </select>
            </div>
<<<<<<< HEAD
            <button onClick={requestWireframe} className=&quot;px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60&quot; disabled={isLoading || !screenName}>
              {isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
            </button>
          </div>
          {suggestion && (
            <pre className=&quot;mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800&quot;>{suggestion}</pre>
=======
            <button onClick={_requestWireframe} className="px-3 py-2 rounded bg-gray-900 text-white text-sm disabled:opacity-60" disabled={_isLoading || !screenName}>
              {_isLoading ? 'Generating…' : 'GPT Wireframe Suggestion'}
            </button>
          </div>
          {_suggestion && (
            <pre className="mt-4 text-xs whitespace-pre-wrap p-3 rounded bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{suggestion}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          )}
        </div>
      </section>
    </>
  )
}

<<<<<<< HEAD
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
                  {i.title}
=======
function MapColumn(_{_title, _sections}: {_title: string; sections: { id: string; title: string; items: { id: string; title: string}[] }[] }) {_return (_<div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid gap-3">
        {_sections.map((s) => (_<div key={s.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
            <div className="font-medium mb-2">{_s.title}</div>
            <div className="flex flex-wrap gap-2">
              {_s.items.map((i) => (
                <span key={i.id} className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-800">
                  {_i.title}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}