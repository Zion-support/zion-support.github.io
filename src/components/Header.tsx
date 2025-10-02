import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Phone } from 'lucide-react';

const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Pricing',
      path: '/pricing',
    },
    {
      label: 'Solutions',
      path: '/solutions',
      dropdown: [
        { label: 'Enterprise Solutions', path: '/solutions/enterprise' },
        { label: 'SMB Solutions', path: '/solutions/smb' },
        { label: 'Startup Solutions', path: '/solutions/startup' },
        { label: 'Government Solutions', path: '/solutions/government' },
        { label: 'Healthcare Solutions', path: '/solutions/healthcare' },
        { label: 'Financial Solutions', path: '/solutions/financial' },
        { label: 'Manufacturing Solutions', path: '/solutions/manufacturing' },
        { label: 'Retail Solutions', path: '/solutions/retail' },
        { label: 'Education Solutions', path: '/solutions/education' },
        { label: 'Transportation Solutions', path: '/solutions/transportation' },
      ]
    },
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        { label: 'AI Content Generator Pro', path: '/services/ai-content-generator' },
        { label: 'Smart Appointment Scheduler', path: '/services/smart-appointment-scheduler' },
        { label: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
        { label: 'AI Virtual Assistant', path: '/services/ai-virtual-assistant' },
        { label: 'AI Data Analytics', path: '/services/ai-data-analytics' },
        { label: 'Intelligent Document Processing', path: '/services/ai-intelligent-document-processing' },
        { label: 'Real-Time Cognitive Automation', path: '/services/real-time-cognitive-automation' },
        { label: 'Advanced Cybersecurity AI', path: '/services/advanced-cybersecurity-ai' },
        { label: 'Edge AI Inference Platform', path: '/services/edge-ai-inference' },
        { label: 'Email Deliverability Optimizer', path: '/services/email-deliverability-optimizer' },
        { label: 'Sales Playbook Copilot', path: '/services/sales-playbook-copilot' },
        { label: 'Code Quality Gatekeeper', path: '/services/code-quality-gatekeeper' },
        { label: 'AI Solutions Hub', path: '/ai-solutions' },
        { label: 'Quantum Computing', path: '/quantum-computing' },
        { label: 'Cybersecurity Platform', path: '/cybersecurity' },
        { label: 'Cloud & DevOps', path: '/cloud-devops' },
        { label: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { label: 'Digital Twin Solutions', path: '/digital-twin' },
        { label: 'Blockchain & Web3', path: '/blockchain-web3' },
        { label: 'Space Technology', path: '/space-tech' },
      ]
    },
    {
      label: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'White Papers', path: '/white-papers' },
        { label: 'Webinars', path: '/webinars' },
        { label: 'Documentation', path: '/docs' },
        { label: 'API Reference', path: '/docs/api' },
        { label: 'Developer Tools', path: '/developer-tools' },
        { label: 'Training & Certification', path: '/training' },
        { label: 'Community Forum', path: '/community' },
        { label: 'Blog', path: '/blog' },
      ]
    },
    {
      label: 'Company',
      path: '/about',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Partners', path: '/partners' },
        { label: 'News & Events', path: '/news' },
        { label: 'Press Kit', path: '/press' },
        { label: 'Investor Relations', path: '/investors' },
        { label: 'Sustainability', path: '/sustainability' },
        { label: 'Diversity & Inclusion', path: '/diversity' },
        { label: 'Careers', path: '/careers' },
      ]
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Skip to main content
      </a>
      
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <Zap className="h-8 w-8 text-blue-400" aria-hidden="true" />
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                        isActive(item.path) || activeDropdown === item.label
                          ? 'text-blue-400 bg-slate-800'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg border border-slate-700 py-2 z-50"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                            onClick={() => setActiveDropdown(null)}
                            role="menuitem"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-slate-800'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-slate-900 bg-blue-400 hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Schedule Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-md mt-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-slate-700'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-slate-900 bg-blue-400 hover:bg-blue-500 transition-colors mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Demo
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default ModernHeader;

