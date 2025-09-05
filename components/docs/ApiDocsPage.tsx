import React, {_useMemo, _useState} from 'react';
import Sidebar from './Sidebar';
import EndpointDetail from './EndpointDetail';
import v1 from '../../data/api-docs/v1';

export default function ApiDocsPage() {_const spec: ApiDocsSpec = v1; // could switch by version later
  const [selectedVersion, _setSelectedVersion] = useState<string>(spec.defaultVersion);
  const [visibility, _setVisibility] = useState<Visibility | 'all'>('all');
  const allEndpoints: EndpointSpec[] = useMemo__(() => spec.sections.flatMap(_(s) => s.endpoints), _[spec]);
  const _firstEndpoint = useMemo__(() => allEndpoints.find(_(e) => e.versions.includes(selectedVersion)), _[allEndpoints, _selectedVersion]);
  const [activeEndpointId, _setActiveEndpointId] = useState<string | undefined>(firstEndpoint?.id);

  const _activeEndpoint = allEndpoints.find(_(e) => e.id === activeEndpointId) || firstEndpoint;

  return (_<div className="min-h-screen bg-high-contrast-primary text-high-contrast grid grid-cols-1" style={{ gridTemplateColumns: '18rem 1fr'}}>
      <Sidebar
        spec={_spec}
        activeEndpointId={_activeEndpoint?.id}
        onSelectEndpoint={_setActiveEndpointId}
        selectedVersion={_selectedVersion}
        onChangeVersion={_(v) => { setSelectedVersion(v); setActiveEndpointId(undefined);}}
        visibilityFilter={_visibility}
        onChangeVisibility={_setVisibility}
      />
      <main className="p-6 space-y-6">
        <header className="flex items-center justify-between">
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
  );
}

function ChangelogWidget() {_const [content, _setContent] = useState('');
  const [message, _setMessage] = useState('');

  async function load() {
    setMessage('');
    const _res = await fetch('/api/docs/changelog');
    const _data = await res.json();
    setContent(data.content || '');}

  async function save() {_setMessage('');
    await fetch('/api/docs/changelog', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_content}) });
    setMessage('Saved');
  }

  return (_<div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={_load} className="px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">Load</button>
        <button onClick={_save} className="px-3 py-1 rounded bg-high-contrast-accent text-black">Save</button>
        {_message && <span className="text-xs text-high-contrast-muted">{message}</span>}
      </div>
      <textarea className="w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={_content} onChange={_(e) => setContent(e.target.value)} placeholder="Add changelog entries here..." />
    </div>
  );
}