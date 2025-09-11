<<<<<<< HEAD
<<<<<<< HEAD
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

import { useEffect, useState } from 'react',;
;
type Holder = { address: string, amount: string },

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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                </div>
              </div>
<<<<<<< HEAD
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ))}
          </div>
        </div>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="border rounded p-4">
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
                <tr key={h.address} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="py-1 pr-2 truncate max-w-[10rem]">{h.address}</td>
                  <td className="py-1">{h.amount}</td>
                </tr>
<<<<<<< HEAD
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </tbody>
          </table>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className="list-disc pl-5 text-sm">
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
<<<<<<< HEAD
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
          ) : (
<<<<<<< HEAD

            <div className="text-sm text-gray-600">No active proposals.</div>
          )}
=======
            <div className="text-sm text-gray-600">No active proposals.</div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              ))}
            </ul>
          ) : (
            <div className="text-sm text-gray-600">No active proposals.</div>
          )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Governance Participation Rate</div>
          <div className="text-3xl font-semibold">{data.governanceParticipationRate}%</div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2">
            <div className="h-3 bg-indigo-600 rounded" style={{ width: `${Math.min(100, data.governanceParticipationRate)}%` }} />
          </div>
          <div className="text-xs text-gray-500 mt-1">Weekly updates via Etherscan</div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
}

  );
};
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======

=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
