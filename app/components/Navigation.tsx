import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Lock, BarChart3, Rocket, Wifi, Layers } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  const [isMicroSAASOpen, setIsMicroSAASOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }, [isAIServicesOpen])

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen)
  }, [isITServicesOpen])

  const toggleMicroSAAS = useCallback(() => {
    setIsMicroSAASOpen(!isMicroSAASOpen)
  }, [isMicroSAASOpen])

  const aiServices = useMemo(() => [
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Database className="w-4 h-4" /> }
  ], [])

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Lock className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Wifi className="w-4 h-4" /> }
  ], [])

  const microSAAS = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Layers className="w-4 h-4" /> },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation', icon: <Rocket className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="nav-cyberpunk fixed top-0 left-0 right-0 z-50 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-cyberpunk neon-advanced">
            <span className="text-gradient">ZION</span>
            <span className="text-white ml-2">TECH GROUP</span>
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAIServices}
                className="nav-link flex items-center space-x-1"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 holographic-card py-2 z-50">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsAIServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleITServices}
                className="nav-link flex items-center space-x-1"
              >
                <Cpu className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isITServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 holographic-card py-2 z-50">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsITServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSAAS}
                className="nav-link flex items-center space-x-1"
              >
                <Rocket className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSAASOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 holographic-card py-2 z-50">
                  {microSAAS.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsMicroSAASOpen(false)}
                    >
                      {service.icon}
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="nav-link">
              Case Studies
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link
              to="/consultation"
              className="btn-quantum"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/30">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAIServices}
                  className="flex items-center space-x-2 nav-link text-lg"
                >
                  <Brain className="w-5 h-5" />
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAIServicesOpen && (
                  <div className="ml-6 mt-3 space-y-3">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => {
                          setIsAIServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleITServices}
                  className="flex items-center space-x-2 nav-link text-lg"
                >
                  <Cpu className="w-5 h-5" />
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isITServicesOpen && (
                  <div className="ml-6 mt-3 space-y-3">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => {
                          setIsITServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSAAS}
                  className="flex items-center space-x-2 nav-link text-lg"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSAASOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSAASOpen && (
                  <div className="ml-6 mt-3 space-y-3">
                    {microSAAS.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => {
                          setIsMicroSAASOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="btn-quantum text-center mt-4"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation