import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const ImprovedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services']));
  const location = useLocation();

  const mainNavigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Services', href: '/services', icon: CogIcon },
    { name: 'Contact', href: '/contact', icon: ChatBubbleLeftRightIcon },
  ];

  const serviceSections = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: CpuChipIcon,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation-platform' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { name: 'AI Services', href: '/ai-services' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Software Development', href: '/software-development' },
        { name: 'Web Development', href: '/web-development' }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-800 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {/* Main Navigation */}
            <div className="px-4 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <ul className="space-y-1">
                {mainNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-cyan-600 text-white'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.id} className="px-4 mb-6">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 bg-gradient-to-r ${section.color} rounded flex items-center justify-center`}>
                      <section.icon className="w-4 h-4 text-white" />
                    </div>
                    <span>{section.title}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.has(section.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedSections.has(section.id) && (
                  <ul className="mt-2 space-y-1">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? 'bg-cyan-600 text-white'
                              : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ImprovedSidebar;
