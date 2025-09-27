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
      <header className = {`fixed top-0w-full z-5 0 transition-all duration-3 0 0 ${
        isScrolled 
          ? 'bg-white/9 0 dark:bg-gray-8 0 0/9 0 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'      }`}
        <div className="max-w-7xl mx-auto px-4sm: px-6lg:px-8">          <div className=flex justify-between items-center h-16"">            <div className=flex items-center"">              <h 1 className=text-2xl font-bold text-gray-90 0 dar,
    k:text-white"" id = "zion-tech-group">
                Zion Tech Group
              </h1>
            </div>
            
            {/* Desktop Navigation */}            <nav className=hidden md: flex items-center space-x-6"">              <Link href=/"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Home
              </Link>              <Link href=/about"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                About
              </Link>              <Link href=/services"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Services
              </Link>              <Link href=/portfolio"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Portfolio
              </Link>              <Link href=/blog"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Blog
              </Link>              <Link href=/faq"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                FAQ
              </Link>              <Link href=/contact"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Contact
              </Link>              <Link href=/dashboard"" className="text-gray-60 0 dark:text-gray-30 0 hover:text-blue-60 0 dark:hover:text-blue-40 0 font-medium transition-colors">
                Dashboard
              </Link>
            </nav>
            <div className=flex items-center space-x-4"">              <span className=text-sm text-gray-50 0 dark:text-gray-40 0 hidden s,
    m:block"">
                {currentTime?.toLocaleTimeString() || '--:--:--'}
              </span>
              <button
                onClick = {() => setShowTaskManager(true)}                aria-label=Open task manager""                className=p-2rounded-md hover: bg-gray-10 0 dark:hove,
    r:bg-gray-70 0 transition-colors""                title = Task Manager""
              >
                📝
              </button>
              <button
                onClick={onToggleDarkMode}                className=p-2rounded-md hover: bg-gray-10 0 dark:hove,
    r:bg-gray-70 0 transition-colors""                aria-label = Toggle dark mode""
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}                aria-label=Toggle mobile menu""                className=md: hidden p-2rounded-md hover:bg-gray-10 0 dark:hove,
    r:bg-gray-70 0 transition-colors""
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (            <div className=md: hidden bg-white dark:bg-gray-80 0 border-t border-gray-20 0 dark:border-gray-7 0 0"">              <div className=px-2pt-2pb-3space-y-1"">                <Link href=/"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  Home
                </Link>                <Link href=/about"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  About
                </Link>                <Link href=/services"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  Services
                </Link>                <Link href=/portfolio"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  Portfolio
                </Link>                <Link href=/blog"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  Blog
                </Link>                <Link href=/faq"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  FAQ
                </Link>                <Link href=/contact"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hover:bg-gray-7 0 0">
                  Contact
                </Link>                <Link href=/dashboard"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-60 0 dark:text-gray-30 0 hover:bg-gray-10 0 dark:hove,    r:bg-gray-7 0 0>
                  Dashboard
                </Link>
              </div>
            </div>          )}
        </div>
      </header>

      {/* Task Manager Modal */}
      <TaskManager 
        isOpen={showTaskManager} 
        onClose={() => setShowTaskManager(false)} 
      />
    </>;
  );}"