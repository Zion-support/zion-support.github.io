import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const services = [
    {
      title: 'AI Services',
      items: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Code Assistant', href: '/ai-code-assistant' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Automation Platform', href: '/ai-automation-platform' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI CRM Solutions', href: '/ai-crm' }
      ]
    },
    {
      title: '5G Services',
      items: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Optimization', href: '/5g-network-optimization' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' }
      ]
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'API Management', href: '/api-management' },
        { name: 'DevOps Solutions', href: '/devops' },
        { name: 'Mobile App Development', href: '/mobile-development' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="text-xs opacity-75">
            Visit us at <a href="https://ziontechgroup.com" className="underline hover:text-blue-300">ziontechgroup.com</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-white hover:text-blue-300 transition-colors ${
                  isActive('/') ? 'text-blue-300 font-semibold' : ''
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`text-white hover:text-blue-300 transition-colors ${
                  isActive('/about') ? 'text-blue-300 font-semibold' : ''
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors flex items-center">
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {services.map((service, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                            {service.title}
                          </h3>
                          <div className="space-y-2">
                            {service.items.slice(0, 4).map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link 
                        to="/services" 
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className={`text-white hover:text-blue-300 transition-colors ${
                  isActive('/contact') ? 'text-blue-300 font-semibold' : ''
                }`}
              >
                Contact
              </Link>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;