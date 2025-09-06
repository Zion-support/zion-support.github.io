import { useEffect, useState } from 'react',
import Head from 'next/head',
export default function AutomationInsightsPage() {
  const [intel, setIntel] = useState<any>(null),
  const [talentMd, setTalentMd] = useState<string>(''),

  useEffect() => {
    fetch('/data/automation/market-intel.json').then(r) => r.json().then(setIntel).catch() => {}),
    fetch('/data/automation/talent-highlights.md').then(r) => r.text().then(setTalentMd).catch() => {})
  }, []),
  return (
    <div>
      <Head><title>Automation Insights  Zion</title></Head>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Automation Insights</h1>
      <section className=&quot;mb-8&quot;>
        <h2 className=&quot;font-medium&quot;>Market Intelligence</h2>
        {!intel ? (
          <div className=&quot;text-sm text-gray-500&quot;>Loading</div>
        ) : (
          <div className=&quot;mt-3 text-sm&quot;>
            <div className=&quot;text-xs text-gray-500&quot;>Generated at {intel.generatedAt}</div>
            <div className=&quot;mt-3&quot;>
              <h3 className=&quot;font-medium&quot;>Top Keywords</h3>
              <ul className=&quot;list-disc list-inside&quot;>
                {Object.entries(intel.insights.keywordCounts).map([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>
                )}
              </ul>
            </div>
            <div className=&quot;mt-4&quot;>
              <h3 className=&quot;font-medium&quot;>Top Languages</h3>
              <ul className=&quot;list-disc list-inside&quot;>
                {intel.insights.topLanguages.map(l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>                )}
              </ul>
            </div>
          </div>
        )}
      </section>

      <section id=&quot;talent&quot; className=&quot;mb-8&quot;>
        <h2 className=&quot;font-medium&quot;>Talent Highlights</h2>
        {!talentMd ? (
          <div className=&quot;text-sm text-gray-500&quot;>Loading</div>        ) : (
          <pre className=&quot;mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800&quot;>{talentMd}</pre>
        )}
      </section>
    </div>
  )}