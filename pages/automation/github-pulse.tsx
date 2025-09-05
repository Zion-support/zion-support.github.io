import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore
import data from '../../data/github-pulse.json',
export default function GithubPulsePage() {
  const repo = data?.repo || {},
  const last24h = data?.last24h || {},
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>GitHub Pulse</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <div className=&quot;mt-6 grid md:grid-cols-3 gap-4 text-sm&quot;>
          <Metric label=&quot;Stars&quot; value={repo.stargazers_count} />
          <Metric label=&quot;Forks&quot; value={repo.forks} />
          <Metric label=&quot;Open Issues&quot; value={repo.open_issues} />
          <Metric label=&quot;Watchers&quot; value={repo.watchers} />
          <Metric label=&quot;Issues updated (24h)&quot; value={last24h.issues_updated} />
          <Metric label=&quot;PRs updated (24h)&quot; value={last24h.prs_updated} />        </div>
      </div>
    </EnhancedLayout>
  )
}

function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
      <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>{label}</div>
      <div className=&quot;text-lg font-semibold&quot;>{value ?? '—'}</div>    </div>
  )
}