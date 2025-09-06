
ursor/automate-test-improve-and-merge-code-646c
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
import { Menu, X } from 'lucide-react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search (Ctrl+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" }
  ];

>>>>>>> main
import Button from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
ursor/integrate-build-improve-and-re-verify-9d47

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick?.();
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { name: 'Mobile Development', href: '/services/mobile-development' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
import Link from 'next/link';
import React from 'react';

>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">

            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>

            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
ursor/automate-test-improve-and-merge-code-646c
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">Z</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >

            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
ursor/automate-test-improve-and-merge-code-646c
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};


export default Header;

export default Header;
export default Header;
export default Header;
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
export default Header;
export default Header;
export default Header;
export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default Header;
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
;
const Header = () = > {; const [isMenuOpen, setIsMenuOpen] = useState(false); const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
; const navigation = [; {; name: 'Home',
    href: '/'}; {; name: 'Services', href: '/services', dropdown: [
    ; { name: 'AI Services', href: '/ai-services' }; { name: 'IT Services', href: '/it-services' }; { name: 'Micro SaaS', href: '/micro-saas' }; { name: 'Cloud Solutions', href: '/solutions/cloud-migration' }; { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Data Analytics', href: '/services/data-analytics' }
  ]}; {; name: 'Solutions', href: '/solutions', dropdown: [
    ; { name: 'Enterprise Solutions', href: '/solutions/enterprise' }; { name: 'Healthcare', href: '/solutions/healthcare' }; { name: 'Finance', href: '/solutions/finance' }; { name: 'Government', href: '/solutions/government' }; { name: 'Retail', href: '/solutions/retail' },
    { name: 'Education', href: '/solutions/education' }
  ]}; {; name: 'Industries', href: '/industries', dropdown: [
    ; { name: 'Financial Services', href: '/industries/financial' }; { name: 'Healthcare', href: '/industries/healthcare' }; { name: 'Manufacturing', href: '/industries/manufacturing' }; { name: 'Retail', href: '/industries/retail' },
    { name: 'Government', href: '/industries/government' }
  ]}; {; name: 'Company', href: '/about', dropdown: [
    ; { name: 'About Us', href: '/about' }; { name: 'Our Team', href: '/team' }; { name: 'Careers', href: '/careers' }; { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/case-studies' }
  ]}; {; name: 'Resources', href: '/resources', dropdown: [
    ; { name: 'Blog', href: '/blog' }; { name: 'White Papers', href: '/white-papers' }; { name: 'Webinars', href: '/webinars' }; { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Documentation', href: '/api-docs' }
  ]}; {; name: 'Contact',
    href: '/contact'}; ];
; const toggleMenu = () = > setIsMenuOpen(!isMenuOpen); const toggleDropdown = (name: string) = > {; setActiveDropdown(activeDropdown = = = name ? null: name)};
; return (; <header className = "bg-white shadow-lg sticky top-0 z-50">; {/* Top Bar */}; <div className = "bg-blue-900 text-white py-2">; <div className = "container mx-auto px-4">; <div className = "flex flex-col md: flex-row justify-between items-center text-sm">, <div className = "flex items-center space-x-6 mb-2 md:mb-0">, <div className = "flex items-center space-x-2">; <Phone className = "w-4 h-4" />; <span>+1 302 464 0950</span>; </div>; <div className = "flex items-center space-x-2">; <Mail className = "w-4 h-4" />; <span>kleber@ziontechgroup.com</span>; </div>; </div>; <div className = "flex items-center space-x-2">; <MapPin className = "w-4 h-4" />; <span>364 E Main St STE 1008, Middletown, DE 19709</span>; </div>; </div>; </div>; </div>; {/* Main Navigation */}; <nav className = "container mx-auto px-4 py-4">; <div className = "flex justify-between items-center">; {/* Logo */}; <Link href = "/" className = "flex items-center space-x-2">; <div className = "w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">; <span className = "text-white font-bold text-xl">Z</span>; </div>; <div>; <h1 className = "text-2xl font-bold text-gray-900">Zion Tech Group</h1>; <p className = "text-sm text-gray-600">AI & Technology Solutions</p>; </div>; </Link>; {/* Desktop Navigation */}; <div className = "hidden lg: flex items-center space-x-8">, {navigation.map((item) = > (, <div key = {item.name} className = "relative group">; <button; onClick = {() = > item.dropdown && toggleDropdown(item.name)}; className = "flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">; <Link href = {item.href}>{item.name}</Link>; {item.dropdown && (; <ChevronDown className = {`w-4 h-4 transition-transform duration-200 ${, activeDropdown = = = item.name ? 'rotate-180': ''}`} />)}; </button>; {/* Dropdown Menu */}; {item.dropdown && (; <AnimatePresence>; {activeDropdown = = = item.name && (; <motion.div; initial = {{ opacity: 0, y: 10 }}; animate = {{ opacity: 1, y: 0 }}; exit = {{ opacity: 0, y: 10 }}; className = "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">; {item.dropdown.map((subItem) = > (; <Link; key = {subItem.name}; href = {subItem.href}; className = "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"; onClick = {() = > setActiveDropdown(null)}>; {subItem.name}; </Link>; ))}; </motion.div>; )}; </AnimatePresence>; )}; </div>; ))}; </div>; {/* Mobile Menu Button */}; <button; onClick = {toggleMenu}; className = "lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">; {isMenuOpen ? <X className = "w-6 h-6" />: <Menu className = "w-6 h-6" />}; </button>; </div>; {/* Mobile Navigation */}; <AnimatePresence>; {isMenuOpen && (; <motion.div; initial = {{ opacity: 0, height: 0 }}; animate = {{ opacity: 1, height: 'auto' }}; exit = {{ opacity: 0, height: 0 }}; className = "lg: hidden mt-4 border-t border-gray-200 pt-4">, {navigation.map((item) = > (, <div key = {item.name} className = "mb-2">; <div className = "flex items-center justify-between">; <Link; href = {item.href}; className = "text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"; onClick = {() = > setIsMenuOpen(false)}>; {item.name}; </Link>; {item.dropdown && (; <button; onClick = {() = > toggleDropdown(item.name)}; className = "p-1">; <ChevronDown className = {`w-4 h-4 transition-transform duration-200 ${; activeDropdown = = = item.name ? 'rotate-180': ''}`} />; </button>; )}; </div>; {item.dropdown && activeDropdown = = = item.name && (; <div className = "ml-4 mt-2 space-y-1">; {item.dropdown.map((subItem) = > (; <Link; key = {subItem.name}; href = {subItem.href}; className = "block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"; onClick = {() = > setIsMenuOpen(false)}>; {subItem.name}; </Link>; ))}; </div>; )}; </div>; ))}; <div className = "mt-4 pt-4 border-t border-gray-200">; <Link; href = "/contact"; className = "block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"; onClick = {() = > setIsMenuOpen(false)}>; Get Started; </Link>; </div>; </motion.div>; )}; </AnimatePresence>; </nav>; </header>; )};
;
export default Header;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
