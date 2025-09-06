
return (<div> <Head><title>Automation Insights — Zion</title></Head>) )
}</ul> </div> </div>)
 return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
 return (<div> <Head><title>Automation Insights — Zion</title></Head>) ) 
}</ul> </div> </div>) 
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}</section>) : (<pre className="mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800" > {
  talentMd
}</pre>)
}</section> </div>) import { useEffect, useState } from 'react';
import Head from 'next/head';
import Head from 'next/head';


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function AutomationInsightsPage() {

  const [intel, setIntel] = useState<any>(null);
  const [talentMd, setTalentMd] = useState<string>('');
  useEffect(() => {
    fetch('/data/automation/market-intel.json').then((r) => r.json()).then(setIntel).catch(() => {});
    fetch('/data/automation/talent-highlights.md').then((r) => r.text()).then(setTalentMd).catch(() => {})
                {Object.entries(intel.insights.keywordCounts).map(([k, v]: any) => (
                  <li key={k}>{k}: {v as any}</li>
                ))}
              </ul>
            </div>

                {intel.insights.topLanguages.map((l: any) => (
                  <li key={l.lang}>{l.lang}: {l.count}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
=======
<<<<<<< HEAD

      <section id=&quot;talent&quot; className=&quot;mb-8&quot;>
        <h2 className=&quot;font-medium&quot;>Talent Highlights</h2>
        {!talentMd ? (
          <div className=&quot;text-sm text-gray-500&quot;>Loading…</div>
        ) : (
          <pre className=&quot;mt-3 whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-800&quot;>{talentMd}</pre>
        )}
      </section>
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
