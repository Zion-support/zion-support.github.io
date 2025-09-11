<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function DaoLeaderboardPage() {

  const items: any[] = (data?.items |[]).slice(0, 25)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>
<<<<<<< HEAD


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <ul className="mt-6 space-y-2">
          {items.map((it, idx) => (
            <li key={idx} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposals {it.proposals}</div>
              </div>
              <div className="text-sm font-semibold">Score {it.totalScore}</div>
            </li>

<<<<<<< HEAD
}

<<<<<<< HEAD
=======
=======
=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / dao - leaderboard.json',
export default /**
 * DaoLeaderboardPage - Function description
 */
function DaoLeaderboardPage() {
  const items: any[] = (data?.items || []).slice (0, 25),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">DAO Leaderboard</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <ul className="mt - 6 space - y-2">;
          {items.map ((it, idx) => (
            <li key={idx} className="p - 3 border border - gray - 200 dark:border - gray - 800 rounded - lg flex items - center justify - between">;
              <div>;
                <div className="font - medium">{it.name}</div>;
                <div className="text - xs text - gray - 500 dark:text - gray - 400">Proposals {it.proposals}</div>;
              </div>;
              <div className="text - sm font - semibold">Score {it.total_score}</div>;
            </li>))}
        </ul>;
      </div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </EnhancedLayout>);
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/dao-leaderboard.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/dao-leaderboard.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/dao-leaderboard.json',
export default function DaoLeaderboardPage() {

  const items: any[] = (data?.items |[]).slice(0, 25)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-2">
          {items.map((it, idx) => (
            <li key={idx} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposals {it.proposals}</div>
              </div>
              <div className="text-sm font-semibold">Score {it.totalScore}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

<<<<<<< HEAD

  );
};
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
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
