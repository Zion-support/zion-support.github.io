import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Users, Settings, HelpCircle, Mail } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Help', href: '/help', icon: HelpCircle },
  ];

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
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <p>Zion Tech Group</p>
                <p>Technology Solutions</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;