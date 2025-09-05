<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
import type { GetStaticProps } from 'next',
interface Report {
  generatedAt: string,
  commits: { last7d: number, last30d: number },
  changes: { last7dFiles: string[] },
  largestFiles: { file: string, bytes: number }[],
  stalePages: { file: string, lastCommitAt: string }[]
}

type Props = { report: Report | null },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'publicautomationrepo-health.json'),
    const raw = fs.readFileSync(file, 'utf8'),
    const data = JSON.parse(raw),
    return { props: { report: data }, revalidate: 3600 }
  } catch {
    return { props: { report: null }, revalidate: 3600 }
=======
import fs from 'fs';
import path from 'path';
import type {_GetStaticProps} from 'next';

interface Report {_generatedAt: string;
  commits: { last7d: number; last30d: number};
  changes: {_last7dFiles: string[]};
  largestFiles: {_file: string; bytes: number}[];
  stalePages: {_file: string; lastCommitAt: string}[];
}

type Props = {_report: Report | null};

export const getStaticProps: GetStaticProps<Props> = async () => {_try {
    const _file = path.join(process.cwd(), _'public', _'automation', _'repo-health.json');
    const _raw = fs.readFileSync(file, _'utf8');
    const _data = JSON.parse(raw);
    return { props: { report: data}, revalidate: 3600 };
  } catch {_return { props: { report: null}, revalidate: 3600 };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},

<<<<<<< HEAD
export default function RepoHealth({ report }: Props) {
  if (!report) return <div>No report yet. Check back soon.</div>,
=======
export default function RepoHealth(_{_report}: Props) {_if (!report) return <div>No report yet. Check back soon.</div>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <div className=&quot;space-y-6&quot;>
      <header className=&quot;space-y-1&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Repo Health</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Automated activity and maintenance snapshot.</p>
      </header>
<<<<<<< HEAD
      <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Commits (7d)</div><div className=&quot;text-2xl font-semibold&quot;>{report.commits.last7d}</div></div>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Commits (30d)</div><div className=&quot;text-2xl font-semibold&quot;>{report.commits.last30d}</div></div>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Changed Files (7d)</div><div className=&quot;text-2xl font-semibold&quot;>{report.changes.last7dFiles.length}</div></div>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Largest File</div><div className=&quot;text-sm font-medium truncate&quot;>{report.largestFiles[0]?.file || '—'}</div></div>
      </div>
      <section>
        <h2 className=&quot;font-semibold mb-2&quot;>Largest Files</h2>
        <ul className=&quot;text-sm space-y-1&quot;>
          {report.largestFiles.map((f, i) => (
            <li key={i} className=&quot;flex justify-between gap-4&quot;><span className=&quot;truncate&quot;>{f.file}</span><span className=&quot;text-gray-500&quot;>{(f.bytes/1024).toFixed(1)} KB</span></li>
=======
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Commits (7d)</div><div className="text-2xl font-semibold">{report.commits.last7d}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Commits (30d)</div><div className="text-2xl font-semibold">{_report.commits.last30d}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Changed Files (7d)</div><div className="text-2xl font-semibold">{_report.changes.last7dFiles.length}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Largest File</div><div className="text-sm font-medium truncate">{_report.largestFiles[0]?.file || '—'}</div></div>
      </div>
      <section>
        <h2 className="font-semibold mb-2">Largest Files</h2>
        <ul className="text-sm space-y-1">
          {_report.largestFiles.map(_(f, _i) => (
            <li key={i} className="flex justify-between gap-4"><span className="truncate">{_f.file}</span><span className="text-gray-500">{_(f.bytes/1024).toFixed(1)} KB</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ))}
        </ul>
      </section>
      <section>
<<<<<<< HEAD
        <h2 className=&quot;font-semibold mb-2&quot;>Stale Pages (90d)</h2>
        <ul className=&quot;text-sm space-y-1&quot;>
          {report.stalePages.map((p, i) => (
            <li key={i} className=&quot;flex justify-between gap-4&quot;><span className=&quot;truncate&quot;>{p.file}</span><span className=&quot;text-gray-500&quot;>{new Date(p.lastCommitAt).toLocaleDateString()}</span></li>
=======
        <h2 className="font-semibold mb-2">Stale Pages (90d)</h2>
        <ul className="text-sm space-y-1">
          {_report.stalePages.map(_(p, _i) => (
            <li key={i} className="flex justify-between gap-4"><span className="truncate">{_p.file}</span><span className="text-gray-500">{_new Date(p.lastCommitAt).toLocaleDateString()}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ))}
        </ul>
      </section>
    </div>
  )
}