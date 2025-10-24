'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cloud, 
  BarChart, 
  Zap, 
  Globe, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  MessageCircle, 
  Mic, 
  Eye
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        closeAllMenus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeAllMenus])

  const services = [
    {
      name: 'AI Services',
      icon: BarChart,
      items: [
        { name: 'AI Analytics & BI', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Chatbots', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'Computer Vision', href: '/computer-vision' }
      ]
    },
    {
      name: 'IT Services',
      icon: Cloud,
      items: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Data Analytics', href: '/data-analytics' }
      ]
    },
    {
      name: 'Solutions',
      icon: Zap,
      items: [
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: 'Blockchain', href: '/blockchain' },
        { name: 'API Development', href: '/api-development' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <div key={service.name} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {services.map((service) => (
                <div key={service.name} className="space-y-1">
                  <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 font-medium">
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        onClick={closeAllMenus}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block mx-3 mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={closeAllMenus}
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