import { useEffect, useState } from 'react',

export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]),

export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs || []))
      .catch(() => setLogs([]))
  }, []),

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h1 className=&quot;text-2xl font-bold&quot;>Autonomous Cloud Automation</h1>
        <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>
      </div>

      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <a href=&quot;/docs/ROADMAP.md&quot; className=&quot;rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900&quot;>
          <h3 className=&quot;font-semibold&quot;>Roadmap (Autonomous)</h3>
          <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Docs/ROADMAP.md</p>
        </Link>
        <a href=&quot;/docs/LINK_HEALTH.md&quot; className=&quot;rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900&quot;>
          <h3 className=&quot;font-semibold&quot;>Link Health</h3>
          <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Docs/LINK_HEALTH.md</p>
        </Link>
        <a href=&quot;/docs/INTELLIGENCE_DIGEST.md&quot; className=&quot;rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900&quot;>
          <h3 className=&quot;font-semibold&quot;>Intelligence Digest</h3>
          <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Docs/INTELLIGENCE_DIGEST.md</p>
        </Link>
      </div>

      <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
        <h2 className=&quot;font-semibold mb-3&quot;>Recent Automation Logs</h2>
        <ul className=&quot;space-y-2 text-sm&quot;>
          {logs.length === 0 && <li className=&quot;text-gray-500&quot;>No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className=&quot;flex items-center justify-between&quot;>
              <span>{log.generatedAt || log.file}</span>
              <span className=&quot;text-gray-600&quot;>{log.insights?.theme}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <a href="https: //github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View Workflow</a>
        <a href="/api/automation/cloud-logs" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Refresh Logs</a>
      </div>
    </div>
  )
}