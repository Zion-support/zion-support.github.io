<<<<<<< HEAD
{/* Backdrop */}; <motion.div; initial = {{ opacity: 0 }}; animate = {{ opacity: 1 }}; exit = {{ opacity: 0 }}; className = "fixed inset-0 bg-black bg-opacity-50 z-40"; onClick = {onClose}; />; {/* Sidebar */}; {/* Header */}; <div className = "flex items-center justify-between mb-8">; <div className = "flex items-center space-x-2">; <div className = "bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">; <Building2 className = "w-8 h-8 text-white" />; </div>; <span className = "text-xl font-bold text-gray-900">Zion Tech Group</span>; </div>; <button; onClick = {onClose}; {/* Navigation */}; <nav className = "space-y-4">; {Object.entries(navigation).map(([title, links]) = > (; <div key = {title}>; <button; onClick = {() = > handleDropdownToggle(title)}; key = {link.name}; href = {link.href}; className = "block text-gray-600 hover:text-blue-600 transition-colors py-1"; onClick = {onClose}>; {link.name}; </Link>))}; {/* Quick Links */}; <div className = "mt-8 pt-8 border-t border-gray-200">; <h3 className = "text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>; <div className = "space-y-2">; {quickLinks.map((link) = > (; <Link; key = {link.name}; href = {link.href}; className = "block text-gray-600 hover:text-blue-600 transition-colors py-1"; onClick = {onClose}>; {link.name}; </Link>))}; </div>; </div>; {/* Contact Info */};
;
=======
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Building2, Home, Briefcase, Users, Mail, FileText, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Blog', href: '/blog', icon: FileText },
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
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
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
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                        <span className="text-gray-900 group-hover:text-blue-600">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>+1 (302) 464-0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>24/7 Support Available</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
