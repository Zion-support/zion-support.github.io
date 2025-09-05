import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: Array<{
    name: string;
    href: string;
  }>;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'New Services 2025', href: '/new-services-2025' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'AI Solutions', href: '/ai-services' },
        { name: 'IT Solutions', href: '/it-services' },
        { name: 'Digital Transformation', href: '/solutions' },
        { name: 'Cloud Solutions', href: '/solutions' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={className}>
      <ul className="flex items-center space-x-8">
        {navigationItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.href}
              className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{item.name}</span>
              {item.submenu && (
                <ChevronDown className="w-4 h-4" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.submenu && activeDropdown === item.name && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(subItem.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}