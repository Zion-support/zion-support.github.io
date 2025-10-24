'use client'
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart 
} from 'lucide-react'
=======

import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-2480

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)

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
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [])

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbots', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
<<<<<<< HEAD
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
=======
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', href: '/predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    { name: 'Voice AI', href: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-architecture', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Lock, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Data insights' }
  ]

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
=======
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">AI Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {aiServices.map(service => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-blue-600" />
=======
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">IT Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {itServices.map(service => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}>
                        <service.icon className="w-5 h-5 text-blue-600" />
=======
              )}
            </div>

            <div className="relative group">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
=======
              )}
            </div>

            <div className="relative group">
              <button
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <Package className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`py-2 px-3 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
<<<<<<< HEAD
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
=======
              to="/contact"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
<<<<<<< HEAD
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}>
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}>
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}>
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                  onClick={closeAllMenus}>
                  Get Started
                </Link>
              </div>
=======
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <span className="font-medium text-gray-900">AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <span className="font-medium text-gray-900">IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block py-2 text-gray-900 hover:text-blue-600"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-900 hover:text-blue-600"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation