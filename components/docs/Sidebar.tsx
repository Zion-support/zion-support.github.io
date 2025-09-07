
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';
interface SidebarProps  {spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';
<<<<<<< HEAD
  onChangeVisibility: (v: Visibility | 'all') => void
}

export default function Sidebar({
  spec
  activeEndpointId
  onSelectEndpoint
  selectedVersion
  onChangeVersion
  visibilityFilter
  onChangeVisibility
}: SidebarProps) {
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  return (
            <button
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}

<<<<<<< HEAD
      <nav className="space-y-3">
        {spec.sections.map((section) => (
          <div key={section.id}>
            <div className="text-sm font-medium mb-1">{section.title}</div>
            <ul className="space-y-1">
              {section.endpoints
                .filter((e) => e.versions.includes(selectedVersion))
                .filter((e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter)
                .map((e) => (
                  <li key={e.id}>
=======
            >
=======
  onChangeVisibility: (v: Visibility | 'all') => void;
}export default function Sidebar() {return (<button;
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}<nav className="space-y-3">;
        {spec.sections.map((section) => (<div key={section.id}>;
            <div className="text-sm font-medium mb-1">{section.title}</div>;
            <ul className="space-y-1">;
              {section.endpoints;
                .filter((e) => e.versions.includes(selectedVersion)).filter((e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter).map((e) => (<li key={e.id}>;
            >;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
              {v}
            </button>;
          ))}
        </div>;
      </div>;
      <div>;
<div className='text-xs text-high-contrast-muted mb-1'>;
          Publish Mode;
        </div>;
        <select;
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm';
          value={visibilityFilter}
          onChange={e => onChangeVisibility(e.target.value as any)}
        >;
          <option value='all'>All</option>;
          <option value='public'>Public</option>;
          <option value='partner'>Partner-only</option>;
          <option value='internal'>Internal</option>;
        </select>;
      </div>;
      <nav className='space-y-3'>;
        {spec.sections.map(section => (<div key={section.id}>;
            <div className='text-sm font-medium mb-1'>{section.title}</div>;
            <ul className='space-y-1'>;
              {section.endpoints;
                .filter(e => e.versions.includes(selectedVersion)).filter(e =>;
                  visibilityFilter === 'all';
                    ? true;
                    : e.visibility === visibilityFilter;
                ).map(e => (<li key={e.id}>;
                    <button;
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
                      onClick={() => onSelectEndpoint(e.id)}
                    >;
<span className='mr-2 inline-block w-10 text-center text-[10px] opacity-80'>;
                        {e.method}
<<<<<<< HEAD
                      </span>
                      <span className='font-mono'>{e.path}</span>
                    </button>
                  </li>
=======
                      </span>;
                      <span className='font-mono'>{e.path}</span>;
                    </button>;
                  </li>;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
                ))}
            </ul>;
          </div>;
        ))}
  onSelectEndpoint: (endpoint_id: string) => void;
  selected_version: string;
  onChangeVersion: (v: string) => void;
  visibility_filter: Visibility | 'all';
  onChangeVisibility: (v: Visibility | 'all') => void;export default /**;
 * Sidebar - Function description;
 */;
function Sidebar() {return (<aside className='w - 72 shrink - 0 h - full overflow - auto border - r border - high - contrast - secondary p - 3 space - y-4 bg - high - contrast - secondary'>;
      <div>;
        <div className='text - lg font - semibold'>Zion OS API</div>;
        <div className='text - xs text - high - contrast - muted'>Version</div>;
        <div className='flex gap - 2 mt - 2 flex - wrap'>;
          {spec.versions.map (v => (<button;
              key={v}
              on_click={() => onChangeVersion (v)}
              className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}
            >;
              {v}
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>;
        <div className="text - xs text - high-contrast-muted">Version</div>;
        <div className="flex gap - 2 mt-2 flex-wrap">;
          {spec.versions.map ((v) => (<button key={v} on_click={() => onChangeVersion (v)} className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>{v}</button>;
        </div>;
      </div>;
      <div>;
        <div className='text - xs text - high - contrast - muted mb - 1'>;
          Publish Mode;
        </div>;
        <select;
          className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary text - sm';
          value={visibility_filter}
          on_change={e => onChangeVisibility (e.target.value as any)}
        >;
          <option value='all'>All</option>;
          <option value='public'>Public</option>;
          <option value='partner'>Partner - only</option>;
          <option value='internal'>Internal</option>;
        </select>;
      </div>;
      <nav className='space - y-3'>;
        {spec.sections.map (section => (<div key={section.id}>;
            <div className='text - sm font - medium mb - 1'>{section.title}</div>;
            <ul className='space - y-1'>;
              {section.endpoints;
                .filter (e => e.versions.includes (selected_version)).filter (e =>;
                  visibility_filter === 'all';
                    ? true;
                    : e.visibility === visibility_filter).map (e => (                  <li key={e.id}>        </select>;
      </div>;
      <nav className="space-y-3">;
        {spec.sections.map ((section) => (<div key={section.id}>;
            <div className="text - sm font-medium mb-1">{section.title}</div>;
            <ul className="space-y-1">;
              {section.endpoints;
                .filter ((e) => e.versions.includes (selected_version)).filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter).map ((e) => (<li key={e.id}>;
                    <button;
                      className={`w - full text - left px - 2 py - 1 rounded text - xs border ${activeEndpointId === e.id ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - transparent'}`}
                      on_click={() => onSelectEndpoint (e.id)}
                    >;
                      <span className='mr - 2 inline - block w - 10 text - center text-[10px] opacity - 80'>;
                        {e.method}
                      </span>;
                      <span className='font - mono'>{e.path}</span>                    </button>                      <span className="mr - 2 inline - block w - 10 text-center text-[10px] opacity-80">{e.method}</span>;
                      <span className="font-mono">{e.path}</span>;
                    </button>;
                  </li>))}
            </ul>;
          </div>))}
      </nav>;
    </aside>)</nav>;
    </aside>;
  )}}
}
}
}
<<<<<<< HEAD
}
    </aside>
  );

<<<<<<< HEAD
=======
}
=======
    </aside>;
  )}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
