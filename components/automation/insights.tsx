
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800" > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react';
export default function AutomationInsightsPage() {;

=======
=======
=======
import { useEffect, useState } from 'react';import Head from 'next/head';


=======
export default function AutomationInsightsPage() {;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======return (<div> <Head><title > Automation Insights — Zion</title></Head>) );
}</ul> </div> </div>);
}</section>) : (<pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800" > {
  talent_md;
}</pre>);
}</section> </div>) import { useEffect, useState } from 'react';
import Head from 'next / head';
export default /**
 * AutomationInsightsPage - Function description
 */
function AutomationInsightsPage() {
  const [intel, set_intel] = useState < any>(null);
  const [talent_md, setTalentMd] = useState < string>('');
;
  useEffect (() => {
    fetch ('/data / automation / market - intel.json').then ((r) => r.json ()).then (set_intel).catch (() => {});
    fetch ('/data / automation / talent - highlights.md').then ((r) => r.text ()).then (setTalentMd).catch (() => {});
  }, []);
;
  return (
    <div>;
      <Head><title > Automation Insights — Zion</title></Head>;
      <h1 className="text - 2xl font - semibold mb - 4">Automation Insights</h1>;
      <section className="mb - 8">;
        <h2 className="font - medium">Market Intelligence</h2>;
        {!intel ? (
          <div className="text - sm text - gray - 500">Loading…</div>) : (
          <div className="mt - 3 text - sm">;
            <div className="text - xs text - gray - 500">Generated at {intel.generated_at}</div>;
            <div className="mt - 3">;
              <h3 className="font - medium">Top Keywords</h3>;
              <ul className="list - disc list - inside">;
                {Object.entries (intel.insights.keyword_counts).map (([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>))}
              </ul>;
            </div>;
            <div className="mt - 4">;
              <h3 className="font - medium">Top Languages</h3>;
              <ul className="list - disc list - inside">;
                {intel.insights.top_languages.map ((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>))}
              </ul>;
            </div>;
          </div>)}
      </section>;
      <section id="talent" className="mb - 8">;
        <h2 className="font - medium">Talent Highlights</h2>;
        {!talent_md ? (
          <div className="text - sm text - gray - 500">Loading…</div>) : (
          <pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800">{talent_md}</pre>)}
      </section>;
    </div>);

  return (
    <div>
      <Head><title>Automation Insights — Zion</title></Head>
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
  );
}
      <section id="talent" className="mb-8">
        <h2 className="font-medium">Talent Highlights</h2>
        {!talentMd ? (
          <div className="text-sm text-gray-500">Loading…</div>
        ) : (
          <pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800">{talentMd}</pre>
        )}
      </section>
    </div>
);
}
  );
}
==============

  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
