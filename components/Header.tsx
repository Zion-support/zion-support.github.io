import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

const servicesDropdown = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/cybersecurity',
  },
  {
    icon: Network,
    title: 'Blockchain',
    description: 'Decentralized solutions and smart contracts',
    href: '/blockchain',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration',
    href: '/services',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Custom software and web applications',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Micro SaaS',
    description: 'Ready-to-deploy software solutions',
    href: '/micro-saas',
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const handleServiceClick = (href: string) => {
    router.push(href);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {servicesDropdown.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceClick(service.href)}
                          className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <service.icon className="h-5 w-5 mr-3 text-blue-600" />
                          <div className="text-left">
                            <div className="font-medium">{service.title}</div>
                            <div className="text-xs text-gray-500">{service.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={toggleServices}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1"
                      >
                        {servicesDropdown.map((service, index) => (
                          <button
                            key={index}
                            onClick={() => handleServiceClick(service.href)}
                            className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          >
                            <service.icon className="h-4 w-4 mr-2 text-blue-600" />
                            <div className="text-left">
                              <div className="font-medium">{service.title}</div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;