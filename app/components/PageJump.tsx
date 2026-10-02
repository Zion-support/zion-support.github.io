'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface PageJumpLink {
  label: string;
  href: string;
}

const JUMP_LINKS: PageJumpLink[] = [
  { label: 'Home', href: '/' },
  { label: 'AI Lab', href: '/ai' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'AI Agents', href: '/agents-monitoring' },
  { label: 'Tools', href: '/tools/service-comparison' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function PageJump({ className }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function isActive(href: string): boolean {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) ?? false;
  }

  return (
    <div className={className} ref={ref}>
      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-purple-500/40 hover:bg-slate-800 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span className="hidden xs:inline">Jump to:</span>
          <span className="text-slate-400">{open ? '▲' : '▼'}</span>
        </button>

        {open && (
          <div
            className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl z-50 py-2"
            role="listbox"
            aria-label="Jump to page"
          >
            {JUMP_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="option"
                  aria-selected={active}
                  className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                    active
                      ? 'text-purple-300 bg-purple-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="truncate">{link.label}</span>
                  {active && (
                    <span className="ml-auto shrink-0 text-[10px] uppercase tracking-wider font-semibold text-purple-400">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function PageJumpLinkList() {
  return (
    <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500" aria-hidden="true">
      {JUMP_LINKS.map((link) => (
        <span key={link.href} className="truncate max-w-[90px]">
          {link.label}
        </span>
      ))}
    </div>
  );
}
