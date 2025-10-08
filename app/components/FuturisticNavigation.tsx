import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Star } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: '🤖' },
        { name: 'Micro SAAS', href: '/micro-saas', icon: '💻' },
        { name: 'IT Services', href: '/it-services', icon: '⚙️' },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: '⚛️' },
        { name: 'Autonomous Systems', href: '/autonomous-systems', icon: '🔄' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: '⛓️' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: '🛡️' },
        { name: 'Business Intelligence', href: '/business-intelligence', icon: '📊' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: '📡' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise', icon: '🏢' },
        { name: 'Startup Solutions', href: '/startup-solutions', icon: '🚀' },
        { name: 'Government Solutions', href: '/government-solutions', icon: '🏛️' },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: '🏥' },
        { name: 'Financial Solutions', href: '/financial-solutions', icon: '💰' },
        { name: 'Education Solutions', href: '/education-solutions', icon: '🎓' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Matrix Rain Background */}
      <div className="matrix-rain"></div>
      
      {/* Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold neon-text">Zion Tech</span>
                <span className="text-xs text-cyan-400 font-medium">Group</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-80 glass-card p-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                          <div className="grid grid-cols-2 gap-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-2xl">{dropdownItem.icon}</span>
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {dropdownItem.name}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="cyber-button"
              >
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-card m-4 p-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-white hover:text-cyan-400 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-6 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <span className="text-xl">{dropdownItem.icon}</span>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 p-3 text-white hover:text-cyan-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-cyan-500/30">
              <a
                href="tel:+13024640950"
                className="block w-full cyber-button text-center"
                onClick={() => setIsOpen(false)}
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Info Banner */}
      <div className="fixed bottom-4 right-4 z-40 glass-card p-4 space-y-2 animate-in slide-in-from-bottom-2 duration-500">
        <div className="text-sm text-cyan-400 font-medium">Contact Us</div>
        <div className="space-y-1 text-xs text-white">
          <div>📞 +1 302 464 0950</div>
          <div>✉️ kleber@ziontechgroup.com</div>
          <div>📍 Middletown DE 19709</div>
        </div>
      </div>
    </>
  );
};

export default FuturisticNavigation;