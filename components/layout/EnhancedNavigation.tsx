<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, User,
  Settings, LogOut, Bell, Globe, Zap
} from 'lucide-react',
import Link from 'next/link',
interface EnhancedNavigationProps {
  className?: string
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
=======
import React, {_useState, _useEffect} from 'react';
import {_Menu, _X, _ChevronDown, _Search, _User, _Settings, _LogOut, _Bell, _Globe, _Zap} from 'lucide-react';
import Link from 'next/link';

interface EnhancedNavigationProps {_className?: string;}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = (_{_className = ''}) => {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

<<<<<<< HEAD
  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className=&quot;w-4 h-4&quot; />,
      dropdown: [
<<<<<<< HEAD
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className="w-4 h-4" /> },
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className="w-4 h-4" /> },
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className="w-4 h-4" /> },
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className="w-4 h-4" /> }
=======
  const _navigationItems = [
    {_name: 'Services', _href: '/services', _icon: <Brain className="w-4 h-4" />, _dropdown: [
        { name: 'AI & Machine Learning', _href: '/services?category=ai-ml', _icon: <Brain className="w-4 h-4" />},
        {_name: 'Quantum Computing', _href: '/services?category=quantum', _icon: <Rocket className="w-4 h-4" />},
        {_name: 'Space Technology', _href: '/services?category=space', _icon: <Globe className="w-4 h-4" />},
        {_name: 'Biotech & Healthcare', _href: '/services?category=biotech', _icon: <Dna className="w-4 h-4" />},
        {_name: 'Financial Services', _href: '/services?category=finance', _icon: <DollarSign className="w-4 h-4" />},
        {_name: 'Cybersecurity', _href: '/services?category=security', _icon: <Lock className="w-4 h-4" />},
        {_name: 'IoT & Smart Devices', _href: '/services?category=iot', _icon: <Wifi className="w-4 h-4" />},
        {_name: 'Logistics & Supply Chain', _href: '/services?category=logistics', _icon: <Truck className="w-4 h-4" />},
        {_name: 'Metaverse & Gaming', _href: '/services?category=metaverse', _icon: <Gamepad2 className="w-4 h-4" />},
        {_name: 'Robotics & Automation', _href: '/services?category=robotics', _icon: <Bot className="w-4 h-4" />},
        {_name: 'Manufacturing', _href: '/services?category=manufacturing', _icon: <Factory className="w-4 h-4" />},
        {_name: 'Autonomous Vehicles', _href: '/services?category=vehicles', _icon: <Car className="w-4 h-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ],
=======
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className=&quot;w-4 h-4&quot; /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Rocket className=&quot;w-4 h-4&quot; /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className=&quot;w-4 h-4&quot; /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className=&quot;w-4 h-4&quot; /> },
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className=&quot;w-4 h-4&quot; /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className=&quot;w-4 h-4&quot; /> },
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className=&quot;w-4 h-4&quot; /> },
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className=&quot;w-4 h-4&quot; /> },
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className=&quot;w-4 h-4&quot; /> },
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className=&quot;w-4 h-4&quot; /> },
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className=&quot;w-4 h-4&quot; /> },
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className=&quot;w-4 h-4&quot; /> }
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      hasDropdown: true,
      dropdownItems: [
        {_name: 'AI & Machine Learning', _href: '/services?category=ai-ml'},
        {_name: 'Quantum Computing', _href: '/services?category=quantum'},
        {_name: 'Space Technology', _href: '/services?category=space'},
        {_name: 'Biotech & Healthcare', _href: '/services?category=biotech'},
        {_name: 'Financial Services', _href: '/services?category=finance'},
        {_name: 'Cybersecurity', _href: '/services?category=security'},
        {_name: 'Edge Computing', _href: '/services?category=edge'},
        {_name: 'Blockchain', _href: '/services?category=blockchain'},
        {_name: 'View All Services', _href: '/services'}
      ]
    },
    {_name: 'Solutions', _href: '/solutions', _hasDropdown: true, _dropdownItems: [
        { name: 'Enterprise Solutions', _href: '/solutions?type=enterprise'},
        {_name: 'Startup Solutions', _href: '/solutions?type=startup'},
        {_name: 'Government Solutions', _href: '/solutions?type=government'},
        {_name: 'Healthcare Solutions', _href: '/solutions?type=healthcare'},
        {_name: 'Financial Solutions', _href: '/solutions?type=financial'}
      ]
    },
