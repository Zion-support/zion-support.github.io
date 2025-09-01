import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
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
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  children?: SidebarItem[];
  featured?: boolean;
  description?: string;
}

export function MainSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const navigation: SidebarItem[] = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Research', href: '/research-development', icon: TestTube },
        { name: 'Events', href: '/events', icon: Video },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText }
      ]
    },
    {
      title: 'Core Services',
      items: [
        {
          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Infrastructure & Automation'
        },
        {
          name: 'Digital Twin',
          href: '/services/digital-twin',
          icon: Globe,
          description: 'Simulation & Monitoring'
        },
        {
          name: 'AI & Machine Learning',
          href: '/services/ai',
          icon: Brain,
          description: 'Intelligent Solutions'
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Protection & Compliance'
        },
        {
          name: 'Infrastructure',
          href: '/services/infrastructure',
          icon: Server,
          description: 'Hardware & Networks'
        }
      ]
    },
    {
      title: 'Specialized Services',
      items: [
        {
          name: 'Consulting',
          href: '/services/consulting',
          icon: Briefcase,
          description: 'Strategic Advisory'
        },
        {
          name: 'Digital Transformation',
          href: '/services/transformation',
          icon: TrendingUp,
          description: 'Business Evolution'
        },
        {
          name: 'Analytics & BI',
          href: '/services/analytics',
          icon: BarChart3,
          description: 'Data Insights'
        },
        {
          name: 'Mobile Development',
          href: '/services/mobile',
          icon: Smartphone,
          description: 'App Solutions'
        },
        {
          name: 'UI/UX Design',
          href: '/services/design',
          icon: Palette,
          description: 'User Experience'
        }
      ]
    },
    {
      title: 'Solutions',
      items: [
        {
          name: 'Enterprise',
          href: '/solutions/enterprise',
          icon: Building,
          description: 'Large Scale Solutions'
        },
        {
          name: 'Startup',
          href: '/solutions/startup',
          icon: Rocket,
          description: 'Growth Acceleration'
        },
        {
          name: 'Healthcare',
          href: '/solutions/healthcare',
          icon: Heart,
          description: 'Medical Technology'
        },
        {
          name: 'Financial',
          href: '/solutions/financial',
          icon: DollarSign,
          description: 'FinTech Solutions'
        },
        {
          name: 'Manufacturing',
          href: '/solutions/manufacturing',
          icon: Cpu,
          description: 'Industry 4.0'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Latest Insights'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: FileText,
          description: 'Success Stories'
        },
        {
          name: 'Research',
          href: '/research-development',
          icon: TestTube,
          description: 'Innovation Lab'
        },
        {
          name: 'Events',
          href: '/events',
          icon: Calendar,
          description: 'Upcoming Events'
        },
        {
          name: 'Training',
          href: '/training',
          icon: BookOpen,
          description: 'Skill Development'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          name: 'Help Center',
          href: '/help',
          icon: HelpCircle,
          description: 'Find Answers'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: MessageCircle,
          description: 'Get in Touch'
        },
        {
          name: 'Support Portal',
          href: '/support',
          icon: Settings,
          description: 'Technical Support'
        },
        {
          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          description: 'API & Guides'
        }
      ]
    }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-purple/10 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-zion-blue-dark border-r border-zion-purple/30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-zion-purple/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-sm text-zion-slate-light">Navigation</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {navigation.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleSection(item.name)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(item.href)
                                ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30'
                                : 'text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </div>
                            {expandedSections.includes(item.name) ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                          {expandedSections.includes(item.name) && (
                            <div className="ml-6 mt-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isActive(child.href)
                                      ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30'
                                      : 'text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <child.icon className="w-4 h-4" />
                                    <span>{child.name}</span>
                                  </div>
                                  {child.description && (
                                    <p className="text-xs text-zion-slate-light ml-7 mt-1">
                                      {child.description}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(item.href)
                              ? 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30'
                              : 'text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-zion-slate-light ml-7 mt-1">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-zion-purple/30">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                <MailIcon className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                <MapPinIcon className="w-4 h-4" />
                <span>Innovation City, IC 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
