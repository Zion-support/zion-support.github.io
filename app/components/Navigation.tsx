'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
import Sidebar from './Sidebar';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
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
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Services</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Brain className="w-4 h-4 inline mr-2" />
                      AI Solutions
                    </Link>
                    <Link to="/ai-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      AI Marketing
                    </Link>
                    <Link to="/ai-customer-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Users className="w-4 h-4 inline mr-2" />
                      AI Customer Support
                    </Link>
                    <Link to="/ai-data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <BarChart className="w-4 h-4 inline mr-2" />
                      AI Data Analytics
                    </Link>
                    
                    <div className="border-t border-gray-700 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Cloud className="w-4 h-4 inline mr-2" />
                      IT Solutions
                    </Link>
                    <Link to="/cloud-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Cloud className="w-4 h-4 inline mr-2" />
                      Cloud Services
                    </Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Shield className="w-4 h-4 inline mr-2" />
                      Cybersecurity
                    </Link>
                    <Link to="/devops" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Settings className="w-4 h-4 inline mr-2" />
                      DevOps & CI/CD
                    </Link>
                    
                    <div className="border-t border-gray-700 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Micro SaaS</div>
                    <Link to="/micro-saas" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      <Zap className="w-4 h-4 inline mr-2" />
                      Micro SaaS Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Case Studies
              </Link>
              
              <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              
              <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              
              <Link to="/consultation" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              title="Open sidebar"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

      </div>
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default Navigation;