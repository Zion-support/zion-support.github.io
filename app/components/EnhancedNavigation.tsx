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
  Clock3,
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
  Scale
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
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
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Automate business processes with AI' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: '24/7 intelligent customer service' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced analytics and insights' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Create content with AI' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI services' },
        { name: 'AI E-commerce Optimization', path: '/ai-ecommerce-solutions', description: 'Optimize online stores' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Image and video analysis' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Text and language understanding' },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML solutions' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure' },
        { name: 'Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security' },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization' },
        { name: '24/7 IT Support', path: '/it-support', description: 'Round-the-clock support' },
        { name: 'System Administration', path: '/system-administration', description: 'Complete system management' },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Automated deployment' },
        { name: 'Network Design', path: '/network-design', description: 'Secure network infrastructure' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Business continuity solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager-pro', description: 'Intelligent project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Real-time business intelligence' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 customer support' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation' },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing-suite', description: 'Intelligent email campaigns' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' },
        { name: 'AI Voice Assistant Builder', path: '/ai-voice-assistant-builder', description: 'Custom voice assistants' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        { name: 'Quantum Computing Solutions', path: '/quantum-computing', description: 'Advanced quantum solutions' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected device solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Advanced robotics systems' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg cyber-border-glow-advanced' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-2xl font-bold group"
            onClick={closeAllMenus}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center cyber-pulse-advanced group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white neon-text-advanced cyber-text-3d">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
              onClick={closeAllMenus}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
              onClick={closeAllMenus}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-[800px] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/30 py-8 z-50 cyber-card-advanced">
                  <div className="grid grid-cols-2 gap-8 px-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center cyber-pulse-advanced`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="font-bold text-white text-lg neon-text-advanced">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block p-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"
                              onClick={closeAllMenus}
                            >
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        {category.services.length > 6 && (
                          <Link
                            to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                            onClick={closeAllMenus}
                          >
                            View all {category.title} →
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-8 pt-6 px-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">Need a Custom Solution?</h4>
                        <p className="text-gray-400 text-sm">We can build exactly what you need</p>
                      </div>
                      <Link
                        to="/contact"
                        className="cyber-button-advanced px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                        onClick={closeAllMenus}
                      >
                        Get Custom Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
              onClick={closeAllMenus}
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
              onClick={closeAllMenus}
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
              onClick={closeAllMenus}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button-advanced inline-flex items-center px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform group"
              onClick={closeAllMenus}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-400/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-4 p-6 cyber-card-advanced">
            <div className="space-y-6">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                >
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5" />
                    <span>Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-6 space-y-4 mt-4">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <div className="text-cyan-400 font-semibold text-sm">{category.title}</div>
                        </div>
                        <div className="ml-4 space-y-2">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-cyan-400/10"
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

              <Link
                to="/case-studies"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-cyan-400/10"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block cyber-button-advanced px-6 py-4 rounded-lg font-medium transition-all text-center mt-6"
                onClick={closeAllMenus}
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;