import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Zap } from "lucide-react";
interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen);
  }, [isAIServicesOpen]);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen);
  }, [isITServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-2xl">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home */}
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/10 transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-2xl border border-purple-500/20 z-50">
                    <div className="py-2">
                      {/* AI Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleAIServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isAIServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/ai-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Analytics Dashboard
                            </Link>
                            <Link to="/ai-content-generation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Content Generation
                            </Link>
                            <Link to="/ai-customer-support" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Customer Support
                            </Link>
                            <Link to="/ai-cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Cybersecurity
                            </Link>
                            <Link to="/ai-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Data Analytics
                            </Link>
                            <Link to="/ai-workflow-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Workflow Automation
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* IT Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleITServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          IT Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isITServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isITServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Cloud Infrastructure
                            </Link>
                            <Link to="/cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Cybersecurity Solutions
                            </Link>
                            <Link to="/data-management" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Data Management
                            </Link>
                            <Link to="/network-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Network Solutions
                            </Link>
                            <Link to="/it-consulting" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              IT Consulting
                            </Link>
                            <Link to="/system-integration" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              System Integration
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Micro SAAS */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleMicroSaas}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Package className="w-4 h-4 mr-2" />
                          Micro SAAS
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMicroSaasOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/project-management-tool" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Project Management Tool
                            </Link>
                            <Link to="/team-collaboration" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Team Collaboration
                            </Link>
                            <Link to="/analytics-dashboard" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Analytics Dashboard
                            </Link>
                            <Link to="/customer-relationship" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Customer Relationship
                            </Link>
                            <Link to="/inventory-management" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Inventory Management
                            </Link>
                            <Link to="/financial-tracking" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Financial Tracking
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* 5G Solutions */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggle5GServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Wifi className="w-4 h-4 mr-2" />
                          5G Solutions
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {is5GServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/5g-network-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Network Infrastructure
                            </Link>
                            <Link to="/5g-iot-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G IoT Solutions
                            </Link>
                            <Link to="/5g-smart-city" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Smart City
                            </Link>
                            <Link to="/5g-edge-computing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Edge Computing
                            </Link>
                            <Link to="/5g-mobile-apps" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Mobile Applications
                            </Link>
                            <Link to="/5g-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Data Analytics
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Contact
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/blog') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-600/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-purple-500/20">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/blog') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
