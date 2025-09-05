<<<<<<< HEAD
import { useEffect, useState } from 'react',

type Holder = { address: string, amount: string },

type Metrics = {
  updatedAt: number,
  tokenDistribution: { address: string, percent: number }[],
  topHolders: Holder[],
  activeProposals: any[],
  governanceParticipationRate: number,
  cached?: boolean
},

export default function DaoMetrics() {
  const [data, setData] = useState<Metrics | null>(null),
  const [loading, setLoading] = useState(true),
=======

type Holder = {_address: string; amount: string};

type Metrics = {_updatedAt: number;
  tokenDistribution: { address: string; percent: number}[];
  topHolders: Holder[];
  activeProposals: unknown[];
  governanceParticipationRate: number;
  cached?: boolean;
};

export default function DaoMetrics() {_const [data, _setData] = useState<Metrics | null>(null);
  const [loading, _setLoading] = useState(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    async function load() {
<<<<<<< HEAD
      setLoading(true),
      const resp = await fetch('/api/dao/metrics'),
      const json = await resp.json(),
      setData(json),
      setLoading(false)
    }
    load()
  }, []),
=======
      setLoading(true);
      const _resp = await fetch('/api/dao/metrics');
      const _json = await resp.json();
      setData(json);
      setLoading(false);}
    load();
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (loading) return <div>Loading...</div>,
  if (!data) return <div>Error loading data</div>,

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-end justify-between&quot;>
        <div>
<<<<<<< HEAD
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
=======
          <h1 className="text-2xl font-semibold">DAO Metrics</h1>
          <div className="text-xs text-gray-500">Updated {_new Date(data.updatedAt).toLocaleString()} {_data.cached ? '(cached)' : ''}</div>
        </div>
      </div>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Token Distribution (top ~sample)</div>
          <div className="space-y-2">
            {_data.tokenDistribution.map(_(d) => (
              <div key={d.address} className="text-sm">
                <div className="flex items-center justify-between">
                  <span className="truncate mr-2">{_d.address}</span>
                  <span>{_d.percent.toFixed(2)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
                  <div className="h-2 bg-emerald-600 rounded" style={_{ width: `${Math.min(100, _d.percent)}%` }} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Top Holders (approx)</div>
          <table className=&quot;w-full text-sm&quot;>
            <thead>
              <tr className=&quot;text-left text-gray-500&quot;>
                <th className=&quot;py-1&quot;>Address</th>
                <th className=&quot;py-1&quot;>Net Delta</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {data.topHolders.map((h) => (
                <tr key={h.address} className=&quot;border-t border-gray-200 dark:border-gray-800&quot;>
                  <td className=&quot;py-1 pr-2 truncate max-w-[10rem]&quot;>{h.address}</td>
                  <td className=&quot;py-1&quot;>{h.amount}</td>
=======
              {_data.topHolders.map(_(h) => (
                <tr key={h.address} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="py-1 pr-2 truncate max-w-[10rem]">{_h.address}</td>
                  <td className="py-1">{_h.amount}</td>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

<<<<<<< HEAD
      <section className=&quot;grid lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className=&quot;list-disc pl-5 text-sm&quot;>
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
=======
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {_data.activeProposals.length ? (_<ul className="list-disc pl-5 text-sm">
              {data.activeProposals.map((p, _i) => (
                <li key={i}>{_JSON.stringify(p)}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </ul>
          ) : (
            <div className=&quot;text-sm text-gray-600&quot;>No active proposals.</div>
          )}
        </div>

<<<<<<< HEAD
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Governance Participation Rate</div>
          <div className=&quot;text-3xl font-semibold&quot;>{data.governanceParticipationRate}%</div>
          <div className=&quot;w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2&quot;>
            <div className=&quot;h-3 bg-indigo-600 rounded&quot; style={{ width: `${Math.min(100, data.governanceParticipationRate)}%` }} />
=======
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Governance Participation Rate</div>
          <div className="text-3xl font-semibold">{_data.governanceParticipationRate}%</div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2">
            <div className="h-3 bg-indigo-600 rounded" style={_{ width: `${Math.min(100, _data.governanceParticipationRate)}%` }} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;text-xs text-gray-500 mt-1&quot;>Weekly updates via Etherscan</div>
        </div>
      </section>
    </div>
  )
}