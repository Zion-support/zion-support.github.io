import React, { useState } from 'react.ts';
import { Link, useLocation               } from 'react-router-dom.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import {
  Home,
  Zap,
  Target,
  Users,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  FileText,
  Phone,
  ChevronRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  BarChart3,
  Activity,
  Globe,
  Building,
  Eye,
  Cpu,
  Cloud,
  Network,
  Server,
  GraduationCap,
  HelpCircle,
  Settings,
  Menu,
  X
} from 'lucide-react.ts';

export function Sidebar(...args: any[]): any {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<any>(null);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    if (href === '/') {
      return location.pathname === '/';

    return location.pathname.startsWith(href);
=======
    },
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-blue-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-suite' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' },
        { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation' },
        { name: 'Threat Intelligence', href: '/services/ai-cyber-threat-intelligence' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-cyan-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud Migration', href: '/services/cloud-migration-services' },
        { name: 'Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Container Orchestration', href: '/services/kubernetes-services' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      color: 'text-purple-500',
      services: [
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-networks' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform' }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'text-green-500',
      services: [
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain' },
        { name: '5G Enterprise Solutions', href: '/services/5g-enterprise-solutions' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-yellow-500',
      services: [
        { name: 'Custom SaaS Development', href: '/services/micro-saas-solutions' },
        { name: 'API Development', href: '/services/api-development' },
        { name: 'Mobile App Development', href: '/services/mobile-development' },
        { name: 'Web Application Development', href: '/services/web-development' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-personalization' }
      ]
    }
  ];

  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => location.pathname === href;

  const toggleSection = (sectionName: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              />
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Navigation
              </h3>
              <nav className="space-y-1">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleSection('services')}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {expandedSections.includes('services') ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Services Dropdown */}
            {expandedSections.includes('services') && (
              <div className="ml-4 space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="flex items-center justify-between w-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.id) ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(category.id) && (
                      <div className="mt-2 ml-6 space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(service.href)
                                ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Services */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Popular Services
              </h3>
              <div className="space-y-2">
                {recentServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {service.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {service.views}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* User Tools */}
            <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 p-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Guest User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sign in for more features</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
