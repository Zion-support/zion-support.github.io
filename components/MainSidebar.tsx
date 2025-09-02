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
        <div className="mt-2 space-y-1">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={onClose}
            >
              <item.icon className="w-4 h-4 mr-3" />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                {item.description && (
                  <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

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
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Main
              </h3>
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
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

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-center text-sm font-medium hover:opacity-90 transition-opacity`}
                    onClick={onClose}
                  >
                    <action.icon className="w-4 h-4 mx-auto mb-1" />
                    {action.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            {/* Contact Info */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Contact</h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-4 h-4 mr-2" />
                    {contact.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-md hover:bg-gray-700 transition-colors ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;