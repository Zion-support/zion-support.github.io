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
import React, { useState } from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';
            </Link>;
            {/* Submenu */}
            {item && item.submenu && activeItem === item && item.name && (;
              <motion&& motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0 && 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50"
                onMouseEnter={() => setActiveItem(item && item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >;
                <div className="py-2">;
                  {item && item.submenu.map((subItem) => (;
                    <Link
                      key={subItem && subItem.name}
                      href={subItem && subItem.href}
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
export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";
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
export default Component}
;