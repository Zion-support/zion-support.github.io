'use client';

import React, { useMemo, useState } from 'react';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type DetectedFailure =
  | 'missing-module'
  | 'typescript'
  | 'eslint'
  | 'jest'
  | 'syntax'
  | 'port-conflict'
  | 'unknown';

type BuildDiagnosis = {
  category: DetectedFailure;
  confidence: 'high' | 'medium' | 'low';
  summary: string;
  extracted?: {
    missingModule?: string;
    tsErrorCode?: string;
    fileHint?: string;
  };
  likelyCauses: string[];
  safeNextSteps: string[];
  suggestedCommands: string[];
};

const MAX_LOG_CHARS = 20000;

function safeSlice(input: string, maxChars: number) {
  if (input.length <= maxChars) return input;
  return `${input.slice(0, maxChars)}\n\n[Truncated input for safety/display]`;
}

function extractTsErrorCode(text: string): string | undefined {
  // Common TS error formats:
  //   TS2322: Type '...' is not assignable ...
  //   error TS2307: Cannot find module ...
  const m1 = text.match(/\bTS(\d{4,5})\b/);
  if (m1?.[1]) return m1[1];
  const m2 = text.match(/\berror\s+TS(\d{4,5})\b/i);
  if (m2?.[1]) return m2[1];
  return undefined;
}

