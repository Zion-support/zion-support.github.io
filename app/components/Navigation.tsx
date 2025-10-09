'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Shield, Globe, Code, Database, Cloud, Bot, Target, BarChart, Settings, Users, Award, Lock, Smartphone, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
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

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone'
      });
    }
  }, []);

  const navigationItems = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, price: '$299/month' },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings, price: '$399/month' },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, price: '$199/month' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart, price: '$249/month' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, price: '$149/month' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, price: '$349/month' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe, price: '$199/month' },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video, price: '$499/month' },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Music, price: '$299/month' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Activity, price: '$399/month' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Camera, price: '$599/month' },
        { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code, price: '$199/month' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Paintbrush, price: '$299/month' },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, price: '$149/month' },
        { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music, price: '$199/month' },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: Briefcase, price: '$299/month' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, price: 'Custom' },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users, price: '$150/hour' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, price: '$299/month' },
        { name: 'Database Management', href: '/database-management', icon: Database, price: '$199/month' },
        { name: 'System Integration', href: '/system-integration', icon: Settings, price: 'Custom' },
        { name: 'Network Security', href: '/network-security', icon: Lock, price: '$249/month' }
      ]
    },
    {
      name: 'Industry Solutions',
      href: '/industry-solutions',
      icon: Building,
      dropdown: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope, price: '$1,999/month' },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard, price: '$1,499/month' },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory, price: '$2,499/month' },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart, price: '$999/month' },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap, price: '$799/month' },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car, price: '$1,299/month' }
      ]
    },
    {
      name: 'Advanced Tech',
      href: '/advanced-tech',
      icon: Zap,
      dropdown: [
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, price: 'Custom' },
        { name: 'Blockchain Solutions', href: '/blockchain', icon: Lock, price: '$999/month' },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: Smartphone, price: '$499/month' },
        { name: 'AR/VR Development', href: '/ar-vr', icon: Gamepad2, price: '$1,999/month' },
        { name: 'Machine Learning', href: '/machine-learning', icon: Brain, price: '$799/month' },
        { name: 'Deep Learning', href: '/deep-learning', icon: Cpu, price: '$1,299/month' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white cyber-text neon-text">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-medium hidden sm:block">
                AI & IT Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <subItem.icon className="w-4 h-4 text-cyan-400" />
                              <span className="text-white group-hover:text-cyan-400 transition-colors">
                                {subItem.name}
                              </span>
                            </div>
                            <span className="text-xs text-cyan-400 font-medium">
                              {subItem.price}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 cyber-glow">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-8 space-y-2">
                      {item.dropdown?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </div>
                          <span className="text-xs text-cyan-400">
                            {subItem.price}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-400/20 space-y-3">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="/contact"
                  className="cyber-button w-full text-center justify-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
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