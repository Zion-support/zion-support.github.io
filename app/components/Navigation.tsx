'use client';
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Settings, Database, Lock, Star, CheckCircle, TrendingUp, Award, MessageSquare, FileText, Eye, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleAI = () => setIsAIOpen(!isAIOpen);
  const toggleIT = () => setIsITOpen(!isITOpen);

  const aiServices = [
    { name: 'AI Chatbot', href: '/ai-customer-support', icon: MessageSquare },
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: Eye },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Palette },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Network Solutions', href: '/network-solutions', icon: Globe },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'IT Support', href: '/it-support', icon: Phone },
    { name: 'System Administration', href: '/system-administration', icon: Settings }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20 cyber-glow-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cyber-pulse">
                <Brain className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 neon-flicker-enhanced">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:cyber-glow-enhanced relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAI}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:cyber-glow-enhanced relative group"
                >
                  AI Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isAIOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isAIOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/20 py-2 cyber-card-enhanced">
                    <div className="px-4 py-2 border-b border-cyan-400/20">
                      <h3 className="text-sm font-semibold text-cyan-400">AI Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                          onClick={() => setIsAIOpen(false)}
                        >
                          <service.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          <span className="group-hover:cyber-glow-enhanced">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleIT}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:cyber-glow-enhanced relative group"
                >
                  IT Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isITOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isITOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-cyan-400/20 py-2 cyber-card-enhanced">
                    <div className="px-4 py-2 border-b border-cyan-400/20">
                      <h3 className="text-sm font-semibold text-cyan-400">IT Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                          onClick={() => setIsITOpen(false)}
                        >
                          <service.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          <span className="group-hover:cyber-glow-enhanced">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Link */}
              <Link
                to="/micro-saas"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:cyber-glow-enhanced relative group"
              >
                Micro SAAS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:cyber-glow-enhanced relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:cyber-glow-enhanced relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 flex items-center group cyber-button-advanced"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-all duration-300 hover:cyber-glow-enhanced"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 cyber-card-enhanced">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:cyber-glow-enhanced"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-2 rounded-md text-base font-medium flex items-center justify-center mt-4 transition-all duration-300 hover:from-cyan-500 hover:to-purple-500 cyber-button-advanced"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;