import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Search, User, Bell, Settings, HelpCircle, MessageCircle } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  children?: NavigationItem[];
}

export const MobileNavigation = memo<MobileNavigationProps>(({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems: NavigationItem[] = [
    {
      name: 'Services',
      href: '/services-overview',
      icon: Settings,
      description: 'Explore our comprehensive service portfolio',
      children: [
        { name: 'AI & Analytics', href: '/ai-services', icon: Settings },
        { name: 'IT Services', href: '/it-services', icon: Settings },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Settings },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Settings },
        { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Settings },
      ]
    },
    {
      name: 'Solutions',
      href: '/ai-solutions',
      icon: Settings,
      description: 'Industry-specific AI solutions',
      children: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Settings },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Settings },
        { name: 'Financial Services', href: '/services/ai-financial-trading-platform', icon: Settings },
        { name: 'Manufacturing', href: '/services/digital-twin', icon: Settings },
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Settings,
      description: 'Learn about Zion Tech Group',
      children: [
        { name: 'About Us', href: '/about', icon: Settings },
        { name: 'Team', href: '/team', icon: Settings },
        { name: 'Careers', href: '/careers', icon: Settings },
        { name: 'Press', href: '/press', icon: Settings },
      ]
    },
    {
      name: 'Support',
      href: '/help',
      icon: HelpCircle,
      description: 'Get help and support',
      children: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Documentation', href: '/docs', icon: HelpCircle },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle },
        { name: 'Status', href: '/status', icon: HelpCircle },
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Get Demo', href: '/demo', icon: Settings, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Contact Sales', href: '/contact', icon: MessageCircle, color: 'from-zion-blue to-zion-purple' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      onClose();
    }
  };

  const toggleSection = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-zion-slate-light border-l border-zion-cyan/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-zion-slate-light/95 backdrop-blur-sm border-b border-zion-cyan/20 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zion-cyan">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-zion-cyan" />
                </button>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-text-secondary" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-zion-text-primary placeholder-zion-text-secondary focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/40"
                  />
                </div>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-zion-cyan/20">
              <h3 className="text-sm font-medium text-zion-text-secondary mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    onClick={onClose}
                    className={`block p-3 rounded-lg bg-gradient-to-r ${action.color} text-white font-medium text-sm transition-transform hover:scale-105`}
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="w-5 h-5" />
                      <span>{action.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-zion-cyan/10 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-zion-cyan" />
                        <div>
                          <div className="font-medium text-zion-text-primary">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-zion-text-secondary">{item.description}</div>
                          )}
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-zion-cyan transition-transform ${
                          activeSection === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {activeSection === item.name && item.children && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-8 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={onClose}
                                className="block p-2 text-sm text-zion-text-secondary hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/20 mt-auto">
              <div className="flex items-center justify-between text-sm text-zion-text-secondary">
                <span>© 2024 Zion Tech Group</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors">
                    <User className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors">
                    <Bell className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

MobileNavigation.displayName = 'MobileNavigation';