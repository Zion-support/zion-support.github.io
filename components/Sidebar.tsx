import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Briefcase,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  User,
  Search
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI Services', href: '/ai-services' },
      { label: 'IT Services', href: '/it-services' },
      { label: 'Micro SaaS', href: '/micro-saas' },
      { label: 'API Services', href: '/api' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: Users
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
    icon: Briefcase
  },
  {
    label: 'Careers',
    href: '/careers',
    icon: Users
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: HelpCircle
  }
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-4">
                <div className="px-4 space-y-2">
                  {navigation.map((item) => {
                    const IconComponent = item.icon;
                    const isExpanded = expandedItems.includes(item.label);
                    
                    return (
                      <div key={item.label}>
                        {item.children ? (
                          <div>
                            <button
                              onClick={() => toggleExpanded(item.label)}
                              className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <div className="flex items-center">
                                <IconComponent className="h-5 w-5 mr-3" />
                                {item.label}
                              </div>
                              {isExpanded ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </button>
                            
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-6 mt-2 space-y-1">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.label}
                                        href={child.href}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                        onClick={onClose}
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            <IconComponent className="h-5 w-5 mr-3" />
                            {item.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </nav>

              {/* User Section */}
              <div className="border-t p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Guest User</p>
                    <p className="text-xs text-gray-500">Sign in to access more features</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Link
                    href="/login"
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={onClose}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;