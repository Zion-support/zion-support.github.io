import React from &quot;react&quot;;
import Link from &quot;next/link&quot;;

export default function AutomationsPage() {
  return (
    <main className=&quot;mx-auto max-w-5xl px-4 py-12&quot;>
      <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Autonomous Cloud Automations</h1>
      <p className=&quot;mt-2 text-gray-600&quot;>
        These automations run entirely in the cloud, orchestrate tasks intelligently, and sync changes back to the repository.
      </p>

      <div className=&quot;mt-8 space-y-6&quot;>
        <div className=&quot;rounded-xl border border-gray-200 bg-white p-6 shadow-sm&quot;>
          <h2 className=&quot;text-lg font-semibold text-gray-900&quot;>Intelligent Orchestrator</h2>
          <p className=&quot;mt-2 text-sm text-gray-600&quot;>
            Detects change patterns, selects relevant tasks (UI, SEO, performance, security, links, monetization, venture), executes in parallel batches, and commits results.
          </p>
          <div className=&quot;mt-4 flex gap-3&quot;>
            <a
              href=&quot;https://github.com/Zion-Holdings/zion.app/actions&quot;
              target=&quot;_blank&quot;
              rel=&quot;noreferrer&quot;
              className=&quot;rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50&quot;
            >
              View Live Runs
            </a>
          </div>
        </div>

        <div className=&quot;rounded-xl border border-gray-200 bg-white p-6 shadow-sm&quot;>
          <h2 className=&quot;text-lg font-semibold text-gray-900&quot;>AI Content Curator</h2>
          <p className=&quot;mt-2 text-sm text-gray-600&quot;>
            Optionally uses AI to produce small, useful artifacts (e.g., growth experiments), committed into the repository.
          </p>
          <div className=&quot;mt-4 flex gap-3&quot;>
            <Link href=&quot;/automations/curation&quot;><a className=&quot;rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700&quot;>View Curated Output</a></a>
          </div>
        </div>
      </div>
    </main>
  );
}