<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react',;
;
type Holder = { address: string, amount: string },

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useEffect, useState } from 'react';
<<<<<<< HEAD

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

=======
type Holder = { address: string, amount: string };
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
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
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </tbody>
          </table>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {data.activeProposals.length ? (
            <ul className="list-disc pl-5 text-sm">
              {data.activeProposals.map((p, i) => (
                <li key={i}>{JSON.stringify(p)}</li>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
          ) : (
            <div className="text-sm text-gray-600">No active proposals.</div>
<<<<<<< HEAD
          )}
=======
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
