<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1>Header Component</h1>
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'All Services', href: '/services' },
      ]
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
=======
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
<<<<<<< HEAD
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
=======
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            ))}
          </nav>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

<<<<<<< HEAD
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import { Menu, X } from 'lucide-react';
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </button>
=======
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isMenuOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              <Button variant="primary" size="small" className="w-full">
                Get Started
              </Button>
            </nav>
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
=======
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
<<<<<<< HEAD
                </Button>
              </div>
            </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
<<<<<<< HEAD
            </nav>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </div>
        )}
=======
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
      </div>
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </header>
  );
}
        { nam: e: 'Data Analytics', hre: f: '/services/data-analytics' }
      ];
    },;
    {,;
      nam: e: 'Solutions',;
      hre: f: '/solutions',;
      dropdow: n: [,;
        { nam: e: 'Enterprise Solutions', hre: f: '/solutions/enterprise' },;
        { nam: e: 'Healthcare', hre: f: '/solutions/healthcare' },;
        { nam: e: 'Finance', hre: f: '/solutions/finance' },;
        { nam: e: 'Government', hre: f: '/solutions/government' },;
        { nam: e: 'Retail', hre: f: '/solutions/retail' },;
        { nam: e: 'Education', hre: f: '/solutions/education' }
      ];
    },;
    {,;
      nam: e: 'Industries',;
      hre: f: '/industries',;
      dropdow: n: [,;
        { nam: e: 'Financial Services', hre: f: '/industries/financial' },;
        { nam: e: 'Healthcare', hre: f: '/industries/healthcare' },;
        { nam: e: 'Manufacturing', hre: f: '/industries/manufacturing' },;
        { nam: e: 'Retail', hre: f: '/industries/retail' },;
        { nam: e: 'Government', hre: f: '/industries/government' }
      ];
    },;
    {,;
      nam: e: 'Company',;
      hre: f: '/about',;
      dropdow: n: [,;
        { nam: e: 'About Us', hre: f: '/about' },;
        { nam: e: 'Our Team', hre: f: '/team' },;
        { nam: e: 'Careers', hre: f: '/careers' },;
        { nam: e: 'Partners', hre: f: '/partners' },;
        { nam: e: 'Case Studies', hre: f: '/case-studies' }
      ];
    },;
    {,;
      nam: e: 'Resources',;
      hre: f: '/resources',;
      dropdow: n: [,;
        { nam: e: 'Blog', hre: f: '/blog' },;
        { nam: e: 'White Papers', hre: f: '/white-papers' },;
        { nam: e: 'Webinars', hre: f: '/webinars' },;
        { nam: e: 'Tutorials', hre: f: '/tutorials' },;
        { nam: e: 'API Documentation', hre: f: '/api-docs' }
      ];
    },;
    {,;
      nam: e: 'Contact',;
      hre: f: '/contact';
    }
  ],
,
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen),
  const toggleDropdown = (nam: e: string) => {,
    setActiveDropdown(activeDropdown === name ? nul: l: name)
  },
