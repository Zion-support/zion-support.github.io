import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
;
const Navigation: React.FC = () => {;,
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
;
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 50);,
};
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);,
}, []);
;
  const navigationItems = [;
    { name: 'Home', href: '/' },;
    { ;
      name: 'Services', ;
      href: '/services',;
      dropdown: [;,
        { name: 'AI Development', href: '/services/ai-development' },;
        { name: 'Cloud Architecture', href: '/services/cloud-architecture' },;
        { name: 'Cybersecurity', href: '/services/cybersecurity' },;
        { name: 'Data Analytics', href: '/services/data-analytics' },;
        { name: 'DevOps', href: '/services/devops' },;
      ];,
},;
    { ;
      name: 'Solutions', ;
      href: '/solutions',;
      dropdown: [;,
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },;
        { name: 'IoT Platforms', href: '/iot-platforms' },;
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },;
      ];,
},;
    { name: 'About', href: '/about' },;
    { name: 'Contact', href: '/contact' },;
  ];
;
  return (;
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;>
      isScrolled ;
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' ;
        : 'bg-transparent';,
}`}>;
      <div className="container mx-auto px-4">;
        <div className="flex items-center justify-between h-16">;
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-sm">Z</span>;
            </div>;
            <span className="text-white font-bold text-xl">Zion Tech</span>;
          </Link>;

          {/* Desktop Navigation */}
          <div className="hidden md: flex items-center space-x-8">;,
            {navigationItems.map((item) => (;
              <div key={item.name} className="relative group">;
                <Link;>
                  href={item.href}
                  className="text-white hover: text-blue-400 transition-colors duration-200 flex items-center space-x-1";,
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >;
                  <span>{item.name}</span>;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>;
                ;
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (;
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">;
                    {item.dropdown.map((dropdownItem) => (;
                      <Link;>
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-white hover: bg-white/10 transition-colors duration-200">;,
                        {dropdownItem.name}
                      </Link>;
                    ))}
                  </div>;
                )}
              </div>;
            ))}
          </div>;

          {/* CTA Button */}
          <div className="hidden md: flex items-center space-x-4">;,
            <Link;>
              href="/contact";
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">;,
              Get Started;
            </Link>;
          </div>;

          {/* Mobile Menu Button */}
          <button;>
            onClick={() => setIsOpen(!isOpen)}
            className="md: hidden text-white p-2";,
            aria-label="Toggle menu">;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>;
        </div>;

        {/* Mobile Navigation */}
        {isOpen && (;
          <div className="md: hidden bg-black/95 backdrop-blur-md border-t border-white/10">;,
            <div className="px-4 py-4 space-y-4">;
              {navigationItems.map((item) => (;
                <div key={item.name}>;
                  <Link;>
                    href={item.href}
                    className="block text-white hover: text-blue-400 transition-colors duration-200 py-2";,
                    onClick={() => setIsOpen(false)}
                  >;
                    {item.name}
                  </Link>;
                  {item.dropdown && (;
                    <div className="ml-4 space-y-2">;
                      {item.dropdown.map((dropdownItem) => (;
                        <Link;>
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-300 hover: text-blue-400 transition-colors duration-200 py-1";,
                          onClick={() => setIsOpen(false)}
                        >;
                          {dropdownItem.name}
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;
              ))}
              <div className="pt-4 border-t border-white/10">;
                <Link;>
                  href="/contact";
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover: from-blue-700 hover:to-purple-700 transition-all duration-200";,
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </div>;
        )}
      </div>;
    </nav>;
  );,
};
;
export default Navigation;