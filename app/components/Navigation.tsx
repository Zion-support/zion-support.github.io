'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  ArrowRight,
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Star,
  Settings,
  FileText,
  Bot,
  Layers,
  Workflow,
  Search,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Heart,
  Car,
  Home,
  Briefcase,
  Palette,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  Calculator,
  Calendar,
  Clock,
  Compass,
  Download,
  Edit,
  Eye,
  Filter,
  Gift,
  Headphones,
  Image,
  Key,
  Lightbulb,
  Map,
  Mic,
  Monitor,
  Mouse,
  Package,
  Paperclip,
  PenTool,
  PieChart,
  Play,
  Plus,
  Printer,
  Save,
  Scissors,
  Send,
  Share,
  Tag,
  Trash2,
  Upload,
  Video,
  Volume2,
  Wifi,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  MoreHorizontal,
  MoreVertical,
  PlusCircle,
  MinusCircle,
  XCircle,
  CheckCircle2,
  AlertTriangle
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  // Comprehensive service categories with real services
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', price: '$1,500/month' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', price: '$199/month' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', price: '$399/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: '$1,999/month' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', price: '$1,499/month' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: '$199/month' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', price: '$799/month' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', price: '$1,299/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', price: '$599/month' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud AI services', price: '$999/month' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', price: '$1,199/month' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'AI-powered mobile apps', price: '$1,799/month' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI customer service', price: '$299/month' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process automation', price: '$499/month' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Interactive data dashboards', price: '$699/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', price: '$999/month' },
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', price: '$799/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', price: '$1,299/month' },
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure', description: 'Cloud migration & setup', price: '$1,199/month' },
        { name: 'DevOps', path: '/ai-workflow-automation', description: 'DevOps automation', price: '$1,499/month' },
        { name: 'Database Services', path: '/ai-data-analytics', description: 'Database management', price: '$899/month' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure', price: '$1,199/month' },
        { name: 'System Administration', path: '/it-services', description: 'System management', price: '$1,099/month' },
        { name: 'Backup & Recovery', path: '/it-services', description: 'Data protection', price: '$599/month' },
        { name: 'Monitoring & Alerting', path: '/it-services', description: 'System monitoring', price: '$399/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'AI Code Review', path: '/micro-saas', description: 'Automated code analysis', price: '$79/month' },
        { name: 'AI SEO Optimizer', path: '/micro-saas', description: 'SEO automation tools', price: '$99/month' },
        { name: 'AI Analytics Dashboard', path: '/micro-saas', description: 'Business intelligence', price: '$149/month' },
        { name: 'AI Marketing Tools', path: '/micro-saas', description: 'Marketing automation', price: '$199/month' },
        { name: 'AI Document Processing', path: '/micro-saas', description: 'Document intelligence', price: '$129/month' },
        { name: 'AI Customer Support', path: '/micro-saas', description: 'Support automation', price: '$179/month' },
        { name: 'AI Content Generator', path: '/micro-saas', description: 'Content creation tools', price: '$89/month' },
        { name: 'AI Email Marketing', path: '/micro-saas', description: 'Email automation', price: '$119/month' },
        { name: 'AI Social Media Manager', path: '/micro-saas', description: 'Social media automation', price: '$159/month' },
        { name: 'AI Project Management', path: '/micro-saas', description: 'Project automation', price: '$139/month' },
        { name: 'AI CRM System', path: '/micro-saas', description: 'Customer relationship management', price: '$199/month' },
        { name: 'AI Inventory Management', path: '/micro-saas', description: 'Inventory optimization', price: '$169/month' },
        { name: 'AI Financial Tracking', path: '/micro-saas', description: 'Financial management', price: '$189/month' },
        { name: 'AI HR Management', path: '/micro-saas', description: 'Human resources automation', price: '$149/month' },
        { name: 'AI Time Tracking', path: '/micro-saas', description: 'Time management tools', price: '$79/month' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: '$2,999/month' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', price: '$1,799/month' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', price: '$1,499/month' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', price: '$1,299/month' },
        { name: 'Robotics', path: '/robotics', description: 'Robotic solutions', price: '$2,499/month' },
        { name: 'AR/VR Development', path: '/ai-services', description: 'Immersive experiences', price: '$1,999/month' },
        { name: 'Machine Learning', path: '/ai-services', description: 'ML model development', price: '$1,799/month' },
        { name: 'Computer Vision', path: '/ai-services', description: 'Image recognition', price: '$1,599/month' },
        { name: 'Natural Language Processing', path: '/ai-services', description: 'Text analysis', price: '$1,399/month' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900/90 backdrop-blur-md'
    } border-b border-cyan-500/20 cyber-glow`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 font-medium transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
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
                              className={`block px-3 py-2 text-sm text-gray-600 ${category.hoverColor} hover:text-purple-600 rounded-lg transition-colors group`}
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description} • {service.price}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              to="/services"
                              className="block px-3 py-1 text-xs text-purple-600 hover:text-purple-700 font-medium"
                              onClick={closeAllMenus}
                            >
                              View all {category.title.toLowerCase()} →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/micro-saas"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Star className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">Micro SAAS</div>
                          <div className="text-sm text-gray-500">50+ AI-powered tools</div>
                        </div>
                      </Link>
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">All Services</div>
                          <div className="text-sm text-gray-500">Complete portfolio</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-cyan-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            onClick={closeAllMenus}
                          >
                            {service.name} • {service.price}
                          </Link>
                        ))}
                        {category.services.length > 3 && (
                          <Link
                            to="/services"
                            className="block text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                            onClick={closeAllMenus}
                          >
                            View all {category.title.toLowerCase()} →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link
                to="/case-studies"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
