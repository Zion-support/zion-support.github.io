'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = {
  'Main': [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { name: 'Analytics', href: '/analytics', icon: '📊' },
    { name: 'Projects', href: '/projects', icon: '📁' },
  ],
  'Services': [
    { name: 'AI Solutions', href: '/ai-services', icon: '🤖' },
    { name: 'Cloud Services', href: '/cloud-services', icon: '☁️' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: '🔒' },
    { name: 'Custom Development', href: '/development', icon: '💻' },
  ],
  'Support': [
    { name: 'Documentation', href: '/docs', icon: '📚' },
    { name: 'Help Center', href: '/help', icon: '❓' },
    { name: 'Contact Support', href: '/support', icon: '💬' },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const handleDropdownToggle = (title: string) => {
    const newOpenDropdowns = new Set(openDropdowns);
    if (newOpenDropdowns.has(title)) {
      newOpenDropdowns.delete(title);
    } else {
      newOpenDropdowns.add(title);
    }
    setOpenDropdowns(newOpenDropdowns);
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
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{title}</span>
                      {openDropdowns.has(title) ? (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openDropdowns.has(title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 space-y-2 py-2">
                            {links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                                onClick={onClose}
                              >
                                <span className="text-lg">{link.icon}</span>
                                <span>{link.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  <p>© 2024 Zion Tech Group</p>
                  <p className="mt-1">All rights reserved</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;