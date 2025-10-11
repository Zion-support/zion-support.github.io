'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, ChevronDown, Menu, X, ArrowRight, Cloud, Shield, Code, BarChart, Zap, Users, Phone, Mail, MapPin, Globe, Settings, Lightbulb, Target, TrendingUp, FileText, Image, Video, Music, ShoppingCart, CreditCard, Smartphone, Monitor, Database, Lock, Calendar, MessageCircle, Award, Heart, Box, Package, Mic, Workflow, Gauge, Eye, Wifi, MessageSquare, Rocket, Clock, DollarSign, Star, CheckCircle, Briefcase, BookOpen, Play, Cookie } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aiServices = [
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: Target },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: TrendingUp },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
    { name: 'AI Image Generation', href: '/ai-image-generation', icon: Image }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Network Management', href: '/network-management', icon: Wifi },
    { name: 'Data Management', href: '/data-management', icon: Database },
    { name: 'IT Consulting', href: '/it-consulting', icon: Lightbulb },
    { name: 'System Integration', href: '/system-integration', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Settings },
    { name: 'Disaster Recovery', href: '/disaster-recovery', icon: Shield },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Security Audit', href: '/security-audit', icon: Shield }
  ]

  const microSaasServices = [
    { name: 'AI Content Writer Pro', href: '/micro-saas/ai-content-writer', icon: FileText },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', icon: BarChart },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', icon: Calendar },
    { name: 'Email Marketing Suite', href: '/micro-saas/email-marketing', icon: Mail },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', icon: CreditCard },
    { name: 'Inventory Management', href: '/micro-saas/inventory-management', icon: Package },
    { name: 'Lead Scoring Engine', href: '/micro-saas/lead-scoring', icon: Target },
    { name: 'SEO Optimizer', href: '/micro-saas/seo-optimizer', icon: TrendingUp },
    { name: 'Social Media Manager', href: '/micro-saas/social-manager', icon: MessageCircle },
    { name: 'Support Bot', href: '/micro-saas/support-bot', icon: MessageCircle },
    { name: 'Document Processor', href: '/micro-saas/document-processor', icon: FileText },
    { name: 'Chat Analytics', href: '/micro-saas/chat-analytics', icon: BarChart }
  ]

  const companyPages = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen }
  ]

  const supportPages = [
    { name: 'Contact Us', href: '/contact', icon: Phone },
    { name: 'Support Center', href: '/support', icon: Settings },
    { name: 'Consultation', href: '/consultation', icon: MessageCircle },
    { name: 'Demo Request', href: '/demo', icon: Play },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie }
  ]

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }

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
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400 mr-3" />
                        <span className="text-sm text-gray-300">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      href="/ai-services"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View All AI Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400 mr-3" />
                        <span className="text-sm text-gray-300">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      href="/it-services"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View All IT Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Micro SaaS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <service.icon className="w-4 h-4 text-cyan-400 mr-3" />
                        <span className="text-sm text-gray-300">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      href="/micro-saas"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View All Micro SaaS
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
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
              
              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  {aiServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-2 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/ai-services"
                    className="block px-2 py-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    View All AI Services →
                  </Link>
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  {itServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-2 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/it-services"
                    className="block px-2 py-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    View All IT Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SaaS */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">Micro SaaS</div>
                <div className="ml-4 space-y-1">
                  {microSaasServices.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-2 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/micro-saas"
                    className="block px-2 py-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    View All Micro SaaS →
                  </Link>
                </div>
              </div>

              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                About
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

              {/* Mobile Contact Info */}
              <div className="px-3 py-4 border-t border-slate-700 mt-4">
                <div className="text-cyan-400 font-medium mb-3">Contact Info</div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phone}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation