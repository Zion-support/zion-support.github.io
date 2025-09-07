<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// @ts-ignore
import data from '../../data/arxiv-research.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/arxiv-research.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
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
import data from '../../data/arxiv-research.json',


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

<<<<<<< HEAD
=======
=======
  const items: any[] = (data?.items || []).slice(0, 40);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>
<<<<<<< HEAD


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
<<<<<<< HEAD
<<<<<<< HEAD
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors |[]).join(', ')}</div>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD

=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function ArxivResearchPage() {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export default function ArxivResearchPage() {}
  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">ArXiv Research</h1>

<<<<<<< HEAD
=======
"
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => ("
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">"
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">

<<<<<<< HEAD
=======
'"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>
"
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

';
import EnhancedLayout from '../../components / layout / EnhancedLayout',;
// @ts - ignore;'
import data from '../../data / arxiv - research.json',
export default /**;
 * ArxivResearchPage - Function description;
 */
function ArxivResearchPage() {}
  const items: any[] = (data?.items || []).slice (0, 40),
  return (
    <EnhancedLayout>;"
      <div className="max - w-5xl mx - auto py - 10">;"
        <h1 className="text - 3xl font - bold">ArXiv Research</h1>;'"
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;"
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => ("
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;"
              <a href={it.link} target="_blank" rel="noreferrer" className="font - medium underline">;
                {it.title}
              </a>;'"
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">{(it.authors || []).join (', ')}</div>;"
              <p className="mt - 2 text - sm text - gray - 700 dark:text - gray - 200">{it.summary}</p>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);


'
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;'
import data from '../../data/arxiv-research.json',





export default function ArxivResearchPage() {}
  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>"
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">ArXiv Research</h1>

"
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => ("
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">"
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
'"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>
"
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>

            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  );
};
<<<<<<< HEAD
=======

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {it.title  } catch (error) {
    console.error("Error:", error);
=======

;
;
  );
};



                {it.title  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>'"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
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
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
