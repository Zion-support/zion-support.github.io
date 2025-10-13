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
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(prev => !prev);
  }, []);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(prev => !prev);
  }, []);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(prev => !prev);
  }, []);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(prev => !prev);
  }, []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: TrendingUp },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart3 },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Clock },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Star },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Cpu }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Custom Software', href: '/custom-development', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Network }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion AI Neural Interface', href: '/zion-ai-neural-interface', icon: Brain },
    { name: 'Zion AI Voice Cloning', href: '/ai-voice-cloning-studio', icon: Monitor },
    { name: 'Zion AI Financial Oracle', href: '/ai-quantum-financial-oracle', icon: TrendingUp },
    { name: 'Zion AI Space Optimizer', href: '/ai-space-mission-optimizer', icon: Globe }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Implementation', href: '/5g-implementation', icon: Globe },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Network },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Globe },
    { name: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
    { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAIServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsAIServicesOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleITServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isITServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsITServicesOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={toggle5GServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>5G Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {is5GServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      onClick={() => setIs5GServicesOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Main Pages */}
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>

            {/* CTA Button */}
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Open sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAIServices}
                  className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAIServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleITServices}
                  className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isITServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMicroSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile 5G Solutions */}
              <div>
                <button
                  onClick={toggle5GServices}
                  className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>5G Solutions</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${is5GServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {is5GServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Main Pages */}
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile CTA */}
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Get Started
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;