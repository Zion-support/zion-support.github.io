import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

export default function EnhancedNavigation() {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur supports-backdrop-blur:bg-transparent sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold flex items-center gap-2">
            {tenant?.logoUrl ? <img src={tenant.logoUrl} alt={tenant.name} className="w-6 h-6 rounded" /> : null}
            <span>{tenant?.name ?? 'Zion'}</span>
          </a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/automation"><a>Automations</a></Link>
          <Link href="/docs/gitbook"><a>Docs</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/book-builder"><a>Book Builder</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/sim/work-futures"><a>Work Futures</a></Link>
          <Link href="/academy/futurescape"><a>Futurescape</a></Link>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/services"><a>Services</a></Link>
          <Link href="/interviews"><a>Interviews</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/partners"><a>Partners</a></Link>
          <Link href="/affiliate-dashboard"><a>Affiliate Dashboard</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/dashboard/wallet"><a className="inline-flex items-center gap-1 px-2 py-1 border rounded">
            <span>⚡</span>
            <span>{balance ?? '—'} ZION$</span>
          </a></Link>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default EnhancedNavigation;
