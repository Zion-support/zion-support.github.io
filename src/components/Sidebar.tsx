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

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
}

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  links: SidebarLink[];
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'services']);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigation: SidebarSection[] = [
    {
      id: 'main',
      title: 'Main Navigation',
      icon: Home,
      links: [
        { name: 'Home', href: '/', icon: Home, description: 'Main dashboard' },
        { name: 'About Us', href: '/about', icon: Building, description: 'Our story and mission' },
        { name: 'Contact', href: '/contact', icon: PhoneCall, description: 'Get in touch' },
        { name: 'Get Quote', href: '/request-quote', icon: DollarSign, description: 'Request pricing' },
        { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, description: 'Book a demo' }
      ]
    },
    {
      id: 'services',
      title: 'Services Portfolio',
      icon: Settings,
      links: [
        { name: 'Services Overview', href: '/services', icon: BarChart3, description: 'Complete service portfolio' },
        { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Artificial Intelligence solutions' },
        { name: 'Cloud Services', href: '/services/cloud', icon: Cloud, description: 'Cloud infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Settings, description: 'Infrastructure management' },
        { name: 'Digital Transformation', href: '/services/transformation', icon: TrendingUp, description: 'Business modernization' }
      ]
    },
    {
      id: 'solutions',
      title: 'Business Solutions',
      icon: Target,
      links: [
        { name: 'Case Studies', href: '/case-studies', icon: Award, description: 'Success stories' },
        { name: 'Industries', href: '/solutions', icon: Building, description: 'Industry solutions' },
        { name: 'AI Business Intelligence', href: '/solutions/ai-bi', icon: Brain, description: 'Machine Learning & Data Science' },
        { name: 'Process Automation', href: '/solutions/automation', icon: Workflow, description: 'Intelligent Process Automation' },
        { name: 'Data Analytics', href: '/solutions/analytics', icon: Database, description: 'Data processing' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Learning',
      icon: BookOpen,
      links: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Get support' },
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical docs' },
        { name: 'Training', href: '/training', icon: GraduationCap, description: 'Learning resources' },
        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights' },
        { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Educational events' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research papers' },
        { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      links: [
        { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Building, description: 'Strategic partnerships' },
        { name: 'News & Press', href: '/press', icon: FileText, description: 'Latest news' },
        { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming events' },
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart, description: 'Service marketplace' }
      ]
    },
    {
      id: 'platform',
      title: 'Platform',
      icon: Settings,
      links: [
        { name: 'Dashboard', href: '/dashboard', icon: BarChart3, description: 'User dashboard' },
        { name: 'Support Center', href: '/support', icon: HelpCircle, description: 'Technical support' },
        { name: 'Community', href: '/community', icon: Users, description: 'User community' },
        { name: 'Login', href: '/login', icon: User, description: 'Sign in' },
        { name: 'Sign Up', href: '/signup', icon: Plus, description: 'Create account' }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Policies',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy', icon: Lock, description: 'Privacy information' },
        { name: 'Terms of Service', href: '/terms-of-service', icon: FileText, description: 'Terms and conditions' },
        { name: 'Cookie Policy', href: '/cookie-policy', icon: Shield, description: 'Cookie usage' },
        { name: 'Security', href: '/security', icon: Shield, description: 'Security measures' },
        { name: 'Compliance', href: '/compliance', icon: Award, description: 'Regulatory compliance' },
        { name: 'Accessibility', href: '/accessibility', icon: Heart, description: 'Accessibility features' }
      ]
    }
  ];

  // If sidebar is closed, show minimal version
  if (!isOpen) {
    return (
      <div className="fixed left-0 top-16 z-40 w-16 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 lg:block hidden">
        <div className="flex flex-col items-center py-4 space-y-4">
          {navigation.slice(0, 6).map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={onToggle}
                className="p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title={section.title}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

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
      <div className="fixed left-0 top-16 z-40 w-80 h-full bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={onToggle}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {navigation.map(section => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              
              return (
                <div key={section.id} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="ml-4 space-y-1">
                      {section.links.map(link => {
                        const LinkIcon = link.icon;
                        const active = isActive(link.href);
                        
                        return (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={`block p-3 rounded-lg transition-colors group ${
                              active
                                ? 'bg-cyan-600 text-white'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <LinkIcon className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium">{link.name}</div>
                                {link.description && (
                                  <div
                                    className={`text-xs ${active ? 'text-cyan-100' : 'text-slate-400'}`}
                                  >
                                    {link.description}
                                  </div>
                                )}
                              </div>
                              {active && <ChevronRight className="w-4 h-4" />}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Quick Actions
            </div>
            <div className="space-y-2">
              <Link
                to="/request-quote"
                className="block p-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">Get Quote</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </div>
              </Link>
              <Link
                to="/schedule-demo"
                className="block p-3 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Schedule Demo</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Contact
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
