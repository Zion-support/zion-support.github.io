import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Code, 
  Zap, 
  Cloud, 
  Shield, 
  BarChart, 
  Users, 
  Globe, 
  ChevronDown,
  ArrowRight,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'AI-powered financial planning', icon: '💰', popular: true },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Streamlined HR processes', icon: '👥', popular: true },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice-enabled AI', icon: '🎤', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'AI-powered inventory optimization', icon: '📦', popular: false },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant', description: 'Automated legal document review', icon: '⚖️', popular: false },
        { name: 'AI Supply Chain Optimizer', path: '/ai-supply-chain-optimizer', description: 'AI-powered logistics optimization', icon: '🚚', popular: false },
        { name: 'AI Content Moderation', path: '/ai-content-moderation', description: 'Automated content moderation', icon: '🛡️', popular: false },
        { name: 'AI Fraud Detection', path: '/ai-fraud-detection', description: 'Advanced fraud prevention', icon: '🔒', popular: false },
        { name: 'AI Translation Service', path: '/ai-translation-service', description: 'Real-time translation services', icon: '🌐', popular: false },
        { name: 'AI Video Analytics', path: '/ai-video-analytics', description: 'Advanced video analysis', icon: '📹', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'Machine Learning Solutions', path: '/ai-ml-solutions', description: 'Custom ML models and analytics' },
        { name: 'Natural Language Processing', path: '/ai-nlp', description: 'Advanced text analysis and understanding' },
        { name: 'Computer Vision', path: '/ai-computer-vision', description: 'Image and video analysis solutions' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'Deep Learning Solutions', path: '/ai-deep-learning', description: 'Advanced neural networks' },
        { name: 'AI Data Science', path: '/ai-data-science', description: 'Comprehensive data science solutions' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI applications' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' },
        { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & optimization' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management & optimization' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Network Services', path: '/networking', description: 'Network design & implementation' },
        { name: 'Mobile App Development', path: '/mobile-app-development', description: 'Native & cross-platform apps' },
        { name: 'Web Development', path: '/web-development', description: 'Modern web applications' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Data Center Services', path: '/data-center-services', description: 'Colocation & managed services' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
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
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
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
            <Link 
              href="/" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="font-medium text-white text-sm">{category.title}</span>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1 group"
                            >
                              <div className="flex items-center space-x-2">
                                {typeof service.icon === 'string' ? (
                                  <span className="text-sm">{service.icon}</span>
                                ) : (
                                  <service.icon className="w-3 h-3" />
                                )}
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium py-2"
                      >
                        <span>View All AI Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-300"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-purple-400/20 p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm font-medium">{service.name}</span>
                            {service.popular && <Star className="w-3 h-3 text-yellow-400" />}
                          </div>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <Link
                        to="/it-services"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 text-sm font-medium py-2"
                      >
                        <span>View All IT Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              href="/blog" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Contact
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

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+13024640950"
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+1 302 464 0950</span>
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="/contact"
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Contact</span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile AI Services */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Services
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      <service.icon className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-white text-sm font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium py-2"
                    onClick={closeMenu}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Services</h3>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="font-medium text-cyan-400 text-sm">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          onClick={closeAllMenus}
                          className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        >
                          {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

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

export default Navigation;