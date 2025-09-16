import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Users, Award, BookOpen, Phone
} from 'lucide-react';

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
          <a href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </a>

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
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Our Solutions
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 flex items-center justify-center">
                              <service.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="text-sm text-white/60">{service.description}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                      About Zion
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {company.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={closeAllDropdowns}
                          className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-blue-300 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-white/60">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-6 border-t border-white/10"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                  Services
                </h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      onClick={closeAllDropdowns}
                      className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                  Company
                </h3>
                <div className="space-y-2">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeAllDropdowns}
                      className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={closeAllDropdowns}
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;