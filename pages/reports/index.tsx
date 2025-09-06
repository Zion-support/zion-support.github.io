import { useEffect, useState  } from 'react';
import { useEffect, useState } from 'react';
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [pagespeed, setPagespeed] = useState<any>({});
  useEffect(() => {
    Promise.all([

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-semibold'>Automation Reports</h1>
        <div className='text-sm text-gray-500'>
          Autonomously generated and synced
        </div>
      </div>
      <section className='grid lg:grid-cols-2 gap-6'>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>Uptime</div>
          {lastUptime ? (
            <div className='text-sm'>
              Last check: {new Date(lastUptime.timestamp).toLocaleString()} —{' '}
              {
                lastUptime.results?.filter(
                  (r: any) => r.status >= 200 && r.status < 400
                ).length
              }
              /{lastUptime && lastUptime.results?.length} ok;
            </div>;
          ) : (;
            <div className='text-sm text-gray-500'>No data</div>;
          )}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>SEO (weekly)</div>
          <div className='text-sm text-gray-600'>
            Pages: {seo?.results?.length |0}
          </div>
        </div>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>Broken Links (weekly)</div>
          <div className='text-sm text-gray-600'>
            Broken: {links?.broken?.length |0}
          </div>
        </div>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>Dependencies (weekly)</div>
          <div className='text-sm text-gray-600'>
            Checked: {deps?.entries?.length |0}
          </div>
        </div>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>Changelog (weekly)</div>
          <div className='text-sm text-gray-600'>
            Commits: {changelog?.totalCommits |0}
          </div>
        </div>
        <div className='border rounded p-4'>
          <div className='font-medium mb-1'>PageSpeed (weekly)</div>
          <div className='text-sm text-gray-600'>
            Pages: {pagespeed?.results?.length |0}
          </div>
        </div>
      </section>
    </div>
);
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }, []);

  const lastUptime = uptime[uptime.length - 1];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Automation Reports</h1>
        <div className="text-sm text-gray-500">Autonomously generated and synced</div>
      </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Changelog (weekly)</div>
          <div className="text-sm text-gray-600">Commits: {changelog?.totalCommits || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">PageSpeed (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {pagespeed?.results?.length || 0}</div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
