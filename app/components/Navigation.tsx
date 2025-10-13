import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'AI Services', 
      href: '/ai-services',
      submenu: [
        { name: 'AI Analytics', href: '/ai-services/business-intelligence' },
        { name: 'Content Generation', href: '/ai-services/content-generation' },
        { name: 'Customer Experience', href: '/ai-services/customer-experience' },
        { name: 'Document Processing', href: '/ai-services/document-processing' },
        { name: 'Energy Management', href: '/ai-services/energy-management' },
        { name: 'Fraud Detection', href: '/ai-services/fraud-detection' },
        { name: 'HR Analytics', href: '/ai-services/hr-analytics' },
        { name: 'Marketing Automation', href: '/ai-services/marketing-automation' },
        { name: 'Predictive Maintenance', href: '/ai-services/predictive-maintenance' },
        { name: 'Process Automation', href: '/ai-services/process-automation' },
        { name: 'Quality Assurance', href: '/ai-services/quality-assurance' },
        { name: 'Supply Chain', href: '/ai-services/supply-chain' }
      ]
    },
    { 
      name: '5G Solutions', 
      href: '/5g-solutions',
      submenu: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: 'Edge Computing', href: '/5g-edge-computing' },
        { name: 'Implementation', href: '/5g-implementation' },
        { name: 'IoT Solutions', href: '/5g-iot-solutions' },
        { name: 'Mobile Applications', href: '/5g-mobile-applications' },
        { name: 'Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: 'Private Networks', href: '/5g-private-networks' },
        { name: 'Smart City Solutions', href: '/5g-smart-city-solutions' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
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
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onMouseEnter={() => {
                      if (item.name === 'AI Services') setIsServicesOpen(true);
                      if (item.name === '5G Solutions') setIs5GServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'AI Services') setIsServicesOpen(false);
                      if (item.name === '5G Solutions') setIs5GServicesOpen(false);
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && ((item.name === 'AI Services' && isServicesOpen) || (item.name === '5G Solutions' && is5GServicesOpen)) && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
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

        {/* Mobile */}
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
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
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