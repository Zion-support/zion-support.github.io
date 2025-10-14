import React from "react";
import { Link } from "react-router-dom";
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen = true, 
  onToggle,
  className = "" 
}) => {
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Services', href: '/services', icon: CogIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation-platform' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Network Security', href: '/network-security' },
    { name: 'System Integration', href: '/system-integration' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'DevOps Solutions', href: '/devops-solutions' },
  ];

  return (
    <div className={`bg-slate-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {isOpen && (
          <h2 className="text-xl font-bold">Zion Tech Group</h2>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {isOpen ? (
            <ChevronLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <nav className="mt-4 flex-1 overflow-y-auto">
        <ul className="space-y-2 px-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {isOpen && (
          <>
            <div className="px-4 mt-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                AI Services
              </h3>
              <ul className="space-y-1">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 mt-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                IT Services
              </h3>
              <ul className="space-y-1">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;