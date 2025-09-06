<<<<<<< HEAD
<<<<<<< HEAD

<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
=======
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
=======
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
=======
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },
export async function getServerSideProps() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
<<<<<<< HEAD
    routes = json.routes |[];
    generatedAt = json.generatedAt |''

  } catch {}
  return { props: { routes, generatedAt } }
}
=======
    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Site Map Intelligence</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="overflow-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2">Route</th>
              <th className="text-left p-2">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {routes.map(r => (
              <tr key={r.path} className="border-t">
                <td className="p-2">{r.path}</td>
                <td className="p-2">{new Date(r.lastModified).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
=======
    </div>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
