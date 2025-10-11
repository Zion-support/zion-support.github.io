'use client';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  BarChart, 
  Users, 
  Code, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Settings,
  ChevronRight,
  ChevronDown,
  Home,
  User,
  DollarSign,
  Briefcase,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Play
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['solutions']);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      section: 'main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: User },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Contact', path: '/contact', icon: MessageSquare }
      ]
    },
    {
      section: 'solutions',
      title: 'Solutions',
      items: [
        { name: 'AI Services', path: '/ai-services', icon: Brain },
        { name: 'IT Services', path: '/it-services', icon: Cloud },
        { name: 'Micro SaaS', path: '/micro-saas', icon: BarChart }
      ]
    },
    {
      section: 'enterprise',
      title: 'Enterprise',
      items: [
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Settings },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Code },
        { name: 'Business Intelligence', path: '/business-intelligence', icon: BarChart },
        { name: 'Custom Development', path: '/custom-software', icon: Code },
        { name: 'Consultation', path: '/consultation', icon: Users }
      ]
    },
    {
      section: 'resources',
      title: 'Resources',
      items: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'Tutorials', path: '/tutorials', icon: BookOpen },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api-docs', icon: Code },
        { name: 'Demo', path: '/demo', icon: Play },
        { name: 'FAQ', path: '/faq', icon: HelpCircle }
      ]
    },
    {
      section: 'company',
      title: 'Company',
      items: [
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Support', path: '/support', icon: HelpCircle },
        { name: 'Status', path: '/status', icon: Settings }
      ]
    }
  ];

  return (
    <div className="w-64 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-500/20 h-full overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">Zion Tech</span>
            <span className="text-xs text-cyan-400 font-medium">AI & IT Solutions</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((section) => (
            <div key={section.section}>
              {section.title && (
                <button
                  onClick={() => toggleSection(section.section)}
                  className="w-full flex items-center justify-between text-cyan-400 font-semibold text-sm mb-2 hover:text-cyan-300 transition-colors"
                >
                  <span>{section.title}</span>
                  {expandedSections.includes(section.section) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              )}
              
              {(!section.title || expandedSections.includes(section.section)) && (
                <div className="space-y-1 mb-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-cyan-400 font-semibold text-sm mb-4">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="w-4 h-4 mr-3 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                (302) 464-0950
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-3 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-start text-sm text-gray-300">
              <MapPin className="w-4 h-4 mr-3 mt-0.5 text-cyan-400" />
              <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;