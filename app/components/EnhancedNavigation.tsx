'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MapPin, Menu, X, 
  Brain, Cloud, Shield, Code, BarChart, Users, 
  Zap, ArrowRight, Sparkles, Cpu, Target, Globe, 
  Database, Smartphone, Lock, TrendingUp, Settings, 
  Calendar, CheckSquare, FileText, MessageCircle, 
  Heart, DollarSign, Box, Monitor, Link as LinkIcon, 
  Server, Package, Mic, Workflow, Eye, Wifi, 
  MessageSquare, CheckCircle, ShoppingCart, Home,
  Building, Award, BookOpen, HelpCircle, User
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
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

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // Organized service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon, description: 'Smart contracts & DeFi' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Building },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: User },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Partners', href: '/partners', icon: Handshake }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Docs', href: '/api-docs', icon: Code },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: HelpCircle }
  ];

  const DropdownMenu = ({ items, title }: { items: any[], title: string }) => (
    <div className="absolute top-full left-0 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 z-50">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
            onClick={closeAllMenus}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                {item.name}
              </p>
              <p className="text-xs text-gray-600 truncate">{item.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`}
            >
              Home
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'ai' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'ai' && (
                <DropdownMenu items={aiServices} title="AI Services" />
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'it' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'it' && (
                <DropdownMenu items={itServices} title="IT Services" />
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'saas' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'saas' && (
                <DropdownMenu items={microSaasServices} title="Micro SaaS Solutions" />
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 z-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
                  <div className="space-y-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                        onClick={closeAllMenus}
                      >
                        <link.icon className="w-5 h-5 text-gray-600 group-hover:text-cyan-600" />
                        <span className="text-sm font-medium text-gray-900 group-hover:text-cyan-600">
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 z-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                  <div className="space-y-2">
                    {resourceLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                        onClick={closeAllMenus}
                      >
                        <link.icon className="w-5 h-5 text-gray-600 group-hover:text-cyan-600" />
                        <span className="text-sm font-medium text-gray-900 group-hover:text-cyan-600">
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-cyan-600 border border-cyan-600 hover:bg-cyan-600 hover:text-white'
                  : 'text-white border border-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Try Demo
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-2xl border border-white/20">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  AI Services
                </div>
                {aiServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block px-6 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile IT Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  IT Services
                </div>
                {itServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block px-6 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Company
                </div>
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block px-6 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Contact
                </Link>
                <Link
                  to="/demo"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-cyan-600 hover:bg-cyan-50"
                  onClick={closeAllMenus}
                >
                  Try Demo
                </Link>
                <Link
                  to="/consultation"
                  className="block px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default EnhancedNavigation;