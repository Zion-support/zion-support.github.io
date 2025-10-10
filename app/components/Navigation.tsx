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
  Clock,
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
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Services Overview', path: '/ai-services' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI SEO Optimization', path: '/ai-seo-optimizer' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Fintech Platform', path: '/ai-fintech' },
        { name: 'AI E-commerce Optimization', path: '/ai-ecommerce-solutions' },
        { name: 'AI Manufacturing Intelligence', path: '/ai-manufacturing' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp' },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'IT Services Overview', path: '/it-services' },
        { name: 'Cloud Migration & Setup', path: '/cloud-migration' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Cloud Cost Optimization', path: '/cloud-optimization' },
        { name: 'Enterprise Cybersecurity', path: '/cybersecurity' },
        { name: 'Compliance Management', path: '/compliance-management' },
        { name: 'Security Awareness Training', path: '/security-training' },
        { name: 'Zero Trust Security', path: '/zero-trust' },
        { name: '24/7 IT Support', path: '/it-support' },
        { name: 'System Administration', path: '/system-administration' },
        { name: 'IT Strategic Consulting', path: '/it-consulting' },
        { name: 'IT Asset Management', path: '/asset-management' },
        { name: 'Custom Software Development', path: '/custom-development' },
        { name: 'System Integration & APIs', path: '/system-integration' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Legacy System Modernization', path: '/legacy-modernization' },
        { name: 'Network Design & Implementation', path: '/network-design' },
        { name: 'Disaster Recovery & Backup', path: '/disaster-recovery' },
        { name: 'IT Performance Monitoring', path: '/performance-monitoring' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'Micro SAAS Overview', path: '/micro-saas' },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager' },
        { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar' },
        { name: 'AI Content Writer Pro', path: '/ai-content-writer' },
        { name: 'AI Video Generator Pro', path: '/ai-video-generator' },
        { name: 'AI Social Media Manager Pro', path: '/ai-social-media-manager' },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing' },
        { name: 'AI CRM Assistant Pro', path: '/ai-crm-assistant' },
        { name: 'AI Financial Analyzer Pro', path: '/ai-financial-analyzer' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant' },
        { name: 'AI Cybersecurity Monitor Pro', path: '/ai-cybersecurity-monitor' },
        { name: 'AI Password Manager Pro', path: '/ai-password-manager' },
        { name: 'AI Voice Cloning Studio Pro', path: '/ai-voice-cloning-studio' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        { name: 'Quantum Computing Solutions', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics Solutions', path: '/robotics' },
        { name: 'Space Technology', path: '/space-technology' },
        { name: 'Climate Solutions', path: '/climate-solutions' },
        { name: 'Financial Crime Detection', path: '/financial-crime-detection' },
        { name: 'Supply Chain Optimization', path: '/supply-chain-optimization' },
        { name: 'Energy Grid Management', path: '/energy-grid-management' },
        { name: 'Agricultural Intelligence', path: '/agricultural-intelligence' },
        { name: 'Legal Research AI', path: '/legal-research-ai' }
      ]
    }
  ];

  const mainNavigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Case Studies', path: '/case-studies', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold group"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold cyber-text">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow flex items-center space-x-1"
                onClick={closeAllMenus}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/30 py-6 z-50 cyber-card">
                  <div className="grid grid-cols-2 gap-8 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-lg neon-text">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 8).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-all duration-300 hover:translate-x-2"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 8 && (
                            <Link
                              to={category.services[0].path}
                              className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All {category.title} →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                    <div className="flex justify-between items-center">
                      <Link
                        to="/services"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View All Services
                      </Link>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>+1 (302) 464-0950</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Mail className="w-3 h-3" />
                            <span>kleber@ziontechgroup.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center glow-button"
              onClick={closeAllMenus}
            >
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200 neon-glow"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-6 cyber-card">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Main Menu</h3>
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-cyan-400/10"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-cyan-400/10"
                >
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5" />
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
                          <div className="text-gray-300 font-semibold text-sm">{category.title}</div>
                        </div>
                        <div className="ml-4 space-y-2">
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
                          {category.services.length > 4 && (
                            <Link
                              to={category.services[0].path}
                              className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-1 font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="border-t border-cyan-400/20 pt-4">
                <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center mt-4 glow-button"
                onClick={closeAllMenus}
              >
                <Rocket className="w-4 h-4 mr-2 inline" />
                Get Started Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;