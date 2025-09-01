import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Zap,
  Brain,
  Shield,
  Server,
  Cloud,
  Rocket,
  Building2,
  Users,
  MessageCircle,
  HelpCircle,
  FileText,
  DollarSign,
  BarChart3,
  Settings,
  Search,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Target,
  Handshake,
  Code,
  Bot,
  Sparkles,
  Award,
  Users2,
  BookOpen,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sidebarSections = [
    {
      id: 'main',
      title: 'Main Navigation',
      items: [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Pricing', href: '/pricing', icon: DollarSign },
        { label: 'About', href: '/about', icon: Users },
        { label: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      collapsible: true,
      items: [
        { 
          label: 'AI Services', 
          href: '/services/ai', 
          icon: Brain,
          subItems: [
            { label: 'Computer Vision', href: '/services/ai/computer-vision' },
            { label: 'Natural Language Processing', href: '/services/ai/nlp' },
            { label: 'Predictive Analytics', href: '/services/ai/predictive-analytics' },
            { label: 'Voice AI', href: '/services/ai/voice' },
            { label: 'Recommendation Engine', href: '/services/ai/recommendations' }
          ]
        },
        { 
          label: 'Micro SaaS', 
          href: '/services/micro-saas', 
          icon: Rocket,
          subItems: [
            { label: 'Content Creator', href: '/services/micro-saas/content-creator' },
            { label: 'Invoice Automation', href: '/services/micro-saas/invoice-automation' },
            { label: 'Social Media Scheduler', href: '/services/micro-saas/social-media' },
            { label: 'Customer Support Bot', href: '/services/micro-saas/support-bot' },
            { label: 'Email Marketing', href: '/services/micro-saas/email-marketing' }
          ]
        },
        { 
          label: 'IT Infrastructure', 
          href: '/services/it-infrastructure', 
          icon: Server,
          subItems: [
            { label: 'Cloud Management', href: '/services/it/cloud-management' },
            { label: 'Cybersecurity SOC', href: '/services/it/cybersecurity' },
            { label: 'Backup & Recovery', href: '/services/it/backup-recovery' },
            { label: 'Network Optimization', href: '/services/it/network' },
            { label: 'DevOps Automation', href: '/services/it/devops' }
          ]
        },
        { 
          label: 'Enterprise Solutions', 
          href: '/services/enterprise', 
          icon: Building2,
          subItems: [
            { label: 'Digital Transformation', href: '/services/enterprise/digital-transformation' },
            { label: 'Data Analytics Platform', href: '/services/enterprise/data-analytics' },
            { label: 'ERP Solutions', href: '/services/enterprise/erp' },
            { label: 'Communication Platform', href: '/services/enterprise/communication' },
            { label: 'Identity Management', href: '/services/enterprise/identity' }
          ]
        },
        { 
          label: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield,
          subItems: [
            { label: 'Security Operations', href: '/services/security/operations' },
            { label: 'Threat Detection', href: '/services/security/threat-detection' },
            { label: 'Compliance Management', href: '/services/security/compliance' },
            { label: 'Penetration Testing', href: '/services/security/penetration-testing' }
          ]
        },
        { 
          label: 'Cloud Computing', 
          href: '/services/cloud', 
          icon: Cloud,
          subItems: [
            { label: 'AWS Solutions', href: '/services/cloud/aws' },
            { label: 'Azure Solutions', href: '/services/cloud/azure' },
            { label: 'Google Cloud', href: '/services/cloud/gcp' },
            { label: 'Multi-Cloud Management', href: '/services/cloud/multi-cloud' }
          ]
        }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      collapsible: true,
      items: [
        { label: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Sparkles },
        { label: 'Business Automation', href: '/solutions/automation', icon: Bot },
        { label: 'Data Analytics', href: '/solutions/analytics', icon: BarChart3 },
        { label: 'Custom Development', href: '/solutions/development', icon: Code },
        { label: 'Consulting Services', href: '/solutions/consulting', icon: Lightbulb }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      collapsible: true,
      items: [
        { label: 'Our Team', href: '/about/team', icon: Users2 },
        { label: 'Careers', href: '/careers', icon: Target },
        { label: 'Partners', href: '/partners', icon: Handshake },
        { label: 'Case Studies', href: '/case-studies', icon: Award },
        { label: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      collapsible: true,
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText },
        { label: 'API Reference', href: '/api', icon: Code },
        { label: 'Help Center', href: '/help', icon: HelpCircle },
        { label: 'Training', href: '/training', icon: BookOpen },
        { label: 'Community', href: '/community', icon: Users },
        { label: 'Support', href: '/support', icon: MessageCircle }
      ]
    }
  ];

  const quickActions = [
    { label: 'Request Quote', href: '/contact', icon: MessageCircle, primary: true },
    { label: 'Schedule Call', href: 'tel:+13024640950', icon: Phone },
    { label: 'Send Email', href: 'mailto:kleber@ziontechgroup.com', icon: Mail }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4">
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    action.primary
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <nav className="space-y-6">
            {sidebarSections.map((section) => (
              <div key={section.id}>
                
                {/* Section Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  {section.collapsible && (
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>

                {/* Section Items */}
                {(!section.collapsible || expandedSections.includes(section.id)) && (
                  <div className="mt-3 space-y-1">
                    {section.items.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                            location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="flex-1">{item.label}</span>
                          {item.subItems && (
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </Link>

                        {/* Sub-items */}
                        {item.subItems && (location.pathname.startsWith(item.href)) && (
                          <div className="ml-7 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className={`block px-3 py-1 rounded text-xs transition-colors ${
                                  location.pathname === subItem.href
                                    ? 'text-cyan-400 bg-cyan-500/10'
                                    : 'text-gray-400 hover:text-cyan-400 hover:bg-slate-800'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-slate-700 text-center">
            <p className="text-xs text-gray-500">
              © 2025 Zion Tech Group
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}