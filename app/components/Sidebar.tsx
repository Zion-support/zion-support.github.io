import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Phone, 
  Network,
  BarChart3,
  Cloud,
  Code,
  Database,
  Cpu,
  FileText,
  TrendingUp,
  Package,
  Heart,
  Receipt,
  Clock,
  Monitor,
  Smartphone,
  ChevronDown,
  ChevronRight
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

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ], []);

  const serviceSections = useMemo(() => [
    {
      name: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      path: '/ai-services',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Service', path: '/ai-customer-service' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Healthcare', path: '/ai-healthcare' }
      ]
    },
    {
      name: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      path: '/services',
      items: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity-solutions' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Custom Software', path: '/custom-software' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' }
      ]
    },
    {
      name: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      path: '/micro-saas',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', path: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
        { name: 'Zion Content Studio', path: '/zion-content-studio' }
      ]
    },
    {
      name: '5G Solutions',
      icon: <Network className="w-5 h-5" />,
      path: '/5g-solutions',
      items: [
        { name: '5G Data Analytics', path: '/5g-data-analytics' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' }
      ]
    }
  ], []);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {/* Main Pages */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.name}>
                <button
                  onClick={() => toggleSection(section.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(section.path)
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
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
                  <div className="ml-8 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={onClose}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-cyan-400 bg-cyan-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-xs text-gray-400 space-y-2">
              <div>© 2024 Zion Tech Group</div>
              <div>All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;