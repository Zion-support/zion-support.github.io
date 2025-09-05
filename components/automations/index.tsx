<<<<<<< HEAD
import React from "react",;
import Link from "next/link",;
;
export default function AutomationsPage() {;
  return (;
    <main className="mx-auto max-w-5xl px-4 py-12">;
      <h1 className="text-2xl font-bold text-gray-900">Autonomous Cloud Automations</h1>;
      <p className="mt-2 text-gray-600">;
        These automations run entirely in the cloud, orchestrate tasks intelligently, and sync changes back to the repository.;
      </p>;
;
      <div className="mt-8 space-y-6">;
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">;
          <h2 className="text-lg font-semibold text-gray-900">Intelligent Orchestrator</h2>;
          <p className="mt-2 text-sm text-gray-600">;
            Detects change patterns, selects relevant tasks (UI, SEO, performance, security, links, monetization, venture), executes in parallel batches, and commits results.;
          </p>;
          <div className="mt-4 flex gap-3">;
            <a;
              href="https://github.com/Zion-Holdings/zion.app/actions";
              target="_blank";
              rel="noreferrer";
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50";
            >;
              View Live Runs;
            </a>;
          </div>;
        </div>;
;
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">;
          <h2 className="text-lg font-semibold text-gray-900">AI Content Curator</h2>;
          <p className="mt-2 text-sm text-gray-600">;
            Optionally uses AI to produce small, useful artifacts (e.g., growth experiments), committed into the repository.;
          </p>;
          <div className="mt-4 flex gap-3">;
            <Link href="/automations/curation"><a className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">View Curated Output</a></Link>;
          </div>;
        </div>;
      </div>;
    </main>;
  );
=======
import React from "react",
import Link from "next/link",export default function AutomationsPage() {
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
export default function AutomationsPage() {_return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Autonomous Cloud Automations</h1>
      <p className="mt-2 text-gray-600">
        These automations run entirely in the cloud, _orchestrate tasks intelligently, _and sync changes back to the repository.
      </p>

      <div className="mt-8 space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Intelligent Orchestrator</h2>
          <p className="mt-2 text-sm text-gray-600">
            Detects change patterns, _selects relevant tasks (UI, _SEO, _performance, _security, _links, _monetization, _venture), _executes in parallel batches, _and commits results.
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
            Optionally uses AI to produce small, useful artifacts (e.g., growth experiments), committed into the repository.          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/automations/curation"><a className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover: bg-indigo-700">View Curated Output</a></Link>          </div>
        </div>
      </div>
    </main>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}