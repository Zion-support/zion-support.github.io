import { useEffect, useState } from 'react',

export default function Reports() {
  const [uptime, setUptime] = useState<any[]>([]),
  const [seo, setSeo] = useState<any>({}),
  const [links, setLinks] = useState<any>({}),
  const [deps, setDeps] = useState<any>({}),
  const [changelog, setChangelog] = useState<any>({}),
  const [pagespeed, setPagespeed] = useState<any>({}),

  useEffect(() => {
    Promise.all([
      fetch('/api/reports/uptime').then((r) => r.json()).then(setUptime),
      fetch('/api/reports/seo').then((r) => r.json()).then(setSeo),
      fetch('/api/reports/links').then((r) => r.json()).then(setLinks),
      fetch('/api/reports/deps').then((r) => r.json()).then(setDeps),
      fetch('/api/reports/changelog').then((r) => r.json()).then(setChangelog),
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
  }, []),

  const lastUptime = uptime[uptime.length - 1],

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h1 className=&quot;text-2xl font-semibold&quot;>Automation Reports</h1>
        <div className=&quot;text-sm text-gray-500&quot;>Autonomously generated and synced</div>
      </div>

      <section className=&quot;grid lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>Uptime</div>
          {lastUptime ? (
            <div className=&quot;text-sm&quot;>Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {lastUptime.results?.filter((r:any)=>r.status>=200&&r.status<400).length}/{lastUptime.results?.length} ok</div>
          ) : (
            <div className=&quot;text-sm text-gray-500&quot;>No data</div>
          )}
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>SEO (weekly)</div>
          <div className=&quot;text-sm text-gray-600&quot;>Pages: {seo?.results?.length || 0}</div>
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>Broken Links (weekly)</div>
          <div className=&quot;text-sm text-gray-600&quot;>Broken: {links?.broken?.length || 0}</div>
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>Dependencies (weekly)</div>
          <div className=&quot;text-sm text-gray-600&quot;>Checked: {deps?.entries?.length || 0}</div>
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>Changelog (weekly)</div>
          <div className=&quot;text-sm text-gray-600&quot;>Commits: {changelog?.totalCommits || 0}</div>
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>PageSpeed (weekly)</div>
          <div className=&quot;text-sm text-gray-600&quot;>Pages: {pagespeed?.results?.length || 0}</div>
        </div>
      </section>
    </div>
  )
}