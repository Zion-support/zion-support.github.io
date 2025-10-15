import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'AI Services', 
      path: '#',
      dropdown: [
        { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro' }
      ]
    },
    { 
      name: 'IT Services', 
      path: '#',
      dropdown: [
        { name: 'Cloud Migration Services', path: '/cloud-migration-services' },
        { name: 'Cybersecurity Consulting', path: '/cybersecurity-consulting' },
        { name: 'Database Solutions', path: '/database-solutions' },
        { name: 'DevOps Solutions', path: '/devops-solutions' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile App Development', path: '/mobile-development' },
        { name: 'API Management', path: '/ai-api-management' },
        { name: 'Performance Monitoring', path: '/performance-monitoring' }
      ]
    },
    { 
      name: '5G Solutions', 
      path: '#',
      dropdown: [
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    },
    { 
      name: 'Micro SAAS', 
      path: '#',
      dropdown: [
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant' },
        { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro' },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant' },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg cyber-glow' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-2 px-4 hidden lg:block border-b border-cyan-500/20">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400 neon-pulse" />
              <span className="neon-text">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400 neon-pulse" />
              <span className="neon-text">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400 neon-pulse" />
              <span className="neon-text">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-cyan-400 neon-pulse font-semibold">Free Consultation Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-slate-900/20 to-slate-800/20 backdrop-blur-md border-b border-cyan-500/30 cyber-glow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center cyber-glow group-hover:scale-110 transition-transform">
                <span className="text-white font-bold neon-pulse">Z</span>
              </div>
              <span className="cyber-text">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 cursor-pointer transition-colors neon-pulse"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span className="cyber-text">{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white hover:text-cyan-400 transition-colors cyber-text ${
                        isActive(item.path) ? 'text-cyan-400 font-semibold neon-pulse' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/30 py-2 z-50 cyber-glow">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-400"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full neon-pulse"></div>
                            <span className="text-sm">{dropdownItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="cyber-button px-6 py-2 font-semibold flex items-center group"
              >
                <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 cyber-glow rounded-lg hover:bg-cyan-500/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 neon-pulse" /> : <Menu className="w-6 h-6 neon-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30 cyber-glow">
            <div className="container mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="py-2">
                      <div className="text-white font-semibold mb-2 cyber-text">{item.name}</div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-gray-300 hover:text-cyan-400 py-1 transition-colors flex items-center space-x-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-1 h-1 bg-cyan-400 rounded-full neon-pulse"></div>
                            <span className="text-sm">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 text-white hover:text-cyan-400 transition-colors cyber-text ${
                        isActive(item.path) ? 'text-cyan-400 font-semibold neon-pulse' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cyan-500/30 mt-4">
                <Link
                  to="/contact"
                  className="block cyber-button px-6 py-3 font-semibold text-center flex items-center justify-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;