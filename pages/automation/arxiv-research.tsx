<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/arxiv-research.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/arxiv-research.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
<<<<<<< HEAD
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors |[]).join(', ')}</div>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>

        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">

            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}

=======
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / arxiv - research.json',
export default /**
 * ArxivResearchPage - Function description
 */
function ArxivResearchPage() {
  const items: any[] = (data?.items || []).slice (0, 40),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">ArXiv Research</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => (
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
              <a href={it.link} target="_blank" rel="noreferrer" className="font - medium underline">;
                {it.title}
              </a>;
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">{(it.authors || []).join (', ')}</div>;
              <p className="mt - 2 text - sm text - gray - 700 dark:text - gray - 200">{it.summary}</p>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/arxiv-research.json';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/arxiv-research.json',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {it.title}
              </a>
<<<<<<< HEAD
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors |[]).join(', ')}</div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  );
};

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
                {it.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
