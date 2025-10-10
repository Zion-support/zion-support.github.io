'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { X, Zap, Brain, Cloud, Code, Sparkles, ArrowRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support' },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure' },
        { name: '24/7 IT Support', path: '/it-support' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      services: [
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-400/20 z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center neon-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Main Links */}
            <div className="space-y-2 mb-8">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={onClose}
                  className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-cyan-400 font-semibold text-lg mb-4 neon-text">Our Services</h3>
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <div className="flex items-center space-x-2 mb-3">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <div className="ml-7 space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        onClick={onClose}
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-gray-700 space-y-4">
            <Link
              to="/demo"
              onClick={onClose}
              className="block w-full text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View Demo
            </Link>
            <Link
              to="/consultation"
              onClick={onClose}
              className="block w-full text-center border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;