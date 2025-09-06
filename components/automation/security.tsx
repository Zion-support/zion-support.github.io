<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}
</pre> </div>)

export default function SecurityAudit({ report }: Props) {
=======
};
</pre> </div>) ;
export default function SecurityAudit(): any ({ report }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="space-y-4">;
      <header className="space-y-1">;
        <h1 className="text-3xl font-bold">Security Audit</h1>;
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>;
      </header>;
      {report && report.error && <div className="text-red-600">{report && report.error}</div>}
      {report && report.generatedAt && (;
        <div className="text-sm text-gray-500">Generated at: {new Date(report && report.generatedAt).toLocaleString()}</div>;
      )}
<<<<<<< HEAD
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
);
}
=======
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">;
{JSON && JSON.stringify(report, null, 2)}
      </pre>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
</pre> </div>);
export default /**
 * SecurityAudit - Function description
 */
function SecurityAudit() {
  return (
    <div className="space - y-4">;
      <header className="space - y-1">;
        <h1 className="text - 3xl font - bold">Security Audit</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Automated vulnerability scan summary.</p>;
      </header>;
      {report.error && <div className="text - red - 600">{report.error}</div>}
      {report.generated_at && (
        <div className="text - sm text - gray - 500">Generated at: {new Date (report.generated_at).toLocaleString ()}</div>)}
      <pre className="whitespace - pre - wrap text - xs p - 4 rounded border border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 900 / 40 overflow - auto">;
{JSON.stringify (report, null, 2)}
      </pre>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
