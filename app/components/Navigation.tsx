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
  Search as SearchIcon,
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
  Scale,
  Mic,
  FlaskConical,
  DollarSign
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Bot },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: TrendingUp },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Natural Language Processing', href: '/ai-nlp', icon: MessageSquare },
    { name: 'AI Machine Learning', href: '/ai-ml-platform', icon: Cpu },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Network Management', href: '/network-management', icon: Globe },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps', href: '/devops', icon: Settings },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase },
    { name: 'System Administration', href: '/system-administration', icon: Wrench },
    { name: 'IT Support', href: '/it-support', icon: Phone },
  ];

  const microSaas = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Target },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
    { name: 'AI CRM Assistant', href: '/ai-crm-assistant', icon: Users },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30 shadow-lg shadow-cyan-400/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1 group"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai-services')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1 group"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ai-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'ai-services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-xl shadow-cyan-400/10 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium">View All AI Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1 group"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'it-services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-xl shadow-cyan-400/10 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium">View All IT Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1 group"
              >
                <Code className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'micro-saas' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-xl shadow-cyan-400/10 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {microSaas.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <Link
                      to="/micro-saas"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium">View All Micro SaaS</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/30">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-cyan-400 font-semibold mb-3">AI Services</h3>
                <div className="space-y-2">
                  {aiServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-cyan-400 font-semibold mb-3">IT Services</h3>
                <div className="space-y-2">
                  {itServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-cyan-400 font-semibold mb-3">Micro SaaS</h3>
                <div className="space-y-2">
                  {microSaas.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
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