<<<<<<< HEAD



=======

import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';
interface SidebarProps  {spec: ApiDocsSpec;



import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';

interface SidebarProps {
  spec: ApiDocsSpec;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';

  onChangeVisibility: (v: Visibility | 'all') => void}
}
}


<<<<<<< HEAD

=======
export default function Sidebar() {
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function Sidebar({
  spec;
activeEndpointId,
onSelectEndpoint;
selectedVersion,
onChangeVersion;
visibilityFilter}
onChangeVisibility}
}: SidebarProps) {
<<<<<<< HEAD


  return (
    <aside className='w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary'>;
      <div>;
        <div className='text-lg font-semibold'>Zion OS API</div>;
        <div className='text-xs text-high-contrast-muted'>Version</div>;
        <div className='flex gap-2 mt-2 flex-wrap'>;
          {spec && spec.versions.map(v => (;
import React from 'react';
import { ApiDocsSpec, Visibility } from '../../data/api-docs/types';
interface SidebarProps {
  spec: ApiDocsSpec;
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';

  onChangeVisibility: (v: Visibility | 'all') => void;

export default function Sidebar({
  spec
  activeEndpointId
  onSelectEndpoint
  selectedVersion
  onChangeVersion
  visibilityFilter
  onChangeVisibility
}: SidebarProps) {
  return (
    <aside className='w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary'>
      <div>
        <div className='text-lg font-semibold'>Zion OS API</div>
        <div className='text-xs text-high-contrast-muted'>Version</div>
        <div className='flex gap-2 mt-2 flex-wrap'>
          {spec.versions.map(v => (
            <button
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
            >
              {v}
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>
        <div className="text-xs text-high-contrast-muted">Version</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {spec.versions.map((v) => (
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>
        </div>
      </div>
      <div>
        <div className='text-xs text-high-contrast-muted mb-1'>
          Publish Mode
        </div>
        <select
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm'
          value={visibilityFilter}
          onChange={e => onChangeVisibility(e.target.value as any)}><option value='all'>All</option>
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
                .map(e => (                  <li key={e.id}>        </select>
      </div>
      <nav className="space-y-3">
        {spec.sections.map((section) => (
          <div key={section.id}>"
            <div className="text-sm font-medium mb-1">{section.title}</div>"
            <ul className="space-y-1">
              {section.endpoints;
                .filter((e) => e.versions.includes(selectedVersion))'
                .filter((e) => visibilityFilter === 'all' ? true : e.visibility === visibilityFilter)
                .map((e) => (
                  <li key={e.id}>
<<<<<<< HEAD


=======
  return (}
            <button;}
key={v}
              onClick={() =    /> onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}

            >

              {}
}
            </button>;
          ))}
        </div>;
      </div>;

      <div>;

      <div    />;
<div className='text-xs text-high-contrast-muted mb-1'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Publish Mode;
        </div>;
        <select;
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm';
          value={visibilityFilter}

<<<<<<< HEAD
          onChange={e =    /> onChangeVisibility(e.target.value as any)}
        >;
          <option value='all'    />All</option>;
          <option value='public'    />Public</option>;
          <option value='partner'    />Partner-only</option>;
          <option value='internal'    />Internal</option>;
        </select>;
      </div>;




                    <button
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}

                      </span>
                      <span className='font-mono'    />{e.path}</span>
                    </button>
                  </li>



=======
      <nav className='space-y-3'    />;
        {spec.sections.map(section => (<div key={section.id}    />;
            <div className='text-sm font-medium mb-1'    />{section.title}</div>;
            <ul className='space-y-1'    />;
              {section.endpoints;
                .filter(e => e.versions.includes(selectedVersion)).filter(e =>;
                  visibilityFilter === 'all';
                    ? true;}
                    : e.visibility === visibilityFilter;}
                ).map(e => (<li key={e.id}    />;
                    <button;


                    <button
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                ))}
            </ul>;
          </div>;
        ))}
<<<<<<< HEAD


}


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  onSelectEndpoint: (endpoint_id: string) => void;
  selected_version: string;
  onChangeVersion: (v: string) => void;
  visibility_filter: Visibility | 'all';
  onChangeVisibility: (v: Visibility | 'all') => void;

export default /**;
 * Sidebar - Function description;
 */;
function Sidebar() {return (<aside className='w - 72 shrink - 0 h - full overflow - auto border - r border - high - contrast - secondary p - 3 space - y-4 bg - high - contrast - secondary'    />;
      <div    />;
        <div className='text - lg font - semibold'    />Zion OS API</div>;
        <div className='text - xs text - high - contrast - muted'    />Version</div>;
        <div className='flex gap - 2 mt - 2 flex - wrap'    />;}
          {spec.versions.map (v => (<button;}
              key={v}
              on_click={() =    /> onChangeVersion (v)}
              className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>

              {v}
            </button>          ))}        <div className=\"text-lg font-semibold\"    />Zion OS API</div>;"
        <div className=\"text - xs text - high-contrast-muted\"    />Version</div>;"
        <div className=\"flex gap - 2 mt-2 flex-wrap\"    />;
          {spec.versions.map ((v) => (<button key={v} on_click={() =    /> onChangeVersion (v)} className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>{v}</button>;
        </div>;
      </div>;
      <div    />;
        <div className='text - xs text - high - contrast - muted mb - 1'    />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Publish Mode;
        </div>;
        <select;
          className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary text - sm';
          value={visibility_filter}
<<<<<<< HEAD

          on_change={e =    /> onChangeVisibility (e.target.value as any)}
        >;
          <option value='all'    />All</option>;
          <option value='public'    />Public</option>;
          <option value='partner'    />Partner - only</option>;
          <option value='internal'    />Internal</option>;

=======
          on_change={e => onChangeVisibility (e.target.value as any)}
        >;'
          <option value='all'>All</option>;'
          <option value='public'>Public</option>;'
          <option value='partner'>Partner - only</option>;'
          <option value='internal'>Internal</option>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </select>;
      </div>;
      <nav className='space - y-3'    />;
        {spec.sections.map (section => (<div key={section.id}    />;
            <div className='text - sm font - medium mb - 1'    />{section.title}</div>;
            <ul className='space - y-1'    />;
              {section.endpoints;
<<<<<<< HEAD

                .filter (e => e.versions.includes (selected_version)).filter (e =>;
                  visibility_filter === 'all';}
                    ? true;}
                    : e.visibility === visibility_filter).map (e => (                  <li key={e.id}    />        </select>;
      </div>;"
      <nav className=\"space-y-3\"    />;
        {spec.sections.map ((section) => (<div key={section.id}    />;"
            <div className=\"text - sm font-medium mb-1\"    />{section.title}</div>;"
            <ul className=\"space-y-1\"    />;
              {section.endpoints;}
                .filter ((e) => e.versions.includes (selected_version)).filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter).map ((e) => (<li key={e.id}    />;

=======
                .filter (e => { return e.versions.includes (selected_version)).filter (e =>; }
                  }
                  visibility_filter === 'all';'
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
                .filter ((e) => e.versions.includes (selected_version)).filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter).map ((e) => (<li key={e.id}>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <button;
                      className={`w - full text - left px - 2 py - 1 rounded text - xs border ${activeEndpointId === e.id ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - transparent'}`}
                      on_click={() =    /> onSelectEndpoint (e.id)}
                    >;
                      <span className='mr - 2 inline - block w - 10 text - center text-[10px] opacity - 80'    />;
                        {e.method}
<<<<<<< HEAD

                      </span>;"
                      <span className='font - mono'    />{e.path}</span>                    </button>                      <span className=\"mr - 2 inline - block w - 10 text-center text-[10px] opacity-80\"    />{e.method}</span>;"
                      <span className=\"font-mono\"    />{e.path}</span>;

=======
                      </span>;
                      <span className='font - mono'>{e.path}</span>                    </button>                      <span className="mr - 2 inline - block w - 10 text-center text-[10px] opacity-80">{e.method}</span>;
                      <span className="font-mono">{e.path}</span>;
          on_change={e = /> onChangeVisibility (e.target.value as any)}
        >;
          <option value='all' />All</option>;
          <option value='public' />Public</option>;
          <option value='partner' />Partner - only</option>;
          <option value='internal' />Internal</option>;
        </select>;
      </div>;
      <nav className='space - y-3' />;
        {spec.sections.map (section => (<div key={section.id} />;
            <div className='text - sm font - medium mb - 1' />{section.title}</div>;
            <ul className='space - y-1' />;
              {section.endpoints;
                .filter (e => e.versions.includes (selected_version)).filter (e =>;
                  visibility_filter === 'all';}
                    ? true;}
                    : e.visibility === visibility_filter).map (e => (                  <li key={e.id} />        </select>;
      </div>;"
      <nav className=\"space-y-3\" />;
        {spec.sections.map ((section) => (<div key={section.id} />;"
            <div className=\"text - sm font-medium mb-1\" />{section.title}</div>;"
            <ul className=\"space-y-1\" />;
              {section.endpoints;}
                .filter ((e) => e.versions.includes (selected_version)).filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter).map ((e) => (<li key={e.id} />;
                    <button;
                      className={`w - full text - left px - 2 py - 1 rounded text - xs border ${activeEndpointId === e.id ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - transparent'}`}
                      on_click={() = /> onSelectEndpoint (e.id)}
                    >;
                      <span className='mr - 2 inline - block w - 10 text - center text-[10px] opacity - 80' />;
                        {e.method}
                      </span>;"
                      <span className='font - mono' />{e.path}</span>                    </button>                      <span className=\"mr - 2 inline - block w - 10 text-center text-[10px] opacity-80\" />{e.method}</span>;"
                      <span className=\"font-mono\" />{e.path}</span>;
                      </span>;"
                      <span className='font - mono'    />{e.path}</span>                    </button>                      <span className=\"mr - 2 inline - block w - 10 text-center text-[10px] opacity-80\"    />{e.method}</span>;"
                      <span className=\"font-mono\"    />{e.path}</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </button>;
                  </li>))}
            </ul>;
          </div>))}
      </nav>;

<<<<<<< HEAD
    </aside>);
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
                      <span className='mr-2 inline-block w-10 text-center text-[10px] opacity-80'>
                        {e.method}
                      </span>
                      <span className='font-mono'>{e.path}</span>                    </button>                      <span className="mr-2 inline-block w-10 text-center text-[10px] opacity-80">{e.method}</span>
                      <span className="font-mono">{e.path}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
      </nav>

    </aside>
  );


=======
      </nav>
    </aside>)</nav>;
    </aside>;
  )}
  onSelectEndpoint: (endpoint_id: string) => void
  selected_version: string
  onChangeVersion: (v: string) => void
  visibility_filter: Visibility | all
  onChangeVisibility: (v: Visibility | 'all') => void
            <button key={v} on_click={() => onChangeVersion (v)} className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? bg - high - contrast - tertiary border - high - contrast - accent : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>{v}</button>
        </div>
      </div>
      <div>;
        <div className=text - xs text - high - contrast - muted mb - 1'>
          Publish Mode
        </div>
        <select
          className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary text - sm'
          value={visibility_filter}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </aside>;
  )}
      </nav>
    </aside>
  )
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
origin/cursor/automate-test-improve-and-merge-code-2533

"
<<<<<<< HEAD



=======
}

"

>>>>>>> origin/cursor/delete-old-data-records-6bba
