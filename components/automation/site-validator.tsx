

 


=======

import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Broken = { url: string, page: string, status: number },
interface Report { generatedAt: string, pagesScanned: number, brokenLinks: Broken[], pagesWithOgIssues: number, ogIssues: { page: string, missing: string[] }[] }
type Props = { report: Report | null },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {;
    const file = path.join(process.cwd(), 'publicautomationsite-validator.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
=======
};
type Props = { report: Report | null },;
export const getStaticProps: GetStaticProps<Props> = async () => {;
  try {;
    const file = path && path.join(process && process.cwd(), 'publicautomationsite-validator && validator.json');
    const raw = fs && fs.readFileSync(file, 'utf8');
    const data = JSON && JSON.parse(raw);


=======
;
}
type Props = { report: Report | null },
export const getStaticProps: GetStaticProps < Props> = async () => {
  try {
    const file = path.join (process.cwd (), 'publicautomationsite - validator.json');
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return { props: { report: data }, revalidate: 21600 }
  } catch {;
    return { props: { report: null }, revalidate: 21600 }
  }
}
};

export default function SiteValidator(): any ({ report }: Props) {;

=======

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function SiteValidator({ report }: Props) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  if (!report) return <div>No validation report yet.</div>;
  return (
    <div className="space-y-6">;
      <header className="space-y-1">;
        <h1 className="text-3xl font-bold">Site Validator</h1>;
        <p className="text-gray-600 dark:text-gray-300">Broken links and Open Graph checks from exported site.</p>;
      </header>;
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">;
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Pages Scanned</div><div className="text-2xl font-semibold">{report && report.pagesScanned}</div></div>;
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Broken Links</div><div className="text-2xl font-semibold">{report && report.brokenLinks.length}</div></div>;
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">OG Issues</div><div className="text-2xl font-semibold">{report && report.pagesWithOgIssues}</div></div>;
      </div>;
      {report && report.brokenLinks.length > 0 && (;
        <section>;
          <h2 className="font-semibold mb-2">Broken Links</h2>;
          <ul className="text-sm space-y-1 max-h-96 overflow-auto border rounded p-3 border-gray-200 dark:border-gray-800">;
            {report && report.brokenLinks.slice(0, 500).map((b, i) => (;
              <li key={i} className="flex justify-between gap-4"><span className="truncate">{b && b.page} → {b && b.url}</span><span className="text-gray-500">{b && b.status}</span></li>;
            ))}
          </ul>;
        </section>;
      )}
      {report && report.ogIssues.length > 0 && (;
        <section>;
          <h2 className="font-semibold mb-2">Pages Missing OG Tags</h2>;
          <ul className="text-sm space-y-1 max-h-96 overflow-auto border rounded p-3 border-gray-200 dark:border-gray-800">;
            {report && report.ogIssues.map((o, i) => (;
              <li key={i} className="flex justify-between gap-4"><span className="truncate">{o && o.page}</span><span className="text-gray-500 truncate">{o && o.missing.join(', ')}</span></li>;
            ))}
          </ul>;
        </section>;
      )}

    </div>;
  );
}

=======
}
;
export default /**
 * SiteValidator - Function description
 */
function SiteValidator() {
  // Check condition
if (return <div > No validation report yet.</div>) {
  $2
}
  return (
    <div className="space - y-6">;
      <header className="space - y-1">;
        <h1 className="text - 3xl font - bold">Site Validator</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Broken links and Open Graph checks from exported site.</p>;
      </header>;
      <div className="grid sm:grid - cols - 2 lg:grid - cols - 4 gap - 4">;
        <div className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800"><div className="text - xs text - gray - 500">Pages Scanned</div><div className="text - 2xl font - semibold">{report.pages_scanned}</div></div>;
        <div className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800"><div className="text - xs text - gray - 500">Broken Links</div><div className="text - 2xl font - semibold">{report.broken_links.length}</div></div>;
        <div className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800"><div className="text - xs text - gray - 500">OG Issues</div><div className="text - 2xl font - semibold">{report.pagesWithOgIssues}</div></div>;
      </div>;
      {report.broken_links.length > 0 && (
        <section>;
          <h2 className="font - semibold mb - 2">Broken Links</h2>;
          <ul className="text - sm space - y-1 max - h-96 overflow - auto border rounded p - 3 border - gray - 200 dark:border - gray - 800">;
            {report.broken_links.slice (0, 500).map ((b, i) => (
              <li key={i} className="flex justify - between gap - 4"><span className="truncate">{b.page} → {b.url}</span><span className="text - gray - 500">{b.status}</span></li>))}
          </ul>;
        </section>)}
      {report.og_issues.length > 0 && (
        <section>;
          <h2 className="font - semibold mb - 2">Pages Missing OG Tags</h2>;
          <ul className="text - sm space - y-1 max - h-96 overflow - auto border rounded p - 3 border - gray - 200 dark:border - gray - 800">;
            {report.og_issues.map ((o, i) => (
              <li key={i} className="flex justify - between gap - 4"><span className="truncate">{o.page}</span><span className="text - gray - 500 truncate">{o.missing.join (', ')}</span></li>))}
          </ul>;
        </section>)}
    </div>);
  }
},

export default function SiteValidator({ report }: Props) {
  if (!report) return <div>No validation report yet.</div>,
  return (
    <div className=&quot;space-y-6&quot;>
      <header className=&quot;space-y-1&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Site Validator</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Broken links and Open Graph checks from exported site.</p>
      </header>
      <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Pages Scanned</div><div className=&quot;text-2xl font-semibold&quot;>{report.pagesScanned}</div></div>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Broken Links</div><div className=&quot;text-2xl font-semibold&quot;>{report.brokenLinks.length}</div></div>
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>OG Issues</div><div className=&quot;text-2xl font-semibold&quot;>{report.pagesWithOgIssues}</div></div>
      </div>
      {_report.brokenLinks.length > 0 && (
        <section>
          <h2 className=&quot;font-semibold mb-2&quot;>Broken Links</h2>
          <ul className=&quot;text-sm space-y-1 max-h-96 overflow-auto border rounded p-3 border-gray-200 dark:border-gray-800&quot;>
            {report.brokenLinks.slice(0, 500).map((b, i) => (
              <li key={i} className=&quot;flex justify-between gap-4&quot;><span className=&quot;truncate&quot;>{b.page} → {b.url}</span><span className=&quot;text-gray-500&quot;>{b.status}</span></li>
=======
    </div>
);
}
  );
}
