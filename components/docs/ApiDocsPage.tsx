import React, { useMemo, useState } from 'react',
import Sidebar from './Sidebar',
import EndpointDetail from './EndpointDetail',
import v1 from '../../data/api-docs/v1',
import { ApiDocsSpec, EndpointSpec, Visibility } from '../../data/api-docs/types',

export default function ApiDocsPage() {
  const spec: ApiDocsSpec = v1, // could switch by version later
  const [selectedVersion, setSelectedVersion] = useState<string>(spec.defaultVersion),
  const [visibility, setVisibility] = useState<Visibility | 'all'>('all'),
  const allEndpoints: EndpointSpec[] = useMemo(() => spec.sections.flatMap((s) => s.endpoints), [spec]),
  const firstEndpoint = useMemo(() => allEndpoints.find((e) => e.versions.includes(selectedVersion)), [allEndpoints, selectedVersion]),
  const [activeEndpointId, setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id),

  const activeEndpoint = allEndpoints.find((e) => e.id === activeEndpointId) || firstEndpoint,

  return (
    <div className=&quot;min-h-screen bg-high-contrast-primary text-high-contrast grid grid-cols-1&quot; style={{ gridTemplateColumns: '18rem 1fr' }}>
      <Sidebar
        spec={spec}
        activeEndpointId={activeEndpoint?.id}
        onSelectEndpoint={setActiveEndpointId}
        selectedVersion={selectedVersion}
        onChangeVersion={(v) => { setSelectedVersion(v), setActiveEndpointId(undefined) }}
        visibilityFilter={visibility}
        onChangeVisibility={setVisibility}      />
      <main className=&quot;p-6 space-y-6&quot;>
        <header className=&quot;flex items-center justify-between&quot;>
          <div>
            <div className=&quot;text-2xl font-bold&quot;>Zion OS API Documentation</div>
            <div className=&quot;text-sm text-high-contrast-muted&quot;>Developer-friendly API docs with live testing</div>
          </div>
          <div className=&quot;flex gap-2&quot;>
            <a className=&quot;px-3 py-1 rounded border border-high-contrast-accent&quot; href=&quot;/api/docs/openapi&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>OpenAPI</a>
            <a className=&quot;px-3 py-1 rounded border border-high-contrast-accent&quot; href=&quot;/api/docs/postman&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Postman</a>
            <a className=&quot;px-3 py-1 rounded border border-high-contrast-accent&quot; href=&quot;/api/docs/graphql&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>GraphQL</a>
          </div>
        </header>

        {_activeEndpoint ? (
          <EndpointDetail endpoint={activeEndpoint} />
        ) : (
          <div className=&quot;text-sm text-high-contrast-muted&quot;>Select an endpoint from the sidebar</div>
        )}

        <section className=&quot;mt-8&quot;>
          <div className=&quot;text-lg font-semibold mb-2&quot;>Changelog</div>
          <ChangelogWidget />
        </section>
      </main>
    </div>
  )
}

function ChangelogWidget() {
  const [content, setContent] = useState(''),
  const [message, setMessage] = useState(''),

  async function load() {
    setMessage(''),
    const res = await fetch('/api/docs/changelog'),
    const data = await res.json(),
    setContent(data.content || '')
  }

  async function save() {
    setMessage(''),
    await fetch('/api/docs/changelog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) }),
    setMessage('Saved')
  }

  return (
    <div className=&quot;space-y-2&quot;>
      <div className=&quot;flex gap-2&quot;>
        <button onClick={load} className=&quot;px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot;>Load</button>
        <button onClick={save} className=&quot;px-3 py-1 rounded bg-high-contrast-accent text-black&quot;>Save</button>
        {message && <span className=&quot;text-xs text-high-contrast-muted&quot;>{message}</span>}
      </div>
      <textarea className=&quot;w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm&quot; value={content} onChange={(e) => setContent(e.target.value)} placeholder=&quot;Add changelog entries here...&quot; />    </div>
  )
}