<<<<<<< HEAD
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
    {_name: 'Pricing', _href: '/pricing'},
    {_name: 'Resources', _href: '/resources'},
    {_name: 'Blog', _href: '/blog'},
    {_name: 'Contact', _href: '/contact'}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
<<<<<<< HEAD
        : 'bg-transparent'
    } ${className}`}>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;flex items-center space-x-3&quot;
=======
        : 'bg-transparent'} ${_className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {_/* Logo */}
          <motion.div
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.5}}
            className="flex items-center space-x-3"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Zap className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot; />
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <div className=&quot;text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-cyan-400&quot;>Revolutionary Technology</div>
              </div>
            </a>
          </motion.div>

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;relative&quot;
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <div className=&quot;relative&quot;>
                    <button className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2&quot;>
=======
          {_/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {_navigationItems.map((item, _index) => (_<motion.div
                key={item.name}
                initial={_{ opacity: 0, _y: -20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="relative"
                onMouseEnter={_() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={_() => setActiveDropdown(null)}
              >
                {_item.hasDropdown ? (_<div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <span>{item.name}</span>
                      <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {_activeDropdown === item.name && (
                        <motion.div
<<<<<<< HEAD
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className=&quot;absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden&quot;
                        >
                          <div className=&quot;p-2&quot;>
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className=&quot;block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300&quot;
                              >
                                {dropdownItem.name}
                              </a>
=======
                          initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                          animate={_{ opacity: 1, _y: 0, _scale: 1}}
                          exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                          transition={_{ duration: 0.2}}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        >
                          <div className="p-2">
                            {_item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={_dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                              >
                                {_dropdownItem.name}
                              </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
<<<<<<< HEAD
                    href={item.href}
                    className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2&quot;
                  >
                    {item.name}
                  </a>
=======
                    href={_item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {_item.name}
                  </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
          {/* Right side actions */}
          <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
            {/* Search */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className=&quot;p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300&quot;
=======
          {_/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {_/* Search */}
            <motion.button
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.6}}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Search className=&quot;w-5 h-5&quot; />
            </motion.button>

            {_/* Notifications */}
            <motion.button
<<<<<<< HEAD
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className=&quot;p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative&quot;
=======
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.7}}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Bell className=&quot;w-5 h-5&quot; />
              <div className=&quot;absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse&quot; />
            </motion.button>

            {_/* CTA Button */}
            <motion.div
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.8}}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25&quot;
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {_/* Mobile menu button */}
          <motion.button
<<<<<<< HEAD
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className=&quot;lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300&quot;
          >
            {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
=======
            initial={_{ opacity: 0, _scale: 0.8}}
            animate={_{ opacity: 1, _scale: 1}}
            transition={_{ duration: 0.5, _delay: 0.9}}
            onClick={_() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          >
            {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </motion.button>
        </div>
      </div>

      {_/* Mobile Navigation */}
      <AnimatePresence>
<<<<<<< HEAD
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20&quot;
          >
            <div className=&quot;px-4 py-6 space-y-4&quot;>
              {/* Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
=======
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _height: 0}}
            animate={_{ opacity: 1, _height: 'auto'}}
            exit={_{ opacity: 0, _height: 0}}
            transition={_{ duration: 0.3}}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {_/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500&quot;
                />
              </div>

<<<<<<< HEAD
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;space-y-2&quot;>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2&quot;
                  >
                    {item.name}
                  </a>
                  
                  {item.hasDropdown && item.dropdownItems && (
                    <div className=&quot;ml-4 space-y-1&quot;>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className=&quot;block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm&quot;
                        >
                          {dropdownItem.name}
                        </a>
=======
              {_/* Navigation Items */}
              {_navigationItems.map((item) => (_<div key={item.name} className="space-y-2">
                  <Link
                    href={_item.href}
                    onClick={_() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {_item.name}
                  </Link>
                  
                  {_item.hasDropdown && item.dropdownItems && (_<div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (_<Link
                          key={dropdownItem.name}
                          href={_dropdownItem.href}
                          onClick={_() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {_dropdownItem.name}
                        </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </div>
                  )}
                </div>
              ))}

<<<<<<< HEAD
              {/* Contact Info */}
              <div className=&quot;pt-4 border-t border-cyan-500/20&quot;>
                <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Globe className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <User className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.email}</span>
=======
              {_/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{_contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{_contactInfo.email}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Mobile CTA */}
              <div className=&quot;pt-4&quot;>
                <Link
                  href=&quot;/contact&quot;
                  onClick={() => setIsOpen(false)}
                  className=&quot;block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300&quot;
=======
              {_/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={_() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
},

export default EnhancedNavigation,
