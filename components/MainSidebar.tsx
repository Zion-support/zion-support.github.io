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
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  Wind
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

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Autonomous AI systems' },
      { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & automation' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Zero-trust security' },
      { name: 'Data & Analytics', href: '/services/data', icon: Database, description: 'Data pipelines & ML ops' },
      { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' },
      { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business modernization' },
    ],
    solutions: [
      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' },
      { name: 'SMB', href: '/solutions/smb', icon: Store, description: 'Small business focused' },
      { name: 'Startup', href: '/solutions/startup', icon: Rocket, description: 'Growth acceleration' },
      { name: 'Government', href: '/solutions/government', icon: Building, description: 'Public sector expertise' },
      { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Health tech solutions' },
      { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Fintech & compliance' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
      { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
      { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & FAQs' },
      { name: 'Status', href: '/status', icon: CheckCircle, description: 'System status' },
      { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' },
    ],
    company: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' },
      { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'News', href: '/news', icon: Newspaper, description: 'Company updates' },
      { name: 'Press', href: '/press', icon: Quote, description: 'Media resources' },
    ]
  };

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: Quote, color: 'from-cyan-500 to-blue-600' },
    { name: 'Get Support', href: '/contact', icon: HelpCircle, color: 'from-green-500 to-emerald-600' },
    { name: 'View Status', href: '/status', icon: CheckCircle, color: 'from-yellow-500 to-orange-600' },
    { name: 'Documentation', href: '/docs', icon: FileText, color: 'from-purple-500 to-pink-600' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedin, color: 'text-blue-500' },
    { name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitter, color: 'text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code, color: 'text-gray-400' },
  ];

  const renderNavSection = (title: string, items: any[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <span>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {expandedSections.includes(sectionKey) && (
        <div className="mt-2 space-y-1">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-6 py-2 text-sm rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={onClose}
              >
                <IconComponent className="h-4 w-4 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold text-gray-900">
                Zion Tech
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Navigation
                </h3>
                <div className="space-y-1">
                  {navigation.main.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                        onClick={onClose}
                      >
                        <IconComponent className="h-5 w-5 mr-3" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Services */}
              {renderNavSection('Services', navigation.services, 'services')}

              {/* Solutions */}
              {renderNavSection('Solutions', navigation.solutions, 'solutions')}

              {/* Resources */}
              {renderNavSection('Resources', navigation.resources, 'resources')}

              {/* Company */}
              {renderNavSection('Company', navigation.company, 'company')}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={`flex flex-col items-center p-3 rounded-lg bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all transform hover:scale-105`}
                      onClick={onClose}
                    >
                      <IconComponent className="h-5 w-5 mb-1" />
                      <span className="text-xs font-medium text-center">
                        {action.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            {/* Contact Info */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Contact
              </h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <IconComponent className="h-3 w-3 mr-2" />
                      {contact.text}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${social.color}`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;