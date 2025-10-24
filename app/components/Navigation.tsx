'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
      submenu: [,
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: '5G Solutions', href: '/5g-solutions' },
        { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (path: string) => {
    return pathname === path
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
    }`}></nav>
      <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8"></div>,
        <div className="flex items-centerjustify-betweenh-16">,
          {/* Logo */}
        </div>
          <Link href="/" className="flexitems-centerspace-x-2"></Link>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"></div>
              <span className="text-whitefont-boldtext-lg">Z</span>
            </div>
            <span className="text-whitefont-boldtext-xl">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flexitems-centerspace-x-8"></div>
            {navigation.map((item) => {
              const Icon = item.icon,
              return (,
                <div key={item.name} className="relativegroup"></div>
                  <Link
                    href = {
item.href
};
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href);
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'}`}
                    onMouseEnter = {
() => item.submenu && setIsServicesOpen(true);
};
                    onMouseLeave = {
() => item.submenu && setIsServicesOpen(false);
};
                  >
                    <Icon className="w-4h-4" /></Icon>
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4h-4ml-1" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lgpy-1z-50"></div>
                      {item.submenu.map((subItem) => (
                        <Link key = {
subItem.name
};
                          href = {
subItem.href
};
                          className="block px-4 py-2 text-sm text-gray-300hover:text-whitehover:bg-slate-700",
                        >,
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
            })}
          </div>
          {/* CTA Button */}
          <div className="hidden lg:flexitems-centerspace-x-4"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-cyan-700transition-all duration-300"
            ></Link>
              Get Started
            </Link>,
          </div>,
          {/* Mobile menu button */}
          <div className="lg:hidden"></div>,
            <button,
              onClick = {
() => setIsOpen(!isOpen);
};
              className="text-gray-300hover:text-whitep-2",
            >,
              {isOpen ? <XMarkIcon className="w-6h-6" /> : <Bars3Icon className="w-6h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden"></div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800rounded-lgmt-2"></div>
              {navigation.map((item) => {
                const Icon = item.icon,
                return (,
                  <div key={item.name}></div>
                    <Link
                      href = {
item.href
};
                      onClick = {
() => setIsOpen(false);
};
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href);
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'}`}
                    >
                      <Icon className="w-5h-5" /></Icon>
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8space-y-1"></div>
                        {item.submenu.map((subItem) => (
                          <Link key = {
subItem.name
};
                            href = {
subItem.href
};
                            className="text-gray-400 hover:text-white block px-3 py-2rounded-mdtext-sm",
                            onClick = {
() => setIsOpen(false);
};
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
              })}
              <div className="pt-4border-tborder-slate-700"></div>
                <Link
                  href="/contact"
                  onClick = {
() => setIsOpen(false);
};
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-basefont-mediumtext-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
export default Navigation