<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-contributors.json',;
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-contributors.json',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function GithubContributorsPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Contributors</h1>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <ul className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
<<<<<<< HEAD
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.login}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Contributions {it.contributions}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
};
=======
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.login}</Link>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Contributions {it.contributions}</div>
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
