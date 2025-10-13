import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, CpuChipIcon, ShieldCheckIcon, CloudIcon, ChartBarIcon, GlobeAltIcon, RocketLaunchIcon } from 'lucide-react';
import NeonButton from './NeonButton';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon, description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', icon: CloudIcon, description: 'Cloud & infrastructure' },
        { name: 'Security', href: '/security', icon: ShieldCheckIcon, description: 'Cybersecurity solutions' },
        { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, description: 'Data & insights' },
        { name: '5G Solutions', href: '/5g-solutions', icon: RocketLaunchIcon, description: 'Next-gen connectivity' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon, description: 'Custom applications' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50 shadow-lg shadow-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-300">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10"
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="inline w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {/* Enhanced Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/20 py-4 z-50 border border-slate-700/50">
                      <div className="grid grid-cols-2 gap-4 px-4">
                        {item.submenu.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link key={subItem.name}
                              to={subItem.href}
                              className="group/sub flex items-center p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover/sub:scale-110 transition-transform duration-300">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-white font-semibold text-sm">{subItem.name}</div>
                                <div className="text-gray-400 text-xs">{subItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <NeonButton href="/contact" variant="primary" size="md">
              Get Started
            </NeonButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-800/95 backdrop-blur-md rounded-2xl mt-4 border border-slate-700/50 shadow-2xl shadow-purple-500/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link to={item.href}
                    className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-medium hover:bg-slate-700/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link key={subItem.name}
                            to={subItem.href}
                            className="flex items-center text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700/30 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-4 h-4 mr-3" />
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700/50">
                <NeonButton href="/contact" variant="primary" size="md" className="w-full justify-center">
                  Get Started
                </NeonButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;