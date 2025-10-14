import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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
  UserGroupIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  EyeIcon,
  CodeBracketIcon,
  DatabaseIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  KeyIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CubeIcon,
  BeakerIcon,
  CommandLineIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  BoltIcon,
  HeartIcon,
  FireIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
        { name: 'Mobile Development', href: '/mobile-app-development', icon: DevicePhoneMobileIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: SparklesIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Blockchain Solutions', href: '/ai-blockchain-solutions', icon: CubeIcon },
        { name: 'IoT Solutions', href: '/ai-iot-solutions', icon: CommandLineIcon },
        { name: 'Robotics Solutions', href: '/ai-robotics', icon: CogIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
    { name: 'Our Team', href: '/team', icon: UserGroupIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon },
    { name: 'Case Studies', href: '/case-studies', icon: ChartBarIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isExpanded = (sectionName: string) => {
    return expandedSections.includes(sectionName);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-lg shadow-2xl z-50 overflow-y-auto border-r border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-6 px-4">
          {navigation.map((item) => (
            <div key={item.name} className="mb-2">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-purple-400 group-hover:text-purple-300" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded(item.name) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {isExpanded(item.name) && (
                    <div className="pl-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-300 group ${
                            isActive(subItem.href)
                              ? 'text-white bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={onClose}
                        >
                          <subItem.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5 mr-3 text-purple-400 group-hover:text-purple-300" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
          
          {/* Additional Links */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Additional Resources
            </h3>
            {additionalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-300 group ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={onClose}
              >
                <link.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2 text-purple-400" />
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div>+1-302-464-0950</div>
              <div>kleber@ziontechgroup.com</div>
              <div>Middletown, DE 19709</div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center mt-3 text-purple-300 hover:text-white font-medium text-sm transition-colors"
              onClick={onClose}
            >
              Contact Us
              <ArrowRightIcon className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;