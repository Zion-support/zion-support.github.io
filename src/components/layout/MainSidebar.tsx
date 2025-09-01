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
          description: 'Digital Simulation'
        },
        {
          name: 'IoT Edge Computing',
          href: '/services/iot-edge',
          icon: Smartphone,
          description: 'Connected Devices'
        },
        {
          name: 'Data Analytics',
          href: '/services/data-analytics',
          icon: BarChart3,
          description: 'Business Intelligence'
        },
        {
          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Server,
          description: 'System Management'
        }
      ]
    },
    {
      title: 'Specialized Services',
      items: [
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
          description: 'Security & Protection'
        },
        {
          name: 'Blockchain Solutions',
          href: '/services/blockchain',
          icon: Lock,
          description: 'Distributed Technology'
        },
        {
          name: 'Quantum Computing',
          href: '/services/quantum',
          icon: Atom,
          description: 'Next-Gen Computing'
        },
        {
          name: 'Space Technology',
          href: '/services/space-tech',
          icon: Rocket,
          description: 'Aerospace Solutions'
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
          description: 'Industrial Tech'
        },
        {
          name: 'Retail',
          href: '/solutions/retail',
          icon: ShoppingCart,
          description: 'E-commerce Solutions'
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
          name: 'Webinars',
          href: '/webinars',
          icon: Video,
          description: 'Educational Content'
        },
        {
          name: 'Training',
          href: '/training',
          icon: BookOpen,
          description: 'Learning Resources'
        },
        {
          name: 'White Papers',
          href: '/white-papers',
          icon: FileText,
          description: 'Research Papers'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: Award,
          description: 'Success Stories'
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
          description: 'Get Support'
        },
        {
          name: 'Documentation',
          href: '/docs',
          icon: FileText,
          description: 'Technical Docs'
        },
        {
          name: 'FAQ',
          href: '/faq',
          icon: HelpCircle,
          description: 'Common Questions'
        },
        {
          name: 'Contact Support',
          href: '/support',
          icon: MessageCircle,
          description: 'Get Help'
        }
      ]
    }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
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
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-zion-blue-dark border-r border-zion-purple/30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-zion-purple/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title} className="space-y-3">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between text-sm font-semibold text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(section.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedSections.includes(section.title) && (
                    <div className="ml-4 space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`block p-3 rounded-lg transition-all duration-200 group ${
                            isActive(item.href)
                              ? 'bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan'
                              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-zion-slate-light group-hover:text-zion-cyan/70">
                                  {item.description}
                                </div>
                              )}
                            </div>
                            {isActive(item.href) && (
                              <ChevronRight className="w-4 h-4 text-zion-cyan" />
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-zion-purple/20">
            <div className="space-y-4">
              {/* Quick Actions */}
              <div className="space-y-2">
                <Link
                  to="/request-quote"
                  className="block w-full p-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-center rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 font-medium"
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full p-3 border border-zion-purple/30 text-zion-cyan text-center rounded-lg hover:bg-zion-purple/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-xs text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <MailIcon className="w-3 h-3" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-3 h-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
