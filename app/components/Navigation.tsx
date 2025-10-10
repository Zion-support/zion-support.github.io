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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
        { name: 'AI Fintech Platform', href: '/ai-fintech', icon: DollarSign },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic },
        { name: 'AI Code Security Auditor', href: '/ai-code-security-auditor', icon: Shield },
        { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', icon: Heart },
        { name: 'AI Smart Home Controller', href: '/ai-smart-home-controller', icon: Home },
        { name: 'AI Investment Optimizer', href: '/ai-investment-optimizer', icon: TrendingUp }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration', icon: Cloud },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure', icon: Settings },
        { name: '24/7 IT Support', href: '/it-support', icon: Users },
        { name: 'Custom Development', href: '/custom-development', icon: Code },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Zap },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'Network Design', href: '/network-design', icon: Globe },
        { name: 'Cloud Infrastructure Management', href: '/cloud-infrastructure-management', icon: Cloud },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar', icon: Calendar },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: Briefcase },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
        { name: 'AI Content Studio', href: '/ai-content-studio', icon: Palette },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing', icon: Cpu },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Bot },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Eye },
        { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
        { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket },
        { name: 'Innovation Labs', href: '/innovation-labs', icon: FlaskConical }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: MessageSquare }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
              <Zap className="w-5 h-5 text-white" />
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
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1 group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Settings className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-800/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10 p-8"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group text-sm"
                              >
                                <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>{service.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </li>
                          ))}
                          {category.services.length > 6 && (
                            <li>
                              <Link
                                to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
                              >
                                <span>View All {category.title}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <Video className="w-4 h-4" />
              <span>Demo</span>
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-slate-900/95 backdrop-blur-md z-40">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-3 text-lg"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Services</span>
                </h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      <h4 className="text-white font-medium">{category.title}</h4>
                    </div>
                    <ul className="ml-7 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            to={service.href}
                            onClick={closeMobileMenu}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-sm"
                          >
                            <service.icon className="w-4 h-4" />
                            <span>{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-gray-700">
                <Link
                  to="/demo"
                  onClick={closeMobileMenu}
                  className="w-full text-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center justify-center space-x-2 py-3 border border-gray-700 rounded-lg"
                >
                  <Video className="w-4 h-4" />
                  <span>View Demo</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Started</span>
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