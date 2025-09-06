<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


=======
import { useEffect, useState } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function CloudAutomationHub() {
<<<<<<< HEAD
=======
  const [logs, setLogs] = useState<any[]>([])
  useEffect(() => {
<<<<<<< HEAD
=======

import { useEffect, useState } from 'react',
=======
import { useEffect, useState } from 'react',;
;
=======
import { useEffect, useState } from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function CloudAutomationHub() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [logs, setLogs] = useState<any[]>([]),
export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);

  useEffect__(() => {
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs |[]))
      .catch(() => setLogs([]))
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
  }, [])
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Autonomous Cloud Automation</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/docs/ROADMAP.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Roadmap (Autonomous)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/ROADMAP.md</p>
        </a>
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Link Health</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>
        </a>
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Intelligence Digest</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>
        </a>
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>
        <ul className="space-y-2 text-sm">
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt |log.file}</span>
              <span className="text-gray-600">{log.insights?.theme}</span>

  useEffect__(() => {
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs || []))
      .catch(() => setLogs([]))
  }, []),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  }, []),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
<<<<<<< HEAD
=======
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

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useEffect, useState } from 'react';

export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([])
  useEffect(() => {
import { useEffect, useState } from 'react',
import { useEffect, useState } from 'react',;
;
import { useEffect, useState } from 'react',
export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]),
export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);
ursor/fix-lint-push-and-merge-to-main-ce13
  useEffect__(() => {
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs |[]))
      .catch(() => setLogs([]))

  }, [])

  }, []),
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Autonomous Cloud Automation</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/docs/ROADMAP.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Roadmap (Autonomous)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/ROADMAP.md</p>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

        </Link>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </a>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Link Health</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>
        </Link>
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Intelligence Digest</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>
<<<<<<< HEAD
        </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        </a>
        </Link>
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Link Health</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>
        </Link>
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Intelligence Digest</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>
        </Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>
        <ul className="space-y-2 text-sm">
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>

=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt |log.file}</span>
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <span className="text-gray-600">{log.insights?.theme}</span>
=======
              <span className="text-gray-600">{log.insights?.theme}</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="flex items-center gap-3">
        <a href="https: //github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View Workflow</a>
        <a href="/api/automation/cloud-logs" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Refresh Logs</a>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  )
import { useEffect, useState } from 'react';
export default function CloudAutomationHub(req, res) {
  try {
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => {;
    fetch('/api/automation/cloud-logs');
      .then((r) => r.json());
      .then((d) => setLogs(d.logs || []));
      .catch(() => setLogs([]));
  }, []);
  return (;
    <div className="space-y-6">;
=======
=======
}

=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
};
  )
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect, useState } from 'react',
;
export default /**
 * CloudAutomationHub - Function description
 */
function CloudAutomationHub() {
  const [logs, set_logs] = useState < any[]>([]),
  useEffect (() => {
    fetch ('/api / automation / cloud - logs');
      .then ((r) => r.json ());
      .then ((d) => set_logs (d.logs || []));
      .catch (() => set_logs ([]));
  }, []),
  return (
    <div className="space - y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div>;
        <h1 className="text - 2xl font - bold">Autonomous Cloud Automation</h1>;
        <p className="text - sm text - gray - 600 dark:text - gray - 400">Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>;
      </div>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <a href="/docs / ROADMAP.md" className="rounded - lg border p - 4 hover:bg - gray - 50 dark:hover:bg - gray - 900">;
          <h3 className="font - semibold">Roadmap (Autonomous)</h3>;
          <p className="text - sm text - gray - 600 dark:text - gray - 400">Docs / ROADMAP.md</p>;
        </a>;
        <a href="/docs / LINK_HEALTH.md" className="rounded - lg border p - 4 hover:bg - gray - 50 dark:hover:bg - gray - 900">;
          <h3 className="font - semibold">Link Health</h3>;
          <p className="text - sm text - gray - 600 dark:text - gray - 400">Docs / LINK_HEALTH.md</p>;
        </a>;
        <a href="/docs / INTELLIGENCE_DIGEST.md" className="rounded - lg border p - 4 hover:bg - gray - 50 dark:hover:bg - gray - 900">;
          <h3 className="font - semibold">Intelligence Digest</h3>;
          <p className="text - sm text - gray - 600 dark:text - gray - 400">Docs / INTELLIGENCE_DIGEST.md</p>;
        </a>;
      </div>;
      <div className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4">;
        <h2 className="font - semibold mb - 3">Recent Automation Logs</h2>;
        <ul className="space - y-2 text - sm">;
          {logs.length === 0 && <li className="text - gray - 500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map ((log) => (
            <li key={log.id} className="flex items - center justify - between">;
              <span>{log.generated_at || log.file}</span>;
              <span className="text - gray - 600">{log.insights?.theme}</span>;
            </li>))}
        </ul>;
      </div>;
      <div className="flex items - center gap - 3">;
        <a href="https: //github.com" target="_blank" rel="noreferrer" className="inline - flex items - center px - 4 py - 2 rounded - md bg - indigo - 600 text - white hover:bg - indigo - 700">View Workflow</a>;
        <a href="/api / automation / cloud - logs" className="inline - flex items - center px - 4 py - 2 rounded - md border border - gray - 300 dark:border - gray - 700">Refresh Logs</a>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { useEffect, useState } from 'react';
export default function CloudAutomationHub(req, res) {
  try {
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => {;
    fetch('/api/automation/cloud-logs');
      .then((r) => r.json());
      .then((d) => setLogs(d.logs || []));
      .catch(() => setLogs([]));
  }, []);
  return (;
    <div className="space-y-6">;
      <div>;
        <h1 className="text-2xl font-bold">Autonomous Cloud Automation</h1>;
        <p className="text-sm text-gray-600 dark:text-gray-400">Runs scheduled workflows: roadmap synthesis, link health checks, market intelligence, sitemap refresh, and logging.</p>;
      </div>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <a href="/docs/ROADMAP.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">;
          <h3 className="font-semibold">Roadmap (Autonomous)</h3>;
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/ROADMAP.md</p>;
        </a>;
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">;
          <h3 className="font-semibold">Link Health</h3>;
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>;
        </a>;
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">;
          <h3 className="font-semibold">Intelligence Digest</h3>;
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>;
        </a>;
      </div>;
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>;
        <ul className="space-y-2 text-sm">;
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {logs.map((log) => (;
            <li key={log.id} className="flex items-center justify-between">;
              <span>{log.generatedAt || log.file}</span>;
              <span className="text-gray-600">{log.insights?.theme}</span>;
            </li>;
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      </div>;
      <div className="flex items-center gap-3">;
        <a href="https: //github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View Workflow</a>;
        <a href="/api/automation/cloud-logs" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Refresh Logs</a>;
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
