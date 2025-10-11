'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI analytics solutions' },
    { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data insights and analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI security solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'Native and cross-platform apps' },
    { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', href: '/database-management', description: 'Database design and optimization' },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Strategic IT guidance' }
  ];

  const microSaas = [
    { name: 'AI Content Writer', href: '/micro-saas/ai-content-writer', description: 'AI-powered content creation' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', href: '/micro-saas/chat-analytics', description: 'Conversation insights' },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'Automated content creation' },
    { name: 'Document Processor', href: '/micro-saas/document-processor', description: 'Document automation' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Email campaign management' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking tool' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        closeAllMenus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">
                  AI & IT SOLUTIONS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 p-6 z-50">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                          <Brain className="w-5 h-5 mr-2" />
                          AI Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {aiServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 block py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/ai-services"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 inline-flex items-center"
                          onClick={closeAllMenus}
                        >
                          View All AI Services
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                          <Cloud className="w-5 h-5 mr-2" />
                          IT Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {itServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-200 block py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/it-services"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 inline-flex items-center"
                          onClick={closeAllMenus}
                        >
                          View All IT Services
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              
              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              About
            </Link>

            <Link
              to="/ai-services"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>

            <Link
              to="/it-services"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            <Link
              to="/blog"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 mt-4 text-center"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
