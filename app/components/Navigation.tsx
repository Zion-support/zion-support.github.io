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
              <div className="relative group">
                <button className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Micro SAAS
                    </Link>
                    <Link to="/cloud-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Cloud Solutions
                    </Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Blockchain & Web3
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
              <Link to="/careers" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
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
            <div className="px-3 py-2 text-white font-medium text-base">Services</div>
            <Link to="/ai-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              AI Services
            </Link>
            <Link to="/it-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              IT Services
            </Link>
            <Link to="/micro-saas-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              Micro SAAS
            </Link>
            <Link to="/cloud-services" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              Cloud Solutions
            </Link>
            <Link to="/blockchain" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              Blockchain & Web3
            </Link>
            <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-6 py-2 rounded-md text-sm font-medium">
              5G Implementation
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/careers" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}