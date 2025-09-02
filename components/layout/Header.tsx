import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceCategories = [
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas', description: 'Innovative SaaS applications' },
    { name: 'IT Services', href: '/services/it-services', description: 'Infrastructure & cloud solutions' },
    { name: 'AI Services', href: '/services/ai-services', description: 'Artificial intelligence solutions' },
    { name: 'All Services', href: '/services', description: 'Complete service portfolio' },
  ];

  const microSaasServices = [
    { name: 'AI Content Generator', href: '/services/ai-content-generator' },
    { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
    { name: 'AI Video Editor', href: '/services/ai-video-editor' },
    { name: 'AI Code Reviewer', href: '/services/ai-code-reviewer' },
    { name: 'View All Micro SaaS', href: '/services/micro-saas' },
  ];

  const itServices = [
    { name: 'Edge Computing', href: '/services/edge-computing-infrastructure' },
    { name: 'Blockchain Development', href: '/services/blockchain-development' },
    { name: 'Zero Trust Security', href: '/services/zero-trust-architecture' },
    { name: '5G Network Deployment', href: '/services/5g-network-deployment' },
    { name: 'View All IT Services', href: '/services/it-services' },
  ];

  const aiServices = [
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
    { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },
    { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
    { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
    { name: 'View All AI Services', href: '/services/ai-services' },
  ];

  const solutionCategories = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale implementations' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Business modernization' },
    { name: 'Custom Development', href: '/solutions/custom-development', description: 'Tailored solutions' },
    { name: 'All Solutions', href: '/solutions', description: 'Complete solution portfolio' },
  ];

  return (
    <motion.header 
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-900">Zion Tech Group</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="grid grid-cols-3 gap-0">
                    {/* Micro SaaS Column */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Micro SaaS</h3>
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* IT Services Column */}
                    <div className="p-4 border-l border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">IT Services</h3>
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* AI Services Column */}
                    <div className="p-4 border-l border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">AI Services</h3>
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* View All Services */}
                  <div className="border-t border-gray-100 p-4">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Solutions
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {solutionCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden border-t border-gray-200 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-700 font-medium mb-3">Services</div>
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block py-2 pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Solutions */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-700 font-medium mb-3">Solutions</div>
                  {solutionCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block py-2 pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;