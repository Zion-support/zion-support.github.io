import React from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Home, 
  Users, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Code, 
  Database,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainNavItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Shield className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'IT Services', path: '/it-services', icon: <Shield className="w-5 h-5" /> },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Zap className="w-5 h-5" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <Code className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> }
  ];

  const featuredServices = [
    { name: 'Zion AI Neural Interface', path: '/zion-ai-neural-interface', icon: <Brain className="w-4 h-4" />, featured: true },
    { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', icon: <Code className="w-4 h-4" />, featured: true },
    { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'AI Space Mission Optimizer', path: '/ai-space-mission-optimizer', icon: <Globe className="w-4 h-4" />, featured: true }
  ];

  const quickLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Demo', path: '/demo' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
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

        {/* Contact Info */}
        <div className="p-4 border-b border-gray-700/50">
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-cyan-400">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center text-cyan-400">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Navigation</h3>
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 rounded-lg group"
                onClick={onClose}
              >
                <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Featured Services */}
        <div className="p-4 border-t border-gray-700/50">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Featured Services</h3>
          <div className="space-y-2">
            {featuredServices.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 rounded-lg group"
                onClick={onClose}
              >
                <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="text-sm font-medium flex-1">{service.name}</span>
                {service.featured && <Star className="w-3 h-3 text-yellow-400 fill-current" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-4 border-t border-gray-700/50">
          <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-xs text-gray-400 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 rounded-lg text-center"
                onClick={onClose}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-gray-700/50">
          <Link
            to="/contact"
            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-3 rounded-lg transition-all duration-300 text-center font-semibold text-white shadow-lg hover:shadow-cyan-500/25"
            onClick={onClose}
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;