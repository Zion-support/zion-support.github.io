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

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true, price: '$299/mo' },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true, price: '$199/mo' },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true, price: '$399/mo' },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true, price: '$149/mo' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true, price: '$99/mo' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true, price: '$179/mo' },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true, price: '$79/mo' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true, price: '$129/mo' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true, price: '$89/mo' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false, price: '$199/mo' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true, price: '$119/mo' },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true, price: '$249/mo' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true, price: '$299/mo' },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true, price: '$49/mo' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Smart invoice creation', icon: '📄', popular: false, price: '$39/mo' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'AI-enhanced security', icon: '🔐', popular: false, price: '$29/mo' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Smart financial tracking', icon: '💳', popular: false, price: '$59/mo' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Revolutionary quantum solutions', icon: '⚛️', popular: true, price: '$2,999/mo' },
        { name: 'AI Autonomous Vehicle Systems', path: '/ai-autonomous-systems', description: 'Advanced autonomous technology', icon: '🚗', popular: true, price: '$4,999/mo' },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space mission optimization', icon: '🚀', popular: true, price: '$9,999/mo' },
        { name: 'AI Climate Intelligence', path: '/ai-climate-solutions-pro', description: 'Environmental monitoring', icon: '🌍', popular: true, price: '$1,999/mo' },
        { name: 'AI Drug Discovery Platform', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical research', icon: '💊', popular: true, price: '$7,999/mo' },
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'Business process automation', icon: '⚡', popular: true, price: '$1,299/mo' },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 support', icon: '🤖', popular: true, price: '$899/mo' },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'ML-powered analytics', icon: '📊', popular: true, price: '$1,499/mo' },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true, price: '$599/mo' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true, price: '$3,999/mo' },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true, price: '$2,499/mo' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity', description: 'AI-powered security solutions', icon: '🛡️', popular: true, price: '$1,799/mo' },
        { name: 'AI Manufacturing Solutions', path: '/ai-manufacturing', description: 'Smart manufacturing AI', icon: '🏭', popular: false, price: '$2,999/mo' },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: false, price: '$1,599/mo' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: false, price: '$299/mo' },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: false, price: '$799/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'AI-Powered Infrastructure Management', path: '/ai-infrastructure', description: 'Intelligent infrastructure optimization', icon: '🤖', popular: true, price: '$2,999/mo' },
        { name: 'Quantum-Safe Security Implementation', path: '/quantum-security', description: 'Future-proof security solutions', icon: '🔐', popular: true, price: '$4,999/mo' },
        { name: 'Edge Computing Infrastructure', path: '/edge-computing', description: 'Distributed computing for IoT', icon: '📡', popular: true, price: '$1,999/mo' },
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true, price: '$1,499/mo' },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true, price: '$2,499/mo' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true, price: '$1,799/mo' },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true, price: '$999/mo' },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true, price: '$3,999/mo' },
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true, price: '$2,299/mo' },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: false, price: '$3,499/mo' },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: false, price: '$2,999/mo' },
        { name: '5G Network Implementation', path: '/5g-implementation', description: 'High-speed 5G networks', icon: '📶', popular: false, price: '$4,999/mo' },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: false, price: '$2,799/mo' },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: false, price: '$1,599/mo' },
        { name: 'Blockchain Development', path: '/blockchain-development', description: 'Decentralized applications', icon: '⛓️', popular: false, price: '$3,999/mo' },
        { name: 'AR/VR Development', path: '/ar-vr-development', description: 'Immersive experiences', icon: '🥽', popular: false, price: '$4,499/mo' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D holographic interfaces', icon: '🥽', popular: true, price: '$4,999/mo' },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Cognitive enhancement AI', icon: '🧠', popular: true, price: '$1,999/mo' },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum financial predictions', icon: '⚛️', popular: true, price: '$2,999/mo' },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true, price: '$9,999/mo' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌍', popular: true, price: '$1,999/mo' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI research', icon: '💊', popular: true, price: '$7,999/mo' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: false, price: '$2,999/mo' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: false, price: '$3,999/mo' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: false, price: '$9,999/mo' },
        { name: 'Neural Interface Technology', path: '/neural-interface', description: 'Brain-computer interfaces', icon: '🧠', popular: false, price: '$14,999/mo' },
        { name: 'Holographic Displays', path: '/holographic-displays', description: '3D projection technology', icon: '📺', popular: false, price: '$5,999/mo' },
        { name: 'Advanced Robotics', path: '/advanced-robotics', description: 'AI-powered robotics', icon: '🤖', popular: false, price: '$6,999/mo' }
      ]
    }
  ];

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold group"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 rotate-slow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white cyber-text font-bold">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
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
                          {category.services.slice(0, 8).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-cyan-400/20 hover:text-cyan-600 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg">{service.icon}</span>
                                  <span className="font-medium">{service.name}</span>
                                </div>
                                {service.popular && <Star className="w-3 h-3 text-yellow-500" />}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                              <div className="text-xs font-semibold text-cyan-600 mt-1">{service.price}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
                      </div>
                      <Link
                        to="/services"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
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
              className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              onClick={closeAllMenus}
            >
              <span>Get Started</span>
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-400/20">
                <div className="text-sm text-cyan-400 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
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