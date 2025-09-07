
          <div>
</div>
            <div className="text-2xl font-bold">Zion OS API Documentation</div>""
            <div className="text-sm text-high-contrast-muted">Developer-friendly API docs with live testing</div>"
          </div>"
          <div className="flex gap-2">"
</div>"
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/openapi" target="_blank" rel="noreferrer">OpenAPI</a>""
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/postman" target="_blank" rel="noreferrer">Postman</a>""
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/graphql" target="_blank" rel="noreferrer">GraphQL</a>"
          </div>
          <EndpointDetail endpoint={activeEndpoint} />
</EndpointDetail>"
          <div className="text-sm text-high-contrast-muted">Select an endpoint from the sidebar</div>""
        <section className="mt-8">"
</section>"
          <div className="text-lg font-semibold mb-2">Changelog</div>"
          <ChangelogWidget />
</ChangelogWidget>
        </section>
      </main>
    </div>"
    <div className="space-y-2">"
</div>"
      <div className="flex gap-2">"
</div>"
        <button onClick={load} className="px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">Load</button>""
        <button onClick={save} className="px-3 py-1 rounded bg-high-contrast-accent text-black">Save</button>""
        {message && <span className="text-xs text-high-contrast-muted">{message}</span>}"
      </div>;"

