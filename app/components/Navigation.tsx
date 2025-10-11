import React, { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react'
import SearchBar from './SearchBar'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
<<<<<<< HEAD
=======
import { Menu, X, ChevronDown, Zap, Cloud, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
=======
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
  }

  const handleSearch = (query: string) => {
    // Handle search functionality
    console.log('Search query:', query);
    // You can implement search logic here or navigate to a search results page
  }

  const services = [
    {
<<<<<<< HEAD
      title: 'AI Services',
      href: '/ai-services',
<<<<<<< HEAD
      icon: <Zap className="w-4 h-4" />,
      description: 'AI-powered solutions for your business'
=======
      icon: Zap,
      description: 'Artificial Intelligence Solutions',
      subServices: [
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Analytics', href: '/ai-analytics' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Cybersecurity', href: '/ai-cybersecurity' }
      ]
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
    },
    {
      title: 'IT Services',
      href: '/it-services',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools'
=======
      icon: Code,
      description: 'Information Technology Solutions',
      subServices: [
        { title: 'Infrastructure Management', href: '/it-services' },
        { title: 'Cybersecurity', href: '/it-services' },
        { title: 'Database Management', href: '/it-services' },
        { title: 'Network Solutions', href: '/it-services' }
      ]
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
      icon: Database,
      description: 'Information Technology Solutions'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
<<<<<<< HEAD
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
=======
      icon: Cloud,
      description: 'Cloud Computing Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-services' },
        { title: 'Cloud Infrastructure', href: '/cloud-services' },
        { title: 'Cloud Security', href: '/cloud-services' },
        { title: 'Multi-Cloud Strategy', href: '/cloud-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service',
      subServices: [
        { title: 'AI Content Writer', href: '/micro-saas-services' },
        { title: 'AI Analytics Dashboard', href: '/micro-saas-services' },
        { title: 'AI Email Assistant', href: '/micro-saas-services' },
        { title: 'AI Lead Generation', href: '/micro-saas-services' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Digital Business Transformation',
      subServices: [
        { title: 'Process Automation', href: '/digital-transformation' },
        { title: 'Digital Workforce', href: '/digital-transformation' },
        { title: 'Customer Experience', href: '/digital-transformation' },
        { title: 'Data Strategy', href: '/digital-transformation' }
      ]
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Code className="w-4 h-4" />,
      description: 'Transform your digital presence'
=======
      icon: Database,
      description: '5G Network Implementation',
      subServices: [
        { title: '5G Network Design', href: '/5g-implementation' },
        { title: 'IoT Integration', href: '/5g-implementation' },
        { title: 'Edge Computing', href: '/5g-implementation' },
        { title: '5G Security', href: '/5g-implementation' }
      ]
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
      name: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      path: '/ai-services',
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-4 h-4" />,
      path: '/it-services',
      description: 'Complete IT infrastructure solutions'
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-4 h-4" />,
      path: '/micro-saas-services',
      description: 'Affordable micro applications'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      path: '/cloud-services',
      description: 'Professional cloud solutions'
    },
    {
      name: '5G Implementation',
      icon: <Wifi className="w-4 h-4" />,
      path: '/5g-implementation',
      description: 'Next-generation connectivity'
    },
    {
      name: 'Digital Transformation',
      icon: <Zap className="w-4 h-4" />,
      path: '/digital-transformation',
      description: 'Transform your business digitally'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
      icon: Shield,
      description: '5G Network Implementation'
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
    }
  ]

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className="bg-gray-900 shadow-lg">
=======
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
=======
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
<<<<<<< HEAD
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
=======
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
<<<<<<< HEAD
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
=======
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex-shrink-0 text-blue-600">
                            {service.icon}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{service.title}</p>
                            <p className="text-xs text-gray-500">{service.description}</p>
                          </div>
                        </Link>
                      ))}
=======
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                    <div className="grid grid-cols-1 gap-2 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <div key={service.href} className="group">
                            <Link
                              to={service.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                            {service.subServices && (
                              <div className="ml-8 mt-2 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {service.subServices.slice(0, 3).map((subService, index) => (
                                  <Link
                                    key={index}
                                    to={subService.href}
                                    className="block text-sm text-gray-600 hover:text-purple-600 px-2 py-1 rounded hover:bg-gray-50"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    {subService.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
=======
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50 border">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 mr-3 text-purple-600">
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
=======
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
            
            <div className="hidden lg:block">
              <SearchBar onSearch={handleSearch} className="w-64" />
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-gray-300 hover:text-white p-2 rounded-md"
=======
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                onClick={toggleMenu}
              >
                About
              </Link>
              
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <p className="text-gray-400 text-sm font-medium mb-2">Services</p>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      <div className="flex-shrink-0 text-blue-400 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-xs text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
=======
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href}>
                          <Link
                            to={service.href}
                            className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm font-medium flex items-center"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-purple-600 mr-2" />
                            {service.title}
                          </Link>
                          {service.subServices && (
                            <div className="pl-6 space-y-1">
                              {service.subServices.slice(0, 2).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="text-gray-500 hover:text-purple-600 block px-3 py-1 text-xs"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsServicesOpen(false)
                                  }}
                                >
                                  • {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>

              <Link
                to="/contact"
<<<<<<< HEAD
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
=======
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                onClick={toggleMenu}
              >
                Contact
              </Link>
<<<<<<< HEAD
=======
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
                onClick={toggleMenu}
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2">
              <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="text-white px-3 py-2 text-base font-medium">Services</div>
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white pl-6 pr-3 py-2 rounded-md text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      <span>{service.title}</span>
                    </Link>
                  )
                })}
              </div>
              
              <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
              >
                Get Started
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}