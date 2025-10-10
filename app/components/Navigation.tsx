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
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone_number'
      });
    }
  };

  const aiServices = [
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Code },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Target },
    { name: 'AI Meeting Assistant', href: '/ai-meeting-assistant', icon: MessageSquare },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Video Creator', href: '/ai-video-creator', icon: Video },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: TrendingUp },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-cyan-400 font-semibold mb-2">AI Services</h3>
                    {aiServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-1"
                      >
                        <service.icon className="w-4 h-4" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                    <Link to="/ai-services" className="text-cyan-400 text-sm font-medium hover:underline">
                      View All AI Services →
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-700 my-3"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-green-400 font-semibold mb-2">IT Services</h3>
                    {itServices.slice(0, 4).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors py-1"
                      >
                        <service.icon className="w-4 h-4" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                    <Link to="/it-services" className="text-green-400 text-sm font-medium hover:underline">
                      View All IT Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link to="/" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      {aiServices.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors py-1 text-sm"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link to="/ai-services" className="block text-cyan-400 text-sm font-medium hover:underline mt-2">
                        View All AI Services →
                      </Link>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 mt-4">IT Services</h4>
                      {itServices.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block text-gray-300 hover:text-green-400 transition-colors py-1 text-sm"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link to="/it-services" className="block text-green-400 text-sm font-medium hover:underline mt-2">
                        View All IT Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-2"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;