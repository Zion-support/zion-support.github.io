<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onMenuClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
    onMenuClick?.();
  }, [onMenuClick]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Award className="w-4 h-4" />
    },
    {
      name: 'AI Solutions',
      href: '#',
      icon: <Brain className="w-4 h-4" />,
      dropdown: 'ai'
    },
    {
      name: '5G Technology',
      href: '#',
      icon: <Zap className="w-4 h-4" />,
      dropdown: '5g'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', href: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Project Management', href: '/ai-project-management', icon: <Clock className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Implementation', href: '/5g-implementation', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Network className="w-4 h-4" /> },
    { name: '5G Mobile Apps', href: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.dropdown!)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menus */}
                {item.dropdown === 'ai' && activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Solutions
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                            onClick={closeMenu}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.dropdown === '5g' && activeDropdown === '5g' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        5G Technology
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {fiveGServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                            onClick={closeMenu}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              as={Link}
              to="/consultation"
              variant="outline"
              size="sm"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Consultation
            </FuturisticButton>
            <FuturisticButton
              as={Link}
              to="/contact"
              variant="primary"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.dropdown!)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {item.dropdown === 'ai' && activeDropdown === 'ai' && (
                        <div className="ml-4 space-y-1">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              onClick={closeMenu}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.dropdown === '5g' && activeDropdown === '5g' && (
                        <div className="ml-4 space-y-1">
                          {fiveGServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              onClick={closeMenu}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <FuturisticButton
                  as={Link}
                  to="/consultation"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Consultation
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Started
                </FuturisticButton>
              </div>
            </div>
=======
'use client';
import React, { useState, useCallback } from 'react';
>>>>>>> main
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  SignalIcon,
  GlobeAltIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);}
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);';}
';}
  const navigation = ['}
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Contact', href: '/contact', icon: InformationCircleIcon }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
=======

import React, { useState } from 'react',
      import {"}
        "
  Bars3Icon,",
        "
  XMarkIcon,",
        "
  HomeIcon,",
        "
  InformationCircleIcon,",
        "
  BriefcaseIcon,",
        "
  PhoneIcon,",
        "
  DocumentTextIcon,",
        "
  AcademicCapIcon,",
        "
  PlayIcon,",
        "
  QuestionMarkCircleIcon,",
        "
  CheckIcon,",
        "
  CurrencyDollarIcon,",
        "
  CogIcon,",
        "
  ChevronDownIcon,",
        "
  GlobeAltIcon,",
        "
  CloudIcon,",
        "
  ChipIcon,",
        "
  SignalIcon,",
        "
  UserGroupIcon,",
        "
  EnvelopeIcon,",
        "
  ShareIcon,",
        "
  ChatBubbleLeftRightIcon,",
        "
  ChartBarIcon,",
        "
  Icon,",
        "
  CircleStackIcon,",
        "
  CodeBracketIcon,",
        "
  DevicePhoneMobileIcon,",
        "
  UserPlusIcon,",
        "
  CheckCircleIcon,",
        "
  RocketLaunchIcon,",
        "
  ServerIcon",
        "
} from '@heroicons/react/24/outline';
,
      interface NavigationProps {"}
        "
  onSidebarToggle?: () => void",
        "
};
,
      const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {"}
        "

  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const location = useLocation()

  const navigation = [",
        "
    { name: 'Home', href: '/', icon: HomeIcon },",
        "
    { name: 'About', href: '/about', icon: InformationCircleIcon },",
        "
    {"}
        "
      name: 'AI Services',",
        "
      href: '/ai-solutions',",
        "
      icon: ChipIcon,",
        "
      submenu: [",
        "
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: ChipIcon },",
        "
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: EnvelopeIcon },",
        "
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },",
        "
        { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: ChatBubbleLeftRightIcon },",
        "
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro', icon: CogIcon },",
        "
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: ChartBarIcon },",
        "
        { name: 'AI Content Generation', href: '/ai-content-generation-pro', icon: DocumentTextIcon },",
        "
        { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Icon },",
        "
        { name: 'AI Automation Platform', href: '/ai-automation-platform', icon: CogIcon };
      ]
    },",
        "
    {"}
        "
      name: 'Micro SaaS',",
        "
      href: '/micro-saas-solutions',",
        "
      icon: GlobeAltIcon,",
        "
      submenu: [",
        "
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },",
        "
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },",
        "
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: ChartBarIcon },",
        "
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: ChatBubbleLeftRightIcon },",
        "
        { name: 'Inventory Manager', href: '/inventory-manager', icon: CircleStackIcon },",
        "
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: ShareIcon },",
        "
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon };
      ]
    },",
        "
    {"}
        "
      name: 'IT Solutions',",
        "
      href: '/it-solutions',",
        "
      icon: CogIcon,",
        "
      submenu: [",
        "
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: CogIcon },",
        "
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },",
        "
        { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: CheckIcon },",
        "
        { name: 'Web Development', href: '/web-development', icon: CodeBracketIcon },",
        "
        { name: 'Mobile App Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },",
        "
        { name: 'Management', href: '/database-management', icon: CircleStackIcon },",
        "
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },",
        "
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon };
      ]
    },",
        "
    {"}
        "
      name: 'Resources',",
        "
      href: '#',",
        "
      icon: DocumentTextIcon,",
        "
      submenu: [",
        "
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },",
        "
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },",
        "
        { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },",
        "
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },",
        "
        { name: 'API Documentation', href: '/api-docs', icon: CodeBracketIcon },",
        "
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon };
      ]
    },",
        "
    {"}
        "
      name: 'Company',",
        "
      href: '#',",
        "
      icon: UserGroupIcon,",
        "
      submenu: [",
        "
        { name: 'About Us', href: '/about', icon: InformationCircleIcon },",
        "
        { name: 'Our Team', href: '/team', icon: UserGroupIcon },",
        "
        { name: 'Careers', href: '/careers', icon: UserGroupIcon },",
        "
        { name: 'Partnerships', href: '/partnerships', icon: UserPlusIcon },",
        "

        { name: 'Contact', href: '/contact', icon: PhoneIcon };
      ]
    },";"
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },";"
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon };
  ]

  const mobileNavigation = [",
        "
    { name: 'AI Solutions', href: '/ai-solutions', icon: ChipIcon },",
        "
    { name: 'Cybersecurity', href: '/cybersecurity', icon: CheckIcon },",
        "
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },",
        "
    { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },",
        "
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: CogIcon },",
        "
    { name: 'IT Solutions', href: '/it-solutions', icon: ServerIcon },",
        "
  ]

  const isActive = (path: string) => {"}
        "
    return location.pathname === path",
        "
  };
