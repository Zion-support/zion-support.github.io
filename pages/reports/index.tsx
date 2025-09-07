import { useEffect, useState  } from 'react';
export default function Reports() {
  const [uptime, setUptime] = useState<any[]>([]),
  const [seo, setSeo] = useState<any>({}),
  const [links, setLinks] = useState<any>({}),
  const [deps, setDeps] = useState<any>({}),
  const [changelog, setChangelog] = useState<any>({}),
  const [uptime, setUptime] = useState<any[]>([]);
  const [seo, setSeo] = useState<any>({});
  const [links, setLinks] = useState<any>({});
  const [deps, setDeps] = useState<any>({});
  const [changelog, setChangelog] = useState<any>({});
  const [pagespeed, setPagespeed] = useState<any>({});
  useEffect(() => {
    Promise.all([
      fetch('/api/reports/uptime').then((r) => r.json()).then(setUptime);
      fetch('/api/reports/seo').then((r) => r.json()).then(setSeo);
      fetch('/api/reports/links').then((r) => r.json()).then(setLinks);
      fetch('/api/reports/deps').then((r) => r.json()).then(setDeps);
      fetch('/api/reports/changelog').then((r) => r.json()).then(setChangelog);
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
  }, []),

      fetch('/api/reports/uptime')
        .then(r => r.json())
        .then(setUptime)
      fetch('/api/reports/seo')
        .then(r => r.json())
        .then(setSeo)
      fetch('/api/reports/links')
        .then(r => r.json())
        .then(setLinks)
      fetch('/api/reports/deps')
        .then(r => r.json())
        .then(setDeps)
      fetch('/api/reports/changelog')
        .then(r => r.json())
        .then(setChangelog)
      fetch('/api/reports/pagespeed')
        .then(r => r.json())
        .then(setPagespeed)
    ]).catch(() => {});  }, []);
  const lastUptime = uptime[uptime.length - 1];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </div>
);
