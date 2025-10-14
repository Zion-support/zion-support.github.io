import React, { useState } from 'react';'
import { Link, useLocation } from 'react-router-dom';'
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
  UserGroupIcon
} from '@heroicons/react/24/outline';'
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },'
    { 
      name: 'Services','
      href: '/services','
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },'
        { name: 'IT Services', href: '/it-services', icon: CogIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon }'
      ]
    },
    { 
      name: 'Solutions','
      href: '/solutions','
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },'
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },'
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },'
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }'
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },'
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },'
    { name: 'Demo', href: '/demo', icon: PlayIcon },'
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },'
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }'
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },'
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },'
    { name: 'Our Team', href: '/team', icon: UserGroupIcon },'
    { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },'
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon }'
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
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-4">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${
                        isExpanded(item.name) ? 'rotate-180' : '''
                      }`} 
                    />
                  </button>
                  {isExpanded(item.name) && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'text-blue-600 bg-blue-50''
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50''
                          }`}
                          onClick={onClose}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50''
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100''
                  }`}
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Additional Links */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Additional
            </h3>
            {additionalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 bg-blue-50''
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50''
                }`}
                onClick={onClose}
              >
                <link.icon className="w-4 h-4 mr-3" />
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
