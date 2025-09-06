




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
export default function RemoteRolesPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Remote Roles</h1>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
=======


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">


              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{it.location} · {(it.tags || []).join(', ')}</div>

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
import data from '../../data / remote - roles.json',
export default /**
 * RemoteRolesPage - Function description
 */
function RemoteRolesPage() {
  const items: any[] = (data?.items || []).slice (0, 60),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">Remote Roles</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => (
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium underline">;
                {it.position} — {it.company}
              </a>;
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">{it.location} · {(it.tags || []).join (', ')}</div>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/remote-roles.json';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/remote-roles.json',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/remote-roles.json',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function RemoteRolesPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Remote Roles</h1>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">

                {it.position} — {it.company}
              </a>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD

=======
=======
  );
};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                {it.position} — {it.company  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{it.location} · {(it.tags || []).join(', ')}</div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

}
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
