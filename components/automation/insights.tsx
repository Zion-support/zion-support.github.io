<<<<<<< HEAD
import { useEffect, useState } from 'react',
import Head from 'next/head',
export default function AutomationInsightsPage() {
  const [intel, setIntel] = useState<any>(null),
  const [talentMd, setTalentMd] = useState<string>(''),

  useEffect(() => {
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {}),
    fetch('/data/automation/talent-highlights.md').then((r) => r.text()).then(setTalentMd).catch(() => {})
  }, []),
=======
import Head from 'next/head';

export default function AutomationInsightsPage() {_const [intel, _setIntel] = useState<any>(null);
  const [talentMd, _setTalentMd] = useState<string>('');

  useEffect__(() => {
    fetch('/data/automation/market-intel.json').then(_(r) => r.json()).then(setIntel).catch__(() => {});
    fetch('/data/automation/talent-highlights.md').then(_(r) => r.text()).then(setTalentMd).catch__(() => {});
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div>
      <Head><title>Automation Insights — Zion</title></Head>
<<<<<<< HEAD
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Automation Insights</h1>
      <section className=&quot;mb-8&quot;>
        <h2 className=&quot;font-medium&quot;>Market Intelligence</h2>
        {!intel ? (
          <div className=&quot;text-sm text-gray-500&quot;>Loading…</div>
        ) : (
          <div className=&quot;mt-3 text-sm&quot;>
            <div className=&quot;text-xs text-gray-500&quot;>Generated at {intel.generatedAt}</div>
            <div className=&quot;mt-3&quot;>
              <h3 className=&quot;font-medium&quot;>Top Keywords</h3>
              <ul className=&quot;list-disc list-inside&quot;>
                {Object.entries(intel.insights.keywordCounts).map(([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>
                ))}
              </ul>
            </div>
            <div className=&quot;mt-4&quot;>
              <h3 className=&quot;font-medium&quot;>Top Languages</h3>
              <ul className=&quot;list-disc list-inside&quot;>
                {intel.insights.topLanguages.map((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>
=======
      <h1 className="text-2xl font-semibold mb-4">Automation Insights</h1>
      <section className="mb-8">
        <h2 className="font-medium">Market Intelligence</h2>
        {_!intel ? (
          <div className="text-sm text-gray-500">Loading…</div>
        ) : (
          <div className="mt-3 text-sm">
            <div className="text-xs text-gray-500">Generated at {intel.generatedAt}</div>
            <div className="mt-3">
              <h3 className="font-medium">Top Keywords</h3>
              <ul className="list-disc list-inside">
                {_Object.entries(intel.insights.keywordCounts).map(_([k, _v]: unknown) => (
                  <li key={k}>{_k}: {_v as any}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Top Languages</h3>
              <ul className="list-disc list-inside">
                {_intel.insights.topLanguages.map(_(l: unknown) => (
                  <li key={l.lang}>{_l.lang}: {_l.count}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

<<<<<<< HEAD
      <section id=&quot;talent&quot; className=&quot;mb-8&quot;>
        <h2 className=&quot;font-medium&quot;>Talent Highlights</h2>
        {!talentMd ? (
          <div className=&quot;text-sm text-gray-500&quot;>Loading…</div>
=======
      <section id="talent" className="mb-8">
        <h2 className="font-medium">Talent Highlights</h2>
        {_!talentMd ? (
          <div className="text-sm text-gray-500">Loading…</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : (
          <pre className=&quot;mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800&quot;>{talentMd}</pre>
        )}
      </section>
    </div>
  )
}