<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// @ts-ignore
import data from '../../data/security/osv-report.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/security/osv-report.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function OsvWatchPage() {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export default function OsvWatchPage() {}
  const results: any[] = (data?.results |[]).slice(0, 50)

<<<<<<< HEAD
=======
=======
  const results: any[] = (data?.results || []).slice(0, 50);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>
<<<<<<< HEAD

"
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {results.length === 0 ? (
=======
        {results.length === 0 ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : ("
          <ul className="mt-6 space-y-4">
            {results.map((r, idx) => ("
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">"
                <div className="font-medium">{r.name} — {r.versionRange}</div>"
                <ul className="list-disc ml-5 mt-2">
                  {r.vulns.slice(0, 5).map((v, i) => (
<<<<<<< HEAD
<<<<<<< HEAD
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary |''}</li>
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>
=======

'"
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
  );
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function OsvWatchPage() {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>

        {results.length === 0 ? (
<<<<<<< HEAD
=======
          <p className="mt - 6 text - sm">No known vulnerabilities found.</p>) : (
=======


}

';
import EnhancedLayout from '../../components / layout / EnhancedLayout',;
// @ts - ignore;'
import data from '../../data / security / osv - report.json',
export default /**;
 * OsvWatchPage - Function description;
 */
function OsvWatchPage() {}
  const results: any[] = (data?.results || []).slice (0, 50),
  return (
    <EnhancedLayout>;"
      <div className="max - w-5xl mx - auto py - 10">;"
        <h1 className="text - 3xl font - bold">OSV Vulnerability Watch</h1>;'"
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        {results.length === 0 ? ("
          <p className="mt - 6 text - sm">No known vulnerabilities found.</p>) : ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ul className="mt - 6 space - y-4">;
            {results.map ((r, idx) => ("
              <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;"
                <div className="font - medium">{r.name} — {r.version_range}</div>;"
                <ul className="list - disc ml - 5 mt - 2">;
                  {r.vulns.slice (0, 5).map ((v, i) => ('"`
                    <li key={i} className="text - sm"><a className="underline" href={`https://osv.dev / vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>))}
                </ul>;
              </li>))}
          </ul>)}
      </div>;
    </EnhancedLayout>);


'
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;'
import data from '../../data/security/osv-report.json',





export default function OsvWatchPage() {}
  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>"
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        {results.length === 0 ? (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


        {results.length === 0 ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : ("
          <ul className="mt-6 space-y-4">
            {results.map((r, idx) => ("
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">"
                <div className="font-medium">{r.name} — {r.versionRange}</div>"
                <ul className="list-disc ml-5 mt-2">
                  {r.vulns.slice(0, 5).map((v, i) => (
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary |''}</li>
=======
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


;
;
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</Link> — {v.summary || ''}</li>
                  ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </li>;
            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>;
        )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
