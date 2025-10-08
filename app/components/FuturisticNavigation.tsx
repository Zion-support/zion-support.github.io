import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, Brain, Cpu, Shield, Globe, Sparkles } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      submenu: [
        { name: 'Micro SAAS', href: '/micro-saas', description: 'AI-powered tools starting at $79/month' },
        { name: 'AI Services', href: '/ai-services', description: 'Machine learning & automation' },
        { name: 'IT Services', href: '/it-services', description: 'Cloud, security & infrastructure' },
        { name: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen computing power' },
        { name: 'Autonomous Systems', href: '/autonomous-systems', description: 'Self-managing solutions' },
        { name: 'Blockchain & Web3', href: '/blockchain', description: 'Decentralized applications' },
        { name: 'IoT & Edge Computing', href: '/iot-edge', description: 'Connected device solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Advanced security services' }
      ]
    },
    {
      name: 'AI Solutions',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Technology',
      href: '/technology',
      icon: <Cpu className="w-4 h-4" />,
      submenu: [
        { name: 'Quantum Computing', href: '/quantum-computing', description: 'Revolutionary computing power' },
        { name: 'Autonomous Systems', href: '/autonomous-systems', description: 'Self-optimizing infrastructure' },
        { name: 'Blockchain Solutions', href: '/blockchain', description: 'Decentralized applications' },
        { name: 'IoT & Edge', href: '/iot-edge', description: 'Connected device ecosystem' }
      ]
    },
    {
      name: 'Security',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-[0_8px_32px_rgba(147,51,234,0.3)]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/20"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.submenu && <ChevronDown className="w-3 h-3" />}
                    </a>
                    
                    {/* Dropdown Menu */}
                    {item.submenu && (
                      <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-purple-500/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-purple-500/20 transition-all duration-200"
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-400 mt-1">{subItem.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="relative inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(34,211,238,0.4)] hover:shadow-[0_6px_20px_rgba(34,211,238,0.6)]"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-purple-500/20 transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/30">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                  {item.submenu && (
                    <div className="ml-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="block w-full text-center px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default FuturisticNavigation;