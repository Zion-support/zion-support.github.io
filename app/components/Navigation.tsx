import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesDropdown = [
    { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
    { name: 'IT Services', href: '/it-services', description: 'Professional IT solutions' },
    { name: 'Micro SAAS', href: '/micro-saas-services', description: 'Affordable business tools' },
    { name: '5G Implementation', href: '/5g-implementation', description: 'Next-gen connectivity' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-xl border-b border-cyan-400/30 shadow-2xl shadow-cyan-500/10' 
        : 'bg-white/10 backdrop-blur-lg border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link 
                to="/" 
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
                    <div className="p-2">
                      {servicesDropdown.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block px-4 py-3 text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 rounded-lg group"
                        >
                          <div className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Contact
              </Link>
              
              {/* CTA Button */}
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl border-t border-cyan-400/30">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-cyan-500/20 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-cyan-500/20 transition-all duration-300"
            >
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <div className="text-cyan-300 px-4 py-2 text-sm font-semibold">Services</div>
              {servicesDropdown.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="text-white hover:text-cyan-300 block px-6 py-2 rounded-lg text-sm hover:bg-cyan-500/20 transition-all duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-cyan-500/20 transition-all duration-300"
            >
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white block px-4 py-3 rounded-lg text-base font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}