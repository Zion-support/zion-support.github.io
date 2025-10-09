'use client';

import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
=======
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, Zap, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
=======
  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Infrastructure', path: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/ai-workflow-automation' },
        { name: 'Database Services', path: '/ai-data-analytics' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/micro-saas' },
        { name: 'Business Apps', path: '/micro-saas' },
        { name: 'Marketing Tools', path: '/micro-saas' },
        { name: 'Analytics Tools', path: '/micro-saas' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-7970

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
              <a 
                href="tel:+13026009898" 
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(302) 600-9898</span>
              </a>
            </div>
=======
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">              
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Services
            </Link>
            <Link to="/business-intelligence" className="text-gray-300 hover:text-white transition-colors">
              Business Intelligence
            </Link>
            <Link to="/cloud-services" className="text-gray-300 hover:text-white transition-colors">
              Cloud Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
              className="text-white hover:text-blue-400 transition-colors"
=======
              className="text-gray-300 hover:text-white transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
=======
        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
=======
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={closeMenu}
              >
                AI Services
              </Link>
              <Link
                to="/business-intelligence"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Business Intelligence
              </Link>
              <Link
                to="/cloud-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Cloud Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
                onClick={closeMenu}
              >
                Contact
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="border-t border-gray-600 pt-2 mt-2">
                <a 
                  href="tel:+13026009898" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 600-9898</span>
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@ziontechgroup.com</span>
                </a>
              </div>
=======

              <Link
                to="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
              <div className="border-t border-gray-700 pt-2 mt-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
