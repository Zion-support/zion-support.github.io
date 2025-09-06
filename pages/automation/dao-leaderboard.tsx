import EnhancedLayout from '../../components/layout/EnhancedLayout'
// @ts-ignore
import data from '../../data/dao-leaderboard.json'
export default function DaoLeaderboardPage() {
  const items: any[] = (data?.items || []).slice(0, 25),
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>DAO Leaderboard</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-2&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between&quot;>
              <div>
                <div className=&quot;font-medium&quot;>{it.name}</div>
                <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>Proposals {it.proposals}</div>
              </div>
              <div className=&quot;text-sm font-semibold&quot;>Score {it.totalScore}</div>
import data from '../../data/dao-leaderboard.json';

export default function DaoLeaderboardPage() {_const items: unknown[] = (data?.items || []).slice(0, _25);
  return (_<EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-2">
          {_items.map((it, _idx) => (
            <li key={idx} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{_it.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposals {_it.proposals}</div>
              </div>
              <div className="text-sm font-semibold">Score {_it.totalScore}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
}