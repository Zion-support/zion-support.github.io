'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface QuickJumpProps {
  contentRef: React.RefObject<HTMLElement>;
  className?: string;
}

export default function QuickJump({ contentRef, className = '' }: QuickJumpProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Extract headings from content
  const extractHeadings = useCallback(() => {
    if (!contentRef.current) return;

    const newHeadings: HeadingItem[] = [];
    const nodes = contentRef.current.querySelectorAll('h2, h3');

    nodes.forEach((node) => {
      const id = node.id || node.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';
      if (!node.id) {
        node.id = id;
      }
      const level = parseInt(node.tagName.slice(1), 10);
      newHeadings.push({
        id,
        text: node.textContent?.trim() || '',
        level,
      });
    });

    setHeadings(newHeadings);
  }, [contentRef]);

  // Set up Intersection Observer for active section highlighting
  useEffect(() => {
    if (headings.length === 0 || !contentRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: contentRef.current,
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings, contentRef]);

  // Re-extract headings on mount and when content might change
  useEffect(() => {
    extractHeadings();
  }, [extractHeadings]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  const toggleMenu = () => setOpen((o) => !o);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      className={`sticky top-20 lg:block ${className}`}
      aria-label="Table of contents"
    >
      {/* Mobile toggle */}
      <button
        ref={triggerRef}
        className="fixed right-4 bottom-4 lg:static z-40 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors shadow-lg backdrop-blur-sm"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={open ? 'Close table of contents' : 'Open table of contents'}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile drawer */}
      <div
        className={`fixed lg:hidden inset-x-0 bottom-20 z-30 w-full max-w-sm mx-auto transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-12'
        }`}
        style={{ opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-purple-500/5 p-4 max-h-[50vh] overflow-y-auto scrollbar-none">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3 px-1">
            On this page
          </div>
          <ul className="space-y-1" role="list">
            {headings.map((heading, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    scrollToSection(heading.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeId === heading.id
                      ? 'text-purple-300 bg-purple-500/10 font-medium'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                  style={{ paddingLeft: heading.level === 3 ? 16 : 8 }}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 shrink-0">
        <div className="overflow-hidden rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 shadow-lg shadow-purple-500/5 p-4">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3 px-1 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            On this page
          </div>
          <ul className="space-y-1" role="list">
            {headings.map((heading, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(heading.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeId === heading.id
                      ? 'text-purple-300 bg-purple-500/10 font-medium border-l-2 border-purple-400 -ml-[2px]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border-l-2 border-transparent -ml-[2px]'
                  }`}
                  style={{ paddingLeft: heading.level === 3 ? 16 : 8 }}
                >
                  <span className="flex items-center gap-2">
                    {heading.level === 3 && (
                      <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v.5M12 10v.5M12 16v.5" />
                      </svg>
                    )}
                    {heading.text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Named export for 'use client' boundary clarity
export { QuickJump as useClientQuickJump };
