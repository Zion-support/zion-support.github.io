'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  FileText, 
  Settings, 
  BarChart3, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Globe, 
  Zap, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Box, 
  Monitor,
  ArrowRight,
  Eye,
  MessageSquare,
  Calendar,
  Mail
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: FileText }
  ];

  const aiServices = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Comprehensive AI services' },
    { name: 'Machine Learning', href: '/ai-ml', icon: BarChart3, description: 'ML models and algorithms' },
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image and video analysis' },
    { name: 'Natural Language Processing', href: '/ai-nlp', icon: MessageSquare, description: 'Text and speech processing' },
    { name: 'Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, description: 'Data-driven predictions' },
    { name: 'Automation', href: '/ai-automation', icon: Zap, description: 'Process automation solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Cloud migration and management' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions and audits' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database design and optimization' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Custom web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS and Android apps' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'CI/CD and infrastructure automation' }
  ];

  const microSaasServices = [
    { name: 'AI Content Writer', href: '/micro-saas/ai-content-writer', icon: FileText, description: 'AI-powered content creation' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', icon: BarChart3, description: 'Business intelligence tools' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', icon: Calendar, description: 'Booking and scheduling system' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', icon: Mail, description: 'Email campaign management' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', icon: DollarSign, description: 'Financial tracking tools' },
    { name: 'Inventory Management', href: '/micro-saas/inventory-management', icon: Box, description: 'Stock and asset tracking' },
    { name: 'Team Collaboration', href: '/micro-saas-collaboration', icon: Users, description: 'Team productivity tools' },
    { name: 'Financial Tracking', href: '/micro-saas-finance', icon: DollarSign, description: 'Financial management' },
    { name: 'Inventory Management', href: '/micro-saas-inventory', icon: Box, description: 'Stock and asset tracking' },
    { name: 'Performance Monitoring', href: '/micro-saas-monitoring', icon: Monitor, description: 'System performance tracking' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 flex items-center"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-1 gap-1">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeDropdown}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-purple-600 mr-3" />
                          <div>
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 flex items-center"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-1 gap-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeDropdown}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-purple-600 mr-3" />
                          <div>
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SaaS Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('microsaas')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 flex items-center"
                >
                  Micro SaaS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'microsaas' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-1 gap-1">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeDropdown}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-purple-600 mr-3" />
                          <div>
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;