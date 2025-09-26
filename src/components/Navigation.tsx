import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-200'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>Z</span>
            </div>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className='p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
            </button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200'>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-gray-200 dark:border-gray-700'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className='w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200'
              >
                {isDarkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200'>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}