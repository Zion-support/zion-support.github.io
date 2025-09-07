<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
>>>>>>> origin/main

const InteractiveNavigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Interactive Nav</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default InteractiveNavigation;
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface NavigationItem {
  name: string, href: string
  submenu?: NavigationItem[];
=======
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
=======
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
=======
<<<<<<< HEAD
;




interface NavigationItem {}
  name: string, href: string;
  submenu?: NavigationItem[];
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

interface InteractiveNavigationProps {
  items: NavItem[];
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
  items,
  className = "",
}) => {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
}
interface InteractiveNavigationProps {}
  items: NavigationItem[], className?: string;
}
const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({}
  items;
  className = ''
}) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface NavigationItem {;
  name: string, href: string,;
  submenu?: NavigationItem[];
}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0 && 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50"
                onMouseEnter={() => setActiveItem(item && item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >;"
                <div className="py-2">;
                  {item && item.submenu.map((subItem) => (;
                    <Link;
                      key={subItem && subItem.name}
                      href={subItem && subItem.href}"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">;
                      {subItem && subItem.name}
                    </Link>;
                  ))}
                </div>;
              </motion && motion.div>;
            )}
          </li>;
        ))}
      </ul>;
    </nav>;
  );

};

export default InteractiveNavigation;};"
ursor/automate-test-fix-improve-and-merge-code-99d1,";

}
export default InteractiveNavigation;}"
ursor/automate-test-fix-improve-and-merge-code-99d1,";"
const InteractiveNavigation: React.FC: = () => {";"
    <nav className="bg-white shadow-lg">";";"
      <div: className="container mx-auto px-4">";";"
        <div: className="flex justify-between items-center py-4">";";"
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";"
          <div: className="hidden md:flex: space-x-8">",";"
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";
interface InteractiveNavigationProps {}
  items: NavigationItem[], class_name?: string,
}
const InteractiveNavigation: React.FC < InteractiveNavigationProps> = ({}
  items,'
  class_name = '';
}) => {}
  const [active_item, setActiveItem] = useState < string | null>(null);
;
  return (
    <nav className={`relative ${class_name}`}>;"
      <ul className="flex space - x-8">;
        {items.map ((item) => ("
          <li key={item.name} className="relative group">;
            <Link;
              href={item.href}"
              className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors duration - 200 flex items - center space - x-1";
              onMouseEnter={() => setActiveItem (item.name)}
              onMouseLeave={() => setActiveItem (null)}
            >;
              <span>{item.name}</span>;
              {item.submenu && (
                <svg;"
                  className="w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180";"
                  fill="none";"
                  stroke="current_color";"
                  view_box="0 0 24 24";
                >;
                  <path;"
                    stroke_linecap="round";"
                    stroke_linejoin="round";
                    stroke_width={2}"
                    d="M19 9l - 7 7 - 7-7";
                  />;
                </svg>)}
            </Link>;
{/* Submenu */}
            {item.submenu && active_item === item.name && (
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 10 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                exit={{ opacity: 0, coordinate_y: 10 }}
                transition={{ duration: 0.2 }}"
                className="absolute top - full left - 0 mt - 2 w - 64 bg - white rounded - lg shadow - lg border z - 50";
                onMouseEnter={() => setActiveItem (item.name)}
                onMouseLeave={() => setActiveItem (null)}
              >;"
                <div className="py - 2">;
                  {item.submenu.map ((sub_item) => (
                    <Link;
                      key={sub_item.name}
                      href={sub_item.href}"
                      className="block px - 4 py - 2 text - sm text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 transition - colors";
                    >;
                      {sub_item.name}
                    </Link>))}
                </div>;
              </motion.div>)}
          </li>))}
      </ul>;
    </nav>);
