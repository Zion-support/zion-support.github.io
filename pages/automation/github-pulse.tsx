<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-pulse.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-pulse.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-pulse.json',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-pulse.json',


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function GithubPulsePage() {

  const repo = data?.repo |{}
  const last24h = data?.last24h |{}

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
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
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-pulse.json';
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/github-pulse.json',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/github-pulse.json',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function GithubPulsePage() {

  const repo = data?.repo |{}
  const last24h = data?.last24h |{}

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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


function Metric({ label, value }: { label: string, value: any }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value ?? '—'}</div>
    </div>
  );
};
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
