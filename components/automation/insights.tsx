
<<<<<<< HEAD


}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800" > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react';

import Head from 'next/head';

export default function AutomationInsightsPage() {
  const [intel, setIntel] = useState<any>(null);
  const [talentMd, setTalentMd] = useState<string>('');
  useEffect(() => {'
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {});'
    fetch('/data/automation/talent-highlights.md').then((r) => r.text()).then(setTalentMd).catch(() => {})
>>>>>>> origin/cursor/delete-old-data-records-6bba
return (<div> <Head><title > Automation Insights — Zion</title></Head>) );
}</ul> </div> </div>);
}</section>) : (<pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border-gray-800" > {
  talent_md;
}</pre>);
}</section> </div>) import { useEffect, useState } from 'react';'

import Head from 'next / head';'

export default /**;
 * AutomationInsightsPage - Function description;
 */;
function AutomationInsightsPage() {const [intel, set_intel] = useState < any>(null)const [talent_md, setTalentMd]  = useState < string>('')useEffect (() => {fetch ('/data / automation / market - intel.json').then ((r) => r.json ()).then (set_intel).catch (() => {})fetch ('/data / automation / talent - highlights.md').then ((r) => r.text ()).then (setTalentMd).catch (() => {})}, [])return (<div>;'
      <Head><title > Automation Insights — Zion</title></Head>;
      <h1 className="text - 2xl font-semibold mb-4">Automation Insights</h1>;
      <section className="mb-8">;
        <h2 className="font-medium">Market Intelligence</h2>;
        {!intel ? (
          <div className="text - sm text-gray-500">Loading…</div>) : (
          <div className="mt-3 text-sm">;
            <div className="text - xs text-gray-500">Generated at {intel.generated_at}</div>;
            <div className="mt-3">;
              <h3 className="font-medium">Top Keywords</h3>;
              <ul className="list-disc list-inside">;
                {Object.entries (intel.insights.keyword_counts).map (([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>))}
              </ul>;
            </div>;
            <div className="mt-4">;
              <h3 className="font-medium">Top Languages</h3>;
              <ul className="list-disc list-inside">;
                {intel.insights.top_languages.map ((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>))}
              </ul>;
            </div>;
          </div>)}
      </section>;
      <section id="talent" className="mb-8">;
        <h2 className="font-medium">Talent Highlights</h2>;
        {!talent_md ? (
          <div className="text - sm text-gray-500">Loading…</div>) : (
          <pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border-gray-800">{talent_md}</pre>)}
      </section>;
    </div>);

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
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
const [talentMd, setTalentMd] = useState<string    />('');
  useEffect(() => {}
}
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {});
    fetch('/data/automation/talent-highlights.md').then((r) => r.text()).then(setTalentMd).catch(() => {})
return (<div    /> <Head><title> Automation Insights — Zion</title></Head>) );
}</ul> </div> </div>);
}</section>) : (<pre className=\"mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800\"     /> {}
  talent_md;}
}</pre>);
}</section> </div>) import { useEffect, useState } from 'react';

import Head from 'next / head';

export default /**;
 * AutomationInsightsPage - Function description;
 */;
function AutomationInsightsPage() {const [intel, set_intel] = useState < any>(null)const [talent_md, setTalentMd]  = useState < string>('')useEffect (() => {fetch ('/data / automation / market - intel.json').then ((r) => r.json ()).then (set_intel).catch (() => {})fetch ('/data / automation / talent - highlights.md').then ((r) => r.text ()).then (setTalentMd).catch (() => {})}, [])return (<div    />;
      <Head><title> Automation Insights — Zion</title></Head>;"
      <h1 className=\"text - 2xl font - semibold mb - 4\"    />Automation Insights</h1>;"
      <section className=\"mb - 8\"    />;"
        <h2 className=\"font - medium\"    />Market Intelligence</h2>;

        {!intel ? (
"
          <div className=\"text-sm text-gray-500\"    />Loading…</div>
        ) : (}"
          <div className=\"mt-3 text-sm\"    />}"
            <div className=\"text-xs text-gray-500\"    />Generated at {intel.generatedAt}</div>"
            <div className=\"mt-3\"    />"
              <h3 className=\"font-medium\"    />Top Keywords</h3>"
              <ul className=\"list-disc list-inside\"    />
                {Object.entries(intel.insights.keywordCounts).map(([k, v]: any) => (}
                  <li key={k}    />{k}: {v as any}</li>

                ))}
              </ul>;
            </div>;"
            <div className=\"mt-4\"    />;"
              <h3 className=\"font-medium\"    />Top Languages</h3>;"
              <ul className=\"list-disc list-inside\"    />;
                {intel.insights.topLanguages.map((l: any) => (<li key={l.lang}    />{l.lang}: {l.coun}
}</li>;
                ))}
              </ul>;
            </div>;
          </div>;
        )}
      </section>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <section id=\"talent\" className=\"mb-8\"    />;"
        <h2 className=\"font-medium\"    />Talent Highlights</h2>;"
        {!talentMd ? (<div className=\"text-sm text-gray-500\"    />Loading…</div>;}"
        ) : (<pre className=\"mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark: bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800\"    />{talentM}
<<<<<<< HEAD


=======
}</pre>
      <section id=\"talent\" className=\"mb-8\" />;"
        <h2 className=\"font-medium\" />Talent Highlights</h2>;"
        {!talentMd ? (<div className=\"text-sm text-gray-500\" />Loading…</div>;}"
        ) : (<pre className=\"mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark: bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800\" />{talentM;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}</pre>;
        )}


<<<<<<< HEAD

=======
      <section id="talent" className="mb-8">
        <h2 className="font-medium">Talent Highlights</h2>
        {!talentMd ? (
          <div className=text-sm text-gray-500">Loading…</div>
        ) : (
          <pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800">{talentMd}</pre>
        )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </section>
    </div>
);
}


<<<<<<< HEAD
"





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
