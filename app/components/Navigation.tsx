import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 text-sm font-medium">
                      All Services
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <Link to="/ai-services" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 text-sm">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 text-sm">
                      IT Services
                    </Link>
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 text-sm">
                      Micro SAAS
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <Link to="/5g-implementation" className="block px-4 py-2 text-gray-800 hover:bg-purple-50 text-sm">
                      5G Implementation
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/pricing" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-white px-3 py-2 text-base font-medium text-purple-300">
                Services
              </div>
              <Link to="/services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm">
                All Services
              </Link>
              <Link to="/ai-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/it-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/micro-saas-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm">
                Micro SAAS
              </Link>
              <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm">
                5G Implementation
              </Link>
            </div>
            <Link to="/pricing" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}