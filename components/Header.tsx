import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';

const servicesDropdown = [
  {
    "icon": Brain,
    "title": 'AI & Machine Learning',
    "description": 'Intelligent solutions for business automation',
    "href": '/ai-services',
  },
  {
    "icon": Shield,
    "title": 'Cybersecurity',
    "description": 'Advanced security and threat protection',
    "href": '/it-services',
  },
  {
    "icon": Cloud,
    "title": 'Cloud Infrastructure',
    "description": 'Scalable cloud solutions and migration',
    "href": '/it-services',
  },
  {
    "icon": Code,
    "title": 'Custom Software Development',
    "description": 'Tailored applications to meet your specific business needs',
    "href": '/services',
  },
  {
    "icon": Building,
    "title": 'Micro SaaS Solutions',
    "description": 'Scalable software as a service solutions',
    "href": '/micro-saas',
  },
  {
    "icon": Zap,
    "title": 'Quantum Computing',
    "description": 'Next-generation computational power',
    "href": '/services',
  }
];

const navigation = [
  { "name": 'Home', "href": '/' },
  { "name": 'About', "href": '/about' },
  { "name": 'Services', "href": '/services', "hasDropdown": true, "dropdownItems": servicesDropdown },
  { "name": 'Solutions', "href": '/solutions' },
  { "name": 'Pricing', "href": '/pricing' },
  { "name": 'Blog', "href": '/blog' },
  { "name": 'Contact', "href": '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [router.asPath]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">Zion Tech Group</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <button
                  className="flex items-center text-lg font-medium hover:text-purple-400 transition-colors"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.name} <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link href={item.href} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  {item.name}
                </Link>
              )}
              {item.hasDropdown && isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-80 bg-slate-800 rounded-lg shadow-xl p-4 grid grid-cols-1 gap-4"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {item.dropdownItems?.map((dropdownItem) => {
                    const IconComponent = dropdownItem.icon;
                    return (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                      >
                        <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-blue-400 transition-colors" />
                        <div>
                          <h4 className="text-white font-semibold">{dropdownItem.title}</h4>
                          <p className="text-gray-400 text-sm">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-slate-900 shadow-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="flex items-center w-full text-left text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                          {item.name} <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {item.dropdownItems?.map((dropdownItem) => {
                                const IconComponent = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.title}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors text-gray-300 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <IconComponent className="w-5 h-5 text-purple-300" />
                                    <span>{dropdownItem.title}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-white hover:text-purple-400 transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a href="tel:+13024640950" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" /> +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" /> kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-sm">364 E Main St STE 1008<br /> Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
