interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface InteractiveNavigationProps {
  items: NavItem[];
  className?: string;
}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
  items,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={'bg-white shadow-lg ' + className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {items.map(item => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {items.map(item => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default InteractiveNavigation;
import React, { useState } from 'react';

export default function InteractiveNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <button className="md:hidden px-3 py-2 border rounded" onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="/talent" className="block">Browse Talent</a>
          <a href="/jobs" className="block">Browse Jobs</a>
        </div>
      )}
    </div>
  );
}
const InteractiveNavigation = () => {},;
export default InteractiveNavigation;

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavigationItem {
  name: string, href: string,
  submenu?: NavigationItem[];
}

interface InteractiveNavigationProps {
  items: NavigationItem[], className?: string,
}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className={`relative ${className}`}>
      <ul className="flex space-x-8">
        {items.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <span>{item.name}</span>
              {item.submenu && (
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* Submenu */}
            {item.submenu && activeItem === item.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="py-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );

};

export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";

const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg-white shadow-lg">";";
      <div: className="container mx-auto px-4">";";
        <div: className="flex justify-between items-center py-4">";";
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space-x-8">",";
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";
            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>",",
            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
export default Component}
main:components/ui/InteractiveNavigation.tsx
