<<<<<<< HEAD
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
interface NavItem {
  // TODO: Implement
}
  label: string;,
  href: string;
  children?: NavItem[];

interface InteractiveNavigationProps {
  // TODO: Implement
  items: NavItem[];
  className?: string;

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
)
=======
interface InteractiveNavigationProps {
  items: NavItem[];
  className?: string;
}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
  items,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
<<<<<<< HEAD
    setActiveDropdown(activeDropdown === label ? null : label)
};

  return (
</string>
pr-12325
    <nav className={'bg-white shadow-lg ' + className}>
</nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center h-16">"
          <Link href="/" className="text-xl font-bold text-blue-600">"

"
          <div className="hidden md:flex items-center space-x-8">"
              <div key={item.label} className="relative">"
                  <div className="relative">"
</div>
                    <button;
                      onClick={() => toggleDropdown(item.label)}
</button>"
                      <ChevronDown className="w-4 h-4 ml-1" />"

                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">"
                          <Link;
                            key={child.href}
                            href={child.href}"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100""
                          >

                    href={item.href}"
                    className="text-gray-700 hover:text-blue-600""

            onClick={toggleMenu}"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600""
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"

          </button>
          <div className="md:hidden py-4 border-t border-gray-200">"
              <div key={item.label}>
                  <div>
                      <ChevronDown className="w-4 h-4" />"

                      <div className="pl-4">"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100""
                            onClick={() => setIsOpen(false)}
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
=======
                    className="text-gray-700 hover:text-blue-600"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
<<<<<<< HEAD
        )}
      </div>
    </nav>
  )
};
pr-12325

                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100""

      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>""
      <button className="md:hidden px-3 py-2 border rounded" onClick={() => setOpen(!open)}>Menu</button>""
        <div className="md:hidden mt-2 space-y-2">"
          <a href="/talent" className="block">Browse Talent</a>""
          <a href="/jobs" className="block">Browse Jobs</a>"
</string>"

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
};
pr-12325
=======

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
  )
};

export default InteractiveNavigation
};

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


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
