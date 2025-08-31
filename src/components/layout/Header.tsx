import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  Phone,
  Mail,
  MapPin,
  Zap,
  Atom,
  Truck,
  Eye,
  BarChart3,
  FileText,
  Search,
  User,
  LogOut,
  ChevronUp
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Settings,
      dropdown: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Artificial Intelligence Solutions'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: Cpu,
          description: 'Information Technology Solutions'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: ShoppingCart,
          description: 'Software as a Service Solutions'
        },
        {
          name: 'Cybersecurity',
          href: '/services/ai-cybersecurity-platform',
          icon: Shield,
          description: 'AI-Powered Security Platform'
        },
        {
          name: 'Healthcare AI',
          href: '/services/ai-healthcare-platform',
          icon: Heart,
          description: 'AI Healthcare Solutions'
        },
        {
          name: 'Supply Chain AI',
          href: '/services/ai-supply-chain-optimization',
          icon: Truck,
          description: 'Supply Chain Optimization'
        },
        {
          name: 'Quantum AI',
          href: '/services/ai-quantum-hybrid-platform',
          icon: Atom,
          description: 'Quantum Computing Platform'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          name: 'Enterprise',
          href: '/enterprise',
          icon: Building,
          description: 'Enterprise Solutions'
        },
        {
          name: 'Industry Solutions',
          href: '/industry-solutions',
          icon: Factory,
          description: 'Industry-Specific Solutions'
        },
        {
          name: 'Digital Transformation',
          href: '/digital-transformation',
          icon: Rocket,
          description: 'Digital Transformation Services'
        },
        {
          name: 'Cloud Solutions',
          href: '/cloud-solutions',
          icon: Cloud,
          description: 'Cloud Infrastructure & Services'
        },
        {
          name: 'Emerging Tech',
          href: '/emerging-tech',
          icon: Zap,
          description: 'Emerging Technology Solutions'
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">Innovation & Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                              <h3 className="font-medium text-white">{dropdownItem.name}</h3>
                              <p className="text-sm text-gray-400">{dropdownItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Items */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                            >
                              <div className="flex items-center space-x-3">
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.name}</span>
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
                                className="ml-6 mt-2 space-y-2"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                                    onClick={closeMenu}
                                  >
                                    <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                    <span className="text-sm">{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-cyan-400 bg-cyan-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                        onClick={closeMenu}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-slate-700/50">
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/services"
                    className="block w-full px-6 py-3 border-2 border-cyan-500 text-cyan-500 font-medium text-center rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    onClick={closeMenu}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}