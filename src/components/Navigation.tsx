import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Heart, CreditCard, Music, GraduationCap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoice creation', icon: '💰', popular: true },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification', icon: '🎯', popular: true },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions', icon: '📊', popular: true },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', icon: '🛒', popular: true },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool', icon: '🎨', popular: false },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing', icon: '📄', popular: true },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring', icon: '🔒', popular: true },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking', icon: '⚡', popular: false },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants', icon: '🎤', popular: true },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management', icon: '👥', popular: true },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management', icon: '📦', popular: true },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights', icon: '👤', popular: true },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing', icon: '🧪', popular: false },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions', icon: '🔮', popular: true }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'Machine Learning Solutions', path: '/ai-ml-solutions', description: 'Custom ML models and analytics' },
        { name: 'Natural Language Processing', path: '/ai-nlp', description: 'Advanced text analysis and understanding' },
        { name: 'Computer Vision', path: '/ai-computer-vision', description: 'Image and video analysis solutions' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI for diagnosis and treatment' },
        { name: 'AI Financial Services', path: '/ai-fintech', description: 'Fintech AI for fraud detection and trading' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions and threat detection' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data analysis with AI insights' },
        { name: 'AI Voice & Speech', path: '/ai-voice-speech', description: 'Voice recognition and synthesis' },
        { name: 'AI Robotics', path: '/ai-robotics', description: 'Intelligent robotics solutions' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI optimized for edge devices' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration, setup, and optimization' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Streamlined development workflows' },
        { name: 'Database Services', path: '/database-services', description: 'Database design and optimization' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise-grade infrastructure' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network design and implementation' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT support and maintenance' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development programs' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery solutions' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide IT support' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-generation quantum algorithms' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices and edge computing' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights and analytics' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robotic solutions' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                to={`/${category.title.toLowerCase().split(' ').join('-')}`}
                                className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                                onClick={closeAllMenus}
                              >
                                View All →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )}

            <Link 
              to="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">🏠</span>
                  <span className="font-medium">Home</span>
                </Link>
                <Link
                  to="/about"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">ℹ️</span>
                  <span className="font-medium">About</span>
                </Link>
                <Link
                  to="/services"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">🧠</span>
                  <span className="font-medium">Services</span>
                </Link>
                <Link
                  to="/case-studies"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">📊</span>
                  <span className="font-medium">Case Studies</span>
                </Link>
                <Link
                  to="/blog"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">📝</span>
                  <span className="font-medium">Blog</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="text-lg">📞</span>
                  <span className="font-medium">Contact</span>
                </Link>
              </div>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                (302) 464-0950
              </a>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;