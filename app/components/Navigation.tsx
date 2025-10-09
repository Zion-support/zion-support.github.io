import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Code, 
  Zap
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud AI solutions' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI apps' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI support systems' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales AI automation' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Data visualization AI' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-admin', description: 'System management' },
        { name: 'Backup & Recovery', path: '/backup-recovery', description: 'Data protection' },
        { name: 'Monitoring & Alerting', path: '/monitoring', description: 'System monitoring' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered dev tools' },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation' },
        { name: 'Analytics Tools', path: '/analytics-tools', description: 'Business intelligence' },
        { name: 'Communication Tools', path: '/communication-tools', description: 'Team communication' },
        { name: 'Project Management', path: '/project-management', description: 'Project tracking' },
        { name: 'CRM Solutions', path: '/crm-solutions', description: 'Customer management' },
        { name: 'HR Management', path: '/hr-management', description: 'Human resources' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Robotic solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-8"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.path}
                                className="block p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </Link>
                            </li>
                          ))}
                          {category.services.length > 6 && (
                            <li>
                              <Link
                                to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block p-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                                onClick={closeAllMenus}
                              >
                                View All {category.title} →
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/case-studies" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-400 font-medium">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="px-3 py-1 text-gray-300 font-medium flex items-center space-x-2">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="block ml-6 px-3 py-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mx-3 mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;