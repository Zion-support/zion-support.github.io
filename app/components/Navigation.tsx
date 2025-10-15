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
  PlayIcon,
  QuestionMarkCircleIcon,
  CheckIcon,
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
  RocketLaunchIcon,
  BoltIcon,
  SparklesIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ServerIcon,
  WifiIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  UserIcon,
  BriefcaseIcon,
  LockClosedIcon,
  DocumentIcon,
  CookieIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Services', href: '/services', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Blog', href: '/blog', icon: NewspaperIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon }
  ];

  const services = [
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      description: 'Advanced AI and machine learning solutions'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: ComputerDesktopIcon,
      description: 'Comprehensive IT support and services'
    },
    {
      name: 'Cloud Infrastructure',
      href: '/cloud-infrastructure',
      icon: CloudIcon,
      description: 'Scalable cloud solutions and migration'
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: SignalIcon,
      description: 'Next-generation 5G network solutions'
    },
    {
      name: 'Digital Transformation',
      href: '/digital-transformation',
      icon: RocketLaunchIcon,
      description: 'Transform your business with digital solutions'
    }
  ];

  const microSaas = [
    {
      name: 'AI Content Generator',
      href: '/ai-content-generator',
      icon: SparklesIcon,
      description: 'Generate high-quality content with AI'
    },
    {
      name: 'Micro SAAS Solutions',
      href: '/micro-saas-solutions',
      icon: CodeBracketIcon,
      description: 'Custom micro SAAS applications'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <CogIcon className="h-4 w-4 mr-2" />
                Services
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <service.icon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('microsaas')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <CodeBracketIcon className="h-4 w-4 mr-2" />
                Micro SAAS
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>

              {activeDropdown === 'microsaas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">Micro SAAS Applications</h3>
                  </div>
                  {microSaas.map((app) => (
                    <Link
                      key={app.name}
                      to={app.href}
                      className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <app.icon className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{app.name}</div>
                        <div className="text-xs text-gray-500">{app.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm font-medium"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="pt-4 pb-2">
              <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="h-5 w-5 mr-3" />
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Mobile Micro SAAS */}
            <div className="pt-2 pb-2">
              <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Micro SAAS
              </div>
              {microSaas.map((app) => (
                <Link
                  key={app.name}
                  to={app.href}
                  className="flex items-center px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <app.icon className="h-5 w-5 mr-3" />
                  {app.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;