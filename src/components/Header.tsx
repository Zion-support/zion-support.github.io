import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cpu, 
  Heart, 
  Rocket, 
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'AI & Research',
      items: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Quantum & Advanced',
      items: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: <Cpu className="w-4 h-4" /> },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: <Heart className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Innovation Hub',
      items: [
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase-2028', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'All Services', path: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-gradient-to-r from-black/90 via-slate-900/90 to-black/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((category, index) => (
                        <div key={index}>
                          <h3 className="text-sm font-semibold text-cyan-400 mb-2 px-2">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.icon}
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/solutions" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/solutions') ? 'text-cyan-400' : ''
              }`}
            >
              Solutions
            </Link>
            
            <Link 
              to="/about" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/about') ? 'text-cyan-400' : ''
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/blog') ? 'text-cyan-400' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                isActive('/contact') ? 'text-cyan-400' : ''
              }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                {/* Services Section */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {services.map((category, index) => (
                          <div key={index}>
                            <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                              {category.category}
                            </h4>
                            <div className="space-y-1">
                              {category.items.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {service.icon}
                                  <span className="text-sm">{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/solutions" 
                  className={`block text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                    isActive('/solutions') ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                
                <Link 
                  to="/about" 
                  className={`block text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                    isActive('/about') ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                <Link 
                  to="/blog" 
                  className={`block text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                    isActive('/blog') ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                
                <Link 
                  to="/contact" 
                  className={`block text-white hover:text-cyan-400 transition-colors duration-200 py-2 ${
                    isActive('/contact') ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <Link 
                  to="/contact" 
                  className="block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