,
      const toggleServicesMenu = () => {"}
        "

    setIsServicesOpen(!isServicesOpen)
    setIsSolutionsOpen(false)
    setIsResourcesOpen(false)
    setIsCompanyOpen(false)
  };
,
      const toggleSolutionsMenu = () => {"}
        "

    setIsSolutionsOpen(!isSolutionsOpen)
    setIsServicesOpen(false)
    setIsResourcesOpen(false)
    setIsCompanyOpen(false)
  };
,
      const toggleResourcesMenu = () => {"}
        "

    setIsResourcesOpen(!isResourcesOpen)
    setIsServicesOpen(false)
    setIsSolutionsOpen(false)
    setIsCompanyOpen(false)
  };
,
      const toggleCompanyMenu = () => {"}
        "
    setIsCompanyOpen(!isCompanyOpen)
    setIsServicesOpen(false)
    setIsSolutionsOpen(false)
    setIsResourcesOpen(false)
  };
,
      return (";")
    <nav className="bg-slate-900 shadow-lg">";"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";"
        <div className="flex justify-between h-16">";"
          <div className="flex">";"
            <div className="flex-shrink-0 flex items-center">";"
              <to="/" className="flex-shrink-0 flex items-center">";"
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">";"
                  <span className="text-white font-bold text-sm">Z</span>",
        "
                </div>",
        "
                <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>",
        "
              </>",
        "
            </div>";"
            {/* Desktop Navigation */};
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">";"
              {navigation.map((item) => (";")}
                <div key={item.name} className="relative">";"
                  <";">
                    to={item.href};
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${";"}

                      isActive(item.href)
                        ? 'border-blue-500 text-white';
                        : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white';
                    }`};
                  >";"
                    <item.icon className="w-4 h-4" />";"
                    <span>{item.name}</span>";"
                    {item.submenu && <ChevronDownIcon className="w-4 h-4" />};
                  </>",
        "
                  {/* Dropdown Menu */};
                  {item.submenu && (",)}
        "
                    <divclassName={`absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700 ${",>}
        "
                      (item.name === 'AI Services' && isServicesOpen) ||",
        "
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||",
        "
                      (item.name === 'IT Solutions' && isResourcesOpen) ||",
        "
                      (item.name === 'Resources' && isResourcesOpen) ||",
        "
                      (item.name === 'Company' && isCompanyOpen)
                        ? 'block' : 'hidden';
                    }`}>",
        "
                      {item.submenu.map((subItem) => (",)}
        "
                        <div key={subItem.name}>",
        "
                          <";">
                            to={subItem.href},
      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white";
                          >";"
                            <subItem.icon className="w-4 h-4 mr-3" />",
        "
                            <span>{subItem.name}</span>",
        "
                          </>",
        "
                        </div>",
        "

                      ))};
                    </div>";"
                  )};
                </div>";"
              ))};
            </div>";"
          </div>";"
          {/* Mobile menu button */};
          <div className="lg:hidden flex items-center">",
        "
            <button",>
        "
              onClick={() => setIsOpen(!isOpen)},
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white";
            >";"
              <span className="sr-only">Open main menu</span>",
        "
              {isOpen ? (",)}
        "
                <XMarkIcon className="h-6 w-6" />",
        "
              ) : (",)
        "
                <Bars3Icon className="h-6 w-6" />",
        "
              )};
            </button>",
        "
          </div>",
        "
        </div>",
        "
        {/* Mobile Navigation */};
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>";"
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700 max-h-96 overflow-y-auto">",
        "
            {navigation.map((item) => (",)}
        "
              <div key={item.name}>",
        "
                {item.submenu ? (",)}
        "
                  <div>",
        "
                    <button",>
        "
                      onClick={() => {";"}
                        if (item.name === 'AI Services') toggleServicesMenu(),
      else if (item.name === 'Micro SaaS') toggleSolutionsMenu(),
      else if (item.name === 'IT Solutions') toggleResourcesMenu(),
      else if (item.name === 'Resources') toggleResourcesMenu(),
      else if (item.name === 'Company') toggleCompanyMenu();
                      }},
      className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-300 hover:text-white hover:bg-slate-700";
                    >";"
                      <item.icon className="w-5 h-5 mr-3" />",
        "
                      <span>{item.name}</span>",
        "
                      <ChevronDownIcon className="w-4 h-4 ml-auto" />",
        "
                    </button>",
        "
                    {/* Mobile Submenu */};
                    <divclassName={`pl-6 ${",>}
        "
                      (item.name === 'AI Services' && isServicesOpen) ||",
        "
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||",
        "
                      (item.name === 'IT Solutions' && isResourcesOpen) ||",
        "
                      (item.name === 'Resources' && isResourcesOpen) ||",
        "
                      (item.name === 'Company' && isCompanyOpen)
                        ? 'block' : 'hidden';
                    }`}>",
        "
                      {item.submenu.map((subItem) => (",)}
        "
                        <div key={subItem.name}>",
        "
                          <";">
                            to={subItem.href},
      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700",
      onClick={() => setIsOpen(false)};
                          >";"
                            <subItem.icon className="w-4 h-4 mr-3" />",
        "
                            <span>{subItem.name}</span>",
        "
                          </>",
        "
                        </div>",
        "
                      ))};
                    </div>",
        "
                  </div>",
        "
                ) : (",)
        "
                  <div>",
        "
                    <",>
        "
                      to={item.href},
      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href) ? 'text-white bg-slate-700' : 'text-gray-300 hover:text-white hover:bg-slate-700'}`},
      onClick={() => setIsOpen(false)};
                    >",
        "
                      <item.icon className="w-5 h-5 mr-3" />",
        "
                      {item.name};
                    </>",
        "
                  </div>",
        "
                )};
              </div>",
        "
            ))};
          </div>";"
        </div>";"
      </div>";"
    </nav>";"

  )

