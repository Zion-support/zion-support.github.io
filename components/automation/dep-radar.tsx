<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency' },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datadep-radar.json'),
  let outdated: Outdated[] = [],
  let generatedAt = '',
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    const json = JSON.parse(raw),
    outdated = json.outdated || [],
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { outdated, generatedAt } }
}

export default function DepRadarPage({ outdated, generatedAt }: { outdated: Outdated[], generatedAt: string }) {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: Dependency Radar</h1>
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      {outdated.length === 0 ? (
        <div className=&quot;text-sm text-gray-600&quot;>All dependencies up to date.</div>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ) : (
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50&quot;>
              <tr>
                <th className=&quot;text-left p-2&quot;>Package</th>
                <th className=&quot;text-left p-2&quot;>Current</th>
                <th className=&quot;text-left p-2&quot;>Latest</th>
                <th className=&quot;text-left p-2&quot;>Type</th>
              </tr>
            </thead>
            <tbody>
              {outdated.map(o => (
<<<<<<< HEAD
                <tr key={o.name} className=&quot;border-t&quot;>
                  <td className=&quot;p-2&quot;>{o.name}</td>
                  <td className=&quot;p-2&quot;>{o.current}</td>
                  <td className=&quot;p-2&quot;>{o.latest}</td>
                  <td className=&quot;p-2&quot;>{o.type}</td>
=======
                <tr key={o.name} className="border-t">
                  <td className="p-2">{_o.name}</td>
                  <td className="p-2">{_o.current}</td>
                  <td className="p-2">{_o.latest}</td>
                  <td className="p-2">{_o.type}</td>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}