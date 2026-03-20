import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type DeployStatus = {
  generatedAt?: string;
  status?: string;
  sha?: string;
  workflow?: string;
};

type DeployWatchdog = {
  timestamp?: string;
  healthy?: boolean;
  unhealthyCount?: number;
  unhealthyRoutes?: string[];
};

function readJson<T>(filePath: string): T | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export default function DeployDriftDashboardPage() {
  const reportsDir = path.join(process.cwd(), 'automation', 'reports');
  const deployStatus = readJson<DeployStatus>(path.join(reportsDir, 'deploy-status-latest.json'));
  const watchdog = readJson<DeployWatchdog>(path.join(reportsDir, 'deploy-watchdog-latest.json'));

  return (
    <div className="bg-slate-950/95">
      <AILabToolLayout
        title="Deploy Drift Dashboard"
        subtitle="Visibility into deploy status, route-health drift, and autonomous release confidence."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Latest deploy status</p>
            <p className="mt-2 text-2xl font-semibold text-cyan-300">{deployStatus?.status ?? 'unknown'}</p>
            <p className="mt-2 text-xs text-slate-300">
              SHA: {(deployStatus?.sha ?? 'unknown').slice(0, 8)} | {deployStatus?.generatedAt ?? 'n/a'}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Watchdog health</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-300">
              {watchdog?.healthy ? 'healthy' : 'degraded'}
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Unhealthy routes: {watchdog?.unhealthyCount ?? 0} | {watchdog?.timestamp ?? 'n/a'}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Autonomous actions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/ai-lab/deployment-readiness-console"
                className="rounded-full border border-indigo-300/60 bg-indigo-400/20 px-3 py-1.5 text-xs font-semibold text-indigo-100"
              >
                Readiness console
              </Link>
              <Link
                href="/automation"
                className="rounded-full border border-violet-300/60 bg-violet-400/20 px-3 py-1.5 text-xs font-semibold text-violet-100"
              >
                Automation center
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Unhealthy routes (watchdog)</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-200">
            {(watchdog?.unhealthyRoutes ?? []).length === 0 ? (
              <li>No unhealthy routes reported.</li>
            ) : (
              (watchdog?.unhealthyRoutes ?? []).map((route) => <li key={route}>- {route}</li>)
            )}
          </ul>
        </section>
      </AILabToolLayout>
    </div>
  );
}

