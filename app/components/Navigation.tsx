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
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
                    <Link href="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Services
                    </Link>
                    <Link href="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      IT Services
                    </Link>
                    <Link href="/micro-saas" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Micro SaaS
                    </Link>
                    <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Pricing
                    </Link>
                    <Link href="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {aiServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <Link href="/ai-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Marketing
                    </Link>
                    <Link href="/ai-customer-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Customer Support
                    </Link>
                    <Link href="/ai-data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Data Analytics
                    </Link>
                    <Link href="/ai-content-generation" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Content Generation
                    </Link>
                    <Link href="/ai-healthcare" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Healthcare
                    </Link>
                    <Link href="/ai-fintech" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Fintech
                    </Link>
                    <Link href="/ai-cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      AI Cybersecurity
                    </Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {itServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <Link href="/cloud-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Cloud Services
                    </Link>
                    <Link href="/cloud-migration" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Cloud Migration
                    </Link>
                    <Link href="/devops" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      DevOps & CI/CD
                    </Link>
                    <Link href="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Cybersecurity
                    </Link>
                    <Link href="/it-consulting" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      IT Consulting
                    </Link>
                    <Link href="/database-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Database Services
                    </Link>
                    <Link href="/network-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Network Solutions
                    </Link>
                    <Link href="/it-support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      IT Support
                    </Link>
                  </div>
                )}
              </div>

              {/* Micro SaaS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Micro SaaS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {microSaasOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <Link href="/micro-saas/analytics-dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Analytics Dashboard
                    </Link>
                    <Link href="/micro-saas/content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Content Generator
                    </Link>
                    <Link href="/micro-saas/email-marketing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Email Marketing
                    </Link>
                    <Link href="/micro-saas/social-manager" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Social Manager
                    </Link>
                    <Link href="/micro-saas/expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Expense Tracker
                    </Link>
                    <Link href="/micro-saas/appointment-scheduler" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">
                      Appointment Scheduler
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
              <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services
              </Link>
              <Link href="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services
              </Link>
              <Link href="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
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