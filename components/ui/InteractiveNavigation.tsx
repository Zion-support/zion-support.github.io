
<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface NavigationItem {
  name: string, href: string
  submenu?: NavigationItem[];
}
interface InteractiveNavigationProps {
  items: NavigationItem[], className?: string
}
const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({
  items
  className = ''
}) => {
=======

interface NavigationItem {;
  name: string, href: string,;
  submenu?: NavigationItem[];
}

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
<<<<<<< HEAD
}
export default InteractiveNavigation;}
ursor/automate-test-fix-improve-and-merge-code-99d1,";
=======

};

export default InteractiveNavigation;};
ursor/automate-test-fix-improve-and-merge-code-99d1,";

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
export default Component}
<<<<<<< HEAD
=======

export default Component}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
