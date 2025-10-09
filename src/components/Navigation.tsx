'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Home',
      href: '/',
      icon: Home,
    },
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { title: 'Machine Learning', href: '/machine-learning', icon: Brain },
        { title: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
        { title: 'Computer Vision', href: '/computer-vision', icon: Eye },
        { title: 'AI Automation', href: '/ai-automation', icon: Zap },
        { title: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { title: 'AI Healthcare', href: '/ai-healthcare', icon: Stethoscope },
        { title: 'AI Fintech', href: '/ai-fintech', icon: CreditCard },
        { title: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { title: 'Quantum AI', href: '/quantum-ai', icon: Atom },
      ],
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { title: 'Cloud Services', href: '/cloud-services', icon: Cloud },
        { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { title: 'DevOps & CI/CD', href: '/devops', icon: Settings },
        { title: 'Database Services', href: '/database-services', icon: Database },
        { title: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
        { title: 'IT Consulting', href: '/it-consulting', icon: Briefcase },
        { title: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { title: 'IT Support', href: '/it-support', icon: Users },
      ],
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      dropdown: [
        { title: 'AI Project Manager', href: '/ai-project-manager', icon: Target },
        { title: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Smartphone },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
        { title: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { title: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
        { title: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
        { title: 'AI Content Generator', href: '/ai-content-generation', icon: FileText },
        { title: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
        { title: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
        { title: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
        { title: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
        { title: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator },
        { title: 'AI Video Generator', href: '/ai-video-generation', icon: Video },
        { title: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
        { title: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
        { title: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
        { title: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
        { title: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
        { title: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
        { title: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
        { title: 'AI 3D Generation', href: '/ai-3d-generation', icon: Camera },
      ],
    },
    {
      title: 'Specialized Solutions',
      href: '/specialized-solutions',
      icon: Sparkles,
      dropdown: [
        { title: 'Quantum Computing', href: '/quantum-computing', icon: Atom },
        { title: 'Autonomous Systems', href: '/autonomous-systems', icon: Cpu },
        { title: 'Blockchain & Web3', href: '/blockchain-web3', icon: Lock },
        { title: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe },
        { title: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
        { title: 'Robotics Solutions', href: '/robotics', icon: Settings },
        { title: 'Enterprise Solutions', href: '/enterprise', icon: Building },
        { title: 'Analytics Tools', href: '/analytics-tools', icon: BarChart },
        { title: 'Business Apps', href: '/business-apps', icon: Briefcase },
        { title: 'Developer Tools', href: '/developer-tools', icon: Code },
        { title: 'Marketing Tools', href: '/marketing-tools', icon: Target },
        { title: 'Productivity Solutions', href: '/productivity', icon: BarChart },
      ],
    },
    {
      title: 'About',
      href: '/about',
      icon: Users,
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone,
    },
  ];

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone'
      });
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-purple-900 border-b border-cyan-400/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Middletown, DE
              </a>
            </div>
            <div className="text-gray-400 text-xs">
              Leading AI & IT Solutions Provider
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold font-cyber neon-text">
                  Zion Tech Group
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl transition-all duration-300 ${
                      activeDropdown === item.title 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                              onMouseLeave={() => setActiveDropdown(null)}
                            >
                              <subItem.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                              <div>
                                <div className="font-medium">{subItem.title}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
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
                href="/contact"
                className="cyber-button px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/30">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg text-white hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-8 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span className="text-sm">{subItem.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-cyan-400/20">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center py-3 font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started Today
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