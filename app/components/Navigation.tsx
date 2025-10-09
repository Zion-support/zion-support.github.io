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
  ArrowRight,
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Star,
  FileText,
  ShoppingCart,
  Heart,
  BookOpen,
  GraduationCap,
  Building,
  Network,
  Server,
  Archive,
  Wifi,
  Monitor,
  HardDrive,
  Layers,
  PieChart,
  Activity,
  Search,
  Filter,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  MessageCircle,
  Mic,
  Eye,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Plus,
  Minus,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  Bell,
  BellOff,
  Sun,
  Moon,
  Battery,
  Signal
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const aiServices = [
    { name: 'AI Services Overview', href: '/ai-services', icon: Brain },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageCircle },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'AI Enterprise Solutions', href: '/ai-enterprise-solutions', icon: Building }
  ];

  const itServices = [
    { name: 'IT Services Overview', href: '/it-services', icon: Settings },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Server },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Network Services', href: '/networking', icon: Network },
    { name: 'Database Services', href: '/database', icon: Database },
    { name: 'DevOps', href: '/devops', icon: Code },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
    { name: 'Productivity Tools', href: '/productivity', icon: Zap },
    { name: 'Compliance', href: '/compliance', icon: Check }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Overview', href: '/micro-saas', icon: Layers },
    { name: 'AI Content Generator Pro', href: '/micro-saas#ai-content-generator', icon: FileText },
    { name: 'AI Social Media Manager', href: '/micro-saas#ai-social-media-manager', icon: Globe },
    { name: 'AI Email Marketing Suite', href: '/micro-saas#ai-email-marketing', icon: Mail },
    { name: 'AI Analytics Dashboard', href: '/micro-saas#ai-analytics-dashboard', icon: BarChart },
    { name: 'AI Task Automation Suite', href: '/micro-saas#ai-task-automation', icon: Settings },
    { name: 'AI Meeting Assistant Pro', href: '/micro-saas#ai-meeting-assistant', icon: Mic },
    { name: 'AI E-commerce Optimizer', href: '/micro-saas#ai-ecommerce-optimizer', icon: ShoppingCart },
    { name: 'AI Chatbot Builder Pro', href: '/micro-saas#ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Invoice Generator Pro', href: '/micro-saas#ai-invoice-generator', icon: DollarSign },
    { name: 'AI Health Monitor Pro', href: '/micro-saas#ai-health-monitor', icon: Heart },
    { name: 'AI Language Learning Pro', href: '/micro-saas#ai-language-learning', icon: Globe },
    { name: 'AI Code Reviewer Pro', href: '/micro-saas#ai-code-reviewer', icon: Code },
    { name: 'AI Security Scanner Pro', href: '/micro-saas#ai-security-scanner', icon: Shield },
    { name: 'AI IoT Manager Pro', href: '/micro-saas#ai-iot-manager', icon: Wifi }
  ];

  const otherServices = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Careers', href: '/careers', icon: GraduationCap },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Privacy Policy', href: '/privacy', icon: Lock },
    { name: 'Terms of Service', href: '/terms', icon: FileText }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors py-2"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-600/20 transition-colors"
                        onClick={() => setAiServicesOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors py-2"
              >
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-600/20 transition-colors"
                        onClick={() => setItServicesOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors py-2"
              >
                <Layers className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-600/20 transition-colors"
                        onClick={() => setMicroSaasOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-purple-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 mb-4">
              {/* AI Services Mobile */}
              <div className="space-y-1">
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-purple-400 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Mobile */}
              <div className="space-y-1">
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-purple-400 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>IT Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Mobile */}
              <div className="space-y-1">
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-purple-400 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="pl-6 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="w-3 h-3" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links Mobile */}
              {otherServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                </Link>
              ))}

              {/* Contact Info Mobile */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;