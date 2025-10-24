<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Brain, ArrowRight, Mail } from 'lucide-react';
=======
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
=======
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
=======
                  className={`${
                    pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
<<<<<<< HEAD

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
=======
          <div className="sm:hidden">
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
<<<<<<< HEAD

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation