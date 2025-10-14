import React, { useState, useCallback, useMemo } from 'react',
import { Link } from "react-router-dom";
import { X, Brain, Shield, Zap, Globe, Home, Mail, Phone }    from "lucide-react";
import {,

  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon} from ',
interface SidebarProps {isOpen: boolean;,
  onClose: () => void}
>>>>>>> origin/main,
>>>>>>> origin/main,

  ]",
  const additionalLinks = [",
    { name: "Privacy Policy", href: "/privacy",
    { name: "Terms of Service", href: "/terms",
    { name: "Our Team", href: "/team",
    { name: "Documentation", href: "/docs",
    { name: "Careers", href: "/careers"];,

  const aiServices = [,

    { name: 'AI Analytics', href: '/ai-analytics',
    { name: 'AI Automation', href: '/ai-automation-platform',
    { name: 'AI Content Generation', href: '/ai-content-generation',
    { name: 'AI Customer Support', href: '/ai-customer-support',
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity',
    { name: 'AI Data Analytics', href: '/ai-data-analytics'];,

  const itServices = [,

    { name: 'Cloud Migration', href: '/cloud-migration',
    { name: 'DevOps Services', href: '/devops-services',
    { name: 'IT Consulting', href: '/it-consulting',
    { name: 'Network Security', href: '/network-security',
    { name: 'Software Development', href: '/software-development',
    { name: 'Web Development', href: '/web-development'];,

  const microSaasServices = [,

    { name: 'Project Management Pro', href: '/project-management-pro',
    { name: 'AI CRM Pro', href: '/zion-ai-crm-pro',
    { name: 'Inventory Smart', href: '/zion-inventory-smart',
    { name: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro',
    { name: 'Performance Monitor', href: '/zion-performance-monitor',
    { name: 'Email Automation', href: '/zion-email-automation'];,

  if (!isOpen) return null;,

  return (

    <>

      <div className="fixed inset-0 z-50 md: hidden"
        <div className="fixed inset-0 bg-black/50"
        <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto"
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20"
            <div className="flex items-center space-x-2"
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center"
                <Brain className="w-5 h-5 text-white"
              </div>
    </div>
              <span className="text-lg font-semibold text-white"
            </div>
    </span>
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: GlobeAltIcon },',
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },',
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },',
    { name: 'Resources', href: '/resources', icon: PlayIcon },',
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },',
    { name: 'Contact', href: '/contact', icon: PhoneIcon }',
  ];,

  if (!isOpen) return null;,

  return (<div className="fixed inset-0 z-50 md: hidden"></div>
    </div>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
    </div>
      <div className="relative flex flex-col w-64 h-full bg-slate-900"></div>
    </div>
        <div className="flex items-center justify-between p-4 border-b border-slate-700"></div>
    </div>
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={onClose} className="text-gray-400 hover: text-white"></button>
            <XMarkIcon className="w-6 h-6" /></XMarkIcon>
          </button>
        </div>
    </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>
          {navigation.map((link) => (

            <div key={link.name}>
    </div>
              {link.submenu ? (

                <div>
    </div>
                  <button,
                    onClick={() => toggleExpanded(link.name)
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover: text-white hover:bg-slate-800 rounded"
                  >,
                    <div className="flex items-center"></div>
    </div>
                      <link.icon className="w-5 h-5 mr-3" /></link.icon>
                      {link.name}
                    </div>
    </div>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${`,
                        expandedItems.includes(link.name) ? 'rotate-180' : '''}`} `,
                    /></ChevronDownIcon>
                  </button>
                  {expandedItems.includes(link.name) && (

                    <div className="ml-4 mt-2 space-y-1"></div>
    </div>
                      {link.submenu.map((subLink) => (

                        <Link key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${`,
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20'',
                              : 'text-gray-400 hover: text-white hover:bg-slate-800''}`}`,
                          onClick={onClose}
                        ></Link>
                          <subLink.icon className="w-4 h-4 mr-3" /></subLink.icon>
                          {subLink.name}
>>>>>>> origin/main,
            <button,
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover: text-white hover:bg-white/10"
            ></button,
>
              <X className="w-6 h-6"
            </button>
          </div>

    </div>
          <div className="p-4 space-y-6"
            {/* Main Navigation */}
            <div></div>
    </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                Main,
              </h3>
              <nav className="space-y-2"
                {mainNavItems.map((item) => (

                  <Link key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover: text-white hover:bg-white/5 transition-colors duration-200"
                  ></Link>
                    <item.icon className="w-5 h-5"
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

    </div>
            {/* Services */}
            <div>
    </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                Services,
              </h3>
              <nav className="space-y-2"
                {serviceItems.map((item) => (

                  <div key={item.name}>
    </div>
                    <Link to={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover: text-white hover:bg-white/5 transition-colors duration-200"
                    ></Link>
                      <item.icon className="w-5 h-5"
                      <span>{item.name}</span>
                    </Link>
                  </div>
    </div>
                ))}
              </nav>
            </div>

    </div>
            {/* AI Services Dropdown */}
            <div>
    </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                AI Services,
              </h3>
              <nav className="space-y-1"
                {aiServices.map((service) => (

                  <Link key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover: text-white hover:bg-white/5 transition-colors duration-200"
                  ></Link>
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

    </div>
            {/* IT Services Dropdown */}
            <div>
    </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                IT Services,
              </h3>
              <nav className="space-y-1"
                {itServices.map((service) => (

                  <Link key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover: text-white hover:bg-white/5 transition-colors duration-200"
                  ></Link>
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

    </div>
            {/* Micro SAAS Services Dropdown */}
            <div>
    </div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                Micro SAAS,
              </h3>
              <nav className="space-y-1"
                {microSaasServices.map((service) => (

                  <Link key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-gray-300 hover: text-white hover:bg-white/5 transition-colors duration-200"
                  ></Link>
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

    </div>
            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-700"
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3"
                Contact,
              </h3>
    </div>
              <div className="space-y-3"
                <div className="flex items-center space-x-3"
                  <Mail className="w-5 h-5 text-cyan-400"
                  <span className="text-sm text-gray-300"
                </div>
    </div>
                <div className="flex items-center space-x-3"
                  <Phone className="w-5 h-5 text-cyan-400"
                  <span className="text-sm text-gray-300"
                </div>
    </div>
              </div>
    </div>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
>>>>>>> origin/main,
      </div>
    </div>
    </>

  );,
};,

>>>>>>> origin/main,
>>>>>>> origin/main,
>>>>>>> origin/main,