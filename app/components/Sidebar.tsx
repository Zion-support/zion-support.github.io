import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, BarChart3, Brain, Shield, Zap, Code, Settings, Home, Mail, Users, Globe, Cpu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
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

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Zap className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Settings className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Globe className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Brain className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-sm border-r border-white/10 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            <Link
              to="/"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
              onClick={onClose}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
              onClick={onClose}
            >
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
              onClick={onClose}
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>

          {/* AI Services */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('ai')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span>AI Services</span>
              </div>
              <ArrowRight className={`w-4 h-4 transition-transform ${expandedSections.has('ai') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.has('ai') && (
              <div className="ml-4 mt-2 space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(service.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('it')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" />
                <span>IT Services</span>
              </div>
              <ArrowRight className={`w-4 h-4 transition-transform ${expandedSections.has('it') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.has('it') && (
              <div className="ml-4 mt-2 space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(service.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SAAS */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('micro')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5" />
                <span>Micro SAAS</span>
              </div>
              <ArrowRight className={`w-4 h-4 transition-transform ${expandedSections.has('micro') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.has('micro') && (
              <div className="ml-4 mt-2 space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(service.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 5G Services */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('5g')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span>5G Solutions</span>
              </div>
              <ArrowRight className={`w-4 h-4 transition-transform ${expandedSections.has('5g') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.has('5g') && (
              <div className="ml-4 mt-2 space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(service.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              onClick={onClose}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;