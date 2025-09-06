import fs from 'fs'
import path from 'path'
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datanews-digest.json'),
  let items: NewsItem[] = []
  let generatedAt = ''
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    const json = JSON.parse(raw)
    items = json.items || [],
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { items, generatedAt } }
}

export default function NewsDigestPage({ items, generatedAt }: { items: NewsItem[], generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: News Digest</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {_items.map(_(n, _idx) => (
          <div key={idx} className="border rounded p-4 space-y-1">
            <div className="flex items-center justify-between">
              <a className="font-medium text-blue-600" href={_n.url} target="_blank" rel="noreferrer">{_n.title}</a>
              <div className="text-xs text-gray-500">{_n.source}</div>
            </div>
            <div className="text-sm text-gray-700">{_n.summary}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {_n.tags?.map(t => (<span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-100">{_t}</span>))}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}