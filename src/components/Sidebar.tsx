import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  Globe, 
  ShoppingCart, 
  Star, 
  Building, 
  BookOpen, 
  HelpCircle, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      icon: Home,
      links: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: Building },
        { name: 'Get Quote', href: '/request-quote', icon: Star }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Settings,
      links: [
        { name: 'Services Overview', href: '/services-overview', icon: Settings },
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Settings },
        { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart }
      ]
    },
    {
      id: 'core-services',
      title: 'Core Services',
      icon: Settings,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Shield },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket },
        { name: 'IoT Edge', href: '/services/iot-edge', icon: Rocket },
        { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart },
        { name: 'Sustainability', href: '/services/sustainability', icon: Globe }
      ]
    },
    {
      id: 'innovative',
      title: 'Innovative Solutions',
      icon: Star,
      links: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', icon: Star },
        { name: 'Comprehensive Services 2028', href: '/comprehensive-services-landing-2028', icon: Star }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
        { name: 'White Papers', href: '/white-papers', icon: BookOpen },
        { name: 'FAQ', href: '/faq', icon: HelpCircle }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      links: [
        { name: 'Our Team', href: '/team', icon: Building },
        { name: 'Careers', href: '/careers', icon: Building },
        { name: 'Partners', href: '/partners', icon: Building },
        { name: 'News', href: '/news', icon: BookOpen },
        { name: 'Press', href: '/press', icon: BookOpen }
      ]
    }
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:relative lg:z-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-6">
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {section.title}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      expandedSections.includes(section.id) ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="ml-6 space-y-1">
                    {section.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`
                          flex items-center space-x-3 p-2 rounded-lg transition-colors group
                          ${isActiveLink(link.href) 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }
                        `}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h3 className="text-sm font-medium text-slate-400 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                to="/request-quote"
                className="flex items-center justify-center w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-colors text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
