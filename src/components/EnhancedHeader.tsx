import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Brain,
  Shield,
  Cloud,
  Database,
  Cpu,
  Atom,
  Building,
  Users,
  FileText,
  Briefcase,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Rocket,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Code,
  Server,
  Network,
  Lock,
  Smartphone,
  Leaf,
  Satellite,
  ShoppingCart,
  Heart,
  Truck,
  DollarSign,
  BookOpen,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';

export default function EnhancedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
        {
          name: 'AI & Machine Learning',
          href: '/services/ai-machine-learning',
          icon: Brain,
          description: 'Cutting-edge AI solutions for business transformation'
        },
        {
          name: 'Cybersecurity Suite',
          href: '/services/ai-cybersecurity-suite',
          icon: Shield,
          description: 'Advanced security and compliance solutions'
        },
        {
          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Scalable cloud infrastructure and automation'
        },
        {
          name: 'Quantum Computing',
          href: '/services/quantum-computing',
          icon: Atom,
          description: 'Next-generation quantum solutions'
        },
        {
          name: 'IoT & Edge Computing',
          href: '/services/ai-iot-edge-computing-platform',
          icon: Cpu,
          description: 'Intelligent edge computing solutions'
        },
        {
          name: 'Blockchain Solutions',
          href: '/services/blockchain-enterprise-solutions',
          icon: Database,
          description: 'Secure blockchain and Web3 applications'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          name: 'Enterprise Solutions',
          href: '/solutions/enterprise',
          icon: Building,
          description: 'Scalable solutions for large organizations'
        },
        {
          name: 'Healthcare Solutions',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'AI-powered healthcare technology'
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: DollarSign,
          description: 'Secure financial technology solutions'
        },
        {
          name: 'Manufacturing Solutions',
          href: '/solutions/manufacturing',
          icon: Truck,
          description: 'Smart manufacturing and Industry 4.0'
        },
        {
          name: 'Retail Solutions',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'Next-generation retail technology'
        },
        {
          name: 'Government Solutions',
          href: '/solutions/government',
          icon: ShieldIcon,
          description: 'Secure government technology solutions'
        }
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText
    },
    {
      name: 'Careers',
      href: '/careers',
      icon: Briefcase
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    tagline: 'Innovating Tomorrow, Today',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@ziontechgroup.com',
      address: '123 Innovation Drive, Tech City, TC 12345'
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            {/* Company Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Users className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {companyInfo.name}
                </h1>
                <p className="text-xs text-cyan-400 font-medium tracking-wider">
                  {companyInfo.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-xl shadow-xl shadow-slate-900/50 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                      {dropdownItem.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-700/50 bg-slate-800/95 backdrop-blur-xl"
            >
              <div className="container mx-auto px-6 py-6">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-5 h-5" />
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-6 mt-2 space-y-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                                >
                                  <dropdownItem.icon className="w-4 h-4" />
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg text-center hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

// Placeholder Home icon component
const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
