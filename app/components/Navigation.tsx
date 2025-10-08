import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Server, Shield, Globe, Users, BarChart3, Target, Code, Database, Cloud, Lock, Settings, Headphones, Award, TrendingUp, DollarSign, FileText, Mic, Eye, MessageSquare } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: 'Core Services',
      icon: Zap,
      services: [
        { name: 'All Services', link: '/services', icon: Globe },
        { name: 'Micro SAAS Solutions', link: '/micro-saas', icon: Zap },
        { name: 'AI Services', link: '/ai-services', icon: Brain },
        { name: 'IT Services', link: '/it-services', icon: Server },
        { name: 'Cybersecurity', link: '/cybersecurity', icon: Shield },
        { name: 'Cloud Services', link: '/cloud-services', icon: Cloud }
      ]
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      services: [
        { name: 'AI Data Analytics', link: '/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Cybersecurity', link: '/ai-cybersecurity', icon: Shield },
        { name: 'AI Workflow Automation', link: '/ai-workflow-automation', icon: Settings },
        { name: 'AI Cloud Infrastructure', link: '/ai-cloud-infrastructure', icon: Cloud },
        { name: 'AI E-commerce Solutions', link: '/ai-ecommerce-solutions', icon: Target },
        { name: 'AI Mobile App Development', link: '/ai-mobile-app-development', icon: Globe }
      ]
    },
    {
      title: 'Specialized',
      icon: Award,
      services: [
        { name: 'Quantum Computing', link: '/quantum-computing', icon: Cpu },
        { name: 'Autonomous Systems', link: '/autonomous-systems', icon: Settings },
        { name: 'Blockchain & Web3', link: '/blockchain-web3', icon: Lock },
        { name: 'IoT & Edge Computing', link: '/iot-edge-computing', icon: Globe },
        { name: 'Business Intelligence', link: '/business-intelligence', icon: BarChart3 },
        { name: 'Digital Transformation', link: '/digital-transformation', icon: TrendingUp }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/30' 
        : 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center group">
            <div className="w-8 h-8 mr-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium relative group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/30 py-6 z-50">
                  <div className="grid grid-cols-3 gap-8 px-6">
                    {serviceCategories.map((category, index) => {
                      const CategoryIcon = category.icon;
                      return (
                        <div key={index}>
                          <div className="flex items-center mb-4">
                            <CategoryIcon className="w-5 h-5 text-cyan-400 mr-2" />
                            <h3 className="font-semibold text-white text-lg">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIndex) => {
                              const ServiceIcon = service.icon;
                              return (
                                <Link
                                  key={serviceIndex}
                                  to={service.link}
                                  className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300 group"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <ServiceIcon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                                  {service.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
              Enterprise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="cyber-button neon-glow">
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
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
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
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-gray-400 font-medium text-sm py-1">{category.title}</div>
                      {category.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon;
                        return (
                          <Link
                            key={serviceIndex}
                            to={service.link}
                            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors py-1 ml-4"
                            onClick={() => setIsOpen(false)}
                          >
                            <ServiceIcon className="w-4 h-4 mr-2" />
                            {service.name}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="cyber-button neon-glow text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
