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

  useEffect(() => {
    async function load() {
      setLoading(true),
      const resp = await fetch('/api/dao/metrics'),
      const json = await resp.json(),
      setData(json),
      setLoading(false)
    }
    load()
  }, []),

  if (loading) return <div>Loading...</div>,
  if (!data) return <div>Error loading data</div>,

  return (
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
              {data.topHolders.map((h) => (
                <tr key={h.address} className=&quot;border-t border-gray-200 dark:border-gray-800&quot;>
                  <td className=&quot;py-1 pr-2 truncate max-w-[10rem]&quot;>{h.address}</td>
                  <td className=&quot;py-1&quot;>{h.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className=&quot;grid lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className=&quot;list-disc pl-5 text-sm&quot;>
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
              ))}
            </ul>
          ) : (
            <div className=&quot;text-sm text-gray-600&quot;>No active proposals.</div>
          )}
        </div>

        <div className=&quot;border rounded p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Governance Participation Rate</div>
          <div className=&quot;text-3xl font-semibold&quot;>{data.governanceParticipationRate}%</div>
          <div className=&quot;w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2&quot;>
            <div className=&quot;h-3 bg-indigo-600 rounded&quot; style={{ width: `${Math.min(100, data.governanceParticipationRate)}%` }} />
          </div>
          <div className=&quot;text-xs text-gray-500 mt-1&quot;>Weekly updates via Etherscan</div>
        </div>
      </section>
    </div>
  )
}