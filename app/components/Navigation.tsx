import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="b g"-slate-900shadow-lg >
      <div className="m a"" x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="f l"exjustify-between h-16 >
          <div className="f l"" ex items-center">
            <Link to="/"className="f l"" ex-shrink-0 flex items-center >
              <span className="t e"xt-2xl font-bold text-white">ZionTech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="h i"" dden md:flex items-center space-x-8 >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="{`p x"-3"py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-400 bg-slate-800'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="m d"" :hidden flex items-center >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="t e"xt-gray-300 hover:text-white focus:outline-none focus:text-white">
              {isOpen ? <X className="h-6w-6/> : <M e"nu className="h-6w-6"" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="m d":hidden>
            <div className="p x"" -2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="{`b l"ock" px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-400 bg-slate-700'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
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