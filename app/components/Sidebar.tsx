import React from 'react';
import { Link } from 'react-router-dom';
import { X, Globe, Users, Award, Code, Mail, Phone, Brain, Shield, Zap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
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
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div>
                  <button
onClick={() => toggleExpanded(link.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                  >
                    <div className="flex items-center">
                      <link.icon className="w-5 h-5 mr-3" />
                      {link.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(link.name) ? 'rotate-180' :;
                      }`} 
                    />
                  </button>
                  {expandedItems.includes(link.name) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20;
                              : 'text-gray-400 hover:text-white hover:bg-slate-800;
                          }`}
                          onClick={onClose}
                        >
                          <subLink.icon className="w-4 h-4 mr-3" />
                          {subLink.name}
                        </Link>
))}
                    </div>
)}
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded ${
                    isActive(link.href) ? 'text-blue-400 bg-blue-900/20' :;
                  }`}
                  onClick={onClose}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.name}
                </Link>
)}
            </div>
))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
