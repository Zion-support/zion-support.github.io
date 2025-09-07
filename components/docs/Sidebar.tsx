<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';
interface SidebarProps  {spec: ApiDocsSpec;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======



import React from 'react';
import { ApiDocsSpec, Visibility  } from '../../data/api-docs/types';

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
            >;
              {v}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SidebarProps {
  spec: ApiDocsSpec,
  activeEndpointId?: string;
  onSelectEndpoint: (endpointId: string) => void,
  selectedVersion: string,
  onChangeVersion: (v: string) => void,
  visibilityFilter: Visibility | 'all',
  onChangeVisibility: (v: Visibility | 'all') => void
}
export default function Sidebar({ spec, activeEndpointId, onSelectEndpoint, selectedVersion, onChangeVersion, visibilityFilter, onChangeVisibility }: SidebarProps) {
  return (
    <aside className="w-72 shrink-0 h-full overflow-auto border-r border-high-contrast-secondary p-3 space-y-4 bg-high-contrast-secondary">
      <div>
        <div className="text-lg font-semibold">Zion OS API</div>
<<<<<<< HEAD
        <div className="text-xs text-high-contrast-muted">Version</div>
        <div className="flex gap-2 mt-2 flex-wrap">
{spec.versions.map((v) => (
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs text-high-contrast-muted mb-1">Publish Mode</div>
        <select className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={visibilityFilter} onChange={(e) => onChangeVisibility(e.target.value as any)}>
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="partner">Partner-only</option>
          <option value="internal">Internal</option>
        </select>
      </div>
            >
              {v}
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="text-xs text-high-contrast-muted">Version</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {spec.versions.map((v) => (
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>
<<<<<<< HEAD
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
                .map(e => (                  <li key={e.id}>        </select>
      </div>
=======

          ))}

        </div>
      </div>
      <div>

        <div className="text-xs text-high-contrast-muted mb-1">Publish Mode</div>
        <select className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={visibilityFilter} onChange={(e) => onChangeVisibility(e.target.value as any)}>
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="partner">Partner-only</option>
          <option value="internal">Internal</option>
        </select>

      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  return (}
            <button;}
key={v}
              onClick={() =    /> onChangeVersion(v)}
              className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}

>>>>>>> origin/chore/fix-lint-and-merge
            >

              {}
}
            </button>;
          ))}
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            </button>          ))}        <div className="text-lg font-semibold">Zion OS API</div>;
        <div className="text-xs text-high-contrast-muted">Version</div>;
        <div className="flex gap-2 mt-2 flex-wrap">;
          {spec && spec.versions.map((v) => (;
            <button key={v} onClick={() => onChangeVersion(v)} className={`px-2 py-1 rounded border text-xs ${selectedVersion === v ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-high-contrast-secondary'}`}>{v}</button>;
        </div>;
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div>;

=======
      <div    />;
<div className='text-xs text-high-contrast-muted mb-1'    />;
>>>>>>> origin/chore/fix-lint-and-merge
          Publish Mode;
        </div>;
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
<<<<<<< HEAD
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
      <nav className='space-y-3'>;
        {spec && spec.sections.map(section => (;
          <div key={section && section.id}>;
            <div className='text-sm font-medium mb-1'>{section && section.title}</div>;
            <ul className='space-y-1'>;
              {section && section.endpoints;
                .filter(e => e && e.versions.includes(selectedVersion));
                .filter(e =>;
                  visibilityFilter === 'all';
                    ? true;
                    : e && e.visibility === visibilityFilter;
                );
                .map(e => (                  <li key={e && e.id}>        </select>;
      </div>;
      <nav className="space-y-3">;
        {spec && spec.sections.map((section) => (;
          <div key={section && section.id}>;
            <div className="text-sm font-medium mb-1">{section && section.title}</div>;
            <ul className="space-y-1">;
              {section && section.endpoints;
                .filter((e) => e && e.versions.includes(selectedVersion));
                .filter((e) => visibilityFilter === 'all' ? true : e && e.visibility === visibilityFilter);
                .map((e) => (;
                  <li key={e && e.id}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <button
                      className={`w-full text-left px-2 py-1 rounded text-xs border ${activeEndpointId === e.id ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-tertiary border-transparent'}`}
<<<<<<< HEAD
                      onClick={() =    /> onSelectEndpoint(e.id)}
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
=======
                      onClick={() => onSelectEndpoint(e.id)}
                    >
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <span className="mr-2 inline-block w-10 text-center text-[10px] opacity-80">{e.method}</span>
                      <span className="font-mono">{e.path}</span>
                    </button>
                  </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ))}
            </ul>;
          </div>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

}

<<<<<<< HEAD
      </nav>;
    </aside>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/chore/fix-lint-and-merge
          Publish Mode;
        </div>;
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
<<<<<<< HEAD
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
=======
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

<<<<<<< HEAD
    </aside>;
  );
}

}
}
}
}
    </aside>
  );
}
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      </nav>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
}

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
