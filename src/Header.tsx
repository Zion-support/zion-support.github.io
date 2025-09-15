import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@ziontechgroup.com',
    address: 'San Francisco, CA'
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          name: 'All Services',
          description: 'Complete suite of technology solutions',
          href: '/pages/ComprehensiveServices2025',
          icon: Globe
        },
        {
          name: 'AI Research Lab',
          description: 'Cutting-edge AI research and development',
          href: '/pages/AIResearchLab2025',
          icon: Brain
        },
        {
          name: 'Quantum Computing',
          description: 'Quantum solutions for complex problems',
          href: '/pages/QuantumComputingSolutions2025',
          icon: Zap
        },
        {
          name: 'Cybersecurity Suite',
          description: 'Enterprise-grade security solutions',
          href: '/pages/CybersecuritySuite2025',
          icon: Shield
        },
        {
          name: 'Innovation 2025',
          description: 'Revolutionary technology showcase',
          href: '/pages/InnovationLanding2025',
          icon: Code
        },
        {
          name: 'Future Tech Trends',
          description: 'Emerging technologies and trends',
          href: '/pages/FutureTechTrends2025',
          icon: Database
        },
        {
          name: 'Revolutionary Tech Showcase',
          description: 'Cutting-edge AI, Quantum Computing, and Neural Interfaces',
          href: '/pages/RevolutionaryTechShowcase2025',
          icon: Zap
        },
        {
          name: 'Advanced AI Intelligence',
          description: 'Autonomous reasoning and emotional intelligence',
          href: '/pages/AdvancedAIIntelligence2025',
          icon: Brain
        },
        {
          name: 'Quantum Computing Breakthrough',
          description: 'Exponential computing power and impossible solutions',
          href: '/pages/QuantumComputingBreakthrough2025',
          icon: Shield
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        {
          name: 'Enterprise Solutions',
          description: 'Large-scale business transformations',
          href: '/solutions/enterprise',
          icon: Globe
        },
        {
          name: 'Startup Solutions',
          description: 'Rapid development for startups',
          href: '/solutions/startup',
          icon: Zap
        }
      ]
    },
    {
      name: 'Autonomous AI 2025',
      href: '/pages/NewShowcase2025'
    },
    {
      name: 'Playbook 2025',
      href: '/pages/AIInnovationPlaybook2025'
    },
    {
      name: 'Case Studies',
      href: '/case-studies'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'About',
      href: '/about'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${className}`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="text-blue-200">
            <span className="font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((subItem, index) => {
                          const IconComponent = subItem.icon;
                          return (
                            <Link
                              key={index}
                              to={subItem.href}
                              className="flex items-start space-x-3 px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0">
                                <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-6 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          const IconComponent = subItem.icon;
                          return (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              <IconComponent className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-6 py-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;