import EnhancedLayout from '../../components/layout/EnhancedLayout';
  const items: any[] = (data?.items || []).slice(0, 50);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">StackExchange Insights</h1>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Score {it.score} · Answers {it.answer_count} · Tags: {(it.tags || []).join(', ')}</div>

            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
