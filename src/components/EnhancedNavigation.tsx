import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings,
  Bell,
  Sun,
  Moon,
  Monitor,
  Globe,
  Phone,
  Mail,
  MapPin,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Zap,
  Rocket,
  Cpu,
  Heart,
  ShoppingCart,
  MessageCircle,
  Users,
  BookOpen,
  DollarSign,
  Gauge,
  HelpCircle,
  Search as SearchIcon,
  Target,
  PenTool,
  Star
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  featured?: boolean;
}

interface EnhancedNavigationProps {
  className?: string;
  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'AI Services', 
    href: '/ai-services',
    children: [
      { label: 'AI & Machine Learning', href: '/services/ai-ml' },
      { label: 'AI Autonomous Research', href: '/services/ai-autonomous-research-assistant' },
      { label: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
      { label: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite' },
      { label: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
      { label: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },
      { label: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management' },
      { label: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
      { label: 'AI Customer Experience', href: '/services/ai-customer-experience-platform' },
      { label: 'AI Content Creation', href: '/services/ai-content-creation-suite' },
      { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform' },
      { label: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence-platform' },
      { label: 'AI Financial Analytics', href: '/services/ai-financial-analytics-platform' },
      { label: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
      { label: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform' },
      { label: '2025 AI Services', href: '/comprehensive-services-showcase-2025' }
    ]
  },
  { 
    label: 'IT Services', 
    href: '/it-services',
    children: [
      { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure-optimization', featured: true },
      { label: 'Cybersecurity & Compliance', href: '/services/comprehensive-cybersecurity' },
      { label: 'Digital Transformation', href: '/services/digital-transformation-consulting' },
      { label: 'Data Analytics & BI', href: '/services/data-analytics-business-intelligence' },
      { label: 'IT Infrastructure', href: '/services/it-infrastructure-management' },
      { label: 'Custom Software Development', href: '/services/custom-software-development' },
      { label: 'Managed IT Services', href: '/services/managed-it-services' },
      { label: 'Network Security', href: '/services/network-security-firewall' },
      { label: 'Cloud Migration', href: '/services/cloud-migration-strategy' },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'IT Consulting', href: '/services/it-consulting' },
      { label: '2025 IT Services', href: '/comprehensive-services-showcase-2025' }
    ]
  },
  { 
    label: 'Micro SaaS', 
    href: '/micro-saas',
    children: [
      { label: 'AI Content Studio Pro', href: '/services/ai-content-studio-pro', featured: true },
      { label: 'AI Customer Experience Optimizer', href: '/services/ai-cx-optimizer' },
      { label: 'AI Financial Intelligence', href: '/services/ai-financial-intelligence' },
      { label: 'AI Supply Chain Optimizer', href: '/services/ai-supply-chain-optimizer' },
      { label: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
      { label: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
      { label: 'AI Project Manager', href: '/services/ai-project-manager' },
      { label: 'AI Email Marketing', href: '/services/ai-email-marketing-automation' },
      { label: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer' },
      { label: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
      { label: '2025 Micro SaaS', href: '/comprehensive-services-showcase-2025' }
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { label: 'SMB Solutions', href: '/solutions/smb' },
      { label: 'Industry Specific', href: '/solutions/industry' },
      { label: 'AI-Powered Solutions', href: '/ai-solutions' },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare' },
      { label: 'Financial Services', href: '/solutions/financial' },
      { label: 'E-commerce Solutions', href: '/solutions/ecommerce' },
      { label: 'Quantum Computing', href: '/services/quantum-computing' },
      { label: 'IoT & Edge Computing', href: '/services/iot-edge-computing' }
    ]
  },
  { 
    label: 'Resources', 
    href: '/resources',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
      { label: 'Research & Development', href: '/research-development' },
      { label: 'White Papers', href: '/white-papers' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Help Center', href: '/help' }
    ]
  },
  { 
    label: 'Innovation', 
    href: '/innovation',
    children: [
      { label: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', featured: true },
      { label: 'Revolutionary Services 2030', href: '/revolutionary-services-2030' },
      { label: 'AI Marketplace Showcase', href: '/zion2026-ai-marketplace-showcase' },
      { label: 'Digital Twin', href: '/services/digital-twin' },
      { label: 'Space Technology', href: '/space-tech' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ 
  className = '',
  onThemeChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleThemeChange = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    onThemeChange?.(newTheme);
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
    
    localStorage.setItem('zion-theme', newTheme);
  }, [onThemeChange]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-slate-700">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                            {item.label}
                          </h3>
                        </div>
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={closeDropdown}
                              className={`flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                                child.featured ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                              }`}
                            >
                              {child.featured && <Star className="w-4 h-4 text-blue-600 mr-2" />}
                              <span className={child.featured ? 'font-medium' : ''}>
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                                child.featured ? 'font-medium text-blue-600 dark:text-blue-400' : ''
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};