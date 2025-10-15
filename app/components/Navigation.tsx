import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const mainNavigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const solutionsNavigation = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon, description: 'Advanced AI & ML Solutions' },
    { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon, description: 'Professional IT Services' },
    { name: 'Micro SAAS', href: '/micro-saas-solutions', icon: CloudIcon, description: 'Affordable Business Software' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon, description: 'Security & Protection' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon, description: 'Cloud & Infrastructure' },
    { name: 'Analytics', href: '/analytics-dashboard', icon: ChartBarIcon, description: 'Data & Analytics' }
  ];

  const additionalPages = [
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: ChartBarIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
                <span className="text-xs text-gray-400">AI & IT Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-purple-400 bg-slate-800/50 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/30 hover:shadow-lg hover:shadow-purple-500/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isSolutionsOpen || solutionsNavigation.some(item => isActive(item.href))
                    ? 'text-purple-400 bg-slate-800/50 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/30 hover:shadow-lg hover:shadow-purple-500/10'
                }`}
              >
                <CogIcon className="w-4 h-4" />
                <span>Solutions</span>
                <ArrowRightIcon className={`w-3 h-3 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl shadow-purple-500/20 border border-slate-700/50 p-4 z-50">
                  <div className="grid grid-cols-2 gap-3">
                    {solutionsNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`p-3 rounded-lg transition-all duration-300 group ${
                          isActive(item.href)
                            ? 'bg-purple-600/20 border border-purple-500/30'
                            : 'hover:bg-slate-700/50 hover:border-slate-600/50 border border-transparent'
                        }`}
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActive(item.href)
                              ? 'bg-purple-500/20 text-purple-400'
                              : 'bg-slate-700/50 text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-400'
                          }`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Pages */}
            <div className="flex items-center space-x-1 ml-4 pl-4 border-l border-slate-700/50">
              {additionalPages.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-purple-400 bg-slate-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center space-x-2"
            >
              <RocketLaunchIcon className="w-4 h-4" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-slate-700/50">
              {/* Main Navigation */}
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-purple-400 bg-slate-700/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Solutions Section */}
              <div className="border-t border-slate-700/50 pt-3 mt-3">
                <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </div>
                {solutionsNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-purple-400 bg-slate-700/50'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Additional Pages */}
              <div className="border-t border-slate-700/50 pt-3 mt-3">
                <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  More
                </div>
                {additionalPages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-purple-400 bg-slate-700/50'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="border-t border-slate-700/50 pt-3 mt-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;