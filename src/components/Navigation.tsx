'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Shield, Cloud, Database, Settings, Users, BarChart, MessageSquare, Eye, Target, TrendingUp, Star, CheckCircle, ArrowRight, Globe, Lock, Code, Smartphone, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const Navigation: React.FC = () => {
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

  // Handle phone click analytics
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'navigation',
        event_label: 'header_phone'
      });
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'Services',
      href: '#services',
      icon: Settings,
      dropdown: [
        {
          label: 'Micro SAAS',
          href: '/micro-saas',
          icon: Zap,
          description: 'AI-powered business tools'
        },
        {
          label: 'IT Services',
          href: '/it-services',
          icon: Cpu,
          description: 'Complete IT solutions'
        },
        {
          label: 'AI Solutions',
          href: '/ai-services',
          icon: Brain,
          description: 'Advanced AI technology'
        }
      ]
    },
    {
      label: 'AI Tools',
      href: '/ai-tools',
      icon: Brain,
      dropdown: [
        {
          label: 'AI Project Manager',
          href: '/ai-project-manager',
          icon: BarChart,
          description: 'Intelligent project planning'
        },
        {
          label: 'AI Analytics',
          href: '/ai-analytics',
          icon: TrendingUp,
          description: 'Data insights & analytics'
        },
        {
          label: 'AI Automation',
          href: '/ai-automation',
          icon: Zap,
          description: 'Process automation'
        },
        {
          label: 'AI Customer Support',
          href: '/ai-customer-support',
          icon: MessageSquare,
          description: '24/7 AI support'
        },
        {
          label: 'AI Code Generator',
          href: '/ai-code-generation',
          icon: Code,
          description: 'AI-powered development'
        },
        {
          label: 'AI Video Generator',
          href: '/ai-video-generation',
          icon: Video,
          description: 'Create videos with AI'
        },
        {
          label: 'AI Voice Cloning',
          href: '/ai-voice-cloning',
          icon: Microphone,
          description: 'Realistic voice synthesis'
        },
        {
          label: 'AI Fashion Design',
          href: '/ai-fashion-design',
          icon: Palette,
          description: 'AI fashion creation'
        },
        {
          label: 'AI Music Composer',
          href: '/ai-music-composition',
          icon: Music,
          description: 'AI music generation'
        },
        {
          label: 'AI Fitness Coach',
          href: '/ai-fitness-coach',
          icon: Heart,
          description: 'Personalized fitness'
        }
      ]
    },
    {
      label: 'IT Solutions',
      href: '/it-solutions',
      icon: Cpu,
      dropdown: [
        {
          label: 'Cloud Services',
          href: '/cloud-services',
          icon: Cloud,
          description: 'Cloud migration & management'
        },
        {
          label: 'Cybersecurity',
          href: '/cybersecurity',
          icon: Shield,
          description: 'Advanced security solutions'
        },
        {
          label: 'DevOps & CI/CD',
          href: '/devops',
          icon: Settings,
          description: 'Development automation'
        },
        {
          label: 'Database Services',
          href: '/database-services',
          icon: Database,
          description: 'Database optimization'
        },
        {
          label: 'Network Infrastructure',
          href: '/network-infrastructure',
          icon: Wifi,
          description: 'Network design & management'
        },
        {
          label: 'IT Support',
          href: '/it-support',
          icon: Headphones,
          description: '24/7 technical support'
        },
        {
          label: 'Data Analytics',
          href: '/data-analytics',
          icon: BarChart3,
          description: 'Business intelligence'
        },
        {
          label: 'Mobile Development',
          href: '/mobile-development',
          icon: Smartphone,
          description: 'App development'
        }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: Users
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <PhoneIcon className="w-4 h-4" />
                +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <MailIcon className="w-4 h-4" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center gap-2 text-pink-400">
                <Location className="w-4 h-4" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-green-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online Now
              </span>
              <a 
                href="https://ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    ZION TECH GROUP
                  </div>
                  <div className="text-xs text-gray-400">
                    AI & IT Solutions
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => item.dropdown ? toggleDropdown(item.label) : null}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl transition-all duration-300 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-300 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <dropdownItem.icon className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors duration-300" />
                              <div>
                                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu transition-all duration-300 ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-slate-800/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-8 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-slate-800/30"
                            onClick={() => setIsOpen(false)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span className="text-sm">{dropdownItem.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-cyan-500/20">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;