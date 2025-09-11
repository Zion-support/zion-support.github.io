

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
            </ul>;
          </div>;
        ))}

}

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
}
}
}
}
    </aside>
  );
    </aside>
  );>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
