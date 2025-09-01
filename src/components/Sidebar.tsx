import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Settings,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Heart,
  Globe,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Star,
  Building,
  ChevronRight,
  Users,
  Briefcase,
  FileText,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Lock,
  Cpu,
  Database,
  Smartphone,
  Target,
  BarChart3,
  Search,
  PhoneCall,
  Mail,
  ExternalLink,
  ChevronDown,
  Plus,
  Scale,
  GraduationCap,
  Package,
  User,
  Code
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  links: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
    description: string;
  }>;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'services']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const navigation: SidebarItem[] = [
    {
      id: 'main',
      title: 'Main',
      icon: Home,
      links: [
        { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'About', href: '/about', icon: Building, description: 'Learn about our company' },
        { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch with us' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Rocket,
      links: [
        { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Artificial Intelligence services' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'Cloud Services', href: '/services/cloud', icon: Cloud, description: 'Cloud infrastructure' },
        { name: 'IT Consulting', href: '/services/consulting', icon: Users, description: 'Technology consulting' },
        { name: 'Micro SAAS', href: '/services/micro-saas', icon: Package, description: 'Software solutions' }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      icon: Target,
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Enterprise solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Healthcare technology' },
        { name: 'Financial', href: '/solutions/financial', icon: DollarSign, description: 'Financial services' },
        { name: 'Government', href: '/solutions/government', icon: Shield, description: 'Government solutions' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'Training', href: '/training', icon: GraduationCap, description: 'Learning resources' },
        { name: 'Support', href: '/support', icon: HelpCircle, description: 'Help and support' },
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical docs' }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:relative lg:top-0
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">Navigation</span>
              </div>
              <button
                onClick={onToggle}
                className="lg:hidden p-2 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Sections */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigation.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full p-2 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedSections.includes(section.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="ml-6 space-y-1">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => {
                          // Close sidebar on mobile after navigation
                          if (window.innerWidth < 1024) {
                            onToggle();
                          }
                        }}
                        className={`
                          flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 text-sm
                          ${isActive(link.href)
                            ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                            : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                          }
                        `}
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="space-y-3">
              {/* Quick Actions */}
              <div className="space-y-2">
                <Link
                  to="/request-quote"
                  className="flex items-center space-x-2 p-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-lg transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Request Quote</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-2 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact Us</span>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-3 border-t border-gray-800 space-y-2 text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-3 h-3" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}