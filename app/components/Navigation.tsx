import React, { useState } from &apos;react&apos;;
import { Link, useLocation } from &apos;react-router-dom&apos;;
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CogIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  Bars3Icon,
  ChevronDownIcon
} from &apos;@heroicons/react/24/outline&apos;;


interface NavigationProps {onSidebarToggle?: () => void}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: &apos;Home&apos;, href: &apos;/&apos;, icon: HomeIcon },
    { name: &apos;About&apos;, href: &apos;/about&apos;, icon: InformationCircleIcon },
    {name: &apos;Services&apos;, 
      href: &apos;/services&apos;, 
      icon: BriefcaseIcon,
      submenu: [
        { name: &apos;AI Solutions&apos;, href: &apos;/ai-solutions&apos},
        {name: &apos;IT Solutions&apos;, href: &apos;/it-solutions&apos},
        {name: &apos;Micro SaaS Solutions&apos;, href: &apos;/micro-saas-solutions&apos},
        {name: &apos;Cybersecurity&apos;, href: &apos;/cybersecurity&apos},
        {name: &apos;Cloud Infrastructure&apos;, href: &apos;/cloud-solutions&apos},
        {name: &apos;Digital Transformation&apos;, href: &apos;/digital-transformation&apos},
        {name: &apos;5G Solutions&apos;, href: &apos;/5g-solutions&apos}
      ]
    },
    {name: &apos;Solutions&apos;, 
      href: &apos;/solutions&apos;, 
      icon: CogIcon,
      submenu: [
        { name: &apos;AI Services&apos;, href: &apos;/ai-services&apos},
        {name: &apos;IT Services&apos;, href: &apos;/it-services&apos},
        {name: &apos;Cloud Infrastructure&apos;, href: &apos;/cloud-infrastructure&apos},
        {name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos}
      ]
    },
    { name: &apos;Pricing&apos;, href: &apos;/pricing&apos;, icon: CurrencyDollarIcon },
    { name: &apos;Blog&apos;, href: &apos;/blog&apos;, icon: DocumentTextIcon },
    { name: &apos;Tutorials&apos;, href: &apos;/tutorials&apos;, icon: AcademicCapIcon },
    { name: &apos;Demo&apos;, href: &apos;/demo&apos;, icon: PlayIcon },
    { name: &apos;Support&apos;, href: &apos;/support&apos;, icon: QuestionMarkCircleIcon },
    { name: &apos;Contact&apos;, href: &apos;/contact&apos;, icon: PhoneIcon }
  ];

  const isActive = (path: string) => {;
    return location.pathname === path};
  
  const toggleServicesMenu = () => {;
    setIsServicesOpen(!isServicesOpen)};
  
  const toggleSolutionsMenu = () => {;
    setIsSolutionsOpen(!isSolutionsOpen)};
  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 neon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform cyber-glow">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {;
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? &apos;bg-purple-600 text-white&apos;
                        : &apos;text-gray-300 hover:text-white hover:bg-slate-800&apos}`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={() => setIsServicesOpen(false)}                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>;
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? &apos;block&apos; : &apos;hidden&apos}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={item.name === &apos;Services&apos; ? toggleServicesMenu : toggleSolutionsMenu}
                    className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href) || (item.submenu && item.submenu.some(sub => isActive(sub.href)))
                        ? &apos;text-white bg-slate-700&apos;
                        : &apos;text-gray-300 hover:text-white hover:bg-slate-700&apos}`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4 ml-auto" />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div className={`pl-6 ${(item.name === &apos;Services&apos; ? isServicesOpen : isSolutionsOpen) ? &apos;block&apos; : &apos;hidden&apos}`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                        onClick={() => {;
                          setIsOpen(false);
                          setIsServicesOpen(false);
                          setIsSolutionsOpen(false)}}
                      >
                        <div className="w-4 h-4 mr-3" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? &apos;text-white bg-slate-700&apos;
                      : &apos;text-gray-300 hover:text-white hover:bg-slate-700&apos}`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>;
  );
}
export default Navigation;