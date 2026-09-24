'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PageJumpLink {
  name: string;
  href: string;
}

const JUMP_LINKS: PageJumpLink[] = [
  { name: 'Home', href: '/' },
  { name: 'AI Lab', href: '/ai' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Tools', href: '/tools/service-comparison' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function PageJump() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getCurrentPageName = useCallback(() => {
    const match = JUMP_LINKS.find((l) => pathname?.startsWith(l.href));
    return match?.name || 'Jump to...';
  }, [pathname]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Focus management: focus first link when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a') as HTMLAnchorElement;
      firstLink?.focus();
    }
  }, [open]);

  const handleSelect = (href: string) => {
    setOpen(false);
    // Link click handles navigation
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={triggerRef}
        onClick={() => setOpen((o) => !o)}
        className="group relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-slate-950 hover:bg-slate-800/60 active:bg-slate-800"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Jump to page"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-slate-300 group-hover:text-white transition-colors">
          {getCurrentPageName()}
        </span>
        <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
          ▾
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Site sections"
          className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl shadow-purple-500/5 p-2 z-50 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 px-3 py-2 border-b border-slate-800/60 mb-1">
            Jump to section
          </div>
          <ul className="space-y-0.5">
            {JUMP_LINKS.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleSelect(link.href)}
                    role="option"
                    aria-selected={isActive}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'text-purple-300 bg-purple-500/10 font-medium'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-slate-500 group-hover:text-slate-400 transition-colors">
                      →
                    </span>
                    <span className="transition-colors">{link.name}</span>
                    {isActive && (
                      <span className="ml-auto text-[10px] text-purple-400/60">
                        current
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Keyboard hint */}
          <div className="mt-2 pt-2 border-t border-slate-800/60 px-3 text-[10px] text-slate-600">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">Esc</kbd>
            {' '}to close
          </div>
        </div>
      )}
    </div>
  );
}

// Named reference export
export { PageJump as useClientPageJump };
