<<<<<<< HEAD
<<<<<<< HEAD

return (<div> <Head><title>Automation Insights — Zion</title></Head>) )
}</ul> </div> </div>)
=======
 return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
=======
return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
=======
 return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}</ul> </div> </div>) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800" > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function AutomationInsightsPage() {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AutomationInsightsPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [intel, setIntel] = useState<any>(null);
  const [talentMd, setTalentMd] = useState<string>('');
  useEffect(() => {
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {});
    fetch('/data/automation/talent-highlights.md').then((r) => r.text()).then(setTalentMd).catch(() => {})
  }, []);
  return (
    <div>
      <Head><title>Automation Insights — Zion</title></Head>
      <h1 className="text-2xl font-semibold mb-4">Automation Insights</h1>
      <section className="mb-8">
        <h2 className="font-medium">Market Intelligence</h2>
        {!intel ? (
          <div className="text-sm text-gray-500">Loading…</div>
        ) : (
          <div className="mt-3 text-sm">
            <div className="text-xs text-gray-500">Generated at {intel.generatedAt}</div>
            <div className="mt-3">
              <h3 className="font-medium">Top Keywords</h3>
              <ul className="list-disc list-inside">
                {Object.entries(intel.insights.keywordCounts).map(([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Top Languages</h3>
              <ul className="list-disc list-inside">
                {intel.insights.topLanguages.map((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <section id="talent" className="mb-8">
        <h2 className="font-medium">Talent Highlights</h2>
        {!talentMd ? (
          <div className="text-sm text-gray-500">Loading…</div>
        ) : (
          <pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800">{talentMd}</pre>
        )}
      </section>
    </div>
<<<<<<< HEAD
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
