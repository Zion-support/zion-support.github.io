


}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800" > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react';

import Head from 'next/head';


export default function AutomationInsightsPage() {
export default function AutomationInsightsPage() {;

      </section>;
      <section id="talent" className="mb-8">;
        <h2 className="font-medium">Talent Highlights</h2>;
        {!talentMd ? (;
          <div className="text-sm text-gray-500">Loading…</div>;
        ) : (;
          <pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800">{talentMd}</pre>;
        )}
      </section>;
    </div>;
  );
}





              <ul className="list - disc list - inside">;
                {Object.entries (intel.insights.keyword_counts).map (([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>))}
              </ul>;
            </div>;"
            <div className="mt - 4">;"
              <h3 className="font - medium">Top Languages</h3>;"
              <ul className="list - disc list - inside">;
                {intel.insights.top_languages.map ((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>))}
              </ul>;
            </div>;
          </div>)}
      </section>;"
      <section id="talent" className="mb - 8">;"
        <h2 className="font - medium">Talent Highlights</h2>;
        {!talent_md ? ("
          <div className="text - sm text - gray - 500">Loading…</div>) : ("
          <pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800">{talent_md}</pre>)}
      </section>;
    </div>);
          <div className="text-sm text-gray-500">Loading…</div>
        ) : (
          <div className="mt-3 text-sm">
            <div className=text-xs text-gray-500>Generated at {intel.generatedAt}</div>
            <div className="mt-3">
              <h3 className=font-medium>Top Keywords</h3>
              <ul className="list-disc list-inside">
      <section id="talent" className="mb - 8">;
        <h2 className="font - medium">Talent Highlights</h2>;
      </section>;
    </div>;
)}
        {!talent_md ? (
          <div className="text - sm text - gray - 500">Loading…</div>) : (
          <pre className="mt - 3 whitespace - pre - wrap text - sm bg - gray - 50 dark:bg - gray - 900 p - 3 rounded border border - gray - 200 dark:border - gray - 800">{talent_md}</pre>)}
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



"





