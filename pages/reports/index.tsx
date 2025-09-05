<<<<<<< HEAD
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
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h1 className=&quot;text-2xl font-semibold&quot;>Automation Reports</h1>
        <div className=&quot;text-sm text-gray-500&quot;>Autonomously generated and synced</div>
      </div>

<<<<<<< HEAD
      <section className=&quot;grid lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-1&quot;>Uptime</div>
          {lastUptime ? (
            <div className=&quot;text-sm&quot;>Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {lastUptime.results?.filter((r:any)=>r.status>=200&&r.status<400).length}/{lastUptime.results?.length} ok</div>
=======
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Uptime</div>
          {_lastUptime ? (
            <div className="text-sm">Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {_lastUptime.results?.filter(_(r: unknown)=>r.status>=200&&r.status<400).length}/{_lastUptime.results?.length} ok</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <div className=&quot;text-sm text-gray-500&quot;>No data</div>
          )}
        </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </section>
    </div>
  )
}