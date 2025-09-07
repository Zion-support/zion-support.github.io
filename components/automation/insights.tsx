
}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800 > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react;
import Head from next/head';
import { useEffect, useState } from 'react;
export default function AutomationInsightsPage() {
  const [intel, setIntel] = useState<any>(null),
  const [talentMd, setTalentMd] = useState<string>('),
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

const [talentMd, setTalentMd] = useState<string>('');'
  useEffect(() => {

import { useEffect, useState  } from 'react';
=======
    fetch(/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {}),
    fetch('/data/automation/talent-highlights.md).then((r) => r.text()).then(setTalentMd).catch(() => {})

import { useEffect, useState  } from react';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
origin/cursor/automate-test-improve-and-merge-code-2533


import Head from 'next/head;
export default function AutomationInsightsPage() {

  const [talentMd, setTalentMd] = useState<string>(');
  useEffect(() => {'
    fetch(/data/automation/market-intel.json).then((r) => r.json()).then(setIntel).catch(() => {});'
    fetch('/data/automation/talent-highlights.md).then((r) => r.text()).then(setTalentMd).catch(() => {})
return (<div> <Head><title > Automation Insights — Zion</title></Head>) );
}</ul> </div> </div>);
}</section>) : (<pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800" > {}
  talent_md;
}</pre>);
}</section> </div>) import { useEffect, useState } from 'react';
import Head from next / head';
export default /**;
 * AutomationInsightsPage - Function description;
 */
function AutomationInsightsPage() {}
  const [intel, set_intel] = useState < any>(null);'
  const [talent_md, setTalentMd] = useState < string>();
  useEffect (() => {'
    fetch ('/data / automation / market - intel.json).then ((r) => r.json ()).then (set_intel).catch (() => {});
    fetch ('/data / automation / talent - highlights.md').then ((r) => r.text ()).then (setTalentMd).catch (() => {});
  }, []);
  return (
    <div>;
      <Head><title > Automation Insights — Zion</title></Head>;
      <h1 className=text - 2xl font - semibold mb - 4">Automation Insights</h1>;"
      <section className=mb - 8>;"
        <h2 className="font - medium>Market Intelligence</h2>;
        {!intel ? (
          <div className="text - sm text - gray - 500">Loading…</div>) : (
          <div className=mt - 3 text - sm">;"
            <div className=text - xs text - gray - 500>Generated at {intel.generated_at}</div>;"
            <div className="mt - 3>;
              <h3 className="font - medium">Top Keywords</h3>;
=======
  const [intel, setIntel] = useState<any />(null);

const [talentMd, setTalentMd] = useState<string />();
  useEffect(() => {}
}
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {});
    fetch(/data/automation/talent-highlights.md).then((r) => r.text()).then(setTalentMd).catch(() => {})
return (<div /> <Head><title  /> Automation Insights — Zion</title></Head>) );
}</ul> </div> </div>);
}</section>) : (<pre className=\mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800\"  /> {}
  talent_md;}
}</pre>);
}</section> </div>) import { useEffect, useState } from 'react';
import Head from next / head;
export default /**;
 * AutomationInsightsPage - Function description;
 */;
      <Head><title  /> Automation Insights — Zion</title></Head>;"
      <h1 className=\text - 2xl font - semibold mb - 4\ />Automation Insights</h1>;"
      <section className=\"mb - 8\ />;
        <h2 className=\"font - medium\" />Market Intelligence</h2>;

=======
return (<div> <Head><title > Automation Insights — Zion</title></Head>) )
}</ul> </div> </div>);
}</section>) : (<pre className=mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800" > {}
  talent_md
}</pre>);'
}</section> </div>) import { useEffect, useState } from 'react;
import Head from 'next / head'
export default /**
 * AutomationInsightsPage - Function description
 */
  const [intel, set_intel] = useState < any>(null);
  const [talent_md, setTalentMd] = useState < string>(')
  useEffect (() => {'
    fetch (/data / automation / market - intel.json).then ((r) => r.json ()).then (set_intel).catch (() => {});'
    fetch ('/data / automation / talent - highlights.md').then ((r) => r.text ()).then (setTalentMd).catch (() => {})
  }, [])
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <div>
      <Head><title>Automation Insights — Zion</title></Head>
      <h1 className="text-2xl font-semibold mb-4>Automation Insights</h1>
      <section className=mb-8">
        <h2 className="font-medium>Market Intelligence</h2>
        {!intel ? (


          <div className=text-sm text-gray-500>Loading…</div>
        ) : (
          <div className="mt-3 text-sm">
            <div className=text-xs text-gray-500>Generated at {intel.generatedAt}</div>
            <div className="mt-3">
              <h3 className=font-medium>Top Keywords</h3>
              <ul className="list-disc list-inside">
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                {Object.entries(intel.insights.keywordCounts).map(([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>


              </ul>;
            </div>;
            <div className=mt - 4>;
              <h3 className="font - medium">Top Languages</h3>;
              <ul className=list - disc list - inside>;
                {intel.insights.top_languages.map ((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>))}
              </ul>;
            </div>;
          </div>)}
      </section>;


=======
      <section id=\"talent\" className=\mb-8\ />;"
        <h2 className=\"font-medium\ />Talent Highlights</h2>;
        {!talentMd ? (<div className=\"text-sm text-gray-500\" />Loading…</div>;}
        ) : (<pre className=\mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark: bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800\" />{talentM;}
}</pre>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        )}
      </section>

      <section id="talent className=mb-8">
        <h2 className="font-medium>Talent Highlights</h2>
        {!talentMd ? (
          <div className=text-sm text-gray-500">Loading…</div>
        ) : (
          <pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800">{talentMd}</pre>
        )}
      </section>
    </div>
  )
}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533

=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
