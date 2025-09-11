
<<<<<<< HEAD
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes |[];
    generatedAt = json.generatedAt |''
=======

}</tbody> </table> </div> </div>) import fs from 'fs';
=======
import fs from 'fs';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import path from 'path';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch {}
  return { props: { routes, generatedAt } }
}
    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}

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

}</tbody> </table> </div> </div>) import fs from 'fs';
import fs from 'fs';
import path from 'path';


    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}



export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) ;
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datasite-map && map.json');
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
<<<<<<< HEAD
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
=======
=======
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    routes = json && json.routes || [];
    generatedAt = json && json.generatedAt || '';
type RouteInfo = { path: string, last_modified: string },
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const file = path.join (process.cwd (), 'datasite - map.json');
  let routes: RouteInfo[] = [];  let generated_at = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    routes = json.routes |[];
    generatedAt = json.generatedAt |''

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch {}
  return { props: { routes, generated_at } }
}


    </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


);
}
<<<<<<< HEAD
=======
          </tbody>;
        </table>;
      </div>;
    </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <tr>
              <th className=&quot;text-left p-2&quot;>Route</th>
              <th className=&quot;text-left p-2&quot;>Last Modified</th>
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}
<<<<<<< HEAD
<<<<<<< HEAD

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
    </div>
    </div>;
);
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
