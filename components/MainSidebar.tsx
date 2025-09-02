import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
<<<<<<< HEAD
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
  Palette,
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
=======
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
>>>>>>> cursor/website-audit-content-update-and-deployment-bd9c
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
<<<<<<< HEAD
  Wind
=======
  Wind,
  X
>>>>>>> cursor/website-audit-content-update-and-deployment-bd9c
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
<<<<<<< HEAD
=======

  interface NavItem {
    name: string;
    href: string;
    icon: any;
    description?: string;
  }
>>>>>>> cursor/website-audit-content-update-and-deployment-bd9c

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
<<<<<<< HEAD
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      {
        name: 'AI & Machine Learning',
        icon: Brain,
        children: [
          { name: 'AI Development', href: '/services/ai-development' },
          { name: 'Machine Learning', href: '/services/machine-learning' },
          { name: 'Natural Language Processing', href: '/services/nlp' },
          { name: 'Computer Vision', href: '/services/computer-vision' },
        ]
      },
      {
        name: 'Cloud & Infrastructure',
        icon: Cloud,
        children: [
          { name: 'Cloud Migration', href: '/services/cloud-migration' },
          { name: 'DevOps', href: '/services/devops' },
          { name: 'Microservices', href: '/services/microservices' },
          { name: 'Containerization', href: '/services/containerization' },
        ]
      },
      {
        name: 'Web Development',
        icon: Code,
        children: [
          { name: 'Frontend Development', href: '/services/frontend' },
          { name: 'Backend Development', href: '/services/backend' },
          { name: 'Full-Stack Development', href: '/services/fullstack' },
          { name: 'E-commerce Solutions', href: '/services/ecommerce' },
        ]
      },
      {
        name: 'Cybersecurity',
        icon: Shield,
        children: [
          { name: 'Security Audits', href: '/services/security-audits' },
          { name: 'Penetration Testing', href: '/services/penetration-testing' },
          { name: 'Compliance', href: '/services/compliance' },
          { name: 'Incident Response', href: '/services/incident-response' },
        ]
      },
    ],
    solutions: [
      {
        name: 'Industry Solutions',
        icon: Building2,
        children: [
          { name: 'Healthcare', href: '/solutions/healthcare' },
          { name: 'Finance', href: '/solutions/finance' },
          { name: 'Education', href: '/solutions/education' },
          { name: 'Manufacturing', href: '/solutions/manufacturing' },
        ]
      },
      {
        name: 'Technology Solutions',
        icon: Cpu,
        children: [
          { name: 'IoT Platforms', href: '/solutions/iot' },
          { name: 'Blockchain', href: '/solutions/blockchain' },
          { name: 'Quantum Computing', href: '/solutions/quantum' },
          { name: 'AR/VR', href: '/solutions/ar-vr' },
        ]
      },
    ],
    resources: [
      { name: 'Documentation', href: '/docs', icon: BookOpen },
      { name: 'API Reference', href: '/api', icon: Code },
      { name: 'Tutorials', href: '/tutorials', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
    ],
    support: [
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Contact Support', href: '/support', icon: LifeBuoy },
      { name: 'Status Page', href: '/status', icon: Server },
      { name: 'Community', href: '/community', icon: Users },
    ]
  };

  const renderNavigationItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name);
    const isCurrentActive = isActive(item.href);

    return (
      <div key={item.name} className={`${level > 0 ? 'ml-4' : ''}`}>
        {hasChildren ? (
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
              isExpanded
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isCurrentActive
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children.map((child: any) => (
              <Link
                key={child.name}
                href={child.href}
                onClick={onClose}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  isActive(child.href)
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {child.name}
              </Link>
            ))}
=======
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
>>>>>>> cursor/website-audit-content-update-and-deployment-bd9c
          </div>
        )}
      </div>
    );
  };

<<<<<<< HEAD
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <div className="space-y-1">
                  {navigation.main.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-1">
                  {navigation.services.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Solutions
                </h3>
                <div className="space-y-1">
                  {navigation.solutions.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-1">
                  {navigation.resources.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Support
                </h3>
                <div className="space-y-1">
                  {navigation.support.map(item => renderNavigationItem(item))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
=======
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
>>>>>>> cursor/website-audit-content-update-and-deployment-bd9c
  );
};

export default MainSidebar;