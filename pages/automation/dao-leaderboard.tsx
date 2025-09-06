

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function DaoLeaderboardPage() {

  const items: any[] = (data?.items |[]).slice(0, 25)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>


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

=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/dao-leaderboard.json',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function DaoLeaderboardPage() {

  const items: any[] = (data?.items |[]).slice(0, 25)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">DAO Leaderboard</h1>

        <ul className="mt-6 space-y-2">
          {items.map((it, idx) => (
            <li key={idx} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposals {it.proposals}</div>
              </div>
              <div className="text-sm font-semibold">Score {it.totalScore}</div>

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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
