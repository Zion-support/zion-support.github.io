import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import {
  HomeIcon,
  InformationCircleIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SignalIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  PhoneIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'AI Services',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Solutions Overview', href: '/ai-solutions' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation', href: '/ai-content-generation-pro' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Automation Platform', href: '/ai-automation-platform' }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions' },
        { name: 'Task Manager Pro', href: '/task-manager-pro' },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
        { name: 'Customer Support Hub', href: '/customer-support-hub' },
        { name: 'Inventory Manager', href: '/inventory-manager' },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler' },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-solutions',
      icon: CogIcon,
      submenu: [
        { name: 'IT Solutions Overview', href: '/it-solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile App Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: DocumentTextIcon,
      submenu: [
        { name: 'Blog', href: '/blog' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'API Documentation', href: '/api-docs' },
        { name: 'Help Center', href: '/help' }
      ]
    },
    {
      name: 'Company',
      href: '#',
      icon: UserGroupIcon,
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partnerships', href: '/partnerships' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors ${
                      isActive(item.href) ? 'bg-slate-700 text-white' : ''
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={onClose}
                          className={`block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-slate-700 transition-colors ${
                            isActive(subItem.href) ? 'bg-slate-700 text-white' : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <PhoneIcon className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <span className="w-4 h-4 mr-3">@</span>
                  <span>contact@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
