import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  ChevronDown,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Play
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics', description: 'Data-driven insights' },
        { label: 'AI Content Generation', href: '/ai-content-generation', description: 'Automated content creation' },
        { label: 'AI Customer Support', href: '/ai-customer-support', description: 'Intelligent customer service' },
        { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI-powered security' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Advanced data analysis' },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation', description: 'Smart marketing campaigns' },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Process automation' },
        { label: 'View All AI Services', href: '/ai-services', description: 'Explore all AI solutions' }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive IT Solutions',
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { label: 'Web Development', href: '/web-development', description: 'Modern web applications' },
        { label: 'Mobile Development', href: '/mobile-development', description: 'Mobile applications' },
        { label: 'IT Consulting', href: '/it-consulting', description: 'Technology consulting' },
        { label: 'Network Security', href: '/network-security', description: 'Security solutions' },
        { label: 'View All IT Services', href: '/services', description: 'Explore all IT solutions' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Solutions',
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', description: 'Business intelligence platform' },
        { label: 'Zion Security Shield', href: '/zion-security-shield', description: 'Advanced security protection' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', description: 'Secure cloud storage' },
        { label: 'View All Micro SAAS', href: '/micro-saas', description: 'Explore all micro SAAS' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', description: 'High-speed data analysis' },
        { label: '5G Edge Computing', href: '/5g-edge-computing', description: 'Edge computing solutions' },
        { label: '5G Implementation', href: '/5g-implementation', description: '5G network deployment' },
        { label: 'View All 5G Solutions', href: '/5g-solutions', description: 'Explore all 5G solutions' }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-50">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{item.label}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                          >
                            <div className="flex-1">
                              <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                {dropdownItem.label}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {dropdownItem.description}
                              </div>
                            </div>
                            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <div className="ml-6 space-y-2">
                    {item.dropdown.slice(0, 4).map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                    {item.dropdown.length > 4 && (
                      <Link
                        to={item.href}
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
