:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
          <div>
            <div className="text-2xl font-bold">Zion OS API Documentation</div>
            <div className="text-sm text-high-contrast-muted">Developer-friendly API docs with live testing</div>
          </div>
          <div className="flex gap-2">
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/openapi" target="_blank" rel="noreferrer">OpenAPI</a>
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/postman" target="_blank" rel="noreferrer">Postman</a>
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/graphql" target="_blank" rel="noreferrer">GraphQL</a>
          </div>
        </header>
:components/docs/ApiDocsPage.tsx
        {activeEndpoint ? (

        {_activeEndpoint ? (
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
          <EndpointDetail endpoint={activeEndpoint} />
        ) : (
          <div className="text-sm text-high-contrast-muted">Select an endpoint from the sidebar</div>
        )}
        <section className="mt-8">
          <div className="text-lg font-semibold mb-2">Changelog</div>
          <ChangelogWidget />
        </section>
      </main>
    </div>
  )
}
function ChangelogWidget() {
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  async function load() {
    setMessage('')
    const res = await fetch('/api/docs/changelog')
    const data = await res.json()
    setContent(data.content |'')
  }
  async function save() {
    setMessage('')
    await fetch('/api/docs/changelog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) })

    setMessage('Saved')
  }
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={load} className="px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">Load</button>
        <button onClick={save} className="px-3 py-1 rounded bg-high-contrast-accent text-black">Save</button>
        {message && <span className="text-xs text-high-contrast-muted">{message}</span>}
      </div>
:components/docs/ApiDocsPage.tsx
      <textarea className="w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add changelog entries here..." />
    </div>
  )
}
      <textarea className=&quot;w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm&quot; value={content} onChange={(e) => setContent(e.target.value)} placeholder=&quot;Add changelog entries here...&quot; />    </div>
  )}
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
  );
};
      <textarea className=&quot;w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm&quot; value={content} onChange={(e) => setContent(e.target.value)} placeholder=&quot;Add changelog entries here...&quot; />    </div>
  )}
:backup-problematic-files/temp_broken_files/components/docs/ApiDocsPage.tsx
