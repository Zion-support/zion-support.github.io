'use client'
import React, { useState } from 'react'
import { Menu, X, Home, Users, Settings, HelpCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'About', href: '/about' },
    { icon: Settings, label: 'Services', href: '/services' },
    { icon: HelpCircle, label: 'Contact', href: '/contact' }
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${className}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-purple-600 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Zion Tech Group
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar