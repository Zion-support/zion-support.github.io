'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Cloud, Code, BarChart, Users, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration & setup' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/networking', description: 'Enterprise networking' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Robotics & Automation', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-driving & drones' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
    { name: 'Support', url: '/support' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.slice(0, 8).map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 pt-2 border-t border-slate-700"
                    >
                      View All AI Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors"
              >
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS */}
            <Link
              to="/micro-saas"
              className={`text-white hover:text-green-400 transition-colors ${
                isActive('/micro-saas') ? 'text-green-400' : ''
              }`}
            >
              Micro SAAS
            </Link>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('tech')}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
              >
                <span>Emerging Tech</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'tech' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div>
                          <div className="text-white text-sm font-medium">{tech.name}</div>
                          <div className="text-gray-400 text-xs">{tech.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className={`text-white hover:text-yellow-400 transition-colors text-sm ${
                          isActive(link.url) ? 'text-yellow-400' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/pricing"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile AI Services */}
              <div>
                <div className="text-cyan-400 font-semibold mb-2">AI Services</div>
                <div className="space-y-2 ml-4">
                  {aiServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-white hover:text-cyan-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div>
                <div className="text-blue-400 font-semibold mb-2">IT Services</div>
                <div className="space-y-2 ml-4">
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-white hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company Links */}
              <div>
                <div className="text-yellow-400 font-semibold mb-2">Company</div>
                <div className="space-y-2 ml-4">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      className={`block transition-colors text-sm ${
                        isActive(link.url) ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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