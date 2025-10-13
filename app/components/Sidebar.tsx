<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { X, Globe, Users, Code, Mail, Brain, Shield, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
=======
'use client'
import React, { Suspense, lazy } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  ChevronDown,
=======
'use client';
import React from 'react';
import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Menu, 
  Home, 
  Users, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ChevronDown, 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ChevronRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Clock
  }
} from 'lucide-react'
const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']))
  const location = useLocation()
useEffect(() => {
    const handleResize = (
      if (window.innerWidth >= 1024) {) => {
  return (
    $3
  )
  }
        setIsOpen(false);}
      }
    }
window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);
const toggleSection = (
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
    ) => {
  return (
    $3
  )
  }
      newExpanded.delete(section);}
=======
} from 'lucide-react';
;
const Sidebar: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
}
const [expandedSections, setExpandedSections] = useState<Set<string></Set>>(new Set(['ai-services', 'micro-saas', 'it-services']))
const location = useLocation();
  useEffect(() => {;
const handleResize = () => {
}
      if (window.innerWidth >= 1024) {
        setIsOpen(false););
    }
    window.addEventListener('resize', handleResize);
    return (<div>)
      {) => window.removeEventListener('resize', handleResize}
    </div>)
  );
  }, []);
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)]
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    } else {
      newExpanded.add(section);
    }
<<<<<<< HEAD
    setExpandedSections(newExpanded);
  };
=======
import { Brain, Zap, Globe } from "lucide-react";
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Settings, DollarSign, FileText, MessageCircle, Brain } from 'lucide-react';

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

<<<<<<< HEAD
  const navigationSections = [
=======
<<<<<<< HEAD
    setExpandedSections(newExpanded)
  }
const navigationSections = [
=======
    setExpandedSections(newExpanded)]
    };
  const navigationSections = [
[
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
      title: 'Main',
      items: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BarChart },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },
      ]
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },
<<<<<<< HEAD
      key: 'it-services',
      items: [
=======
      ]
    },
    {
    title: 'IT Services',
      key: 'it-services',
      items: [
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'IT Services Overview', path: '/it-services', icon: Code },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },
        { name: 'IT Support', path: '/it-support', icon: Users },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Database Management', path: '/database-management', icon: Settings },
        { name: 'Managed IT', path: '/managed-it', icon: Settings },
      ]
    },
    {
      title: 'Company',
      items: [
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Consultation', path: '/consultation', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: BarChart },
      ]
    },
    {
      title: 'Resources',
      items: [
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'API Docs', path: '/api-docs', icon: Code },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
<<<<<<< HEAD
  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={onClose} className="close-btn">
        ×
      </button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/services" onClick={onClose}>Services</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
=======
      ]
    }
  ]
