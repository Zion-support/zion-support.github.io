<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
=======
<tr> <th className="text - left p - 2" >Route</th> <th className="text - left p - 2" >Last Modified</th> </tr> </thead> <tbody> </tr>) );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}</tbody> </table> </div> </div>) import fs from 'fs';
=======
import fs from 'fs';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import path from 'path';
<<<<<<< HEAD
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes |[];
    generatedAt = json.generatedAt |''

  } catch {}
  return { props: { routes, generatedAt } }
}
export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) ;
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datasite-map && map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    routes = json && json.routes || [];
    generatedAt = json && json.generatedAt || '';
=======
type RouteInfo = { path: string, last_modified: string },
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const file = path.join (process.cwd (), 'datasite - map.json');
  let routes: RouteInfo[] = [];  let generated_at = '';
  try {
    const raw = fs.readFileSync (file, 'utf - 8');
    const json = JSON.parse (raw);
    routes = json.routes || [];
    generated_at = json.generated_at || '';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {}
  return { props: { routes, generated_at } }
}
<<<<<<< HEAD

export default function SiteMapIntelPage(): any ({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">AI Automation: Site Map Intelligence</h1>;
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>;
      <div className="overflow-auto border rounded">;
        <table className="min-w-full text-sm">;
          <thead className="bg-gray-50">;
            <tr>;
              <th className="text-left p-2">Route</th>;
              <th className="text-left p-2">Last Modified</th>;
            </tr>;
          </thead>;
          <tbody>;
            {routes && routes.map(r => (;
              <tr key={r && r.path} className="border-t">;
                <td className="p-2">{r && r.path}</td>;
                <td className="p-2">{new Date(r && r.lastModified).toLocaleString()}</td>;
              </tr>;
            ))}
<<<<<<< HEAD
          </tbody>
        </table>
      </div>
    </div>
);
}
=======
          </tbody>;
        </table>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export default /**
 * SiteMapIntelPage - Function description
 */
function SiteMapIntelPage() {
  return (
    <div className="space - y-6">;
      <h1 className="text - 2xl font - semibold">AI Automation: Site Map Intelligence</h1>;
      <div className="text - xs text - gray - 500">Last updated: {generated_at ? new Date (generated_at).toLocaleString () : '—'}</div>;
      <div className="overflow - auto border rounded">;
        <table className="min - w-full text - sm">;
          <thead className="bg - gray - 50">;
            <tr>;
              <th className="text - left p - 2">Route</th>;
              <th className="text - left p - 2">Last Modified</th>;
            </tr>;
          </thead>;
          <tbody>;
            {routes.map (r => (
              <tr key={r.path} className="border - t">;
                <td className="p - 2">{r.path}</td>;
                <td className="p - 2">{new Date (r.last_modified).toLocaleString ()}</td>;
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
