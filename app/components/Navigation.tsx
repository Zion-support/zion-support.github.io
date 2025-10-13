<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Mic } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

=======


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export default function Navigation({ className = '', children }: NavigationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
const Navigation: React.FC<NavigationProps> = () => {
=======

export default function Navigation({ onSidebarToggle }: NavigationProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
<<<<<<< HEAD
    { name: 'Home', href: '/' },
    { 
      name: 'AI Services', 
      href: '/ai-services',
      dropdown: [
        { name: 'AI Analytics', href: '/ai-services/analytics' },
        { name: 'Content Generation', href: '/ai-services/content-generation' },
        { name: 'Customer Experience', href: '/ai-services/customer-experience' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/it-services',
      dropdown: [
        { name: 'Cloud Migration', href: '/it-services/cloud-migration' },
        { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' }
=======
    {,
    name: 'Home',
        path: '/',
        icon: <Globe className="w-4 h-4" />
    },
    {,
    name: 'About',
        path: '/about',
        icon: <Brain className="w-4 h-4" />
    },
    {,
    name: 'Services',
        path: '/services',
        icon: <Shield className="w-4 h-4" />
    },
    {,
    name: 'AI Services',
        path: '/ai-services',
        icon: <Brain className="w-4 h-4" />
    },
    {,
    name: 'Micro SAAS',
        path: '/micro-saas',
        icon: <Zap className="w-4 h-4" />
    },
    {,
    name: '5G Solutions',
        path: '/5g-solutions',
        icon: <Zap className="w-4 h-4" />
    },
    {,
    name: 'Blog',
        path: '/blog',
        icon: <Globe className="w-4 h-4" />
    },
    {,
    name: 'Contact',
        path: '/contact',
        icon: <Globe className="w-4 h-4" />
    }
  ];

  const serviceDropdownItems = [
    {,
    title: 'AI Solutions',
        items: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    },
    {,
    title: '5G Solutions',
        items: [
        { name: '5G Network Design', path: '/5g-network-design' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      ]
    },
    { 
      name: 'Micro SAAS', 
      href: '/micro-saas',
      dropdown: [
        { name: 'AI Content Writer', href: '/micro-saas/ai-content-writer' },
        { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
=======
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link>
  to={item.path}>
  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${>
  isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>

                {/* Dropdown for Services */}
                {item.name === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-4">
                      {serviceDropdownItems.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-4 last:mb-0">
                          <h3 className="text-cyan-400 font-semibold text-sm mb-2">{category.title}</h3>
                          <ul className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <li key={serviceIndex}>
                                <Link>
  to={service.path}>
  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-md text-sm transition-colors duration-200"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
=======
          <div className="md:hidden">
            <button>
  onClick={toggleMenu}>
  className="text-gray-300 hover:text-cyan-400 transition-colors p-2">
  aria-label="Toggle menu"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-sm"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
=======
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link>
  to={item.path}>
  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${>
  isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}>
  onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>

                  {/* Mobile dropdown for Services */}
                  {item.name === 'Services' && (
                    <div className="ml-6 mt-2 space-y-1">
                      {serviceDropdownItems.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-3">
                          <h4 className="text-cyan-400 font-semibold text-sm mb-1">{category.title}</h4>
                          <ul className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <li key={serviceIndex}>
                                <Link>
  to={service.path}>
  className="block px-3 py-1 text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200">
  onClick={() => setIsOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
};

export default Navigation;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
}

export default function Navigation({ className = '', children, ...props }: NavigationProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain,
  Shield, 
  Zap, 
  Globe, 
  Star, 
  Users, 
  Sparkles, 
  Mail, 
  Monitor,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
