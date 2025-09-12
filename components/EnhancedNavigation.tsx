import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Star, Zap, BookOpen, 
  FileText, Award, TrendingUp, Download
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      label: 'Services',
      href: '/services',
      icon: '🚀',
      dropdown: [
        { label: 'AI Services', href: '/services/ai-services', isNew: true },
        { label: 'Micro SaaS', href: '/services/micro-saas' },
        { label: 'Edge Computing', href: '/services/edge-computing' },
        { label: 'IT Services', href: '/services/it-services' }
      ]
    },
    {
      label: 'Content',
      href: '/mega-content-showcase',
      icon: '📚',
      isNew: true,
      badge: '25+ New',
      dropdown: [
        { label: 'All Content', href: '/mega-content-showcase', isNew: true },
        { label: 'Blog Articles', href: '/blog', isNew: true },
        { label: 'Case Studies', href: '/case-studies', isNew: true },
        { label: 'Resources', href: '/resources', isNew: true },
        { label: 'Tools', href: '/tools' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: '👥'
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: '📞'
    }
  ];

  const featuredContent = [
    {
      title: "AI Advanced Automation 2025",
      description: "Complete enterprise implementation guide",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      isNew: true
    },
    {
      title: "AI Cybersecurity Threats 2025",
      description: "Complete defense strategy guide",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      isNew: true
    },
    {
      title: "$200M Manufacturing Success",
      description: "Autonomous AI systems case study",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      isNew: true
    },
    {
      title: "AI Implementation Master Guide",
      description: "200+ page comprehensive resource",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      isNew: true
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                      NEW
                    </span>
                  )}
                  {item.badge && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                      {item.badge}
                    </span>
                  )}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <span>{dropdownItem.label}</span>
                              {dropdownItem.isNew && (
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                  NEW
                                </span>
                              )}
                            </div>
                            {dropdownItem.isNew && (
                              <Star className="w-4 h-4 text-yellow-500" />
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/mega-content-showcase"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <span>🔥 New Content</span>
                <TrendingUp className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                        {item.isNew && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.badge && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.dropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.isNew && (
                              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/mega-content-showcase"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>🔥 New Content</span>
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Featured Content Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-900">
                🔥 New Content Drop: 25+ AI Resources Just Released!
              </span>
            </div>
            <Link
              href="/mega-content-showcase"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
            >
              <span>Explore Now</span>
              <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;