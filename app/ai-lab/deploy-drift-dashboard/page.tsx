import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type DeployStatus = {
  generatedAt?: string;
  status?: string;
  sha?: string;
  workflow?: string;
  runId?: string | number | null;
  netlifyDeployId?: string | null;
  netlifyDeployUrl?: string | null;
};

type SuppressionRegistry = {
  version?: number;
  generatedAt?: string;
  correlation?: {
    correlationId?: string;
    workflowRunUrl?: string | null;
    commitSha?: string | null;
    repository?: string | null;
    deployStatusSnapshot?: {
      sha?: string | null;
      netlifyDeployId?: string | null;
      netlifyDeployUrl?: string | null;
    } | null;
  };
  noise?: { emaOpenIncidents?: number; rawOpenTotal?: number };
  recommendedCooldownHours?: number;
};

type AutomationIssueIndex = {
  generatedAt?: string;
  openAutomationFingerprintIssues?: number;
  issues?: Array<{
    number: number;
    title: string;
    url: string;
    fingerprintLabels?: string[];
  }>;
};

type DeployWatchdog = {
  timestamp?: string;
  healthy?: boolean;
  unhealthyCount?: number;
  unhealthyRoutes?: string[];
};
type NetlifyPreviewSmoke = {
  generatedAt?: string;
  skipped?: boolean;
  baseUrl?: string;
  unhealthyCount?: number;
  routes?: Array<{ path: string; status: number; ok: boolean }>;
};
type NetlifyPreviewSmokeState = {
  updatedAt?: string;
  consecutiveFailures?: number;
  latestUnhealthyCount?: number;
};

type PromotionConfidence = {
  generatedAt?: string;
  gatedThreshold?: number;
  routeScores?: Array<{ route: string; score: number; status: string }>;
};
type PromotionConfidenceHistoryEntry = {
  timestamp: string;
  avgScore: number;
  lowCount: number;
  watchOrLowCount: number;
};
type ObservabilityHistoryEntry = {
  timestamp: string;
  ema: number;
  fpCount: number;
  emaBreached?: boolean;
  fpBreached?: boolean;
};

type SmokeHealthEntry = {
  timestamp: string;
  prodOk: boolean | null;
  prodTargetSource?: string | null;
  previewSkipped?: boolean | null;
  previewOk?: boolean | null;
  previewFailureClass?: string | null;
};

function smokeRollupSpark(entries: SmokeHealthEntry[], mode: 'prod' | 'preview'): string {
  if (entries.length === 0) return 'n/a';
  return entries
    .map((e) => {
      if (mode === 'prod') {
        if (e.prodOk === null) return '~';
        return e.prodOk ? '|' : '.';
      }
      if (e.previewSkipped === true) return 's';
      if (e.previewOk === null) return '~';
      return e.previewOk ? '|' : '.';
    })
    .join('');
}

function tinySparkline(values: number[]): string {
  if (values.length === 0) return 'n/a';
  const max = Math.max(...values, 1);
  return values
    .map((v) => {
      const ratio = v / max;
      if (ratio < 0.2) return '.';
      if (ratio < 0.4) return ':';
      if (ratio < 0.6) return '*';
      if (ratio < 0.8) return 'o';
      return '#';
    })
    .join('');
}

type ScheduledSmokeReport = {
  generatedAt?: string;
  baseUrl?: string;
  targetSource?: string;
  allOk?: boolean;
  failedCount?: number;
};

type NetlifyPreviewSmokeReport = {
  generatedAt?: string;
  baseUrl?: string;
  skipped?: boolean;
  reason?: string;
  unhealthyCount?: number;
  failureClass?: string;
};

type AggregateRegressionReport = {
  generatedAt?: string;
  summaryStatus?: string;
  alertCount?: number;
  alerts?: Array<{ type?: string; detail?: string | number }>;
};

type OpenClawRunnerSnapshot = {
  exitCode?: number;
  reason?: string;
  timestamp?: string;
  dryRunPlanned?: unknown[];
  executed?: unknown[];
  skippedHold?: unknown[];
};

type OpenClawRunnerHistory = {
  version?: number;
  generatedAt?: string;
  entries?: Array<{
    timestampIso?: string;
    exitCode?: number;
    reason?: string;
    runId?: string;
  }>;
};

