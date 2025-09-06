
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
