import data from '../../data/reports/changelog.json';
export default function Changelog(){
  const d = data as any;
  return (
    <div className="py-10 space-y-3">
      <h1 className="text-2xl font-semibold">Recent Changes</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(d.generatedAt).toLocaleString()}</div>
      <ul className="text-sm">
        {d.changes?.map((x:any,i:number)=> (
          <li key={i}><code className="text-xs">{x.hash}</code> — {x.message} <span className="text-xs text-gray-500">({new Date(x.when).toLocaleString()})</span></li>
        ))}
      </ul>
    </div>
  );
}
