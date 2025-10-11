import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-300 font-medium">AI & IT Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                to="/" 
                className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 relative group"
              >
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Link 
                to="/about" 
                className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 relative group"
              >
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 flex items-center space-x-1 group"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl py-2">
                    <Link 
                      to="/services" 
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">All Services</div>
                      <div className="text-sm text-gray-400">Complete service overview</div>
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">AI Services</div>
                      <div className="text-sm text-gray-400">Artificial Intelligence solutions</div>
                    </Link>
                    <Link 
                      to="/5g-implementation" 
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">5G Implementation</div>
                      <div className="text-sm text-gray-400">Next-gen connectivity</div>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 relative group"
              >
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              {/* CTA Button */}
              <a 
                href="tel:+13024640950"
                className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-2 bg-black/90 backdrop-blur-xl border-t border-white/20">
            <Link 
              to="/" 
              className="text-white hover:text-purple-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-purple-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-purple-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/ai-services" 
              className="text-white hover:text-purple-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              AI Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-purple-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/20">
              <a 
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="w-full mt-3 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}