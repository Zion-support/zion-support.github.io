import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  WrenchScrewdriverIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const mainLinks = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: UserGroupIcon },
    { name: "Services", href: "/services", icon: WrenchScrewdriverIcon },
    { name: "Pricing", href: "/pricing", icon: CurrencyDollarIcon },
    { name: "Blog", href: "/blog", icon: DocumentTextIcon },
    { name: "Contact", href: "/contact", icon: ChatBubbleLeftRightIcon }
  ];

  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Our Team", href: "/team" },
    { name: "Documentation", href: "/docs" },
    { name: "Careers", href: "/careers" }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation-platform' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'System Integration', href: '/system-integration' },
    { name: 'Network Security', href: '/network-security' }
  ];

  const solutions = [
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Process Automation', href: '/process-automation' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Mobile Solutions', href: '/mobile-solutions' }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onClose}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-colors"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-slate-700">
            <Link to="/" className="text-xl font-bold text-white">
              Zion Tech Group
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* Main Links */}
            <div className="space-y-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* AI Services Section */}
            <div className="pt-4">
              <button
                onClick={() => toggleSection('ai-services')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="flex items-center">
                  <CogIcon className="mr-3 h-5 w-5" />
                  AI Services
                </span>
                <ChevronDownIcon 
                  className={`h-4 w-4 transition-transform ${
                    expandedSections['ai-services'] ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedSections['ai-services'] && (
                <div className="ml-6 mt-2 space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Section */}
            <div>
              <button
                onClick={() => toggleSection('it-services')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="flex items-center">
                  <WrenchScrewdriverIcon className="mr-3 h-5 w-5" />
                  IT Services
                </span>
                <ChevronDownIcon 
                  className={`h-4 w-4 transition-transform ${
                    expandedSections['it-services'] ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedSections['it-services'] && (
                <div className="ml-6 mt-2 space-y-1">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Section */}
            <div>
              <button
                onClick={() => toggleSection('solutions')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="flex items-center">
                  <CogIcon className="mr-3 h-5 w-5" />
                  Solutions
                </span>
                <ChevronDownIcon 
                  className={`h-4 w-4 transition-transform ${
                    expandedSections['solutions'] ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedSections['solutions'] && (
                <div className="ml-6 mt-2 space-y-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      to={solution.href}
                      className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Additional Links */}
          <div className="px-4 py-4 border-t border-slate-700">
            <div className="space-y-1">
              {additionalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;