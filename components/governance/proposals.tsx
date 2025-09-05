import fs from 'fs'
import path from 'path'

<<<<<<< HEAD
export async function getStaticProps(){
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
=======
export async function getStaticProps(){_try{
    const _p = path.join(process.cwd(), _'data', _'governance', _'proposals.json')
    const _raw = fs.readFileSync(p, _'utf8')
    return { props: { data: JSON.parse(raw)} }
  }catch{_return { props: { data: { updatedAt: null, _proposals: []} } }
  }
}

export default function Proposals(_{_data}: {_data: { updatedAt: string|null, _proposals: unknown[]} }){_return (_<div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">DAO Proposals</h1>
      <div className="text-sm opacity-70">Updated: {data.updatedAt || '—'}</div>
      <ul className="space-y-3">
        {_data.proposals?.map((p: unknown)=> (
          <li key={p.id} className="border rounded p-3">
            <div className="font-medium">#{_p.id} {_p.title}</div>
            <div className="text-sm opacity-70">by {_p.author} · {_new Date(p.created_at).toLocaleString()}</div>
            <a className="text-blue-600 underline" href={_p.url} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
        {_(!data.proposals || data.proposals.length===0) && <li className="opacity-70">No open proposals</li>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </ul>
    </div>
  )
}