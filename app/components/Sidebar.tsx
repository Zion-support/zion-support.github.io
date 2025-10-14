import React from 'react';
import { Link } from 'react-router-dom';
import { X, Globe, Users, Award, Code, Mail, Phone, Brain, Shield, Zap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Award className="w-5 h-5" />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Code className="w-5 h-5" />
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                AI Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/ai-services"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Brain className="w-5 h-5" />
                    <span>AI Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-analytics"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Shield className="w-5 h-5" />
                    <span>AI Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generation"
                    onClick={onClose}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Content Generation</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
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