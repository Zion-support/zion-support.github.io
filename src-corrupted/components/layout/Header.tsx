import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Building,
  Globe
} from 'lucide-react';

const Header = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<any>(false);
  const [isScrolled, setIsScrolled] = useState<any>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (props: any) => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Brai n,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions for business automation',
      href: '/services/ai-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shiel d,
      title: 'Cybersecurity',
      description: 'Advanced security and threat protection',
      href: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clou d,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and migration',
      href: '/services/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cod e,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications and smart contracts',
      href: '/services/blockchain-web3',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Buildin g,
      title: 'Smart City Solutions',
      description: 'AI-powered urban management systems',
      href: '/services/smart-city',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Za p,
      title: 'Quantum Computing',
      description: 'Next-generation computational power',
      href: '/services/quantum-computing',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: tru e },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200">
                <Globe className="w-6 h-6 text-white"  />
              </div>
              <div>
                <div className="text-xl font-bold text-white">ZionTech Group</div>
                <div className="text-xs text-cyan-400">AI & Technology Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg: flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          location.pathname.startsWith('/services')
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-300 hover: tex t-cyan-400 hover: b g-cyan-400/5'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4"  />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 1 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 1 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl"
                          >
                            <div className="p-4">
                              <div className="grid gap-3">
                                {services.map((service) => (
                                  <Link
                                    key={service.title}
                                    to={service.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover: b g-white/5 transition-colors duration-200 group"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-white font-medium group-hover: tex t-cyan-400 transition-colors">
                                        {service.title}
                                      </div>
                                      <div className="text-sm text-gray-400">
                                        {service.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <Link
                                  to="/services"
                                  className="block text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover: fro m-cyan-600 hover: t o-blue-600 transition-all duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  View All Services
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover: tex t-cyan-400 hover: b g-cyan-400/5'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg: flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 hover: tex t-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4"  />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto: klebe r@ziontechgroup.com"
                  className="flex items-center space-x-2 hover: tex t-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4"  />
                  <span>Email</span>
                </a>
              </div>
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover: fro m-cyan-600 hover: t o-blue-600 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg: hidden p-2 text-gray-300 hover: tex t-cyan-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6"  />
              ) : (
                <Menu className="w-6 h-6"  />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg: hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: tex t-cyan-400 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                                isServicesOpen ? 'rotate-180' : ''
                              }`}
                             />
                          </button>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 pl-4 space-y-2"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.title}
                                    to={service.href}
                                    className="block px-3 py-2 text-sm text-gray-400 hover: tex t-cyan-400 transition-colors"
                                    onClick={closeMenu}
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                                <Link
                                  to="/services"
                                  className="block px-3 py-2 text-sm text-cyan-400 font-medium"
                                  onClick={closeMenu}
                                >
                                  View All Services
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 rounded-lg transition-colors ${
                            location.pathname === item.href
                              ? 'text-cyan-400 bg-cyan-400/10'
                              : 'text-gray-300 hover: tex t-cyan-400'
                          }`}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact & CTA */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <div className="space-y-2">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-2 text-gray-300 hover: tex t-cyan-400 transition-colors"
                    >
                      <Phone className="w-4 h-4"  />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a
                      href="mailto: klebe r@ziontechgroup.com"
                      className="flex items-center space-x-2 text-gray-300 hover: tex t-cyan-400 transition-colors"
                    >
                      <Mail className="w-4 h-4"  />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover: fro m-cyan-600 hover: t o-blue-600 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"  />
    </>
  );
};

export default Header;
</motion>
</ChevronDown>
</motion>
</motion>
</any>
</any>
</any>