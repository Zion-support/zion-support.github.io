<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function OsvWatchPage() {

  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


        {results.length === 0 ? (
          <p className="mt-6 text-sm">No known vulnerabilities found.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {results.map((r, idx) => (
              <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="font-medium">{r.name} — {r.versionRange}</div>
                <ul className="list-disc ml-5 mt-2">
                  {r.vulns.slice(0, 5).map((v, i) => (


                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>


                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </EnhancedLayout>

}

<<<<<<< HEAD
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/security/osv-report.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/security/osv-report.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',
<<<<<<< HEAD
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/security/osv-report.json',


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function OsvWatchPage() {

  const results: any[] = (data?.results |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">OSV Vulnerability Watch</h1>
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
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary |''}</li>
                    <li key={i} className="text-sm"><a className="underline" href={`https://osv.dev/vulnerability/${v.id}`} target="_blank" rel="noreferrer">{v.id}</a> — {v.summary || ''}</li>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  );
};
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
