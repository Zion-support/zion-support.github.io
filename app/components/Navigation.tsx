'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Marketing', href: '/ai-marketing' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Fintech', href: '/ai-fintech' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Micro SAAS', href: '/micro-saas' },
    { name: 'IT Infrastructure', href: '/it-infrastructure' },
  ];

  const solutions = [
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps', href: '/devops' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Edge Computing', href: '/iot-edge-computing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Call: (302) 464-0950
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center text-white hover:text-cyan-400 transition-colors w-full"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="flex items-center text-white hover:text-cyan-400 transition-colors w-full"
                >
                  Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'mobile-solutions' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={closeMenu}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                Contact
              </Link>
              <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors" onClick={closeMenu}>
                Blog
              </Link>
              
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                onClick={closeMenu}
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;