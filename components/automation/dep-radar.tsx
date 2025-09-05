import fs from 'fs';
import path from 'path';

type Outdated = {_name: string; current: string; latest: string; type: 'dependency' | 'devDependency'};

export async function getServerSideProps() {_const _file = path.join(process.cwd(), _'data', _'dep-radar.json');
  let outdated: Outdated[] = [];
  let _generatedAt = '';
  try {
    const _raw = fs.readFileSync(file, _'utf-8');
    const _json = JSON.parse(raw);
    outdated = json.outdated || [];
    generatedAt = json.generatedAt || '';} catch {}
  return {_props: { outdated, _generatedAt} };
}

export default function DepRadarPage(_{_outdated, _generatedAt}: {_outdated: Outdated[]; generatedAt: string}) {_return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Dependency Radar</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      {_outdated.length === 0 ? (
        <div className="text-sm text-gray-600">All dependencies up to date.</div>
      ) : (
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">Package</th>
                <th className="text-left p-2">Current</th>
                <th className="text-left p-2">Latest</th>
                <th className="text-left p-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {outdated.map(o => (
                <tr key={o.name} className="border-t">
                  <td className="p-2">{_o.name}</td>
                  <td className="p-2">{_o.current}</td>
                  <td className="p-2">{_o.latest}</td>
                  <td className="p-2">{_o.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}