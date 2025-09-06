<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-end justify-between&quot;>
        <div>
          <h1 className=&quot;text-2xl font-semibold&quot;>DAO Metrics</h1>
          <div className=&quot;text-xs text-gray-500&quot;>Updated {new Date(data.updatedAt).toLocaleString()} {data.cached ? '(cached)' : ''}</div>
        </div>
      </div>

      <section className=&quot;grid lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Token Distribution (top ~sample)</div>
          <div className=&quot;space-y-2&quot;>
            {data.tokenDistribution.map((d) => (
              <div key={d.address} className=&quot;text-sm&quot;>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;truncate mr-2&quot;>{d.address}</span>
                  <span>{d.percent.toFixed(2)}%</span>
                </div>
                <div className=&quot;w-full h-2 bg-gray-200 dark:bg-gray-800 rounded&quot;>
                  <div className=&quot;h-2 bg-emerald-600 rounded&quot; style={{ width: `${Math.min(100, d.percent)}%` }} />

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState } from 'react',;
;
type Holder = { address: string, amount: string },

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from 'react';

type Holder = { address: string, amount: string }
type Metrics = {
  updatedAt: number
  tokenDistribution: { address: string, percent: number }[]
  topHolders: Holder[]
  activeProposals: any[]
  governanceParticipationRate: number
  cached?: boolean
}
export default function DaoMetrics() {
  const [data, setData] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function load() {
      setLoading(true)
      const resp = await fetch('/api/dao/metrics')
      const json = await resp.json()
      setData(json)
      setLoading(false)
    }
    load()
  }, [])
  if (loading) return <div>Loading...</div>
  if (!data) return <div>Error loading data</div>

type Holder = { address: string, amount: string };
type Metrics = {
  updatedAt: number;
  tokenDistribution: { address: string, percent: number }[],;
  topHolders: Holder[];
  activeProposals: any[];
  governanceParticipationRate: number;
  cached?: boolean;
},;
export default function DaoMetrics(req, res) {
  try {
  const [data, setData] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    async function load() {;
      setLoading(true);
      const resp = await fetch('/api/dao/metrics');
      const json = await resp.json();
      setData(json);
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    load()
  }, []),
  if (loading) return <div>Loading...</div>,
  if (!data) return <div>Error loading data</div>,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
type Holder = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">DAO Metrics</h1>
          <div className="text-xs text-gray-500">Updated {new Date(data.updatedAt).toLocaleString()} {data.cached ? '(cached)' : ''}</div>
        </div>
      </div>
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Token Distribution (top ~sample)</div>
          <div className="space-y-2">
            {data.tokenDistribution.map((d) => (
              <div key={d.address} className="text-sm">
                <div className="flex items-center justify-between">
                  <span className="truncate mr-2">{d.address}</span>
                  <span>{d.percent.toFixed(2)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
                  <div className="h-2 bg-emerald-600 rounded" style={{ width: `${Math.min(100, d.percent)}%` }} />
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="border rounded p-4">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="font-medium mb-2">Top Holders (approx)</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1">Address</th>
                <th className="py-1">Net Delta</th>
              </tr>
            </thead>
            <tbody>
              {data.topHolders.map((h) => (
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                <tr key={h.address} className="border-t border-gray-200 dark:border-gray-800">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <td className="py-1 pr-2 truncate max-w-[10rem]">{h.address}</td>
                  <td className="py-1">{h.amount}</td>
=======

<div className='border rounded p-4'>
          <div className='font-medium mb-2'>Top Holders (approx)</div>
          <table className='w-full text-sm'>
            <thead>
              <tr className='text-left text-gray-500'>
                <th className='py-1'>Address</th>
                <th className='py-1'>Net Delta</th>
              </tr>
            </thead>
            <tbody>
              {data.topHolders.map(h => (
                <tr
                  key={h.address}
                  className='border-t border-gray-200 dark:border-gray-800'
                >
                  <td className='py-1 pr-2 truncate max-w-[10rem]'>
                    {h.address}
                  </td>
                  <td className='py-1'>{h.amount}</td>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <section className="grid lg:grid-cols-2 gap-6">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className="list-disc pl-5 text-sm">
=======

<section className='grid lg:grid-cols-2 gap-6'>
        <div className='border rounded p-4'>
          <div className='font-medium mb-2'>Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className='list-disc pl-5 text-sm'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
              ))}
            </ul>
          ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-sm text-gray-600">No active proposals.</div>


=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="text-sm text-gray-600">No active proposals.</div>
          )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            <div className="text-sm text-gray-600">No active proposals.</div>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Governance Participation Rate</div>
          <div className="text-3xl font-semibold">{data.governanceParticipationRate}%</div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2">
            <div className="h-3 bg-indigo-600 rounded" style={{ width: `${Math.min(100, data.governanceParticipationRate)}%` }} />
          </div>
          <div className="text-xs text-gray-500 mt-1">Weekly updates via Etherscan</div>
=======
=======
<div className='text-sm text-gray-600'>No active proposals.</div>
          )}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        </div>

        <div className='border rounded p-4'>
          <div className='font-medium mb-2'>Governance Participation Rate</div>
          <div className='text-3xl font-semibold'>
            {data.governanceParticipationRate}%
          </div>
          <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2'>
            <div
              className='h-3 bg-indigo-600 rounded'
              style={{
                width: `${Math.min(100, data.governanceParticipationRate)}%`,
              }}
            />
          </div>
          <div className='text-xs text-gray-500 mt-1'>
            Weekly updates via Etherscan
          </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

  );
};
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from 'react',
;
type Holder = { address: string, amount: string },
type Metrics = {
  updated_at: number,
  token_distribution: { address: string, percent: number }[],
  top_holders: Holder[],
  active_proposals: any[],
  governanceParticipationRate: number,
  cached?: boolean;
},
export default /**
 * DaoMetrics - Function description
 */
function DaoMetrics() {
  const [data, set_data] = useState < Metrics | null>(null),
  const [loading, set_loading] = useState (true),
  useEffect (() => {
    async /**
 * load - Function description
 */
function load() {
      set_loading (true),
      const resp = await fetch ('/api / dao / metrics'),
      const json = await resp.json (),
      set_data (json),
      set_loading (false);
    }
    load ();
  }, []),
  // Check condition
if (return <div > Loading...</div>, ) {
  $2
}
  // Check condition
if (return <div > Error loading data</div>, ) {
  $2
}
  return (
    <div className="space - y-6">;
      <div className="flex items - end justify - between">;
        <div>;
          <h1 className="text - 2xl font - semibold">DAO Metrics</h1>;
          <div className="text - xs text - gray - 500">Updated {new Date (data.updated_at).toLocaleString ()} {data.cached ? '(cached)' : ''}</div>;
        </div>;
      </div>;
      <section className="grid lg:grid - cols - 2 gap - 6">;
        <div className="border rounded p - 4">;
          <div className="font - medium mb - 2">Token Distribution (top ~sample)</div>;
          <div className="space - y-2">;
            {data.token_distribution.map ((d) => (
              <div key={d.address} className="text - sm">;
                <div className="flex items - center justify - between">;
                  <span className="truncate mr - 2">{d.address}</span>;
                  <span>{d.percent.to_fixed (2)}%</span>;
                </div>;
                <div className="w - full h - 2 bg - gray - 200 dark:bg - gray - 800 rounded">;
                  <div className="h - 2 bg - emerald - 600 rounded" style={{ width: `${Math.min (100, d.percent)}%` }} />;
                </div>;
              </div>))}
          </div>;
        </div>;
        <div className="border rounded p - 4">;
          <div className="font - medium mb - 2">Top Holders (approx)</div>;
          <table className="w - full text - sm">;
            <thead>;
              <tr className="text - left text - gray - 500">;
                <th className="py - 1">Address</th>;
                <th className="py - 1">Net Delta</th>;
              </tr>;
            </thead>;
            <tbody>;
              {data.top_holders.map ((h) => (
                <tr key={h.address} className="border - t border - gray - 200 dark:border - gray - 800">;
                  <td className="py - 1 pr - 2 truncate max - w-[10rem]">{h.address}</td>;
                  <td className="py - 1">{h.amount}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>;
      </section>;
      <section className="grid lg:grid - cols - 2 gap - 6">;
        <div className="border rounded p - 4">;
          <div className="font - medium mb - 2">Active Proposals</div>;
          {data.active_proposals.length ? (
            <ul className="list - disc pl - 5 text - sm">;
              {data.active_proposals.map ((p, i) => (
                <li key={i}>{JSON.stringify (p)}</li>))}
            </ul>) : (
            <div className="text - sm text - gray - 600">No active proposals.</div>)}
        </div>;
        <div className="border rounded p - 4">;
          <div className="font - medium mb - 2">Governance Participation Rate</div>;
          <div className="text - 3xl font - semibold">{data.governanceParticipationRate}%</div>;
          <div className="w - full h - 3 bg - gray - 200 dark:bg - gray - 800 rounded mt - 2">;
            <div className="h - 3 bg - indigo - 600 rounded" style={{ width: `${Math.min (100, data.governanceParticipationRate)}%` }} />;
          </div>;
          <div className="text - xs text - gray - 500 mt - 1">Weekly updates via Etherscan</div>;
        </div>;
      </section>;
    </div>);
}


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
