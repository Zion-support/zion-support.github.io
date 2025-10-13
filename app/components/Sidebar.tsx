import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, BarChart3, FileText, Cloud, Code, Mail, Package } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">AI Services</h3>
            <Link
              to="/ai-services"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Brain className="w-5 h-5" />
              <span>AI Solutions</span>
            </Link>
            <Link
              to="/ai-business-intelligence-pro"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Business Intelligence Pro</span>
            </Link>
            <Link
              to="/ai-content-generation-pro"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <FileText className="w-5 h-5" />
              <span>Content Generation Pro</span>
            </Link>
            <Link
              to="/ai-cybersecurity-monitor-pro"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Shield className="w-5 h-5" />
              <span>Cybersecurity Monitor Pro</span>
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">IT Services</h3>
            <Link
              to="/services"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Shield className="w-5 h-5" />
              <span>IT Solutions</span>
            </Link>
            <Link
              to="/cloud-migration"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Cloud className="w-5 h-5" />
              <span>Cloud Migration</span>
            </Link>
            <Link
              to="/web-development"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Code className="w-5 h-5" />
              <span>Web Development</span>
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Micro SAAS</h3>
            <Link
              to="/micro-saas"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Zap className="w-5 h-5" />
              <span>Micro SAAS Solutions</span>
            </Link>
            <Link
              to="/ai-powered-email-analyzer"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Mail className="w-5 h-5" />
              <span>Email Analyzer</span>
            </Link>
            <Link
              to="/smart-inventory-optimizer"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Package className="w-5 h-5" />
              <span>Inventory Optimizer</span>
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Company</h3>
            <Link
              to="/about"
              className="block p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
            <Link
              to="/5g-solutions"
              className="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              <Globe className="w-5 h-5" />
              <span>5G Solutions</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;