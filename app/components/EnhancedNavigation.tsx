'use client';
import React, { useState, useEffect, useCallback } from 'react';
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
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart,
  Home,
  Info,
  Contact,
  Briefcase,
  BookOpen,
  Award,
  Headphones,
  ExternalLink
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'About',
      href: '/about',
      icon: Info
    },
    {
      label: 'Services',
      href: '#',
      icon: Briefcase,
      dropdown: 'services',
      items: [
        {
          label: 'AI Solutions',
          href: '/ai-solutions',
          icon: Brain,
          description: 'Advanced AI and machine learning services',
          color: 'from-purple-500 to-pink-500'
        },
        {
          label: 'IT Solutions',
          href: '/it-solutions',
          icon: Server,
          description: 'Comprehensive IT infrastructure and services',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          label: 'Micro SAAS',
          href: '/micro-saas-services',
          icon: Package,
          description: 'Powerful micro SAAS applications',
          color: 'from-green-500 to-emerald-500'
        },
        {
          label: 'Cloud Services',
          href: '/cloud-services',
          icon: Cloud,
          description: 'Scalable cloud infrastructure solutions',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          label: 'Cybersecurity',
          href: '/cybersecurity',
          icon: Shield,
          description: 'Advanced security and compliance solutions',
          color: 'from-red-500 to-orange-500'
        },
        {
          label: 'Development',
          href: '/development',
          icon: Code,
          description: 'Custom software and application development',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    {
      label: 'AI Services',
      href: '#',
      icon: Brain,
      dropdown: 'ai-services',
      items: [
        {
          label: 'AI Chatbots',
          href: '/ai-chatbot-enterprise',
          icon: MessageCircle,
          description: 'Intelligent conversational AI solutions',
          color: 'from-purple-500 to-pink-500'
        },
        {
          label: 'Computer Vision',
          href: '/ai-computer-vision',
          icon: Eye,
          description: 'Advanced image recognition and analysis',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          label: 'Voice AI',
          href: '/ai-voice-assistant',
          icon: Mic,
          description: 'Speech recognition and voice assistants',
          color: 'from-green-500 to-emerald-500'
        },
        {
          label: 'Predictive Analytics',
          href: '/ai-predictive-analytics',
          icon: BarChart,
          description: 'Machine learning-powered forecasting',
          color: 'from-orange-500 to-red-500'
        },
        {
          label: 'Content Generation',
          href: '/ai-content-generation',
          icon: FileText,
          description: 'AI-powered content creation tools',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          label: 'Workflow Automation',
          href: '/ai-workflow-automation',
          icon: Workflow,
          description: 'Intelligent process automation',
          color: 'from-teal-500 to-green-500'
        }
      ]
    },
    {
      label: 'IT Services',
      href: '#',
      icon: Server,
      dropdown: 'it-services',
      items: [
        {
          label: 'Cloud Migration',
          href: '/cloud-migration',
          icon: Cloud,
          description: 'Seamless cloud infrastructure migration',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          label: 'Network Infrastructure',
          href: '/network-infrastructure',
          icon: Wifi,
          description: 'Complete network design and implementation',
          color: 'from-green-500 to-emerald-500'
        },
        {
          label: 'Database Management',
          href: '/database-management',
          icon: Database,
          description: 'Database optimization and maintenance',
          color: 'from-purple-500 to-pink-500'
        },
        {
          label: 'Mobile Development',
          href: '/mobile-development',
          icon: Smartphone,
          description: 'Native and cross-platform mobile apps',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          label: 'Web Development',
          href: '/web-development',
          icon: Monitor,
          description: 'Custom web applications and websites',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          label: 'IT Consulting',
          href: '/it-consulting',
          icon: Target,
          description: 'Strategic technology consulting',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    {
      label: 'Resources',
      href: '#',
      icon: BookOpen,
      dropdown: 'resources',
      items: [
        {
          label: 'Case Studies',
          href: '/case-studies',
          icon: Award,
          description: 'Success stories and project showcases',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          label: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Latest insights and technology trends',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          label: 'Tutorials',
          href: '/tutorials',
          icon: BookOpen,
          description: 'Step-by-step guides and tutorials',
          color: 'from-green-500 to-emerald-500'
        },
        {
          label: 'Documentation',
          href: '/documentation',
          icon: FileText,
          description: 'Technical documentation and APIs',
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Contact
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-cyan-400 font-semibold">24/7 Support Available</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI & IT Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.dropdown!)}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.dropdown ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 glass-card p-6 rounded-xl shadow-2xl border border-cyan-500/20">
                      <div className="grid grid-cols-1 gap-3">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                            onClick={closeAllDropdowns}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${subItem.color} group-hover:scale-110 transition-transform duration-300`}>
                              <subItem.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {subItem.label}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {subItem.description}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="glass-card px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 rounded-lg">
                <Headphones className="w-4 h-4 mr-2" />
                Support
              </button>
              <button className="cyber-button">
                <Calendar className="w-4 h-4 mr-2" />
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.dropdown!)}
                          className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 py-3"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.dropdown ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.dropdown && (
                          <div className="ml-6 space-y-2 mt-2">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                                onClick={() => {
                                  setIsOpen(false);
                                  closeAllDropdowns();
                                }}
                              >
                                <subItem.icon className="w-4 h-4" />
                                <span>{subItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 py-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-col space-y-3">
                    <button className="glass-card px-4 py-3 text-white hover:bg-white/10 transition-all duration-300 rounded-lg text-center">
                      <Headphones className="w-4 h-4 mr-2 inline" />
                      Support
                    </button>
                    <button className="cyber-button w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};

export default EnhancedNavigation;