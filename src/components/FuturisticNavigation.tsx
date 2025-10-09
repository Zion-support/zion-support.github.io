'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Shield, Cloud, Database, Code, Settings, Users, BarChart, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const FuturisticNavigation: React.FC<FuturisticNavigationProps> = ({ className = '' }) => {
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
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { label: 'AI Automation', href: '/ai-automation', icon: Zap },
        { label: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare },
        { label: 'AI Data Visualization', href: '/ai-data-visualization', icon: Eye },
        { label: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { label: 'AI Project Manager', href: '/ai-project-manager', icon: Settings },
        { label: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Users },
        { label: 'AI Video Generation', href: '/ai-video-generation', icon: Sparkles },
        { label: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: MessageSquare },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Cpu }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { label: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { label: 'IT Consulting', href: '/it-consulting', icon: Settings },
        { label: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { label: 'Database Services', href: '/database-services', icon: Database },
        { label: 'DevOps & CI/CD', href: '/devops', icon: Code }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      dropdown: [
        { label: 'AI CRM', href: '/ai-crm', icon: Users },
        { label: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
        { label: 'AI Content Studio', href: '/ai-content-studio', icon: Code },
        { label: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
        { label: 'AI Scheduler', href: '/ai-scheduler', icon: Settings },
        { label: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Eye }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Sparkles,
      dropdown: [
        { label: 'Enterprise AI', href: '/enterprise-ai', icon: Brain },
        { label: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
        { label: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap },
        { label: 'Blockchain Solutions', href: '/blockchain', icon: Shield },
        { label: 'IoT & Edge Computing', href: '/iot-edge', icon: Cloud }
      ]
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-900 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Middletown, DE 19709
              </div>
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
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      } ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="neon-text">Zion Tech Group</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl cyber-glow">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <subItem.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <div>
                                <div className="text-white font-medium group-hover:text-cyan-300">
                                  {subItem.label}
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-300 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <a
                href="/contact"
                className="cyber-button px-6 py-2 text-sm font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="ml-6 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center gap-3 p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              <subItem.icon className="w-4 h-4" />
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-cyan-500/20">
                    <a
                      href="/contact"
                      className="cyber-button w-full text-center py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default FuturisticNavigation;