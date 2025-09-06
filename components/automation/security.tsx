

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


    </div>;


);
}
  );
}


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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
