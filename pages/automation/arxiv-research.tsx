

<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>

<<<<<<< HEAD
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">

<<<<<<< HEAD
=======

              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {it.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
