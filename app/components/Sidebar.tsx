'use client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  MessageCircle,
  Calendar,
  FileText,
  DollarSign,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  CheckSquare,
  Zap,
  Rocket,
  Star,
  Layers,
  Workflow,
  Eye,
  Mic,
  Package,
  Monitor,
  HardDrive,
  Wifi,
  Printer,
  Router,
  Heart,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target }
  ];

  const mainLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const contactInfo = [
    { icon: Phone, text: '(302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

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
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md shadow-2xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text-enhanced">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {/* Main Links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                  onClick={onClose}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}

              {/* AI Services */}
              <div className="pt-4">
                <button
                  onClick={() => toggleSection('ai')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5" />
                    <span>AI Services</span>
                  </div>
                  {expandedSections.includes('ai') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.includes('ai') && (
                  <div className="ml-8 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={onClose}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services */}
              <div>
                <button
                  onClick={() => toggleSection('it')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-5 h-5" />
                    <span>IT Services</span>
                  </div>
                  {expandedSections.includes('it') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.includes('it') && (
                  <div className="ml-8 mt-2 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={onClose}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Services */}
              <div>
                <button
                  onClick={() => toggleSection('saas')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5" />
                    <span>Micro SAAS</span>
                  </div>
                  {expandedSections.includes('saas') ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedSections.includes('saas') && (
                  <div className="ml-8 mt-2 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={onClose}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="p-6 border-t border-cyan-500/20">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={onClose}
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
