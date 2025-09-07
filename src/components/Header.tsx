

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
,
const Header = $2;
  const [isMenuOpen, setIsMenuOpen] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
,
  const navigation = $2;
    {,
      nam: 'Home',
      hre: f: '/'
    },
    {,
      nam: 'Services',
      hre: f: '/services',
      dropdow: [,
        { nam: 'AI Services', hre: f: '/ai-services' },
        { nam: 'IT Services', hre: f: '/it-services' },
        { nam: 'Micro SaaS', hre: f: '/micro-saas' },
        { nam: 'Cloud Solutions', hre: f: '/solutions/cloud-migration' },
        { nam: 'Cybersecurity', hre: f: '/services/cybersecurity' },
        { nam: 'Data Analytics', hre: f: '/services/data-analytics' }
      ]
    },
    {,
      nam: 'Solutions',
      hre: f: '/solutions',
      dropdow: [,
        { nam: 'Enterprise Solutions', hre: f: '/solutions/enterprise' },
        { nam: 'Healthcare', hre: f: '/solutions/healthcare' },
        { nam: 'Finance', hre: f: '/solutions/finance' },
        { nam: 'Government', hre: f: '/solutions/government' },
        { nam: 'Retail', hre: f: '/solutions/retail' },
        { nam: 'Education', hre: f: '/solutions/education' }
      ]
    },
    {,
      nam: 'Industries',
      hre: f: '/industries',
      dropdow: [,
        { nam: 'Financial Services', hre: f: '/industries/financial' },
        { nam: 'Healthcare', hre: f: '/industries/healthcare' },
        { nam: 'Manufacturing', hre: f: '/industries/manufacturing' },
        { nam: 'Retail', hre: f: '/industries/retail' },
        { nam: 'Government', hre: f: '/industries/government' }
      ]
    },
    {,
      nam: 'Company',
      hre: f: '/about',
      dropdow: [,
        { nam: 'About Us', hre: f: '/about' },
        { nam: 'Our Team', hre: f: '/team' },
        { nam: 'Careers', hre: f: '/careers' },
        { nam: 'Partners', hre: f: '/partners' },
        { nam: 'Case Studies', hre: f: '/case-studies' }
      ]
    },
    {,
      nam: 'Resources',
      hre: f: '/resources',
      dropdow: [,
        { nam: 'Blog', hre: f: '/blog' },
        { nam: 'White Papers', hre: f: '/white-papers' },
        { nam: 'Webinars', hre: f: '/webinars' },
        { nam: 'Tutorials', hre: f: '/tutorials' },
        { nam: 'API Documentation', hre: f: '/api-docs' }
      ]
    },
    {,
      nam: 'Contact',
      hre: f: '/contact'
    }
  ],
,
  const toggleMenu = () => setIsMenuOpen($2);
  const toggleDropdown = $2;
    setActiveDropdown(activeDropdown = $2;
,
  return (,
    <header className = $2;
      {/* Top Bar */},
      <div className = $2;
        <div className = $2;
          <div className = $2;
            <div className = $2;
              <div className = $2;
                <Phone className = $2;
                <span>+1 302 464 0950</span>,
              </div>,
              <div className = $2;
                <Mail className = $2;
                <span>kleber@ziontechgroup.com</span>,
              </div>,
            </div>,
            <div className = $2;
              <MapPin className = $2;
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */},
      <nav className = $2;
        <div className = $2;
          {/* Logo */},
          <Link href = $2;
            <div className = $2;
              <span className = $2;
            </div>,
            <div>,
              <h1 className = $2;
              <p className = $2;
            </div>,
          </Link>,
          {/* Desktop Navigation */},
          <div className = $2;
            {navigation.map((item) => (,
              <div key = $2;
                <button,
                  onClick = $2;
                  className = $2;
                >,
                  <Link href = $2;
                  {item.dropdown && (,
                    <ChevronDown className = $2;
                      activeDropdown = $2;
                </button>,
                {/* Dropdown Menu */},
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown = $2;
                      <motion.div,
                        initial={{ opacit: 0, y: 10}},
                        animate={{ opacit: 1, y: 0}},
                        exit={{ opacit: 0, y: 10}},
                        className = $2;
                      >,
                        {item.dropdown.map((subItem) => (,
                          <Link,
                            key = $2;
                            href = $2;
                            className = $2;
                            onClick = $2;
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
            onClick = $2;
            className = $2;
          >,
            {isMenuOpen ? <X className = $2;
          </button>,
        </div>,
        {/* Mobile Navigation */},
        <AnimatePresence>,
          {isMenuOpen && (,
            <motion.div,
              initial={{ opacit: 0, heigh: 0}},
              animate={{ opacit: 1, heigh: 'auto' }},
              exit={{ opacit: 0, heigh: 0}},
              className = $2;
            >,
              {navigation.map((item) => (,
                <div key = $2;
                  <div className = $2;
                    <Link,
                      href = $2;
                      className = $2;
                      onClick = $2;
                    >,
                      {item.name},
                    </Link>,
                    {item.dropdown && (,
                      <button,
                        onClick = $2;
                        className = $2;
                      >,
                        <ChevronDown className = $2;
                          activeDropdown = $2;
                      </button>,
                    )},
                  </div>,
                  {item.dropdown && activeDropdown = $2;
                    <div className = $2;
                      {item.dropdown.map((subItem) => (,
                        <Link,
                          key = $2;
                          href = $2;
                          className = $2;
                          onClick = $2;
                        >,
                          {subItem.name},
                        </Link>,
                      ))},
                    </div>,
                  )},
                </div>,
              ))},
              <div className = $2;
                <Link,
                  href = $2;
                  className = $2;
                  onClick = $2;
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

