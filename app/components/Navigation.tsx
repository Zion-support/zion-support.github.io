import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, 
  Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Briefcase
} from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Cloud },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Database },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { name: 'Database Management', url: '/database-management', icon: Database },
    { name: 'Network Solutions', url: '/network-solutions', icon: Globe },
    { name: 'IT Support', url: '/it-support', icon: Users },
    { name: 'IT Consulting', url: '/it-consulting', icon: Settings }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Smartphone },
    { name: 'Blockchain', url: '/blockchain', icon: Lock },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', icon: Globe },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Sparkles },
    { name: 'Robotics', url: '/robotics', icon: Target }
  ];

  const microSaas = [
    { name: 'Micro SaaS', url: '/micro-saas', icon: Briefcase },
    { name: 'AI Project Manager', url: '/ai-project-manager', icon: Calendar },
    { name: 'AI Content Generator', url: '/ai-content-generator', icon: FileText },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', icon: BarChart },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: MessageSquare },
    { name: 'AI Expense Tracker', url: '/ai-expense-tracker', icon: DollarSign }
  ];

  const mainNavItems = [
    { name: 'About', url: '/about' },
    { name: 'Services', url: '#', hasDropdown: true },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-cyan-600" />
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-6 px-6">
                          {/* AI Services */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <Brain className="h-4 w-4 mr-2 text-cyan-600" />
                              AI Services
                            </h3>
                            <div className="space-y-2">
                              {aiServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* IT Services */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <Cloud className="h-4 w-4 mr-2 text-cyan-600" />
                              IT Services
                            </h3>
                            <div className="space-y-2">
                              {itServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                                >
                                  <service.icon className="h-4 w-4" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                isScrolled
                  ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                  : 'bg-white text-cyan-600 hover:bg-gray-100'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-2 mt-2">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900">AI Services</h4>
                            {aiServices.slice(0, 3).map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.url}
                                className="block text-sm text-gray-600 hover:text-cyan-600 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900">IT Services</h4>
                            {itServices.slice(0, 3).map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.url}
                                className="block text-sm text-gray-600 hover:text-cyan-600 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="block text-gray-700 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/consultation"
                  className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;