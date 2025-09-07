<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';
interface SidebarProps  {spec: ApiDocsSpec;
=======



>>>>>>> origin/main
import React from 'react';
import { ApiDocsSpec, Visibility,
  from '../../data/api-docs/types';

interface SidebarProps {
  spec: ApiDocsSpec;
>>>>>>> origin/chore/fix-lint-and-merge
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void;
  selectedVersion: string;
  onChangeVersion: (v: string) => void;
  visibilityFilter: Visibility | 'all';

  onChangeVisibility: (v: Visibility | 'all') => void}
}
}
<<<<<<< HEAD
export default function Sidebar({
  spec;
activeEndpointId,
onSelectEndpoint,
  selectedVersion,
onChangeVersion,
  visibilityFilter,
  onChangeVisibility},,
  }: SidebarProps) {
  return (}
            <button key={v}
            onClick={() = /> onChangeVersion(v)
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'`}
=======

<<<<<<< HEAD
export default function Sidebar() {
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
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
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
            <button;
              key={v}
              onClick={() => onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
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
=======
  return (}
            <button;}
key={v}
              onClick={() =    /> onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}
>>>>>>> origin/main

>>>>>>> origin/chore/fix-lint-and-merge
            >

              {}
}
            </button>;
          ))}
        </div>;
      </div>;
<<<<<<< HEAD
      <div>;

=======
      <div    />;
<div className='text-xs text-high-contrast-muted mb-1'    />;
>>>>>>> origin/chore/fix-lint-and-merge
          Publish Mode;
        </div>;
