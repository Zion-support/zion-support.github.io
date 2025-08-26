'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Zap, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Search
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

const quickActions = [
  {
    name: 'Get Quote',
    href: '/request-quote/',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Contact Us',
    href: '/contact/',
    color: 'from-blue-500 to-cyan-600'
  }
];

const sidebarItems: SidebarItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Zap className="w-4 h-4" />
  },
  {
    name: 'Services',
    href: '/services/',
    icon: <Sparkles className="w-4 h-4" />,
    children: [
      { name: 'AI Solutions', href: '/services/ai-solutions/' },
      { name: '5G Enterprise', href: '/services/5g-enterprise/' },
      { name: 'Quantum Tech', href: '/services/quantum-technology/' },
      { name: 'Legal Tech', href: '/services/ai-legal-tech/' },
      { name: 'Healthcare Analytics', href: '/services/ai-healthcare-analytics/' },
      { name: 'HR Recruitment', href: '/services/ai-hr-recruitment/' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing/',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    name: 'Blog',
    href: '/blog/',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    name: 'Contact',
    href: '/contact/',
    icon: <Phone className="w-4 h-4" />
  }
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (sectionName: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionName)) {
      newExpanded.delete(sectionName);
    } else {
      newExpanded.add(sectionName);
    }
    setExpandedSections(newExpanded);
  };

  const filteredItems = sidebarItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => child.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-3 bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isOpen && (
        <aside className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/30 z-50 overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-cyan-500/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
                </div>
                <div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-xs text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-cyan-500/30">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Quick Actions</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Navigation</h3>
            <nav className="space-y-2">
              {filteredItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSections.has(item.name) ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      {expandedSections.has(item.name) && (
                        <div className="ml-6 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="p-6 border-t border-cyan-500/30">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}