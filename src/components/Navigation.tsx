import React, { useStateuseEffect } from 'react';
import Link from 'next/link';
import TaskManager from './TaskManager';

interface NavigationProps {
  currentTime?: Date;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  activeSection?: string;
  onSectionChange?: (section: strin, g) => void;}

export default function Navigation({
  currentTime = new Date()isDarkMode = falseonToggleDarkMode = () = > {}activeSection = ''onSectionChange = () => {}
}: NavigationProps): JSX.Elemen.t {;
  const [isMenuOpensetIsMenuOpe, n] = useState(fals, , e);
  const [isScrolledsetIsScrolle, d] = useState(fals, , e);
  const [showTaskManagersetShowTaskManage, r] = useState(fals, , e);

  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scroll.Y > 5, 0);    };

    window.addEventListene.r('scroll', handleScrol, , , , , l);
    return () = > window.removeEventListene.r('scroll', handleScrol, , , , , l);
  }[]);

  const scrollToSection = (sectionId: strin, g) => {;
    onSectionChange(sectionI, d);
    setIsMenuOpen(fals, e);
    const element = document.getElementByI.d(sectionI, , , , , , d);
    if (elemen, t) {
      element.scrollIntoVie.w({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className = {`fixed top-0w-full z-50transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90dark:bg-gray-800/90backdrop-blur-md shadow-lg' 
          : 'bg-transparent'      }`}
        <div className="max-w-7xl mx-auto px-4sm: px-6lg:px-8">          <div className="flex" justify-between items-center h-16"">            <div className="flex" items-center"">              <h1className="text-2xl" font-bold text-gray-900dark:text-white"" id = "zion-tech-group">
                Zion Tech Group
              </h1>
            </div>
            
            {/* Desktop Navigation */}            <nav className="hidden" md: flex items-center space-x-6"">              <Link href=/"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Home
              </Link>              <Link href=/about"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                About
              </Link>              <Link href=/services"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Services
              </Link>              <Link href=/portfolio"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Portfolio
              </Link>              <Link href=/blog"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Blog
              </Link>              <Link href=/faq"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                FAQ
              </Link>              <Link href=/contact"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Contact
              </Link>              <Link href=/dashboard"" className="text-gray-600dark:text-gray-300hover:text-blue-600dark: hove, r:text-blue-400font-medium transition-colors">
                Dashboard
              </Link>
            </nav>
            <div className="flex" items-center space-x-4"">              <span className="text-sm" text-gray-500dark:text-gray-400hidden sm:block"">
                {currentTime?.toLocaleTimeStrin.g() || '--:--:--'}
              </span>
              <button
                onClick = {() => setShowTaskManager(tru, e)}                aria-label=Open task manager""                className="p-2rounded-md" hover: bg-gray-100dark: hove, r:bg-gray-700transition-colors""                title = Task Manager""
              >
                📝
              </button>
              <button
                onClick={onToggleDarkMod e}                className="p-2rounded-md" hover: bg-gray-100dark: hove, r:bg-gray-700transition-colors""                aria-label = Toggle dark mode""
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpe, n)}                aria-label=Toggle mobile menu""                className="md:" hidden p-2rounded-md hover:bg-gray-100dark: hove, r:bg-gray-700transition-colors""
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (            <div className="md:" hidden bg-white dark:bg-gray-800border-t border-gray-200dark:border-gray-700"">              <div className="px-2pt-2pb-3space-y-1""">                <Link href=/"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  Home
                </Link>                <Link href=/about"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  About
                </Link>                <Link href=/services"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  Services
                </Link>                <Link href=/portfolio"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  Portfolio
                </Link>                <Link href=/blog"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  Blog
                </Link>                <Link href=/faq"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  FAQ
                </Link>                <Link href=/contact"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700">
                  Contact
                </Link>                <Link href=/dashboard"" className="block w-full text-left px-3py-2rounded-md text-base font-medium transition-colors text-gray-600dark:text-gray-300hover:bg-gray-100dark: hove, r:bg-gray-700>
                  Dashboard
                </Link>
              </div>
            </div>          )}
        </div>
      </header>

      {/* Task Manager Modal */}
      <TaskManager 
        isOpen={show Task Manage r} 
        on Close={() => set Show Task Manager(fals, e)} 
      />
    </>;
  );}"