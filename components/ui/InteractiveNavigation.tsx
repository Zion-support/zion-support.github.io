import React, {_useState} from 'react';
import Link from 'next/link';

interface NavItem {_label: string;
  href: string;
  children?: NavItem[];}

<<<<<<< HEAD
<<<<<<< HEAD
interface InteractiveNavigationProps {
  items: NavItem[];
  className?: string;
}
=======
interface InteractiveNavigationProps {_items: NavItem[];
  className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = (_{_items, _className = '', _}) => {_const [isOpen, _setIsOpen] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  const _toggleMenu = () => setIsOpen(!isOpen);
  const _toggleDropdown = (_label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);};

  return (_<nav className={_'bg-white shadow-lg ' + className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {_items.map(item => (
              <div key={item.label} className="relative">
                {_item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      {_item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {_activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={_child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {_child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={_item.href}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {_item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={_toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {_isOpen && (_<div className="md:hidden py-4 border-t border-gray-200">
            {items.map(item => (
              <div key={item.label}>
                {_item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      {_item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {_activeDropdown === item.label && (_<div className="pl-4">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={_child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                            onClick={_() => setIsOpen(false)}
                          >
                            {_child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (_<Link
                    href={_item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={_() => setIsOpen(false)}
                  >
                    {_item.label}
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
<<<<<<< HEAD
=======
export default InteractiveNavigation;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
import React, { useState } from 'react';

export default function InteractiveNavigation() {
  const [open, setOpen] = useState(false),
  return (
    <div>
      <a href=&quot;#main&quot; className=&quot;sr-only focus:not-sr-only&quot;>Skip to content</a>
      <button className=&quot;md:hidden px-3 py-2 border rounded&quot; onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className=&quot;md:hidden mt-2 space-y-2&quot;>
          <a href=&quot;/talent&quot; className=&quot;block&quot;>Browse Talent</a>
          <a href=&quot;/jobs&quot; className=&quot;block&quot;>Browse Jobs</a>
        </div>
      )}
    </div>
  ),
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
