'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../../src/components/SearchModal';
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

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
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
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
        { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', description: 'Professional voice synthesis and cloning', icon: '🎤', popular: true },
        { name: 'AI Code Security Auditor', path: '/ai-code-security-auditor', description: 'Automated code security analysis', icon: '🔒', popular: true },
        { name: 'AI Mental Health Companion', path: '/ai-mental-health-companion', description: 'AI-powered mental health support', icon: '💚', popular: true },
        { name: 'AI Smart Home Controller', path: '/ai-smart-home-controller', description: 'Intelligent home automation', icon: '🏠', popular: true },
        { name: 'AI Investment Optimizer', path: '/ai-investment-optimizer', description: 'Advanced portfolio management', icon: '📈', popular: true },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoice creation', icon: '📄', popular: true },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Smart expense management', icon: '💳', popular: true },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'Automated lead discovery', icon: '🎯', popular: true },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management', icon: '👔', popular: true },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant', description: 'Legal document analysis', icon: '⚖️', popular: false },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory optimization', icon: '📦', popular: true },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'Personalized fitness training', icon: '💪', popular: true },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'Boost online sales', icon: '🛒', popular: true },
        { name: 'AI Fraud Detection', path: '/ai-fraud-detection', description: 'Advanced fraud prevention', icon: '🛡️', popular: true },
        { name: 'AI Music Composer', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Advanced image analysis', icon: '👁️', popular: true },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing', icon: '📄', popular: true },
        { name: 'AI Load Testing', path: '/ai-load-testing', description: 'Automated performance testing', icon: '⚡', popular: false },
        { name: 'AI Manufacturing Optimizer', path: '/ai-manufacturing', description: 'Smart manufacturing optimization', icon: '🏭', popular: true },
        { name: 'AI Insurance Assistant', path: '/ai-insurance', description: 'Intelligent insurance management', icon: '🛡️', popular: false },
        { name: 'AI Education Platform', path: '/ai-education', description: 'Personalized learning experience', icon: '🎓', popular: true },
        { name: 'AI Code Assistant', path: '/ai-code-assistant', description: 'Intelligent coding assistant', icon: '💻', popular: true },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'Complete design suite', icon: '🎨', popular: true },
        { name: 'AI Sustainability Tracker', path: '/ai-sustainability-tracker', description: 'Track your environmental impact', icon: '🌱', popular: true },
        { name: 'AI Personal Trainer', path: '/ai-personal-trainer', description: 'AI-powered fitness coaching', icon: '💪', popular: true },
        { name: 'AI Language Tutor', path: '/ai-language-tutor', description: 'Personalized language learning', icon: '🗣️', popular: true },
        { name: 'AI Home Inspector', path: '/ai-home-inspector', description: 'Smart home inspection', icon: '🏠', popular: true },
        { name: 'AI Nutrition Planner', path: '/ai-nutrition-planner', description: 'Personalized meal planning', icon: '🥗', popular: true },
        { name: 'AI Sleep Optimizer', path: '/ai-sleep-optimizer', description: 'Optimize your sleep quality', icon: '😴', popular: true },
        { name: 'AI Memory Palace', path: '/ai-memory-palace', description: 'Advanced memory training', icon: '🧠', popular: true },
        { name: 'AI Habit Tracker', path: '/ai-habit-tracker', description: 'Build better habits', icon: '📈', popular: true },
        { name: 'AI Goal Setter', path: '/ai-goal-setter', description: 'Achieve your goals faster', icon: '🎯', popular: true },
        { name: 'AI Time Blocker', path: '/ai-time-blocker', description: 'Optimize your time management', icon: '⏰', popular: true }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'Self-managing AI systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Legal Research Pro', path: '/ai-legal-research-pro', description: 'Intelligent legal research', icon: '⚖️', popular: true },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Music Composition Studio', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain management', icon: '🚚', popular: true },
        { name: 'AI Transportation Solutions', path: '/ai-transportation', description: 'Smart transportation systems', icon: '🚗', popular: true },
        { name: 'AI Telepathic Interface', path: '/ai-telepathic-interface', description: 'Mind-machine interface technology', icon: '🧠', popular: false },
        { name: 'AI Sentiment Analyzer', path: '/ai-sentiment-analyzer', description: 'Advanced sentiment analysis', icon: '😊', popular: true }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true },
        { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management', path: '/ai-api-management', description: 'Intelligent API management', icon: '🔗', popular: true },
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true },
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Distributed computing infrastructure', icon: '📡', popular: true },
        { name: '5G Implementation', path: '/5g-implementation', description: 'Next-generation network deployment', icon: '📶', popular: true },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Internet of Things solutions', icon: '🌐', popular: true },
        { name: 'Mobile Development', path: '/mobile-development', description: 'Native and cross-platform apps', icon: '📱', popular: true },
        { name: 'Database Services', path: '/database-services', description: 'Comprehensive database solutions', icon: '🗄️', popular: true },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Professional IT training programs', icon: '🎓', popular: true },
        { name: 'Specialized Services', path: '/specialized-services', description: 'Custom IT solutions', icon: '⚙️', popular: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      services: [
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: '🔄', popular: true },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and innovation', icon: '🔬', popular: true },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Advanced analytics platform', icon: '📈', popular: true },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Advanced robotics systems', icon: '🤖', popular: true },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true }
      ]
    }
  ];

  const mainMenuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings, hasDropdown: true },
    { name: 'Case Studies', path: '/case-studies', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                  AI & IT Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainMenuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA & Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Services Dropdown */}
        {servicesOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-cyan-400/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.services.slice(0, 6).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-cyan-400/20 hover:text-cyan-600 rounded-lg transition-colors"
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
                <Link
                  to="/services"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  onClick={closeAllMenus}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-cyan-400/20 shadow-2xl">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Menu Items */}
              <div className="space-y-4">
                {mainMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Services */}
              <div className="border-t border-cyan-400/20 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <h4 className="text-white font-medium">{category.title}</h4>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-cyan-400/20 pt-6">
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
                  onClick={closeAllMenus}
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Contact Info */}
              <div className="border-t border-cyan-400/20 pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
