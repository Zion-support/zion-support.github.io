import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';

const servicesDropdown = [
  {
    "icon": Brain,
    "title": 'AI & Machine Learning',
    "description": 'Intelligent solutions for business automation',
    "href": '/ai-services',
  },
  {
    "icon": Shield,
    "title": 'Cybersecurity',
    "description": 'Advanced security and threat protection',
    "href": '/it-services',
  },
  {
    "icon": Cloud,
    "title": 'Cloud Infrastructure',
    "description": 'Scalable cloud solutions and migration',
    "href": '/it-services',
  },
  {
    "icon": Code,
    "title": 'Custom Software Development',
    "description": 'Tailored applications to meet your specific business needs',
    "href": '/services',
  },
  {
    "icon": Building,
    "title": 'Micro SaaS Solutions',
    "description": 'Scalable software as a service solutions',
    "href": '/micro-saas',
  },
  {
    "icon": Zap,
    "title": 'Quantum Computing',
    "description": 'Next-generation computational power',
    "href": '/services',
  }
];

const navigation = [
  { "name": 'Home', "href": '/' },
  { "name": 'About', "href": '/about' },
  { "name": 'Services', "href": '/services', "hasDropdown": true, "dropdownItems": servicesDropdown },
  { "name": 'Solutions', "href": '/solutions' },
  { "name": 'Pricing', "href": '/pricing' },
  { "name": 'Blog', "href": '/blog' },
  { "name": 'Contact', "href": '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [router.asPath]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">Zion Tech Group</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <button
                  className="flex items-center text-lg font-medium hover:text-purple-400 transition-colors"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.name} <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link href={item.href} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  {item.name}
                </Link>
              )}
              {item.hasDropdown && isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-80 bg-slate-800 rounded-lg shadow-xl p-4 grid grid-cols-1 gap-4"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.dropdownItems?.map((dropdownItem) => {
                    const IconComponent = dropdownItem.icon;
                    return (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-blue-400 transition-colors" />
                        <div>
                          <h4 className="text-white font-semibold">{dropdownItem.title}</h4>
                          <p className="text-gray-400 text-sm">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-slate-900 shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="flex items-center w-full text-left text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                          {item.name} <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {item.dropdownItems?.map((dropdownItem) => {
                                const IconComponent = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.title}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors text-gray-300 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <IconComponent className="w-5 h-5 text-purple-300" />
                                    <span>{dropdownItem.title}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a href="tel:+13024640950" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" /> +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" /> kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-sm">364 E Main St STE 1008<br /> Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  ShoppingCart,
  Bell,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';

const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Services", href: "/ai-services", description: "Cutting-edge AI solutions" },
      { name: "IT Services", href: "/it-services", description: "Complete IT infrastructure" },
      { name: "Micro SaaS", href: "/micro-saas", description: "Scalable software solutions" },
      { name: "Cybersecurity", href: "/cybersecurity", description: "Enterprise security solutions" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" }
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-xs text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, solutions..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
