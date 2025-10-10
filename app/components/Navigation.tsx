'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ChevronDown, Phone, Mail, Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Services
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" 
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" 
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" 
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" 
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" 
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation