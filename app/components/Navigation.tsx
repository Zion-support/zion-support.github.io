'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    All Services
                  </Link>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-wider">AI & Technology</div>
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    AI Services
                  </Link>
                  <Link href="/it-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    IT Services
                  </Link>
                  <Link href="/micro-saas" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Micro SaaS Solutions
                  </Link>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-wider">Specialized Services</div>
                  <Link href="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Cybersecurity
                  </Link>
                  <Link href="/data-analytics" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Data Analytics
                  </Link>
                  <Link href="/cloud-infrastructure" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    Cloud Infrastructure
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link 
              href="/consultation" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                All Services
              </Link>
              <div className="px-3 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-wider">AI & Technology</div>
              <Link 
                href="/ai-services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                AI Services
              </Link>
              <Link 
                href="/it-services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                IT Services
              </Link>
              <Link 
                href="/micro-saas" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Micro SaaS Solutions
              </Link>
              <div className="px-3 py-1 text-xs font-semibold text-cyan-400 uppercase tracking-wider">Specialized Services</div>
              <Link 
                href="/cybersecurity" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Cybersecurity
              </Link>
              <Link 
                href="/data-analytics" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Data Analytics
              </Link>
              <Link 
                href="/cloud-infrastructure" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Cloud Infrastructure
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                href="/consultation" 
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-center"
                onClick={toggleMenu}
              >
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
