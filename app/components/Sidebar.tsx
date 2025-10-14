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
  isOpen: boolean
  onClose: () => void
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

  const navigationItems = useMemo(() => [
    {
      title: 'Home',
      href: '/',
      icon: Home
    },
    {
      title: 'Services',
      href: '/services',
      icon: Settings,
      children: [
        { title: 'AI Services', href: '/ai-services' },
        { title: 'IT Services', href: '/services' },
        { title: '5G Solutions', href: '/5g-solutions' },
        { title: 'Micro SAAS', href: '/micro-saas' }
      ]
    },
    {
      title: 'About',
      href: '/about',
      icon: Users
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: BarChart3
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ], []);

  const isActive = useCallback((href: string) => {
    return location.pathname === href;
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.title}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors text-left"
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 text-gray-400 mr-3" />
                          <span className="text-white font-medium">{item.title}</span>
                        </div>
                        {expandedSections.has(item.title) ? (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedSections.has(item.title) && (
                        <ul className="ml-8 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <Link
                                to={child.href}
                                onClick={onClose}
                                className={`block p-2 rounded-lg hover:bg-slate-800 transition-colors ${
                                  isActive(child.href)
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-gray-300'
                                }`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center p-3 rounded-lg hover:bg-slate-800 transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-400 bg-blue-900/20'
                          : 'text-gray-300'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-700">
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                <p className="font-medium text-white mb-2">Contact Info</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
