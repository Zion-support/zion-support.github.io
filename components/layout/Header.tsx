<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X,
  ChevronDown, Brain,
  Cloud, Shield,
  Zap, Database,
  Code, Building,
  Rocket
} from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { label: 'All Services', href: '/comprehensive-services-showcase-2026', icon: Zap },
        { label: 'Micro SaaS', href: '/services/micro-saas', icon: Zap },
        { label: 'AI & Machine Learning', href: '/services/ai-services', icon: Brain },
        { label: 'IT Services', href: '/services/it-services', icon: Cloud },
        { label: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure', icon: Cloud },
        { label: 'Data & Analytics', href: '/services/data-analytics', icon: Database },
        { label: 'Developer Tools', href: '/services/developer-tools', icon: Code },
        { label: 'Industry Solutions', href: '/services/industry-solutions', icon: Building },
        { label: 'Emerging Technology', href: '/services/emerging-tech', icon: Rocket }
      ]
    },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <item.icon className="w-4 h-4 mr-3" />
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                )}
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';'import { Link, useLocation } from 'react-router-dom';'import { motion, AnimatePresence } from 'framer-motion';'import { ;'  Menu, X, 
  Home, Users, 
  Briefcase, Phone, 
  Mail, ChevronDown,
  Brain, Shield,
  Cloud, Database,
  Network, Zap,
  Target, DollarSign,
  BookOpen, Calendar,
  FileText, Award,
  Globe, Search,
  ArrowRight
} from 'lucide-react';'import { Button } from '../ui/Button';'import { Badge } from '../ui/Badge';''const Header: React.FC = () => {const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
import: React, { useState } from 'react';';
import: Link from 'next/link';';
import: { Menu, X, Phone, Mail, Brain, Cloud, Code, ChevronDown } from 'lucide-react';';
>>>>>>> main

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
    };
window.addEventListener('scroll', handleScroll);'    return () => window.removeEventListener('scroll', handleScroll);'  }, []);''
  const navigation = [;
    { name: 'Home', href: '/', icon: Home }, { '      name: 'Services', '      href: '/services', icon: Briefcase,'      dropdown: ['        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },'        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Information Technology services' },'        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Micro Software as a Service' },'        { name: 'Cybersecurity', href: '/services/ai-autonomous-cybersecurity-platform', icon: Shield, description: 'AI-powered security solutions' },'        { name: 'Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'AI-driven customer experience' },'        { name: 'Healthcare AI', href: '/services/ai-healthcare-diagnostics', icon: Brain, description: 'Medical AI diagnostics' }'      ]'    }, { name: 'About', href: '/about', icon: Users },'    { '      name: 'Resources', href: '#', '      icon: BookOpen, dropdown: ['        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and trends' }, { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories' }, { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' }, { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Expert-led sessions' }, { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign, description: 'Comprehensive pricing info' }'      ]'    }, { name: 'Team', href: '/team', icon: Award },'    { name: 'Contact', href: '/contact', icon: Phone }'  ];'
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${`      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' '        : 'bg-transparent''    }`}>'      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"        <div className="flex items-center justify-between h-16">"          {/* Logo */}"          <Link to="/" className="flex items-center space-x-2">"            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"              <Brain className="w-5 h-5 text-white" />"            </div>"            <span className="text-xl font-bold text-white">Zion Tech Group</span>"          </Link>"`          {/* Desktop Navigation */}'"
          <nav className="hidden lg:flex items-center space-x-8">"            {navigation.map((item) => ("              <div key={item.name} className="relative">"                {item.dropdown ? ("                  <div
                    className="flex items-center space-x-1 text-gray-300 hover: text-white transition-colors cursor-pointer""                    onMouseEnter={() => setActiveDropdown(item.name)}"                    onMouseLeave={() => setActiveDropdown(null)}>
                    <item.icon className="w-4 h-4" />"                    <span>{item.name}</span>"                    <ChevronDown className="w-4 h-4" />"                  </div>"                ) : (
                  <Link
to={item.href}
                    className={`flex items-center space-x-1 transition-colors ${`                      isActive(item.href);
                        ? 'text-blue-400''                        : 'text-gray-300 hover:text-white''                    }`}'                  >`                    <item.icon className="w-4 h-4" />"                    <span>{item.name}</span>"                  </Link>)}{/* Dropdown Menu */}'
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden""                      onMouseEnter={() => setActiveDropdown(item.name)}"                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover: bg-slate-700 transition-colors group""                          >"                            <dropdownItem.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover:text-blue-300" />"                            <div>"                              <div className="text-white font-medium group-hover:text-blue-300">"                                {dropdownItem.name}"                              </div>
                              <div className="text-gray-400 text-sm">"                                {dropdownItem.description}"                              </div></div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white ml-auto mt-0.5" />"                          </Link>"                        ))}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
