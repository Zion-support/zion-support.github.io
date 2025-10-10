'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Zap, 
  Sparkles, 
  Settings, 
  BarChart, 
  Phone, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle, 
  Play, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  MousePointer, 
  Volume2, 
  Accessibility, 
  Wrench, 
  Cog, 
  Layers, 
  Network, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Code, 
  Palette, 
  Calendar, 
  FileText as FileTextIcon, 
  MapPin as Location, 
  Truck, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI-powered analytics' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Customer Support', href: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Marketing', href: '/ai-marketing', description: 'AI-driven marketing solutions' },
        { name: 'AI Project Management', href: '/ai-project-manager', description: 'Smart project coordination' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Automated sales processes' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Streamlined workflows' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Cpu,
      dropdown: [
        { name: 'Cloud Services', href: '/cloud-services', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Database Management', href: '/database-management', description: 'Efficient data handling' },
        { name: 'DevOps', href: '/devops', description: 'Streamlined development operations' },
        { name: 'IT Consulting', href: '/it-consulting', description: 'Expert IT guidance' },
        { name: 'IT Infrastructure', href: '/it-infrastructure', description: 'Robust infrastructure setup' },
        { name: 'Network Security', href: '/network-security', description: 'Secure network solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      dropdown: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', description: 'Comprehensive analytics' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
        { name: 'AI Content Generator', href: '/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Email Assistant', href: '/ai-email-assistant', description: 'Smart email management' },
        { name: 'AI Lead Generation', href: '/ai-lead-generation', description: 'Automated lead capture' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium">{subItem.name}</div>
                          <div className="text-xs text-slate-400 mt-1">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-slate-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;