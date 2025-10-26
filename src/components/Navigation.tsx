import { Settings, Shield, Phone } from 'lucide-react';
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
  DollarSign,
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
import React, {useState, useEffect} from 'react';
export default Navigation;
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp } from 'lucide-react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables;
  const [isScrolled, setIsScrolled] = useState(false);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
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
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Fintech Analyzer', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security', icon: Shield },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database },
    { name: 'Network Security & Firewall', href: '/network-security', icon: Lock },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase },
    { name: 'Managed IT Services', href: '/managed-it', icon: Users },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database },
    { name: 'IT Training & Support', href: '/it-training', icon: GraduationCap },
    { name: 'IT Performance Optimization', href: '/it-performance', icon: Zap },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: Calculator },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp }
  ];

  return (
    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
  };

    setIsServicesOpen(!isServicesOpen);
  };

  ];

  ];

  ];

  // Removed specializedServices as it was unused;
          {/* Logo */}
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>"
          {/* Desktop Navigation */}
                <span>Services</span>
                        Micro SAAS;
                            <span>{service.name}</span>
  ))}
                        AI Services;
                            <span>{service.name}</span>
  ))}
                        IT Services;
                            <span>{service.name}</span>
  ))}
                        <span>View All Services</span>
                        <span>Specialized Solutions</span>
  )}

              About;
              Blog;
              Case Studies;
              Pricing;
              Contact;
                <span className="hidden sm:inline">+1 302 464 0950</span>"
                Get Started;
          {/* Mobile Menu Button */}

            {isMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   /></X></X>"
        {/* Mobile Menu */}
                  <span>Services</span>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>"
                            {service.name}
                        ))}
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>"
                            {service.name}
                        ))}

                      View All Services →
                )}

                About;
                Blog;
                Case Studies;
                Pricing;
                Contact;
                  <span>+1 302 464 0950</span>
                  Get Started;
        )}
  );
}
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}></nav>
      <div className="container mx-auto px-4"></div>"
        <div className="flex items-center justify-between h-16 lg:h-20"></div>"
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group"></Link>"
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>"
              <span className="text-white font-bold text-lg">Z</span>"
            </div>
            <div className="hidden sm:block"></div>"
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>"
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>"
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8"></div>"
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium"></Link>"
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              "
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group"></div>"
              <button,
onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white""
                aria-expanded={servicesOpen}
                aria-haspopup="true""
              >
                <Brain className="w-4 h-4" />"
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"></div>"
                  <div className="p-6"></div>"
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>"
                    <div className="grid grid-cols-2 gap-4"></div>"
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2"></div>"
                          <div className="flex items-center space-x-2 mb-2"></div>"
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>"
                          </div>
                          <div className="space-y-2"></div>"
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link,
key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors""
                                onClick={closeAllMenus}
                              ></Link>
                                <div className="font-medium">{service.name}</div>"
                                <div className="text-xs text-gray-500 group-hover:text-purple-500"></div>"
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link,
to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium""
                                onClick={closeAllMenus}
                              ></Link>
                                View All →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div></div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">"
                        <Brain className="w-4 h-4 mr-2" />"
                        AI Services
                      </h3>
                      <div className="space-y-2"></div>"
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors""
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />"
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div></div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">"
                        <Settings className="w-4 h-4 mr-2" />"
                        IT Services
                      </h3>
                      <div className="space-y-2"></div>"
                        {itServices.slice(0, 6).map((service) => (
                          <Link,
key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors""
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />"
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700"></div>"
                    <div className="grid grid-cols-2 gap-4"></div>"
                      <Link,
to="/services""
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all""
                        onClick={closeAllMenus}
                      ></Link>
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">"
              About
            </Link>

            <Link,
to="/blog""
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium""
              onClick={closeAllMenus}
            ></Link>
              Blog
            </Link>

            <Link,
to="/contact""
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium""
              onClick={closeAllMenus}
            ></Link>
              Contact
            </Link>
            
            <div className="flex items-center space-x-4"></div>"
              <a,
href="tel:+13024640950""
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors""
              >
                <Phone className="w-4 h-4" />"
                <span className="hidden sm:inline">+1 302 464 0950</span>"
              </a>
              <a href="/contact""
                className="cyber-button px-4 py-2 text-sm""
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden"></div>"
            <button,
onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300""
              aria-label="Toggle menu""
            ></button>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Shield, Zap, Brain, Globe } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />"
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-4 h-4" />"
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />"
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />"
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />"
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />"
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />"
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
        <div className="flex justify-between items-center h-16"></div>"
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">"
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center"></div>"
              <Brain className="w-5 h-5 text-white" />"
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>"
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block"></div>"
            <div className="ml-10 flex items-baseline space-x-4"></div>"
              {navigationItems.map((item) => (
                <Link,
key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden"></div>"
            <button,
onClick={onSidebarToggle || toggleMenu}
              className="text-gray-300 hover:text-white p-2""
              aria-label="Toggle menu""
            >
              <Menu className="w-6 h-6" />"
            </button>
          </div>
        </div>

              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>"
                About
              </Link>

              <Link,
to="/blog""
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md""
                onClick={closeAllMenus}
              ></Link>
                Blog
              </Link>

              <Link,
to="/contact""
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md""
                onClick={closeAllMenus}
              ></Link>
                Contact
              </Link>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden"></div>"
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20"></div>"
              {navigationItems.map((item) => (
                <Link,
key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                  onClick={() => setIsOpen(false)}
              
              <div className="pt-4 border-t border-gray-700"></div>"
                <a,
href="tel:+13024640950""
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4""
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
