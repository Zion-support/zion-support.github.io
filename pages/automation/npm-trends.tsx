import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore
import data from '../../data/npm-trends.json',
export default function NpmTrendsPage() {
  const items: any[] = (data?.items || []).slice(0, 50),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>NPM Trends</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a href={it.links?.npm} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium underline&quot;>
                {it.name}
              </Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>v{it.version} · Score {Math.round((it.score || 0) * 100) / 100}</div>
              <p className=&quot;mt-2 text-sm text-gray-700 dark:text-gray-200&quot;>{it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}