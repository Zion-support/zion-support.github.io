import { Link } from 'react-router-dom'
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
import { X, Brain, Shield, Zap, Globe, Home, Mail, Phone } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Brain },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const serviceItems = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services', icon: Shield },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: '5G Solutions', href: '/5g-solutions', icon: Globe },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4 px-4">Services</h3>
            <div className="space-y-2">
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-cyan-400 font-semibold mb-4 px-4">Contact Us</h3>
            <div className="space-y-3 px-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