;
}
;
export default InteractiveNavigation;}"
ursor / automate - test - fix - improve - and - merge - code - 99d1, ";
;"
const InteractiveNavigation: React.FC: = () => {";"
    <nav className="bg - white shadow - lg">";";"
      <div: className="container mx - auto px - 4">";";"
        <div: className="flex justify - between items - center py - 4">";";"
          <div: className="text - xl font - bold text - gray - 800">Interactive Nav</div>";";"
          <div: className="hidden md:flex: space - x-8">", ";"
            <Link: href="/" className="text - gray - 600 hover:text - gray - 900: transition - colors">Home</Link>", ";"
            <Link: href="/services" className="text - gray - 600 hover:text - gray - 900: transition - colors">Services</Link>", ","
            <Link: href = "/about" className="text - gray - 600 hover:text - gray - 900: transition - colors">About</Link>", ";'"
            <Link: href="/contact" className="text - gray - 600 hover:text - gray - 900: transition - colors">Contact</Link>", ';

export default Component};
;

export default Component}
<<<<<<< HEAD
=======
const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ items, className = '' }) => {
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={"bg-white shadow-lg " + className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
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
                        {item.children.map((child) => (
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
            {items.map((item) => (
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
                        {item.children.map((child) => (
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
<<<<<<< HEAD
<<<<<<< HEAD
}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

};

<<<<<<< HEAD
export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";

<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg-white shadow-lg">";";
      <div: className="container mx-auto px-4">";";
        <div: className="flex justify-between items-center py-4">";";
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space-x-8">",";
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";
<<<<<<< HEAD

            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>",",;

            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface InteractiveNavigationProps {
  items: NavigationItem[], class_name?: string,
}
const InteractiveNavigation: React.FC < InteractiveNavigationProps> = ({
  items,
  class_name = '';
}) => {
  const [active_item, setActiveItem] = useState < string | null>(null);
;
  return (
    <nav className={`relative ${class_name}`}>;
      <ul className="flex space - x-8">;
        {items.map ((item) => (
          <li key={item.name} className="relative group">;
            <Link;
              href={item.href}
              className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors duration - 200 flex items - center space - x-1";
              onMouseEnter={() => setActiveItem (item.name)}
              onMouseLeave={() => setActiveItem (null)}
            >;
              <span>{item.name}</span>;
              {item.submenu && (
                <svg;
                  className="w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180";
                  fill="none";
                  stroke="current_color";
                  view_box="0 0 24 24";
                >;
                  <path;
                    stroke_linecap="round";
                    stroke_linejoin="round";
                    stroke_width={2}
                    d="M19 9l - 7 7 - 7-7";
                  />;
                </svg>)}
            </Link>;
{/* Submenu */}
            {item.submenu && active_item === item.name && (
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 10 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                exit={{ opacity: 0, coordinate_y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top - full left - 0 mt - 2 w - 64 bg - white rounded - lg shadow - lg border z - 50";
                onMouseEnter={() => setActiveItem (item.name)}
                onMouseLeave={() => setActiveItem (null)}
              >;
                <div className="py - 2">;
                  {item.submenu.map ((sub_item) => (
                    <Link;
                      key={sub_item.name}
                      href={sub_item.href}
                      className="block px - 4 py - 2 text - sm text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 transition - colors";
                    >;
                      {sub_item.name}
                    </Link>))}
                </div>;
              </motion.div>)}
          </li>))}
      </ul>;
    </nav>);
;
}
;
export default InteractiveNavigation;}
ursor / automate - test - fix - improve - and - merge - code - 99d1, ";
;
const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg - white shadow - lg">";";
      <div: className="container mx - auto px - 4">";";
        <div: className="flex justify - between items - center py - 4">";";
          <div: className="text - xl font - bold text - gray - 800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space - x-8">", ";
            <Link: href="/" className="text - gray - 600 hover:text - gray - 900: transition - colors">Home</Link>", ";
            <Link: href="/services" className="text - gray - 600 hover:text - gray - 900: transition - colors">Services</Link>", ",
            <Link: href = "/about" className="text - gray - 600 hover:text - gray - 900: transition - colors">About</Link>", ";
            <Link: href="/contact" className="text - gray - 600 hover:text - gray - 900: transition - colors">Contact</Link>", ';

export default Component}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

export default Component}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};

export default InteractiveNavigation;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default InteractiveNavigation;
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
'";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import Link from 'next/link';

const InteractiveNavigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Interactive Nav</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InteractiveNavigation;
<<<<<<< HEAD
=======
const InteractiveNavigation = () => {}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
