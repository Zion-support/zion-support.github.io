import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Automation', url: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Content', url: '/ai-content-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'Computer Vision', url: '/computer-vision', icon: <Globe className="w-4 h-4" /> },
    { name: 'Voice AI', url: '/ai-voice-assistant', icon: <Globe className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Web Development', url: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', url: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Migration', url: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: <Globe className="w-4 h-4" /> },
    { name: 'DevOps', url: '/devops', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Data Analytics', url: '/data-analytics', icon: <Brain className="w-4 h-4" /> }
  ];

  const microSaas = [
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', icon: <Cloud className="w-4 h-4" /> },
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', icon: <Code className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2 text-cyan-500" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2 text-purple-500" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Micro SaaS */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-green-500" />
                        Micro SaaS
                      </h3>
                      <ul className="space-y-2">
                        {microSaas.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">AI Services</h4>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">IT Services</h4>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Micro SaaS</h4>
                      <ul className="space-y-2">
                        {microSaas.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.icon}
                              <span className="ml-2">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;