import React, { useState } from 'react';
>>>>>>> main
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ServerIcon;
}; from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },";
    { name: 'About', href: '/about', icon: InformationCircleIcon },";
    {
      name: 'AI Services',";
      href: '/ai-solutions',";
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: CpuChipIcon },";
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: EnvelopeIcon },";
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },";
        { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: ChatBubbleLeftRightIcon },";
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro', icon: CogIcon },";
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: ChartBarIcon },";
        { name: 'AI Content Generation', href: '/ai-content-generation-pro', icon: DocumentTextIcon },";
        { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: EyeIcon },";
        { name: 'AI Automation Platform', href: '/ai-automation-platform', icon: CogIcon }";
      ]
    },
    {
<<<<<<< HEAD
      name: 'About',
      path: '/about',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'AI Solutions',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Shield className="w-4 h-4" />
    }
=======
      name: 'Micro SaaS',";
      href: '/micro-saas-solutions',";
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },";
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },";
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: ChartBarIcon },";
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: ChatBubbleLeftRightIcon },";
        { name: 'Inventory Manager', href: '/inventory-manager', icon: CircleStackIcon },";
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: ShareIcon },";
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon }";
      ]
    },
    {
      name: 'IT Solutions',";
      href: '/it-solutions',";
      icon: CogIcon,
      submenu: [
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: CogIcon },";
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },";
        { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: ShieldCheckIcon },";
        { name: 'Web Development', href: '/web-development', icon: CodeBracketIcon },";
        { name: 'Mobile App Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },";
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },";
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },";
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }";
      ]
    },
    {
      name: 'Resources',";
      href: '#',";
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog', icon: DocumentTextIcon },";
        { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },";
        { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },";
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },";
        { name: 'API Documentation', href: '/api-docs', icon: CodeBracketIcon },";
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon }";
      ]
    },
    {
      name: 'Company',";
      href: '#',";
      icon: UserGroupIcon,
      submenu: [
        { name: 'About Us', href: '/about', icon: InformationCircleIcon },";
        { name: 'Our Team', href: '/team', icon: UserGroupIcon },";
        { name: 'Careers', href: '/careers', icon: UserGroupIcon },";
        { name: 'Partnerships', href: '/partnerships', icon: UserPlusIcon },";
        { name: 'Contact', href: '/contact', icon: PhoneIcon }";
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },";
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }";
>>>>>>> main
  ];

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path,
  };

