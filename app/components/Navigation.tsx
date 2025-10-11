'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
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
  ShoppingCart 
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics solutions' },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data insights and analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'Native and cross-platform apps' },
    { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', href: '/database-management', description: 'Database design and optimization' },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Strategic IT guidance' }
  ];

  const microSaasServices = [
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', description: 'AI-powered writing tools' },
    { name: 'AI Code Assistant', href: '/ai-code-assistant', description: 'AI coding companion' },
    { name: 'AI Task Manager', href: '/ai-task-manager', description: 'Intelligent task management' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', description: 'Smart expense tracking' },
    { name: 'AI Time Tracker', href: '/ai-time-tracker', description: 'Automated time tracking' },
    { name: 'AI Project Manager', href: '/ai-project-manager', description: 'AI-driven project management' },
    { name: 'AI CRM Assistant', href: '/ai-crm-assistant', description: 'Customer relationship management' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', description: 'Business intelligence dashboard' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {servicesDropdown.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        >
                          <Icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setActiveDropdown('company')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {companyDropdown.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        >
                          <Icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {resourcesDropdown.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        >
                          <Icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
