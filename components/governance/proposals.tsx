import fs from 'fs';
import path from 'path';


            <a
              className='text-blue-600 underline'
              href={p && p.url}
              target='_blank'
              rel='noreferrer'>;
              View;
            </a>;
          </li>;
        ))}
        {(!data.proposals |data.proposals.length === 0) && (
          <li className='opacity-70'>No open proposals</li>
        )}
      </ul>
    </div>
  );
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;

=======
import fs from 'fs'
import path from 'path'
export async function getStaticProps(){
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  try {
    const p = path.join (process.cwd (), 'data', 'governance', 'proposals.json');
    const raw = fs.readFileSync (p, 'utf8');
    return { props: { data: JSON.parse (raw) } }
  } catch {
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
export default /**
 * Proposals - Function description
 */
function Proposals() {
  return (
    <div className='max - w-3xl mx - auto p - 6 space - y-4'>;
      <h1 className='text - 2xl font - semibold'>DAO Proposals</h1>;
      <div className='text - sm opacity - 70'>Updated: {data.updated_at || '—'}</div>;
      <ul className='space - y-3'>;
        {data.proposals?.map ((p: any) => (
          <li key={p.id} className='border rounded p - 3'>;
            <div className='font - medium'>;
              #{p.id} {p.title}
            </div>;
            <div className='text - sm opacity - 70'>;
              by {p.author} · {new Date (p.created_at).toLocaleString ()}
            </div>;
            <a;
              className='text - blue - 600 underline';
              href={p.url}
              target='_blank';
              rel='noreferrer';
            >;
              View;
            </a>;
          </li>))}
        {(!data.proposals || data.proposals.length === 0) && (
          <li className='opacity - 70'>No open proposals</li>)}
      </ul>;
    </div>);
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {

  try{
    const p = path.join(process.cwd(),'datagovernanceproposals.json')
    const raw = fs.readFileSync(p,'utf8')
    return { props: { data: JSON.parse(raw) } }
  }catch{
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
}

export default function Proposals({ data }: { data: { updatedAt: string|null, proposals: any[] } }){
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>
      <div className="text-sm opacity-70">Updated: {data.updatedAt |'—'}</div>
      <ul className="space-y-3">
        {data.proposals?.map((p:any)=> (
          <li key={p.id} className="border rounded p-3">
            <div className="font-medium">#{p.id} {p.title}</div>
            <div className="text-sm opacity-70">by {p.author} · {new Date(p.created_at).toLocaleString()}</div>
            <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
        {(!data.proposals |data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
      </ul>


export default function Proposals(): any ({ data }: { data: { updatedAt: string|null, proposals: any[] } }){;
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">;
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>;
      <div className="text-sm opacity-70">Updated: {data && data.updatedAt || '—'}</div>;
      <ul className="space-y-3">;
        {data && data.proposals?.map((p:any)=> (;
          <li key={p && p.id} className="border rounded p-3">;
            <div className="font-medium">#{p && p.id} {p && p.title}</div>;
            <div className="text-sm opacity-70">by {p && p.author} · {new Date(p && p.created_at).toLocaleString()}</div>;
            <a className="text-blue-600 underline" href={p && p.url} target="_blank" rel="noreferrer">View</a>;
          </li>;
        ))}
        {(!data && data.proposals || data && data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
      </ul>;
    </div>;
  );
}

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
