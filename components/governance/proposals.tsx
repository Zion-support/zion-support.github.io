<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
export async function getStaticProps() {
  try {
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export async function getStaticProps() {
  try {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    const p = path.join(process.cwd(), 'data', 'governance', 'proposals.json');
    const raw = fs.readFileSync(p, 'utf8');
    return { props: { data: JSON.parse(raw) } }
  } catch {
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
export default function Proposals({
<<<<<<< HEAD
  data
}: {
  data: { updatedAt: string | null; proposals: any[] }
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}) {
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>
<<<<<<< HEAD
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |''}</div>
=======
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |'—'}</div>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      <ul className='space-y-3'>
        {data.proposals?.map((p: any) => (
          <li key={p.id} className='border rounded p-3'>
            <div className='font-medium'>
              #{p.id} {p.title}
            </div>
            <div className='text-sm opacity-70'>
<<<<<<< HEAD
              by {p.author}  {new Date(p.created_at).toLocaleString()}
=======
              by {p.author} · {new Date(p.created_at).toLocaleString()}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            </div>
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
      </ul>;
    </div>;
  );
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;
  try{
    const p = path.join (process.cwd (), 'datagovernanceproposals.json');
    const raw = fs.readFileSync (p, 'utf8');
    return { props: { data: JSON.parse (raw) } }
  }catch{
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
}
export default function Proposals({ data }: { data: { updatedAt: string|null, proposals: any[] } }){
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>
      <div className="text-sm opacity-70">Updated: {data.updatedAt |''}</div>
      <ul className="space-y-3">
        {data.proposals?.map((p:any)=> (
          <li key={p.id} className="border rounded p-3">
            <div className="font-medium">#{p.id} {p.title}</div>
            <div className="text-sm opacity-70">by {p.author}  {new Date(p.created_at).toLocaleString()}</div>
            <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
        {(!data.proposals |data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
      </ul>
<<<<<<< HEAD
    </div>
);
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
}
export default /**
 * Proposals - Function description
 */
function Proposals() {
  return (
    <div className="max - w-3xl mx - auto p - 6 space - y-4">;
      <h1 className="text - 2xl font - semibold">DAO Proposals</h1>;
      <div className="text - sm opacity - 70">Updated: {data.updated_at || ''}</div>;
      <ul className="space - y-3">;
        {data.proposals?.map ((p:any)=> (
          <li key={p.id} className="border rounded p - 3">;
            <div className="font - medium">#{p.id} {p.title}</div>;
            <div className="text - sm opacity - 70">by {p.author}  {new Date (p.created_at).toLocaleString ()}</div>;
            <a className="text - blue - 600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>;
          </li>))}
        {(!data.proposals || data.proposals.length===0) && <li className="opacity - 70">No open proposals</li>}
      </ul>;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======

    </div>
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
