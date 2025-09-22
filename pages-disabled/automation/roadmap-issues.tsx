<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// @ts-ignore
import data from '../../data/roadmap-issues.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/roadmap-issues.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/roadmap-issues.json',
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function RoadmapIssuesPage() {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export default function RoadmapIssuesPage() {}
  const items: any[] = (data?.items |[]).slice(0, 60)

<<<<<<< HEAD
=======
=======
  const items: any[] = (data?.items || []).slice(0, 60);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">Roadmap Issues</h1>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

;
import EnhancedLayout from '../../components / layout / EnhancedLayout',;
// @ts - ignore;'
import data from '../../data / roadmap - issues.json',
export default /**;
 * RoadmapIssuesPage - Function description;
 */
function RoadmapIssuesPage() {}
  const items: any[] = (data?.items || []).slice (0, 60),
  return (
    <EnhancedLayout>;"
      <div className="max - w-5xl mx - auto py - 10">;"
        <h1 className="text - 3xl font - bold">Roadmap Issues</h1>;'"
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;"
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => ("
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;"
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium underline">#{it.number} — {it.title}</a>;'"
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">Labels: {(it.labels || []).join (', ')}</div>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);


'
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore;'
import data from '../../data/roadmap-issues.json',


export default function RoadmapIssuesPage() {}
  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>"
      <div className="max-w-5xl mx-auto py-10">"
        <h1 className="text-3xl font-bold">Roadmap Issues</h1>
'"
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>"
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => ("
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
<<<<<<< HEAD
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">#{it.number} — {it.title}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels |[]).join(', ')}</div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">#{it.number} — {it.title}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </EnhancedLayout>
<<<<<<< HEAD

              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">#{it.number} — {it.title}</Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

=======
  );
};
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">#{it.number} — {it.title}</Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
  )
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



'"
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>"
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => ("
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </li>
          ))  } catch (error) {
    console.error("Error:", error);
=======

            </li>;
          ))  } catch (error) {";
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    </EnhancedLayout>
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
