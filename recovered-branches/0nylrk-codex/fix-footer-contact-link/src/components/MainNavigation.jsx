import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
export function MainNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navigation = [
        {
            name: 'Services',
            href: '/services',
            dropdown: [
                { name: 'AI Solutions', href: '/services/ai' },
                { name: 'Cybersecurity', href: '/services/cybersecurity' },
                { name: 'Cloud Computing', href: '/services/cloud' },
                { name: 'IT Consulting', href: '/services/consulting' },
                { name: 'Digital Transformation', href: '/services/digital-transformation' }
            ]
        },
        {
            name: 'Solutions',
            href: '/solutions',
            dropdown: [
                { name: 'Enterprise AI', href: '/solutions/enterprise-ai' },
                { name: 'Quantum Computing', href: '/solutions/quantum' },
                { name: 'Autonomous Systems', href: '/solutions/autonomous' },
                { name: 'Blockchain', href: '/solutions/blockchain' },
                { name: 'IoT Platform', href: '/solutions/iot' }
            ]
        },
        {
            name: 'Industries',
            href: '/industries',
            dropdown: [
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'Finance', href: '/industries/finance' },
                { name: 'Manufacturing', href: '/industries/manufacturing' },
                { name: 'Retail', href: '/industries/retail' },
                { name: 'Education', href: '/industries/education' }
            ]
        },
        {
            name: 'Resources',
            href: '/resources',
            dropdown: [
                { name: 'Blog', href: '/blog' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'White Papers', href: '/white-papers' },
                { name: 'Webinars', href: '/webinars' },
                { name: 'Documentation', href: '/docs' }
            ]
        },
        {
            name: 'Company',
            href: '/about',
            dropdown: [
                { name: 'About Us', href: '/about' },
                { name: 'Leadership', href: '/leadership' },
                { name: 'Careers', href: '/careers' },
                { name: 'News', href: '/news' },
                { name: 'Contact', href: '/contact' }
            ]
        }
    ];
    const isActive = (path) => {
        if (path === '/')
            return location.pathname === '/';
        return location.pathname.startsWith(path);
    };
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg'
            : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-zion-slate-dark' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (<div key={item.name} className="relative group">
                <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(item.href)
                ? 'text-zion-cyan bg-zion-cyan/10'
                : isScrolled
                    ? 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'
                    : 'text-white hover:text-zion-cyan hover:bg-white/10'}`}>
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"/>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (<div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-xl shadow-2xl py-2 opacity-0 translate-y-2 animate-in slide-in-from-top-2 duration-300">
                    {item.dropdown.map((subItem) => (<Link key={subItem.name} to={subItem.href} className="block px-4 py-3 text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors duration-200" onClick={() => setActiveDropdown(null)}>
                        {subItem.name}
                      </Link>))}
                  </div>)}
              </div>))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
            ? 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'
            : 'text-white hover:text-zion-cyan hover:bg-white/10'}`}>
              <Search className="w-5 h-5"/>
            </button>

            {/* Notifications */}
            <button className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
            ? 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'
            : 'text-white hover:text-zion-cyan hover:bg-white/10'}`}>
              <Bell className="w-5 h-5"/>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${isScrolled
            ? 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'
            : 'text-white hover:text-zion-cyan hover:bg-white/10'}`}>
                <User className="w-5 h-5"/>
              </button>
              
              {/* User Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-xl shadow-2xl py-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                <Link to="/login" className="block px-4 py-3 text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors duration-200">
                  Sign In
                </Link>
                <Link to="/signup" className="block px-4 py-3 text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors duration-200">
                  Sign Up
                </Link>
                <Link to="/dashboard" className="block px-4 py-3 text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/5 transition-colors duration-200">
                  Dashboard
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled
            ? 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'
            : 'text-white hover:text-zion-cyan hover:bg-white/10'}`}>
            {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (<div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 mt-4 rounded-xl shadow-2xl">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (<div key={item.name}>
                  <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(item.href)
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/10'}`}>
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}/>
                    </div>
                  </button>
                  
                  {activeDropdown === item.name && (<div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (<Link key={subItem.name} to={subItem.href} className="block px-4 py-2 text-zion-slate-dark hover:text-zion-cyan hover:bg-zion-cyan/5 rounded-lg transition-colors duration-200" onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                        }}>
                          {subItem.name}
                        </Link>))}
                    </div>)}
                </div>))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-gray-200/20">
                <Link to="/contact" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>)}
      </div>
    </nav>);
}
