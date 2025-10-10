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
  Scale,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setSidebarOpen(false);
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
    setSidebarOpen(false);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      description: 'AI-powered productivity tools for individuals and small teams',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      description: 'Enterprise-grade AI solutions for large organizations',
      services: [
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      description: 'Comprehensive IT infrastructure and support services',
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      description: 'Cutting-edge technologies for the future',
      services: [
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'AI-powered autonomous systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const quickLinks = [
    { name: 'Micro SAAS', path: '/micro-saas', icon: Zap },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'IT Services', path: '/it-services', icon: Cloud },
    { name: 'Demo', path: '/demo', icon: Play },
    { name: 'Consultation', path: '/consultation', icon: MessageSquare }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
                <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
              ))}

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
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-6 z-50">
                    <div className="px-6">
                      <div className="grid grid-cols-2 gap-8">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-4">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                                <category.icon className={`w-5 h-5 ${category.color}`} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white text-lg">{category.title}</h3>
                                <p className="text-gray-400 text-sm">{category.description}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              {category.services.slice(0, 6).map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-400/10 hover:text-cyan-400 transition-all group"
                                  onClick={closeAllMenus}
                                >
                                  <span className="text-lg">{service.icon}</span>
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-white text-sm font-medium group-hover:text-cyan-400">
                                        {service.name}
                                      </span>
                                      {service.popular && (
                                        <span className="px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-gray-400 text-xs mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                </Link>
                              ))}
                            </div>
                            {category.services.length > 6 && (
                              <Link
                                to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center space-x-2"
                                onClick={closeAllMenus}
                              >
                                <span>View all {category.title}</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
                onClick={closeAllMenus}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-white hover:text-cyan-400 transition-colors duration-200"
                aria-label="Open sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-slate-900 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-white font-semibold">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
              {/* Main Navigation */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-3">Navigation</h3>
                <div className="space-y-2">
                  {mainLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all"
                      onClick={closeAllMenus}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-3">Quick Access</h3>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all"
                      onClick={closeAllMenus}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Categories */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-3">Services</h3>
                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 mb-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span className="text-white font-medium text-sm">{category.title}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className="block text-gray-400 hover:text-cyan-400 text-sm py-1 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                        {category.services.length > 3 && (
                          <Link
                            to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                            onClick={closeAllMenus}
                          >
                            View all →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-gray-400 text-sm font-semibold mb-3">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;