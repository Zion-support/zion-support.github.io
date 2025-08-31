import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Globe,
  Cpu,
  Database,
  Network,
  Rocket,
  Code,
  Server,
  Microchip,
  Lock,
  ShieldCheck,
  Target,
  Handshake,
  Lightbulb,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export const EnhancedHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-zion-blue-darker border-b border-zion-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-zion-slate-light">
              <a href="tel:+13024640950" className="flex items-center hover:text-zion-cyan transition-colors">
                <Phone className="w-3 h-3 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-zion-cyan transition-colors">
                <Mail className="w-3 h-3 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <span className="flex items-center">
                <MapPin className="w-3 h-3 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-slate-light">Innovation & Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
                isActive('/') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <Zap className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-3 h-3" />
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
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            Micro SAAS
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li>
                              <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Star className="w-3 h-3 mr-2" />
                                All Services
                              </Link>
                            </li>
                            <li>
                              <Link to="/micro-saas" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Rocket className="w-3 h-3 mr-2" />
                                Micro SAAS Solutions
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Brain className="w-3 h-3 mr-2" />
                                AI Services
                              </Link>
                            </li>
                            <li>
                              <Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Server className="w-3 h-3 mr-2" />
                                IT Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Specialized Solutions
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li>
                              <Link to="/services/ai-cybersecurity-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <ShieldCheck className="w-3 h-3 mr-2" />
                                AI Cybersecurity
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/ai-healthcare-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Target className="w-3 h-3 mr-2" />
                                AI Healthcare
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/ai-supply-chain-optimization" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <TrendingUp className="w-3 h-3 mr-2" />
                                Supply Chain AI
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/ai-quantum-hybrid-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                                <Microchip className="w-3 h-3 mr-2" />
                                Quantum AI Platform
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-zion-purple/20">
                        <Link 
                          to="/services" 
                          className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center group"
                        >
                          View All Services
                          <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <Brain className="w-4 h-4" />
                <span>Solutions</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Industry Solutions
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link to="/healthcare-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Healthcare & Life Sciences
                              </Link>
                            </li>
                            <li>
                              <Link to="/financial-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Financial Services
                              </Link>
                            </li>
                            <li>
                              <Link to="/manufacturing-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Manufacturing & Supply Chain
                              </Link>
                            </li>
                            <li>
                              <Link to="/retail-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Retail & E-commerce
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                            <HardDrive className="w-4 h-4 mr-2" />
                            Technology Solutions
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link to="/cloud-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Cloud & DevOps
                              </Link>
                            </li>
                            <li>
                              <Link to="/cybersecurity-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Cybersecurity
                              </Link>
                            </li>
                            <li>
                              <Link to="/data-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                                Data & Analytics
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
                isActive('/about') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              About
            </Link>

            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
                isActive('/pricing') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
                isActive('/contact') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Contact
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <FileText className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-6">
                      <ul className="space-y-3 text-sm">
                        <li>
                          <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                            <HelpCircle className="w-3 h-3 mr-2" />
                            Help Center
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                            <FileText className="w-3 h-3 mr-2" />
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                            <BarChart3 className="w-3 h-3 mr-2" />
                            Blog & Insights
                          </Link>
                        </li>
                        <li>
                          <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                            <Award className="w-3 h-3 mr-2" />
                            Case Studies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-64 pl-10 pr-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-zion-slate-light placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/30"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="space-y-4">
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/') ? 'text-zion-cyan' : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  Home
                </Link>
                
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-3 ml-4 space-y-2">
                      <Link to="/services" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        All Services
                      </Link>
                      <Link to="/micro-saas" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Micro SAAS
                      </Link>
                      <Link to="/ai-services" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Services
                      </Link>
                      <Link to="/it-services" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        IT Services
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                    <div className="mt-3 ml-4 space-y-2">
                      <Link to="/healthcare-solutions" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Healthcare
                      </Link>
                      <Link to="/financial-solutions" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Financial
                      </Link>
                      <Link to="/manufacturing-solutions" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Manufacturing
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  onClick={closeAllMenus}
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/about') ? 'text-zion-cyan' : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  About
                </Link>

                <Link
                  to="/pricing"
                  onClick={closeAllMenus}
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/pricing') ? 'text-zion-cyan' : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  Pricing
                </Link>

                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/contact') ? 'text-zion-cyan' : 'text-zion-slate-light hover:text-zion-cyan'
                  }`}
                >
                  Contact
                </Link>

                <div>
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isResourcesOpen && (
                    <div className="mt-3 ml-4 space-y-2">
                      <Link to="/help" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Help Center
                      </Link>
                      <Link to="/faq" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        FAQ
                      </Link>
                      <Link to="/blog" onClick={closeAllMenus} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Blog
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-zion-purple/20">
                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium text-center hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};