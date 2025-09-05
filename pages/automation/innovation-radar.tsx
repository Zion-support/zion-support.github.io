<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore - JSON import;
import data from '../../data/innovation-radar.json',;
;
export default function InnovationRadarPage() {;
  const items:any[] = (data?.items || []).slice(0, 50),;
  return (;
    <EnhancedLayout>;
      <div className="max-w-5xl mx-auto py-10">;
        <h1 className="text-3xl font-bold">Innovation Radar</h1>;
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Signals generated at {data?.generatedAt || '—'}</p>;
        <ul className="mt-6 space-y-4">;
          {items.map((it, idx) => (;
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">;
                {it.title}
              </a>;
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">;
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
              </div>;
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query:{it.query}</div>;
            </li>;
          ))}
        </ul>;
      </div>;
    </EnhancedLayout>;
  ),;
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore - JSON import import data from '../../data/innovation-radar.json',
export default function InnovationRadarPage() {
  const items: any[] = (data?.items || []).slice(0, 50),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Innovation Radar</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Signals generated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium underline&quot;>
                {it.title}
              </Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
              </div>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>Query: {it.query}</div>            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}