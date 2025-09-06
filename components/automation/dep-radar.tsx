import fs from 'fs'
import path from 'path'
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency' },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datadep-radar.json'),
  let outdated: Outdated[] = []
  let generatedAt = ''
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    const json = JSON.parse(raw)
    outdated = json.outdated || [],
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { outdated, generatedAt } }
}

export default function DepRadarPage({ outdated, generatedAt }: { outdated: Outdated[], generatedAt: string }) {
  return (
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
                <tr key={o.name} className=&quot;border-t&quot;>
                  <td className=&quot;p-2&quot;>{o.name}</td>
                  <td className=&quot;p-2&quot;>{o.current}</td>
                  <td className=&quot;p-2&quot;>{o.latest}</td>
                  <td className=&quot;p-2&quot;>{o.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}