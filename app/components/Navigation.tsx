'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">AI Services</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Solutions Overview
                    </Link>
                    <Link to="/ai-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Marketing Automation
                    </Link>
                    <Link to="/ai-customer-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Customer Support
                    </Link>
                    <Link to="/ai-data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Data Analytics
                    </Link>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      IT Solutions Overview
                    </Link>
                    <Link to="/cloud-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Cloud Services
                    </Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Cybersecurity
                    </Link>
                    <Link to="/devops" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      DevOps & CI/CD
                    </Link>
                    <div className="border-t border-gray-700 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">Micro SaaS</div>
                    <Link to="/micro-saas" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Micro SaaS Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <div className="border-t border-gray-700 my-2"></div>
              <div className="px-3 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">Services</div>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;