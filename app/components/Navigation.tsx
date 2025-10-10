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
  DollarSign,
  Receipt,
  Key,
  Volume2,
  FileText as Invoice,
  Lock as Password,
  ChartLine
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer-pro', icon: ChartLine },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', icon: FlaskConical },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', icon: Sprout },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro', icon: Rocket },
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle', icon: Zap },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant', icon: Brain },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration Pro', href: '/cloud-migration-pro', icon: Cloud },
        { name: 'Cybersecurity Suite', href: '/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure', icon: Settings },
        { name: '24/7 IT Support', href: '/it-support', icon: Clock },
        { name: 'Custom Development', href: '/custom-development', icon: Code },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'Network Design', href: '/network-design', icon: Globe },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services', icon: Lock },
        { name: 'Smart Contract Security', href: '/smart-contract-security-audit', icon: Shield }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      services: [
        { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker-pro', icon: Receipt },
        { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator-pro', icon: Invoice },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro', icon: Password },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share2 },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: PieChart },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
        { name: 'AI Content Studio', href: '/ai-content-studio', icon: Palette },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-orange-400',
      services: [
        { name: 'Quantum Computing', href: '/ai-quantum-computing', icon: Zap },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems', icon: Car },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Video },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cpu },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Lock },
        { name: 'Smart Cities', href: '/smart-cities', icon: Building },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: TrendingUp },
        { name: 'Innovation Labs', href: '/innovation-labs', icon: FlaskConical },
        { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart3 },
        { name: 'Robotics Solutions', href: '/robotics', icon: Settings }
      ]
    }
  ];

  const mainPages = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
    { name: 'Consultation', href: '/consultation', icon: Phone }
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
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-4">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link 
                                to={service.href}
                                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                              >
                                <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                <span className="text-sm">{service.name}</span>
                              </Link>
                            </li>
                          ))}
                          {category.services.length > 6 && (
                            <li>
                              <Link 
                                to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                              >
                                View All {category.title}
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Pages */}
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <page.icon className="w-4 h-4" />
                <span>{page.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2 mb-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span className="text-cyan-400 font-medium">{category.title}</span>
                      </div>
                      <ul className="ml-6 space-y-2">
                        {category.services.slice(0, 4).map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link 
                              to={service.href}
                              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <service.icon className="w-3 h-3" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Main Pages */}
              <div>
                <h3 className="text-white font-semibold mb-4">Pages</h3>
                <ul className="space-y-2">
                  {mainPages.map((page, index) => (
                    <li key={index}>
                      <Link
                        to={page.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <page.icon className="w-4 h-4" />
                        <span>{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-3">
                  <a 
                    href="tel:+13024640950" 
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <div className="flex items-start space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
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