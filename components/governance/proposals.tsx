<<<<<<< HEAD
<<<<<<< HEAD
      </ul>;
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
=======
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
  data
}: {
  data: { updatedAt: string | null; proposals: any[] }
}) {
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |'—'}</div>
      <ul className='space-y-3'>
        {data.proposals?.map((p: any) => (
          <li key={p.id} className='border rounded p-3'>
            <div className='font-medium'>
=======
  data;
<<<<<<< HEAD
}: {}
  data: { updatedAt: string | null; proposals: any[] }
  data,
}: {;
  data: { updatedAt: string | null; proposals: any[] };
}) {}
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>'
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>'
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |'—'}</div>'
      <ul className='space-y-3'>
        {data.proposals?.map((p: any) => ('
          <li key={p.id} className='border rounded p-3'>'
            <div className='font-medium'>
              #{p.id} {p.title}
            </div>'
            <div className='text-sm opacity-70'>
              by {p.author} · {new Date(p.created_at).toLocaleString()}
            </div>

            <a'
              className='text-blue-600 underline'
              href={p && p.url}'
              target='_blank''
              rel='noreferrer'>;
=======
}: {data: { updatedAt: string | null; proposals: any[],}
}
  data,}: {data: { updatedAt: string | null; proposals: any[] ,}
}) {return (<div className='max-w-3xl mx-auto p-6 space-y-4' />;
      <h1 className='text-2xl font-semibold' />DAO Proposals</h1>;}
      <div className='text-sm opacity-70' />Updated: {data.updatedAt |'—,}
}</div>;
      <ul className='space-y-3' />;
        {data.proposals?.map((p: any) => (<li key={p.i,}
} className='border rounded p-3' />;
            <div className='font-medium' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              #{p.id} {p.title}
            </div>
            <div className='text-sm opacity-70'>
              by {p.author} · {new Date(p.created_at).toLocaleString()}
<<<<<<< HEAD
            </div>
            <a
              className='text-blue-600 underline'
              href={p.url}
              target='_blank'
              rel='noreferrer'
            >
              View
            </a>
          </li>
=======
            </div>;
            <a;
              className='text-blue-600 underline';
              href={p && p.url}
              target='_blank';
              rel='noreferrer' />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              View;
            </a>;
          </li>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        ))}
        )}

      </ul>
    </div>
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;
  try{
      </ul>;
    </div>;
  )export async function getStaticProps() {try{const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json')const raw = fs && fs.readFileSync(p,'utf8')return { props: { data: JSON && JSON.parse(raw) } }
  }catch{try{</div>;
  )}}
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
import fs from 'fs'
import path from 'path'

export async function getStaticProps(){
  try{
    const p = path.join(process.cwd(),'datagovernanceproposals.json')
    const raw = fs.readFileSync(p,'utf8')
    return { props: { data: JSON.parse(raw) } }
  }catch{
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
}

}
export default function Proposals({ data }: { data: { updatedAt: string|null, proposals: any[] } }){
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>
      <div className="text-sm opacity-70">Updated: {data.updatedAt || '—'}</div>
      <ul className="space-y-3">
        {data.proposals?.map((p: any)=> (
          <li key={p.id} className="border rounded p-3">
            <div className="font-medium">#{p.id} {p.title}</div>
            <div className="text-sm opacity-70">by {p.author} · {new Date(p.created_at).toLocaleString()}</div>
            <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
        {(!data.proposals || data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
      </ul>
    </div>
  )
}
=======
  );
<<<<<<< HEAD
export async function getStaticProps() { return null; }
=======
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;
  try{}
    </div>;
  );
}

}
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
