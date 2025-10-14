'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail,
  Wifi,
  Monitor,
  Shield,
  Database,
  Cloud,
  Zap,
  Settings,
  MessageCircle,
  Smartphone,
  Target,
  BarChart,
  Search,
  FileText,
  Calendar,
  Bot,
  Atom,
  Link
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const aiServices = [
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Phone, description: 'Intelligent support solutions' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Advanced data insights' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, description: 'Automated workflows' },
    { name: 'AI Content Generator', href: '/ai-content-generator', icon: Brain, description: 'AI-powered content creation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Custom chatbots' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' }
  ]

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless cloud transition' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
    { name: 'Data Analytics', href: '/data-analytics', icon: Database, description: 'Business intelligence' },
    { name: 'Web Development', href: '/web-development', icon: Monitor, description: 'Modern web solutions' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile app development' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable infrastructure' }
  ]

  const microSaasServices = [
    { name: 'Lead Scoring', href: '/micro-saas/lead-scoring', icon: Target, description: 'AI-powered lead analysis' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', icon: BarChart, description: 'Business analytics' },
    { name: 'SEO Optimizer', href: '/micro-saas/seo-optimizer', icon: Search, description: 'SEO optimization tools' },
    { name: 'Document Processor', href: '/micro-saas/document-processor', icon: FileText, description: 'Document automation' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', icon: Calendar, description: 'Smart scheduling' },
    { name: 'Support Bot', href: '/micro-saas/support-bot', icon: Bot, description: 'Automated support' }
  ]

  const emergingTechServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, description: 'Quantum solutions' },
    { name: 'Blockchain', href: '/blockchain', icon: Link, description: 'Blockchain technology' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                    All Services
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  
                  <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">AI Services</div>
                  {aiServices.map((service, index) => (
                    <Link key={index} href={service.href} className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                      {service.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">IT Services</div>
                  {itServices.map((service, index) => (
                    <Link key={index} href={service.href} className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                      {service.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="px-4 py-2 text-cyan-400 text-sm font-semibold">Micro SaaS</div>
                  {microSaasServices.map((service, index) => (
                    <Link key={index} href={service.href} className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-200">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            
            <Link to="/demo" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Services
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
              <Link to="/demo" className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-center">
                Get Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation