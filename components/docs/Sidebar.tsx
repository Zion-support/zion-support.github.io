<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



  spec: ApiDocsSpec;

export default function Sidebar(): any ({;
  spec,;
  activeEndpointId,;
  onSelectEndpoint,;
  selectedVersion,;
  onChangeVersion,;
  visibilityFilter,;
  onChangeVisibility,;
}: SidebarProps) {;

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
import { ApiDocsSpec, Visibility } from '../../data/api-docs/types';
interface SidebarProps {
spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <aside className='w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary'>;
      <div>;
        <div className='text-lg font-semibold'>Zion OS API</div>;
        <div className='text-xs text-high-contrast-muted'>Version</div>;
        <div className='flex gap-2 mt-2 flex-wrap'>;
          {spec && spec.versions.map(v => (;

=======
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <button
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

                    <button

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <div>
<div className='text-xs text-high-contrast-muted mb-1'>
          Publish Mode
        </div>
        <select
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm'
          value={visibilityFilter}
          onChange={e => onChangeVisibility(e.target.value as any)}
        >
          <option value='all'>All</option>
          <option value='public'>Public</option>
          <option value='partner'>Partner-only</option>
          <option value='internal'>Internal</option>
        </select>
      </div>
      <nav className='space-y-3'>
        {spec.sections.map(section => (
          <div key={section.id}>
            <div className='text-sm font-medium mb-1'>{section.title}</div>
            <ul className='space-y-1'>
              {section.endpoints
                .filter(e => e.versions.includes(selectedVersion))
                .filter(e =>
                  visibilityFilter === 'all'
                    ? true
                    : e.visibility === visibilityFilter
                )
                .map(e => (
                  <li key={e.id}>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <button
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
                      onClick={() => onSelectEndpoint(e.id)}
                    >
<<<<<<< HEAD
=======
                      <span className="mr-2 inline-block w-10 text-center text-[10px] opacity-80">{e.method}</span>
                      <span className="font-mono">{e.path}</span>
                    </button>
                  </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<span className='mr-2 inline-block w-10 text-center text-[10px] opacity-80'>
                        {e.method}
                      </span>
                      <span className='font-mono'>{e.path}</span>
                    </button>
                  </li>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                ))}
            </ul>;
          </div>;
        ))}
<<<<<<< HEAD

}


                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  onSelectEndpoint: (endpoint_id: string) => void;
  selected_version: string;
  onChangeVersion: (v: string) => void;
  visibility_filter: Visibility | 'all';
  onChangeVisibility: (v: Visibility | 'all') => void;
;
export default /**
 * Sidebar - Function description
 */
function Sidebar() {
  return (
    <aside className='w - 72 shrink - 0 h - full overflow - auto border - r border - high - contrast - secondary p - 3 space - y-4 bg - high - contrast - secondary'>;
      <div>;
        <div className='text - lg font - semibold'>Zion OS API</div>;
        <div className='text - xs text - high - contrast - muted'>Version</div>;
        <div className='flex gap - 2 mt - 2 flex - wrap'>;
          {spec.versions.map (v => (
            <button;
              key={v}
              on_click={() => onChangeVersion (v)}
              className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}
            >;
              {v}
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>;
        <div className="text - xs text - high-contrast-muted">Version</div>;
        <div className="flex gap - 2 mt-2 flex-wrap">;
          {spec.versions.map ((v) => (
            <button key={v} on_click={() => onChangeVersion (v)} className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>{v}</button>;
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
        {spec.sections.map (section => (
          <div key={section.id}>;
            <div className='text - sm font - medium mb - 1'>{section.title}</div>;
            <ul className='space - y-1'>;
              {section.endpoints;
                .filter (e => e.versions.includes (selected_version));
                .filter (e =>;
                  visibility_filter === 'all';
                    ? true;
                    : e.visibility === visibility_filter);
                .map (e => (                  <li key={e.id}>        </select>;
      </div>;
      <nav className="space-y-3">;
        {spec.sections.map ((section) => (
          <div key={section.id}>;
            <div className="text - sm font-medium mb-1">{section.title}</div>;
            <ul className="space-y-1">;
              {section.endpoints;
                .filter ((e) => e.versions.includes (selected_version));
                .filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter);
                .map ((e) => (
                  <li key={e.id}>;
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
    </aside>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </nav>
    </aside>;
  );
}

}
}
}
}
    </aside>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
