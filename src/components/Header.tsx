import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1>Header Component</h1>
    </header>
  );
}
=======

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
      nam: e: 'Home',
      hre: f: '/'
    },
    {,
      nam: e: 'Services',
      hre: f: '/services',
      dropdow: n: [,
        { nam: e: 'AI Services', hre: f: '/ai-services' },
        { nam: e: 'IT Services', hre: f: '/it-services' },
        { nam: e: 'Micro SaaS', hre: f: '/micro-saas' },
        { nam: e: 'Cloud Solutions', hre: f: '/solutions/cloud-migration' },
        { nam: e: 'Cybersecurity', hre: f: '/services/cybersecurity' },
=======
;
import React, { useState } from 'react',;
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react',;
,;
const Header = () => {,;
  const [isMenuOpen, setIsMenuOpen] = useState(false),;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),;
,;
  const navigation = [,;
    {,;
      nam: e: 'Home',;
      hre: f: '/';
    },;
    {,;
      nam: e: 'Services',;
      hre: f: '/services',;
      dropdow: n: [,;
        { nam: e: 'AI Services', hre: f: '/ai-services' },;
        { nam: e: 'IT Services', hre: f: '/it-services' },;
        { nam: e: 'Micro SaaS', hre: f: '/micro-saas' },;
        { nam: e: 'Cloud Solutions', hre: f: '/solutions/cloud-migration' },;
        { nam: e: 'Cybersecurity', hre: f: '/services/cybersecurity' },;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  ],
,
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen),
  const toggleDropdown = (nam: e: string) => {,
    setActiveDropdown(activeDropdown === name ? nul: l: name)
  },
,
  return (,
<<<<<<< HEAD
    <header className="bg-white shadow-lg sticky top-0 z-50">,
      {/* Top Bar */},
      <div className="bg-blue-900 text-white py-2">,
        <div className="container mx-auto px-4">,
          <div className="flex flex-col: md: flex-row justify-between items-center text-sm">,
            <div className="flex items-center space-x-6 mb-2: md: mb-0">,
              <div className="flex items-center space-x-2">,
                <Phone className="w-4 h-4" />,
=======
    <header className=&quot;bg-white shadow-lg sticky top-0 z-50&quot;>,
      {/* Top Bar */};
      <div className=&quot;bg-blue-900 text-white py-2&quot;>,
        <div className=&quot;container mx-auto px-4&quot;>,
          <div className=&quot;flex flex-col md: flex-row justify-between items-center text-sm&quot;>,
            <div className=&quot;flex items-center space-x-6 mb-2 md: mb-0&quot;>,
              <div className=&quot;flex items-center space-x-2&quot;>,
                <Phone className=&quot;w-4 h-4&quot; />,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <span>+1 302 464 0950</span>,
              </div>,
              <div className=&quot;flex items-center space-x-2&quot;>,
                <Mail className=&quot;w-4 h-4&quot; />,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
            </div>,
            <div className=&quot;flex items-center space-x-2&quot;>,
              <MapPin className=&quot;w-4 h-4&quot; />,
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>,
            </div>,
          </div>,
        </div>,
      </div>,
<<<<<<< HEAD
      {/* Main Navigation */},
      <nav className="container mx-auto px-4 py-4">,
        <div className="flex justify-between items-center">,
          {/* Logo */},
          <Link href="/" className="flex items-center space-x-2">,
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <span className="text-white font-bold text-xl">Z</span>,
=======
      {/* Main Navigation */};
      <nav className=&quot;container mx-auto px-4 py-4&quot;>,
        <div className=&quot;flex justify-between items-center&quot;>,
          {/* Logo */};
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>,
            <div className=&quot;w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>,
              <span className=&quot;text-white font-bold text-xl&quot;>Z</span>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>,
            <div>,
              <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Zion Tech Group</h1>,
              <p className=&quot;text-sm text-gray-600&quot;>AI & Technology Solutions</p>,
            </div>,
          </Link>,
<<<<<<< HEAD
          {/* Desktop Navigation */},
          <div className="hidden: lg: flex items-center space-x-8">,
=======
          {/* Desktop Navigation */};
          <div className=&quot;hidden lg: flex items-center space-x-8&quot;>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            {navigation.map((item) => (,
              <div key={item.name} className=&quot;relative group&quot;>,
                <button,
<<<<<<< HEAD
                  onClick={() => item.dropdown && toggleDropdown(item.name)},
                  className="flex items-center space-x-1 text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium",
=======
                  onClick={() => item.dropdown && toggleDropdown(item.name)};
                  className=&quot;flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
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
=======
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className=&quot;absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50&quot;,
                      >,
                        {item.dropdown.map((subItem) => (,
                          <Link,
                            key={subItem.name};
                            href={subItem.href};
                            className=&quot;block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors duration-200&quot;,
                            onClick={() => setActiveDropdown(null)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
            onClick={toggleMenu},
            className="l: g: hidden p-2 text-gray-700: hover:text-blue-600 transition-colors duration-200",
          >,
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />},
=======
            onClick={toggleMenu};
            className=&quot;lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200&quot;,
          >,
            {isMenuOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          </button>,
        </div>,
        {/* Mobile Navigation */},
        <AnimatePresence>,
          {isMenuOpen && (,
            <motion.div,
<<<<<<< HEAD
              initial={{ opacit: y: 0, heigh: t: 0 }},
              animate={{ opacit: y: 1, heigh: t: 'auto' }},
              exit={{ opacit: y: 0, heigh: t: 0 }},
              className="l: g: hidden mt-4 border-t border-gray-200 pt-4",
=======
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className=&quot;lg: hidden mt-4 border-t border-gray-200 pt-4&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            >,
              {navigation.map((item) => (,
                <div key={item.name} className=&quot;mb-2&quot;>,
                  <div className=&quot;flex items-center justify-between&quot;>,
                    <Link,
<<<<<<< HEAD
                      href={item.href},
                      className="text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium py-2",
                      onClick={() => setIsMenuOpen(false)},
=======
                      href={item.href};
                      className=&quot;text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium py-2&quot;,
                      onClick={() => setIsMenuOpen(false)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                    >,
                      {item.name},
                    </Link>,
                    {item.dropdown && (,
                      <button,
<<<<<<< HEAD
                        onClick={() => toggleDropdown(item.name)},
                        className="p-1",
=======
                        onClick={() => toggleDropdown(item.name)};
                        className=&quot;p-1&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      >,
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />,
                      </button>,
                    )},
                  </div>,
                  {item.dropdown && activeDropdown === item.name && (,
                    <div className=&quot;ml-4 mt-2 space-y-1&quot;>,
                      {item.dropdown.map((subItem) => (,
                        <Link,
<<<<<<< HEAD
                          key={subItem.name},
                          href={subItem.href},
                          className="block text-gray-600: hover: text-blue-600 transition-colors duration-200 py-1",
                          onClick={() => setIsMenuOpen(false)},
=======
                          key={subItem.name};
                          href={subItem.href};
                          className=&quot;block text-gray-600 hover: text-blue-600 transition-colors duration-200 py-1&quot;,
                          onClick={() => setIsMenuOpen(false)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        >,
                          {subItem.name},
                        </Link>,
                      ))},
                    </div>,
                  )},
                </div>,
<<<<<<< HEAD
              ))},
              <div className="mt-4 pt-4 border-t border-gray-200">,
                <Link,
                  href="/contact",
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",
                  onClick={() => setIsMenuOpen(false)},
=======
              ))};
              <div className=&quot;mt-4 pt-4 border-t border-gray-200&quot;>,
                <Link,
                  href=&quot;/contact&quot;,
                  className=&quot;block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
                  onClick={() => setIsMenuOpen(false)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
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
export default Header;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
