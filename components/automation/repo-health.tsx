import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

interface Report {
  generatedAt: string;
  commits: { last7d: number; last30d: number };
  changes: { last7dFiles: string[] };
  largestFiles: { file: string; bytes: number }[];
  stalePages: { file: string; lastCommitAt: string }[];
}

type Props = { report: Report | null };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'repo-health.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 3600 };
  } catch {
    return { props: { report: null }, revalidate: 3600 };
  }
};

export default function RepoHealth({ report }: Props) {
  if (!report) return <div>No report yet. Check back soon.</div>;
  return (
    <div className=&quot;space-y-6&quot;>
      <header className=&quot;space-y-1&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Repo Health</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Automated activity and maintenance snapshot.</p>
      </header>
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
          ))}
        </ul>
      </section>
      <section>
        <h2 className=&quot;font-semibold mb-2&quot;>Stale Pages (90d)</h2>
        <ul className=&quot;text-sm space-y-1&quot;>
          {report.stalePages.map((p, i) => (
            <li key={i} className=&quot;flex justify-between gap-4&quot;><span className=&quot;truncate&quot;>{p.file}</span><span className=&quot;text-gray-500&quot;>{new Date(p.lastCommitAt).toLocaleDateString()}</span></li>
          ))}
        </ul>
      </section>
    </div>
  );
}