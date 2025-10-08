import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      type: 'link'
    },
    {
      name: 'Services',
      href: '#',
      type: 'dropdown',
      children: [
        { name: 'Micro SAAS Solutions', href: '/micro-saas' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Robotics', href: '/robotics' }
      ]
    },
    {
      name: 'Solutions',
      href: '#',
      type: 'dropdown',
      children: [
        { name: 'Enterprise AI', href: '/enterprise' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Process Automation', href: '/process-automation' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      type: 'link'
    },
    {
      name: 'Blog',
      href: '/blog',
      type: 'link'
    },
    {
      name: 'Contact',
      href: '/contact',
      type: 'link'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              {contactInfo.email}
            </a>
            <span className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              {contactInfo.address}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400 font-semibold">24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl neon-glow-blue">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  )}
                  
                  {item.type === 'dropdown' && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl z-50">
                      <div className="py-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium rounded-lg"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 font-medium rounded-lg cyber-button"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && item.children && (
                        <div className="ml-4 space-y-2 mt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/30 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 font-medium rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default FuturisticNavigation;