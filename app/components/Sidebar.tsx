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
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Zap,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  MessageSquare,
  CheckCircle,
  ShoppingCart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

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
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {mainNavItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Services */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </h3>
                <ul className="space-y-1">
                  {aiServices.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/ai-services"
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>View All AI Services</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  IT Services
                </h3>
                <ul className="space-y-1">
                  {itServices.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/it-services"
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-purple-400 hover:text-purple-300 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>View All IT Services</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Micro SAAS */}
              <div>
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3 flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  Micro SAAS
                </h3>
                <ul className="space-y-1">
                  {microSaasServices.slice(0, 6).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/micro-saas"
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-green-400 hover:text-green-300 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>View All Micro SAAS</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-sm hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;