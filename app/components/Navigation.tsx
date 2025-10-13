import React, { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Menu,
  X,
} from 'lucide-react'

interface NavigationProps {
  onMenuClick?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
    if (onMenuClick) {
      onMenuClick()
    }
  }, [isOpen, onMenuClick])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
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
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ai-services"
              className={`text-sm font-medium transition-colors ${
                isActive('/ai-services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              AI Services
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              IT Services
            </Link>
            <Link
              to="/micro-saas"
              className={`text-sm font-medium transition-colors ${
                isActive('/micro-saas') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Micro SAAS
            </Link>
            <Link
              to="/5g-solutions"
              className={`text-sm font-medium transition-colors ${
                isActive('/5g-solutions') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              5G Solutions
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/ai-services') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/services') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/micro-saas') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/5g-solutions"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/5g-solutions') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                5G Solutions
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/about') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/contact') ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation