import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Zap, 
  Shield, 
  Globe,
  Code,
  Database,
  Users,
  Settings,
  ArrowRight
} from "lucide-react";

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const mainNavItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Settings className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Zap className="w-4 h-4" />
    }
  ];

  const serviceDropdownItems = [
    {
      category: 'AI Solutions',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data analysis with AI' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' }
      ]
    },
    {
      category: 'IT Services',
      items: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transitions' },
        { name: 'DevOps Services', path: '/devops', description: 'Streamlined development operations' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT guidance' },
        { name: 'Network Security', path: '/network-security', description: 'Comprehensive security solutions' }
      ]
    },
    {
      category: 'Micro SAAS',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', description: 'Advanced analytics platform' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', description: 'AI-powered customer management' },
        { name: 'Zion Security Shield', path: '/zion-security-shield', description: 'Enterprise security suite' }
      ]
    },
    {
      category: '5G Solutions',
      items: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', description: 'Next-gen network setup' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', description: 'Ultra-low latency computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', description: 'Connected device management' }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown('services')}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path) || activeDropdown === 'services'
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === 'services' && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4 z-50">
                        <div className="grid grid-cols-2 gap-6 px-6">
                          {serviceDropdownItems.map((category) => (
                            <div key={category.category}>
                              <h3 className="text-sm font-semibold text-cyan-400 mb-3">
                                {category.category}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((service) => (
                                  <li key={service.name}>
                                    <Link
                                      to={service.path}
                                      className="block p-2 rounded-md hover:bg-slate-700 transition-colors duration-200 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm text-white group-hover:text-cyan-400">
                                          {service.name}
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400" />
                                      </div>
                                      <p className="text-xs text-gray-400 mt-1">
                                        {service.description}
                                      </p>
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
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;