import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Menu,
  X,
  ChevronDown
} from 'lucide-react'

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-white/10">
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700">
                    AI Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700">
                    Micro SAAS
                  </Link>
                  <Link to="/5g-solutions" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700">
                    5G Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
