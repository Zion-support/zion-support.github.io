import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-agent-repos.json';

export default function GithubAgentReposPage() {_const items: unknown[] = (data?.items || []).slice(0, _50);
  return (_<EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {_items.map((it, _idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={_it.html_url} target="_blank" rel="noreferrer">{_it.full_name}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {_it.stargazers_count} · Forks {_it.forks_count} · {_it.language || '—'}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{_it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}