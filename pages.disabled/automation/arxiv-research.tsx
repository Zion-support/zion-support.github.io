<<<<<<< HEAD
=======

import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/arxiv-research.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/arxiv-research.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;
import data from '../../data/arxiv-research.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;
import data from '../../data/arxiv-research.json',;



<<<<<<< HEAD:pages.disabled/automation/arxiv-research.tsx
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation/arxiv-research.tsx
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  const items: any[] = (data?.items || []).slice(0, 40);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors |[]).join(', ')}</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD:pages.disabled/automation/arxiv-research.tsx
  );
};

  )

}
  );
};

=======

}

<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/arxiv-research.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/arxiv-research.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/arxiv-research.json',
export default function ArxivResearchPage() {

  const items: any[] = (data?.items |[]).slice(0, 40)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">ArXiv Research</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.link} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors |[]).join(', ')}</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{(it.authors || []).join(', ')}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  );
};

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation/arxiv-research.tsx
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
}

}
}
=======

}

<<<<<<< HEAD:pages.disabled/automation/arxiv-research.tsx
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation/arxiv-research.tsx
