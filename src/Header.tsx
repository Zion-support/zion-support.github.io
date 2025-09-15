<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
=======
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>kleber@ziontechgroup.com</span>
            </div>
origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        )}
import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
=======
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/pages/InnovationLanding2025" className="text-gray-600 hover:text-gray-900">Innovation</a>
            <a href="/pages/ComprehensiveServices2025" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
>>>>>>> cursor/create-and-deploy-new-content-425b
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/pages/RevolutionaryTechShowcase2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Revolutionary Tech
            </Link>
            <Link to="/pages/AIBusinessAutomation2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              AI Automation
            </Link>
            <Link to="/pages/QuantumNeuralFusion2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Quantum-Neural
            </Link>
            <Link to="/pages/ComprehensiveTechInsights2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Tech Insights
            </Link>
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
<<<<<<< HEAD
=======
cursor/create-and-deploy-new-content-7857
>>>>>>> cursor/create-and-deploy-new-content-425b

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pages/RevolutionaryTechShowcase2026" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Revolutionary Tech
              </Link>
              <Link 
                to="/pages/AIBusinessAutomation2026" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Automation
              </Link>
              <Link 
                to="/pages/QuantumNeuralFusion2026" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quantum-Neural
              </Link>
              <Link 
                to="/pages/ComprehensiveTechInsights2026" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Insights
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
      </div>
    </header>
  );
};

export default Header;