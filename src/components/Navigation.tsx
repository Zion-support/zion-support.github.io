<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Home } from 'lucide-react';
const,
  Navigation: React.FC = () => {return (}
    <div>Coming Soon</div>)
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Micro SAAS', path: '/micro-saas' },
      ]
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } ${className}`}>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                (302) 464-0950
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                info@ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs text-gray-300">Advanced AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-white hover:text-cyan-400 hover:bg-cyan-400/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      {activeDropdown === item.name ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-white hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-slate-800 rounded-lg p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-cyan-400 transition-colors"
                      >
                        <span>{item.name}</span>
                        {activeDropdown === item.name ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
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
>>>>>>> cursor/website-audit-and-update-with-deployment-d6fe
=======
import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl cyber-text neon-text">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 neon-glow"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="cyber-button px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-cyan-400/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="cyber-button block px-3 py-2 text-base font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
>>>>>>> cursor/analyze-improve-and-deploy-application-5803
  );
};
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    const _handleScroll = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const closeAllMenus = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    setIsOpen(false);
    setServicesOpen(false);
  return (<div>Coming Soon</div>)
  )
    
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${}
  // TOD,
  O: Add content;
}
//       isScrolled;
//         ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20'
        : 'bg-transparent'`
    }`}></nav>
          <div className="container mx-auto px-4"><div className="flex items-center justify-between h-16"></div>
          {/* Logo */}"
<Link to="/" className="flex items-center space-x-2 group"><div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hove,"
  r:scale-110 transition-transform duration-300"><span className="text-white font-bold text-lg">Z</span></div><div><h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1><p className="text-xs text-cyan-400">AI & IT Solutions</p></div></Link>
          {/* Desktop Menu */}"
          <div className="hidden,"
  lg:flex space-x-8"><Link to="/" className="text-white,"
  hover:text-cyan-400 transition-colors font-medium"></Link>
              Home;"
            </Link><Link to="/about" className="text-white,"
  hover:text-cyan-400 transition-colors font-medium"></Link>
              About;
            </Link>
            {/* Services Dropdown */}"
            <div className="relative group"><button className="flex items-center space-x-1 font-medium transition-colors,"
  hover:text-cyan-400 text-white"><span>Services</span><ChevronDown className="w-4 h-4 transition-transform duration-300 group-hove,"
  r:rotate-180" /></button>
              {servicesOpen && (}"
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hove,"
  r:translate-y-0"><div className="p-6"><h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3><div className="grid grid-cols-2 gap-4"></div>
                      {/* AI Services */}"
                      <div><h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Services</h4><div className="space-y-2"><Link to="/ai-analytics" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            AI Analytics;"
                          </Link><Link to="/ai-automation" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            AI Automation;"
                          </Link><Link to="/ai-content-generation" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            AI Content Generation;"
                          </Link><Link to="/ai-customer-support" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            AI Customer Support;
                          </Link></div></div>
                      {/* IT Services */}"
                      <div><h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">IT Services</h4><div className="space-y-2"><Link to="/it-services" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            IT Services;"
                          </Link><Link to="/cloud-migration" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            Cloud Migration;"
                          </Link><Link to="/devops" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            DevOps;"
                          </Link><Link to="/cybersecurity" className="block text-white,"
  hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}></Link>
                            Cybersecurity;"
                          </Link></div></div></div><div className="border-t border-gray-700 mt-6 pt-4"><Link></Link>"
                        to="/services" className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium,
  hover:from-cyan-600,"
  hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services;
                      </Link></div></div></div>)
              )}
            </div><Link></Link>"
              to="/case-studies" className="font-medium transition-colors,"
  hover:text-cyan-400 text-white"
              Case Studies;"
            </Link><Link to="/contact" className="text-white,"
  hover:text-cyan-400 transition-colors font-medium"></Link>
              Contact;
            {/* CTA Button */}
            <Link></Link>"
              to="/contact" className="cyber-button inline-flex items-center""
            ><Phone className="w-4 h-4 mr-2" /></Phone>
              (302) 464-0950;
            </Link></div>
          {/* Mobile Menu Button */}"
          <div className="l,"
  g:hidden"><button></button>"
              onClick={() => setIsOpen(!isOpen)} className="text-white,"
  hover:text-cyan-400 transition-colors""
              aria-label="Toggle menu""
{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button></div></div>
        {/* Mobile menu */}
        {isOpen && (}"
          <div className="l,"
  g:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"><div className="px-4 py-6 space-y-6"></div>
              {/* Main Navigation */}"
              <div className="space-y-4"><h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3><Link></Link>"
                  to="/" className="block text-white,"
  hover:text-cyan-400 transition-colors py-2"
                </Link><Link></Link>"
                  to="/about" className="block text-white,"
  hover:text-cyan-400 transition-colors py-2""
                  to="/services" className="block text-white,"
  hover:text-cyan-400 transition-colors py-2"
                  Services;"
                  to="/contact" className="block text-white,"
  hover:text-cyan-400 transition-colors py-2"
              {/* Contact Info */}"
              <div className="space-y-4"><h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3><a></a>"
                  href="te,"
  l:+13024640950" className="flex items-center space-x-3 text-white,"
  hover:text-cyan-400 transition-colors"")
                ><Phone className="w-5 h-5" /><span>(302) 464-0950</span></a><a></a>"
                  href="mailt,"
  o:kleber@ziontechgroup.com" className="flex items-center space-x-3 text-white,"
  hover:text-cyan-400 transition-colors"
                ><span>kleber@ziontechgroup.com</span></a><a></a>"
                  href="http,"
  s:// maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709""
                  target="_blank""
                  rel="noopener noreferrer" className="flex items-center space-x-3 text-white,"
  hover:text-cyan-400 transition-colors"
                >
          
          
          
          
          
          
          
          "
          <MapPin className="w-5 h-5" /><span>364 E Main St STE 1008<br />Middletown, DE 19709</span></a></div></div></div>
      </div></nav>
  );

export default Navigation;


