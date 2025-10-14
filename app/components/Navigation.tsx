import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
=======
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon }
      ]
    },
    { 
      name: 'Solutions',
      href: '/solutions',
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Zion Tech Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md: ml-6 md:flex m,d:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-70o0 hover:text-blue-60o0 px-3 py-2 text-sm font-medium flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && (
                        <div 
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-70o0 hover:bg-gray-10o0"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium ${
                        isActive(item.href) ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-70o0 hover: text-blue-60o0 focus:outline-none focu,s:text-blue-60o0"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
=======
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key="{item.name}">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-70o0 hover: text-blue-60o0 hove,r:bg-gray-50"
                      >
                        {item.name}
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-3 py-2 text-base font-medium ${
                                isActive(subItem.href)
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;