import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Zap, Brain, Shield, Users, HardDrive, Building2, FileText, HelpCircle, BarChart3 } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<{
    services: boolean;
    solutions: boolean;
    company: boolean;
  }>({
    services: false,
    solutions: false,
    company: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="fixed inset-y-0 right-0 w-80 bg-zion-slate-dark shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <nav className="p-4 space-y-2">
            {/* Home */}
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">Home</span>
            </Link>

            {/* Services Section */}
            <div>
              <button
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Services</span>
                </div>
                {expandedSections.services ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.services && (
                <div className="ml-6 mt-2 space-y-1">
                  <div className="border-l-2 border-zion-purple/20 pl-4 space-y-2">
                    <h4 className="text-xs font-semibold text-zion-cyan uppercase tracking-wider">Micro SAAS</h4>
                    <Link
                      to="/services"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      All Services
                    </Link>
                    <Link
                      to="/services/ai-sales-copilot"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      AI Sales Copilot
                    </Link>
                    <Link
                      to="/services/cloud-finops-optimizer"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Cloud FinOps Optimizer
                    </Link>
                    
                    <h4 className="text-xs font-semibold text-zion-cyan uppercase tracking-wider mt-4">IT Services</h4>
                    <Link
                      to="/services/quantum-computing"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Quantum Computing
                    </Link>
                    <Link
                      to="/services/cloud-devops"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Cloud & DevOps
                    </Link>
                    <Link
                      to="/services/cybersecurity"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Cybersecurity
                    </Link>
                    
                    <h4 className="text-xs font-semibold text-zion-cyan uppercase tracking-wider mt-4">AI Solutions</h4>
                    <Link
                      to="/services/ai-services"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/services/ai-cybersecurity"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      AI Cybersecurity
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Section */}
            <div>
              <button
                onClick={() => toggleSection('solutions')}
                className="flex items-center justify-between w-full px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span className="text-sm font-medium">Solutions</span>
                </div>
                {expandedSections.solutions ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.solutions && (
                <div className="ml-6 mt-2 space-y-1">
                  <div className="border-l-2 border-zion-purple/20 pl-4 space-y-2">
                    <h4 className="text-xs font-semibold text-zion-cyan uppercase tracking-wider">Talent</h4>
                    <Link
                      to="/talent"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Find Experts
                    </Link>
                    <Link
                      to="/zion-hire-ai"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      AI Hiring
                    </Link>
                    
                    <h4 className="text-xs font-semibold text-zion-cyan uppercase tracking-wider mt-4">Resources</h4>
                    <Link
                      to="/enterprise"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Enterprise Solutions
                    </Link>
                    <Link
                      to="/solutions"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Industry Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Section */}
            <div>
              <button
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Company</span>
                </div>
                {expandedSections.company ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.company && (
                <div className="ml-6 mt-2 space-y-1">
                  <div className="border-l-2 border-zion-purple/20 pl-4 space-y-2">
                    <Link
                      to="/about"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/team"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/careers"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Careers
                    </Link>
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              to="/resources"
              onClick={onClose}
              className="flex items-center px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">Resources</span>
            </Link>

            <Link
              to="/blog"
              onClick={onClose}
              className="flex items-center px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">Blog</span>
            </Link>

            <Link
              to="/pricing"
              onClick={onClose}
              className="flex items-center px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">Pricing</span>
            </Link>

            <Link
              to="/help"
              onClick={onClose}
              className="flex items-center px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">Support</span>
            </Link>
          </nav>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-zion-purple/20">
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}