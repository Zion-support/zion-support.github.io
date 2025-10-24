'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-2">
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    AI Services
                  </Link>
                  <Link href="/cloud-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cloud Services
                  </Link>
                  <Link href="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cybersecurity
                  </Link>
                  <Link href="/web-development" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Web Development
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                About
              </Link>
              <Link href="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                AI Services
              </Link>
              <Link href="/cloud-services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Cloud Services
              </Link>
              <Link href="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Cybersecurity
              </Link>
              <Link href="/web-development" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Web Development
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Contact
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="block px-3 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-md hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation