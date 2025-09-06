<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>

}

<<<<<<< HEAD
=======
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / github - agent - repos.json',
export default /**
 * GithubAgentReposPage - Function description
 */
function GithubAgentReposPage() {
  const items: any[] = (data?.items || []).slice (0, 50),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">GitHub Agent Repositories</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => (
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
              <a className="font - medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</a>;
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>;
              <p className="mt - 2 text - sm text - gray - 700 dark:text - gray - 200">{it.description}</p>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-agent-repos.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-agent-repos.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-agent-repos.json',
export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language |'—'}</div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
    </EnhancedLayout>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">

<<<<<<< HEAD
=======
  );
};
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.description}</p>
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
<<<<<<< HEAD

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
