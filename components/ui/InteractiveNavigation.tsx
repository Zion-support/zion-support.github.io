import React from 'react';
import Link from 'next/link';

const InteractiveNavigation = () => {
  return (
    <nav className={`relative ${className}`}>
      <ul className="flex space-x-8">
        {items.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}><span>{item.name}</span>
              {item.submenu && (
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"><path
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
                onMouseLeave={() => setActiveItem(null)}><div className="py-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{subItem.name}
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

export default InteractiveNavigation;