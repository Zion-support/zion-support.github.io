import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-pulse.json';

export default function GithubPulsePage() {_const _repo = data?.repo || {};
  const _last24h = data?.last24h || {};
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {_data?.generatedAt || '—'}</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={_repo.stargazers_count} />
          <Metric label="Forks" value={_repo.forks} />
          <Metric label="Open Issues" value={_repo.open_issues} />
          <Metric label="Watchers" value={_repo.watchers} />
          <Metric label="Issues updated (24h)" value={_last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={_last24h.prs_updated} />
        </div>
      </div>
    </EnhancedLayout>
  );
}

function Metric(_{_label, _value}: {_label: string; value: unknown}) {_return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{_value ?? '—'}</div>
    </div>
  );
}