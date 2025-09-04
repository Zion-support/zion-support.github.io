import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      color: 'from-cyan-400 to-purple-500',
      dropdown: [
        { name: 'Machine Learning', href: '/ai-solutions/machine-learning' },
        { name: 'Computer Vision', href: '/ai-solutions/computer-vision' },
        { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots' },
        { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics' }
      ]
    },
    {
      name: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-400',
      dropdown: [
        { name: 'Infrastructure', href: '/cloud-services/infrastructure' },
        { name: 'DevOps', href: '/cloud-services/devops' },
        { name: 'Migration', href: '/cloud-services/migration' },
        { name: 'Monitoring', href: '/cloud-services/monitoring' }
      ]
    },
    {
      name: 'Security',
      href: '/security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      dropdown: [
        { name: 'Cybersecurity', href: '/security/cybersecurity' },
        { name: 'Compliance', href: '/security/compliance' },
        { name: 'Penetration Testing', href: '/security/penetration-testing' },
        { name: 'Security Audits', href: '/security/audits' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Innovation',
      href: '/innovation',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                ZION TECH GROUP
              </h1>
              <p className="text-xs text-gray-500">Innovation • Intelligence • Impact</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null}
                  className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200/50 py-2 z-50"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Us</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200/50 py-4"
          >
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6 space-y-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-300 py-1"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200/50 space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </a>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export { AppHeader };