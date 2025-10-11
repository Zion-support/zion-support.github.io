import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
              <span className="text-lg sm:text-xl font-bold text-white">Zion Tech Group</span>
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
              <div className="relative group">
                <button className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Micro SAAS Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      AI Solutions
                    </Link>
                    <Link to="/cloud-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Cloud Services
                    </Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Digital Transformation
                    </Link>
                    <Link to="/5g-implementation" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      5G Implementation
                    </Link>
                  </div>
                </div>
              </div>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20 max-h-96 overflow-y-auto">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Services</div>
              <div className="pl-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Micro SAAS Services
                </Link>
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  IT Services
                </Link>
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  AI Solutions
                </Link>
                <Link to="/cloud-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Cloud Services
                </Link>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Digital Transformation
                </Link>
                <Link to="/5g-implementation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  5G Implementation
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}