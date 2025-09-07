import React, { useMemo, useState } from 'react';
import Sidebar from './Sidebar';
import EndpointDetail from './EndpointDetail';
import v1 from '../../data/api-docs/v1';
import { ApiDocsSpec, EndpointSpec, Visibility } from '../../data/api-docs/types';

export default function ApiDocsPage() {
  const spec: ApiDocsSpec = v1, // could switch by version later
  const [selectedVersion, setSelectedVersion] = useState<string>(spec.defaultVersion)
  const [visibility, setVisibility] = useState<Visibility | 'all'>('all')
  const allEndpoints: EndpointSpec[] = useMemo(() => spec.sections.flatMap((s) => s.endpoints), [spec])
  const firstEndpoint = useMemo(() => allEndpoints.find((e) => e.versions.includes(selectedVersion)), [allEndpoints, selectedVersion])
  const [activeEndpointId, setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id)
  const activeEndpoint = allEndpoints.find((e) => e.id === activeEndpointId) |firstEndpoint
  return (
    <div className="min-h-screen bg-high-contrast-primary text-high-contrast grid grid-cols-1" style={{ gridTemplateColumns: '18rem 1fr' }}>
      <Sidebar
        spec={spec}
        activeEndpointId={activeEndpoint?.id}
        onSelectEndpoint={setActiveEndpointId}
        selectedVersion={selectedVersion}
        onChangeVersion={(v) => { setSelectedVersion(v), setActiveEndpointId(undefined) }}
        visibilityFilter={visibility}

          <div>

          <EndpointDetail endpoint={activeEndpoint} />
"
          <div className="text-sm text-high-contrast-muted">Select an endpoint from the sidebar</div>""
        <section className="mt-8">"
</section>"
          <div className="text-lg font-semibold mb-2">Changelog</div>"
          <ChangelogWidget />

        </section>
      </main>