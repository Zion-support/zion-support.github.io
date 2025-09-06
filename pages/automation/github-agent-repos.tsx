<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-agent-repos.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-agent-repos.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-agent-repos.json',
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>

<<<<<<< HEAD
=======
=======
}

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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-agent-repos.json';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-agent-repos.json',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-agent-repos.json',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language |'—'}</div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.description}</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
=======
    </EnhancedLayout>
<<<<<<< HEAD

              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

=======
  );
};
              <a className="font-medium underline" href={it.html_url} target="_blank" rel="noreferrer">{it.full_name}</Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">★ {it.stargazers_count} · Forks {it.forks_count} · {it.language || '—'}</div>
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
