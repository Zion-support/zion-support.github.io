'use client';

import { useState } from 'react';
import Link from 'next/link';

type FeaturedApp = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
};

const INITIAL_COUNT = 9;

export default function FeaturedAppGrid({ apps }: { apps: FeaturedApp[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? apps : apps.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((app) => (
          <Link
            key={app.href}
            href={app.href}
            className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2 text-3xl">
                {app.icon}
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                {app.category}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
              {app.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{app.description}</p>
            <p className="mt-4 text-sm font-semibold text-purple-300">View app →</p>
          </Link>
        ))}
      </div>

      {!showAll && apps.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3 text-base font-semibold text-purple-100 transition hover:bg-purple-500/20"
          >
            Show all {apps.length} apps
          </button>
        </div>
      )}
    </>
  );
}
