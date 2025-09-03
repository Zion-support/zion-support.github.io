import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Home, Briefcase, Users, Phone, 
  Mail, MapPin, 
  Globe, Linkedin, 
  Twitter, Shield, 
  Handshake, ChevronDown, 
  ChevronRight, Brain, 
  Cpu, Database, 
  Network, Code, 
  Palette, Target, 
  Rocket, Eye, 
  DollarSign, ShoppingCart, 
  Clock, Cloud, 
  Search, Building, 
  Zap, Heart, 
  Lightbulb, TrendingUp, 
  BarChart3, Lock, 
  AlertTriangle, Server, 
  CheckCircle, Truck, 
  Car, TestTube, 
  PenTool, Building2, 
  Atom, FileText, 
  Quote, Newspaper, 
  Calendar, Video, 
  HelpCircle, LifeBuoy, 
  Store, PieChart, 
  Share2, Monitor, 
  Smartphone, Settings,
  User, Bell,
  BookOpen, Award,
  Leaf, Sun,
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
    setExpandedSections((prev) =>
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
      { name: 'AI Services', href: '/services/ai-services', icon: Brain, description: 'AI-powered solutions' },
      { name: 'IT Services', href: '/services/it-services', icon: Server, description: 'Infrastructure & support' },
      { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud, description: 'Cloud infrastructure' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
      { name: 'Data Analytics', href: '/services/data', icon: Database, description: 'Data insights' },
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

  const renderNavigationSection = (title: string, items: any[], sectionKey: string) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div key={sectionKey} className="mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
          <span>{title}</span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-2 space-y-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 truncate">{item.description}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Zion Tech</h2>
              <p className="text-xs text-gray-400">Navigation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-6">
          <div className="space-y-6">
            {/* Main Pages */}
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Main Pages
              </h3>
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Services */}
            {renderNavigationSection('Services', navigation.services, 'services')}

            {/* Solutions */}
            {renderNavigationSection('Solutions', navigation.solutions, 'solutions')}

            {/* Resources */}
            {renderNavigationSection('Resources', navigation.resources, 'resources')}

            {/* Company */}
            {renderNavigationSection('Company', navigation.company, 'company')}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-t border-gray-800">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                onClick={onClose}
                className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
              >
                <action.icon className="w-4 h-4 mx-auto mb-1" />
                <div className="text-xs font-medium">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-4">
            <Link href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-zion-cyan transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-zion-cyan transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://ziontechgroup.com" className="text-gray-400 hover:text-zion-cyan transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;