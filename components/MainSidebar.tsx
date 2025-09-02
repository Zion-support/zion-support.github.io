import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Shield, 
  Handshake, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Target, 
  Rocket, 
  Eye, 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  Cloud, 
  Search, 
  Building, 
  Zap, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  AlertTriangle, 
  Server, 
  CheckCircle, 
  Truck, 
  Car, 
  TestTube, 
  PenTool, 
  Building2, 
  Atom, 
  FileText, 
  Quote, 
  Newspaper, 
  Calendar, 
  Video, 
  HelpCircle, 
  LifeBuoy, 
  Store, 
  PieChart, 
  Share2, 
  Monitor, 
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  Wind,
  X
} from 'lucide-react';

interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => router.pathname === path;

  interface NavItem {
    name: string;
    href: string;
    icon: any;
    description?: string;
  }

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Phone }
    ],
    services: [
      { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', icon: Server, description: 'Infrastructure & support' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Store, description: 'Rapid product development' },
      { name: 'Services Overview', href: '/services-overview', icon: BarChart3, description: 'All services' }
    ],
    solutions: [
      { name: 'Solutions Overview', href: '/solutions', icon: Target, description: 'All solution areas' },
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: PenTool, description: 'AI-powered content' },
      { name: 'Customer Support', href: '/solutions/customer-support', icon: HelpCircle, description: 'Support automation' },
      { name: 'Email Automation', href: '/solutions/email-automation', icon: Mail, description: 'Email workflows' },
      { name: 'Event Management', href: '/solutions/event-management', icon: Calendar, description: 'Event automation' },
      { name: 'Project Management', href: '/solutions/project-management', icon: CheckCircle, description: 'Project workflows' },
      { name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap, description: 'Process automation' }
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
      { name: 'White Papers', href: '/whitepapers', icon: FileText, description: 'Research & insights' },
      { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation' },
      { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }
    ],
    company: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' },
      { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch' },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy information' },
      { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms & conditions' }
    ]
  };

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: Quote, color: 'from-green-500 to-green-600' },
    { name: 'Schedule Call', href: '/contact', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { name: 'View Portfolio', href: '/case-studies', icon: Eye, color: 'from-purple-500 to-purple-600' },
    { name: 'Support', href: '/contact', icon: HelpCircle, color: 'from-orange-500 to-orange-600' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe, color: 'hover:text-green-400' }
  ];

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium"
      >
        <span className="text-sm font-semibold uppercase tracking-wide">{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {expandedSections.includes(sectionKey) && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={onClose}
            >
              <item.icon className="w-4 h-4 mr-3" />
              <div>
                <div className="font-medium">{item.name}</div>
                {item.description && (
                  <div className="text-xs text-gray-400">{item.description}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`bg-gradient-to-r ${action.color} text-white p-3 rounded-lg text-center hover:shadow-lg transition-all duration-200`}
                  onClick={onClose}
                >
                  <action.icon className="w-5 h-5 mx-auto mb-1" />
                  <div className="text-xs font-medium">{action.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {renderNavSection('Main', navigation.main, 'main')}
            {renderNavSection('Services', navigation.services, 'services')}
            {renderNavSection('Solutions', navigation.solutions, 'solutions')}
            {renderNavSection('Resources', navigation.resources, 'resources')}
            {renderNavSection('Company', navigation.company, 'company')}
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <contact.icon className="w-4 h-4 mr-3" />
                  {contact.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;