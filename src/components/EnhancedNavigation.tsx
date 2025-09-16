import React, { useState } from 'react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: 'AI Solutions',
      href: '/pages/AdvancedAISystems2026',
      description: 'Advanced AI Systems & Solutions',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Space Technology',
      href: '/pages/SpaceTechAI2025',
      description: 'AI-Powered Space Exploration',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Biotech Revolution',
      href: '/pages/BiotechAIRevolution2025',
      description: 'Revolutionary Biotechnology',
      icon: '🧬',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Quantum Computing',
      href: '/pages/QuantumComputingRevolution2026',
      description: 'Next-Gen Quantum Solutions',
      icon: '⚡',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Neural Interfaces',
      href: '/pages/NeuralInterfaceRevolution2026',
      description: 'Brain-Computer Interfaces',
      icon: '🧬',
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'AI Services',
      href: '/pages/AIServicesPage',
      description: 'Comprehensive AI Services',
      icon: '🤖',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Solutions
              </button>
              <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-4 p-6">
                  {navigationItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-purple-600">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/pages/InnovationLanding2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Innovation
            </a>
            <a href="/pages/ComprehensiveServices2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </a>
            <a href="/pages/RevolutionaryTechBlog2026" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </a>
              ))}
              <a href="/pages/InnovationLanding2025" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Innovation
              </a>
              <a href="/pages/ComprehensiveServices2025" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="/pages/RevolutionaryTechBlog2026" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </a>
              <a href="/contact" className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;