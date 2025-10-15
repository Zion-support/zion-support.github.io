import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  Code,
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Network,
  Lock,
  Users,
  Target,
  Rocket,
  Star
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Micro SAAS Solutions',
      icon: <Zap className="w-5 h-5" />,
      path: '/micro-saas-solutions',
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-300',
      services: [
        { name: 'AI Accounting Assistant', path: '/ai-accounting-assistant', price: '$29/mo' },
        { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro', price: '$49/mo' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', price: '$79/mo' },
        { name: 'AI Agricultural Intelligence', path: '/ai-agricultural-intelligence-pro', price: '$99/mo' },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', price: '$149/mo' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', price: '$199/mo' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: <Brain className="w-5 h-5" />,
      path: '/ai-solutions',
      color: 'text-purple-400',
      hoverColor: 'hover:text-purple-300',
      services: [
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', price: '$199/mo' },
        { name: 'AI Automation Platform', path: '/ai-automation-platform', price: '$299/mo' },
        { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', price: '$399/mo' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', price: '$499/mo' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', price: '$599/mo' },
        { name: 'AI Predictive Analytics', path: '/ai-analytics', price: '$799/mo' }
      ]
    },
    {
      title: 'IT Solutions',
      icon: <Server className="w-5 h-5" />,
      path: '/it-solutions',
      color: 'text-green-400',
      hoverColor: 'hover:text-green-300',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', price: 'Custom' },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity', price: 'Custom' },
        { name: 'Web Development', path: '/web-development', price: 'Custom' },
        { name: 'Mobile App Development', path: '/mobile-development', price: 'Custom' },
        { name: 'Database Management', path: '/database-management', price: 'Custom' },
        { name: 'Network Solutions', path: '/network-solutions', price: 'Custom' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Network className="w-5 h-5" />,
      path: '/5g-solutions',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300',
      services: [
        { name: '5G Implementation', path: '/5g-implementation', price: 'Custom' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', price: 'Custom' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', price: 'Custom' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', price: 'Custom' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', price: 'Custom' },
        { name: '5G Private Networks', path: '/5g-private-networks', price: 'Custom' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <Target className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Globe className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <Code className="w-4 h-4" /> },
    { name: 'Support', path: '/support', icon: <Shield className="w-4 h-4" /> }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl group-hover:text-cyan-200 transition-colors">Z</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                AI & IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <div key={service.title} className="relative group">
                <button
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(service.path)
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  onMouseEnter={() => setActiveDropdown(service.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className={service.color}>{service.icon}</span>
                  <span className="font-medium">{service.title}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === service.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center">
                        {service.icon}
                        <span className="ml-2">{service.title}</span>
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {service.services.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"></div>
                              <span className="text-gray-300 group-hover:text-white transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <span className="text-cyan-400 text-sm font-medium">
                              {item.price}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <Link
                          to={service.path}
                          className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
                        >
                          View All {service.title}
                          <Rocket className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-700">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 flex items-center space-x-2"
            >
              <Star className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {services.map((service) => (
                <div key={service.title}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50">
                    <span className={service.color}>{service.icon}</span>
                    <span className="font-medium text-white">{service.title}</span>
                  </div>
                  <div className="ml-6 mt-2 space-y-2">
                    {service.services.slice(0, 3).map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block p-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name} - {item.price}
                      </Link>
                    ))}
                    <Link
                      to={service.path}
                      className="block p-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-700">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
};

export default Navigation;