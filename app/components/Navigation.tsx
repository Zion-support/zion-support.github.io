import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  {
    name: 'Services',
    href: '/services',
    icon: CogIcon,
    submenu: [
      { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
      { name: 'IT Solutions', href: '/it-solutions', icon: ComputerDesktopIcon },
      { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
      { name: 'Analytics', href: '/analytics', icon: ChartBarIcon }
    ]
  },
  { name: 'Contact', href: '/contact', icon: PhoneIcon }
]
const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const isActive = (path: string) => {
    return location.pathname === path
  }
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover: text-white hover:bg-slate-700 transition-colors"
                        >
                          {subItem.icon && <subItem.icon className="mr-3 h-4 w-4" />}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover: text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
const,
  Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Zion Tech Group;
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>      </div>
    </nav>
  )
}

export default Navigation