<<<<<<< HEAD
        <select className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm';
          value={visibilityFilter onChange={e = /> onChangeVisibility(e.target.value as any)
        >;
          <option value='all' />All</option>;
          <option value='public' />Public</option>;
          <option value='partner' />Partner-only</option>;
          <option value='internal' />Internal</option>}
            </select>
            </div>
            <nav className='space-y-3' />
            {spec.sections.map(section => (
          <div key={section.id />}
            <div className='text-sm font-medium mb-1' />{section.title</div>,
  <ul className='space-y-1' />,
  {section.endpoints;,,
  .filter(e => e.versions.includes(selectedVersion)).filter(e =>,
  visibilityFilter === 'all',
  ? true;}
                    : e.visibility === visibilityFilter;},,
   ).map(e => (,
  <li key={e.id} /> <button className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`} onClick={() = /> onSelectEndpoint(e.id)}
=======
        <select;
          className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm';
          value={visibilityFilter}
<<<<<<< HEAD

=======
          onChange={e =    /> onChangeVisibility(e.target.value as any)}
        >;
          <option value='all'    />All</option>;
          <option value='public'    />Public</option>;
          <option value='partner'    />Partner-only</option>;
          <option value='internal'    />Internal</option>;
        </select>;
      </div>;
      <nav className='space-y-3'    />;
        {spec.sections.map(section => (<div key={section.id}    />;
            <div className='text-sm font-medium mb-1'    />{section.title}</div>;
            <ul className='space-y-1'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              {section.endpoints;
                .filter(e => e.versions.includes(selectedVersion)).filter(e =>;
                  visibilityFilter === 'all';
                    ? true;}
                    : e.visibility === visibilityFilter;}
                ).map(e => (<li key={e.id}    />;
                    <button;
<<<<<<< HEAD

=======
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
                      onClick={() =    /> onSelectEndpoint(e.id)}
>>>>>>> origin/main
                    >;
<span className='mr-2 inline-block w-10 text-center text-[10px] opacity-80'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                        {e.method}

<<<<<<< HEAD

                    </button>
                  </li>
=======
                      </span>
                      <span className='font-mono'    />{e.path}</span>
                    </button>
                  </li>

>>>>>>> origin/chore/fix-lint-and-merge
                ))}
            </ul>;
          </div>;
        ))}
<<<<<<< HEAD
=======
  onSelectEndpoint: (endpoint_id: string) => void;
  selected_version: string;
  onChangeVersion: (v: string) => void;
  visibility_filter: Visibility | 'all';
  onChangeVisibility: (v: Visibility | 'all') => void;
export default /**;
 * Sidebar - Function description;
 */;
<<<<<<< HEAD
function Sidebar() {return (
          <aside className='w - 72 shrink - 0 h - full overflow - auto border - r border - high - contrast - secondary p - 3 space - y-4 bg - high - contrast - secondary' />;
      <div />;
        <div className='text - lg font - semibold' />Zion OS API</div>;
        <div className='text - xs text - high - contrast - muted' />Version</div>;
        <div className='flex gap - 2 mt - 2 flex - wrap' />;}
          {spec.versions.map (v => (
          <button key={v on_click={() = /> onChangeVersion (v)}
              className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>

              {v}
            </button>          ))}        <div className=\"text-lg font-semibold\" />Zion OS API</div>;"
        <div className=\"text - xs text - high-contrast-muted\" />Version</div>;"
        <div className=\"flex gap - 2 mt-2 flex-wrap\" />;
          {spec.versions.map ((v) => (
          <button key={v on_click={() = /> onChangeVersion (v)} className={`px - 2 py - 1 rounded border text - xs ${selected_version === v ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - high - contrast - secondary'}`}>{v}</button>;
=======
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
>>>>>>> origin/main
        </div>;
      </div>;
      <div    />;
        <div className='text - xs text - high - contrast - muted mb - 1'    />;
>>>>>>> origin/chore/fix-lint-and-merge
          Publish Mode;
        </div>;
<<<<<<< HEAD
        <select className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary text - sm';
          value={visibility_filter on_change={e = /> onChangeVisibility (e.target.value as any)
=======
        <select;
          className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary text - sm';
          value={visibility_filter}
<<<<<<< HEAD
          on_change={e => onChangeVisibility (e.target.value as any)}
        >;'
          <option value='all'>All</option>;'
          <option value='public'>Public</option>;'
          <option value='partner'>Partner - only</option>;'
          <option value='internal'>Internal</option>;'
=======
          on_change={e =    /> onChangeVisibility (e.target.value as any)}
        >;
          <option value='all'    />All</option>;
          <option value='public'    />Public</option>;
          <option value='partner'    />Partner - only</option>;
          <option value='internal'    />Internal</option>;
>>>>>>> origin/chore/fix-lint-and-merge
        </select>;
      </div>;
      <nav className='space - y-3'    />;
        {spec.sections.map (section => (<div key={section.id}    />;
            <div className='text - sm font - medium mb - 1'    />{section.title}</div>;
            <ul className='space - y-1'    />;
              {section.endpoints;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
                    <button;
                      className={`w - full text - left px - 2 py - 1 rounded text - xs border ${activeEndpointId === e.id ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - transparent'}`}
                      on_click={() =    /> onSelectEndpoint (e.id)}
                    >;
                      <span className='mr - 2 inline - block w - 10 text - center text-[10px] opacity - 80'    />;
                        {e.method}
<<<<<<< HEAD
                      </span>;
                      <span className='font - mono'>{e.path}</span>                    </button>                      <span className="mr - 2 inline - block w - 10 text-center text-[10px] opacity-80">{e.method}</span>;
                      <span className="font-mono">{e.path}</span>;
          on_change={e = /> onChangeVisibility (e.target.value as any)}
>>>>>>> origin/main
        >;
          <option value='all' />All</option>;
          <option value='public' />Public</option>;
          <option value='partner' />Partner - only</option>;
          <option value='internal' />Internal</option>}
            </select>
            </div>
            <nav className='space - y-3' />
            {spec.sections.map (section => (
          <div key={section.id />}
            <div className='text - sm font - medium mb - 1' />{section.title</div>;
            <ul className='space - y-1' />;
              {section.endpoints;
                .filter (e => e.versions.includes (selected_version)).filter (e =>;
                  visibility_filter === 'all';}
                    ? true;}
                    : e.visibility === visibility_filter).map (e => (                  <li key={e.id} />        </select>;
      </div>;"
      <nav className=\"space-y-3\" />;
        {spec.sections.map ((section) => (
          <div key={section.id} />;"
            <div className=\"text - sm font-medium mb-1\" />{section.title}</div>;"
            <ul className=\"space-y-1\" />;
              {section.endpoints;}
                .filter ((e) => e.versions.includes (selected_version)).filter ((e) => visibility_filter === 'all' ? true : e.visibility === visibility_filter).map ((e) => (
          <li key={e.id} />;
                    <button className={`w - full text - left px - 2 py - 1 rounded text - xs border ${activeEndpointId === e.id ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - tertiary border - transparent'}`}
                      on_click={() = /> onSelectEndpoint (e.id)}
                    >;
                      <span className='mr - 2 inline - block w - 10 text - center text-[10px] opacity - 80' />;
                        {e.method}
                      </span>;"
                      <span className='font - mono' />{e.path}</span>                    </button>                      <span className=\"mr - 2 inline - block w - 10 text-center text-[10px] opacity-80\" />{e.method}</span>;"
                      <span className=\"font-mono\" />{e.path}</span>;
=======
                      </span>;"
                      <span className='font - mono'    />{e.path}</span>                    </button>                      <span className=\"mr - 2 inline - block w - 10 text-center text-[10px] opacity-80\"    />{e.method}</span>;"
                      <span className=\"font-mono\"    />{e.path}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
                    </button>;
                  </li>))}
            </ul>;
          </div>))}
      </nav>;
    </aside>)</nav>;
    </aside>;
<<<<<<< HEAD
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
=======
  )}}
}
}
}

}
    </aside>
  );

}

"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
