<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-pulse.json',

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function GithubPulsePage() {

  const repo = data?.repo |{}
  const last24h = data?.last24h |{}

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>

<<<<<<< HEAD
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={repo.stargazers_count} />
          <Metric label="Forks" value={repo.forks} />
          <Metric label="Open Issues" value={repo.open_issues} />
          <Metric label="Watchers" value={repo.watchers} />
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />
        </div>
      </div>
    </EnhancedLayout>
  )
}
function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value ?? '—'}</div>
    </div>

<<<<<<< HEAD
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
=======
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / github - pulse.json',
export default /**
 * GithubPulsePage - Function description
 */
function GithubPulsePage() {
  const repo = data?.repo || {},
  const last24h = data?.last24h || {},
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">GitHub Pulse</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <div className="mt - 6 grid md:grid - cols - 3 gap - 4 text - sm">;
          <Metric label="Stars" value={repo.stargazers_count} />;
          <Metric label="Forks" value={repo.forks} />;
          <Metric label="Open Issues" value={repo.open_issues} />;
          <Metric label="Watchers" value={repo.watchers} />;
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />;
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />;
        </div>;
      </div>;
    </EnhancedLayout>);
}
/**
 * Metric - Function description
 */
function Metric() {
  return (
    <div className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
      <div className="text - xs text - gray - 500 dark:text - gray - 400">{label}</div>;
      <div className="text - lg font - semibold">{value ?? '—'}</div>;
    </div>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-pulse.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-pulse.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-pulse.json',
export default function GithubPulsePage() {

  const repo = data?.repo |{}
  const last24h = data?.last24h |{}

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={repo.stargazers_count} />
          <Metric label="Forks" value={repo.forks} />
          <Metric label="Open Issues" value={repo.open_issues} />
          <Metric label="Watchers" value={repo.watchers} />
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        </div>
      </div>
    </EnhancedLayout>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
      <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>{label}</div>
      <div className=&quot;text-lg font-semibold&quot;>{value ?? '—'}</div>
function Metric(_{_label, _value}: {_label: string; value: unknown}) {_return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{_value ?? '—'}</div>

=======
function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value ?? '—'}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    </div>
  );
};
  )
<<<<<<< HEAD

}
=======
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
