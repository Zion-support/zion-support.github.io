import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
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
    href: '/it-services',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored applications to meet your specific business needs',
    href: '/services',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless integration of existing systems',
    href: '/services',
  },
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

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
                }`}
              >
                <span>Services</span>
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
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
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu className="h-6 w-6" />
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
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
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
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Services</span>
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
                        className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
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