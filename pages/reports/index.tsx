>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { useEffect, useState } from 'react';


export default function Reports() {
  const [uptime, setUptime] = useState<any[]>([]),
  const [seo, setSeo] = useState<any>({}),
  const [links, setLinks] = useState<any>({}),
  const [deps, setDeps] = useState<any>({}),
  const [changelog, setChangelog] = useState<any>({}),



=======      fetch('/api/reports/uptime')
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
        </div>;
=======
=======
import {useEffect, useState} from 'react';

export default function Reports() {;
  const [uptime, setUptime] = useState<any[]>([]);
  const [seo, setSeo] = useState<any>({});
  const [links, setLinks] = useState<any>({});
  const [deps, setDeps] = useState<any>({});
  const [changelog, setChangelog] = useState<any>({});
  const [pagespeed, setPagespeed] = useState<any>({});

  useEffect(() => {;
    Promise && Promise.all([;
      fetch('/api/reports/uptime');
        .then(r => r && r.json());
        .then(setUptime),;
      fetch('/api/reports/seo');
        .then(r => r && r.json());
        .then(setSeo),;
      fetch('/api/reports/links');
        .then(r => r && r.json());
        .then(setLinks),;
      fetch('/api/reports/deps');
        .then(r => r && r.json());
        .then(setDeps),;
      fetch('/api/reports/changelog');
        .then(r => r && r.json());
        .then(setChangelog),;
      fetch('/api/reports/pagespeed');
        .then(r => r && r.json());
        .then(setPagespeed),;
    ]).catch(() => {});  }, []);

  const lastUptime = uptime[uptime && uptime.length - 1];

  return (
    <div className='space-y-6'>;
      <div>;
        <h1 className='text-2xl font-semibold'>Automation Reports</h1>;
        <div className='text-sm text-gray-500'>;
          Autonomously generated and synced;
        </div>;
      </div>;

      <section className='grid lg:grid-cols-2 gap-6'>;
        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>Uptime</div>;
          {lastUptime ? (;
            <div className='text-sm'>;
              Last check: {new Date(lastUptime && lastUptime.timestamp).toLocaleString()} —{' '}
              {;
                lastUptime && lastUptime.results?.filter(;
                  (r: any) => r && r.status >= 200 && r && r.status < 400;
                ).length;              }
              /{lastUptime && lastUptime.results?.length} ok;
            </div>;
          ) : (;
            <div className='text-sm text-gray-500'>No data</div>;
          )}

        </div>;
=======

}


}
      fetch('/api/reports/uptime').then((r) => r.json()).then(setUptime),
      fetch('/api/reports/seo').then((r) => r.json()).then(setSeo),
      fetch('/api/reports/links').then((r) => r.json()).then(setLinks),
      fetch('/api/reports/deps').then((r) => r.json()).then(setDeps),
      fetch('/api/reports/changelog').then((r) => r.json()).then(setChangelog),
=======      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {});
  }, []);
  const lastUptime = uptime[uptime.length - 1];
=======
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
  }, []);

  const lastUptime = uptime[uptime.length - 1];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Automation Reports</h1>
        <div className="text-sm text-gray-500">Autonomously generated and synced</div>
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='border rounded p-4'>;
          <div className='font-medium mb-1'>SEO (weekly)</div>;
          <div className='text-sm text-gray-600'>;
            Pages: {seo?.results?.length || 0}
          </div>;
        </div>;
=======
            Pages: {pagespeed?.results?.length || 0}
          </div>;
        </div>;
      </section>;

=======      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Uptime</div>
          {lastUptime ? (
            <div className="text-sm">Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {lastUptime.results?.filter((r: any) => r.status >= 200 && r.status < 400).length}/{lastUptime.results?.length} ok</div>
          ) : (
            <div className="text-sm text-gray-500">No data</div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-1">SEO (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {seo?.results?.length || 0}</div>
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Broken Links (weekly)</div>
          <div className="text-sm text-gray-600">Broken: {links?.broken?.length || 0}</div>
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Dependencies (weekly)</div>
          <div className="text-sm text-gray-600">Checked: {deps?.entries?.length || 0}</div>
        </div>
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Changelog (weekly)</div>
          <div className="text-sm text-gray-600">Commits: {changelog?.totalCommits || 0}</div>
        </div>


    </div>);
;
        </div>
      </section>
    </div>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
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

=======

        <div className="border rounded p-4">
          <div className="font-medium mb-1">PageSpeed (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {pagespeed?.results?.length || 0}</div>        </div>
      </section>
    </div>
  )
}

    </div>);
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
