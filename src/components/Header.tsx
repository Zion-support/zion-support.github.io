<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];



  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
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
=======
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={item.path} 
                  className={`transition-colors duration-200 relative ${
                    location.pathname === item.path 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="small">
                Get Started
              </Button>
            </motion.div>
          </nav>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
<<<<<<< HEAD
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>


const Header: React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [;
    { name: 'Home', href: '/' },;
    { name: 'About', href: '/about' },;
    { name: 'Services', href: '/services' },;
    { name: 'Contact', href: '/contact' },;
    { name: 'Pricing', href: '/pricing' },;
  ];

  return (
    <header className="bg-white shadow-sm border-b">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
          <div className="flex items-center">;
            <Link to="/" className="text-xl font-bold text-gray-900">;
              Zion Tech;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">;
            {navigation && navigation.map((item) => (;
              <Link
                key={item && item.name}
                to={item && item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">;
                {item && item.name}
              </Link>;
            ))}
          </nav>;

          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button
              onClick={() = aria-label="Button"> setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2";
            >;
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>;
          </div>;
        </div>;

        {/* Mobile Navigation */}
        {isMenuOpen && (;
          <div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  to={item && item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >;
                  {item && item.name}
                </Link>;
              ))}
            </div>;
          </div>;
        )}
      </div>;
    </header>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
};
=======
;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {, setActiveDropdown(activeDropdown === name ? null : name),
  ;
;
  return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">;
      {/* Top Bar */};
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md: flex-row justify-between items-center text-sm">, <div className="flex items-center space-x-6 mb-2 md:mb-0">,
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
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">;
        <div className="flex justify-between items-center">;
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <div>;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>;
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
          <div className="hidden lg: flex items-center space-x-8">, {navigation.map((item) => (,
              <div key={item.name} className="relative group">;
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)};
                  className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium", >,
                  <Link href={item.href}>{item.name}</Link>;
                  {item.dropdown && (;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${, activeDropdown === item.name ? 'rotate-180' : '', }`} />)};
                </button>;
                {/* Dropdown Menu */};
                {item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown === item.name && (;
                      <motion.div;
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50";
                      >;
                        {item.dropdown.map((subItem) => (;
                          <Link;
                            key={subItem.name};
                            href={subItem.href};
                            className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors duration-200", onClick={() => setActiveDropdown(null),
                          >;
                            {subItem.name};
                          </Link>;
                        ))};
                      </motion.div>;
                    )};
                  </AnimatePresence>;
                )};
              </div>;
            ))};
          </div>;
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
            className="lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200", >,
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />;
          </button>;
        </div>;
        {/* Mobile Navigation */};
        <AnimatePresence>;
          {isMenuOpen && (;
            <motion.div;
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className="lg: hidden mt-4 border-t border-gray-200 pt-4", >,
              {navigation.map((item) => (;
                <div key={item.name} className="mb-2">;
                  <div className="flex items-center justify-between">;
                    <Link;
                      href={item.href};
                      className="text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium py-2", onClick={() => setIsMenuOpen(false),
                    >;
                      {item.name};
                    </Link>;
                    {item.dropdown && (;
                      <button;
                        onClick={() => toggleDropdown(item.name)};
                        className="p-1";
                      >;
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${;
                          activeDropdown === item.name ? 'rotate-180' : '';
                        }`} />;
                      </button>;
                    )};
                  </div>;
                  {item.dropdown && activeDropdown === item.name && (;
                    <div className="ml-4 mt-2 space-y-1">;
                      {item.dropdown.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className="block text-gray-600 hover: text-blue-600 transition-colors duration-200 py-1", onClick={() => setIsMenuOpen(false),
                        >;
                          {subItem.name};
                        </Link>;
                      ))};
                    </div>;
                  )};
                </div>;
              ))};
              <div className="mt-4 pt-4 border-t border-gray-200">;
                <Link;
                  href="/contact";
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold", onClick={() => setIsMenuOpen(false),
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  );
};

;
export default Header;
import React, { useState } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react',
,
const Header = () => {,
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
,
  const navigation = [,
    {,
      name: 'Home',
      href: '/',
    },
    {,
      name: 'Services',
      href: '/services',
      dropdown: [,
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' };
      ],
    },
    {,
      name: 'Solutions',
      href: '/solutions',
      dropdown: [,
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' };
      ],
    },
    {,
      name: 'Industries',
      href: '/industries',
      dropdown: [,
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Government', href: '/industries/government' };
      ],
    },
    {,
      name: 'Company',
      href: '/about',
      dropdown: [,
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' };
      ],
    },
    {,
      name: 'Resources',
      href: '/resources',
      dropdown: [,
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'API Documentation', href: '/api-docs' };
      ],
    },
    {,
      name: 'Contact',
      href: '/contact',
    };
  ],
,
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen),
  const toggleDropdown = (name: string) => {,
    setActiveDropdown(activeDropdown === name ? null : name),
  };
,
  return (,
    <header className="bg-white shadow-lg sticky top-0 z-50">,
      {/* Top Bar */};
      <div className="bg-blue-900 text-white py-2">,
        <div className="container mx-auto px-4">,
          <div className="flex flex-col md: flex-row justify-between items-center text-sm">,
            <div className="flex items-center space-x-6 mb-2 md: mb-0">,
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
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">,
        <div className="flex justify-between items-center">,
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">,
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <span className="text-white font-bold text-xl">Z</span>,
            </div>,
            <div>,
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>,
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>,
            </div>,
          </Link>,
          {/* Desktop Navigation */};
          <div className="hidden lg: flex items-center space-x-8">,
            {navigation.map((item) => (,
              <div key={item.name} className="relative group">,
                <button,
                  onClick={() => item.dropdown && toggleDropdown(item.name)};
                  className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium",
                >,
                  <Link href={item.href}>{item.name}</Link>,
                  {item.dropdown && (,
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                      activeDropdown === item.name ? 'rotate-180' : '',
                    }`} />,
                  )};
                </button>,
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50",
                      >,
                        {item.dropdown.map((subItem) => (,
                          <Link,
                            key={subItem.name};
                            href={subItem.href};
                            className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors duration-200",
                            onClick={() => setActiveDropdown(null)};
                          >,
                            {subItem.name};
                          </Link>,
                        ))};
                      </motion.div>,
                    )};
                  </AnimatePresence>,
                )};
              </div>,
            ))};
          </div>,
          {/* Mobile Menu Button */};
          <button,
            onClick={toggleMenu};
            className="lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200",
          >,
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isMenuOpen && (,
            <motion.div,
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className="lg: hidden mt-4 border-t border-gray-200 pt-4",
            >,
              {navigation.map((item) => (,
                <div key={item.name} className="mb-2">,
                  <div className="flex items-center justify-between">,
                    <Link,
                      href={item.href};
                      className="text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium py-2",
                      onClick={() => setIsMenuOpen(false)};
                    >,
                      {item.name};
                    </Link>,
                    {item.dropdown && (,
                      <button,
                        onClick={() => toggleDropdown(item.name)};
                        className="p-1",
                      >,
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                          activeDropdown === item.name ? 'rotate-180' : '',
                        }`} />,
                      </button>,
                    )};
                  </div>,
                  {item.dropdown && activeDropdown === item.name && (,
                    <div className="ml-4 mt-2 space-y-1">,
                      {item.dropdown.map((subItem) => (,
                        <Link,
                          key={subItem.name};
                          href={subItem.href};
                          className="block text-gray-600 hover: text-blue-600 transition-colors duration-200 py-1",
                          onClick={() => setIsMenuOpen(false)};
                        >,
                          {subItem.name};
                        </Link>,
                      ))};
                    </div>,
                  )};
                </div>,
              ))};
              <div className="mt-4 pt-4 border-t border-gray-200">,
                <Link,
                  href="/contact",
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold",
                  onClick={() => setIsMenuOpen(false)};
                >,
                  Get Started,
                </Link>,
              </div>,
            </motion.div>,
          )};
        </AnimatePresence>,
      </nav>,
    </header>,
  ),
};
,
export default Header,

=======
  );
};
export default Header;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-slate-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-lg transition-colors ${
                        location.pathname === item.path
                          ? 'text-white bg-slate-800 rounded-lg'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="px-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button variant="primary" size="small" className="w-full">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
