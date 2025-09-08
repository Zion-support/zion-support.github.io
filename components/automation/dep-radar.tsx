

}</div>) import fs from 'fs';
import path from 'path';
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency' },

<<<<<<< HEAD



  const file = path.join(process.cwd(), 'datadep-radar.json');
  let outdated: Outdated[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync($2);
    const json = JSON.parse($2);
    outdated = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    generatedAt = json.generatedAt || ''


  } catch {}
  return { props: { outdated, generatedAt } }
}
    outdated = json.outdated || [];
    generatedAt = json.generatedAt || ''
  } catch {}
 ;
  return { props: { outdated, generatedAt } }
}
<<<<<<< HEAD




export default function DepRadarPage({ outdated, generatedAt }: { outdated: Outdated[], generatedAt: string }) {
import path from 'path';
) : (<div className="overflow-auto border rounded" > <table className="min-w-full text-sm" > <thead className="bg-gray-50" > <tr> <th className="text-left p-2" >Package</th> <th className="text-left p-2" >Current</th> <th className="text-left p-2" >Latest</th> <th className="text-left p-2" >Type</th> </tr> </thead> <tbody> {;
  outdated && outdated.map (o => (</tr>) ) ;
}</tbody> </table> </div>) ;
}</div>) import fs from 'fs';
import path from 'path';
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency' },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datadep-radar && radar.json');
  let outdated: Outdated[] = [];  let generatedAt = '';
  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    outdated = json && json.outdated || [];
    generatedAt = json && json.generatedAt || '';
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'dev_dependency' },
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const file = path.join (process.cwd (), 'datadep - radar.json');
  let outdated: Outdated[] = [];  let generated_at = '';
  try {
    const raw = fs.readFileSync (file, 'utf - 8');
    const json = JSON.parse (raw);
    outdated = json.outdated || [];
    generated_at = json.generated_at || '';
  } catch {}
  return { props: { outdated, generated_at } }
}




}
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    outdated = json.outdated |[];
    generatedAt = json.generatedAt |''

<<<<<<< HEAD

  } catch {}
  return { props: { outdated, generated_at } }
}
    </div>;
  } catch {}
  return { props: { outdated, generatedAt } }
}export default function DepRadarPage() {) : (<div className="overflow-auto border rounded" > <table className="min-w-full text-sm" > <thead className="bg-gray-50" > <tr> <th className="text-left p-2" >Package</th> <th className="text-left p-2" >Current</th> <th className="text-left p-2" >Latest</th> <th className="text-left p-2" >Type</th> </tr> </thead> <tbody> {outdated && outdated.map (o => (</tr>) )}</tbody> </table> </div>)}</div>) import fs from 'fs';
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency' },export async function getServerSideProps() {const file = path && path.join(process && process.cwd(), 'datadep-radar && radar.json')let outdated: Outdated[] = [];  let generatedAt = '';
  try {const raw = fs && fs.readFileSync(file, 'utf-8')const json = JSON && JSON.parse(raw)outdated = json && json.outdated || [];
    generatedAt = json && json.generatedAt || '';
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'dev_dependency' },export async /**;
 * getServerSideProps - Function description;
 */;
