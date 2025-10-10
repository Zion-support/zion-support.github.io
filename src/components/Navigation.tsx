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
  Smartphone
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };

  const microSAASServices = [
    // Productivity & Management Tools
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo', description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: Check, category: 'Productivity', price: '$49/mo', description: 'Smart task management with AI prioritization, deadline tracking, and productivity insights' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo', description: 'Automate repetitive tasks with intelligent workflow design and execution' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo', description: 'Smart scheduling with conflict resolution and optimal time slot recommendations' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo', description: 'Advanced time tracking with AI-powered productivity analysis and reporting' },
    { name: 'AI Meeting Assistant Pro', href: '/ai-meeting-assistant', icon: MessageSquare, category: 'Productivity', price: '$59/mo', description: 'AI-powered meeting transcription, action items extraction, and follow-up automation' },
    
    // Content & Marketing Tools
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo', description: 'Advanced AI content generation for blogs, articles, and marketing copy' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo', description: 'Automated social media posting, engagement, and analytics with AI optimization' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo', description: 'AI-powered email campaigns with personalization and performance optimization' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo', description: 'Comprehensive SEO analysis and optimization with AI-driven recommendations' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo', description: 'Intelligent lead scoring, qualification, and nurturing automation' },
    
    // Business & Finance Tools
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo', description: 'Smart CRM with AI-powered customer insights and sales forecasting' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo', description: 'Advanced financial analysis with AI-driven insights and forecasting' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo', description: 'Automated invoice generation with AI-powered pricing and payment tracking' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo', description: 'Smart expense tracking with AI categorization and budget management' },
    
    // Creative & Media Tools
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative', price: '$149/mo', description: 'AI-powered video creation from text prompts and templates' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo', description: 'High-quality voice cloning and synthesis for various applications' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo', description: 'AI-generated music composition and production tools' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo', description: 'Professional logo design with AI-powered creativity' },
    
    // Health & Wellness Tools
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo', description: 'AI-powered health monitoring and wellness recommendations' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo', description: 'Personalized fitness plans and workout optimization with AI' },
    { name: 'AI Mental Health Assistant', href: '/ai-mental-health', icon: Brain, category: 'Health', price: '$59/mo', description: 'AI-powered mental health support and wellness tracking' },
  ];

  const aiServices = [
    // Core AI Technologies
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$2,500/mo', description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,800/mo', description: 'Advanced NLP for text analysis, sentiment analysis, and language understanding' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$2,200/mo', description: 'Image and video analysis, object detection, and visual recognition systems' },
    { name: 'Deep Learning Solutions', href: '/deep-learning', icon: Brain, price: '$3,000/mo', description: 'Neural network architectures for complex pattern recognition and decision making' },
    { name: 'Generative AI Solutions', href: '/generative-ai', icon: Sparkles, price: '$2,000/mo', description: 'AI content generation, creative applications, and synthetic data creation' },
    
    // Business Intelligence & Analytics
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,500/mo', description: 'AI-powered business insights, reporting, and strategic decision support' },
    { name: 'AI Predictive Analytics Platform', href: '/ai-predictive-analytics', icon: BarChart, price: '$2,200/mo', description: 'Advanced forecasting and predictive modeling for business outcomes' },
    { name: 'AI Data Mining & Discovery', href: '/ai-data-mining', icon: Search, price: '$1,800/mo', description: 'Intelligent data exploration and hidden pattern discovery' },
    { name: 'AI Real-Time Analytics', href: '/ai-realtime-analytics', icon: Activity, price: '$1,600/mo', description: 'Live data processing and instant insights for operational decisions' },
  ];

  const itServices = [
    // Cloud Services & Infrastructure
    { name: 'Cloud Migration Services', href: '/cloud-migration', icon: Cloud, price: '$2,500/mo', description: 'Complete cloud migration strategy, planning, and execution for AWS, Azure, and GCP' },
    { name: 'Cloud Infrastructure Management', href: '/cloud-infrastructure', icon: Cloud, price: '$2,000/mo', description: '24/7 cloud infrastructure monitoring, optimization, and management' },
    { name: 'Multi-Cloud Solutions', href: '/multi-cloud', icon: Cloud, price: '$2,800/mo', description: 'Hybrid and multi-cloud architecture design and implementation' },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield, price: '$2,200/mo', description: 'Comprehensive cloud security assessment and compliance management' },
    
    // Cybersecurity & Security Services
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$2,500/mo', description: 'Comprehensive cybersecurity assessment, implementation, and monitoring' },
    { name: 'Network Security', href: '/network-security', icon: Lock, price: '$1,800/mo', description: 'Advanced network security solutions and threat protection' },
    { name: 'Data Protection & Privacy', href: '/data-protection', icon: Database, price: '$1,600/mo', description: 'Data encryption, backup, and privacy compliance solutions' },
    { name: 'Security Auditing', href: '/security-auditing', icon: Search, price: '$1,400/mo', description: 'Comprehensive security audits and vulnerability assessments' },
  ];

  const specializedServices = [
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$5,000/mo', description: 'Quantum algorithms, optimization, and research solutions' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$4,000/mo', description: 'Advanced autonomous systems with robotics and AI' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,500/mo', description: 'Comprehensive blockchain solutions and Web3 development' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$1,800/mo', description: 'IoT solutions with edge computing and real-time processing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Careers
            </Link>
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1000px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-3">
                        {['Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Creative', 'Health'].map(category => (
                          <div key={category}>
                            <h4 className="text-xs font-medium text-purple-400 mb-2 uppercase tracking-wide">{category}</h4>
                            <div className="space-y-1">
                              {microSAASServices.filter(service => service.category === category).slice(0, 3).map((service) => (
                                <Link key={service.name}
                                  to={service.href}
                                  className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <service.icon className="w-3 h-3" />
                                  <span className="truncate">{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 8).map((service) => (
                          <Link key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Cpu className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2">
                        {specializedServices.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-3 gap-4">
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>View All Services</span>
                      </Link>
                      <Link
                        to="/pricing"
                        className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Star className="w-4 h-4" />
                        <span>Pricing Plans</span>
                      </Link>
                      <Link
                        to="/contact"
                        className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Get Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/team" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Team
              </Link>
              <Link to="/careers" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Careers
              </Link>
              <Link to="/services" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 302 464 0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block w-full px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;