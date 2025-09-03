import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Brain, Globe, Zap, Building } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
<<<<<<< HEAD
    { name: 'Home,', href: '/'},';
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Shield, 
  Globe, 
  Zap, 
  Building ;
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

    { name: 'Home', href: '/', icon: Globe } { name: 'Micro SAAS Services', href: '/micro-saas', icon: Zap } { name: 'Comprehensive Services', href: '/services', icon: Brain } { name: 'Pricing', href: '/pricing', icon: Building }
  ]
=======
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Micro SAAS Services', href: '/micro-saas', icon: Zap },
    { name: 'Comprehensive Services', href: '/services', icon: Brain },
    { name: 'Pricing', href: '/pricing', icon: Building }
  ];
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI-Powered CRM', href: '/services/ai-services#ai-powered-crm' },
        { name: 'Quantum Computing', href: '/services/ai-services#quantum-computing' },
        { name: 'Edge AI Computing', href: '/services/ai-services#edge-ai-computing' }
      ]
<<<<<<< HEAD
} {
=======
    },
    {
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
      name: 'Emerging Technologies',
      services: [
        { name: 'Blockchain Solutions', href: '/services/it-services#blockchain' },
        { name: 'AR/VR Business', href: '/services/it-services#ar-vr' },
        { name: 'IoT Intelligence', href: '/services/it-services#iot' }
      ]
    },
    {
      name: 'Industry Solutions',
      services: [
        { name: 'Healthcare IT', href: '/services/it-services#healthcare' },
        { name: 'FinTech Solutions', href: '/services/it-services#fintech' },
        { name: 'GreenTech Analytics', href: '/services/it-services#greentech' }
      ]
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

<<<<<<< HEAD
  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' } {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'} {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'}];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)};

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null)};

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20'
          : 'bg-transparent';
}`}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
    { name: 'Contact', href: '/contact' }];

    setActiveDropdown(activeDropdown === itemName ? null : itemName)}
  };

  return ('
    <nav className='bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0>
            <Link href='/' className='text-white text-2xl font-bold hover:text-blue-300 transition-colors'>
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-blue-300 transition-colors"
              Zion Tech Group
=======
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zion-blue-light hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
              className='text-white hover:text-blue-300 p-2 rounded-md transition-colors'
            >'
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              className="text-white hover: text-blue-300 p-2 rounded-md transition-colors"
              {isOpen ? (
                <X className="h-6 w-6" />
                <Menu className="h-6 w-6" />
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>

            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            
            {/* Services Dropdown */}
            <div className="relative group">
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services
                <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services
                <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Services

            {/* Solutions Dropdown */}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                <span>Solutions</span>
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Solutions Overview
                <Link href="/solutions/ai-content-creation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Creation
                <Link href="/solutions/customer-support" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Customer Support
                <Link href="/solutions/email-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Email Automation
                <Link href="/solutions/workflow-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Workflow Automation
                <Link href="/case-studies" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Case Studies

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
import React { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}

  const navigation = [
    { name: 'Home', href: '/' } { name: 'About', href: '/about' } { name: 'Services', href: '/services' } { name: 'Solutions', href: '/solutions' } { name: 'Team', href: '/team' } { name: 'Careers', href: '/careers' } { name: 'Blog', href: '/blog' } { name: 'Contact', href: '/contact' }

    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm';
}`}>
          <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
                  key={item.name}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-zion-slate-light hover:text-white hover:bg-white/10"
                  <Icon className="w-4 h-4" />
              )})}

                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors"
                <Shield className="w-4 h-4" />
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                                key={service.name}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                                {service.name}

            {/* Contact Button */}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors"
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>

          <div className="lg:hidden">
              className="text-zion-slate-light hover:text-white focus:outline-none focus:text-white"
=======
              className="text-zion-blue-light hover:text-white p-2"
            >
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zion-blue-dark/95">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zion-blue-light hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;