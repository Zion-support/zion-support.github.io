==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


 


}
type Props = { report: Report | null }
=======
=======

=======
=======

import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Broken = { url: string, page: string, status: number },
interface Report { generatedAt: string, pagesScanned: number, brokenLinks: Broken[], pagesWithOgIssues: number, ogIssues: { page: string, missing: string[] }[] }
type Props = { report: Report | null },


=======
==============
}
};

export default function SiteValidator(): any ({ report }: Props) {;

=======
};


    </div>;
  );
}

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
  );
}

}
