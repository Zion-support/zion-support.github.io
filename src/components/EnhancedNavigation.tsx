<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigationItems = [
    {
      title: 'Home',
      path: '/',
      icon: '🏠',
      description: 'Main dashboard and overview'
    },
    {
      title: 'AI Revolution',
      path: '/ai',
      icon: '🧠',
      description: 'Artificial Intelligence breakthroughs',
      subItems: [
        { title: 'AI Breakthrough 2026', path: '/pages/AIRevolutionaryBreakthrough2026' },
        { title: 'Synthetic Intelligence', path: '/pages/SyntheticIntelligence2026' },
        { title: 'Next Gen AI', path: '/pages/NextGenAIRevolution2026' },
        { title: 'AI Transformation', path: '/pages/AdvancedAITransformation2026' },
        { title: 'Transcendent AI 2033', path: '/pages/TranscendentAI2033' }
      ]
    },
    {
      title: 'Quantum Computing',
      path: '/quantum',
      icon: '⚛️',
      description: 'Quantum computing and consciousness',
      subItems: [
        { title: 'Quantum Revolution 2026', path: '/pages/QuantumComputingRevolution2026' },
        { title: 'Quantum Neural Fusion', path: '/pages/QuantumNeuralFusion2026' },
        { title: 'Quantum Consciousness 2033', path: '/pages/QuantumConsciousnessRevolution2033' }
      ]
    },
    {
      title: 'Neural Interfaces',
      path: '/neural',
      icon: '🧬',
<<<<<<< HEAD
      description: 'Brain-computer interfaces and neural tech',
      subItems: [
        { title: 'Neural Interface 2026', path: '/pages/NeuralInterfaceRevolution2026' },
        { title: 'Consciousness AI 2026', path: '/pages/ConsciousnessAI2026' }
      ]
    },
    {
      title: 'Space Technology',
      path: '/space',
      icon: '🚀',
      description: 'Space exploration and technology',
      subItems: [
        { title: 'Space Tech Innovation 2026', path: '/pages/SpaceTechInnovation2026' },
        { title: 'Next Gen Space Tech 2026', path: '/pages/NextGenSpaceTech2026' },
        { title: 'Universal Tech Revolution 2033', path: '/pages/UniversalTechRevolution2033' }
      ]
    },
    {
      title: 'Revolutionary 2033',
      path: '/revolutionary-2033',
      icon: '🌟',
      description: 'Cutting-edge 2033 technologies',
      subItems: [
        { title: 'Transcendent AI 2033', path: '/pages/TranscendentAI2033' },
        { title: 'Universal Tech Revolution 2033', path: '/pages/UniversalTechRevolution2033' },
        { title: 'Quantum Consciousness 2033', path: '/pages/QuantumConsciousnessRevolution2033' }
      ]
    }
  ];
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl">🚀</div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        <div className="px-4 py-2 border-b border-gray-200">
                          <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
=======
    },

>>>>>>> origin/feature/enhanced-content-showcase-2025
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
=======
import React from "react";

const EnhancedNavigation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">EnhancedNavigation</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
      </div>
    </div>
  );

};

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
export default EnhancedNavigation;
