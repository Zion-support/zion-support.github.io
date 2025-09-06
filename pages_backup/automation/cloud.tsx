<<<<<<< HEAD:pages/automation/cloud.tsx
<<<<<<< HEAD

<<<<<<< HEAD
export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]),
export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);

  useEffect__(() => {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useEffect, useState } from 'react',;
;
import { useEffect, useState } from 'react',
=======

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { useEffect, useState } from 'react';

export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([])
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

import { useEffect, useState } from 'react',
=======
import { useEffect, useState } from 'react',;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useEffect, useState } from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]),
export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  useEffect__(() => {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs |[]))
      .catch(() => setLogs([]))
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  }, []),


=======
  }, [])
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { useEffect, useState } from 'react';

<<<<<<< HEAD
=======
=======
import { useEffect, useState } from 'react';

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { useEffect, useState } from 'react';

=======
import { useEffect, useState  } from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useEffect, useState  } from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/cloud.tsx
export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([])
  useEffect(() => {
import { useEffect, useState } from 'react',;
;
import { useEffect, useState } from 'react',
export default function CloudAutomationHub() {
  const [logs, setLogs] = useState<any[]>([]),
export default function CloudAutomationHub() {_const [logs, _setLogs] = useState<any[]>([]);
ursor/fix-lint-push-and-merge-to-main-ce13
  useEffect__(() => {
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    fetch('/api/automation/cloud-logs')
      .then((r) => r.json())
      .then((d) => setLogs(d.logs |[]))
      .catch(() => setLogs([]))
<<<<<<< HEAD:pages/automation/cloud.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD


  }, []),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  }, []);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }, []);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/cloud.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
        </Link>
        </a>
        <a href="/docs/LINK_HEALTH.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Link Health</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/LINK_HEALTH.md</p>
        </Link>
        <a href="/docs/INTELLIGENCE_DIGEST.md" className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
          <h3 className="font-semibold">Intelligence Digest</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Docs/INTELLIGENCE_DIGEST.md</p>
        </a>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold mb-3">Recent Automation Logs</h2>
        <ul className="space-y-2 text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt |log.file}</span>
=======


=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt |log.file}</span>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {logs.length === 0 && <li className="text-gray-500">No logs yet. The workflows will generate logs on schedule.</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <span className="text-gray-600">{log.insights?.theme}</span>
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
              <span className="text-gray-600">{log.insights?.theme}</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              <span className="text-gray-600">{log.insights?.theme}</span>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          {logs.map((log) => (
            <li key={log.id} className="flex items-center justify-between">
              <span>{log.generatedAt || log.file}</span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <span className="text-gray-600">{log.insights?.theme}</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <span className="text-gray-600">{log.insights?.theme}</span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="flex items-center gap-3">
        <a href="https: //github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View Workflow</a>
        <a href="/api/automation/cloud-logs" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Refresh Logs</a>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
=======
  )
<<<<<<< HEAD:pages/automation/cloud.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}

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
      <div>;
      </div>;
    </div>);
}


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

  );
};
  )
    </div>);
}


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

=======
}

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
}
}
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/cloud.tsx
