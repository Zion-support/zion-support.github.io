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
  onSidebarToggle: () => void;
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
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { label: 'AI Automation', href: '/ai-automation', icon: Zap },
        { label: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { label: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
        { label: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
        { label: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
        { label: 'AI Project Management', href: '/ai-project-management', icon: Clock },
        { label: 'AI Sales Automation', href: '/ai-sales-automation', icon: Receipt },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Cpu }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: Monitor,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
        { label: 'Web Development', href: '/web-development', icon: Code },
        { label: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
        { label: 'Database Management', href: '/database-management', icon: Database },
        { label: 'Custom Software', href: '/custom-software', icon: Package },
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: Network }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: Package,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
        { label: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
        { label: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: Zap,
      dropdown: [
        { label: '5G Implementation', href: '/5g-implementation', icon: Globe },
        { label: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Network },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Globe },
        { label: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
        { label: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 }
      ]
    },
    { label: 'About', href: '/about', icon: Users },
    { label: 'Contact', href: '/contact', icon: Phone }
  ], [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.dropdown ? toggleDropdown(item.label) : null}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={closeDropdowns}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/demo"
              variant="primary"
              size="sm"
              className="group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation