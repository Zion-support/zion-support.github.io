'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Zap, Brain, Cpu, Shield, Cloud, Code, Bot, Star, ArrowRight } from 'lucide-react';

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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const navigationItems = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics', price: '$299/mo' },
        { name: 'AI Automation', href: '/ai-automation', price: '$399/mo' },
        { name: 'AI Code Generation', href: '/ai-code-generation', price: '$199/mo' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: '$149/mo' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', price: '$249/mo' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: '$59/mo' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design', price: '$79/mo' },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach', price: '$39/mo' },
        { name: 'AI Music Composition', href: '/ai-music-composition', price: '$89/mo' },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: '$199/mo' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', price: '$299/mo' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: '$149/mo' },
        { name: 'AI Video Generation', href: '/ai-video-generation', price: '$199/mo' },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning', price: '$99/mo' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', price: '$399/mo' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: '$299/mo' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { name: 'Cloud Migration', href: '/cloud-migration', price: '$1,299/mo' },
        { name: 'IT Consulting', href: '/it-consulting', price: '$199/hr' },
        { name: 'Cybersecurity Suite', href: '/cybersecurity-suite', price: '$799/mo' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', price: '$599/mo' },
        { name: 'Database Management', href: '/database-management', price: '$399/mo' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      dropdown: [
        { name: 'AI Writing Assistant', href: '/ai-writing-assistant', price: '$19/mo' },
        { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder', price: '$99/mo' },
        { name: 'AI Design Studio', href: '/ai-design-studio', price: '$39/mo' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', price: '$49/mo' },
        { name: 'AI Fintech Solutions', href: '/ai-fintech', price: '$1,499/mo' },
        { name: 'Quantum Computing', href: '/quantum-computing', price: 'Custom' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', price: '$299/mo' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', price: '$199/mo' }
      ]
    },
    { name: 'About', href: '/about', icon: Star },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  onClick={() => item.dropdown ? toggleDropdown(item.name) : null}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 z-50">
                    <div className="grid grid-cols-1 gap-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeDropdown}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-white group-hover:text-cyan-400 transition-colors">
                              {subItem.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 text-sm font-medium">
                            {subItem.price}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{subItem.name}</span>
                          <span className="text-cyan-400">{subItem.price}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;