,
  return (,
    <header className="bg-white shadow-lg sticky top-0 z-50">,
      {/* Top Bar */},
      <div className="bg-blue-900 text-white py-2">,
        <div className="container mx-auto px-4">,
          <div className="flex flex-col: md: flex-row justify-between items-center text-sm">,
            <div className="flex items-center space-x-6 mb-2: md: mb-0">,
              <div className="flex items-center space-x-2">,
                <Phone className="w-4 h-4" />,
                <span>+1 302 464 0950</span>,
              </div>,
              <div className="flex items-center space-x-2">,
                <Mail className="w-4 h-4" />,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
            </div>,
            <div className="flex items-center space-x-2">,
              <MapPin className="w-4 h-4" />,
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */},
      <nav className="container mx-auto px-4 py-4">,
        <div className="flex justify-between items-center">,
          {/* Logo */},
          <Link href="/" className="flex items-center space-x-2">,
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <span className="text-white font-bold text-xl">Z</span>,
            </div>,
            <div>,
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>,
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>,
            </div>,
          </Link>,
          {/* Desktop Navigation */},
          <div className="hidden: lg: flex items-center space-x-8">,
            {navigation.map((item) => (,
              <div key={item.name} className="relative group">,
                <button,
                  onClick={() => item.dropdown && toggleDropdown(item.name)},
                  className="flex items-center space-x-1 text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium",
                >,
                  <Link href={item.href}>{item.name}</Link>,
                  {item.dropdown && (,
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />)},
                </button>,
                {/* Dropdown Menu */},
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                        initial={{ opacit: y: 0, y: 10 }},
                        animate={{ opacit: y: 1, y: 0 }},
                        exit={{ opacit: y: 0, y: 10 }},
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
                      >,
                        {item.dropdown.map((subItem) => (,
                          <Link,
                            key={subItem.name},
                            href={subItem.href},
                            className="block px-4 py-2 text-gray-700: hover: bg-blue-50: hover:text-blue-600 transition-colors duration-200",
                            onClick={() => setActiveDropdown(null)},
                          >,
                            {subItem.name},
                          </Link>,
                        ))},
                      </motion.div>,
                    )},
                  </AnimatePresence>,
                )},
              </div>,
            ))},
          </div>,
          {/* Mobile Menu Button */},
          <button,
            onClick={toggleMenu},
            className="l: g: hidden p-2 text-gray-700: hover:text-blue-600 transition-colors duration-200",
          >,
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />},
          </button>,
        </div>,
        {/* Mobile Navigation */},
        <AnimatePresence>,
          {isMenuOpen && (,
            <motion.div,
              initial={{ opacit: y: 0, heigh: t: 0 }},
              animate={{ opacit: y: 1, heigh: t: 'auto' }},
              exit={{ opacit: y: 0, heigh: t: 0 }},
              className="l: g: hidden mt-4 border-t border-gray-200 pt-4",
            >,
              {navigation.map((item) => (,
                <div key={item.name} className="mb-2">,
                  <div className="flex items-center justify-between">,
                    <Link,
                      href={item.href},
                      className="text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium py-2",
                      onClick={() => setIsMenuOpen(false)},
                    >,
                      {item.name},
                    </Link>,
                    {item.dropdown && (,
                      <button,
                        onClick={() => toggleDropdown(item.name)},
                        className="p-1",
                      >,
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />,
                      </button>,
                    )},
                  </div>,
                  {item.dropdown && activeDropdown === item.name && (,
                    <div className="ml-4 mt-2 space-y-1">,
                      {item.dropdown.map((subItem) => (,
                        <Link,
                          key={subItem.name},
                          href={subItem.href},
                          className="block text-gray-600: hover: text-blue-600 transition-colors duration-200 py-1",
                          onClick={() => setIsMenuOpen(false)},
                        >,
                          {subItem.name},
                        </Link>,
                      ))},
                    </div>,
                  )},
                </div>,
              ))},
              <div className="mt-4 pt-4 border-t border-gray-200">,
                <Link,
                  href="/contact",
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",
                  onClick={() => setIsMenuOpen(false)},
                >,
                  Get Started,
                </Link>,
              </div>,
            </motion.div>,
          )},
        </AnimatePresence>,
      </nav>,
    </header>,
  )
},
,
export default Header,

<<<<<<< HEAD
<<<<<<< HEAD
  ],;
,;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen),;
  const toggleDropdown = (nam: e: string) => {,;
    setActiveDropdown(activeDropdown === name ? nul: l: name);
  },;
