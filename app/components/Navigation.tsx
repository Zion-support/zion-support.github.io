'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    {
      title: 'AI Solutions',
      icon: Brain,
      description: 'Advanced AI and machine learning solutions',
      href: '/ai-services'
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and deployment',
      href: '/cloud-services'
    },
    {
      title: 'Web Development',
      icon: Code,
      description: 'Modern web applications and platforms',
      href: '/web-development'
    },
    {
      title: 'Data Analytics',
      icon: BarChart,
      description: 'Business intelligence and data insights',
      href: '/data-analytics'
    },
    {
      title: 'Mobile Apps',
      icon: Smartphone,
      description: 'iOS and Android mobile applications',
      href: '/mobile-apps'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions',
      href: '/cybersecurity'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <service.icon className="w-6 h-6 text-cyan-400 mt-1" />
                        <div>
                          <h3 className="text-white font-semibold">{service.title}</h3>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      to="/services"
                      className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors ml-4"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 mt-4"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;