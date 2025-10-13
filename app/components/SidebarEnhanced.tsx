import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, ChevronRight, Home, Users, Settings, HelpCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarEnhancedProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarEnhanced: React.FC<SidebarEnhancedProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Brain },
    { name: 'Services', path: '/services', icon: Shield },
    { name: 'AI Services', path: '/ai-services', icon: Brain },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Zap },
    { name: '5G Solutions', path: '/5g-solutions', icon: Globe },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const microSaasServices = [
    { name: 'AI Accounting Assistant', path: '/zion-ai-accounting-assistant' },
    { name: 'AI 3D Generator', path: '/zion-ai-3d-generator' },
    { name: 'AI Blockchain Analytics', path: '/zion-ai-blockchain-analytics' },
    { name: 'AI Video Generator', path: '/zion-ai-video-generator' },
    { name: 'AI CRM Pro', path: '/zion-ai-crm-pro' },
    { name: 'AI Marketing Automation', path: '/zion-ai-marketing-automation' },
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Support', path: '/ai-customer-support' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'DevOps', path: '/devops' },
    { name: 'IT Consulting', path: '/it-consulting' },
    { name: 'System Integration', path: '/system-integration' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  Main Navigation
                </h3>
                <nav className="space-y-2">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                        isActive(item.path)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Micro SAAS Services */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  Micro SAAS Services
                </h3>
                <nav className="space-y-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                        isActive(service.path)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                      <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* AI Services */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  AI Services
                </h3>
                <nav className="space-y-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                        isActive(service.path)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <Brain className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                      <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* IT Services */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  IT Services
                </h3>
                <nav className="space-y-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                        isActive(service.path)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                      <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <contact.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarEnhanced;