import React, { use State } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'





export default function;; Navigation() {
  const  = use State(false)
  const  = use State(false)
  
  const toggle Menu = () => {
    set Is Open(!is Open)
  }
  )
  const toggle Services = () => {
    set Is Services Open(!is Services Open)
  }
  )
  return (
    <div>
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-16">
        
          <div className="flex items-center">
        
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
        
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
  )
          <div className="hidden md:flex items-center space-x-8">
        
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
  )
            <div className="relative">
        
              <button
                on Click={toggle Services}
  )
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <Chevron Down className="ml-1 h-4 w-4" />
              </button>
              
              {is Services Open && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
        
                  <Link to="/ai-solutions" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Zap className="mr-2 h-4 w-4" />
                    A I Solutions
                  </Link>
                  <Link to="/cloud-solutions" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Cloud className="mr-2 h-4 w-4" />
                    Cloud Solutions
                  </Link>
                  <Link to="/cybersecurity" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Shield className="mr-2 h-4 w-4" />
                    Cybersecurity
                  </Link>
                  <Link to="/web-development" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Globe className="mr-2 h-4 w-4" />
                    Web Development
                  </Link>
                  <Link to="/database-solutions" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Database className="mr-2 h-4 w-4" />
                    Database Solutions
                  </Link>
                  <Link to="/mobile-apps" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Mobile Apps
                  </Link>
                </div>
              )}
  )
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
  )
          <div className="md:hidden flex items-center">
        
            <button
              on Click={toggle Menu}
  )
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {is Open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  )
            </button>
          </div>

        {/* Mobile Navigation */}
  )
        {is Open && (
          <div className="md:hidden">
        
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
        
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
        )}
  )
      </div>
    </nav>
  )
}
  )
