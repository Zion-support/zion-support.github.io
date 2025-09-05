import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/security/osv-report.json';

export default function OsvWatchPage() {
  const results: any[] = (data?.results || []).slice(0, 50);
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>OSV Vulnerability Watch</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        {results.length === 0 ? (
          <p className=&quot;mt-6 text-sm&quot;>No known vulnerabilities found.</p>
        ) : (
          <ul className=&quot;mt-6 space-y-4&quot;>
            {results.map((r, idx) => (
              <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
                <div className=&quot;font-medium&quot;>{r.name} — {r.versionRange}</div>
                <ul className=&quot;list-disc ml-5 mt-2&quot;>
                  {r.vulns.slice(0, 5).map((v, i) => (
                    <li key={i} className=&quot;text-sm&quot;><a className=&quot;underline&quot; href={`https://osv.dev/vulnerability/${v.id}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{v.id}</Link> — {v.summary || ''}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
  );
}