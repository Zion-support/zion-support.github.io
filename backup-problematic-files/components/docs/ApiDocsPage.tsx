
import React, { useMemo, useState } from 'react';''
import Sidebar from './Sidebar';''
import EndpointDetail from './EndpointDetail';''
import v1 from '../../data/api-docs/v1';''
import { ApiDocsSpec, EndpointSpec, Visibility } from '../../data/api-docs/types';'
export default function ApiDocsPage() {
  const spec: ApiDocsSpec = v1, // could switch by version later;
  const [selectedVersion, setSelectedVersion] = useState<string>(spec.defaultVersion)
</string>'
  const [visibility, setVisibility] = useState<Visibility | 'all'>('all')'
</Visibility>
  const [activeEndpointId, setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id)
</string>'
    <div className="min - h-screen bg - high - contrast - primary text - high - contrast grid grid - cols - 1" style={{ gridTemplateColumns: '18rem 1fr' }}>;'
</div>
      <Sidebar;
        spec={spec}
        activeEndpointId={active_endpoint?.id}
        onSelectEndpoint={setActiveEndpointId}
        selectedVersion={selectedVersion}
        onChangeVersion={(v) => { setSelectedVersion(v), setActiveEndpointId(undefined) }}
</Sidebar>'
      <main className="p-6 space-y-6">"
</main>"
        <header className="flex items-center justify-between">"
</header>
          <div>
</div>"
            <div className="text-2xl font-bold">Zion OS API Documentation</div>""
            <div className="text-sm text-high-contrast-muted">Developer-friendly API docs with live testing</div>"
          </div>"
          <div className="flex gap-2">"
</div>"
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/openapi" target="_blank" rel="noreferrer">OpenAPI</a>""
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/postman" target="_blank" rel="noreferrer">Postman</a>""
            <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/graphql" target="_blank" rel="noreferrer">GraphQL</a>"
          </div>
        </header>
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
      </div>"
      <textarea className="w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add changelog entries here..." />"
</textarea>
    </div>"