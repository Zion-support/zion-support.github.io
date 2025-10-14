import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
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

const Navigation: React.FC = () => {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/',
    }
    return location.pathname.startsWith(href)
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

  return (
    <nav className="hidden md:flex space-x-8">
      {navigation.map((item) => (
        <div key={item.name} className="relative">
          {item.submenu ? (
            <div className="relative group">
              <button
onClick={() => toggleExpanded(item.name)}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                <ChevronDownIcon 
                  className={`w-4 h-4 transition-transform ${
                    expandedItems.includes(item.name) ? 'rotate-180' :;
                  }`} 
                />
              </button>
              
              {expandedItems.includes(item.name) && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"""
                      >
                        <service.icon className="h-4 w-4 mr-3" />""
                        {service.name}
                      </Link>
))}
                  </div>
                </div>
)}
            </div>
          ) : (
            <Link
              to={item.href}
              className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-blue-600;
                  : 'text-gray-600 hover:text-gray-900;
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
)}
        </div>
))}
    </nav>
  )
}

export default Navigation;
