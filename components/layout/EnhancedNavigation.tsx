import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const GlobalSearchBar = dynamic(() => import('../search/GlobalSearchBar'), { ssr: false });

export default function EnhancedNavigation() {
  const [balance, setBalance] = React.useState<number | null>(null);
  React.useEffect(() => {
    const uid = typeof window !== 'undefined' ? (window.localStorage.getItem('zion_user_id') || 'demo-user') : 'demo-user';
    fetch(`/api/wallet?userId=${encodeURIComponent(uid)}`)
      .then((r) => r.json())
      .then((d) => setBalance(d?.wallet?.balance ?? 0))
      .catch(() => setBalance(0));
  }, []);
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/">
          <a className="font-semibold">Zion</a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/services/description-generator"><a>Service Generator</a></Link>
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
