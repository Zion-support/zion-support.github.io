import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Home, 
  Users, 
  Code, 
  Mail, 
  ChevronDown, 
  ChevronRight,
  Sparkles,
  BarChart3,
  Cloud,
  Database,
  Video,
  Mic,
  Eye,
  DollarSign,
  Heart,
  Receipt,
  TrendingUp,
  Package,
  Network,
  Target,
  Calendar,
  FileText,
  Layers,
  Settings,
  HelpCircle,
  BookOpen,
  PlayCircle,
  Cpu,
  Phone,
  MapPin
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  if (!isOpen) return null;

  const mainNavigationItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Layers className="w-4 h-4" /> },
    { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: <Network className="w-4 h-4" /> },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: <Eye className="w-4 h-4" /> },
  ];

  const microSaasServices = [
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Zion AI Email Analyzer', path: '/zion-ai-email-analyzer', icon: <Mail className="w-4 h-4" /> },
    { name: 'Zion Smart Inventory Optimizer', path: '/zion-smart-inventory-optimizer', icon: <Package className="w-4 h-4" /> },
    { name: 'Zion AI Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker', icon: <Heart className="w-4 h-4" /> },
    { name: 'Zion Smart Expense Categorizer', path: '/zion-smart-expense-categorizer', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'DevOps Services', path: '/devops', icon: <Settings className="w-4 h-4" /> },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
    { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'System Integration', path: '/system-integration', icon: <Database className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> },
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Globe className="w-4 h-4" /> },
  ];

  const resources = [
    { name: 'Documentation', path: '/docs', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <PlayCircle className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: '+1 302 464 0950' },
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com' },
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown DE 19709' },
  ];

  const renderSection = (title: string, items: any[], sectionKey: string) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full text-left text-white font-medium py-2 hover:text-cyan-400 transition-colors"
        >
          <span>{title}</span>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {isExpanded && (
          <ul className="ml-4 space-y-2 mt-2">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main</h3>
            <ul className="space-y-2">
              {mainNavigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors py-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          {renderSection('AI Services', aiServices, 'ai-services')}

          {/* Micro SAAS */}
          {renderSection('Micro SAAS', microSaasServices, 'micro-saas')}

          {/* IT Services */}
          {renderSection('IT Services', itServices, 'it-services')}

          {/* 5G Solutions */}
          {renderSection('5G Solutions', fiveGServices, '5g-solutions')}

          {/* Resources */}
          {renderSection('Resources', resources, 'resources')}

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Contact Info</h3>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedSidebar;