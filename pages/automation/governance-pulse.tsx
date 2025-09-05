<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore - JSON import import data from '../../data/governance-pulse.json',
export default function GovernancePulsePage() {
  const items: any[] = (data?.items || []).slice(0, 60),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Governance Pulse</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium underline&quot;>
                {it.title}
              </Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>
                {it.space} · {it.state} · Start {new Date(it.start * 1000).toLocaleString()} · End {new Date(it.end * 1000).toLocaleString()}
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import
import data from '../../data/governance-pulse.json';

export default function GovernancePulsePage() {_const items: unknown[] = (data?.items || []).slice(0, _60);
  return (_<EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Governance Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {_items.map((it, _idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {_it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {_it.space} · {_it.state} · Start {_new Date(it.start * 1000).toLocaleString()} · End {_new Date(it.end * 1000).toLocaleString()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}