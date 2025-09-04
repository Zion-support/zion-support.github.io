import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Services, 
  Solutions, 
  About, 
  Contact, 
  Blog, 
  Team, 
  Pricing,
  Support,
  Resources,
  News,
  Events,
  Partners,
  ChevronRight,
  ChevronDown,
  Brain,
  Server,
  Store,
  Cloud,
  Shield,
  Database,
  Network,
  Zap,
  Users,
  Target,
  Building,
  BarChart3,
  Workflow,
  Globe,
  Lock,
  TrendingUp,
  Code,
  Settings,
  HelpCircle,
  FileText,
  Calendar,
  Bell,
  Star,
  Award,
  Lightbulb,
  Rocket,
  CheckCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services', 'solutions']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: About },
        { name: 'Team', href: '/team', icon: Team },
        { name: 'Contact', href: '/contact', icon: Contact }
      ]
    },
    {
      title: 'Services',
      key: 'services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, badge: 'New' },
        { name: 'IT Services', href: '/it-services', icon: Server, badge: 'Popular' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Store, badge: 'Hot' },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: Database },
        { name: 'Network Solutions', href: '/services/network', icon: Network },
        { name: 'DevOps', href: '/services/devops', icon: Workflow }
      ]
    },
    {
      title: 'Solutions',
      key: 'solutions',
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { name: 'SMB', href: '/solutions/smb', icon: Users },
        { name: 'Startup', href: '/solutions/startup', icon: Rocket },
        { name: 'Industry Specific', href: '/solutions/industry', icon: Target },
        { name: 'Custom Development', href: '/solutions/custom', icon: Code },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: TrendingUp }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'News', href: '/news', icon: Bell },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Case Studies', href: '/case-studies', icon: Award },
        { name: 'White Papers', href: '/whitepapers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Globe },
        { name: 'Documentation', href: '/docs', icon: HelpCircle },
        { name: 'API Reference', href: '/api', icon: Code }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Support Center', href: '/support', icon: HelpCircle },
        { name: 'Training', href: '/training', icon: Lightbulb },
        { name: 'Helpdesk', href: '/helpdesk', icon: Settings },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Partners', href: '/partners', icon: Building }
      ]
    },
    {
      title: 'Business',
      items: [
        { name: 'Pricing', href: '/pricing', icon: BarChart3 },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Building },
        { name: 'Investors', href: '/investors', icon: TrendingUp }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: Star, color: 'text-yellow-400' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, color: 'text-blue-400' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'text-green-400' }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-lg">Zion Tech</span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden text-slate-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-6">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      {section.title}
                    </h3>
                    {section.key && (
                      <button
                        onClick={() => toggleSection(section.key!)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {expandedSections.includes(section.key!) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  <div className={`
                    space-y-1 transition-all duration-200
                    ${section.key && !expandedSections.includes(section.key!) ? 'hidden' : ''}
                  `}>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 group
                          ${isActive(item.href) 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className={`w-4 h-4 ${isActive(item.href) ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'}`} />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className={`
                            px-2 py-0.5 text-xs rounded-full font-medium
                            ${item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              'bg-slate-500/20 text-slate-400'
                            }
                          `}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-slate-700">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 group"
                >
                  <action.icon className={`w-4 h-4 ${action.color} group-hover:scale-110 transition-transform`} />
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-4 border-t border-slate-700">
            <div className="text-xs text-slate-400 space-y-1">
              <div>📧 kleber@ziontechgroup.com</div>
              <div>📞 +1 (302) 464-0950</div>
              <div>📍 Middletown, DE 19709</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}