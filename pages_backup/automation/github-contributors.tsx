import EnhancedLayout from '../../components/layout/EnhancedLayout';
  const items: any[] = (data?.items || []).slice(0, 60);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Contributors</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
