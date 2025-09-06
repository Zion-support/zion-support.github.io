<<<<<<< HEAD
<<<<<<< HEAD
 useEffect ( () => {
  async function load () {
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useEffect, useState } from 'react';

type Holder = { address: string, amount: string },
type Metrics = {
  updatedAt: number,
  tokenDistribution: { address: string, percent: number }[],
  topHolders: Holder[],
  activeProposals: any[],
  governanceParticipationRate: number,
  cached?: boolean
};

export default function DaoMetrics() {
  const [data, setData] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const resp = await fetch('/api/dao/metrics');
      const json = await resp.json();
      setData(json);
      setLoading(false)
    }
    load()
  }, []);

<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='space-y-6'>
      <div className='flex items-end justify-between'>
=======
    <div className="space-y-6">
      <div className="flex items-end justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                <div className='w-full h-2 bg-gray-200 dark:bg-gray-800 rounded'>
                  <div
                    className='h-2 bg-emerald-600 rounded'
                    style={{ width: `${Math.min(100, d.percent)}%` }}
                  />
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
                  <div className="h-2 bg-emerald-600 rounded" style={{ width: `${Math.min(100, d.percent)}%` }} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='border rounded p-4'>
          <div className='font-medium mb-2'>Top Holders (approx)</div>
          <table className='w-full text-sm'>
=======
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Top Holders (approx)</div>
          <table className="w-full text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1">Address</th>
                <th className="py-1">Net Delta</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {data.topHolders.map(h => (
                <tr
                  key={h.address}
                  className='border-t border-gray-200 dark:border-gray-800'
                >
                  <td className='py-1 pr-2 truncate max-w-[10rem]'>
                    {h.address}
                  </td>
                  <td className='py-1'>{h.amount}</td>
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {data.topHolders.map((h) => (
                <tr key={h.address} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="py-1 pr-2 truncate max-w-[10rem]">{h.address}</td>
                  <td className="py-1">{h.amount}</td>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='grid lg:grid-cols-2 gap-6'>
        <div className='border rounded p-4'>
          <div className='font-medium mb-2'>Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className='list-disc pl-5 text-sm'>
=======
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className="list-disc pl-5 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className="list-disc pl-5 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
              ))}
            </ul>
          ) : (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='text-sm text-gray-600'>No active proposals.</div>
=======
            <div className="text-sm text-gray-600">No active proposals.</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          )}
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
  );
=======
            <div className="text-sm text-gray-600">No active proposals.</div>
          )}
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
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
