import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedSearch from './EnhancedSearch';
import ThemeToggle from './ThemeToggle';
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
  Zap as ZapIcon,
  Home,
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  TrendingUp
} from 'lucide-react';

export default function EnhancedHeader() {
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
          title: 'AI & Machine Learning',
          items: [
            { name: 'AI Content Intelligence', href: '/services/ai-content-intelligence-platform', icon: Brain },
            { name: 'AI Customer Success Predictor', href: '/services/ai-customer-success-predictor', icon: Target },
            { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostic-assistant', icon: Heart },
            { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection-engine', icon: Shield }
          ]
        },
        {
          title: 'IT Services',
          items: [
            { name: 'Intelligent DevOps Automation', href: '/services/intelligent-devops-automation', icon: Server },
            { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-automation', icon: Cloud },
            { name: 'Cybersecurity Solutions', href: '/services/ai-threat-hunting-platform', icon: Lock },
            { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap }
          ]
        },
        {
          title: 'Micro SAAS',
          items: [
            { name: 'AI Content Creation Studio', href: '/services/AI-Content-Creation-Studio-Pro', icon: Code },
            { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', icon: TrendingUp },
            { name: 'Adaptive Learning Platform', href: '/services/adaptive-learning-platform', icon: BookOpen },
            { name: 'Sustainable Energy Optimizer', href: '/services/sustainable-energy-optimizer', icon: Leaf }
          ]
        },
        {
          title: 'Emerging Tech',
          items: [
            { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
            { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Database },
            { name: 'IoT Edge Analytics', href: '/services/ai-iot-edge-analytics', icon: Cpu },
            { name: 'Decentralized Identity', href: '/services/decentralized-identity-platform', icon: Lock }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
            { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck },
            { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart },
            { name: 'Education', href: '/solutions/education', icon: BookOpen }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
            { name: 'Cloud Solutions', href: '/solutions/cloud', icon: Cloud },
            { name: 'Security Solutions', href: '/solutions/security', icon: Shield },
            { name: 'Data Solutions', href: '/solutions/data', icon: Database }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        {
          title: 'Learning',
          items: [
            { name: 'Documentation', href: '/docs', icon: FileText },
            { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
            { name: 'Webinars', href: '/webinars', icon: Users },
            { name: 'Training', href: '/training', icon: Award }
          ]
        },
        {
          title: 'Content',
          items: [
            { name: 'Blog', href: '/blog', icon: Code },
            { name: 'Case Studies', href: '/case-studies', icon: Star },
            { name: 'White Papers', href: '/white-papers', icon: FileText },
            { name: 'Research', href: '/research', icon: Lightbulb }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/company',
      icon: Building,
      dropdown: [
        {
          title: 'About',
          items: [
            { name: 'Our Story', href: '/about', icon: Users },
            { name: 'Leadership', href: '/leadership', icon: Award },
            { name: 'Careers', href: '/careers', icon: Briefcase },
            { name: 'News', href: '/news', icon: FileText }
          ]
        },
        {
          title: 'Connect',
          items: [
            { name: 'Contact', href: '/contact', icon: MessageCircle },
            { name: 'Partners', href: '/partners', icon: Users },
            { name: 'Support', href: '/support', icon: MessageCircle },
            { name: 'Community', href: '/community', icon: Users }
          ]
        }
      ]
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    tagline: 'Innovating Tomorrow, Today',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: 'instagram' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:text-blue-200 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{companyInfo.name}</h1>
                  <p className="text-xs text-blue-600">{companyInfo.tagline}</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 transition-colors duration-200 font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 opacity-100 transition-all duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-4 px-4">
                        {item.dropdown.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm group"
                                  >
                                    <subItem.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span>{subItem.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search and Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4 mr-4">
              <EnhancedSearch 
                placeholder="Search services..."
                className="w-64"
                showFilters={false}
              />
              <ThemeToggle />
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/get-started"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2">
                        <span className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((section) => (
                          <div key={section.title}>
                            <h5 className="font-medium text-gray-900 text-sm mb-2">
                              {section.title}
                            </h5>
                            <ul className="space-y-1 ml-4">
                              {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    onClick={closeMenu}
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`flex items-center space-x-2 py-2 transition-colors duration-200 font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/get-started"
                  onClick={closeMenu}
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
