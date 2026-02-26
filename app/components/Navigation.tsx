'use client';
import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const aiServices = [
  { name: 'AI Business Advisor', href: '/ai-business-advisor' },
  { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
  { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
  { name: 'Property Management AI', href: '/property-management-ai' },
  { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
  { name: 'Online Learning Platform', href: '/online-learning-platform' },
  { name: 'Medical Records Manager', href: '/medical-records-manager' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' }
];

export default function Navigation({ className, children }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/10'
      } ${className || ''}`} 
      role="navigation"
    >
      {children || (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center space-x-3 group transition-transform hover:scale-105"
                onClick={closeMobileMenu}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200"
                  aria-expanded={activeDropdown === 'ai'}
                  aria-haspopup="true"
                >
                  AI Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-purple-500/30 z-50 overflow-hidden">
                    <div className="py-2">
                      {aiServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-150"
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
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-purple-500/20 animate-fade-in">
              <div className="px-2 pt-4 pb-4 space-y-1">
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai-mobile')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                    aria-expanded={activeDropdown === 'ai-mobile'}
                  >
                    <span>AI Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'ai-mobile' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'ai-mobile' && (
                    <div className="mt-1 pl-4 space-y-1 border-l-2 border-purple-500/30">
                      {aiServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                          onClick={closeMobileMenu}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}