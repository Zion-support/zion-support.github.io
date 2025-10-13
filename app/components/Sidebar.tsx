<<<<<<< HEAD
import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Sidebar({ className = '', children, ...props }: SidebarProps) {
  return (
    <div className={`sidebar-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Zap, Globe, Shield, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, TrendingUp, Mic, Phone, Code, Database, Package, Heart, Receipt, Cpu, Network, FileText, Clock, MapPin } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/software-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-solutions', icon: <Network className="w-4 h-4" /> },
    { name: 'DevOps Services', path: '/devops', icon: <Cpu className="w-4 h-4" /> },
    { name: 'System Integration', path: '/system-integration', icon: <Package className="w-4 h-4" /> },
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'AI Customer Support', path: '/micro-saas/ai-customer-support-chatbot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/micro-saas/ai-expense-tracker', icon: <Receipt className="w-4 h-4" /> },
    { name: 'AI Inventory Manager', path: '/micro-saas/ai-inventory-manager', icon: <Package className="w-4 h-4" /> },
    { name: 'AI Project Manager', path: '/micro-saas/ai-project-manager', icon: <Calendar className="w-4 h-4" /> },
    { name: 'AI Social Media Scheduler', path: '/micro-saas/ai-social-media-scheduler', icon: <TrendingUp className="w-4 h-4" /> },
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <MapPin className="w-4 h-4" /> },
  ], []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex flex-col w-full max-w-sm bg-slate-900 h-full shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
//                 Main
              </h3>
              <div className="space-y-1">
                <Link
                  to="/"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                  onClick={onClose}
                >
                  <Brain className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                  onClick={onClose}
                >
                  <Users className="w-4 h-4" />
                  <span>About</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                  onClick={onClose}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
//                 AI Services
              </h3>
              <div className="space-y-1">
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
//                 IT Services
              </h3>
              <div className="space-y-1">
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS */}
            <div>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
//                 Micro SAAS
              </h3>
              <div className="space-y-1">
                {microSaasServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5G Solutions */}
            <div>
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
//                 5G Solutions
              </h3>
              <div className="space-y-1">
                {fiveGServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors duration-200"
                    onClick={onClose}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
