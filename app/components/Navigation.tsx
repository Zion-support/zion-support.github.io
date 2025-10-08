import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Star, Zap, Shield, Cloud, Brain, Code, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const aiServices = [
    { name: 'AI Services Overview', href: '/ai-services', icon: '🤖' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', href: '/ai-automation', icon: '⚙️' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: '💰' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: '📊' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: '🔒' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: '🔄' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: '☁️' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: '🛒' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: '📱' }
  ];

  const itServices = [
    { name: 'IT Services Overview', href: '/it-services', icon: '💻' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: '☁️' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: '🛡️' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: '🔄' },
    { name: 'Database Administration', href: '/database-admin', icon: '🗄️' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: '🌐' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: '🛠️' },
    { name: 'Data Analytics & BI', href: '/data-analytics', icon: '📊' },
    { name: 'API Development', href: '/api-development', icon: '🔌' },
    { name: 'Mobile App Development', href: '/mobile-development', icon: '📱' },
    { name: 'Web Development', href: '/web-development', icon: '💻' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Overview', href: '/micro-saas', icon: '💻' },
    { name: 'AI Code Review Assistant', href: '/ai-code-review', icon: '🔍' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: '🎯' },
    { name: 'Smart Invoice Generator', href: '/smart-invoice', icon: '💰' },
    { name: 'AI Video Content Creator', href: '/ai-video-creator', icon: '🎬' },
    { name: 'Smart Project Management', href: '/smart-project-management', icon: '📋' },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer', icon: '⚖️' },
    { name: 'Smart Real Estate Analyzer', href: '/smart-real-estate', icon: '🏠' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: '💪' },
    { name: 'Smart Home Automation', href: '/smart-home', icon: '🏡' },
    { name: 'AI Language Learning', href: '/ai-language-learning', icon: '🌍' }
  ];

  const solutions = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: '🤖' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: '📊' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: '🔗' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: '📡' },
    { name: 'Robotics', href: '/robotics', icon: '🤖' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-cyan-500/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                <Brain className="w-4 h-4 mr-1" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">AI Services</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                          onClick={() => setAiServicesOpen(false)}
                        >
                          <span className="text-lg mr-3">{service.icon}</span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                <Settings className="w-4 h-4 mr-1" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">IT Services</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                          onClick={() => setItServicesOpen(false)}
                        >
                          <span className="text-lg mr-3">{service.icon}</span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                <Zap className="w-4 h-4 mr-1" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Micro SAAS Solutions</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-lg mr-3">{service.icon}</span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                <Code className="w-4 h-4 mr-1" />
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Advanced Solutions</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {solutions.map((solution, index) => (
                        <Link
                          key={index}
                          to={solution.href}
                          className="flex items-center px-3 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <span className="text-lg mr-3">{solution.icon}</span>
                          <span className="text-sm font-medium">{solution.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <div className="text-gray-300 font-medium mb-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </div>
                <div className="ml-6 space-y-2">
                  {aiServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div>
                <div className="text-gray-300 font-medium mb-2 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  IT Services
                </div>
                <div className="ml-6 space-y-2">
                  {itServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View All IT Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <div className="text-gray-300 font-medium mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Micro SAAS
                </div>
                <div className="ml-6 space-y-2">
                  {microSaasServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/micro-saas"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Micro SAAS →
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions */}
              <div>
                <div className="text-gray-300 font-medium mb-2 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Solutions
                </div>
                <div className="ml-6 space-y-2">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      to={solution.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {solution.icon} {solution.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/case-studies"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;