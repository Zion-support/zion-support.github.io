<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string
}
</pre> </div>)
export default function SecurityAudit({ report }: Props) {
};
</pre> </div>) ;
export default function SecurityAudit(): any ({ report }: Props) {;
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
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">;
{JSON && JSON.stringify(report, null, 2)}
      </pre>;
    </div>;
  );
}
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
},

export default function SecurityAudit({ report }: Props) {
  return (
    <div className=&quot;space-y-4&quot;>
      <header className=&quot;space-y-1&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Security Audit</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className=&quot;text-red-600&quot;>{report.error}</div>}
      {report.generatedAt && (
        <div className=&quot;text-sm text-gray-500&quot;>Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
      <pre className=&quot;whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto&quot;>
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
  )

}
=======
<<<<<<< HEAD
<<<<<<< HEAD

}
</pre> </div>)

=======
};
</pre> </div>)
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
 
};
</pre> </div>) 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function SecurityAudit({ report }: Props) {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Security Audit</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
=======
    </div>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
