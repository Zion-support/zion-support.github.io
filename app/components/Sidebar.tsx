import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, BarChart3, Cloud, FileText, Users, Cpu, Network, Clock, TrendingUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const services = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services', icon: Shield },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: '5G Solutions', href: '/5g-solutions', icon: Globe }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Cpu },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
    { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Clock }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-cyan-500/20">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            onClick={onClose}
          >
            About
          </Link>

          <div className="space-y-2">
            <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</div>
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={onClose}
              >
                <service.icon className="w-5 h-5 mr-3" />
                {service.name}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI Services</div>
            {aiServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={onClose}
              >
                <service.icon className="w-5 h-5 mr-3" />
                {service.name}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Micro SAAS</div>
            {microSaasServices.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={onClose}
              >
                <service.icon className="w-5 h-5 mr-3" />
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;