import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react',

export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className=&quot;w-4 h-4&quot; />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className=&quot;w-4 h-4&quot; />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: <Brain className=&quot;w-4 h-4&quot; /> },
        { name: 'Quantum & Space Tech', href: '/services?category=quantum', icon: <Atom className=&quot;w-4 h-4&quot; /> },
        { name: 'Emerging Technologies', href: '/services?category=emerging', icon: <Microscope className=&quot;w-4 h-4&quot; /> },
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: <Code className=&quot;w-4 h-4&quot; /> },
        { name: 'Metaverse & VR', href: '/services?category=metaverse', icon: <Gamepad2 className=&quot;w-4 h-4&quot; /> },
        { name: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className=&quot;w-4 h-4&quot; /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className=&quot;w-4 h-4&quot; /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <TestTube className=&quot;w-4 h-4&quot; /> },
        { name: 'Blockchain & Web3', href: '/services?category=blockchain', icon: <Database className=&quot;w-4 h-4&quot; /> },
        { name: 'Autonomous Vehicles', href: '/services?category=transportation', icon: <Car className=&quot;w-4 h-4&quot; /> },
        { name: 'Cloud & Infrastructure', href: '/services?category=cloud', icon: <Cloud className=&quot;w-4 h-4&quot; /> },
        { name: 'Edge Computing', href: '/services?category=edge', icon: <Server className=&quot;w-4 h-4&quot; /> },
        { name: 'IoT & Connectivity', href: '/services?category=iot', icon: <Network className=&quot;w-4 h-4&quot; /> },
        { name: 'Semiconductor Tech', href: '/services?category=semiconductor', icon: <Cpu className=&quot;w-4 h-4&quot; /> },
        { name: 'Creative & Design', href: '/services?category=creative', icon: <Palette className=&quot;w-4 h-4&quot; /> },
        { name: 'Global Solutions', href: '/services?category=global', icon: <Globe className=&quot;w-4 h-4&quot; /> }
      ]
    },
    {
      name: 'Showcase',
      href: '/enhanced-services-showcase-2026-v2',
      icon: <Rocket className=&quot;w-4 h-4&quot; />
    },
    {
      name: 'Pricing',
      href: '/pricing-enhanced-2026',
      icon: <Database className=&quot;w-4 h-4&quot; />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Globe className=&quot;w-4 h-4&quot; />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className=&quot;w-4 h-4&quot; />
    }
  ],;
;
  const contactInfo = {;
    mobile:'+1 302 464 0950',;
    email:'kleber@ziontechgroup.com',;
    address:'364 E Main St STE 1008 Middletown DE 19709';
  },;
;
  return (;
    <>;
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between py-2 text-sm&quot;>
            <div className=&quot;flex items-center space-x-6 text-gray-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Mail className=&quot;w-4 h-4 text-blue-400&quot; />
                <span>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <MapPin className=&quot;w-4 h-4 text-green-400&quot; />
                <span>{contactInfo.address}</span>              </div>
            </div>
            <div className=&quot;flex items-center space-x-4&quot;>
              <Link href=&quot;/enhanced-services-showcase-2026-v2&quot; className=&quot;text-purple-400 hover:text-purple-300 transition-colors&quot;>
                🚀 New 2026 Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300&quot;>                  Z
                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot;></div>
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <div className=&quot;text-xl font-bold text-white&quot;>Zion Tech Group</div>
                <div className=&quot;text-xs text-gray-400&quot;>Innovation 2026</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2&quot;
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className=&quot;w-4 h-4 transition-transform duration-200 group-hover:rotate-180&quot; />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2&quot;
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>                  )}

                  {_/* Dropdown Menu */}
                  {_item.dropdown && activeDropdown === item.name && (_<div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4&quot;
                    >
                      <div className=&quot;grid grid-cols-1 gap-2&quot;>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group&quot;
                          >
                            <div className=&quot;text-purple-400 group-hover:text-purple-300 transition-colors&quot;>
                              {dropdownItem.icon}
                            </div>
                            <span className=&quot;text-gray-300 group-hover:text-white transition-colors&quot;>
                              {dropdownItem.name}                            </span>
                          </a>
                        ))}
                      </div>;
                    </div>;
                  )}
                </div>;
              ))}
            </div>;
;
            {/* CTA Button */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
              <Link href=&quot;/contact&quot;>
                <button className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg&quot;>                  Get Started
                </button>
              </a>
            </div>

            {_/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;lg:hidden p-2 text-gray-300 hover:text-white transition-colors&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}            </button>
          </div>
        </div>
      </nav>

      {_/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className=&quot;fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden&quot;          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex items-center justify-between mb-8&quot;>
                <div className=&quot;text-xl font-bold text-white&quot;>Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className=&quot;p-2 text-gray-300 hover:text-white transition-colors&quot;                >
                  <X className=&quot;w-6 h-6&quot; />
                </button>
              </div>

              <div className=&quot;space-y-6&quot;>
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className=&quot;flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                            >
                              <div className=&quot;flex items-center space-x-3&quot;>
                                {item.icon}
                                <span>{item.name}</span>                              </div>
                              <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === item.name && (
                              <div className=&quot;ml-6 mt-2 space-y-2&quot;>
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className=&quot;flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white&quot;
                                  >
                                    {dropdownItem.icon}
                                    <span>{dropdownItem.name}</span>
                                  </a>                                ))}
                              </div>
                            )}
                          </div>;
                    ) :(;
                      <Link;
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className=&quot;flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </a>                    )}
                  </div>
                ))}

                <div className=&quot;pt-6 border-t border-white/10&quot;>
                  <Link href=&quot;/contact&quot; onClick={() => setIsOpen(false)}>
                    <button className=&quot;w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300&quot;>                      Get Started
                    </button>
                  </a>
                </div>

                {/* Mobile Contact Info */}
                <div className=&quot;pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Mail className=&quot;w-4 h-4 text-blue-400&quot; />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <MapPin className=&quot;w-4 h-4 text-green-400&quot; />
                    <span className=&quot;text-xs&quot;>{contactInfo.address}</span>                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>;
;
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=&quot;fixed inset-0 bg-black/50 z-40 lg:hidden&quot;
          onClick={() => setIsOpen(false)}
        />;
      )}
;
      {/* Spacer for fixed navigation */}
      <div className=&quot;h-32&quot;></div>    </>
  )
}