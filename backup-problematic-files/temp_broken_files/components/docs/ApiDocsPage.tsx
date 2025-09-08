:components/docs/ApiDocsPage.tsx
        onChangeVisibility={setVisibility}
      />
      <main className="p-6 space-y-6">
        <header className="flex items-center justify-between">
        onChangeVisibility={setVisibility}      />
      <main className=&quot;p-6 space-y-6&quot;>
        <header className=&quot;flex items-center justify-between&quot;>
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
