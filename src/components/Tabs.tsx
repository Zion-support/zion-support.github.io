import React, { useState } from 'react';
import { useAnalytics } from '../context/AnalyticsContext';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  variant = 'default',
  size = 'md',
  className = '',
  onTabChange
}) => {
  const { trackEvent } = useAnalytics();
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab?.disabled) return;

    setActiveTab(tabId);
    trackEvent('click', { element: 'tab', tabId });
    onTabChange?.(tabId);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  const getVariantClasses = (isActive: boolean) => {
    const baseClasses = `${getSizeClasses()} font-medium transition-colors duration-200 flex items-center space-x-2`;
    
    switch (variant) {
      case 'pills':
        return `${baseClasses} rounded-full ${
          isActive
            ? 'bg-blue-100 text-blue-700'
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`;
      case 'underline':
        return `${baseClasses} border-b-2 ${
          isActive
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`;
      default:
        return `${baseClasses} ${
          isActive
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`;
    }
  };

  const getContainerClasses = () => {
    switch (variant) {
      case 'pills':
        return 'flex space-x-1 p-1 bg-gray-100 rounded-lg';
      case 'underline':
        return 'flex space-x-8 border-b border-gray-200';
      default:
        return 'flex space-x-8 border-b border-gray-200';
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      <div className={getContainerClasses()}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            disabled={tab.disabled}
            className={`
              ${getVariantClasses(activeTab === tab.id)}
              ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        {activeTabContent}
      </div>
    </div>
  );
};