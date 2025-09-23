'use client';

import React from 'react';
import Link from 'next/link';

export default function AI2026AutonomousSystemsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">AI 2026: Autonomous Systems</h2>
            <p className="opacity-90">Explore our latest research and playbooks for safe autonomous operations.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/blog/ai-2026-agent-orchestration-patterns" className="bg-white text-indigo-700 px-5 py-3 rounded-lg font-semibold">
              Read Overview
            </Link>
            <Link href="/content/ai-2026-autonomous-systems" className="border border-white px-5 py-3 rounded-lg font-semibold">
              Explore Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

