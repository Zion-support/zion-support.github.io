<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
=======
import { Menu, X, Phone, Mail, ChevronDown, Brain, Cloud, Shield, Code, Zap } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
=======
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Mail, Briefcase } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-f409

const Navigation: React.FC = memo(() => {
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

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-white/10 py-2">
                  <Link
                    to="/ai-services"
                    className="flex items-center px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Brain className="w-4 h-4 mr-3 text-cyan-400" />
                    AI Services
                  </Link>
                  <Link
                    to="/it-services"
                    className="flex items-center px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Code className="w-4 h-4 mr-3 text-cyan-400" />
                    IT Services
                  </Link>
                  <Link
                    to="/micro-saas"
                    className="flex items-center px-4 py-2 text-white hover:bg-slate-700 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Cloud className="w-4 h-4 mr-3 text-cyan-400" />
                    Micro SaaS
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@ziontechgroup.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/ai-services"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/it-services"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={closeAllMenus}
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={closeAllMenus}
                    >
                      Micro SaaS
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  className="flex items-center px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="flex items-center px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;