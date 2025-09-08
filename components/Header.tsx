import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
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
    href: '/cybersecurity',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/services',
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
  },
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
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2"
                      >
                        {servicesDropdown.map((service, index) => (
                          <button
                            key={index}
                            onClick={() => handleServiceClick(service.href)}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left w-full"
                          >
                            <service.icon className="h-5 w-5 text-blue-600" />
                            <div>
                              <h3 className="font-medium text-gray-900 text-sm">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-xs">
                                {service.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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