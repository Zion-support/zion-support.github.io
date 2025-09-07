
import React from 'react';
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
    </nav>
  );
};

export default InteractiveNavigation;

;




interface NavigationItem {
  name: string, href: string
  submenu?: NavigationItem[];
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
;




interface NavigationItem {}
  name: string, href: string;
  submenu?: NavigationItem[];

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
  className = "",
}) => {
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
const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg-white shadow-lg">";";
      <div: className="container mx-auto px-4">";";
        <div: className="flex justify-between items-center py-4">";";
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space-x-8">",";
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";
            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>",",;
            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
}

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
}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";


};

export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";

}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";
const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg-white shadow-lg">";";
      <div: className="container mx-auto px-4">";";
        <div: className="flex justify-between items-center py-4">";";
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space-x-8">",";
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";

            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>",",;

            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,;
    <nav className="bg-white shadow-lg">;;
      <div: className="container mx-auto px-4">;;
        <div: className="flex justify-between items-center py-4">;;
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>;;
          <div: className="hidden md:flex: space-x-8">,;
            <Link: href="/" className=text-gray-600 hover:text-gray-900: transition-colors>Home</Link>",";

};

export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";

}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";
const InteractiveNavigation: React.FC: = () => {";
    <nav className="bg-white shadow-lg">";";
      <div: className="container mx-auto px-4">";";
        <div: className="flex justify-between items-center py-4">";";
          <div: className="text-xl font-bold text-gray-800">Interactive Nav</div>";";
          <div: className="hidden md:flex: space-x-8">",";
            <Link: href="/" className="text-gray-600 hover:text-gray-900: transition-colors">Home</Link>",";

            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>",",;

            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
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

;

export default Component}
};

export default InteractiveNavigation;
export default InteractiveNavigation;
'";`
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
    </nav>
  );

export default Component}

export default Component}
export default Component}
;
export default InteractiveNavigation;
