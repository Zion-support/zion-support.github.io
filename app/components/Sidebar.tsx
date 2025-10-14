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
  CogIcon,
  ChevronDownIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const isActive = (path: string) => {
    return location.pathname === path,
  }

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  const navigationItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { 
      name: 'Services', 
      href: '/services',
      icon: BriefcaseIcon,
      children: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: SignalIcon }
      ]
    },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <CpuChipIcon className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div>
                  <button
onClick={() => toggleExpanded(link.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                  >
                    <div className="flex items-center">
                      <link.icon className="w-5 h-5 mr-3" />
                      {link.name}
                    </div>
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(link.name) ? 'rotate-180' :;
                      }`} 
                    />
                  </button>
                  {expandedItems.includes(link.name) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20;
                              : 'text-gray-400 hover:text-white hover:bg-slate-800;
                          }`}
                          onClick={onClose}
                        >
                          <subLink.icon className="w-4 h-4 mr-3" />
                          {subLink.name}
                        </Link>
))}
                    </div>
)}
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded ${
                    isActive(link.href) ? 'text-blue-400 bg-blue-900/20' :;
                  }`}
                  onClick={onClose}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.name}
                </Link>
)}
            </div>
))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
