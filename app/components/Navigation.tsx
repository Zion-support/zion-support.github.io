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
  ];

  const isActive = (path: string) => {
    return location.pathname === path,
  };

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
            </Link>
          </div>

          {/* Desktop Navigation */}
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
            ))}
          </div>

          {/* Mobile menu button */}
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
      </div>
    </nav>
  );

};

export default Navigation;