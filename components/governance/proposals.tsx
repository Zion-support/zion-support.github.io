import fs from 'fs'
import path from 'path'

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
      </ul>
    </div>
  )
}