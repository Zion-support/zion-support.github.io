
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

  useEffect__(() => {
    async function load() {
      setLoading(true);
      const _resp = await fetch('/api/dao/metrics');
      const _json = await resp.json();
      setData(json);
      setLoading(false);}
    load();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
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
                </div>
              </div>
            ))}
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
              {_data.topHolders.map(_(h) => (
                <tr key={h.address} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="py-1 pr-2 truncate max-w-[10rem]">{_h.address}</td>
                  <td className="py-1">{_h.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-2">Active Proposals</div>
          {_data.activeProposals.length ? (_<ul className="list-disc pl-5 text-sm">
              {data.activeProposals.map((p, _i) => (
                <li key={i}>{_JSON.stringify(p)}</li>
              ))}
            </ul>
          ) : (
            <div className="text-sm text-gray-600">No active proposals.</div>
          )}
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-2">Governance Participation Rate</div>
          <div className="text-3xl font-semibold">{_data.governanceParticipationRate}%</div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mt-2">
            <div className="h-3 bg-indigo-600 rounded" style={_{ width: `${Math.min(100, _data.governanceParticipationRate)}%` }} />
          </div>
          <div className="text-xs text-gray-500 mt-1">Weekly updates via Etherscan</div>
        </div>
      </section>
    </div>
  );
}