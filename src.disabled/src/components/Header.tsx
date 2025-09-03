import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
;
interface HeaderProps {};
}
;
const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {};
    { name: 'Home', href: '/' },;
    { name: 'Services', href: '/services' },;
    { name: 'Solutions', href: '/solutions' },;
    { name: 'About', href: '/about' },;
    { name: 'Contact', href: '/contact' },;
  ];
;
  return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center py-4">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link href="/" className="flex items-center">;
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-lg">Z</span>;
              </div>;
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">;
            {};
                {item.name}
              </Link>;
            ))}
          </nav>;

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">;
            <div>Broken JSX</div>
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">;
              Get Started;
            </Link>;
          </div>;

          {/* Mobile menu button */}
          <div className="md:hidden">;
            <div>Broken JSX</div>
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">;
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;

        {/* Mobile Navigation */}
        {};
                  onClick={() => setIsOpen(false)}
                >;
                  {item.name}
                </Link>;
              ))}
              <div>Broken JSX</div>
                onClick={() => setIsOpen(false)}
              >;
                Get Started;
              </Link>;
            </div>;
          </div>;
        )}
      </div>;
    </header>;
  );,
};
;
export default Header;