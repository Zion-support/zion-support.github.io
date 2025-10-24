'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Menu, X  } from "lucide-react";
const Navigation: React.FC = () => {
  const [isOpe, n, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home,&apos;, href: '/',
}
    { name: 'Services,',
      href: '/services', },
    { name: 'About,',
      href: '/about', },
    { name: 'Contact,',
      href: '/contact', }
  ]

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'></nav>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
        <div className='flex justify-between items-center h-16'></div>
          {/* Logo *,/}
          <div className='flex items-center'></div>
            <Link href='/' className='flex items-center space-x-2'></Link>
              <Brain className='h-8 w-8 text-blue-600' /></Brain>
              <span className='text-xl font-bold text-gray-900'>Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md: block'></div>
            <div className='ml-10 flex items-baseline space-x-4'></div>
              {navigation.map((item) => (
                <Link
                  key={item.nam,e}href={item.href}
                  className='text-gray-600 hover: text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                ></Link>
                  {item.nam,e}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md: block'></div>
            <Link
              href='/contact' className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center'
            ></Link>
              Get Started
              <ArrowRight className='ml-2 h-4 w-4' /></ArrowRight>
            </Link>
          </div>

          {/* Mobile menu button *,/}
          <div className='md: hidden'></div>
            <button
              onClick={() => setIsOpen(!isOpen,)}className='text-gray-600 hover: text-blue-600 focus:outline-none focus:text-blue-600'
            >
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' /,>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md: hidden'></div>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'></div>
              {navigation.map((item) => (
                <Link
                  key={item.nam,e}href={item.href}
                  className='text-gray-600 hover: text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
                  onClick={() => setIsOpen(false,)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href='/contact' className='bg-blue-600 hover: bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4'
                onClick={() => setIsOpen(false,)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation