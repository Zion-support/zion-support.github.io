import React, { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Menu, X } from 'lucide-react'
=======
<<<<<<< HEAD
import { Menu, X } from 'lucide-react'
=======
import {Menu, X } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-1a8c
>>>>>>> cursor/fix-errors-and-merge-to-main-2368
const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigationItems = [
    { name: 'Home', href: '/' },
<<<<<<< HEAD
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
=======
<<<<<<< HEAD
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
=======
    {name: 'Services', href: '/services' },
    {name: 'About', href: '/about' },
    {name: 'Contact', href: '/contact' },
>>>>>>> cursor/fix-errors-and-merge-to-main-1a8c
>>>>>>> cursor/fix-errors-and-merge-to-main-2368
  ];
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
export default EnhancedHeader;