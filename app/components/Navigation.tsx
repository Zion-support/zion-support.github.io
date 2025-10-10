'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedSearchModal from '../../src/components/EnhancedSearchModal';
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
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Password Generator Pro', path: '/ai-password-generator', description: 'Advanced password security', icon: '🔐', popular: true },
        { name: 'AI Email Signature Manager', path: '/ai-email-signature-manager', description: 'Professional email signatures', icon: '✉️', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Quantum Machine Learning', path: '/ai-quantum-ml-platform', description: 'Quantum ML platform', icon: '⚛️', popular: true },
        { name: 'AI Space Mission Control', path: '/ai-space-mission-control', description: 'Space mission AI', icon: '🚀', popular: true },
        { name: 'AI Climate Intelligence', path: '/ai-climate-intelligence', description: 'Climate monitoring AI', icon: '🌱', popular: true },
        { name: 'AI Pharmaceutical Research', path: '/ai-pharmaceutical-research', description: 'Drug discovery AI', icon: '💊', popular: true },
        { name: 'AI Financial Intelligence', path: '/ai-financial-intelligence', description: 'Financial AI suite', icon: '💰', popular: true },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', description: 'Autonomous vehicle AI', icon: '🚗', popular: true },
        { name: 'AI Blockchain Intelligence', path: '/ai-blockchain-intelligence', description: 'Blockchain AI platform', icon: '⛓️', popular: true },
        { name: 'AI Supply Chain Intelligence', path: '/ai-supply-chain-intelligence', description: 'Supply chain AI', icon: '📦', popular: true },
        { name: 'AI Legal Intelligence', path: '/ai-legal-intelligence', description: 'Legal AI platform', icon: '⚖️', popular: true },
        { name: 'AI Agricultural Intelligence', path: '/ai-agricultural-intelligence', description: 'Smart farming AI', icon: '🌾', popular: true },
        { name: 'AI Energy Grid Intelligence', path: '/ai-energy-grid-intelligence', description: 'Energy grid AI', icon: '⚡', popular: true },
        { name: 'AI Manufacturing Intelligence', path: '/ai-manufacturing-intelligence', description: 'Manufacturing AI', icon: '🏭', popular: true }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Quantum Computing Infrastructure', path: '/quantum-computing-infrastructure', description: 'Quantum computing setup', icon: '⚛️', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: '5G network deployment', icon: '📶', popular: true },
        { name: 'Metaverse Platform Development', path: '/metaverse-development', description: 'Metaverse solutions', icon: '🥽', popular: true },
        { name: 'Web3 Infrastructure Services', path: '/web3-infrastructure', description: 'Web3 and blockchain', icon: '⛓️', popular: true },
        { name: 'AI Infrastructure as a Service', path: '/ai-infrastructure-service', description: 'AI infrastructure platform', icon: '🧠', popular: true },
        { name: 'MLOps Platform Implementation', path: '/mlops-platform', description: 'MLOps platform', icon: '⚙️', popular: true },
        { name: 'Zero Trust Security Architecture', path: '/zero-trust-architecture', description: 'Zero trust security', icon: '🛡️', popular: true },
        { name: 'AI-Powered Security Operations', path: '/ai-security-operations', description: 'AI security operations', icon: '🔒', popular: true },
        { name: 'Real-time Data Platform', path: '/real-time-data-platform', description: 'Real-time data processing', icon: '📊', popular: true },
        { name: 'Data Lake & Warehouse Modernization', path: '/data-modernization', description: 'Modern data solutions', icon: '🗄️', popular: true },
        { name: 'Multi-Cloud Management Platform', path: '/multi-cloud-management', description: 'Multi-cloud management', icon: '☁️', popular: true },
        { name: 'Hybrid Cloud Architecture', path: '/hybrid-cloud-architecture', description: 'Hybrid cloud solutions', icon: '🌐', popular: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing Solutions', path: '/quantum-computing-infrastructure', description: 'Quantum computing infrastructure', icon: '⚛️', popular: true },
        { name: '5G & Edge Computing', path: '/5g-implementation', description: '5G and edge solutions', icon: '📶', popular: true },
        { name: 'Metaverse & Web3', path: '/metaverse-development', description: 'Metaverse and Web3', icon: '🥽', popular: true },
        { name: 'AI Infrastructure', path: '/ai-infrastructure-service', description: 'AI infrastructure solutions', icon: '🧠', popular: true },
        { name: 'Blockchain & DeFi', path: '/web3-infrastructure', description: 'Blockchain and DeFi', icon: '⛓️', popular: true },
        { name: 'IoT & Smart Cities', path: '/smart-city-solutions', description: 'IoT and smart cities', icon: '🏙️', popular: true },
        { name: 'Cybersecurity & Zero Trust', path: '/zero-trust-architecture', description: 'Advanced security', icon: '🛡️', popular: true },
        { name: 'Data & Analytics', path: '/real-time-data-platform', description: 'Data and analytics', icon: '📊', popular: true },
        { name: 'Cloud & Hybrid', path: '/multi-cloud-management', description: 'Cloud solutions', icon: '☁️', popular: true }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'IT Services', path: '/it-services', icon: Cloud },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Code },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">{/* Logo */}</div>
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group<span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
                onClick={closeAllMenus}
              >Home<Link 
                to="/about" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >About</Link>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"</button>
                ><span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-6 z-50">
                    <div className="grid grid-cols-2 gap-6 px-6">{serviceCategories.map((category, index) => (</div>
                        <div key={index} className="space-y-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                            <h3 className="font-semibold text-white text-sm">{category.title}<div className="space-y-2">{category.services.slice(0, 6).map((service, serviceIndex) => (<Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >{service.name}</Link>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all"
                        onClick={closeAllMenus}
                      >View All Services</Link>
                      </Link>
                    </div>
                  </div>
                )}
              <Link 
                to="/ai-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >AI Services<Link 
                to="/it-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >IT Services</Link>
              <Link 
                to="/micro-saas" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >Micro SAAS<Link 
                to="/case-studies" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >Case Studies</Link>
              <Link 
                to="/blog" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >Blog<Link 
                to="/pricing" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >Pricing</Link>
              </Link>

              {/* Search Button */}
              <button
                onClick={() =>setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"</button>
              ></button>
                <Search className="w-5 h-5" />
              <Link
                to="/contact"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >Contact</Link>
              </Link>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="cyber-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
                onClick={closeAllMenus}
              >Get Started</Link>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle menu"</button>
            ></button>
              {isOpen ? <X className="w-6 h-6" >: <Menu className="w-6 h-6" >}</Menu>
            </Menu>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="space-y-4">{mainLinks.map((link, index) => (</div>
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                    onClick={closeAllMenus}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div>
                  <button
                    className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
                    onClick={() =>setServicesOpen(!servicesOpen)}</button>
                  ></button>
                    <Settings className="w-4 h-4" />
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div className="ml-6 mt-2 space-y-2">{serviceCategories.map((category, categoryIndex) => (</div>
                        <div key={categoryIndex} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-cyan-400 font-medium text-sm">{category.title}<div className="ml-6 space-y-1">{category.services.slice(0, 3).map((service, serviceIndex) => (<Link
                                key={serviceIndex}
                                to={service.path}
                                className="block text-gray-300 hover:text-cyan-400 text-sm py-1"
                                onClick={closeAllMenus}
                              >{service.name}</Link>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all text-center mt-4"
                  onClick={closeAllMenus}
                >Get Started</Link>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Search Modal */}
      <EnhancedSearchModal isOpen={isSearchOpen} onClose={() =>setIsSearchOpen(false)} /></EnhancedSearchModal>
    </>
  );
};

export default Navigation;