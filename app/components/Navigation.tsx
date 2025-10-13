import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  Sidebar as SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react'
import FuturisticButton from './FuturisticButton'

interface NavigationProps {
  onSidebarToggle: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown)
  }, [])

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        {
          name: 'AI Solutions',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Artificial Intelligence & Machine Learning'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: <Shield className="w-4 h-4" />,
          description: 'Technology Infrastructure & Support'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Package className="w-4 h-4" />,
          description: 'Ready-to-use Software Solutions'
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Network className="w-4 h-4" />,
          description: 'Next-generation Connectivity'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/blog',
      icon: <FileText className="w-4 h-4" />,
      dropdown: [
        {
          name: 'Blog',
          href: '/blog',
          icon: <FileText className="w-4 h-4" />,
          description: 'Latest insights and updates'
        },
        {
          name: 'Tutorials',
          href: '/tutorials',
          icon: <Award className="w-4 h-4" />,
          description: 'Step-by-step guides'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'Success stories and results'
        },
        {
          name: 'Demo',
          href: '/demo',
          icon: <Monitor className="w-4 h-4" />,
          description: 'Interactive demonstrations'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl z-50">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">{item.name}</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={closeDropdowns}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {subItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="primary"
              size="sm"
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              closeDropdowns()
                              setIsMenuOpen(false)
                            }}
                            className="flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                          >
                            {subItem.icon}
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-sm">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10 space-y-2">
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="sm"
                className="w-full justify-center"
              >
                Get Started
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="primary"
                size="sm"
                className="w-full justify-center"
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