=======
            { nam,
    e: 'Home', path: '
            { nam,
    e: 'About', path: '
            { nam,
    e: 'Services', path: '
            { nam,
    e: 'Contact', path: '
            { nam,
    e: 'Blog', path: '
            { nam,
    e: 'Case Studies', path: '
      ]
    },
        {
      title: 'AI Services',
      key: 'ai-services',
      items: [
            { nam,
    e: 'AI Services Overview', path: '
            { nam,
    e: 'Business Intelligence', path: '/ai-services
            { nam,
    e: 'Document Processing', path: '/ai-services
            { nam,
    e: 'Customer Experience', path: '/ai-services
            { nam,
    e: 'Marketing Automation', path: '/ai-services
            { nam,
    e: 'Predictive Maintenance', path: '/ai-services
            { nam,
    e: 'Supply Chain', path: '/ai-services
            { nam,
    e: 'Fraud Detection', path: '/ai-services
            { nam,
    e: 'Content Generation', path: '/ai-services
            { nam,
    e: 'HR Analytics', path: '/ai-services
            { nam,
    e: 'Process Automation', path: '/ai-services
            { nam,
    e: 'Quality Assurance', path: '/ai-services
            { nam,
    e: 'Energy Management', path: '/ai-services
      ]
    },
        {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
            { nam,
    e: 'Micro SaaS Overview', path: '
            { nam,
    e: 'Analytics Dashboard', path: '/micro-saas
            { nam,
    e: 'Support Bot', path: '/micro-saas
            { nam,
    e: 'Social Manager', path: '/micro-saas
            { nam,
    e: 'Email Marketing', path: '/micro-saas
            { nam,
    e: 'Inventory Management', path: '/micro-saas
            { nam,
    e: 'Lead Scoring', path: '/micro-saas
            { nam,
    e: 'Document Processor', path: '/micro-saas
            { nam,
    e: 'SEO Optimizer', path: '/micro-saas
            { nam,
    e: 'Appointment Scheduler', path: '/micro-saas
            { nam,
    e: 'Chat Analytics', path: '/micro-saas
            { nam,
    e: 'Expense Tracker', path: '/micro-saas
            { nam,
    e: 'Content Generator', path: '/micro-saas
      ]
    },
        {
      title: 'IT Services',
      key: 'it-services',
      items: [
            { nam,
    e: 'IT Services Overview', path: '
            { nam,
    e: 'IT Consulting', path: '
            { nam,
    e: 'IT Infrastructure', path: '
            { nam,
    e: 'IT Support', path: '
            { nam,
    e: 'Cloud Infrastructure', path: '
            { nam,
    e: 'Cloud Migration', path: '
            { nam,
    e: 'Cybersecurity', path: '
            { nam,
    e: 'Database Management', path: '
            { nam,
    e: 'Managed IT', path: '
      ]
    },
        {
      title: 'Company',
      items: [
            { nam,
    e: 'Team', path: '
            { nam,
    e: 'Careers', path: '
            { nam,
    e: 'Consultation', path: '
            { nam,
    e: 'Pricing', path: '
      ]
    },
        {
      title: 'Resources',
      items: [
            { nam,
    e: 'Documentation', path: '
            { nam,
    e: 'API Docs', path: '
            { nam,
    e: 'Support', path: '
            { nam,
    e: 'Status', path: '
      ]
    }
];;
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const contactInfo = {
};
};
};
}
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
<<<<<<< HEAD
    hours: 'Mon-Fri 9AM-6PM EST'
  }
  }
return (
    <>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}

        className="lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >,
        <Menu>
      </button>

      {/* Sidebar Overlay */}
      {
    isOpen && (;
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
  }
          onClick={() => setIsOpen(false)}
        />
      )}
{/* Sidebar */}</div>
      <aside>
        <div className="flex flex-col h-full"></div>
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50"></div>
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>
                <Brain>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Company Links */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Company
              </h3>
              <ul className="space-y-1">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Services
              </h3>
              <div className="space-y-1">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleSection(category.title)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 ${category.bgColor} rounded flex items-center justify-center`}>
                          <category.icon className={`w-3 h-3 ${category.color}`} />
                        </div>
                        <span className="font-medium">{category.title}</span>
                      </div>
                      {expandedSections.has(category.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.has(category.title) && (
                      <div className="ml-6 mt-1 space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Support
              </h3>
              <ul className="space-y-1">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
=======
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', path: '/', icon: <Globe className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'IT Services', path: '/services', icon: <Shield className="w-5 h-5" /> },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Zap className="w-5 h-5" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
=======

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
<<<<<<< HEAD
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-2">
            <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <Settings className="w-5 h-5" />
              <span>Services</span>
            </Link>
            <Link to="/pricing" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <DollarSign className="w-5 h-5" />
              <span>Pricing</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300" onClick={onClose}>
              <MessageCircle className="w-5 h-5" />
              <span>Contact</span>
            </Link>
=======
            <button
              onClick={() => setIsOpen(false)}
              className="lg: hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Close sidebar"
            >,
              <X>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6"></div>
            <nav>
              {
    navigationSections.map((section, sectionIndex) => (
  }
                <div key={sectionIndex} className="space-y-1"></div>
                  <button
                    onClick={() => section.key && toggleSection(section.key)}

                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors"
                  >,
                    <span>{section.title}</span>
                    {
    section.key && (;
                      expandedSections.has(section.key) ?
                        <ChevronDown className="w-4 h-4" /> :
                        <ChevronRight className="w-4 h-4" />
  }
                    )}
                  </button>
                  {
    (!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1"></div>
                      {section.items.map((item, itemIndex) => (</div>
                        <Link
  }

                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={
    `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path;
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30';
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
  }
                          }`}
                        >;
                          <item>
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </nav>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </div>
    </>
<<<<<<< HEAD
  );
};

export default Sidebar;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}
Sidebar.displayName = 'Sidebar'
export default Sidebar
=======
hours: 'Mon-Fri 9AM-6PM EST']
    };
  return (
    <React .Fragment>
      {/* Mobile Menu Button */}
      <button
        onClick={() =></button> setIsOpen(true);
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" 
      <
      {/* Sidebar Overlay *
      {isOpen && (<div 
          className="fixed inset-0 bg-black)
          onClick = { () => setIsOpen(false) }
      )};
      {/* Sidebar */}<
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg: translate-x-0 lg:static l,
    g:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}<
          <div className="flex items-center justify-between p-6 border-b border-slate-700
                <Brain className="w-6 h-6 text-white" 
              <
              <div><
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group<
                <p className="text-xs text-cyan-400">AI & IT Solutions<
              <
            <
            <button
              onClick = { () => setIsOpen(false) }
              className="lg: hidden text-gray-400 hove,
    r:text-white transition-colors"
              aria-label="Close sidebar"
            >
            <nav className="space-y-2 px-4">
              {navigationSections.map((section), sectionIndex) => (<div key={sectionIndex} className="space-y-1">
                  <button)
                    onClick = { () => section.key && toggleSection(section.key) }
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{section.title}<
                    {section.key && (
                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" 
                        <ChevronRight className="w-4 h-4" 
                    )}
                  <
                  {(!section.key || expandedSections.has(section.key)) && (<div className="ml-4 space-y-1">)
                      {section.items.map((item, itemIndex) => (<
                        <Link
                          key = { itemIndex }
                          to = { item.path };)
                          onClick = { () => setIsOpen(false) }
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400
                              : 'text-gray-300 hover: text-white hove,
    r:bg-slate-800
                          }`}
                >
                          <item.icon className="w-4 h-4 flex-shrink-0" 
                          <span>{item.name}<
                        <
                      ))};
                    <
                  )};
                <
              ))};
            <
          <
          {/* Contact Info *
          <div className="border-t border-slate-700
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information<
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span>{contactInfo.phone}<
              <
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="truncate">{contactInfo.email}<
              <
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="text-xs">{contactInfo.address}<
              <
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" 
                <span className="text-xs">{contactInfo.hours}<
              <
          <
      <
    <
  );
};
Sidebar.displayName = 'Sidebar';
export default Sidebar;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
