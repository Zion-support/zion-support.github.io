import fs from 'fs';
import path from 'path';
export async function getStaticProps(){;
  try{;
    const p = path.join(process.cwd(),'datagovernanceproposals.json');
    const raw = fs.readFileSync(p,'utf8');
    return { props: { data: JSON.parse(raw) } }
  }catch{;
    return { props: { data: { updatedAt: null, proposals: [] } } }
  }
}
<<<<<<< HEAD

export default function Proposals({ data }: { data: { updatedAt: string|null, proposals: any[] } }){
  return (
    <div className=&quot;max-w-3xl mx-auto p-6 space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>DAO Proposals</h1>
      <div className=&quot;text-sm opacity-70&quot;>Updated: {data.updatedAt || '—'}</div>
      <ul className=&quot;space-y-3&quot;>
        {data.proposals?.map((p:any)=> (
          <li key={p.id} className=&quot;border rounded p-3&quot;>
            <div className=&quot;font-medium&quot;>#{p.id} {p.title}</div>
            <div className=&quot;text-sm opacity-70&quot;>by {p.author} · {new Date(p.created_at).toLocaleString()}</div>
            <a className=&quot;text-blue-600 underline&quot; href={p.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>View</a>
          </li>
        ))}
        {(!data.proposals || data.proposals.length===0) && <li className=&quot;opacity-70&quot;>No open proposals</li>}
      </ul>
    </div>
  )
=======
;
export default function Proposals({ data }: { data: { updatedAt: string|null, proposals: any[] } }){;
  return (;
    <div className="max-w-3xl mx-auto p-6 space-y-4">;
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>;
      <div className="text-sm opacity-70">Updated: {data.updatedAt || '—'}</div>;
      <ul className="space-y-3">;
        {data.proposals?.map((p:any)=> (;
          <li key={p.id} className="border rounded p-3">;
            <div className="font-medium">#{p.id} {p.title}</div>;
            <div className="text-sm opacity-70">by {p.author} · {new Date(p.created_at).toLocaleString()}</div>;
            <a className="text-blue-600 underline" href={p.url} target="_blank" rel="noreferrer">View</a>;
          </li>;
        ))}
        {(!data.proposals || data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
      </ul>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}