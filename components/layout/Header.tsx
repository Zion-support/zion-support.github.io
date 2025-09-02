import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleSolutions = () => setSolutionsOpen(!solutionsOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      <Link href="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        AI Services
                      </Link>
                      <Link href="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        IT Services
                      </Link>
                      <Link href="/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Micro SaaS
                      </Link>
                      <Link href="/cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cloud Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </Link>
              
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              
              <Link href="/pricing" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                
                <div>
                  <button
                    onClick={toggleServices}
                    className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                  >
                    Services
                    <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        <Link href="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                          AI Services
                        </Link>
                        <Link href="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                          IT Services
                        </Link>
                        <Link href="/micro-saas" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                          Micro SaaS
                        </Link>
                        <Link href="/cloud-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                          Cloud Services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                
                <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  Case Studies
                </Link>
                
                <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>
                
                <Link href="/pricing" className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;