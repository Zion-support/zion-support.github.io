import React, {useState  useEffect } from 'react';
import Link from 'next/link';
import TaskManager from './TaskManager';

interface NavigationProps {currentTime?: Date;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void}

export default function Navigation({currentTime = newDate()isDarkMode = falseonToggleDarkMode = () => {}activeSection = ',
  onSectionChange = () => {}
}: NavigationProps): JSX.Element {const [isMenuOpensetIsMenuOpen] = useState(false);
  const [isScrolledsetIsScrolled] = useState(false);
  const [showTaskManagersetShowTaskManager] = useState(false);

  useEffect(() => {
    const  handleScroll = () => {
  handleScroll.displayName = 'handleScroll';
      setIsScrolled(window.scrollY > 50)};
    window.addEventListene('scroll'handleScroll);
    return () => window.removeEventListene('scroll'handleScroll)}[]);

  const scrollToSection = (sectionId: string) => {scrollToSection.displayName = 'scrollToSection';
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    const  element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'})}
  };

  return (<>
      <header  className={`fixedtop-0w-fullz-50transition-allduration-300 ${isScrolled?'bg-white/90dark:bg-gray-800/90backdrop-blur-mdshadow-lg':'bg-transparent'}`}>
        <div  className ="max-w-7, xl  mx-auto  px-4, sm:px-6, lg:px-8">
          <div  className ="flex  justify-between  items-center  h-16">
            <div  className ="flex  items-center">
              <h1  className ="text-2, xl  font-bold  text-gray-900, dark:text-white" id="zion-tech-group">                Zion  Tech  Group
              </h1>
            </div>
            
            {/* Desktop  Navigation */}
            <nav  className ="hidden  md:flex  items-center  space-x-6">
              <Link  href ="/" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                Home
              </Link>
              <Link  href ="/about" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                About
              </Link>
              <Link  href ="/services" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                Services
              </Link>
              <Link  href ="/portfolio" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                Portfolio
              </Link>
              <Link  href ="/blog" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                Blog
              </Link>
              <Link  href ="/faq" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                FAQ
              </Link>
              <Link  href ="/contact" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-medium  transition-colors">
                Contact
              </Link>
              <Link  href ="/dashboard" className="text-gray-600, dark:text-gray-300, hover:text-blue-600, dark:hover:text-blue-400, font-mediumtransition-colors">
                Dashboard
              </Link>
            </nav>


              <span  className ="text-smtext-gray-500dark:text-gray-400hidden  sm:block">

            <div className ="flex  items-centerspace-x-4">
              <span className ="text-smtext-gray-500dark:text-gray-400hidden sm:block">

                {currentTime?.toLocaleTimeString() || '--:--:--'}
              </span>
              <button

                onClick={(()) => {aria-label="{() => {

              {() => {
            aria-label="setShowTaskManager(true)}
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Open task manager"
                title="Task Manager"              >
                📝"> setShowTaskManager(true)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Open task manager"
                title="Task Manager"              >
                📝
              </button>
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              {/* MobileMenu  Button */}
              <button

                onClick={(()) => {aria-label="{() => {

              {() => {
            aria-label="setIsMenuOpen(!isMenuOpen)}
            </button>
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"              >
                {isMenuOpen ? '✕' : '☰'}"> setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile  Navigation */}
          {isMenuOpen && (<div  className ="md:hidden  bg-white  dark:bg-gray-800, border-t  border-gray-200, dark:border-gray-700">
              <div  className ="px-2, pt-2, pb-3, space-y-1">
                <Link  href ="/" className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  Home
                </Link>
                <Link  href ="/about" className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  About
                </Link>
                <Link  href ="/services" className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  Services
                </Link>
                <Link  href ="/portfolio" className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  Portfolio
                </Link>
                <Link  href ="/blog" className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  Blog
                </Link>
                <Link  href ="/faq" }
            className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  FAQ
                </Link>
                <Link  href ="/contact" }
            className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">
                  Contact
                </Link>
                <Link  href ="/dashboard" }
            className="block  w-full  text-left  px-3, py-2, rounded-md  text-base  font-medium  transition-colors  text-gray-600, dark:text-gray-300, hover:bg-gray-100, dark:hover:bg-gray-700">                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Task  Manager  Modal */}
      <TaskManager 
        isOpen={showTaskManager} 
        onClose={() => setShowTaskManager(false)}       />
    </>
  )}