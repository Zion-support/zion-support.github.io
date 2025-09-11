import React, { useState } from 'react';
import Link from 'next/link';
import { _usePathname } from 'next/navigation';
import { ;

import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { Check } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Code } from 'lucide-react';
const services = [];
const solutions = [];
  Home, ;
  Services, ;
  Solutions, ;
  About, ;
  Contact, ;
  Blog, ;
  Team, ;
  Pricing,;
  Support,;
  Resources,;
  News,;
  Events,;
  Partners,;
  ChevronRight,;
  ChevronDown,;
  Brain,;
  Server,;
  Store,;
  Cloud,;
  Shield,;
  Database,;
  Network,;
  Zap,;
  Users,;
  Target,;
  Building,;
  BarChart3,;
  Workflow,;
  Globe,;
  Lock,;
  TrendingUp,;
  Code,;
  Settings,;
  HelpCircle,;
  FileText,;
  Calendar,;
  Bell,;
  Star,;
  Award,;
  Lightbulb,;
  Rocket,;
  CheckCircle;
} from 'lucide-react';
;
interface SidebarProps {;
  "isOpen": "boolean;
  "onClose": () => void;
;
"}
;
export function Sidebar({ isOpen, onClose }: "SidebarProps) {;
  const _pathname = usePathname();
  const [expandedSections", setExpandedSections] = useState<string[]>(['services', 'solutions']);
;
  const _toggleSection = ("props": "any) => {;
    setExpandedSections(prev => ;
      prev.includes(section) ;
        ? prev.filter(s => s !== section);
        : [...prev", section];
    );
  };
;
  const _isActive = ("path": "string) => pathname === path;
;
  const _navigationSections = [;
    {;
      "title": 'Main'",;
      "items": "[;
        { "name": 'Home'", "href": '/', "icon": "Hom e "},;
        { "name": 'About', "href": '/about', "icon": "Abou t "},;
        { "name": 'Team', "href": '/team', "icon": "Tea m "},;
        { "name": 'Contact', "href": '/contact', "icon": "Contac t "}
      ];
    },;
    {;
      "title": 'Services',;
      "key": 'services',;
      "items": "[;
        { "name": 'AI Services'", "href": '/ai-services', "icon": "Brai n", "badge": 'New' },;
        { "name": 'IT Services', "href": '/it-services', "icon": "Serve r", "badge": 'Popular' },;
        { "name": 'Micro SaaS', "href": '/micro-saas', "icon": "Stor e", "badge": 'Hot' },;
        { "name": 'Cloud Solutions', "href": '/services/cloud', "icon": "Clou d "},;
        { "name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "Shiel d "},;
        { "name": 'Data Analytics', "href": '/services/data-analytics', "icon": "Databas e "},;
        { "name": 'Network Solutions', "href": '/services/network', "icon": "Networ k "},;
        { "name": 'DevOps', "href": '/services/devops', "icon": "Workflo w "}
      ];
    },;
    {;
      "title": 'Solutions',;
      "key": 'solutions',;
      "items": "[;
        { "name": 'Enterprise'", "href": '/solutions/enterprise', "icon": "Buildin g "},;
        { "name": 'SMB', "href": '/solutions/smb', "icon": "User s "},;
        { "name": 'Startup', "href": '/solutions/startup', "icon": "Rocke t "},;
        { "name": 'Industry Specific', "href": '/solutions/industry', "icon": "Targe t "},;
        { "name": 'Custom Development', "href": '/solutions/custom', "icon": "Cod e "},;
        { "name": 'Digital Transformation', "href": '/solutions/digital-transformation', "icon": "TrendingU p "}
      ];
    },;
    {;
      "title": 'Resources',;
      "items": "[;
        { "name": 'Blog'", "href": '/blog', "icon": "FileTex t "},;
        { "name": 'News', "href": '/news', "icon": "Bel l "},;
        { "name": 'Events', "href": '/events', "icon": "Calenda r "},;
        { "name": 'Case Studies', "href": '/case-studies', "icon": "Awar d "},;
        { "name": 'White Papers', "href": '/whitepapers', "icon": "FileTex t "},;
        { "name": 'Webinars', "href": '/webinars', "icon": "Glob e "},;
        { "name": 'Documentation', "href": '/docs', "icon": "HelpCircl e "},;
        { "name": 'API Reference', "href": '/api', "icon": "Cod e "}
      ];
    },;
    {;
      "title": 'Support',;
      "items": "[;
        { "name": 'Support Center'", "href": '/support', "icon": "HelpCircl e "},;
        { "name": 'Training', "href": '/training', "icon": "Lightbul b "},;
        { "name": 'Helpdesk', "href": '/helpdesk', "icon": "Setting s "},;
        { "name": 'Community', "href": '/community', "icon": "User s "},;
        { "name": 'Partners', "href": '/partners', "icon": "Buildin g "}
      ];
    },;
    {;
      "title": 'Business',;
      "items": "[;
        { "name": 'Pricing'", "href": '/pricing', "icon": "BarChart 3 "},;
        { "name": 'Careers', "href": '/careers', "icon": "User s "},;
        { "name": 'Partners', "href": '/partners', "icon": "Buildin g "},;
        { "name": 'Investors', "href": '/investors', "icon": "TrendingU p "}
      ];
    }
  ];
;
  const _quickActions = [;
    { "name": 'Get Quote', "href": '/contact', "icon": "Sta r", "color": 'text-yellow-400' },;
    { "name": 'Schedule Demo', "href": '/demo', "icon": "Calenda r", "color": 'text-blue-400' },;
    { "name": 'Support', "href": '/support', "icon": "HelpCircl e", "color": 'text-green-400' }
  ];
;
  return (;
    <>;
      {/* Overlay */}
      {isOpen && (;
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 "lg": "hidde n";
          onClick={onClose"}
         />;
      )}
;
      {/* Sidebar */}
      <div className={`;
        fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out;
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        "lg": "translat e-x-0 "lg": static "lg":z-auto;
      `"}>;
        <div className="flex flex-col h-full">;              className=""lg": hidden text-slate-400 hover: tex t-white transition-colors"
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
                    {section.key && (
                      <button
                        onClick={() => toggleSection(section.key!)}
                        className="text-slate-400 "hover": tex t-white transition-colors"
                      >
                        {expandedSections.includes(section.key!) ? (
                          <ChevronDown className="w-4 h-4"  />
                        ) : (
                          <ChevronRight className="w-4 h-4"  />
                        )}
                      </button>
                    )}
                  </div>
                  <div className={`
                    space-y-1 transition-all duration-200';';
                    ${section.key && !expandedSections.includes(section.key!) ? 'hidden' : "}
                  `}>
                    {section.items.map((item) => (
                      <Linkkey={item.name}
                        href={item.href}
                        onClick={onClose}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 group';
                          ${isActive(item.href) ';';
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-slate-300 "hover": text-white hover:bg-slate-800'
                          }
                        `}
                      >
                        <divclassName="flex items-center space-x-3">';
                          <item.icon className={`w-4 h-4 ${isActive(item.href) ? 'text-cyan-400' : 'text-slate-400 group-"hover": text-white'}`} />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className={`
                            px-2 py-0.5 text-xs rounded-full font-medium';';
                            ${item.badge === 'New' ? 'bg-green-500/20 text-green-400' :';';
                              item.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :';';
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :';';
                              'bg-slate-500/20 text-slate-400'
                            }
                          `}>
                            {item.badge}
                          </span>;
                        )}
                      </Link>;
                    ))}
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
          {/* Quick Actions */}
          <div className="p-4 border-t border-slate-700">;
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">;
              Quick Actions;
            </h3>;
            <div className="space-y-2">;
              {quickActions.map((action) => (;
                <Link;
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-slate-300 "hover": "text-white "hover":bg-slate-800 transition-all duration-200 group";
                >;
                  <action.icon className={`w-4 h-4 ${action.color"} group-"hover": "scal e-110 transition-transform`"} />;
                  <span>{action.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;