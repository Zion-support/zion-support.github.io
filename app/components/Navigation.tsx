import React, { useState } from 'react';
import { Link,  useLocation , Bars3Icon,  
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
  GlobeAltIcon;'}
 } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = ['}
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { '
      name: 'Services', '
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: ['}
        { name: 'AI Solutions', href: '/ai-solutions' },'
        { name: 'IT Solutions', href: '/it-solutions' },'
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
        { name: 'Cybersecurity', href: '/cybersecurity' },'
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },'
        { name: 'Digital Transformation', href: '/digital-transformation' },'
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },

>>>>>>> origin/main
  ];

  const isActive = (path: string) => {
    return location.pathname === path;}
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">

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
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (}
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link}
                            key={subItem.name}
                            to={subItem.href}
                            className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;'