import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  MapPin
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Settings className="w-5 h-5" />,
      children: [
        {
          name: 'AI Services',
          path: '/ai-services',
          icon: <Brain className="w-4 h-4" />
        },
        {
          name: 'IT Services',
          path: '/services',
          icon: <Shield className="w-4 h-4" />
        },
        {
          name: '5G Solutions',
          path: '/5g-solutions',
          icon: <Zap className="w-4 h-4" />
        },
        {
          name: 'Micro SAAS',
          path: '/micro-saas',
          icon: <Code className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Code className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ], []);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {expandedSections.includes(item.name) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedSections.includes(item.name) && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={onClose}
                            className={`flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                              isActive(child.path)
                                ? 'text-cyan-400 bg-cyan-500/10'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            {child.icon}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
