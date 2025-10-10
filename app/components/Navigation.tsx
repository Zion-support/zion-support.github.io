'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale,
  Mic,
  Headphones,
  Server,
  Wifi,
  Package,
  RefreshCw
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro' },
        { name: 'AI Content Generation Suite', path: '/ai-content-generation-suite' },
        { name: 'AI Customer Service Automation', path: '/ai-customer-service-automation' },
        { name: 'AI Marketing Automation Platform', path: '/ai-marketing-automation-platform' },
        { name: 'AI Document Processing System', path: '/ai-document-processing-system' },
        { name: 'AI Image & Video Analysis', path: '/ai-image-video-analysis' },
        { name: 'AI Financial Analysis Platform', path: '/ai-financial-analysis-platform' },
        { name: 'AI Healthcare Diagnostics', path: '/ai-healthcare-diagnostics' },
        { name: 'AI Supply Chain Optimization', path: '/ai-supply-chain-optimization' },
        { name: 'AI Voice & Speech Processing', path: '/ai-voice-speech-processing' },
        { name: 'AI Cybersecurity Platform', path: '/ai-cybersecurity-platform' },
        { name: 'AI Research & Development', path: '/ai-research-development' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design' },
        { name: 'Database Management Pro', path: '/database-management-pro' },
        { name: 'Cloud Cost Optimization', path: '/cloud-cost-optimization' },
        { name: 'Enterprise Cybersecurity Suite', path: '/enterprise-cybersecurity-suite' },
        { name: 'Compliance Management Platform', path: '/compliance-management-platform' },
        { name: '24/7 IT Support & Monitoring', path: '/24-7-it-support-monitoring' },
        { name: 'System Administration Services', path: '/system-administration-services' },
        { name: 'Custom Software Development', path: '/custom-software-development' },
        { name: 'System Integration & APIs', path: '/system-integration-apis' },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd-implementation' },
        { name: 'Network Design & Implementation', path: '/network-design-implementation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager-pro' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing-suite' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Lead Generation Engine', path: '/ai-lead-generation-engine' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing Solutions', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics Solutions', path: '/robotics' }
      ]
    }
  ];

  const mainNavigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings, hasDropdown: true },
    { name: 'Case Studies', path: '/case-studies', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const quickLinks = [
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Support', path: '/support', icon: MessageSquare },
    { name: 'Documentation', path: '/docs', icon: BookOpen },
    { name: 'API Reference', path: '/api-docs', icon: Code }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white neon-text">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Services Dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[1200px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                <div className="grid grid-cols-4 gap-6 px-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.services.slice(0, 6).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/ai-services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All AI Services
                    </Link>
                    <Link
                      to="/it-services"
                      className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                  aria-expanded={microSaasOpen}
                  aria-haspopup="true"
                >
                  <Code className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {microSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                    <div className="px-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-3">Popular Micro SAAS Tools</h3>
                      <div className="space-y-2">
                        {serviceCategories[2].services.slice(0, 8).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4">
                        <Link
                          to="/micro-saas"
                          className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all"
                          onClick={closeAllMenus}
                        >
                          View All Micro SAAS
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              {mainNavigation.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-2 mt-2">
                          {serviceCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                              <div className="text-gray-300 font-semibold text-sm mb-2">{category.title}</div>
                              <div className="ml-4 space-y-1">
                                {category.services.slice(0, 4).map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    to={service.path}
                                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                                    onClick={closeAllMenus}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                      onClick={closeAllMenus}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Quick Links */}
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-gray-300 font-semibold text-sm mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                      onClick={closeAllMenus}
                    >
                      <link.icon className="w-3 h-3" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;