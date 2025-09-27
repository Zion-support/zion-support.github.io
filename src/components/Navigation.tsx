import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TaskManager from './TaskManager';

interface NavigationProps {
  currentTime?: Date;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;}

export default function Navigation({
  currentTime = new Date(),
  isDarkMode = false,  onToggleDarkMode = () => {},
  activeSection = '',
  onSectionChange = () => {}
}: NavigationProps): JSX.Element {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTaskManager, setShowTaskManager] = useState(false);

  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 50);    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {;
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavio,    r: 'smooth' });
    }
  };

  return (
    <>
      <header className = {`fixed top-0w-full z-50transition-all duration-300 ${
        isScrolled 

          ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }` }>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2 xl font-bold text-gray-900 dark:text-white" id="zion-tech-group">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                Zion Tech Group
              </h1>
            </div>
            
            {/* Desktop Navigation */}            <nav className=hidden md: flex items-center space-x-6"">              <Link href=/"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Home
              </Link>              <Link href=/about"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                About
              </Link>              <Link href=/services"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Services
              </Link>              <Link href=/portfolio"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Portfolio
              </Link>              <Link href=/blog"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Blog
              </Link>              <Link href=/faq"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                FAQ
              </Link>              <Link href=/contact"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Contact
              </Link>              <Link href=/dashboard"" className="text-gray-600 dark:text-gray-300hover:text-blue-600dark:hover:text-blue-400font-medium transition-colors">
                Dashboard
              </Link>
            </nav>
            <div className=flex items-center space-x-4"">              <span className=text-sm text-gray-500dark:text-gray-400hidden s,
    m:block"">
                {currentTime?.toLocaleTimeString() || '--:--:--'}
              </span>
              <button
                onClick = {() => setShowTaskManager(true)}                aria-label=Open task manager""                className=p-2rounded-md hover: bg-gray-100dark:hove,
    r:bg-gray-700transition-colors""                title = Task Manager""
              >
                📝
              </button>
              <button
                onClick={onToggleDarkMode}                className=p-2rounded-md hover: bg-gray-100dark:hove,
    r:bg-gray-700transition-colors""                aria-label = Toggle dark mode""
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}                aria-label=Toggle mobile menu""                className=md: hidden p-2rounded-md hover:bg-gray-100dark:hove,
    r:bg-gray-700transition-colors""
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (            <div className=md: hidden bg-white dark:bg-gray-800border-t border-gray-200dark:border-gray-700"">              <div className=px-2pt-2pb-3space-y-1"">                <Link href=/"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  Home
                </Link>                <Link href=/about"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  About
                </Link>                <Link href=/services"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  Services
                </Link>                <Link href=/portfolio"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  Portfolio
                </Link>                <Link href=/blog"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  Blog
                </Link>                <Link href=/faq"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  FAQ
                </Link>                <Link href=/contact"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hover:bg-gray-700">
                  Contact
                </Link>                <Link href=/dashboard"" className="block w-full text-left px-3 py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark:hove,    r:bg-gray-700>
                  Dashboard
                </Link>
              </div>
            </div>          )}
        </div>
      </header>

      {/* Task Manager Modal */}
      <Task Manager 
        is Open={showTaskManager} 
        onClose={() => setShowTaskManager(false)} 
      />
    </>;
  );}"