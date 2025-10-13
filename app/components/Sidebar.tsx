import React from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  Shield, 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  Database,
  Wifi,
  Star,
  ChevronRight
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    {
      title: 'Overview',
      items: [
        { name: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
        { name: 'Analytics', path: '/analytics', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-5 h-5" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-5 h-5" /> },
        { name: 'AI Content', path: '/ai-content-generation', icon: <Code className="w-5 h-5" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-5 h-5" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Advanced AI',
      items: [
        { name: 'Quantum Computing', path: '/ai-quantum-computing', icon: <Brain className="w-5 h-5" />, featured: true },
        { name: 'Blockchain AI Pro', path: '/ai-blockchain-solutions-pro', icon: <Shield className="w-5 h-5" />, featured: true },
        { name: 'IoT Solutions Pro', path: '/ai-iot-solutions-pro', icon: <Wifi className="w-5 h-5" />, featured: true }
      ]
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-5 h-5" /> },
        { name: 'Database Management', path: '/database-management', icon: <Database className="w-5 h-5" /> },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-5 h-5" /> }
      ]
    },
    {
      title: '5G Solutions',
      items: [
        { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-5 h-5" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-5 h-5" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Wifi className="w-5 h-5" /> },
        { name: '5G Smart Cities', path: '/5g-smart-city-solutions', icon: <Globe className="w-5 h-5" /> }
      ]
    }
  ];

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
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 
        border-l border-cyan-500/20 backdrop-blur-xl z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {navigationItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center justify-between p-3 rounded-lg transition-all duration-300 group
                      ${item.featured 
                        ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30' 
                        : 'hover:bg-white/10'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                        ${item.featured 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                          : 'bg-white/10 text-gray-300 group-hover:text-cyan-400'
                        }
                      `}>
                        {item.icon}
                      </div>
                      <span className={`
                        font-medium transition-colors
                        ${item.featured ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                      `}>
                        {item.name}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                    )}
                    {!item.featured && (
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-cyan-500/20">
          <FuturisticButton
            href="/contact"
            variant="primary"
            size="sm"
            className="w-full"
          >
            Get Started
          </FuturisticButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;