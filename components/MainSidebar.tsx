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

interface SidebarProps {
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
    { name: 'Documentation', href: '/docs', icon: BookOpen, color: 'from-purple-500 to-pink-600' },
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

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:z-auto`}>
        
        {/* Header */}
        <div className="p-6 border-b border-zion-blue-light">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
              </div>
              <div className="text-xs text-zion-slate-light">Tech Group</div>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white mb-3 px-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-white text-center">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <div className="space-y-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Services Section */}
          {renderNavSection('Services', navigation.services, 'services')}

          {/* Solutions Section */}
          {renderNavSection('Solutions', navigation.solutions, 'solutions')}

          {/* Resources Section */}
          {renderNavSection('Resources', navigation.resources, 'resources')}

          {/* Company Section */}
          {renderNavSection('Company', navigation.company, 'company')}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zion-blue-light">
          {/* Contact Info */}
          <div className="mb-4 space-y-2">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-2 text-xs text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                <contact.icon className="w-3 h-3" />
                <span className="truncate">{contact.text}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover:bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">
            © {new Date().getFullYear()} Zion Tech Group
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;