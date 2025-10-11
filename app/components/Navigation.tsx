'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  Shield,
  Zap,
  Cloud,
  Code,
  Settings,
  MessageSquare,
  FileText,
  Globe,
  Target,
  TrendingUp,
  Database,
  Cpu,
  Smartphone,
  Lock,
  Eye,
  Mic,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Workflow,
  Wifi,
  ShoppingCart,
  Rocket,
  Clock,
  Award,
  Lightbulb,
  Gauge
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: Brain,
      dropdown: [
        { name: 'AI Analytics Pro', href: '/ai-analytics-pro', description: 'Advanced business intelligence' },
        { name: 'AI Content Studio', href: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant', description: 'Intelligent customer management' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', description: 'SEO analysis and optimization' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/it-services', 
      icon: Settings,
      dropdown: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', description: 'Advanced security protection' },
        { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
        { name: 'Mobile Development', href: '/mobile-development', description: 'Native mobile apps' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', description: 'Automated deployment' },
        { name: 'Database Management', href: '/database-management', description: 'Database optimization' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas', 
      icon: Package,
      dropdown: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Content Generator', href: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Project Manager', href: '/ai-project-manager', description: 'Intelligent project management' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'AI Email Assistant', href: '/ai-email-assistant', description: 'Smart email management' }
      ]
    },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  onClick={() => closeDropdown()}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <item.icon className="w-5 h-5 mr-2 text-cyan-400" />
                        {item.name}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                            <div>
                              <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {subItem.description}
                              </div>
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
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:+13024640950"
              className="px-4 py-2 text-cyan-400 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-xl mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      closeDropdown();
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (302) 464-0950</span>
                </a>
                <a
                  href="/contact"
                  className="block w-full mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Quote
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