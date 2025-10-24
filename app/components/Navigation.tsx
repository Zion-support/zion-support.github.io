'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Brain, Cloud, Code, BarChart, Users, Database, Lock, CheckSquare, FileText, MessageCircle, Workflow, Clock } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_isScrolled, _setIsScrolled] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [_microSaasOpen, _setMicroSaasOpen] = useState(false);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    _setMicroSaasOpen(false);
  }, []);

  // Service data
  const _aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText, description: 'AI-powered content creation' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Automate business processes' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageCircle, description: 'Intelligent customer service' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Lock, description: 'Security solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'RESTful API development' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database optimization' }
  ];

  const _microSaasServices = [
    { name: 'Project Management', href: '/micro-saas/project-management', icon: CheckSquare, description: 'Streamline project workflows' },
    { name: 'Time Tracking', href: '/micro-saas/time-tracking', icon: Clock, description: 'Track time efficiently' },
    { name: 'Invoice Generator', href: '/micro-saas/invoice-generator', icon: FileText, description: 'Generate professional invoices' },
    { name: 'Client Portal', href: '/micro-saas/client-portal', icon: Users, description: 'Client management system' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <Brain className="w-8 h-8 text-cyan-400" />
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 p-4"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {_aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="text-white font-medium text-sm">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 p-4"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <div className="text-white font-medium text-sm">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                href="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;