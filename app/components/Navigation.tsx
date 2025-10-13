<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Users, Award, BookOpen, HelpCircle, Shield, DollarSign } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3, 
  Users, 
  Zap,
  Monitor,
  Package,
  Network,
  Smartphone,
  Database,
  Globe,
  Cpu
} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c

const navigationItems = [
  {
    name: 'Home',
    path: '/',
<<<<<<< HEAD
    icon: <Globe className="w-4 h-4" />,
=======
    hasDropdown: false
  },
  {
    name: 'AI Solutions',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'AI Services',
        icon: <Brain className="w-4 h-4" />,
        items: [
          { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
          { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
          { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
          { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> }
        ]
      }
    ]
  },
  {
    name: 'IT Services',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'IT Services',
        icon: <Monitor className="w-4 h-4" />,
        items: [
          { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
          { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
          { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
          { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> }
        ]
      }
    ]
  },
  {
    name: '5G Solutions',
    hasDropdown: true,
    dropdownItems: [
      {
        name: '5G Services',
        icon: <Network className="w-4 h-4" />,
        items: [
          { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" /> },
          { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
          { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
        ]
      }
    ]
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
  },
  {
    name: 'Blog',
    path: '/blog',
<<<<<<< HEAD
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Tutorials',
    path: '/tutorials',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Demo',
    path: '/demo',
    icon: <Award className="w-4 h-4" />,
  },
  {
    name: 'Support',
    path: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    name: 'Privacy',
    path: '/privacy',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Terms',
    path: '/terms',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Pricing',
    path: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
  },
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4">
            <Link href="/" className="block py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
          </div>
        )}
      </div>
    </nav>
  );
=======
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
    hasDropdown: false
  },
  {
    name: 'Contact',
    path: '/contact',
    hasDropdown: false
  }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <div key={dropdownIndex} className="px-4 py-2">
                              <div className="flex items-center space-x-2 text-cyan-400 font-medium mb-2">
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </div>
                              <div className="ml-6 space-y-1">
                                {dropdownItem.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 px-2 py-1 rounded text-sm transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.icon}
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <div key={dropdownIndex}>
                              <div className="flex items-center space-x-2 text-cyan-400 font-medium px-3 py-1">
                                {dropdownItem.icon}
                                <span className="text-sm">{dropdownItem.name}</span>
                              </div>
                              <div className="ml-4 space-y-1">
                                {dropdownItem.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 px-3 py-1 rounded text-sm transition-colors duration-200"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    {subItem.icon}
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
          </div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
