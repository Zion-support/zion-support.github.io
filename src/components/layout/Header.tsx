import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
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
  Phone,
  Mail,
  MapPin,
  Globe,
  Code,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', price: '$2,500/month' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', price: '$3,200/month' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', price: '$2,800/month' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', price: '$5,000/month' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', price: '$1,800/month' },
        { name: 'AI Content Optimization', path: '/services/ai-content-optimizer-pro', price: '$1,200/month' },
        { name: 'AI Autonomous Business Operations', path: '/services/ai-autonomous-business-operations', price: '$5,999/month' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      services: [
        { name: 'Micro CRM Platform', path: '/services/micro-crm', price: '$99/month' },
        { name: 'AI Project Management', path: '/services/ai-project-management-platform', price: '$299/month' },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', price: '$199/month' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', price: '$399/month' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', price: '$599/month' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', price: '$249/month' }
      ]
    },
    {
      title: 'IT Infrastructure',
      icon: Server,
      services: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', price: '$1,500/month' },
        { name: 'Cybersecurity Suite', path: '/services/cybersecurity', price: '$2,000/month' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', price: '$3,500/month' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge', price: '$2,200/month' },
        { name: 'Quantum Computing', path: '/services/quantum-computing-solutions', price: '$4,500/month' },
        { name: 'Green IT Solutions', path: '/services/green-it', price: '$1,800/month' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', price: '$3,800/month' },
        { name: 'Digital Twin Platform', path: '/services/digital-twin', price: '$2,600/month' },
        { name: 'Space Technology', path: '/services/space-tech', price: '$6,000/month' },
        { name: 'Sustainability Analytics', path: '/services/sustainability', price: '$1,900/month' },
        { name: '5G Enterprise Solutions', path: '/services/5g-enterprise', price: '$4,200/month' },
        { name: 'Edge AI Computing', path: '/services/ai-iot-edge-computing-platform', price: '$3,600/month' },
        { name: 'Quantum AI Trading Platform', path: '/services/quantum-ai-trading-platform', price: '$12,999/month' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Industry Solutions',
      icon: Building2,
      solutions: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', price: 'Custom Pricing' },
        { name: 'Financial Services', path: '/solutions/financial', price: 'Custom Pricing' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', price: 'Custom Pricing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', price: 'Custom Pricing' },
        { name: 'Education Technology', path: '/solutions/education', price: 'Custom Pricing' },
        { name: 'Government Solutions', path: '/solutions/government', price: 'Custom Pricing' }
      ]
    },
    {
      title: 'Technology Solutions',
      icon: Cpu,
      solutions: [
        { name: 'AI-Powered Analytics', path: '/solutions/ai-analytics', price: 'Custom Pricing' },
        { name: 'Cybersecurity Framework', path: '/solutions/cybersecurity', price: 'Custom Pricing' },
        { name: 'Cloud Migration', path: '/solutions/cloud-migration', price: 'Custom Pricing' },
        { name: 'Data Center Modernization', path: '/solutions/data-center', price: 'Custom Pricing' },
        { name: 'Network Infrastructure', path: '/solutions/network', price: 'Custom Pricing' },
        { name: 'Digital Workplace', path: '/solutions/digital-workplace', price: 'Custom Pricing' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-2xl' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-slate-light">Innovation • Security • Growth</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <Zap className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.services.map((service, serviceIndex) => (
                                <li key={serviceIndex}>
                                  <Link
                                    to={service.path}
                                    className="flex items-center justify-between text-zion-slate-light hover:text-zion-cyan transition-colors group"
                                    onClick={closeAllMenus}
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform">
                                      {service.name}
                                    </span>
                                    <span className="text-xs text-zion-purple/70 bg-zion-purple/10 px-2 py-1 rounded">
                                      {service.price}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-zion-purple/20">
                        <Link
                          to="/services"
                          className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                          onClick={closeAllMenus}
                        >
                          View All Services
                          <TrendingUp className="w-4 h-4 ml-2" />
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
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <Brain className="w-4 h-4" />
                <span>Solutions</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {solutionCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.solutions.map((solution, solutionIndex) => (
                                <li key={solutionIndex}>
                                  <Link
                                    to={solution.path}
                                    className="flex items-center justify-between text-zion-slate-light hover:text-zion-cyan transition-colors group"
                                    onClick={closeAllMenus}
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform">
                                      {solution.name}
                                    </span>
                                    <span className="text-xs text-zion-purple/70 bg-zion-purple/10 px-2 py-1 rounded">
                                      {solution.price}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <Building2 className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsCompanyOpen(true)}
                    onMouseLeave={() => setIsCompanyOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-4 space-y-3">
                      <Link
                        to="/about"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/team"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Our Team
                      </Link>
                      <Link
                        to="/careers"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/news"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        News & Updates
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan text-zion-slate-light"
              >
                <FileText className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 z-50"
                  >
                    <div className="p-4 space-y-3">
                      <Link
                        to="/documentation"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Documentation
                      </Link>
                      <Link
                        to="/help-center"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Help Center
                      </Link>
                      <Link
                        to="/blog"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Blog & Insights
                      </Link>
                      <Link
                        to="/case-studies"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/webinars"
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                        onClick={closeAllMenus}
                      >
                        Webinars & Events
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
                isActive('/contact') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/get-started"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              onClick={closeAllMenus}
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
              {/* Mobile Services */}
              <div className="space-y-3">
                <h3 className="text-zion-cyan font-semibold text-lg">Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-zion-slate-light font-medium flex items-center">
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.title}
                      </h4>
                      <ul className="ml-6 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link
                              to={service.path}
                              className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="space-y-3">
                <h3 className="text-zion-cyan font-semibold text-lg">Solutions</h3>
                <div className="grid grid-cols-1 gap-3">
                  {solutionCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-zion-slate-light font-medium flex items-center">
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.title}
                      </h4>
                      <ul className="ml-6 space-y-1">
                        {category.solutions.slice(0, 3).map((solution, solutionIndex) => (
                          <li key={solutionIndex}>
                            <Link
                              to={solution.path}
                              className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                              onClick={closeAllMenus}
                            >
                              {solution.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Company & Resources */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-zion-cyan font-semibold text-lg">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/about"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/careers"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-zion-cyan font-semibold text-lg">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/documentation"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/help-center"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors block py-1"
                        onClick={closeAllMenus}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-zion-purple/20">
                <Link
                  to="/get-started"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-medium text-center block hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-zion-purple/20 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};