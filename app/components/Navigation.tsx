'use client';

import Link from 'next/link';
<<<<<<< Updated upstream
import { useState, useEffect, useCallback } from 'react';
=======
import { useState, useEffect, useRef } from 'react';
>>>>>>> Stashed changes
import { usePathname } from 'next/navigation';
import {
  PRIMARY_NAV_LINKS,
  SOLUTION_LINKS,
  RESOURCE_LINKS,
  FEATURED_AI_SERVICE_LINKS,
  type NavigationLink,
} from '@/constants/navigation';

const SITE_TITLE = 'Zion Tech Group';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
<<<<<<< Updated upstream
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>('#site-search-input');
        input?.focus();
      }
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
=======
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  // Close mobile panel on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobilePanelRef.current && !mobilePanelRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
>>>>>>> Stashed changes
  }, []);

  function isActive(href: string): boolean {
    if (href === '/') return pathname === '/';
    if (href.startsWith('#')) return false;
    return pathname?.startsWith(href) ?? false;
  }

  const closeAll = useCallback(() => setOpenDropdown(null), []);

  function NavLink({ link, onClick }: { link: NavigationLink; onClick?: () => void }) {
    if (link.href === '#') {
      return <div className="border-t border-slate-800 my-1" />;
    }
    const active = isActive(link.href);
    return (
      <Link
        href={link.href}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          active
            ? 'text-purple-400 bg-purple-500/10'
            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
        }`}
        onClick={onClick}
      >
        {link.name}
        {link.badge && (
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
            link.badge === 'New' ? 'bg-emerald-500/20 text-emerald-400' :
            link.badge === 'Live' ? 'bg-red-500/20 text-red-400 animate-pulse' :
            'bg-purple-500/20 text-purple-400'
          }`}>{link.badge}</span>
        )}
      </Link>
    );
  }

  function Dropdown({ id, label, links, wide }: { id: string; label: string; links: NavigationLink[]; wide?: boolean }) {
    const isOpen = openDropdown === id;
    return (
      <div className="relative">
        <button
          className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-lg ${
            isOpen ? 'text-purple-400 bg-purple-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
          }`}
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          aria-expanded={isOpen}
        >
          {label}
          <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={closeAll} />
            <div className={`absolute top-full left-0 mt-1 ${wide ? 'w-80' : 'w-64'} rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-black/50 p-2 z-50 max-h-[70vh] overflow-y-auto`}>
              {links.map((link, i) => (
                <NavLink key={i} link={link} onClick={closeAll} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
<<<<<<< Updated upstream
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled
        ? 'border-slate-800/80 bg-slate-950/90 backdrop-blur-2xl shadow-lg shadow-black/20'
        : 'border-slate-800/40 bg-slate-950/70 backdrop-blur-xl'
    }`}>
=======
    <header id="site-navigation" className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
>>>>>>> Stashed changes
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Zion Tech Group home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow">
            Z
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hidden sm:block">
            {SITE_TITLE}
          </span>
        </Link>

        {/* Desktop nav */}
<<<<<<< Updated upstream
        <div className="hidden lg:flex items-center gap-0.5">
          <Dropdown id="services" label="Services" links={FEATURED_AI_SERVICE_LINKS} wide />
          <Dropdown id="solutions" label="Solutions" links={SOLUTION_LINKS} />
          <Dropdown id="resources" label="Resources" links={RESOURCE_LINKS} />

          {/* Direct links */}
          {PRIMARY_NAV_LINKS.filter(l => ['/pricing', '/contact'].includes(l.href)).map((link, i) => (
=======
        <div className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setServicesOpen(!servicesOpen); setSolutionsOpen(false); setResourcesOpen(false); }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-500 tracking-wider">Featured AI</div>
                {FEATURED_AI_SERVICE_LINKS.slice(0, 6).map((link, i) => (
                  <Link key={i} href={link.href} className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800" onClick={() => setServicesOpen(false)} role="menuitem">
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-slate-800 my-1" />
                <Link href="/services" className="block px-3 py-2 rounded-lg text-sm text-purple-400 hover:text-purple-300" onClick={() => setServicesOpen(false)} role="menuitem">
                  All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div className="relative group">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setSolutionsOpen(!solutionsOpen); setServicesOpen(false); setResourcesOpen(false); }}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions ▾
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                {SOLUTION_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                    onClick={() => setSolutionsOpen(false)}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div className="relative group">
            <button
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); setSolutionsOpen(false); }}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources ▾
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50" role="menu">
                {RESOURCE_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                    onClick={() => setResourcesOpen(false)}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Primary nav links (Pricing, About, Contact, AI Agents) */}
          {PRIMARY_NAV_LINKS.filter(l => !['/', '/services', '/solutions'].includes(l.href)).map((link, i) => (
>>>>>>> Stashed changes
            <NavLink key={i} link={link} />
          ))}

          {/* Search trigger */}
          <button
            className="ml-2 px-3 py-1.5 rounded-lg text-xs text-slate-500 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-colors flex items-center gap-1.5"
            onClick={() => {
              const input = document.querySelector<HTMLInputElement>('#site-search-input');
              input?.focus();
            }}
            title="Search (⌘K)"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden xl:inline">Search</span>
            <kbd className="text-[9px] bg-slate-800 px-1 rounded">⌘K</kbd>
          </button>

          {/* CTA */}
          <Link href="/contact" className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
<<<<<<< Updated upstream
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
=======
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
>>>>>>> Stashed changes
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
<<<<<<< Updated upstream
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-2xl">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {/* Mobile search */}
            <div className="mb-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search 580+ services..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const q = (e.target as HTMLInputElement).value;
                      if (q.trim()) window.location.href = `/services/?q=${encodeURIComponent(q)}`;
                    }
                  }}
                />
              </div>
            </div>

            {PRIMARY_NAV_LINKS.filter(l => !['/pricing', '/contact'].includes(l.href)).map((link, i) => (
=======
        <div ref={mobilePanelRef} className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {PRIMARY_NAV_LINKS.map((link, i) => (
            <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
          ))}
          <div className="border-t border-slate-800 pt-2 mt-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Solutions</div>
            {SOLUTION_LINKS.map((link, i) => (
>>>>>>> Stashed changes
              <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
            ))}

            <div className="border-t border-slate-800 pt-2 mt-2">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Services</div>
              {FEATURED_AI_SERVICE_LINKS.filter(l => l.href !== '#').slice(0, 8).map((link, i) => (
                <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
              ))}
            </div>
            <div className="border-t border-slate-800 pt-2 mt-2">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Solutions</div>
              {SOLUTION_LINKS.filter(l => l.href !== '#').map((link, i) => (
                <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
              ))}
            </div>
            <div className="border-t border-slate-800 pt-2 mt-2">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1 px-3">Resources</div>
              {RESOURCE_LINKS.map((link, i) => (
                <NavLink key={i} link={link} onClick={() => setMobileOpen(false)} />
              ))}
            </div>
            <div className="pt-3 space-y-2">
              <Link href="/contact" className="block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
                Get Free Consultation
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">📧 kleber@ziontechgroup.com</a>
                <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">📱 +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}