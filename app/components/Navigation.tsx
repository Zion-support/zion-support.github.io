import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  Clock,
  Mic,
  Camera,
  DollarSign,
  DocumentText,
  Video,
  Mail as EmailIcon,
  Calendar,
  Search,
  Settings,
  HelpCircle
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navigationItems = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      isExternal: false
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      isExternal: false,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
        { label: 'AI Automation', href: '/ai-automation', icon: Zap },
        { label: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
        { label: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
        { label: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
        { label: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
        { label: 'AI Voice Cloning', href: '/ai-voice-cloning-studio', icon: Mic },
        { label: 'AI Quantum Oracle', href: '/ai-quantum-financial-oracle', icon: Cpu },
        { label: 'AI Space Mission', href: '/ai-space-mission-optimizer', icon: Globe }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: Package,
      isExternal: false,
      dropdown: [
        { label: 'Meeting Transcriber', href: '/zion-ai-meeting-transcriber', icon: Mic },
        { label: 'Document Scanner', href: '/zion-ai-document-scanner', icon: Camera },
        { label: 'Expense Tracker', href: '/zion-ai-expense-tracker', icon: DollarSign },
        { label: 'Video Generator', href: '/zion-ai-video-generator', icon: Video },
        { label: 'Invoice Generator', href: '/zion-ai-invoice-generator', icon: Receipt },
        { label: 'Customer Insights', href: '/zion-ai-customer-insights', icon: Users },
        { label: 'Email Analyzer', href: '/zion-ai-email-analyzer', icon: EmailIcon },
        { label: 'Social Media Manager', href: '/zion-ai-social-media-manager', icon: Share },
        { label: 'Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code },
        { label: 'Performance Optimizer', href: '/zion-ai-performance-optimizer', icon: Zap }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: Monitor,
      isExternal: false,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { label: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
        { label: 'Web Development', href: '/web-development', icon: Code },
        { label: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
        { label: 'Database Management', href: '/database-management', icon: Database },
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: Network },
        { label: 'Quantum Computing', href: '/quantum-computing-solutions', icon: Cpu }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: Zap,
      isExternal: false,
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
        { label: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
        { label: '5G Implementation', href: '/5g-implementation', icon: Settings },
        { label: '5G Mobile Apps', href: '/5g-mobile-applications', icon: Smartphone },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe },
        { label: '5G Smart Cities', href: '/5g-smart-city-solutions', icon: MapPin },
        { label: '5G Private Networks', href: '/5g-private-networks', icon: Shield }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: Users,
      isExternal: false
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Mail,
      isExternal: false
    }
  ], []);

  const Home = () => <Globe className="w-5 h-5" />;
  const Share = () => <Globe className="w-5 h-5" />;

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  AI & IT Solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 py-4 z-50">
                    <div className="px-4 py-2 border-b border-gray-700">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        {item.label}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 group"
                          onClick={closeDropdowns}
                        >
                          <subItem.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                          <span className="text-sm font-medium">{subItem.label}</span>
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              className="group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span className="text-sm">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
