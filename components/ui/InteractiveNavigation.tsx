import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

interface InteractiveNavigationProps {
  items: NavigationItem[];
  className?: string;
}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (item: NavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);
    const paddingLeft = level * 16;

    return (
      <div key={item.label}>
        <div
          className={`flex items-center py-2 px-3 hover:bg-gray-100 cursor-pointer`}
          style={{ paddingLeft: `${paddingLeft}px` }}
          onClick={() => hasChildren && toggleItem(item.label)}
        >
          {hasChildren && (
            <div className="mr-2">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
          {item.href ? (
            <Link href={item.href} className="flex-1 text-gray-700 hover:text-blue-600">
              {item.label}
            </Link>
          ) : (
            <span className="flex-1 text-gray-700">{item.label}</span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`bg-white border rounded-lg ${className}`}>
      {items.map(item => renderItem(item))}
    </nav>
  );
};

export default InteractiveNavigation;