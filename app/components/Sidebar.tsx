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
  Globe
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

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Project Management', path: '/ai-project-management' }
  ], []);

  const microSaas = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' }
  ], []);

  const mainPages = useMemo(() => [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Star className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Shield className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> }
  ], []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
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
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {/* Main Pages */}
              {mainPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(page.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                  onClick={onClose}
                >
                  {page.icon}
                  <span>{page.name}</span>
                </Link>
              ))}
            </div>

            {/* AI Services Section */}
            <div className="px-6 mt-8">
              <button
                onClick={() => toggleSection('ai')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                </div>
                {expandedSections.has('ai') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.has('ai') && (
                <div className="mt-2 ml-6 space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block px-3 py-2 text-sm transition-all duration-300 ${
                        isActive(service.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                      onClick={onClose}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Section */}
            <div className="px-6 mt-4">
              <button
                onClick={() => toggleSection('saas')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4" />
                  <span>Micro SAAS</span>
                </div>
                {expandedSections.has('saas') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.has('saas') && (
                <div className="mt-2 ml-6 space-y-1">
                  {microSaas.map((saas) => (
                    <Link
                      key={saas.name}
                      to={saas.path}
                      className={`block px-3 py-2 text-sm transition-all duration-300 ${
                        isActive(saas.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                      onClick={onClose}
                    >
                      {saas.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Solutions Section */}
            <div className="px-6 mt-4">
              <button
                onClick={() => toggleSection('5g')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4" />
                  <span>5G Solutions</span>
                </div>
                {expandedSections.has('5g') ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.has('5g') && (
                <div className="mt-2 ml-6 space-y-1">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block px-3 py-2 text-sm transition-all duration-300 ${
                        isActive(service.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                      onClick={onClose}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;