import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Shield, Brain, Cloud, Lock } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'Core Services',
      icon: <Zap className="w-5 h-5" />,
      items: [
        { name: 'All Services', link: '/services', description: 'Complete service portfolio' },
        { name: 'AI Services', link: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', link: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SAAS', link: '/micro-saas', description: 'Micro Software as a Service' }
      ]
    },
    {
      category: 'Advanced Technology',
      icon: <Brain className="w-5 h-5" />,
      items: [
        { name: 'Quantum Computing', link: '/quantum-computing', description: 'Next-gen quantum solutions' },
        { name: 'Autonomous Systems', link: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', link: '/blockchain-web3', description: 'Decentralized applications' },
        { name: 'IoT & Edge Computing', link: '/iot-edge-computing', description: 'Connected devices' }
      ]
    },
    {
      category: 'Security & Intelligence',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { name: 'Cybersecurity', link: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Business Intelligence', link: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Enterprise Solutions', link: '/enterprise', description: 'Large-scale implementations' }
      ]
    }
  ];

  const resources = [
    { name: 'Blog & Insights', link: '/blog', description: 'Latest tech insights' },
    { name: 'Technical Guides', link: '/guides', description: 'Step-by-step tutorials' },
    { name: 'Case Studies', link: '/case-studies', description: 'Success stories' },
    { name: 'Our Team', link: '/team', description: 'Meet the experts' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 to-purple-900 text-cyan-300 py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center group">
                <Phone className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                <span className="font-medium">Middletown, DE 19709</span>
              </div>
            </div>
            <div className="text-xs font-bold flex items-center">
              <span className="animate-pulse">🚀</span>
              <span className="ml-2">Leading AI & IT Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="text-4xl mr-3 group-hover:animate-spin transition-transform duration-500">
                  ⚡
                </div>
                <div className="absolute inset-0 text-4xl mr-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⚡
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Advanced AI Solutions</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center font-medium group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-6 z-50">
                    <div className="grid grid-cols-3 gap-8 px-6">
                      {services.map((section, index) => (
                        <div key={index}>
                          <div className="flex items-center mb-4">
                            <div className="text-cyan-400 mr-2">{section.icon}</div>
                            <h3 className="font-bold text-cyan-400 text-sm uppercase tracking-wider">
                              {section.category}
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  to={item.link}
                                  className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    {item.description}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center font-medium group"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    resourcesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                    <div className="px-4">
                      {resources.map((resource, index) => (
                        <Link 
                          key={index}
                          to={resource.link}
                          className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                          onClick={() => setResourcesOpen(false)}
                        >
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {resource.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {resource.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Services Section */}
                <div className="space-y-2">
                  <div className="text-cyan-400 font-semibold text-lg py-2">Services</div>
                  <div className="ml-4 space-y-2">
                    {services.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                          {section.icon}
                          <span className="ml-2">{section.category}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex}
                              to={item.link}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Resources Section */}
                <div className="space-y-2">
                  <div className="text-cyan-400 font-semibold text-lg py-2">Resources</div>
                  <div className="ml-4 space-y-2">
                    {resources.map((resource, index) => (
                      <Link 
                        key={index}
                        to={resource.link}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default FuturisticNavigation;