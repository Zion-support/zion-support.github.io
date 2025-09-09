import data from '../../data/reports/content-freshness.json';
export default function ContentFreshness(){
  const d = data as any;
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Content Freshness</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(d.generatedAt).toLocaleString()} · Threshold: {d.staleThresholdDays} days</div>
      <section>
        <h2 className="text-lg font-medium mb-2">Top 20 Most Stale</h2>
        <ul className="text-sm space-y-1">
          {d.mostStale?.slice(0,20).map((x:any,i:number)=> (
            <li key={i} className={x.ageDays> d.staleThresholdDays ? 'text-red-600':'text-yellow-600'}>
              {x.file} — {x.ageDays?.toFixed(1)} days
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
