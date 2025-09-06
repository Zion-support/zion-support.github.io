<<<<<<< HEAD
<<<<<<< HEAD


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
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  try {;
    const p = path.join(process.cwd(), 'data', 'governance', 'proposals.json');
    const raw = fs.readFileSync(p, 'utf8');
    return { props: { data: JSON.parse(raw) } }
  } catch {
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
export default function Proposals({
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  data
}: {
  data: { updatedAt: string | null; proposals: any[] }
  data,
}: {;
  data: { updatedAt: string | null; proposals: any[] };
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

<<<<<<< HEAD

  data,
}: {;
  data: { updatedAt: string | null; proposals: any[] };
}) {
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

        {(!data && data.proposals || data && data.proposals.length === 0) && (;
          <li className='opacity-70'>No open proposals</li>;

<<<<<<< HEAD
=======
        {(!data && data.proposals || data && data.proposals.length === 0) && (;
          <li className='opacity-70'>No open proposals</li>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import fs from 'fs'
import path from 'path'

export async function getStaticProps(){
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try{
    const p = path.join (process.cwd (), 'datagovernanceproposals.json');
    const raw = fs.readFileSync (p, 'utf8');
    return { props: { data: JSON.parse (raw) } }
  }catch{


<<<<<<< HEAD



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


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  try{
    </div>;
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======
=======
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
}

  );
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    </div>
  );
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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
    </div>
);
}
  );
}
    </div>;
);
}

}
}
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
