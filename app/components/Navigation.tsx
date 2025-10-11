'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Atom,
  Server,
  Code,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Settings,
  Users,
  Globe,
  Target,
  Lightbulb,
  Monitor,
  Wifi,
  FileText,
  PieChart,
  MessageSquare,
  Calendar,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Truck,
  Home,
  Car,
  Plane,
  Heart,
  BookOpen,
  Gamepad2,
  Headphones,
  Mic,
  Image,
  Download,
  Upload,
  Share2,
  Link as LinkIcon,
  Copy,
  Edit,
  Trash2,
  Save,
  Search,
  Filter,
  Sort,
  RefreshCw,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Shield as ShieldIcon2,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Services',
      href: '/services',
      icon: Settings,
      submenu: [
        {
          title: 'Micro SAAS Services',
          href: '/micro-saas-services',
          icon: Rocket,
          description: 'Affordable micro SAAS solutions'
        },
        {
          title: 'Advanced AI Services',
          href: '/ai-services-advanced',
          icon: Atom,
          description: 'Cutting-edge AI solutions'
        },
        {
          title: 'IT Services',
          href: '/it-services-comprehensive',
          icon: Server,
          description: 'Comprehensive IT solutions'
        },
        {
          title: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'AI-powered solutions'
        },
        {
          title: 'Cloud Infrastructure',
          href: '/cloud-infrastructure',
          icon: Cloud,
          description: 'Scalable cloud solutions'
        },
        {
          title: 'Cybersecurity',
          href: '/cybersecurity',
          icon: Shield,
          description: 'Security solutions'
        }
      ]
    },
    {
      title: 'About',
      href: '/about',
      icon: Users
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: FileText
    },
    {
      title: 'Pricing',
      href: '/pricing',
      icon: CreditCard
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                              <subItem.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{subItem.title}</div>
                              <div className="text-gray-400 text-sm">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-6 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          <subItem.icon className="w-3 h-3" />
                          <span className="text-sm">{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
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
