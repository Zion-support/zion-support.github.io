import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Video,
  FileText,
  Eye,
  TrendingUp,
  Target,
  Settings,
  Package,
  Receipt,
  Calculator,
  DollarSign,
  Cpu,
  Network,
  Clock,
  Heart
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Automation', href: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Customer Service', href: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Marketing', href: '/ai-marketing', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',
      icon: <Settings className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', href: '/web-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Mobile Development', href: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
        { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> },
        { name: 'Custom Software', href: '/custom-software', icon: <Settings className="w-4 h-4" /> },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Package className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
        { name: 'Zion AI Invoice Generator', href: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
        { name: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights', icon: <Eye className="w-4 h-4" /> },
        { name: 'Zion AI Email Analyzer', href: '/zion-ai-email-analyzer', icon: <Mail className="w-4 h-4" /> },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Implementation', href: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> }
      ]
    }
  ], []);

  const mainPages = useMemo(() => [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Demo', href: '/demo' },
    { name: 'Support', href: '/support' }
  ], []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href) || activeDropdown === item.name
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2 z-50">
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={closeDropdown}
                          className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                            isActive(subItem.href)
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {subItem.icon}
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {mainPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(page.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-8 space-y-1">
                    {item.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => {
                          closeDropdown();
                          setIsOpen(false);
                        }}
                        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {subItem.icon}
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {mainPages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;