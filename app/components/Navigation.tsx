'use client';

import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import {

  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChevronDownIcon} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon},
    { name: 'About', href: '/about', icon: InformationCircleIcon},
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'Cloud Services', href: '/services/cloud-services' }
      ]
    },
    { name: 'Contact', href: '/contact', icon: PhoneIcon},
    { name: 'Team', href: '/team', icon: AcademicCapIcon }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
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
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name}
                            href={subItem.href}
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
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation;