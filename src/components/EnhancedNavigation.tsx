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
      icon: '⚛️',
      description: 'Quantum technology solutions',
      subItems: [
        { title: 'Quantum Revolution 2026', path: '/pages/QuantumComputingRevolution2026' },
        { title: 'Advanced Quantum', path: '/pages/AdvancedQuantumComputing2026' },
        { title: 'Quantum-Neural Fusion', path: '/pages/QuantumNeuralFusion2026' },
        { title: 'Quantum Internet', path: '/pages/QuantumInternet2026' }
      ]
    },
    {
      title: 'Neural Interfaces',
      path: '/neural',
      icon: '🧬',
      description: 'Brain-computer interfaces',
      subItems: [
        { title: 'Neural Revolution 2026', path: '/pages/NeuralInterfaceRevolution2026' },
        { title: 'Consciousness AI', path: '/pages/ConsciousnessAI2026' },
        { title: 'Meta Intelligence', path: '/pages/MetaIntelligence2026' }
      ]
    },
    {
      title: 'Future Tech',
      path: '/future',
      icon: '🚀',
      description: 'Revolutionary technologies',
      subItems: [
        { title: 'Ultimate Revolution 2026', path: '/pages/UltimateTechRevolution2026' },
        { title: 'Next-Gen Showcase', path: '/pages/NextGenTechShowcase2026' },
        { title: 'Revolutionary AI', path: '/pages/RevolutionaryAIBreakthrough2026' },
        { title: 'Advanced AI 2027', path: '/pages/AdvancedAIRevolution2027' },
        { title: 'Quantum Reality 2028', path: '/pages/QuantumRealityManipulation2028' },
        { title: 'Transcendent Consciousness 2029', path: '/pages/TranscendentConsciousness2029' },
        { title: 'Universal Tech 2030', path: '/pages/UniversalTechMastery2030' },
        { title: 'Ultimate Tech 2033', path: '/pages/UltimateTechRevolution2033' }
      ]
    },
    {
      title: 'Emerging Tech',
      path: '/emerging-tech',
      icon: '🌟',
      description: 'Cutting-edge emerging technologies',
      subItems: [
        { title: 'Holographic Reality', path: '/pages/AdvancedHolographicReality2026' },
        { title: 'Metaverse Solutions', path: '/pages/AdvancedMetaverseSolutions2026' },
        { title: 'Green Tech Revolution', path: '/pages/AdvancedGreenTechRevolution2026' },
        { title: 'Cybersecurity Fortress', path: '/pages/AdvancedCybersecurityFortress2026' }
      ]
    },
    {
      title: 'Biotech & Space',
      path: '/biotech',
      icon: '🧬',
      description: 'Biotechnology and space tech',
      subItems: [
        { title: 'Advanced Biotech', path: '/pages/AdvancedBiotechRevolution2026' },
        { title: 'Space Innovation', path: '/pages/SpaceTechInnovation2026' },
        { title: 'Next-Gen Space', path: '/pages/NextGenSpaceTech2026' }
      ]
    },
    {
      title: 'Robotics',
      path: '/robotics',
      icon: '🤖',
      description: 'Advanced robotics solutions',
      subItems: [
        { title: 'Advanced Robotics', path: '/pages/AdvancedRobotics2026' },
        { title: 'Robotics Revolution', path: '/pages/AdvancedRoboticsRevolution2026' }
      ]
    },
    {
      title: 'Resources',
      path: '/resources',
      icon: '📚',
      description: 'Learning and insights',
      subItems: [
        { title: 'Tech Insights 2026', path: '/pages/ComprehensiveTechInsights2026' },
        { title: 'Revolutionary Blog', path: '/pages/RevolutionaryTechBlog2026' },
        { title: 'AI Innovation Guide', path: '/pages/AIInnovationGuide2025' },
        { title: 'Quantum Applications', path: '/pages/QuantumComputingApplications2025' }
      ]
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                  {item.subItems && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.subItems && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                            isActive(subItem.path)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
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