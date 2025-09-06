import React, { useState } from 'react';
import Link from 'next / link';
import { Menu, X } from 'lucide-react';
const EnhancedNavigation: React.FC = () => {
  const [is_open, setIsOpen] = useState (false);
  const navigation_items = [;
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text - gray - 700 hover:text - blue - 600 transition - colors";
              >;
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text - gray - 700 hover:text - blue - 600 py - 2";
                  on_click={() => setIsOpen (false)}
                >;
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default EnhancedNavigation;
                </Link>))}
            </div>;
          </div>)}
      </div>;
    </nav>);
}
;
export default EnhancedNavigation;