type OpenClawRunnerGuardState = {
  consecutiveHealthy?: number;
  lastExitCode?: number | null;
  lastReason?: string | null;
  lastUpdatedAt?: string;
};

type ObservabilityDigest = {
  generatedAt?: string;
  summary?: {
    productionSmokeOk?: boolean;
    productionSmokeFailedCount?: number;
    ghaNpmCacheFindings?: number;
    routeDriftInAppNotSitemap?: number;
    routeDriftStatus?: string;
  };
};
type AutomationHealth = {
  generatedAt?: string;
  severity?: string;
  emaOpenIncidents?: number;
  previewUnhealthyCount?: number;
  openFingerprintIssues?: number;
};

type FingerprintTrendFile = {
  history?: Array<{
    generatedAt?: string;
    open?: number;
    newCount?: number;
    resolvedCount?: number;
    severity?: string;
    registryEma?: number | null;
  }>;
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
  const suppression = readJson<SuppressionRegistry>(
    path.join(reportsDir, 'incident-suppression-registry-latest.json'),
  );
  const issueIndex = readJson<AutomationIssueIndex>(
    path.join(reportsDir, 'automation-open-issues-index-latest.json'),
  );
  const watchdog = readJson<DeployWatchdog>(path.join(reportsDir, 'deploy-watchdog-latest.json'));
  const previewSmoke = readJson<NetlifyPreviewSmoke>(
    path.join(reportsDir, 'netlify-preview-smoke-latest.json'),
  );
  const previewSmokeState = readJson<NetlifyPreviewSmokeState>(
    path.join(reportsDir, 'netlify-preview-smoke-state.json'),
  );
  const observabilityHistory = readJson<ObservabilityHistoryEntry[]>(
    path.join(reportsDir, 'observability-ema-fp-history.json'),
  ) ?? [];
  const confidence = readJson<PromotionConfidence>(
    path.join(reportsDir, 'promotion-confidence-latest.json'),
  );
  const scheduledSmoke = readJson<ScheduledSmokeReport>(
    path.join(reportsDir, 'scheduled-production-smoke-latest.json'),
  );
  const netlifyPreviewSmoke = readJson<NetlifyPreviewSmokeReport>(
    path.join(reportsDir, 'netlify-preview-smoke-latest.json'),
  );
  const openclawRunner = readJson<OpenClawRunnerSnapshot>(
    path.join(reportsDir, 'openclaw-runner-latest.json'),
  );
  const openclawRunnerHistory = readJson<OpenClawRunnerHistory>(
    path.join(reportsDir, 'openclaw-runner-history.json'),
  );
  const openclawRunnerGuardState = readJson<OpenClawRunnerGuardState>(
    path.join(reportsDir, 'openclaw-runner-guard-state.json'),
  );
  const smokeHealthHistory = readJson<SmokeHealthEntry[]>(
    path.join(reportsDir, 'smoke-health-history.json'),
  ) ?? [];
  const aggregateRegression = readJson<AggregateRegressionReport>(
    path.join(reportsDir, 'aggregate-dashboard-regression-latest.json'),
  );
  const observabilityDigest = readJson<ObservabilityDigest>(
    path.join(reportsDir, 'observability-digest-latest.json'),
  );
  const automationHealth = readJson<AutomationHealth>(
    path.join(reportsDir, 'automation-health-latest.json'),
  );
  const fpTrend = readJson<FingerprintTrendFile>(
    path.join(reportsDir, 'automation-fingerprint-incidents-trend.json'),
  );
  const confidenceHistory = readJson<PromotionConfidenceHistoryEntry[]>(
    path.join(reportsDir, 'promotion-confidence-history.json'),
  ) ?? [];
  const last7 = confidenceHistory.slice(-7);
  const last30 = confidenceHistory.slice(-30);
  const smokeHistLast30 = smokeHealthHistory.slice(-30);
  const prodSmokeSpark = smokeRollupSpark(smokeHistLast30, 'prod');
  const previewSmokeSpark = smokeRollupSpark(smokeHistLast30, 'preview');
  const obsLast30 = observabilityHistory.slice(-30);
  const avg = (arr: PromotionConfidenceHistoryEntry[]) =>
    arr.length ? Math.round(arr.reduce((sum, item) => sum + item.avgScore, 0) / arr.length) : null;
  const trend7 = avg(last7);
  const trend30 = avg(last30);
  const emaSeries = obsLast30.map((x) => Number(x.ema || 0));
  const fpSeries = obsLast30.map((x) => Number(x.fpCount || 0));
  const emaSpark = tinySparkline(emaSeries);
  const fpSpark = tinySparkline(fpSeries);
  const fpTrendHist = (fpTrend?.history ?? []).slice(-30);
  const fpDigestOpenSpark = tinySparkline(fpTrendHist.map((x) => Number(x.open ?? 0)));
  const fpDigestEmaSpark = tinySparkline(fpTrendHist.map((x) => Number(x.registryEma ?? 0)));
  const lowConfidence = (confidence?.routeScores ?? [])
    .filter((item) => item.score < (confidence?.gatedThreshold ?? 60))
    .slice(0, 8);

  const corr = suppression?.correlation;
  const repoSlug =
    corr?.repository ||
    process.env.NEXT_PUBLIC_GITHUB_REPOSITORY ||
    'Zion-support/zion.app';
  const issuesSearchUrl = `https://github.com/${repoSlug}/issues?q=is%3Aopen+label%3Aautomation-incident`;
  const runnerFingerprint = 'openclaw-runner-guard|dry-run-fail|v2';
  const runnerIssueSearchUrl = `https://github.com/${repoSlug}/issues?q=is%3Aissue+${encodeURIComponent(runnerFingerprint)}`;

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
            <p className="text-xs uppercase tracking-wide text-slate-400">Latest smoke target</p>
            <p className="mt-2 text-sm text-slate-200">
              Prod sample:{' '}
              {scheduledSmoke ? `${scheduledSmoke.allOk ? 'pass' : 'fail'} (${scheduledSmoke.failedCount ?? 0} failed)` : 'n/a'}
            </p>
            <p className="mt-1 text-xs text-slate-300">Base: {scheduledSmoke?.baseUrl ?? 'n/a'}</p>
            <p className="mt-1 text-xs text-slate-400">
              Prod target source: {scheduledSmoke?.targetSource ?? 'n/a'} (production vs netlify)
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Smoke history (last {smokeHistLast30.length}, | pass · . fail · ~ n/a · s skipped):
            </p>
            <p className="mt-1 font-mono text-xs text-cyan-200">prod: {prodSmokeSpark}</p>
            <p className="mt-1 font-mono text-xs text-violet-200">preview: {previewSmokeSpark}</p>
            <p className="mt-2 text-sm text-slate-200">
              Netlify preview:{' '}
              {netlifyPreviewSmoke?.skipped
                ? `skipped (${netlifyPreviewSmoke.reason ?? 'no deploy URL'})`
                : `${(netlifyPreviewSmoke?.unhealthyCount ?? 0) === 0 ? 'pass' : 'fail'} (${netlifyPreviewSmoke?.unhealthyCount ?? 0} failed)`}
            </p>
            <p className="mt-1 text-xs text-slate-300">Preview base: {netlifyPreviewSmoke?.baseUrl ?? 'n/a'}</p>
            <p className="mt-1 text-xs text-slate-400">
              Preview failure class: {netlifyPreviewSmoke?.failureClass ?? 'n/a'}
            </p>
          </section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Automation health snapshot</p>
            <p className="mt-2 text-sm text-slate-200">
              Severity:{' '}
              <span
                className={
                  automationHealth?.severity === 'critical'
                    ? 'text-rose-300'
                    : automationHealth?.severity === 'warning'
                      ? 'text-amber-300'
                      : 'text-emerald-300'
                }
              >
                {automationHealth?.severity ?? 'n/a'}
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-400">
              EMA {automationHealth?.emaOpenIncidents ?? 'n/a'} · Preview unhealthy {automationHealth?.previewUnhealthyCount ?? 'n/a'} ·
              FP {automationHealth?.openFingerprintIssues ?? 'n/a'}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Fingerprint digest trend (CI)</p>
            <p className="mt-2 text-xs text-slate-400">
              From <code className="text-slate-300">automation-fingerprint-incidents-trend.json</code> — last{' '}
              {fpTrendHist.length} digest runs (ASCII spark: . : * o #)
            </p>
            <p className="mt-2 font-mono text-xs text-cyan-200">open count: {fpDigestOpenSpark}</p>
            <p className="mt-1 font-mono text-xs text-amber-200">registry EMA: {fpDigestEmaSpark}</p>
            <p className="mt-2 text-xs text-slate-500">
              Latest row:{' '}
              {fpTrendHist.length
                ? `${fpTrendHist[fpTrendHist.length - 1]?.generatedAt?.slice(0, 19) ?? 'n/a'} · open ${fpTrendHist[fpTrendHist.length - 1]?.open ?? 'n/a'}`
                : 'no history yet'}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Observability digest</p>
            <p className="mt-2 text-sm text-slate-200">
              Smoke:{' '}
              {observabilityDigest?.summary?.productionSmokeOk == null
                ? 'n/a'
                : observabilityDigest.summary.productionSmokeOk
                  ? 'pass'
                  : 'fail'}
              {' | '}GHA cache findings: {observabilityDigest?.summary?.ghaNpmCacheFindings ?? 'n/a'}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Route drift: {observabilityDigest?.summary?.routeDriftStatus ?? 'n/a'} (
              {observabilityDigest?.summary?.routeDriftInAppNotSitemap ?? 'n/a'})
            </p>
            <p className="mt-1 text-xs text-slate-400">Updated: {observabilityDigest?.generatedAt ?? 'n/a'}</p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">Aggregate regression</p>
            <p className="mt-2 text-sm text-slate-200">
              Status: {aggregateRegression?.summaryStatus ?? 'n/a'} | Alerts:{' '}
              {aggregateRegression?.alertCount ?? 'n/a'}
            </p>
            <ul className="mt-2 space-y-1 text-xs text-slate-300">
              {(aggregateRegression?.alerts ?? []).slice(0, 4).map((item, idx) => (
                <li key={`${String(item.type || 'alert')}-${idx}`}>
                  - {item.type ?? 'alert'}: {String(item.detail ?? 'n/a')}
                </li>
              ))}
              {(aggregateRegression?.alerts ?? []).length === 0 ? <li>No active regression alerts.</li> : null}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">OpenClaw runner (CI / guard)</p>
            <p className="mt-2 text-2xl font-semibold text-amber-300">
              {(openclawRunner?.exitCode ?? 0) === 0 ? 'dry-run ok' : `exit ${openclawRunner?.exitCode ?? '—'}`}
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Reason: {openclawRunner?.reason ?? 'n/a'} | Planned: {openclawRunner?.dryRunPlanned?.length ?? 0} |
              Executed: {openclawRunner?.executed?.length ?? 0} | Hold skips:{' '}
              {openclawRunner?.skippedHold?.length ?? 0}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Guard streak (cached in Actions): {openclawRunnerGuardState?.consecutiveHealthy ?? 'n/a'} healthy | Last
              update: {openclawRunnerGuardState?.lastUpdatedAt ?? openclawRunner?.timestamp ?? 'n/a'}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href={runnerIssueSearchUrl}
                className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-500/20"
                target="_blank"
                rel="noreferrer"
              >
                Search runner-guard incidents
              </a>
            </div>
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
          <p className="text-xs uppercase tracking-wide text-slate-400">Incident suppression correlation</p>
          <p className="mt-2 text-sm text-slate-200">
            Registry v{suppression?.version ?? '—'} | EMA open load:{' '}
            {suppression?.noise?.emaOpenIncidents ?? 'n/a'} | Cooldown rec:{' '}
            {suppression?.recommendedCooldownHours ?? 'n/a'}h
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            <li>
              correlationId:{' '}
              <span className="font-mono text-slate-300">{corr?.correlationId ?? 'n/a'}</span>
            </li>
            {corr?.workflowRunUrl ? (
              <li>
                <a href={corr.workflowRunUrl} className="text-cyan-200 underline" target="_blank" rel="noreferrer">
                  Latest registry workflow run
                </a>
              </li>
            ) : (
              <li>Latest registry workflow run: n/a</li>
            )}
            {corr?.commitSha ? (
              <li>
                Snapshot SHA:{' '}
                <span className="font-mono text-slate-300">{String(corr.commitSha).slice(0, 12)}</span>
              </li>
            ) : null}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">OpenClaw runner history (bounded, from guard cache)</p>
          <p className="mt-2 text-xs text-slate-400">
            Last {Math.min(8, openclawRunnerHistory?.entries?.length ?? 0)} of{' '}
            {openclawRunnerHistory?.entries?.length ?? 0} entries (max 50 in CI cache).
          </p>
          <ul className="mt-2 max-h-40 space-y-1 overflow-y-auto text-xs text-slate-300">
            {(openclawRunnerHistory?.entries ?? []).length === 0 ? (
              <li>No local history yet — populated when `ai-openclaw-runner-guard` runs in GitHub Actions.</li>
            ) : (
              (openclawRunnerHistory?.entries ?? [])
                .slice(-8)
                .reverse()
                .map((row, idx) => (
                  <li key={`${row.timestampIso ?? idx}-${idx}`}>
                    {row.timestampIso ?? '—'} | exit {row.exitCode ?? '—'} | {row.reason ?? '—'}{' '}
                    {row.runId ? <span className="text-slate-500">run {row.runId}</span> : null}
                  </li>
                ))
            )}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Automation incidents (fingerprint index)</p>
          <p className="mt-2 text-sm text-slate-200">
            Open issues with <code className="text-slate-300">automation-fp-*</code> labels:{' '}
            {issueIndex?.openAutomationFingerprintIssues ?? 0}{' '}
            <span className="text-slate-500">(weekly refresh)</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href={issuesSearchUrl}
              className="rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-700"
              target="_blank"
              rel="noreferrer"
            >
              Open automation-incident issues on GitHub
            </a>
          </div>
          <ul className="mt-3 max-h-48 space-y-1 overflow-y-auto text-xs text-slate-300">
            {(issueIndex?.issues ?? []).length === 0 ? (
              <li>No indexed rows yet (run weekly workflow or add secrets for gh).</li>
            ) : (
              (issueIndex?.issues ?? []).slice(0, 12).map((row) => (
                <li key={row.number}>
                  <a href={row.url} className="text-cyan-200 underline" target="_blank" rel="noreferrer">
                    #{row.number}
                  </a>{' '}
                  {row.title}
                </li>
              ))
            )}
          </ul>
        </section>

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

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Netlify preview smoke</p>
          <p className="mt-2 text-sm text-slate-200">
            {previewSmoke?.skipped
              ? 'Skipped (no preview URL in deploy status)'
              : `Unhealthy routes: ${previewSmoke?.unhealthyCount ?? 0}`}
          </p>
          {previewSmoke?.baseUrl ? (
            <p className="mt-1 text-xs text-slate-400">
              Base: <a className="text-cyan-200 underline" href={previewSmoke.baseUrl}>{previewSmoke.baseUrl}</a>
            </p>
          ) : null}
          <p className="mt-1 text-xs text-slate-400">
            Consecutive preview failures: {previewSmokeState?.consecutiveFailures ?? 0}
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Observability trend (EMA / FP)</p>
          <p className="mt-2 text-sm text-slate-200">
            EMA: <code className="text-cyan-300">{emaSpark}</code>
          </p>
          <p className="mt-1 text-sm text-slate-200">
            FP: <code className="text-violet-300">{fpSpark}</code>
          </p>
          <p className="mt-1 text-xs text-slate-400">Last points: {obsLast30.length} (max 30 shown)</p>
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold uppercase">
            <span className="rounded-full bg-emerald-900/80 px-2 py-0.5 text-emerald-200">Nominal: &lt;4 EMA and &lt;4 FP</span>
            <span className="rounded-full bg-amber-900/80 px-2 py-0.5 text-amber-200">Warning: EMA ≥4 or FP ≥4</span>
            <span className="rounded-full bg-rose-900/80 px-2 py-0.5 text-rose-200">Critical: EMA ≥6 or FP ≥8</span>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Promotion confidence gate (threshold {confidence?.gatedThreshold ?? 60})
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-200">
            {lowConfidence.length === 0 ? (
              <li>No low-confidence promoted routes.</li>
            ) : (
              lowConfidence.map((item) => (
                <li key={item.route}>
                  - {item.route} ({item.score}/100, {item.status})
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Confidence trend snapshots</p>
          <p className="mt-2 text-sm text-slate-200">
            7-point avg: {trend7 ?? 'n/a'} | 30-point avg: {trend30 ?? 'n/a'}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Points captured: {confidenceHistory.length}
          </p>
        </section>
      </AILabToolLayout>
    </div>
  );
}

