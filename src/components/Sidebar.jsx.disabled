import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Building,
  TestTube,
  Newspaper,
  X,
  Code
} from 'lucide-react';

export function Sidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (itemName) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'Services',
      icon: Zap,
      current: location.pathname.startsWith('/services'),
      children: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          current: location.pathname.startsWith('/ai-services')
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: Server,
          current: location.pathname.startsWith('/it-services')
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          icon: Rocket,
          current: location.pathname.startsWith('/micro-saas')
        },
        {
          name: 'Cloud Solutions',
          href: '/services/cloud',
          icon: Cloud,
          current: location.pathname.startsWith('/services/cloud')
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          current: location.pathname.startsWith('/services/cybersecurity')
        },
        {
          name: 'IT Infrastructure',
          href: '/services/infrastructure',
          icon: Network,
          current: location.pathname.startsWith('/services/infrastructure')
        }
      ]
    },
    {
      name: 'Solutions',
      icon: Target,
      current: location.pathname.startsWith('/solutions'),
      children: [
        {
          name: 'Industry Solutions',
          href: '/solutions/industry',
          icon: Building,
          current: location.pathname.startsWith('/solutions/industry')
        },
        {
          name: 'Manufacturing',
          href: '/solutions/manufacturing',
          icon: Cpu,
          current: location.pathname.startsWith('/solutions/manufacturing')
        },
        {
          name: 'Financial Services',
          href: '/solutions/financial',
          icon: DollarSign,
          current: location.pathname.startsWith('/solutions/financial')
        },
        {
          name: 'Healthcare',
          href: '/solutions/healthcare',
          icon: Heart,
          current: location.pathname.startsWith('/solutions/healthcare')
        },
        {
          name: 'Retail',
          href: '/solutions/retail',
          icon: ShoppingCart,
          current: location.pathname.startsWith('/solutions/retail')
        }
      ]
    },
    {
      name: 'About',
      icon: Info,
      current: location.pathname.startsWith('/about'),
      children: [
        {
          name: 'Company',
          href: '/about',
          icon: Building,
          current: location.pathname === '/about'
        },
        {
          name: 'Team',
          href: '/about/team',
          icon: Users,
          current: location.pathname.startsWith('/about/team')
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          current: location.pathname.startsWith('/careers')
        }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      current: location.pathname.startsWith('/resources'),
      children: [
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: FileText,
          current: location.pathname.startsWith('/case-studies')
        },
        {
          name: 'Research & Development',
          href: '/research-development',
          icon: TestTube,
          current: location.pathname.startsWith('/research-development')
        },
        {
          name: 'Events',
          href: '/events',
          icon: Calendar,
          current: location.pathname.startsWith('/events')
        },
        {
          name: 'News',
          href: '/news',
          icon: Newspaper,
          current: location.pathname.startsWith('/news')
        },
        {
          name: 'Blog',
          href: '/blog',
          icon: PenTool,
          current: location.pathname.startsWith('/blog')
        }
      ]
    },
    {
      name: 'Support',
      icon: HelpCircle,
      current: location.pathname.startsWith('/support'),
      children: [
        {
          name: 'Help Center',
          href: '/support',
          icon: HelpCircle,
          current: location.pathname === '/support'
        },
        {
          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          current: location.pathname.startsWith('/docs')
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: Phone,
          current: location.pathname.startsWith('/contact')
        }
      ]
    }
  ];

  return (
    <div className="w-64 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-purple/30 h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Zion Tech</span>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-purple/20'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                    {expandedItems.has(item.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {expandedItems.has(item.name) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            child.current
                              ? 'text-zion-cyan bg-zion-purple/20'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                          }`}
                        >
                          <child.icon className="w-4 h-4" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.current
                      ? 'text-zion-cyan bg-zion-purple/20'
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}