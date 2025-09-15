import React from "react";
import Link from "next/link";

export default function AutomationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Autonomous Cloud Automations</h1>
      <p className="mt-2 text-gray-600">
      </p>

      <div className="mt-8 space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Intelligent Orchestrator</h2>
          <p className="mt-2 text-sm text-gray-600">
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/Zion-Holdings/zion.app/actions"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View Live Runs
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">AI Content Curator</h2>
          <p className="mt-2 text-sm text-gray-600">
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/automations/curation"><a className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">View Curated Output</a></Link>
          </div>
        </div>
      </div>
    </main>
  );
}