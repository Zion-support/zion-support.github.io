import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/roadmap-issues.json';

export default function RoadmapIssuesPage() {_const items: unknown[] = (data?.items || []).slice(0, _60);
  return (_<EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Roadmap Issues</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {_items.map((it, _idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium underline">#{_it.number} — {_it.title}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {_(it.labels || []).join(', _')}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}