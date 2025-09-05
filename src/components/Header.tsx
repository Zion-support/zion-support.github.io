
import React, { useState } from 'react',
import Link from 'next/link';
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
      href: '/'
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {,
      name: 'Contact',
      href: '/contact'
    };
  ],
,
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen),
  const toggleDropdown = (name: string) => {,
    setActiveDropdown(activeDropdown === name ? null : name)
  };
,
  return (,
    <header className=&quot;bg-white shadow-lg sticky top-0 z-50&quot;>,
      {/* Top Bar */};
      <div className=&quot;bg-blue-900 text-white py-2&quot;>,
        <div className=&quot;container mx-auto px-4&quot;>,
          <div className=&quot;flex flex-col md: flex-row justify-between items-center text-sm&quot;>,
            <div className=&quot;flex items-center space-x-6 mb-2 md: mb-0&quot;>,
              <div className=&quot;flex items-center space-x-2&quot;>,
                <Phone className=&quot;w-4 h-4&quot; />,
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
      {/* Main Navigation */};
      <nav className=&quot;container mx-auto px-4 py-4&quot;>,
        <div className=&quot;flex justify-between items-center&quot;>,
          {/* Logo */};
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>,
            <div className=&quot;w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>,
              <span className=&quot;text-white font-bold text-xl&quot;>Z</span>,
            </div>,
            <div>,
              <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Zion Tech Group</h1>,
              <p className=&quot;text-sm text-gray-600&quot;>AI & Technology Solutions</p>,
            </div>,
          </Link>,
          {/* Desktop Navigation */};
          <div className=&quot;hidden lg: flex items-center space-x-8&quot;>,
            {navigation.map((item) => (,
              <div key={item.name} className=&quot;relative group&quot;>,
                <button,
                  onClick={() => item.dropdown && toggleDropdown(item.name)};
                  className=&quot;flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium&quot;,
                >,
                  <Link href={item.href}>{item.name}</Link>,
                  {item.dropdown && (,
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />)};
                </button>,
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
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
            className=&quot;lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200&quot;,
          >,
            {isMenuOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isMenuOpen && (,
            <motion.div,
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className=&quot;lg: hidden mt-4 border-t border-gray-200 pt-4&quot;,
            >,
              {navigation.map((item) => (,
                <div key={item.name} className=&quot;mb-2&quot;>,
                  <div className=&quot;flex items-center justify-between&quot;>,
                    <Link,
                      href={item.href};
                      className=&quot;text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium py-2&quot;,
                      onClick={() => setIsMenuOpen(false)};
                    >,
                      {item.name};
                    </Link>,
                    {item.dropdown && (,
                      <button,
                        onClick={() => toggleDropdown(item.name)};
                        className=&quot;p-1&quot;,
                      >,
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${,
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />,
                      </button>,
                    )};
                  </div>,
                  {item.dropdown && activeDropdown === item.name && (,
                    <div className=&quot;ml-4 mt-2 space-y-1&quot;>,
                      {item.dropdown.map((subItem) => (,
                        <Link,
                          key={subItem.name};
                          href={subItem.href};
                          className=&quot;block text-gray-600 hover: text-blue-600 transition-colors duration-200 py-1&quot;,
                          onClick={() => setIsMenuOpen(false)};
                        >,
                          {subItem.name};
                        </Link>,
                      ))};
                    </div>,
                  )};
                </div>,
              ))};
              <div className=&quot;mt-4 pt-4 border-t border-gray-200&quot;>,
                <Link,
                  href=&quot;/contact&quot;,
                  className=&quot;block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
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
  )
};
,
export default Header,