function extractMissingModule(text: string): string | undefined {
  // webpack-ish:
  //   Module not found: Can't resolve 'x' in '/path'
  const m1 = text.match(/Can't resolve\s+['"`]([^'"`]+)['"`]/i);
  if (m1?.[1]) return m1[1];

  // TS/node-ish:
  //   Cannot find module 'x'
  const m2 = text.match(/Cannot find module\s+['"`]([^'"`]+)['"`]/i);
  if (m2?.[1]) return m2[1];

  // ESM:
  //   ERR_MODULE_NOT_FOUND: Cannot find module 'x' ...
  const m3 = text.match(/ERR_MODULE_NOT_FOUND.*?['"`]([^'"`]+)['"`]/is);
  if (m3?.[1]) return m3[1];

  return undefined;
}

function extractFileHint(text: string): string | undefined {
  // Heuristic: try to capture a "(path:line:col)" or "at /path/file:line:col"
  const m1 = text.match(/\(([^()\n]+:\d+:\d+)\)/);
  if (m1?.[1]) return m1[1];
  const m2 = text.match(/at\s+([^\s]+:\d+:\d+)/i);
  if (m2?.[1]) return m2[1];
  return undefined;
}

function detectFailureCategory(log: string): BuildDiagnosis['category'] {
  const text = log;

  if (
    /Module not found|Can't resolve|Cannot find module|ERR_MODULE_NOT_FOUND/i.test(text)
  ) {
    return 'missing-module';
  }

  if (/\bTS\d{4,5}\b|error TS\d{4,5}/i.test(text)) return 'typescript';

  if (/ESLint|eslint:/i.test(text)) return 'eslint';

  if (/Jest|Test suite failed|FAIL\s+Tests|Summary\s+of\s+failed/i.test(text)) return 'jest';

  if (/SyntaxError|Unexpected token|Unexpected identifier/i.test(text)) return 'syntax';

  if (/EADDRINUSE|Port\s+\d+\s+is\s+already\s+in\s+use|address already in use/i.test(text)) {
    return 'port-conflict';
  }

  return 'unknown';
}

function buildDiagnosis(logRaw: string): BuildDiagnosis | null {
  const log = logRaw.trim();
  if (!log) return null;

  const category = detectFailureCategory(log);

  const extracted = {
    missingModule: extractMissingModule(log),
    tsErrorCode: extractTsErrorCode(log),
    fileHint: extractFileHint(log),
  };

  const base: Omit<BuildDiagnosis, 'likelyCauses' | 'safeNextSteps' | 'suggestedCommands'> = {
    category,
    confidence: 'low',
    summary: 'Analyze the log and find the highest-signal fix path.',
    extracted: Object.values(extracted).some((v) => !!v) ? extracted : undefined,
  };

  if (category === 'missing-module') {
    const missing = extracted.missingModule;
    const summary = missing
      ? `Missing dependency or unresolved import: ${missing}`
      : 'Missing dependency or unresolved import.';

    return {
      ...base,
      category,
      confidence: 'high',
      summary,
      extracted: extracted.missingModule ? extracted : base.extracted,
      likelyCauses: [
        'The import path is incorrect (spelling, wrong relative path, or wrong filename casing).',
        'The dependency was renamed/removed but the code still references the old name.',
        'A package is listed as dev-only but is needed at build/runtime.',
        'Monorepo/workspace resolution mismatch (package not installed in the right workspace).',
      ],
      safeNextSteps: [
        'Copy the missing module name from the log and search the repo for it (including case).',
        'Confirm the referenced file exists at build-time and matches the import exactly.',
        'Run the repo’s clean install and re-check (first locally, then CI).',
        'If this is ESM, verify the import/export shape matches (default vs named exports).',
      ],
      suggestedCommands: [
        'rm -rf node_modules package-lock.json .next',
        'npm ci',
        'npm run type-check',
        'npm run build',
      ],
    };
  }

  if (category === 'typescript') {
    const tsCode = extracted.tsErrorCode;
    return {
      ...base,
      category,
      confidence: 'high',
      summary: tsCode
        ? `TypeScript compilation error${tsCode ? ` (TS${tsCode})` : ''}`
        : 'TypeScript compilation error.',
      extracted: Object.values(extracted).some((v) => !!v) ? extracted : undefined,
      likelyCauses: [
        'A type mismatch introduced by refactoring (props/data shape changed).',
        'A missing or incorrect type import / incorrect generic parameter.',
        'Strictness flags are rejecting something previously tolerated.',
        'Code relies on a module’s types that are not present or not exported correctly.',
      ],
      safeNextSteps: [
        'Find the first TypeScript error in the log and fix it before addressing follow-ons.',
        'Check the referenced file hint (if present) and validate the type expectations.',
        'If it’s a data shape issue, update the interface/model and propagate changes outward.',
        'Avoid “any” quick-fixes; prefer a narrow type assertion or proper narrowing.',
      ],
      suggestedCommands: [
        'npm run type-check',
        'npm run lint:check',
        'npm run build',
      ],
    };
  }

  if (category === 'eslint') {
    return {
      ...base,
      category,
      confidence: 'medium',
      summary: 'ESLint or style/lint rules failed during build/CI.',
      extracted: extracted.fileHint ? extracted : undefined,
      likelyCauses: [
        'A rule is failing (unused vars, forbidden patterns, import order, etc.).',
        'A new file is not covered by existing lint config overrides.',
        'Formatting/semicolons not matching current lint expectations.',
      ],
      safeNextSteps: [
        'Locate the first ESLint error line in the log and address that root rule.',
        'If this is a new rule, confirm it’s intended (not accidental config drift).',
        'Prefer minimal changes over disabling rules for a whole file.',
      ],
      suggestedCommands: [
        'npm run lint:check',
        'npm test:ci',
        'npm run build',
      ],
    };
  }

  if (category === 'jest') {
    return {
      ...base,
      category,
      confidence: 'medium',
      summary: 'Unit tests failed (Jest).',
      extracted: extracted.fileHint ? extracted : undefined,
      likelyCauses: [
        'A behavior change broke tests (or snapshot expectations).',
        'A test relies on stale mocks/fixtures.',
        'DOM/jsdom environment mismatch for a new component.',
      ],
      safeNextSteps: [
        'Run the failing test suite locally to get the full stack trace.',
        'Fix the first failing test; subsequent failures may be cascading.',
        'Update mocks/fixtures to match new component contracts.',
      ],
      suggestedCommands: [
        'npm test:watch',
        'npm test -- --runTestsByPath <path>',
        'npm run build',
      ],
    };
  }

  if (category === 'syntax') {
    return {
      ...base,
      category,
      confidence: 'high',
      summary: 'Syntax error (parse/compile).',
      extracted: extracted.fileHint ? extracted : undefined,
      likelyCauses: [
        'A missing brace/quote or mismatched JSX delimiter.',
        'An accidental copy/paste introduced non-TS/JS syntax.',
        'A file extension mismatch (e.g., TSX treated as TS).',
      ],
      safeNextSteps: [
        'Go to the first “Unexpected token” / “SyntaxError” location (file/line).',
        'Check for truncated code or stray characters near the reported line.',
        'Confirm the file extension matches the syntax used.',
      ],
      suggestedCommands: [
        'npm run type-check',
        'npm run build',
      ],
    };
  }

  if (category === 'port-conflict') {
    return {
      ...base,
      category,
      confidence: 'high',
      summary: 'Port conflict detected (server already running / port in use).',
      extracted: extracted.fileHint ? extracted : undefined,
      likelyCauses: [
        'A prior dev server process is still running.',
        'Another service is bound to the expected port.',
      ],
      safeNextSteps: [
        'Stop the old dev server by PID and free the port.',
        'Start the dev server again and re-run the check.',
      ],
      suggestedCommands: [
        'lsof -i :3000',
        'kill -9 <PID>',
        'npm run dev',
      ],
    };
  }

  return {
    ...base,
    category: 'unknown',
    confidence: 'low',
    summary: 'Could not deterministically classify the failure category.',
    likelyCauses: [
      'The log contains multiple issues; the primary one may be earlier in the output.',
      'The error is not one of the common build classes this tool recognizes.',
    ],
    safeNextSteps: [
      'Paste a smaller log snippet around the first error (top-most failure in the output).',
      'Include the “error:” line and the surrounding stack trace.',
    ],
    suggestedCommands: ['npm run type-check', 'npm run lint:check', 'npm run build'],
  };
}

export default function BuildFailureExplainerPage() {
  const [logText, setLogText] = useState('');
  const [diagnosis, setDiagnosis] = useState<BuildDiagnosis | null>(null);

  const trimmed = useMemo(() => safeSlice(logText, MAX_LOG_CHARS), [logText]);

  const handleAnalyze = (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    const d = buildDiagnosis(logText);
    setDiagnosis(d);
  };

  return (
    <div className="bg-slate-950/90">
      <AILabToolLayout
        title="AI Build Failure Explainer"
        subtitle="Paste a build / TypeScript / ESLint / test log and get a deterministic root-cause runbook (read-only, no network)."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <form
            onSubmit={handleAnalyze}
            className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-xs text-slate-200 lg:pr-4"
          >
            <div>
              <label htmlFor="build-log" className="block text-xs font-semibold uppercase tracking-wide text-slate-200">
                Build log (paste first error output)
              </label>
              <p className="mt-1 text-[11px] text-slate-400">
                Paste the section that includes the first failure. This tool does not send logs anywhere; it runs deterministic heuristics in your browser.
              </p>
            </div>

            <textarea
              id="build-log"
              value={logText}
              onChange={(e) => setLogText(e.target.value)}
              rows={14}
              className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-slate-100 outline-none ring-sky-500/60 focus:border-sky-500 focus:ring"
              placeholder="Example:
Module not found: Can't resolve './components/Foo'
... or
error TS2322: Type '...' is not assignable to type '...'
..."
            />

            <p className="text-[11px] text-slate-500">
              {logText.length === 0 ? 'Tip: include the very first error line for best results.' : `Characters: ${logText.length}.`}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={!logText.trim().length}
                className="inline-flex items-center justify-center rounded-full border border-sky-500/70 bg-sky-500/20 px-4 py-2 text-xs font-semibold text-sky-50 shadow-lg shadow-sky-900/40 hover:bg-sky-500/30 disabled:opacity-40"
              >
                Explain failure
              </button>

              <button
                type="button"
                onClick={() => {
                  setLogText('');
                  setDiagnosis(null);
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-slate-400"
              >
                Clear
              </button>
            </div>

            {logText.length > MAX_LOG_CHARS ? (
              <p className="text-[11px] text-amber-300">
                Input is longer than the recommended limit; analysis uses a truncated, display-safe view.
              </p>
            ) : null}
          </form>

          <div className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-xs text-slate-200">
            {!diagnosis ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 px-6 py-10 text-center">
                <p className="max-w-md text-sm text-slate-400">
                  Paste a log and press <span className="font-semibold text-slate-200">Explain failure</span> to get a safe runbook.
                </p>
              </div>
            ) : (
              <>
                <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                    Diagnosis
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">{diagnosis.summary}</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Category: <span className="font-mono text-slate-200">{diagnosis.category}</span> · Confidence:{' '}
                    <span className="font-semibold text-sky-200">{diagnosis.confidence}</span>
                  </p>

                  {diagnosis.extracted ? (
                    <div className="mt-3 space-y-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                      {diagnosis.extracted.missingModule ? (
                        <p className="text-[11px] text-slate-300">
                          Missing module: <span className="font-mono text-slate-200">{diagnosis.extracted.missingModule}</span>
                        </p>
                      ) : null}
                      {diagnosis.extracted.tsErrorCode ? (
                        <p className="text-[11px] text-slate-300">
                          TypeScript code: <span className="font-mono text-slate-200">TS{diagnosis.extracted.tsErrorCode}</span>
                        </p>
                      ) : null}
                      {diagnosis.extracted.fileHint ? (
                        <p className="text-[11px] text-slate-300">
                          File hint: <span className="font-mono text-slate-200">{diagnosis.extracted.fileHint}</span>
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </section>

                <section className="space-y-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                      Likely causes
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[11px] text-slate-300">
                      {diagnosis.likelyCauses.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                      Safe next steps
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[11px] text-slate-300">
                      {diagnosis.safeNextSteps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                      Suggested commands (adapt as needed)
                    </p>
                    <div className="mt-2 space-y-2">
                      {diagnosis.suggestedCommands.map((cmd) => (
                        <code
                          key={cmd}
                          className="block rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 font-mono text-[11px] text-slate-200"
                        >
                          {cmd}
                        </code>
                      ))}
                    </div>
                    <p className="mt-3 text-[11px] text-slate-500">
                      This is a diagnostic runbook, not a guarantee. When in doubt, validate locally and in CI.
                    </p>
                  </div>
                </section>
              </>
            )}

            {trimmed && logText.trim().length > 0 ? (
              <details className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <summary className="cursor-pointer text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Show pasted input (truncated for display)
                </summary>
                <pre className="mt-3 overflow-auto rounded-xl bg-slate-900/70 p-3 text-[11px] leading-relaxed text-slate-200">
                  {trimmed}
                </pre>
              </details>
            ) : null}
          </div>
        </div>
      </AILabToolLayout>
    </div>
  );
}

