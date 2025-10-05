import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [
=======
import { Menu, X } from 'lucide-react';

const EnhancedHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const navigation_items = [
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
<<<<<<< HEAD
=======

const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  const closeMobileMenu = () => {
    setIsOpen(false);
  };
<<<<<<< HEAD
  return (
    <header className='bg-white shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/' className='text-2xl font-bold text-blue-600'>
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-700 hover:text-blue-600 transition-colors'
=======

return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
{navigation_items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
              >
                {item.name}
              </Link>
            ))}
          </nav>
<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
=======

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
        </div>
        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            {navigationItems.map(item => (
              <div key={item.name}>
=======
        {isMobileMenuOpen && (
          <div className="md:hidden">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation_items.map((item) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
                <Link
                  to={item.href}
                  className='block text-gray-700 hover:text-blue-600 py-2'
                  onClick={closeMobileMenu}
<<<<<<< HEAD
=======
className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
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
