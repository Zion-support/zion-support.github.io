'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, ChevronRight, Brain, Cloud, Shield, Code, BarChart, 
  Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, 
  Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, 
  FileText, MessageCircle, Heart, DollarSign, Box, Monitor, 
  Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, 
  MessageSquare, CheckCircle, ShoppingCart, X, Menu, Book, Phone, Mail
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.sidebar')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users }
  ];

  const mainLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: Book },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/90 backdrop-blur-sm rounded-lg text-white hover:bg-slate-700 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zion Tech</span>
                <span className="text-xs text-cyan-400">AI & IT Solutions</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        location.pathname === link.href
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <button
                onClick={() => toggleSection('ai')}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" />
                  <span className="font-semibold">AI Services</span>
                </div>
                {expandedSections.includes('ai') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.includes('ai') && (
                <ul className="mt-2 ml-8 space-y-1">
                  {aiServices.slice(0, 10).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/ai-services"
                      className="flex items-center space-x-2 px-3 py-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>View All AI Services</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* IT Services */}
            <div>
              <button
                onClick={() => toggleSection('it')}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5" />
                  <span className="font-semibold">IT Services</span>
                </div>
                {expandedSections.includes('it') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.includes('it') && (
                <ul className="mt-2 ml-8 space-y-1">
                  {itServices.slice(0, 10).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/it-services"
                      className="flex items-center space-x-2 px-3 py-1 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>View All IT Services</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Micro SAAS */}
            <div>
              <button
                onClick={() => toggleSection('saas')}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Cpu className="w-5 h-5" />
                  <span className="font-semibold">Micro SAAS</span>
                </div>
                {expandedSections.includes('saas') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSections.includes('saas') && (
                <ul className="mt-2 ml-8 space-y-1">
                  {microSaasServices.slice(0, 10).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/micro-saas"
                      className="flex items-center space-x-2 px-3 py-1 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>View All Micro SAAS</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;