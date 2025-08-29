import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Rocket, 
  Brain, 
  Heart, 
  PenTool, 
  Shield, 
  Atom, 
  Cpu, 
  Globe, 
  Cloud, 
  ShoppingCart, 
  Building2, 
  Target, 
  BookOpen, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  DollarSign, 
  MessageCircle, 
  Play, 
  Users as CommunityIcon,
  Settings,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export const MainSidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationSections = [
    {
      id: 'main',
      title: 'Main Pages',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Services Overview', href: '/services', icon: Rocket },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'Resources', href: '/resources', icon: BookOpen },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
      ]
    },
    {
      id: 'services',
      title: 'AI & Technology Services',
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
        { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', icon: FileText },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', icon: DollarSign },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Target },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Rocket },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Settings },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Settings },
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Security',
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: Brain },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Settings },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Blockchain Solutions', href: '/services/blockchain', icon: Shield },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-access', icon: Shield },
      ]
    },
    {
      id: 'business',
      title: 'Business Solutions',
      items: [
        { name: 'Micro SaaS Products', href: '/services/micro-saas', icon: ShoppingCart },
        { name: 'Enterprise Solutions', href: '/solutions', icon: Building2 },
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions#financial', icon: DollarSign },
        { name: 'Legal Services', href: '/solutions#legal', icon: FileText },
        { name: 'Manufacturing', href: '/solutions#manufacturing', icon: Settings },
        { name: 'Retail & E-commerce', href: '/solutions#retail', icon: ShoppingCart },
        { name: 'Government Solutions', href: '/solutions#government', icon: Building2 },
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      items: [
        { name: 'Blog & Insights', href: '/blog', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: Target },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Users },
        { name: 'Documentation', href: '/docs', icon: Code },
        { name: 'FAQ & Support', href: '/faq', icon: HelpCircle },
        { name: 'Training', href: '/training', icon: Users },
        { name: 'Community', href: '/community', icon: CommunityIcon },
        { name: 'Developers', href: '/developers', icon: Code },
      ]
    },
    {
      id: 'company',
      title: 'Company & Contact',
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/about#team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Contact Us', href: '/contact', icon: MessageCircle },
        { name: 'Schedule Demo', href: '/demo', icon: Play },
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Legal', href: '/legal', icon: FileText },
      ]
    }
  ];

  return (
    <aside className="w-80 bg-slate-800/95 backdrop-blur-xl border-r border-slate-700/50 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h2>
          </Link>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.id} className="space-y-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-sm font-semibold transition-colors"
              >
                <span>{section.title}</span>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                        isActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                          : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${
                        isActive(item.href) ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                      }`} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              Get Quote
            </Link>
            <Link
              to="/demo"
              className="flex items-center gap-3 px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Schedule Demo
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Contact Info</h3>
          <div className="space-y-2 text-sm text-slate-400">
            <p>Phone: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p className="text-xs">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </aside>
  );
};