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
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon
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
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: SignalIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

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

  const isActive = (href: string) => {
    return location.pathname === href;
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
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-4 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        isActive(item.href) 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </div>
                      <ChevronDownIcon 
                        className={`w-4 h-4 transition-transform ${
                          isExpanded(item.name) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isExpanded(item.name) && (
                      <ul className="mt-2 ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.href}
                              onClick={onClose}
                              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-purple-600 text-white'
                                  : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;