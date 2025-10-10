import React, { useState, useRef, useEffect } from 'react';
import { ARIA_LABELS, FOCUS_MANAGEMENT, KEYBOARD_SHORTCUTS } from '../utils/accessibilityUtils';

interface AccessibleMenuProps {
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    children?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const AccessibleMenu: React.FC<AccessibleMenuProps> = ({
  items,
  orientation = 'horizontal',
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case KEYBOARD_SHORTCUTS.ESCAPE:
          setIsOpen(false);
          setActiveIndex(null);
          break;
        case KEYBOARD_SHORTCUTS.ARROW_DOWN:
          e.preventDefault();
          setActiveIndex(prev => 
            prev === null ? 0 : Math.min(prev + 1, items.length - 1)
          );
          break;
        case KEYBOARD_SHORTCUTS.ARROW_UP:
          e.preventDefault();
          setActiveIndex(prev => 
            prev === null ? items.length - 1 : Math.max(prev - 1, 0)
          );
          break;
        case KEYBOARD_SHORTCUTS.HOME:
          e.preventDefault();
          setActiveIndex(0);
          break;
        case KEYBOARD_SHORTCUTS.END:
          e.preventDefault();
          setActiveIndex(items.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  const handleItemClick = (item: typeof items[0], index: number) => {
    if (item.onClick) {
      item.onClick();
    }
    setActiveIndex(index);
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, item: typeof items[0], index: number) => {
    if (e.key === KEYBOARD_SHORTCUTS.ENTER || e.key === KEYBOARD_SHORTCUTS.SPACE) {
      e.preventDefault();
      handleItemClick(item, index);
    }
  };

  return (
    <nav 
      className={`${orientation === 'horizontal' ? 'flex' : 'flex-col'} ${className}`}
      role="navigation"
      aria-label={ARIA_LABELS.MAIN_NAV}
    >
      <ul 
        ref={menuRef}
        className={`${orientation === 'horizontal' ? 'flex space-x-4' : 'space-y-2'}`}
        role="menubar"
      >
        {items.map((item, index) => (
          <li key={index} role="none">
            {item.href ? (
              <a
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => handleItemKeyDown(e, item, index)}
              >
                {item.label}
              </a>
            ) : (
              <button
                ref={el => itemRefs.current[index] = el}
                onClick={() => handleItemClick(item, index)}
                onKeyDown={(e) => handleItemKeyDown(e, item, index)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                role="menuitem"
                tabIndex={0}
                aria-expanded={item.children ? isOpen : undefined}
                aria-haspopup={item.children ? 'menu' : undefined}
              >
                {item.label}
              </button>
            )}
            
            {item.children && isOpen && activeIndex === index && (
              <ul
                className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10"
                role="menu"
                aria-label={`${item.label} submenu`}
              >
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} role="none">
                    <a
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      role="menuitem"
                      tabIndex={0}
                    >
                      <div className="font-medium">{child.label}</div>
                      {child.description && (
                        <div className="text-xs text-gray-500">{child.description}</div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface AccessibleBreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}

const AccessibleBreadcrumb: React.FC<AccessibleBreadcrumbProps> = ({
  items,
  className = ''
}) => {
  return (
    <nav 
      className={`${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span 
                className="text-sm font-medium text-gray-900"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { AccessibleMenu, AccessibleBreadcrumb };