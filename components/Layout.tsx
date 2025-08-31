import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  ChevronDown
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    { name: 'AI & Machine Learning', href: '/services#ai-ml' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'Cybersecurity', href: '/services#security' },
    { name: 'Data Analytics', href: '/services#data' },
    { name: 'Digital Transformation', href: '/services#transformation' },
    { name: 'IoT Solutions', href: '/services#iot' },
    { name: 'Blockchain & Web3', href: '/services#blockchain' },
    { name: 'Mobile Development', href: '/services#mobile' },
    { name: 'Technology Consulting', href: '/services#consulting' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.name === 'Services' ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-xl"
                          >
                            <div className="p-4">
                              {serviceCategories.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-slate-300 hover:text-white transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-700">
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </div>
              
              <p className="text-slate-300 mb-6 max-w-md">
                Leading technology solutions provider specializing in digital transformation, 
                AI, cloud architecture, and cybersecurity. We help businesses innovate and thrive.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {serviceCategories.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products#micro-saas"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Micro SAAS Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#ai-services"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    AI-Powered Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#cloud-solutions"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products#security-solutions"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 p-8 bg-slate-700/50 rounded-2xl">
            {[
              {
                icon: Phone,
                title: 'Phone',
                details: ['+1 302 464 0950'],
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: Mail,
                title: 'Email',
                details: ['kleber@ziontechgroup.com'],
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: MapPin,
                title: 'Office',
                details: ['364 E Main St STE 1008', 'Middletown DE 19709'],
                color: 'from-green-500 to-emerald-600'
              }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-3">{contact.title}</h4>
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-slate-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
};

export default Layout;
