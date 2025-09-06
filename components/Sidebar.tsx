<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Home, Settings, User, LogOut } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin,
  Building2,
  User,
  LogOut,
  Search
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Consulting', href: '/consulting' }
  ],
  'Solutions': [
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Startup', href: '/startup' },
    { name: 'Industry', href: '/industries' }
  ],
  'Company': [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]
};
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

<<<<<<< HEAD
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={
          'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ' +
          (isOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
          {/* Backdrop */},;
          <motion.div,;
            initial={{ opacit: y: 0 }},;
            animate={{ opacit: y: 1 }},;
            exit={{ opacit: y: 0 }},;
            className="fixed inset-0 bg-blackbg-opacity-50z-40",;
            onClick={onClose},;
          />,;
          {/* Sidebar */},;
              {/* Header */},;
              <div className="flex items-centerjustify-betweenmb-8">,;
                <div className="flexitems-centerspace-x-2">,;
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600p-2rounded-lg">,;
                    <Building2 className="w-8h-8text-white" />,;
                  </div>,;
                  <span className="text-xlfont-boldtext-gray-900">Zion Tech Group</span>,;
                </div>,;
                <button,;
                  onClick={onClose},;
              {/* Navigation */},;
              <nav className="space-y-4">,;
                {Object.entries(navigation).map(([title, links]) => (,;
                  <div key={title}>,;
                    <button,;
                      onClick={() => handleDropdownToggle(title)},;
                            key={link.name},;
                            href={link.href},;
                            className="block text-gray-600: hover:text-blue-600transition-colorspy-1",;
                            onClick={onClose},;
                          >,;
                            {link.name},;
                          </Link>))},;
              {/* Quick Links */},;
              <div className="mt-8 pt-8border-tborder-gray-200">,;
                <h3 className="text-lg font-semiboldtext-gray-900mb-4">Quick Links</h3>,;
                <div className="space-y-2">,;
                  {quickLinks.map((link) => (,;
                    <Link,;
                      key={link.name},;
                      href={link.href},;
                      className="block text-gray-600: hover:text-blue-600transition-colorspy-1",;
                      onClick={onClose},;
                    >,;
                      {link.name},;
                    </Link>))},;
                </div>,;
              </div>,;
              {/* Contact Info */},;
=======
const navigationItems = [
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
      { label: 'Micro SaaS', href: '/micro-saas' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: Users
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={onClose}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                      {item.children && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpanded(item.label);
                          }}
                          className="ml-auto"
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${
                              expandedItems.includes(item.label) ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </Link>
                    
                    {item.children && expandedItems.includes(item.label) && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
