'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

type NavLink = {
  name: string;
  href: string;
};

const primaryLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const aiServices = [
  { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
  { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
  { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
  { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
  { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
  { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
  { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
  { name: 'Zion Security Shield', href: '/zion-security-shield' },
  { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
  { name: 'Property Management AI', href: '/property-management-ai' },
  { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
  { name: 'Online Learning Platform', href: '/online-learning-platform' },
  { name: 'Medical Records Manager', href: '/medical-records-manager' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' }
];

const linkBaseClass =
  'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200';

const activeLinkClass =
  'bg-purple-500/25 text-white shadow-[0_0_0_1px_rgba(168,85,247,0.35)]';

const inactiveLinkClass = 'text-gray-300 hover:bg-purple-500/20 hover:text-white';

function isActivePath(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation({ className, children }: NavigationProps) {
  const pathname = usePathname();
  const currentPath = pathname ?? '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const aiRouteActive = aiServices.some((service) => isActivePath(currentPath, service.href));

  const getNavLinkClassName = (isActive: boolean) =>
    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown((current) => (current === dropdown ? null : dropdown));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-purple-500/25 bg-slate-900/95 shadow-lg shadow-purple-500/10 backdrop-blur-xl'
          : 'border-b border-purple-500/10 bg-slate-900/80 backdrop-blur-lg'
      } ${className || ''}`}
      role="navigation"
      aria-label="Primary"
      tabIndex={-1}
    >
      {children || (
        <>
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Link
                  href="/"
                className="flex items-center space-x-3 group transition-transform hover:scale-105"
                  onClick={closeMobileMenu}
              >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 blur-sm opacity-75 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-xl font-bold text-transparent">
                      Zion Tech Group
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-purple-200/70">
                      AI Delivery Studio
                    </span>
                  </div>
                </Link>
              </div>

              <div className="hidden items-center gap-1.5 md:flex">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={getNavLinkClassName(isActivePath(currentPath, link.href))}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai')}
                    className={`${linkBaseClass} ${
                      activeDropdown === 'ai' || aiRouteActive ? activeLinkClass : inactiveLinkClass
                    } flex items-center`}
                    aria-expanded={activeDropdown === 'ai'}
                    aria-haspopup="true"
                  >
                    AI Services
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === 'ai' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 'ai' && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-purple-500/30 bg-slate-800/95 shadow-2xl backdrop-blur-xl">
                      <div className="border-b border-slate-700/70 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                          Featured AI Services
                        </p>
                      </div>
                      <div className="max-h-[22rem] overflow-y-auto py-2">
                        {aiServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                              isActivePath(currentPath, service.href)
                                ? 'bg-purple-500/20 text-white'
                                : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
                >
                  Start Project
                </Link>
              </div>

              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="rounded-lg p-2 text-gray-300 transition-all hover:bg-purple-500/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="md:hidden animate-fade-in border-t border-purple-500/20">
                <div className="space-y-1 px-2 pb-4 pt-4">
                  {primaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${getNavLinkClassName(isActivePath(currentPath, link.href))} block px-4 py-3 text-base`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown('ai-mobile')}
                      className={`${linkBaseClass} ${
                        activeDropdown === 'ai-mobile' || aiRouteActive
                          ? activeLinkClass
                          : inactiveLinkClass
                      } flex w-full items-center justify-between px-4 py-3 text-base`}
                      aria-expanded={activeDropdown === 'ai-mobile'}
                    >
                      <span>AI Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === 'ai-mobile' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === 'ai-mobile' && (
                      <div className="mt-1 space-y-1 border-l-2 border-purple-500/30 pl-4">
                        {aiServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block rounded-lg px-4 py-2.5 text-sm transition-all ${
                              isActivePath(currentPath, service.href)
                                ? 'bg-purple-500/20 text-white'
                                : 'text-gray-400 hover:bg-purple-500/20 hover:text-white'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-3 block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-center text-base font-semibold text-white transition hover:from-purple-500 hover:to-pink-500"
                    onClick={closeMobileMenu}
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}