<<<<<<< HEAD
  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
              Zion Tech Group
=======
  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <nav className ="bg-slate-800 border-b border-slate-700">";
      <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
        <div className ="flex justify-between h-16">";
          <div className ="flex items-center">";
            <Link to ="/" className="flex-shrink-0 flex items-center">";
              <div className ="h-8 w-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">";
                <span className ="text-white font-bold text-sm">Z</span>";
              </div>
              <span className ="ml-2 text-white font-bold text-lg">Zion Tech Group</span>",
>>>>>>> main
>>>>>>> main
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-purple-400 bg-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
=======
<<<<<<< HEAD
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsAIServicesOpen(!isAIServicesOpen)}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {isAIServicesOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                            >
                              <subItem.icon className="mr-3 h-4 w-4" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-white bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {item.name}
                  </Link>
=======
          <div className ="hidden lg: flex lg:items-center lg:space-x-8">",
            {navigation.map((item) => (
              <div key ={item.name} className="relative">";
                <Link to ={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 ${
                    isActive(item.href)
                      ? 'border-blue-500 text-white'";
                       'border-transparent text-gray-300 hover: border-gray-300 hover:text-white'",
                  }`}
                >
                  <item.icon: className ="w-4 h-4" />",
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDownIcon className ="w-4 h-4" />}";
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className ={`absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700 ${
                    (item.name === 'AI Services' && isServicesOpen) ||";
                    (item.name === 'Micro SaaS' && isSolutionsOpen) ||";
                    (item.name === 'IT Solutions' && isResourcesOpen) ||";
                    (item.name === 'Resources' && isResourcesOpen) ||";
                    (item.name === 'Company' && isCompanyOpen)";
                      ? 'block'  'hidden'";
                  }`}>
                    {item.submenu.map((subItem) => (
                      <div key ={subItem.name}>
                        <Link to ={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover: bg-slate-700 hover:text-white"";
                        >
                          <subItem.icon: className ="w-4 h-4 mr-3" />",
                          <span>{subItem.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
>>>>>>> main
                )}
              </div>
>>>>>>> main
            ))}
>>>>>>> main
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="md:hidden flex items-center space-x-4">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
=======
<<<<<<< HEAD
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {sidebarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
=======
          <div className ="lg: hidden flex items-center">",
            <button onClick ={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover: text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"";
            >
              <span className ="sr-only">Open main menu</span>";
              {isOpen ? (
                <XMarkIcon className ="h-6 w-6" />";
              ) : (
                <Bars3Icon className ="h-6 w-6" />",
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className ={`lg:hidden ${isOpen ? 'block'  'hidden'}`}>";
          <div className ="px-2 pt-2 pb-3 space-y-1 sm: px-3 bg-slate-800 border-t border-slate-700 max-h-96 overflow-y-auto">",
            {navigation.map((item) => (
              <div key ={item.name}>
                {item.submenu ? (
                  <div>
                    <button onClick ={() => {
                        if (item.name === 'AI Services') toggleServicesMenu();";
                        else if (item.name === 'Micro SaaS') toggleSolutionsMenu();";
                        else if (item.name === 'IT Solutions') toggleResourcesMenu();";
                        else if (item.name === 'Resources') toggleResourcesMenu();";
                        else if (item.name === 'Company') toggleCompanyMenu()`;
                      }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-300 hover: text-white hover:bg-slate-700"";
                    >
                      <item.icon: className ="w-5 h-5 mr-3" />",
                      <span>{item.name}</span>
                      <ChevronDownIcon className ="w-4 h-4 ml-auto" />";
                    </button>
                    {/* Mobile Submenu */}
                    <div className ={`pl-6 ${
                      (item.name === 'AI Services' && isServicesOpen) ||";
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||";
                      (item.name === 'IT Solutions' && isResourcesOpen) ||";
                      (item.name === 'Resources' && isResourcesOpen) ||";
                      (item.name === 'Company' && isCompanyOpen)";
                        ? 'block'  'hidden'";
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link key ={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-3 py-2 text-sm text-gray-300 hover: text-white hover:bg-slate-700"";
                        >
                          <subItem.icon: className ="w-4 h-4 mr-3" />",
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to ={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-slate-700 text-white'";
                         'text-gray-300 hover: text-white hover:bg-slate-700'",
                    }`}
                  >
                    <item.icon: className ="w-5 h-5 mr-3" />",
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
>>>>>>> main
          </div>
        </div>
>>>>>>> main
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-purple-400 bg-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
<<<<<<< HEAD
};

=======

};

>>>>>>> main
export default Navigation;