'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Mail, 
  Menu, 
  X, 
  Cloud, 
  BarChart, 
  ArrowRight, 
  Target, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  FileText, 
  MessageCircle, 
  Box, 
  Link as LinkIcon, 
  Workflow, 
  Eye, 
  Mic,
  Brain,
  Share,
  Video,
  Code,
  CheckCircle,
  Users,
  Shield
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigationItems = [
    {
      title: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      children: [
        { title: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { title: 'AI Customer Support', href: '/ai-customer-support', icon: MessageCircle },
        { title: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { title: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
        { title: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
        { title: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Target },
        { title: 'AI Inventory Management', href: '/ai-inventory-management', icon: Box },
        { title: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText },
        { title: 'AI Project Management', href: '/ai-project-management', icon: Workflow },
        { title: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share },
        { title: 'AI Video Generation', href: '/ai-video-generation', icon: Video },
        { title: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      children: [
        { title: 'Cloud Architecture', href: '/cloud-architecture', icon: Cloud },
        { title: 'Cloud Migration', href: '/cloud-migration', icon: ArrowRight },
        { title: 'Cloud Security', href: '/cloud-security', icon: Shield }
      ]
    },
    {
      title: 'Development',
      href: '/development',
      icon: Code,
      children: [
        { title: 'Web Development', href: '/web-development', icon: Globe },
        { title: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
        { title: 'API Development', href: '/api-development', icon: LinkIcon }
      ]
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: BarChart,
      children: [
        { title: 'Data Analytics', href: '/data-analytics', icon: BarChart },
        { title: 'Business Intelligence', href: '/business-intelligence', icon: TrendingUp },
        { title: 'Performance Monitoring', href: '/performance-monitoring', icon: Eye }
      ]
    },
    {
      title: 'Security',
      href: '/security',
      icon: Shield,
      children: [
        { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { title: 'Security Audit', href: '/security-audit', icon: Eye },
        { title: 'Compliance', href: '/compliance', icon: CheckCircle }
      ]
    },
    {
      title: 'About',
      href: '/about',
      icon: Users
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Mail
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <child.icon className="w-4 h-4" />
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.children && (
                    <div className="ml-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={closeMenu}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <child.icon className="w-3 h-3" />
                          <span>{child.title}</span>
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