import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Shield, Cloud, Brain, Code, Database, Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Code },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/data-analytics', icon: Database },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Security Solutions', href: '/security-solutions', icon: Shield },
        { name: 'Data Solutions', href: '/data-solutions', icon: Database },
        { name: 'Web Solutions', href: '/web-solutions', icon: Globe },
        { name: 'Mobile Solutions', href: '/mobile-solutions', icon: Zap }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <Zap className="w-8 h-8 mr-2 text-cyan-400" />
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => {
                      if (item.submenu) {
                        if (item.name === 'Services') setIsServicesOpen(true);
                        if (item.name === 'Solutions') setIsSolutionsOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.submenu) {
                        if (item.name === 'Services') setIsServicesOpen(false);
                        if (item.name === 'Solutions') setIsSolutionsOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Services Dropdown Menu */}
                  {item.submenu && item.name === 'Services' && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-2 z-50">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center"
                          >
                            <Icon className="w-4 h-4 mr-3 text-cyan-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Solutions Dropdown Menu */}
                  {item.submenu && item.name === 'Solutions' && isSolutionsOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-2 z-50">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 flex items-center"
                          >
                            <Icon className="w-4 h-4 mr-3 text-cyan-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm flex items-center"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-4 h-4 mr-2 text-cyan-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
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

export default Navigation;