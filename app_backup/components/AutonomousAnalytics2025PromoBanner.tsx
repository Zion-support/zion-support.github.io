import React from 'react';
import Link from 'next/link';

export default function AutonomousAnalytics2025PromoBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-purple-700 mb-2">NEW INSIGHT</div>
            <h3 className="text-2xl font-bold text-gray-900">Autonomous Analytics Platform 2025</h3>
            <p className="text-gray-600 mt-1 max-w-2xl">Move beyond dashboards to governed, explainable, ROI-backed decisions with agentic analytics.</p>
          </div>
          <div className="shrink-0">
            <Link href="/blog/ai-2025-autonomous-analytics-platform" className="bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