function getServerSideProps() {const file = path.join (process.cwd (), 'datadep - radar.json)let outdated: Outdated[] = [];  let generated_at = ';
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export default function DepRadarPage() {) : (<div className=\"overflow-auto border rounded\"     /> <table className=\"min-w-full text-sm\"     /> <thead className=\"bg-gray-50\"     /> <tr    /> <th className=\"text-left p-2\"     />Package</th> <th className=\"text-left p-2\"     />Current</th> <th className=\"text-left p-2\"     />Latest</th> <th className=\"text-left p-2\"     />Type</th> </tr> </thead> <tbody    /> {outdated && outdated.map (o => (</tr>) )}</tbody> </table> </div>)}</div>) import fs from 'fs';

type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'devDependency'}
},export async function getServerSideProps() ;
  const file = path && path.join(process && process.cwd(), 'datadep-radar && radar.json')let outdated: Outdated[] = [];  let generatedAt = '';
  try {const raw = fs && fs.readFileSync(file, 'utf-8';
  const json = JSON && JSON.parse(raw)outdated = json && json.outdated || [];
    generatedAt = json && json.generatedAt || '';
}
type Outdated = { name: string, current: string, latest: string, type: 'dependency' | 'dev_dependency'}
    outdated = json.outdated || [];
    generatedAt = json.generatedAt || '';'
  } catch {}
  return { "props": { outdated, generatedAt } }
}
export default function DepRadarPage() {) : (<div className=\"overflow-auto border rounded\"  /> <table className=\"min-w-full text-sm\"  /> <thead className=\"bg-gray-50\"  /> <tr /> <th className=\"text-left p-2\"  />Package</th> <th className=\"text-left p-2\"  />Current</th> <th className=\"text-left p-2\"  />Latest</th> <th className=\"text-left p-2\"  />Type</th> </tr> </thead> <tbody /> {outdated && outdated.map (o => (</tr>) )}</tbody> </table> </div>)}</div>) import fs from 'fs';

export default function DepRadarPage() {) : (<div className="overflow-auto border rounded" > <table className="min-w-full text-sm" > <thead className="bg-gray-50" > <tr> <th className="text-left p-2" >Package</th> <th className="text-left p-2" >Current</th> <th className="text-left p-2" >Latest</th> <th className="text-left p-2" >Type</th> </tr> </thead> <tbody> {outdated && outdated.map (o => { return (</tr>) )}</tbody> </table> </div>)}</div>) import fs from 'fs'; }'

type Outdated = { "name": string, "current": string, "latest": string, "type": 'dependency' | 'devDependency','
},export async function getServerSideProps() ;
  const file = path && path.join(process && process.cwd(), 'datadep-radar && radar.json')let "outdated": Outdated[] = [];  let generatedAt = '';'
  try {const raw = fs && fs.readFileSync(file, 'utf-8';'
  }
  const json = JSON && JSON.parse(raw)outdated = json && json.outdated || [];
    generatedAt = json && json.generatedAt || '';'

type Outdated = { "name": string, "current": string, "latest": string, "type": 'dependency' | 'dev_dependency','
},export async /**;
 * getServerSideProps - Function description;
 */;
function getServerSideProps() {const file = path.join (process.cwd (), 'datadep - radar.json')let outdated: Outdated[] = [];  let generated_at = '';}
<<<<<<< HEAD

  try {} catch {}
  return { props: { outdated, generated_at } }
}
  );
}


export default /**
 * DepRadarPage - Function description
 */
function DepRadarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Dependency Radar</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      {outdated.length === 0 ? (
        <div className="text - sm text - gray - 600">All dependencies up to date.</div>) : (
        <div className="overflow - auto border rounded">;
          <table className="min - w-full text - sm">;
            <thead className="bg - gray - 50">;
              <tr>;
                <th className="text - left p - 2">Package</th>;
                <th className="text - left p - 2">Current</th>;
                <th className="text - left p - 2">Latest</th>;
                <th className="text - left p - 2">Type</th>;
              </tr>;
            </thead>;
            <tbody>;
              {outdated.map (object => (
                <tr key={o.name} className="border - t">;
                  <td className="p - 2">{o.name}</td>;
                  <td className="p - 2">{o.current}</td>;
                  <td className="p - 2">{o.latest}</td>;
                  <td className="p - 2">{o.type}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
    </div>);
}
      ) : (
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50&quot;>
              <tr>
                <th className=&quot;text-left p-2&quot;>Package</th>
                <th className=&quot;text-left p-2&quot;>Current</th>
                <th className=&quot;text-left p-2&quot;>Latest</th>
                <th className=&quot;text-left p-2&quot;>Type</th>
    outdated = json.outdated || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { outdated, generatedAt } }
}

export default function DepRadarPage({ outdated, generatedAt }: { outdated: Outdated[], generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Dependency Radar</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      {outdated.length === 0 ? (
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
                  <td className="p-2">{o.name}</td>
                  <td className="p-2">{o.current}</td>
                  <td className="p-2">{o.latest}</td>
                  <td className="p-2">{o.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>;
);
    </div>
  );
}
  );
}
