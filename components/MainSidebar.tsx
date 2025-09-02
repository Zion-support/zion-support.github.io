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

  interface NavItem {
    name: string;
    href: string;
    icon: any;
    description?: string;
  }

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      { name: 'Web Development', href: '/services/web-development', icon: Code },
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
      { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
      { name: 'E-commerce', href: '/solutions/ecommerce', icon: ShoppingCart },
      { name: 'Mobile Apps', href: '/solutions/mobile', icon: Smartphone },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Network },
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: Target },
      { name: 'Documentation', href: '/docs', icon: BookOpen },
      { name: 'Support', href: '/support', icon: LifeBuoy },
    ],
    company: [
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'News', href: '/news', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Mail },
    ]
  };

  const quickActions = [
    { name: 'Get Quote', href: '/quote', icon: DollarSign, color: 'from-green-500 to-green-600' },
    { name: 'Schedule Call', href: '/schedule', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { name: 'View Portfolio', href: '/portfolio', icon: Eye, color: 'from-purple-500 to-purple-600' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-orange-600' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
    { icon: Globe, text: 'Website', href: 'https://ziontechgroup.com' },
  ];

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 mb-3"
      >
        <span className="font-semibold text-sm uppercase tracking-wide">{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {expandedSections.includes(sectionKey) && (
        <div className="space-y-1 pl-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:shadow-none`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Main</h3>
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Expandable Sections */}
            {renderNavSection('Services', navigation.services, 'services')}
            {renderNavSection('Solutions', navigation.solutions, 'solutions')}
            {renderNavSection('Resources', navigation.resources, 'resources')}
            {renderNavSection('Company', navigation.company, 'company')}

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`bg-gradient-to-r ${action.color} text-white p-3 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all duration-200`}
                    onClick={onClose}
                  >
                    <action.icon className="w-4 h-4 mx-auto mb-1" />
                    <div>{action.name}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Contact</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;