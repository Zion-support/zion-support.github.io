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
        { title: 'AI Transformation', path: '/pages/AdvancedAITransformation2026' }
      ]
    },
    {
      title: 'Quantum Computing',
      path: '/quantum',
      icon: '⚡',
      description: 'Quantum computing solutions',
      subItems: [
        { title: 'Quantum Revolution', path: '/pages/QuantumComputingRevolution2026' },
        { title: 'Quantum Neural Fusion', path: '/pages/QuantumNeuralFusion2026' },
        { title: 'Advanced Quantum', path: '/pages/AdvancedQuantumComputing2026' }
      ]
    },
    {
      title: 'Neural Interfaces',
      path: '/neural',
      icon: '🧬',
      description: 'Brain-computer interfaces',
      subItems: [
        { title: 'Neural Revolution', path: '/pages/NeuralInterfaceRevolution2026' },
        { title: 'Advanced Neural', path: '/pages/AdvancedNeuralInterface2026' }
      ]
    },
    {
      title: 'Biotech & Space',
      path: '/biotech-space',
      icon: '🚀',
      description: 'Biotechnology and space technology',
      subItems: [
        { title: 'Biotech Revolution', path: '/pages/AdvancedBiotechRevolution2026' },
        { title: 'Space Innovation', path: '/pages/SpaceTechInnovation2026' },
        { title: 'Advanced Robotics', path: '/pages/AdvancedRobotics2026' }
      ]
    },
    {
      title: 'Tech Blog',
      path: '/blog',
      icon: '📝',
      description: 'Latest technology insights',
      subItems: [
        { title: 'Revolutionary Tech Blog', path: '/pages/RevolutionaryTechBlog2026' },
        { title: 'Comprehensive Insights', path: '/pages/ComprehensiveTechInsights2026' }
      ]
    }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
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
                      isActivePath(item.path)
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.title}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                          <p className="text-xs text-gray-500 font-medium">{item.description}</p>
                        </div>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActivePath(item.path)
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
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
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
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
      </div>
    </nav>
  );
};

export default EnhancedNavigation;