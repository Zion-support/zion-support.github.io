<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/dao-leaderboard.json',

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function DaoLeaderboardPage() {

  const items: any[] = (data?.items |[]).slice(0, 25)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>

<<<<<<< HEAD
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
    </EnhancedLayout>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
