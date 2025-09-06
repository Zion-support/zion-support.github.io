import EnhancedLayout from '../../components/layout/EnhancedLayout';
  const items: any[] = (data?.items || []).slice(0, 25);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>
        <ul className="mt-6 space-y-2">
          {items.map((it, idx) => (
            <li key={idx} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposals {it.proposals}</div>
              </div>
              <div className="text-sm font-semibold">Score {it.totalScore}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
