'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-3">Our Services</h3>
                  <div className="space-y-2">
                    <Link href="/ai-services" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Brain className="w-4 h-4" />
                      <span>AI Solutions</span>
                    </Link>
                    <Link href="/it-services" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Code className="w-4 h-4" />
                      <span>IT Services</span>
                    </Link>
                    <Link href="/cloud-infrastructure" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Cloud className="w-4 h-4" />
                      <span>Cloud Infrastructure</span>
                    </Link>
                    <Link href="/cybersecurity" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                      <Shield className="w-4 h-4" />
                      <span>Cybersecurity</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                About
              </Link>
              <Link href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                AI Solutions
              </Link>
              <Link href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                IT Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;