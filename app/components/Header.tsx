'use client'

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false }]

  return (
    <header className='bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Zion Tech Group</h1>
          </div>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8' role="navigation" aria-label="Main navigation">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  item.current
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Theme Toggle and CTA Button */}
          <div className='hidden md:flex items-center space-x-4'>
            <ThemeToggle />
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl'>
              Get Started
            </button>
          </div>
          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 p-2 rounded-md transition-all duration-200'
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className='md:hidden animate-fade-in'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    item.current
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <div className='pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex justify-center'>
                  <ThemeToggle />
                </div>
                <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}