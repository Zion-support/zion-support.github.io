import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown, 
  ChevronRight,
  Code,
  Database,
  Cloud,
  Network,
  Package,
  Users,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Award,
  Star,
  Clock,
  FileText,
  Heart,
  Receipt,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        {
          name: 'AI Solutions',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Artificial Intelligence & Machine Learning'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: <Shield className="w-4 h-4" />,
          description: 'Technology Infrastructure & Support'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Package className="w-4 h-4" />,
          description: 'Ready-to-use Software Solutions'
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Network className="w-4 h-4" />,
          description: 'Next-generation Connectivity'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const quickLinks = [
    { name: 'Pricing', href: '/pricing', icon: <Receipt className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <Heart className="w-4 h-4" /> },
    { name: 'Demo', href: '/demo', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Tutorials', href: '/tutorials', icon: <Award className="w-4 h-4" /> }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', href: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', href: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', href: '/mobile-development', icon: <Phone className="w-4 h-4" /> },
    { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Navigation</h3>
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <span className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </span>
                      {activeDropdown === item.name ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              closeDropdowns();
                              onClose();
                            }}
                            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                          >
                            {subItem.icon}
                            <div>
                              <div className="font-medium text-sm">{subItem.name}</div>
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-2 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">Quick Links</h3>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={onClose}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-green-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* AI Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">AI Services</h3>
            {aiServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                onClick={onClose}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                {service.icon}
                <span className="text-sm">{service.name}</span>
              </Link>
            ))}
          </div>

          {/* IT Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">IT Services</h3>
            {itServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                onClick={onClose}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-colors"
              >
                {service.icon}
                <span className="text-sm">{service.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;