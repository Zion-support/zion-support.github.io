'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ArrowRight, Brain, Cloud, Zap, Sparkles, Settings, BarChart, Phone, Home, Users, Briefcase, FileText, DollarSign, MessageSquare, Shield, Cpu, Database, Globe, Lock, Target, TrendingUp, Award, Clock, CheckCircle, Play, Download, ExternalLink, ChevronRight, Star, Quote, User, Building, GraduationCap, Heart, ThumbsUp, MessageCircle, Share2, Bookmark, Eye, MousePointer, Volume2, Accessibility, Wrench, Cog, Layers, Network, Server, Smartphone, Monitor, Wifi, Code, Palette, Calendar, FileText as FileTextIcon, MapPin as Location, Truck, ChefHat, Rocket, Sprout, Scale } from 'lucide-react';

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
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' }
      ]
    },
    {
      title: 'IT Solutions',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Database Services', href: '/database-services' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      services: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${item.color} ${item.bgColor} ${item.hoverColor}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                    {item.services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-4">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${item.color} ${item.bgColor} ${item.hoverColor}`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-slate-700">
              <a
                href="/contact"
                className="block w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-center transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;