import React from 'react'
import { ApiDocsSpec, Visibility } from '../../data/api-docs/types',

interface SidebarProps {
  spec: ApiDocsSpec,
  activeEndpointId?: string,
  onSelectEndpoint: (endpointId: string) => void,
  selectedVersion: string,
  onChangeVersion: (v: string) => void,
  visibilityFilter: Visibility | 'all',
  onChangeVisibility: (v: Visibility | 'all') => void
}

export default function Sidebar({ spec, activeEndpointId, onSelectEndpoint, selectedVersion, onChangeVersion, visibilityFilter, onChangeVisibility }: SidebarProps) {
  return (
    <aside className=&quot;w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary&quot;>
      <div>
        <div className=&quot;text-lg font-semibold&quot;>Zion OS API</div>
        <div className=&quot;text-xs text-high-contrast-muted&quot;>Version</div>
        <div className=&quot;flex gap-2 mt-2 flex-wrap&quot;>
          {spec.versions.map((v) => (
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>
import React from 'react';

interface SidebarProps {_spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (_endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (_v: string) => void;
  visibilityFilter: Visibility | 'all';
  onChangeVisibility: (_v: Visibility | 'all') => void;}

export default function Sidebar(_{_spec, _activeEndpointId, _onSelectEndpoint, _selectedVersion, _onChangeVersion, _visibilityFilter, _onChangeVisibility}: SidebarProps) {_return (_<aside className="w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary">
      <div>
        <div className="text-lg font-semibold">Zion OS API</div>
        <div className="text-xs text-high-contrast-muted">Version</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {spec.versions.map((v) => (_<button key={v} onClick={_() => onChangeVersion(v)} className={_`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{_v}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ))}
        </div>
      </div>

      <div>
        <div className=&quot;text-xs text-high-contrast-muted mb-1&quot;>Publish Mode</div>
        <select className=&quot;w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm&quot; value={visibilityFilter} onChange={(e) => onChangeVisibility(e.target.value as any)}>
          <option value=&quot;all&quot;>All</option>
          <option value=&quot;public&quot;>Public</option>
          <option value=&quot;partner&quot;>Partner-only</option>
          <option value=&quot;internal&quot;>Internal</option>
        </select>
      </div>

      <nav className=&quot;space-y-3&quot;>
        {spec.sections.map((section) => (
          <div key={section.id}>
            <div className=&quot;text-sm font-medium mb-1&quot;>{section.title}</div>
            <ul className=&quot;space-y-1&quot;>
              {section.endpoints
                .filter((e) => e.versions.includes(selectedVersion))
                .filter(_(e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter)
                .map(_(e) => (_<li key={e.id}>
                    <button
                      className={_`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
                      onClick={_() => onSelectEndpoint(e.id)}
                    >
                      <span className=&quot;mr-2 inline-block w-10 text-center text-[10px] opacity-80&quot;>{e.method}</span>
                      <span className=&quot;font-mono&quot;>{e.path}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}