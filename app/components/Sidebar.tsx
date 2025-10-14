import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Shield,
  Cloud,
  Code,
  Brain,
  Zap,
  Database,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Video,
  FileText,
  Eye,
  TrendingUp,
  Target,
  Package,
  Receipt,
  Calculator,
  DollarSign,
  Cpu,
  Network,
  Heart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Target className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Settings className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Eye className="w-4 h-4" /> },
    { name: 'Zion AI Email Analyzer', path: '/zion-ai-email-analyzer', icon: <Mail className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> }
  ], []);

  const mainPages = useMemo(() => [
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Demo', path: '/demo', icon: <Star className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <Heart className="w-4 h-4" /> }
  ], []);

  const sections = useMemo(() => [
    {
      name: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: aiServices,
      path: '/ai-services'
    },
    {
      name: 'IT Services',
      icon: <Settings className="w-5 h-5" />,
      items: itServices,
      path: '/services'
    },
    {
      name: 'Micro SAAS',
      icon: <Package className="w-5 h-5" />,
      items: microSaasServices,
      path: '/micro-saas'
    },
    {
      name: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      items: fiveGServices,
      path: '/5g-solutions'
    }
  ], [aiServices, itServices, microSaasServices, fiveGServices]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {/* Main Pages */}
              <div className="mb-8">
                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  Main Pages
                </h3>
                <div className="space-y-1">
                  <Link
                    to="/"
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive('/')
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                  {mainPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive(page.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {page.icon}
                      <span>{page.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Sections */}
              {sections.map((section) => (
                <div key={section.name} className="mb-8">
                  <button
                    onClick={() => toggleSection(section.name)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <span>{section.name}</span>
                    </div>
                    {expandedSections.has(section.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.has(section.name) && (
                    <div className="mt-2 ml-6 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={onClose}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            isActive(item.path)
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;