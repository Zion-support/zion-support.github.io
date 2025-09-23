'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavigationItem[];
  featured?: boolean;
  metrics?: {
    count?: number;
    roi?: string;
  };
}

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: '🏠',
      description: 'AI Innovation Hub'
    },
    {
      id: 'content',
      label: 'Content Hub',
      href: '/content',
      icon: '📚',
      description: 'Revolutionary AI Content',
      featured: true,
      children: [
        {
          id: 'blog',
          label: 'Blog Posts',
          href: '/blog',
          description: 'Latest AI insights and breakthroughs',
          metrics: { count: 25, roi: '5,000%' }
        },
        {
          id: 'case-studies',
          label: 'Case Studies',
          href: '/case-studies',
          description: 'Real-world success stories',
          metrics: { count: 15, roi: '15,000%' }
        },
        {
          id: 'resources',
          label: 'Resources',
          href: '/resources',
          description: 'Implementation guides and tools',
          metrics: { count: 20, roi: '25,000%' }
        }
      ]
    },
    {
      id: 'services',
      label: 'AI Services',
      href: '/services',
      icon: '⚙️',
      description: 'Enterprise AI Solutions',
      children: [
        {
          id: 'business-intelligence',
          label: 'Business Intelligence',
          href: '/services/business-intelligence',
          description: '15,000% ROI BI Solutions',
          metrics: { roi: '15,000%' }
        },
        {
          id: 'automation',
          label: 'Process Automation',
          href: '/services/automation',
          description: '5,000% ROI Automation',
          metrics: { roi: '5,000%' }
        },
        {
          id: 'quantum-ai',
          label: 'Quantum AI',
          href: '/services/quantum-ai',
          description: '25,000% ROI Quantum Solutions',
          metrics: { roi: '25,000%' }
        }
      ]
    },
    {
      id: 'calculator',
      label: 'ROI Calculator',
      href: '/calculator',
      icon: '🧮',
      description: 'Calculate Your AI ROI',
      featured: true
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      icon: 'ℹ️',
      description: 'Our Mission & Vision'
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.navigation-container')) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 navigation-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Innovation Hub
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              2025
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href) || activeDropdown === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.featured && (
                        <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          New
                        </span>
                      )}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-900">{item.label}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              onClick={handleLinkClick}
                              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                            >
                              <div>
                                <div className="font-medium text-gray-900">{child.label}</div>
                                <div className="text-sm text-gray-600">{child.description}</div>
                              </div>
                              {child.metrics && (
                                <div className="text-right">
                                  {child.metrics.count && (
                                    <div className="text-xs text-gray-500">{child.metrics.count} items</div>
                                  )}
                                  {child.metrics.roi && (
                                    <div className="text-xs font-medium text-green-600">{child.metrics.roi} ROI</div>
                                  )}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.featured && (
                      <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        New
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                          {item.featured && (
                            <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.id && (
                        <div className="ml-6 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.featured && (
                        <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          New
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium text-center rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;