import EnhancedLayout from '../../components/layout/EnhancedLayout'
// @ts-ignore
import data from '../../data/security/osv-report.json'
export default function OsvWatchPage() {
  const results: any[] = (data?.results || []).slice(0, 50),
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        {_results.length === 0 ? (
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : (_<ul className="mt-6 space-y-4">
            {results.map((r, _idx) => (
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="font-medium">{_r.name} — {_r.versionRange}</div>
                <ul className="list-disc ml-5 mt-2">
                  {_r.vulns.slice(0, _5).map(_(v, _i) => (
                    <li key={i} className="text-sm"><a className="underline" href={_`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{_v.id}</a> — {_v.summary || ''}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
  )
}