import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Mail } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Business Intelligence', path: '/ai-services/business-intelligence', description: 'Advanced analytics & insights' },
        { name: 'AI Document Processing', path: '/ai-services/document-processing', description: 'Intelligent document analysis' },
        { name: 'AI Customer Experience', path: '/ai-services/customer-experience', description: 'AI-powered customer interactions' },
        { name: 'AI Marketing Automation', path: '/ai-services/marketing-automation', description: 'Intelligent marketing campaigns' },
        { name: 'AI Predictive Maintenance', path: '/ai-services/predictive-maintenance', description: 'Equipment failure prevention' },
        { name: 'AI Supply Chain', path: '/ai-services/supply-chain', description: 'Supply chain optimization' },
        { name: 'AI Fraud Detection', path: '/ai-services/fraud-detection', description: 'Advanced fraud prevention' },
        { name: 'AI Content Generation', path: '/ai-services/content-generation', description: 'AI content creation' },
        { name: 'AI HR Analytics', path: '/ai-services/hr-analytics', description: 'Human resources optimization' },
        { name: 'AI Process Automation', path: '/ai-services/process-automation', description: 'Intelligent workflow automation' },
        { name: 'AI Quality Assurance', path: '/ai-services/quality-assurance', description: 'AI-powered quality control' },
        { name: 'AI Energy Management', path: '/ai-services/energy-management', description: 'Energy optimization solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      color: 'text-blue-400',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Support', path: '/it-support', description: 'Comprehensive IT support' },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Managed IT', path: '/managed-it', description: '24/7 IT management' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Settings,
      color: 'text-green-400',
      services: [
        { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard', description: 'Real-time business intelligence' },
        { name: 'Smart Support Bot', path: '/micro-saas/support-bot', description: 'AI customer service automation' },
        { name: 'Social Media Manager', path: '/micro-saas/social-manager', description: 'AI social media automation' },
        { name: 'Email Marketing Suite', path: '/micro-saas/email-marketing', description: 'AI email campaigns' },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', description: 'Smart inventory optimization' },
        { name: 'Lead Scoring System', path: '/micro-saas/lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'Document Processor', path: '/micro-saas/document-processor', description: 'AI document analysis' },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', description: 'AI SEO automation' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', description: 'Conversation analysis' },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', description: 'AI expense management' },
        { name: 'Content Generator', path: '/micro-saas/content-generator', description: 'AI content creation' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400 neon-glow">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              AI Solutions
            </Link>
            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Micro SAAS
            </Link>
            <Link to="/it-services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              IT Services
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-cyan-400/20">
              <Link
                to="/services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                AI Solutions
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;