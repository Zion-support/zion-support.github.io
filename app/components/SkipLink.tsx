import React from 'react';

const skipLinkClassName =
  'pointer-events-auto rounded-lg border border-purple-300/60 bg-slate-950/95 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const hiddenSkipLinkClassName = '-translate-y-16 opacity-0';

export default function SkipLink() {
  return (
    <div className="pointer-events-none fixed left-3 top-3 z-[70] flex flex-col gap-2">
      <a href="#main-content" className={`${skipLinkClassName} ${hiddenSkipLinkClassName}`}>
        Skip to main content
      </a>
      <a href="#site-navigation" className={`${skipLinkClassName} ${hiddenSkipLinkClassName}`}>
        Skip to navigation
      </a>
    </div>
  );
}
