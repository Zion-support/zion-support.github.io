import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore
<<<<<<< HEAD
import data from '../../data/arxiv-research.json',
export default function ArxivResearchPage() {
  const items: any[] = (data?.items || []).slice(0, 40),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>ArXiv Research</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a href={it.link} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium underline&quot;>
                {it.title}
              </Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>{(it.authors || []).join(', ')}</div>
              <p className=&quot;mt-2 text-sm text-gray-700 dark:text-gray-200&quot;>{it.summary}</p>
=======
import data from '../../data/arxiv-research.json';

export default function ArxivResearchPage() {_const items: unknown[] = (data?.items || []).slice(0, _40);
  return (_<EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {_items.map((it, _idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={_it.link} target="_blank" rel="noreferrer" className="font-medium underline">
                {_it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{_(it.authors || []).join(', _')}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{_it.summary}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}