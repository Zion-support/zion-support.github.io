
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Menu, 
  X,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard
} from 'lucide-react';

const Header: React.FC = () => {
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

const servicesDropdown = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
  };
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/it-services',
  };
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
  };
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored applications to meet your specific business needs',
    href: '/services',
  };
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless integration of existing systems',
    href: '/services',
  };
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Complete digital overhaul of your business processes',
    href: '/services',
  }

];

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

  const servicesDropdown = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/web-development',
      icon: Code
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications',
      href: '/services/mobile-development',
      icon: Smartphone
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      href: '/services/cloud-solutions',
      icon: Cloud
    },
    {
      title: 'Database Management',
      description: 'Database design and optimization',
      href: '/services/database-management',
      icon: Database
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity and data protection',
      href: '/services/security',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements',
      href: '/services/performance',
      icon: Zap
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const solutionsDropdown = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions',
      href: '/solutions/enterprise',
      icon: Building
    },
    {
      title: 'E-commerce Platforms',
      description: 'Online store development and management',
      href: '/solutions/ecommerce',
      icon: ShoppingCart
    },
    {
      title: 'Healthcare Technology',
      description: 'Specialized healthcare IT solutions',
      href: '/solutions/healthcare',
      icon: Heart
    },
    {
      title: 'Educational Platforms',
      description: 'Learning management systems',
      href: '/solutions/education',
      icon: GraduationCap
    }
  ];

  const industriesDropdown = [
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
    { name: 'Logistics', href: '/industries/logistics', icon: Truck },
    { name: 'Finance', href: '/industries/finance', icon: CreditCard },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesDropdown = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/web-development',
      icon: () => <div className="w-6 h-6 bg-blue-100 rounded" />
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android applications',
      href: '/services/mobile-apps',
      icon: () => <div className="w-6 h-6 bg-green-100 rounded" />
    },
    {
      title: 'AI Solutions',
      description: 'Artificial intelligence integration',
      href: '/services/ai-solutions',
      icon: () => <div className="w-6 h-6 bg-purple-100 rounded" />
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and migration',
      href: '/services/cloud-services',
      icon: () => <div className="w-6 h-6 bg-orange-100 rounded" />
    },
  ];

  const solutionsDropdown = [
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store setup',
      href: '/solutions/ecommerce',
      icon: () => <div className="w-6 h-6 bg-blue-100 rounded" />
    },
    {
      title: 'CRM Systems',
      description: 'Customer relationship management',
      href: '/solutions/crm',
      icon: () => <div className="w-6 h-6 bg-green-100 rounded" />
    },
  ];

  const industriesDropdown = [
    { name: 'Healthcare', href: '/industries/healthcare', icon: () => <div className="w-5 h-5 bg-red-100 rounded" /> },
    { name: 'Finance', href: '/industries/finance', icon: () => <div className="w-5 h-5 bg-blue-100 rounded" /> },
    { name: 'Education', href: '/industries/education', icon: () => <div className="w-5 h-5 bg-green-100 rounded" /> },
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: () => <div className="w-5 h-5 bg-yellow-100 rounded" /> },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (href: string) => {
    router.push(href);
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}><span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">{servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"><div className="flex items-start space-x-3">
                          <service.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              About
            </Link>

            {/* Regular Navigation Items */}
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2">{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"><Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}>{item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            className="lg:hidden bg-white border-t border-gray-200"><div className="px-4 py-2 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"><span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 space-y-1">
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">{service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
              
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;