import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'AI-powered invoice generation', icon: '📄', popular: true },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Smart expense management', icon: '🧾', popular: true },
        { name: 'AI Time Tracker', path: '/ai-time-tracker', description: 'Intelligent time tracking', icon: '⏰', popular: true },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false },
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Fintech', href: '/ai-fintech', icon: CreditCard },
        { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
        { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
        { name: 'AI Automation', href: '/ai-automation', icon: Zap },
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingDown },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Music },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Camera },
        { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
        { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Palette },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Activity },
        { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: Briefcase }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-400',
      services: [
        { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'DevOps & CI/CD', href: '/devops', icon: Code },
        { name: 'Database Services', href: '/database-services', icon: Database },
        { name: 'Network Services', href: '/network-services', icon: Globe }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-400',
      services: [
        { name: 'AI Code Review Assistant', href: '/ai-code-review', icon: Code },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3 },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: Target },
        { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText },
        { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
        { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Users },
        { name: 'AI E-commerce Solutions', href: '/ai-ecommerce', icon: ShoppingCart }
      ]
    }
  ];

  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainPages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                {page.name}
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  {serviceCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6 last:mb-0">
                      <div className="flex items-center mb-3">
                        <category.icon className={`w-5 h-5 ${category.color} mr-2`} />
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {category.services.slice(0, 6).map((service, serviceIndex) => (
                          <a
                            key={serviceIndex}
                            href={service.href}
                            className="flex items-center p-2 rounded hover:bg-slate-700 transition-colors group"
                          >
                            <service.icon className="w-4 h-4 text-gray-400 mr-3 group-hover:text-cyan-400" />
                            <span className="text-sm text-gray-300 group-hover:text-white">{service.name}</span>
                          </a>
                        ))}
                        {category.services.length > 6 && (
                          <a
                            href="/services"
                            className="text-sm text-cyan-400 hover:text-cyan-300 mt-2 font-medium"
                          >
                            View All {category.title} →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="tel:+13024640950"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">(302) 464-0950</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-sm shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {mainPages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </a>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <div className="flex items-center mb-3">
                      <category.icon className={`w-5 h-5 ${category.color} mr-2`} />
                      <h4 className="text-md font-semibold text-white">{category.title}</h4>
                    </div>
                    <div className="space-y-2 ml-7">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <a
                          key={serviceIndex}
                          href={service.href}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                      {category.services.length > 4 && (
                        <a
                          href="/services"
                          className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          View All →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-medium">kleber@ziontechgroup.com</span>
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