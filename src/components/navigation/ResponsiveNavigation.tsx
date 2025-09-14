import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, BookOpen, Award, TrendingUp } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: string;
  children?: NavigationItem[];
}

const ResponsiveNavigation: React.FC<{ openLoginModal?: (returnToPath?: string) => void }> = ({ openLoginModal }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'AI & Automation', href: '/services#ai' },
        { label: 'Cloud Computing', href: '/services#cloud' },
        { label: 'Cybersecurity', href: '/services#security' },
        { label: 'Blockchain', href: '/services#blockchain' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      badge: 'NEW',
      badgeColor: 'bg-green-500',
      children: [
        { 
          label: 'AI Implementation Checklist', 
          href: '/resources/ai-2025-implementation-checklist-comprehensive',
          badge: 'Featured',
          badgeColor: 'bg-yellow-500'
        },
        { label: 'All Resources', href: '/resources' },
        { label: 'Tools', href: '/tools' },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
      badge: 'HOT',
      badgeColor: 'bg-red-500',
      children: [
        { 
          label: 'AI 2025 Enterprise Guide', 
          href: '/blog/ai-2025-enterprise-automation-mastery-complete-guide',
          badge: 'Featured',
          badgeColor: 'bg-yellow-500'
        },
        { label: 'All Posts', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      label: 'Case Studies',
      href: '/case-studies',
      badge: 'NEW',
      badgeColor: 'bg-blue-500',
      children: [
        { 
          label: 'Fortune 500 Success Story', 
          href: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
          badge: 'Featured',
          badgeColor: 'bg-yellow-500'
        },
        { label: 'All Case Studies', href: '/case-studies' },
      ],
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'NEW':
        return <Star className="w-3 h-3" />;
      case 'HOT':
        return <TrendingUp className="w-3 h-3" />;
      case 'Featured':
        return <Award className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div key={item.label} className="relative group">
          <Link
            to={item.href}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            onMouseEnter={() => item.children && setActiveDropdown(item.label)}
            onMouseLeave={() => item.children && setActiveDropdown(null)}
          >
            {item.label}
            {item.badge && (
              <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white rounded-full ${item.badgeColor || 'bg-gray-500'}`}>
                {getBadgeIcon(item.badge)}
                {item.badge}
              </span>
            )}
            {item.children && (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            )}
          </Link>

          {item.children && activeDropdown === item.label && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
              </div>
              
              <div className="py-2">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center gap-3">
                      {child.label === 'AI Implementation Checklist' && (
                        <BookOpen className="w-4 h-4 text-blue-500" />
                      )}
                      {child.label === 'AI 2025 Enterprise Guide' && (
                        <BookOpen className="w-4 h-4 text-green-500" />
                      )}
                      {child.label === 'Fortune 500 Success Story' && (
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                      )}
                      <span className="font-medium">{child.label}</span>
                    </div>
                    {child.badge && (
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white rounded-full ${child.badgeColor || 'bg-gray-500'}`}>
                        {getBadgeIcon(child.badge)}
                        {child.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              
              {item.label === 'Blog' && (
                <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">Latest Featured</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    AI 2025 Enterprise Automation Mastery - Complete implementation guide with 340% ROI case study
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export { ResponsiveNavigation };