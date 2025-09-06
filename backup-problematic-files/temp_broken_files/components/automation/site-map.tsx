import fs from 'fs',
import path from 'path',
type RouteInfo = { path: string, lastModified: string },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datasite-map.json'),
  let routes: RouteInfo[] = [],
  let generatedAt = '',
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    const json = JSON.parse(raw),
    routes = json.routes || [],
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}

export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: Site Map Intelligence</h1>
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className=&quot;overflow-auto border rounded&quot;>
        <table className=&quot;min-w-full text-sm&quot;>
          <thead className=&quot;bg-gray-50&quot;>            <tr>
              <th className=&quot;text-left p-2&quot;>Route</th>
              <th className=&quot;text-left p-2&quot;>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {routes.map(r => (
              <tr key={r.path} className=&quot;border-t&quot;>
                <td className=&quot;p-2&quot;>{r.path}</td>
                <td className=&quot;p-2&quot;>{new Date(r.lastModified).toLocaleString()}</td>              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}