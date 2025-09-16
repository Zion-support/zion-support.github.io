<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>kleber@ziontechgroup.com</span>
            </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
=======

ursor/automate-test-improve-and-merge-code-646c;
'use client';'use client';import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin  } from 'lucide-react';
const Header = () => {const [isMenuOpen, setIsMenuOpen] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)const navigation = [;
    {name: 'Home',href: '/';
    },{name: 'Services',href: '/services',dropdown: [;
        { name: 'AI Services', href: '/ai-services' },{ name: 'IT Services', href: '/it-services' },{ name: 'Micro SaaS', href: '/micro-saas' },{ name: 'Cloud Solutions', href: '/solutions/cloud-migration' },{ name: 'Cybersecurity', href: '/services/cybersecurity' },{ name: 'Data Analytics', href: '/services/data-analytics' }
      ];
    },{name: 'Solutions',href: '/solutions',dropdown: [;
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },{ name: 'Healthcare', href: '/solutions/healthcare' },{ name: 'Finance', href: '/solutions/finance' },{ name: 'Government', href: '/solutions/government' },{ name: 'Retail', href: '/solutions/retail' },{ name: 'Education', href: '/solutions/education' }
      ];
    },{name: 'Industries',href: '/industries',dropdown: [;
        { name: 'Financial Services', href: '/industries/financial' },{ name: 'Healthcare', href: '/industries/healthcare' },{ name: 'Manufacturing', href: '/industries/manufacturing' },{ name: 'Retail', href: '/industries/retail' },{ name: 'Government', href: '/industries/government' }
      ];
    },{name: 'Company',href: '/about',dropdown: [;
        { name: 'About Us', href: '/about' },{ name: 'Our Team', href: '/team' },{ name: 'Careers', href: '/careers' },{ name: 'Partners', href: '/partners' },{ name: 'Case Studies', href: '/case-studies' }
      ];
    },{name: 'Resources',href: '/resources',dropdown: [;
        { name: 'Blog', href: '/blog' },{ name: 'White Papers', href: '/white-papers' },{ name: 'Webinars', href: '/webinars' },{ name: 'Tutorials', href: '/tutorials' },{ name: 'API Documentation', href: '/api-docs' }
      ];
    },{name: 'Contact',href: '/contact';
    }
  ];const toggleMenu = () => setIsMenuOpen(!isMenuOpen)const toggleDropdown = (name: string) => {setActiveDropdown(activeDropdown === name ? null : name)}return (<header className="bg-white shadow-lg sticky top-0 z-50">;
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4" />;
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">;
        <div className="flex justify-between items-center">;
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <div>;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>;
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>;
            </div>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            {navigation.map((item) => (<div key={item.name} className="relative group">;
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium";
                >;
                  <Link href={item.href}>{item.name}</Link>;
                  {item.dropdown && (<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';
                    }`} />;
                  )}
                </button>;
                {/* Dropdown Menu */}
                {item.dropdown && (<AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50";
                      >;
                        {item.dropdown.map((subItem) => (<Link;
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200";
                            onClick={() => setActiveDropdown(null)}
                          >;
                            {subItem.name}
                          </Link>;
                        ))}
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          </div>;
          {/* Mobile Menu Button */}
          <button;
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200";
          >;
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isMenuOpen && (<motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-gray-200 pt-4";
            >;
              {navigation.map((item) => (<div key={item.name} className="mb-2">;
                  <div className="flex items-center justify-between">;
                    <Link;
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2";
                      onClick={() => setIsMenuOpen(false)}
                    >;
                      {item.name}
                    </Link>;
                    {item.dropdown && (<button;
                        onClick={() => toggleDropdown(item.name)}
                        className="p-1";
                      >;
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';
                        }`} />;
                      </button>;
                    )}
                  </div>;
                  {item.dropdown && activeDropdown === item.name && (<div className="ml-4 mt-2 space-y-1">;
                      {item.dropdown.map((subItem) => (<Link;
>>>>>>> origin/merge-pr-12271
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
=======
}
>>>>>>> origin/merge-pr-12271
