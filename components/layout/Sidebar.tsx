
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'Micro SaaS',
      services: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Video Editor Pro', href: '/services/ai-video-editor' },
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
        { name: 'AI Code Review Assistant', href: '/services/ai-code-reviewer' },
        { name: 'AI Translation Platform', href: '/services/ai-translation-platform' },
        { name: 'AI Data Privacy Manager', href: '/services/ai-data-privacy-manager' },
        { name: 'AI Workflow Optimizer', href: '/services/ai-workflow-optimizer' },
        { name: 'AI Customer Insights', href: '/services/ai-customer-insights' },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'AIOps Platform', href: '/services/aiops-platform' },
        { name: 'Quantum Security Solutions', href: '/services/quantum-security-solutions' },
        { name: 'Autonomous Systems Platform', href: '/services/autonomous-systems-platform' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },
        { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-security' },
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },
        { name: 'Hyperautomation Platform', href: '/services/hyperautomation-platform' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Materials Science', href: '/services/ai-materials-science' },
        { name: 'AI Energy Optimization', href: '/services/ai-energy-optimization' },
        { name: 'AI Agricultural Intelligence', href: '/services/ai-agricultural-intelligence' },
        { name: 'AI Mental Health Platform', href: '/services/ai-mental-health-platform' },
        { name: 'AI Urban Planning', href: '/services/ai-urban-planning' },
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api' },
    { name: 'System Status', href: '/status' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-blue-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
              {serviceCategories.map((category) => (
                <div key={category.title} className="mb-4">
                  <button
                    onClick={() => toggleSection(category.title)}
                    className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900">{category.title}</span>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(category.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(category.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={onClose}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                onClick={onClose}
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