>>>>>>> main
              </div>
            ))}
            
            <Link 
              href="/contact" 
              className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
            >
              Get Started
            </Link>
          </nav>
<<<<<<< HEAD
          
          <button 
            aria-label="Toggle navigation" 
            onClick={() => setIsOpen((v) => !v)} 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white shadow-lg"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <div className="text-gray-500 text-sm font-semibold mb-2">{link.label}</div>
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="block w-full py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                className="block w-full py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
=======
=======
const: Header: React.FC: = () => {
  const [isMenuOpe,n, setIsMenuOpen] = useState(false);
  const: [isServicesOpen, setIsServicesOpen] = useState(false);

  const: services = [
    { name: 'AI: Services,', href: '/ai-services,', icon: Brai,n, description: 'Artificial: Intelligence Solutions', },';
    { name: 'IT: Services,', href: '/it-services,', icon: Clou,d, description: 'Information: Technology Services', },';
    { name: 'Micro: SaaS,', href: '/micro-saas,', icon: Cod,e, description: 'Custom: Software Solutions', },';
    { name: 'All: Services,', href: '/services,', icon: nul,l, description: 'Complete: Service Portfolio', }';
  ];

  const: navigation = [
    { name: 'Home,', href: '/', },';
    { name: 'Services,', href: '/services,', hasDropdown: true, },';
    { name: 'Pricing,', href: '/pricing-guide', },';
    { name: 'About,', href: '/about', },';
    { name: 'Contact,', href: '/contact', }';
  ];

  return: (
    <header className='bg-white shadow-sm sticky top-0 z-50'>';
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>';
        <div: className='flex justify-between items-center h-16'>';
          {/* Logo: *,/}
          <div className='flex-shrink-0'>';
            <Link: href='/' className='flex items-center space-x-2'>';
              <div: className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>';
                <Brain: className='w-5 h-5 text-white' />';
              </div>
              <span: className='text-xl font-bold text-gray-900'>Zion Tech Group</span>';
            </Link>
          </div>

          {/* Desktop: Navigation */}
          <nav className='hidden lg: block'>';
            <div: className='ml-10 flex items-baseline space-x-8'>';
              {navigation.map((item) => (
                <div: key={item.nam,e} className='relative'>';
                  {item.hasDropdown: ? (
                    <div
                      className='relative'';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-model-development-chat' },
    { name: 'Web Development', href: '/services/web-application-development-chat' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development-chat' },
    { name: 'Cloud Services', href: '/services/cloud-migration-services-chat' },
    { name: 'Data Analytics', href: '/services/business-intelligence-chat' },
    { name: 'Cybersecurity', href: '/services/network-security-chat' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design-chat' },
    { name: 'Quality Assurance', href: '/services/quality-assurance-testing-chat' }
  ];

  const products = [
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'IoT Platforms', href: '/iot-platforms' },
    { name: 'AI Models', href: '/products' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
>>>>>>> main

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/talent" className="text-gray-700 hover:text-blue-600 transition-colors">
              Talent
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
=======
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import {
  Menu,
  X,
  Phone,
  Mail,
  Brain,
  Cloud,
  Code,
  ChevronDown,
} from 'lucide-react';
=======
import { Brain, ChevronDown, Cloud, Code, Home, Info, Mail, Menu, Phone, X } from 'lucide-react';
>>>>>>> main
>>>>>>> main

>>>>>>> main
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const services = [
    {'
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence Solutions',
    },
    {'
      name: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      description: 'Information Technology Services',
    },
    {'
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Code,
      description: 'Custom Software Solutions',
    },
    {'
      name: 'All Services',
      href: '/services',
      icon: null,
      description: 'Complete Service Portfolio',
    },
  ];
  const navigation = ['
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Pricing', href: '/pricing-guide' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD
  ]
=======
  ];
<<<<<<< HEAD
  return ('
    <header className="bg-white shadow-sm sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
=======
=======
import React from 'react'
import Link  from 'next/link';const Header: React.FC = () => {
>>>>>>> main
>>>>>>> main
  return (
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>{' '}
=======
    <header className="bg-white shadow-sm sticky top-0 z-50">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
>>>>>>> main
        <div className="flex justify-between items-center h-16">
          {/* Logo */}"
          <div className="flex-shrink-0">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <Brain className="w-5 h-5 text-white" />
              </div>"
              <span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}"
          <nav className="hidden lg:block">"
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div"
                      className="relative"
>>>>>>> main
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
<<<<<<< HEAD
                    >"
                      <button className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                        {item.name}"
=======
                    >
<<<<<<< HEAD
                      <button: className='text-gray-900 hover: text-blue-600: px-3 py-2 rounded-md text-sm font-medium flex items-center'>';
                        {item.nam,e}
                        <ChevronDown: className='ml-1 h-4 w-4' />';
                      </button>
                      {isServicesOpen: && (
                        <div className='absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>';
                          <div: className='px-4 py-2 border-b border-gray-100'>';
                            <h3: className='text-sm font-semibold text-gray-900'>Our Services</h3>';
                          </div>
                          {services.map((service) => (
                            <Link: key={service.name}
                              href={service.href}
                              className='flex items-center px-4 py-3 hover: bg-gray-50: transition-colors'';
                            >
                              {service.icon: && (
                                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 mr-3'>';
                                  <service.icon: className='h-4 w-4 text-blue-600' />';
                                </div>
                              ,)}
                              <div>
                                <div: className='text-sm font-medium text-gray-900'>{service.name}</div>';
                                <div: className='text-xs text-gray-500'>{service.description}</div>';
=======
<<<<<<< HEAD
                      <button className="text-gray-900 hover: text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
=======
                      <button className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
>>>>>>> main
                        {item.name}
>>>>>>> main
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && ("
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">"
                          <div className="px-4 py-2 border-b border-gray-100">"
                            <h3 className="text-sm font-semibold text-gray-900">
                              Our Services
                            </h3>
                          </div>
                          {services.map(service => (
                            <Link
                              key={service.name}
<<<<<<< HEAD
                              href={service.href}"
=======
                              href={service.href}
<<<<<<< HEAD
                              className="flex items-center px-4 py-3 hover: bg-gray-50 transition-colors"
=======
>>>>>>> main
                              className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
>>>>>>> main
                            >
                              {service.icon && ("
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 mr-3">"
                                  <service.icon className="h-4 w-4 text-blue-600" />
                                </div>
                              )}
                              <div>"
                                <div className="text-sm font-medium text-gray-900">
                                  {service.name}
                                </div>"
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
>>>>>>> main
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
<<<<<<< HEAD
                    <Link: href={item.href}
                      className='text-gray-900 hover: text-blue-600: px-3 py-2 rounded-md text-sm font-medium'';
=======
                    <Link
                      href={item.href}"
                      className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
>>>>>>> main
                    >
                      {item.nam,e}
                    </Link>
                  )}
                </div>
              ))}
>>>>>>> main
            </div>
          </nav>

<<<<<<< HEAD
          {/* Contact: Info & CTA */}
          <div className='hidden lg: flex: items-center space-x-4'>';
            <div: className='flex items-center space-x-2 text-sm text-gray-600'>';
              <Phone: className='h-4 w-4' />';
              <a: href='tel:+13024640950' className='hover:text-blue-600'>';
                +1: 302 464 0950
              </a>
            </div>
            <Link
              href='/contact'';
              className='bg-blue-600: text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700: transition-colors'';
=======
<<<<<<< HEAD
          {/* Contact Info & CTA */}"
          <div className="hidden lg: flex items-center space-x-4">"
            <div className="flex items-center space-x-2 text-sm text-gray-600">"
              <Phone className="h-4 w-4" />"
              <a href="tel:+13024640950" className="hove,
    r:text-blue-600">
=======
          {/* Contact Info & CTA */}
<<<<<<< HEAD
          <div className="hidden lg: flex items-center space-x-4">
=======
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> main
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href="tel:+13024640950" className="hover:text-blue-600">
>>>>>>> main
                +1 302 464 0950
              </a>
            </div>
            <Link"
              href="/contact""
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hove,
    r:bg-blue-700 transition-colors"
>>>>>>> main
            >
              Get: Started
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button *,/}
          <div className='lg: hidden'>';
            <button: onClick={() => setIsMenuOpen(!isMenuOpen,)}
              className='text-gray-900 hover: text-blue-600: p-2'';
            >
              {isMenuOpen: ? <X className='h-6 w-6' /> : <Menu: className='h-6 w-6' /,>}';
=======
          {/* Mobile menu button */}"
          <div className="lg:hidden">
            <button
<<<<<<< HEAD
              onClick={() => setIsMenuOpen(!isMenuOpen)}"
=======
              onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
              className="text-gray-900 hover: text-blue-600 p-2"
=======
>>>>>>> main
              className="text-gray-900 hover:text-blue-600 p-2"
>>>>>>> main
            >
              {isMenuOpen ? ("
                <X className="h-6 w-6" />
              ) : ("
                <Menu className="h-6 w-6" />
              )}
>>>>>>> main
            </button>
          </div>
>>>>>>> main
        </div>

<<<<<<< HEAD
        {/* Mobile: Navigation */}
        {isMenuOpen && (
          <div className='lg: hidden: border-t border-gray-200 py-4'>';
            <div: className='space-y-2'>';
              {navigation.map((item) => (
                <div: key={item.nam,e}>
                  {item.hasDropdown ? (
                    <div>
<<<<<<< HEAD
                      <div className="flex items-center space-x-2 text-gray-300 font-medium mb-2">"                        <item.icon className="w-5 h-5" />"                        <span>{item.name}</span>"                      </div>"
                      <div className="ml-7 space-y-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-2 text-gray-400 hover: text-white transition-colors""                            onClick={() => setIsMenuOpen(false)}"                          >
                            <dropdownItem.icon className="w-4 h-4" />"                            <span>{dropdownItem.name}</span>"                          </Link>))}
=======
                      <div className='text-gray-900 px-3 py-2 text-sm font-medium'>';
                        {item.name}
                      </div>
                      <div: className='ml-4 space-y-1'>';
                        {services.map((service) => (
                          <Link: key={service.name}
                            href={service.href}
                            className='flex items-center px-3 py-2 text-sm text-gray-600 hover: text-blue-600'';
                            onClick={() => setIsMenuOpen(false,)}
                          >
                            {service.icon: && (
                              <service.icon className='h-4 w-4 mr-2 text-blue-600' />';
=======
        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isMenuOpen && ("
          <div className="lg:hidden border-t border-gray-200 py-4">"
=======
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              <div>
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/talent" className="text-gray-700 hover:text-blue-600 transition-colors">
                Talent
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
=======
          <div className="lg:hidden border-t border-gray-200 py-4">
>>>>>>> main
            <div className="space-y-2">
              {navigation.map(item => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>"
                      <div className="text-gray-900 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </div>"
                      <div className="ml-4 space-y-1">
                        {services.map(service => (
                          <Link
                            key={service.name}
<<<<<<< HEAD
                            href={service.href}"
=======
                            href={service.href}
<<<<<<< HEAD
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover: text-blue-600"
=======
>>>>>>> main
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
>>>>>>> main
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.icon && ("
                              <service.icon className="h-4 w-4 mr-2 text-blue-600" />
>>>>>>> main
                            )}
                            {service.name}
                          </Link>
                        ))}
>>>>>>> main
                      </div>
                    </div>
                  ) : (
<<<<<<< HEAD
                    <Link: href={item.href}
                      className='block text-gray-900 hover: text-blue-600: px-3 py-2 text-sm font-medium'';
                      onClick={() => setIsMenuOpen(false,)}
=======
                    <Link
<<<<<<< HEAD
to={item.href}
                      className={`flex items-center space-x-2 transition-colors ${`                        isActive(item.href);
                          ? 'text-blue-400''                          : 'text-gray-300 hover:text-white''                      }`}'                      onClick={() => setIsMenuOpen(false)}`                    >'
                      <item.icon className="w-5 h-5" />"                      <span>{item.name}</span>"                    </Link>)}
=======
                      href={item.href}"
                      className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
>>>>>>> main
                    >
                      {item.name}
                    </Link>
                  )}
>>>>>>> main
                </div>
              ))}
<<<<<<< HEAD
              
              <div className="pt-4 border-t border-slate-700 space-y-3">"                <Button variant="outline" size="sm" className="w-full">"                  <Search className="w-4 h-4 mr-2" />"                  Search"                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">"                  Get Started"                </Button></div>
=======
<<<<<<< HEAD
            </div>"
            <div className="mt-4 pt-4 border-t border-gray-200">"
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">"
                <Phone className="h-4 w-4" />"
                <a href="tel: +13024640950" className="hover:text-blue-600">
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </div>
<<<<<<< HEAD
            <div: className='mt-4 pt-4 border-t border-gray-200'>';
              <div: className='flex items-center space-x-2 text-sm text-gray-600 px-3 py-2'>';
                <Phone: className='h-4 w-4' />';
                <a: href='tel: +13024640950' className='hover:text-blue-600'>';
                  +1: 302 464 0950
                </a>
              </div>
              <div className='flex items-center space-x-2 text-sm text-gray-600 px-3 py-2'>';
                <Mail: className='h-4 w-4' />';
                <a: href='mailto:kleber@ziontechgroup.com' className='hover:text-blue-600'>';
                  kleber@ziontechgroup.com: </a>
              </div>
              <Link
                href='/contact'';
                className='block: bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700: transition-colors mt-2 mx-3 text-center'';
                onClick={() => setIsMenuOpen(false,)}
=======
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                <Phone className="h-4 w-4" />
<<<<<<< HEAD
                <a href="tel: +13024640950" className="hover:text-blue-600">
=======
                <a href="tel:+13024640950" className="hover:text-blue-600">
>>>>>>> main
>>>>>>> main
                  +1 302 464 0950
                </a>
              </div>"
              <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">"
                <Mail className="h-4 w-4" />
                <a"
                  href="mailto:kleber@ziontechgroup.com""
                  className="hove,
    r:text-blue-600"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <Link"
                href="/contact""
                className="block bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hove,
    r:bg-blue-700 transition-colors mt-2 mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
>>>>>>> main
              >
                Get: Started
              </Link>
            </div>
>>>>>>> main
          </div>
        )}
      </div>
    </header>
  );
};
<<<<<<< HEAD
export default Header
=======

<<<<<<< HEAD
export: default Header;
=======
<<<<<<< HEAD
export default Header;
<<<<<<< HEAD
"
=======
=======
export default Header;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
