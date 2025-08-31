import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  Target,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Search,
  Settings,
  Palette,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  BookOpen,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  Newspaper,
  Award,
  Eye,
  Camera,
  Film,
  Image,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Brain,
  Shield,
  Users
} from 'lucide-react';

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building2 },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Blog', href: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Services',
      expandable: true,
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', icon: Server, description: 'Technology infrastructure' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Scalable cloud services' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security & protection' },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, description: 'Quantum solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, description: 'Business modernization' }
      ]
    },
    {
      title: 'Solutions',
      expandable: true,
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large business solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital health' },
        { name: 'Finance', href: '/solutions/finance', icon: DollarSign, description: 'Fintech innovation' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory, description: 'Smart manufacturing' },
        { name: 'Retail', href: '/solutions/retail', icon: Store, description: 'Digital commerce' },
        { name: 'Education', href: '/solutions/education', icon: GraduationCap, description: 'EdTech solutions' }
      ]
    },
    {
      title: 'Company',
      expandable: true,
      items: [
        { name: 'Leadership', href: '/leadership', icon: Users, description: 'Our team' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join us' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
        { name: 'Research', href: '/research-development', icon: Lightbulb, description: 'Innovation research' }
      ]
    },
    {
      title: 'Resources',
      expandable: true,
      items: [
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
        { name: 'Training', href: '/training', icon: GraduationCap, description: 'Learning programs' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Live sessions' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry insights' },
        { name: 'Knowledge Base', href: '/knowledge-base', icon: BookOpen, description: 'Help articles' }
      ]
    },
    {
      title: 'Support',
      expandable: true,
      items: [
        { name: 'Help Desk', href: '/helpdesk', icon: HelpCircle, description: 'Get support' },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Reach our team' },
        { name: 'Community', href: '/community', icon: Users2, description: 'Connect with others' },
        { name: 'Status', href: '/status', icon: Activity, description: 'System status' },
        { name: 'Support Portal', href: '/support', icon: HelpCircle, description: 'Support resources' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, variant: 'primary' },
    { name: 'Request Quote', href: '/contact', icon: DollarSign, variant: 'secondary' },
    { name: 'View Pricing', href: '/pricing', icon: BarChart3, variant: 'secondary' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: MapPin, text: 'Middletown, DE', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full w-80 bg-zion-slate-darker border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zion-purple/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-zion-slate-dark" />
              </div>
              <span className="text-lg font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                        action.variant === 'primary'
                          ? "bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan/80"
                          : "bg-zion-slate-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white"
                      )}
                    >
                      <action.icon className="h-5 w-5" />
                      <span className="font-medium">{action.name}</span>
                      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              {sidebarSections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider">
                      {section.title}
                    </h3>
                    {section.expandable && (
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="p-1 text-zion-slate-light hover:text-white transition-colors"
                      >
                        {expandedSections.includes(section.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                          isActive(item.href)
                            ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30"
                            : "text-zion-slate-light hover:bg-zion-slate-dark hover:text-white"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-zion-slate-light truncate">
                              {item.description}
                            </div>
                          )}
                        </div>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-zion-cyan rounded-full" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Information */}
              <div className="pt-6 border-t border-zion-purple/20">
                <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 px-4 py-3 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                    >
                      <contact.icon className="h-4 w-4" />
                      <span className="text-sm">{contact.text}</span>
                      {contact.href.startsWith('http') && (
                        <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zion-purple/20">
            <div className="text-center">
              <p className="text-xs text-zion-slate-light mb-2">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <div className="flex items-center justify-center space-x-4 text-xs">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Terms
                </Link>
                <Link to="/security" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
