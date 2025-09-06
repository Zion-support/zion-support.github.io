<<<<<<< HEAD


<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function OsvWatchPage() {

  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>

<<<<<<< HEAD
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {results.length === 0 ? (
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {results.map((r, idx) => (
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="font-medium">{r.name} — {r.versionRange}</div>
                <ul className="list-disc ml-5 mt-2">
                  {r.vulns.slice(0, 5).map((v, i) => (

<<<<<<< HEAD
=======

                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>

<<<<<<< HEAD
=======
=======
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / security / osv - report.json',
export default /**
 * OsvWatchPage - Function description
 */
function OsvWatchPage() {
  const results: any[] = (data?.results || []).slice (0, 50),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">OSV Vulnerability Watch</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        {results.length === 0 ? (
          <p className="mt - 6 text - sm">No known vulnerabilities found.</p>) : (
          <ul className="mt - 6 space - y-4">;
            {results.map ((r, idx) => (
              <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
                <div className="font - medium">{r.name} — {r.version_range}</div>;
                <ul className="list - disc ml - 5 mt - 2">;
                  {r.vulns.slice (0, 5).map ((v, i) => (
                    <li key={i} className="text - sm"><a className="underline" href={`https://osv.dev / vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>))}
                </ul>;
              </li>))}
          </ul>)}
      </div>;
    </EnhancedLayout>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/security/osv-report.json';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/security/osv-report.json',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function OsvWatchPage() {

  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        {results.length === 0 ? (
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {results.map((r, idx) => (
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="font-medium">{r.name} — {r.versionRange}</div>
                <ul className="list-disc ml-5 mt-2">
                  {r.vulns.slice(0, 5).map((v, i) => (
<<<<<<< HEAD
<<<<<<< HEAD
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary |''}</li>
=======
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  )
<<<<<<< HEAD

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</Link> — {v.summary || ''}</li>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              </li>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
