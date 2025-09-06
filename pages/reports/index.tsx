<<<<<<< HEAD
import { useEffect, useState  } from 'react';
=======
import { useEffect, useState } from 'react';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function Reports() {
  const [uptime, setUptime] = useState<any[]>([]),
  const [seo, setSeo] = useState<any>({}),
  const [links, setLinks] = useState<any>({}),
  const [deps, setDeps] = useState<any>({}),
  const [changelog, setChangelog] = useState<any>({}),
  const [pagespeed, setPagespeed] = useState<any>({});
  useEffect(() => {
    Promise.all([
<<<<<<< HEAD
<<<<<<< HEAD
      fetch('/api/reports/uptime').then((r) => r.json()).then(setUptime);
      fetch('/api/reports/seo').then((r) => r.json()).then(setSeo);
      fetch('/api/reports/links').then((r) => r.json()).then(setLinks);
      fetch('/api/reports/deps').then((r) => r.json()).then(setDeps);
      fetch('/api/reports/changelog').then((r) => r.json()).then(setChangelog);
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
  }, []),
=======
      fetch('/api/reports/uptime')
        .then(r => r.json())
        .then(setUptime),
      fetch('/api/reports/seo')
        .then(r => r.json())
        .then(setSeo),
      fetch('/api/reports/links')
        .then(r => r.json())
        .then(setLinks),
      fetch('/api/reports/deps')
        .then(r => r.json())
        .then(setDeps),
      fetch('/api/reports/changelog')
        .then(r => r.json())
        .then(setChangelog),
      fetch('/api/reports/pagespeed')
        .then(r => r.json())
        .then(setPagespeed),
    ]).catch(() => {});
  }, []);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

  const lastUptime = null;
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
              /{lastUptime.results?.length} ok
            </div>
          ) : (
            <div className='text-sm text-gray-500'>No data</div>
          )}
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
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
