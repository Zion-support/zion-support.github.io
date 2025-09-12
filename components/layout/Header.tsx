import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Button from '../ui/Button';

const Header: React.FC = () => {
  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
=======
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Product', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/pricing-comparison' },
  ];

  const productDropdown = [
    { name: 'AI Code Assistant', href: '/ai-assistant', description: 'Intelligent code completion and suggestions' },
    { name: 'Cloud Platform', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
    { name: 'Automation Hub', href: '/automation', description: 'AI-powered workflow automation' },
    { name: 'Analytics', href: '/analytics', description: 'Real-time insights and reporting' },
    { name: 'Micro SaaS Services', href: '/micro-saas-services', description: 'Professional business solutions' },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Futuristic Background Glow */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions and ML models' },
    { name: 'Cloud Architecture', href: '/services/cloud-services', description: 'Scalable cloud infrastructure' },
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Decentralized applications' },
    { name: 'IoT Platforms', href: '/services/iot-platforms', description: 'Connected device solutions' },
    { name: 'Web Development', href: '/services/web-development', description: 'Modern web applications' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Zion Tech Group - Homepage">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="Home page"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button 
                className="flex items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                  role="menu"
                  aria-label="Services submenu"
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800"
                      role="menuitem"
                      tabIndex={isServicesOpen ? 0 : -1}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400 mt-1">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="About us page"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="Contact us page"
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get started with your project"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden bg-gray-900 border-t border-gray-700 py-4 animate-in slide-in-from-top-5 duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Home page"
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-4 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-white hover:bg-gray-800 px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="About us page"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact us page"
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-4 pt-2">
                <Link 
                  href="/contact" 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Get started with your project"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
=======
>>>>>>> origin/content/blog-sept12
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin/content/blog-sept12
