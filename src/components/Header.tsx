import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart, 
  Bell,
  Globe,
  Zap,
  Shield,
  Cpu,
  Brain,
  Building,
  FileText,
  HelpCircle,
  MessageSquare,
  Users,
  Briefcase,
  Star,
  Rocket,
  Leaf,
  Smartphone,
  DollarSign,
  Target,
  BookOpen,
  Code,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Heart,
  ThumbsUp,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  external?: boolean;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: Zap
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'Green IT', path: '/green-it', icon: Leaf },
        { name: 'Space Tech', path: '/space-tech', icon: Rocket },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: DollarSign },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', icon: Building }
      ]
    },
    {
      name: 'Company',
      path: '/company',
      icon: Building,
      children: [
        { name: 'About Us', path: '/about', icon: Building },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Press', path: '/press', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: Target }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: Target },
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'API Documentation', path: '/api-docs', icon: Code },
        { name: 'Tutorials', path: '/tutorials', icon: Code },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Documentation', path: '/documentation', icon: Code }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'FAQ', path: '/help-center#faq', icon: HelpCircle },
        { name: 'Contact Support', path: '/contact', icon: MessageSquare },
        { name: 'Live Chat', path: '/help-center/live-chat', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: Activity },
        { name: 'Request Quote', path: '/contact', icon: MessageSquare }
      ]
    }
  ];
=======
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const renderDropdown = (items: NavigationItem[], isOpen: boolean, onToggle: () => void) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
          isOpen
            ? 'bg-white/10 text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <span>Services</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="grid grid-cols-1 gap-2">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setIsServicesDropdownOpen(false);
                    setIsCompanyDropdownOpen(false);
                    setIsResourcesDropdownOpen(false);
                  }}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <div>
                    <div className="font-medium">{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
<<<<<<< HEAD
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
=======
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        if (item.name === 'Company') setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                        if (item.name === 'Resources') setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                      }}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
                        (item.name === 'Services' && isServicesDropdownOpen) ||
                        (item.name === 'Company' && isCompanyDropdownOpen) ||
                        (item.name === 'Resources' && isResourcesDropdownOpen)
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        (item.name === 'Services' && isServicesDropdownOpen) ||
                        (item.name === 'Company' && isCompanyDropdownOpen) ||
                        (item.name === 'Resources' && isResourcesDropdownOpen)
                          ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {(item.name === 'Services' && isServicesDropdownOpen) ||
                     (item.name === 'Company' && isCompanyDropdownOpen) ||
                     (item.name === 'Resources' && isResourcesDropdownOpen) ? (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                onClick={() => {
                                  setIsServicesDropdownOpen(false);
                                  setIsCompanyDropdownOpen(false);
                                  setIsResourcesDropdownOpen(false);
                                }}
                              >
                                {child.icon && <child.icon className="h-5 w-5" />}
                                <div>
                                  <div className="font-medium">{child.name}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
=======
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                  isActive(item.path) ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
=======
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
        </div>
      </div>

      {/* Mobile Navigation */}
<<<<<<< HEAD
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        if (item.name === 'Company') setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                        if (item.name === 'Resources') setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        (item.name === 'Services' && isServicesDropdownOpen) ||
                        (item.name === 'Company' && isCompanyDropdownOpen) ||
                        (item.name === 'Resources' && isResourcesDropdownOpen)
                          ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {(item.name === 'Services' && isServicesDropdownOpen) ||
                     (item.name === 'Company' && isCompanyDropdownOpen) ||
                     (item.name === 'Resources' && isResourcesDropdownOpen) ? (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
=======
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-400 bg-blue-600/20 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Link
                  to="/pricing"
                  className="block w-full text-center px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
    </header>
  );
};

export default Header;
