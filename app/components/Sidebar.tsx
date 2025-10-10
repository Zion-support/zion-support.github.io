'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Brain, Cloud, Code, BarChart, Users, Settings, Globe, Database, Shield, Zap, Target, Calendar, FileText, MessageCircle, Phone, Mail, MapPin, Clock, Award, TrendingUp, Cpu, Monitor, Lock, Workflow, Eye, Mic, Heart, DollarSign, Star, CheckSquare, Headphones, MessageSquare, Package, ShoppingCart, Building } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Monitor },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Headphones },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target }
  ];

  const companyPages = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Award },
    { name: 'Careers', href: '/careers', icon: Star },
    { name: 'Partners', href: '/partners', icon: Globe },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'News & Press', href: '/news', icon: Calendar }
  ];

  const resourcePages = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: Code },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Support Center', href: '/support', icon: Headphones },
    { name: 'FAQ', href: '/faq', icon: MessageCircle }
  ];

  const enterprisePages = [
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Custom Development', href: '/custom-development', icon: Code },
    { name: 'Consulting Services', href: '/consulting', icon: Users },
    { name: 'Training Programs', href: '/training', icon: Award },
    { name: 'Security & Compliance', href: '/security', icon: Shield },
    { name: 'SLA & Support', href: '/sla', icon: CheckSquare }
  ];

  const mainPages = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Demo', href: '/demo', icon: Monitor },
    { name: 'Consultation', href: '/consultation', icon: MessageCircle }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string, icon: React.ElementType) => (
    <div className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 font-semibold mb-3"
      >
        <div className="flex items-center space-x-2">
          <icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        {expandedSections[sectionKey] ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="ml-6 space-y-2">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
            >
              <service.icon className="w-4 h-4" />
              <span className="text-sm">{service.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Main Pages */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Main Pages</h3>
              <div className="space-y-1">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.href}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors duration-300 ${
                      location.pathname === page.href
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                    }`}
                  >
                    <page.icon className="w-5 h-5" />
                    <span>{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            {renderServiceSection('AI Services', aiServices, 'aiServices', Brain)}

            {/* IT Services */}
            {renderServiceSection('IT Services', itServices, 'itServices', Cloud)}

            {/* Micro SAAS */}
            {renderServiceSection('Micro SAAS', microSaasServices, 'microSaas', Cpu)}

            {/* Company */}
            {renderServiceSection('Company', companyPages, 'company', Users)}

            {/* Resources */}
            {renderServiceSection('Resources', resourcePages, 'resources', FileText)}

            {/* Enterprise */}
            {renderServiceSection('Enterprise', enterprisePages, 'enterprise', Building)}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;