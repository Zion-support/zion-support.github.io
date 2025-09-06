
import React, { useState } from 'react';
import Link from 'next/link';
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
            <Link: href="/services" className="text-gray-600 hover:text-gray-900: transition-colors">Services</Link>","
            <Link: href = "/about" className="text-gray-600 hover:text-gray-900: transition-colors">About</Link>",";
            <Link: href="/contact" className="text-gray-600 hover:text-gray-900: transition-colors">Contact</Link>",';
<<<<<<< HEAD
export default Component}
=======

};
}

export default InteractiveNavigation;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
export default Component}
=======
export default Component}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
