<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore
import data from '../../data/agentic-news.json',
export default function AgenticNewsPage() {
  const items: any[] = (data?.items || []).slice(0, 60),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Agentic News</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a className=&quot;font-medium underline&quot; href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{it.title}</Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>{it.source}</div>
            </li>
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;
import data from '../../data/agentic-news.json',;
export default function AgenticNewsPage() {;
  const items: any[] = (data?.items || []).slice(0, 60);
  return (;
    <EnhancedLayout>;
      <div className="max-w-5xl mx-auto py-10">;
        <h1 className="text-3xl font-bold">Agentic News</h1>;
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>;
        <ul className="mt-6 space-y-4">;
          {items.map((it, idx) => (;
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">;
              <a className="font-medium underline" href={it.url} target="_blank" rel="noreferrer">{it.title}</a>;
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{it.source}</div>;
            </li>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
}