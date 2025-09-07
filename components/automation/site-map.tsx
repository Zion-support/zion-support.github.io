<<<<<<< HEAD
<<<<<<< HEAD

<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },export async function getServerSideProps() {const file = path.join(process.cwd(), 'datasite-map.json')let routes: RouteInfo[] = [];  let generatedAt = '';
  try {const raw = fs.readFileSync(file, 'utf-8')const json = JSON.parse(raw)routes = json.routes |[];
    generatedAt = json.generatedAt |'';
    generatedAt = json.generatedAt || '';
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import fs from 'fs';
import path from 'path';
type RouteInfo = any;
    generatedAt = json.generatedAt || ''
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
type RouteInfo = { path: string, lastModified: string },
=======
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) "
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';'
import path from 'path';
type RouteInfo = { path: string, lastModified: string },
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes |[];
    generatedAt = json.generatedAt |''


import fs from 'fs';
<<<<<<< HEAD
type RouteInfo = any;
    generatedAt = json.generatedAt || '';
=======
import path from 'path';
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type RouteInfo = any;

    generatedAt = json.generatedAt || ''
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
export async function getServerSideProps() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  } catch {}
  return { props: { routes, generatedAt } }
<<<<<<< HEAD
}'
import path from 'path';"
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) ;'
}</tbody> </table> </div> </div>) import fs from 'fs';'
import path from 'path';
type RouteInfo = { path: string, lastModified: string },;
export async function getServerSideProps() { return null; }
type RouteInfo = { path: string, last_modified: string },
export async /**;
 * getServerSideProps - Function description;
 */
function getServerSideProps() { return null; }
  try {}
  } catch {}
=======
}
<<<<<<< HEAD
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )}</tbody> </table> </div> </div>) import fs from 'fs';
type RouteInfo = { path: string, lastModified: string },export async function getServerSideProps() {const file = path && path.join(process && process.cwd(), 'datasite-map && map.json')let routes: RouteInfo[] = [];  let generatedAt = '';
  try {const raw = fs && fs.readFileSync(file, 'utf-8')const json = JSON && JSON.parse(raw)routes = json && json.routes || [];
    generatedAt = json && json.generatedAt || '';
type RouteInfo = { path: string, last_modified: string },export async /**;
 * getServerSideProps - Function description;
 */;
function getServerSideProps() {const file = path.join (process.cwd (), 'datasite - map.json')let routes: RouteInfo[] = [];  let generated_at = '';
  try {} catch {}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return { props: { routes, generated_at } }
}
)})}export default /**;
 * SiteMapIntelPage - Function description;
 */;
function SiteMapIntelPage() {return (<div className="space - y-6">;
  );
}
import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [],
  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
}
  );
}

<<<<<<< HEAD
export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
  return (
      <h1 className="text - 2xl font - semibold">AI Automation: Site Map Intelligence</h1>;
      <div className="text - xs text - gray - 500">Last updated: {generated_at ? new Date (generated_at).toLocaleString () : '—'}</div>;
      <div className="overflow - auto border rounded">;
        <table className="min - w-full text - sm">;
          <thead className="bg - gray - 50">;
            <tr>;
              <th className="text - left p - 2">Route</th>;
=======

export default /**;
 * SiteMapIntelPage - Function description;
 */
function SiteMapIntelPage() {}
  return ("
    <div className="space - y-6">;"
      <h1 className="text - 2xl font - semibold">AI Automation: Site Map Intelligence</h1>;'"
      <div className="text - xs text - gray - 500">Last updated: {generated_at ? new Date (generated_at).toLocaleString () : '—'}</div>;"
      <div className="overflow - auto border rounded">;"
        <table className="min - w-full text - sm">;"
          <thead className="bg - gray - 50">;
            <tr>;"
              <th className="text - left p - 2">Route</th>;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <th className="text - left p - 2">Last Modified</th>;
            </tr>;
          </thead>;
          <tbody>;
<<<<<<< HEAD
            {routes.map (r => (<tr key={r.path} className="border - t">;
                <td className="p - 2">{r.path}</td>;
=======
            {routes.map (r => ("
              <tr key={r.path} className="border - t">;"
                <td className="p - 2">{r.path}</td>;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <td className="p - 2">{new Date (r.last_modified).toLocaleString ()}</td>;
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </div>);
<<<<<<< HEAD

    </div>)
=======
export default function SiteMapIntelPage({ routes, generatedAt }: { routes: RouteInfo[], generatedAt: string }) {
  return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
<<<<<<< HEAD
            {routes.map(r => (
              <tr key={r.path} className="border-t">
                <td className="p-2">{r.path}</td>
                <td className="p-2">{new Date(r.lastModified).toLocaleString()}</td>
              </tr>
            ))}
=======
            {routes.map (r => ("
              <tr key={r.path} className="border - t">;"
                <td className="p - 2">{r.path}</td>;"
                <td className="p - 2">{new Date (r.last_modified).toLocaleString ()}</td>
              </tr>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          </tbody>
        </table>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

"
=======
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
