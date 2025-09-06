<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

=======
export async function getStaticProps() {;
  try {;
    const p = path && path.join(process && process.cwd(), 'data', 'governance', 'proposals && proposals.json');
    const raw = fs && fs.readFileSync(p, 'utf8');
    return { props: { data: JSON && JSON.parse(raw) } };
  } catch {;
    return { props: { data: { updatedAt: null, proposals: [] } } };
  }
export default function Proposals(): any ({;
  data,;
}: {;
  data: { updatedAt: string | null; proposals: any[] };
}) {;
=======
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export async function getStaticProps() {
  try {;
    const p = path.join(process.cwd(), 'data', 'governance', 'proposals.json');
    const raw = fs.readFileSync(p, 'utf8');
    return { props: { data: JSON.parse(raw) } }
  } catch {
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
export default function Proposals({
<<<<<<< HEAD

}) {
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |'—'}</div>
      <ul className='space-y-3'>
        {data.proposals?.map((p: any) => (
          <li key={p.id} className='border rounded p-3'>
            <div className='font-medium'>
              #{p.id} {p.title}
            </div>
            <div className='text-sm opacity-70'>
              by {p.author} · {new Date(p.created_at).toLocaleString()}
            </div>
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  data
}: {
  data: { updatedAt: string | null; proposals: any[] }
=======
  data,
}: {;
  data: { updatedAt: string | null; proposals: any[] };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>;
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>;
      <div className='text-sm opacity-70'>Updated: {data && data.updatedAt || '—'}</div>;
      <ul className='space-y-3'>;
        {data && data.proposals?.map((p: any) => (;
          <li key={p && p.id} className='border rounded p-3'>;
            <div className='font-medium'>;
              #{p && p.id} {p && p.title}
            </div>;
            <div className='text-sm opacity-70'>;
              by {p && p.author} · {new Date(p && p.created_at).toLocaleString()}
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <a
              className='text-blue-600 underline'
              href={p && p.url}
              target='_blank'
              rel='noreferrer'>;
              View;
            </a>;
          </li>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
        {(!data.proposals |data.proposals.length === 0) && (
          <li className='opacity-70'>No open proposals</li>
        )}
      </ul>
    </div>
  );
export async function getStaticProps(){
  try{
    const p = path.join(process.cwd(),'datagovernanceproposals.json')
    const raw = fs.readFileSync(p,'utf8')
    return { props: { data: JSON.parse(raw) } }
  }catch{
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
}

=======

        {(!data && data.proposals || data && data.proposals.length === 0) && (;
          <li className='opacity-70'>No open proposals</li>;

=======
        {(!data && data.proposals || data && data.proposals.length === 0) && (;
          <li className='opacity-70'>No open proposals</li>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      </ul>;
    </div>;
  );
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try{
    const p = path.join (process.cwd (), 'datagovernanceproposals.json');
    const raw = fs.readFileSync (p, 'utf8');
    return { props: { data: JSON.parse (raw) } }
  }catch{
<<<<<<< HEAD





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
}
<<<<<<< HEAD
export default /**
 * Proposals - Function description
 */
function Proposals() {
  return (
    <div className="max - w-3xl mx - auto p - 6 space - y-4">;
      <h1 className="text - 2xl font - semibold">DAO Proposals</h1>;
      <div className="text - sm opacity - 70">Updated: {data.updated_at || '—'}</div>;
      <ul className="space - y-3">;
        {data.proposals?.map ((p:any)=> (
          <li key={p.id} className="border rounded p - 3">;
            <div className="font - medium">#{p.id} {p.title}</div>;
            <div className="text - sm opacity - 70">by {p.author} · {new Date (p.created_at).toLocaleString ()}</div>;
            <a className="text - blue - 600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>;
          </li>))}
        {(!data.proposals || data.proposals.length===0) && <li className="opacity - 70">No open proposals</li>}
      </ul>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======

    </div>
  );
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
    </div>;
);
}

}
}
=======
    </div>
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
