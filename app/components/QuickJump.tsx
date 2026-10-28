// app/components/QuickJump.tsx — Sticky Table of Contents sidebar for long pages
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface QuickJumpProps {
  contentRef?: React.RefObject<HTMLElement>;
  className?: string;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

export default function QuickJump({ contentRef, className = '' }: QuickJumpProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const localRef = useRef<HTMLElement>(null);
  const ref = contentRef?.current || localRef.current;
  const pathname = usePathname();

  const extractHeadings = useCallback(() => {
    const container = ref || document;
    const els = container.querySelectorAll('h2, h3');
    const result: Heading[] = [];
    const seen = new Set<string>();

    els.forEach((el) => {
      const text = (el.textContent || '').trim();
      if (!text || text.length > 80) return;
      let id = el.id;
      if (!id) {
        id = generateId(text);
        el.id = id;
      }
      if (seen.has(id)) {
        id = `${id}-${seen.size}`;
        el.id = id;
      }
      seen.add(id);
      result.push({ id, text, level: parseInt(el.tagName[1]) });
    });

    setHeadings(result);
  }, [ref]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      extractHeadings();
    }
  }, [extractHeadings]);

  const activeId = typeof document !== 'undefined' ? document.querySelector('.opacity-100'); /* simplified */
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    if (typeof document === 'undefined' || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className={`quick-jump sticky top-24 w-56 shrink-0 flex flex-col ${collapsed ? 'hidden' : ''} ${className}`}
      aria-label="Table of contents"
    >
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">On this page</span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-500 hover:text-slate-300 transition-colors"
          aria-label={collapsed ? 'Expand table of contents' : 'Collapse table of contents'}
        >
          {collapsed ? '▶' : '◀'}
        </button>
      </div>
      <ul className="flex-1 overflow-y-auto space-y-0.5 py-2">
        {headings
          .filter((h) => h.level === 2)
          .map((h) => (
            <li key={h.id}>
              <button
                onClick={() => scrollTo(h.id)}
                className={`block w-full text-left px-2 py-1 rounded-md text-sm transition-colors ${
                  activeHeading === h.id
                    ? 'text-purple-300 bg-purple-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {h.text}
              </button>
            </li>
          ))}
        {headings.filter((h) => h.level === 3).map((h) => (
          <li key={h.id}>
            <button
              onClick={() => scrollTo(h.id)}
              className={`block w-full text-left px-2 py-0.5 rounded-md text-xs transition-colors ml-4 ${
                activeHeading === h.id
                  ? 'text-purple-400 bg-purple-500/10'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
              }`}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-2 border-t border-slate-800/60">
        <Link
          href="/site-map"
          className="block px-2 py-1 text-xs text-slate-500 hover:text-purple-400 transition-colors"
        >
          Full site map →
        </Link>
      </div>
    </nav>
  );
}

export function PageJump() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'AI Lab', href: '/ai' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Solutions Hub', href: '/solutions-hub' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Discovery', href: '/discovery' },
    { name: 'Tools', href: '/tools/service-comparison' },
    { name: 'Tools Hub', href: '/tools-hub' },
    { name: 'Blog', href: '/blog' },
    { name: 'Blog Hub', href: '/blog-hub' },
    { name: 'Free Resources', href: '/free-resources-hub' },
    { name: 'AI Apps Directory', href: '/ai-apps-directory' },
    { name: 'Industries Hub', href: '/industries-hub' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Site Map', href: '/site-map' },
  ];

  const currentPage = links.find((l) => pathname.startsWith(l.href))?.name || 'Jump to...';

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1 bg-slate-950/90 backdrop-blur-sm rounded-lg hover:bg-slate-800/60"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        {currentPage}
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl z-50 py-2"
            role="listbox"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm transition-colors ${
                    pathname.startsWith(link.href)
                      ? 'text-purple-300 bg-purple-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  role="option"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
