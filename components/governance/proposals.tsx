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
}