,;
  return (,;
    <header className="bg-white shadow-lg sticky top-0 z-50">,;
      {/* Top Bar */},;
      <div className="bg-blue-900 text-white py-2">,;
        <div className="container mx-auto px-4">,;
          <div className="flex flex-col: md: flex-row justify-between items-center text-sm">,;
            <div className="flex items-center space-x-6 mb-2: md: mb-0">,;
              <div className="flex items-center space-x-2">,;
                <Phone className="w-4 h-4" />,;
                <span>+1 302 464 0950</span>,;
              </div>,;
              <div className="flex items-center space-x-2">,;
                <Mail className="w-4 h-4" />,;
                <span>kleber@ziontechgroup.com</span>,;
              </div>,;
            </div>,;
            <div className="flex items-center space-x-2">,;
              <MapPin className="w-4 h-4" />,;
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>,;
            </div>,;
          </div>,;
        </div>,;
      </div>,;
      {/* Main Navigation */},;
      <nav className="container mx-auto px-4 py-4">,;
        <div className="flex justify-between items-center">,;
          {/* Logo */},;
          <Link href="/" className="flex items-center space-x-2">,;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,;
              <span className="text-white font-bold text-xl">Z</span>,;
            </div>,;
            <div>,;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>,;
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>,;
            </div>,;
          </Link>,;
          {/* Desktop Navigation */},;
          <div className="hidden: lg: flex items-center space-x-8">,;
            {navigation.map((item) => (,;
              <div key={item.name} className="relative group">,;
                <button,;
                  onClick={() => item.dropdown && toggleDropdown(item.name)},;
                  className="flex items-center space-x-1 text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium",;
                >,;
                  <Link href={item.href}>{item.name}</Link>,;
                  {item.dropdown && (,;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,;
                      activeDropdown === item.name ? 'rotate-180' : '';
                    }`} />)},;
                </button>,;
                {/* Dropdown Menu */},;
                {item.dropdown && (,;
                  <AnimatePresence>,;
                    {activeDropdown === item.name && (,;
                      <motion.div,;
                        initial={{ opacit: y: 0, y: 10 }},;
                        animate={{ opacit: y: 1, y: 0 }},;
                        exit={{ opacit: y: 0, y: 10 }},;
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",;
                      >,;
                        {item.dropdown.map((subItem) => (,;
                          <Link,;
                            key={subItem.name},;
                            href={subItem.href},;
                            className="block px-4 py-2 text-gray-700: hover: bg-blue-50: hover:text-blue-600 transition-colors duration-200",;
                            onClick={() => setActiveDropdown(null)},;
                          >,;
                            {subItem.name},;
                          </Link>,;
                        ))},;
                      </motion.div>,;
                    )},;
                  </AnimatePresence>,;
                )},;
              </div>,;
            ))},;
          </div>,;
          {/* Mobile Menu Button */},;
          <button,;
            onClick={toggleMenu},;
            className="l: g: hidden p-2 text-gray-700: hover:text-blue-600 transition-colors duration-200",;
          >,;
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />},;
          </button>,;
        </div>,;
        {/* Mobile Navigation */},;
        <AnimatePresence>,;
          {isMenuOpen && (,;
            <motion.div,;
              initial={{ opacit: y: 0, heigh: t: 0 }},;
              animate={{ opacit: y: 1, heigh: t: 'auto' }},;
              exit={{ opacit: y: 0, heigh: t: 0 }},;
              className="l: g: hidden mt-4 border-t border-gray-200 pt-4",;
            >,;
              {navigation.map((item) => (,;
                <div key={item.name} className="mb-2">,;
                  <div className="flex items-center justify-between">,;
                    <Link,;
                      href={item.href},;
                      className="text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium py-2",;
                      onClick={() => setIsMenuOpen(false)},;
                    >,;
                      {item.name},;
                    </Link>,;
                    {item.dropdown && (,;
                      <button,;
                        onClick={() => toggleDropdown(item.name)},;
                        className="p-1",;
                      >,;
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,;
                          activeDropdown === item.name ? 'rotate-180' : '';
                        }`} />,;
                      </button>,;
                    )},;
                  </div>,;
                  {item.dropdown && activeDropdown === item.name && (,;
                    <div className="ml-4 mt-2 space-y-1">,;
                      {item.dropdown.map((subItem) => (,;
                        <Link,;
                          key={subItem.name},;
                          href={subItem.href},;
                          className="block text-gray-600: hover: text-blue-600 transition-colors duration-200 py-1",;
                          onClick={() => setIsMenuOpen(false)},;
                        >,;
                          {subItem.name},;
                        </Link>,;
                      ))},;
                    </div>,;
                  )},;
                </div>,;
              ))},;
              <div className="mt-4 pt-4 border-t border-gray-200">,;
                <Link,;
                  href="/contact",;
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",;
                  onClick={() => setIsMenuOpen(false)},;
                >,;
                  Get Started,;
                </Link>,;
              </div>,;
            </motion.div>,;
          )},;
        </AnimatePresence>,;
      </nav>,;
    </header>,;
  );
},;
,;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default Header;
=======
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
=======
=======
            </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        )}
      </div>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    </header>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
<<<<<<< HEAD
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
<<<<<<< HEAD
export default Header;
=======
<<<<<<< HEAD
export default Header;
=======
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default Header;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
export default Header;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
export default Header;
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
export default Header;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
