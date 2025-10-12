'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Users, Mail, FileText, MessageSquare, Target, TrendingUp, Sparkles } from 'lucide-react'
import { NeonText, NeonButton } from './NeonEffects'
import { allServices } from '../data/services'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Get services from our data
  const aiServices = allServices.filter(s => s.category === 'ai').slice(0, 8)
  const microSaasServices = allServices.filter(s => s.category === 'micro-saas').slice(0, 6)
  const itServices = allServices.filter(s => s.category === 'it').slice(0, 6)

  const iconMap: { [key: string]: React.ReactNode } = {
    'Brain': <Brain className="w-4 h-4" />,
    'MessageSquare': <MessageSquare className="w-4 h-4" />,
    'BarChart3': <BarChart3 className="w-4 h-4" />,
    'Shield': <Shield className="w-4 h-4" />,
    'FileText': <FileText className="w-4 h-4" />,
    'Users': <Users className="w-4 h-4" />,
    'Mail': <Mail className="w-4 h-4" />,
    'Cpu': <Cpu className="w-4 h-4" />,
    'Cloud': <Cloud className="w-4 h-4" />,
    'Code': <Code className="w-4 h-4" />,
    'Database': <Database className="w-4 h-4" />,
    'Smartphone': <Smartphone className="w-4 h-4" />,
    'Server': <Server className="w-4 h-4" />,
    'Wifi': <Wifi className="w-4 h-4" />
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              <NeonText intensity="low">Zion Tech Group</NeonText>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-cyan-500/20 py-4 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI Solutions</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
                      {iconMap[service.icon] || <Brain className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro-saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Zap className="w-4 h-4 mr-1" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-500/20 py-4 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Micro SAAS Tools</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
                      {iconMap[service.icon] || <Zap className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                <Server className="w-4 h-4 mr-1" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-blue-500/20 py-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">IT Solutions</h3>
                  </div>
                  {itServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors group"
                      onClick={closeDropdown}
                    >
                      {iconMap[service.icon] || <Server className="w-4 h-4" />}
                      <div className="ml-3 flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.price}</div>
                      </div>
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('more')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium group"
              >
                More
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'more' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-500/20 py-4 shadow-[0_0_30px_rgba(107,114,128,0.2)]">
                  <div className="px-4 py-2 border-b border-white/10">
                    <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Company</h3>
                  </div>
                  <Link
                    to="/pricing"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-500/10 transition-colors group"
                    onClick={closeDropdown}
                  >
                    <span className="font-medium">Pricing</span>
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-500/10 transition-colors group"
                    onClick={closeDropdown}
                  >
                    <span className="font-medium">Blog</span>
                  </Link>
                  <Link
                    to="/news"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-500/10 transition-colors group"
                    onClick={closeDropdown}
                  >
                    <span className="font-medium">News</span>
                  </Link>
                  <Link
                    to="/careers"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-500/10 transition-colors group"
                    onClick={closeDropdown}
                  >
                    <span className="font-medium">Careers</span>
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-500/10 transition-colors group"
                    onClick={closeDropdown}
                  >
                    <span className="font-medium">Support</span>
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>

            <NeonButton 
              variant="primary" 
              size="sm"
              onClick={() => window.location.href = '/contact'}
              className="shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Get Started
            </NeonButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold text-center"
                onClick={closeDropdown}
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