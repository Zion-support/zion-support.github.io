
export default function Reports() {_const [uptime, _setUptime] = useState<any[]>([]);
  const [seo, _setSeo] = useState<any>({});
  const [links, setLinks] = useState<any>({});
  const [deps, setDeps] = useState<any>({});
  const [changelog, setChangelog] = useState<any>({});
  const [pagespeed, setPagespeed] = useState<any>({});

  useEffect__(() => {_Promise.all([
      fetch('/api/reports/uptime').then(_(r) => r.json()).then(setUptime), _fetch('/api/reports/seo').then(_(r) => r.json()).then(setSeo), _fetch('/api/reports/links').then(_(r) => r.json()).then(setLinks), _fetch('/api/reports/deps').then(_(r) => r.json()).then(setDeps), _fetch('/api/reports/changelog').then(_(r) => r.json()).then(setChangelog), _fetch('/api/reports/pagespeed').then(_(r) => r.json()).then(setPagespeed)
    ]).catch__(() => {});
  }, []);

  const _lastUptime = uptime[uptime.length - 1];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Automation Reports</h1>
        <div className="text-sm text-gray-500">Autonomously generated and synced</div>
      </div>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Uptime</div>
          {_lastUptime ? (
            <div className="text-sm">Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {_lastUptime.results?.filter(_(r: unknown)=>r.status>=200&&r.status<400).length}/{_lastUptime.results?.length} ok</div>
          ) : (
            <div className="text-sm text-gray-500">No data</div>
          )}
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">SEO (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {_seo?.results?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Broken Links (weekly)</div>
          <div className="text-sm text-gray-600">Broken: {_links?.broken?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Dependencies (weekly)</div>
          <div className="text-sm text-gray-600">Checked: {_deps?.entries?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Changelog (weekly)</div>
          <div className="text-sm text-gray-600">Commits: {_changelog?.totalCommits || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">PageSpeed (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {_pagespeed?.results?.length || 0}</div>
        </div>
      </section>
    </div>
  );
}