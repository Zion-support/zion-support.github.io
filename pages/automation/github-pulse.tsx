>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function GithubPulsePage() {

  const repo = data?.repo |{}
  const last24h = data?.last24h |{}

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={repo.stargazers_count} />
          <Metric label="Forks" value={repo.forks} />
          <Metric label="Open Issues" value={repo.open_issues} />
          <Metric label="Watchers" value={repo.watchers} />
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />
        </div>
      </div>
    </EnhancedLayout>
  )
}
function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value ?? '—'}</div>
    </div>

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={repo.stargazers_count} />
          <Metric label="Forks" value={repo.forks} />
          <Metric label="Open Issues" value={repo.open_issues} />
          <Metric label="Watchers" value={repo.watchers} />
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />
        </div>
      </div>
    </EnhancedLayout>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
