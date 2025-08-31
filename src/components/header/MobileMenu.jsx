import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User, 
  MessageSquare, 
  Home, 
  Store, 
  Users, 
  Settings,
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  ArrowRight,
  Handshake,
  Calendar
} from 'lucide-react';

export function MobileMenu({ onClose }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const navigationItems = [
    { href: '/', label: 'Home', icon: Home, matches: (path) => path === '/' },
    { 
      label: 'Services', 
      icon: Store, 
      matches: (path) => path.startsWith('/services'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/services/ai-enterprise-automation-platform', label: 'AI Enterprise Automation', icon: Brain },
        { href: '/services/ai-enterprise-intelligence-platform', label: 'AI Enterprise Intelligence', icon: Brain },
        { href: '/services/ai-data-analytics-platform', label: 'AI Data Analytics', icon: BarChart3 },
        { href: '/services/ai-cybersecurity-platform', label: 'AI Cybersecurity', icon: Shield },
        { href: '/services/ai-autonomous-research-assistant', label: 'AI Research Assistant', icon: Brain },
        { href: '/services/ai-financial-trading-platform', label: 'AI Trading Platform', icon: TrendingUp },
        { href: '/services/ai-healthcare-platform', label: 'AI Healthcare', icon: Brain },
        { href: '/services/ai-quantum-hybrid-platform', label: 'Quantum AI Platform', icon: Atom },
        { href: '/services/ai-supply-chain-optimization', label: 'Supply Chain AI', icon: Workflow },
        { href: '/services/blockchain-enterprise-solutions', label: 'Blockchain Solutions', icon: Network },
        { href: '/services/ai-sales-copilot', label: 'AI Sales Copilot', icon: TrendingUp },
        { href: '/services/cloud-finops-optimizer', label: 'Cloud FinOps', icon: Cloud },
        { href: '/services/ai-compliance-assistant', label: 'AI Compliance', icon: Shield },
        { href: '/services/cloud-devops', label: 'Cloud & DevOps', icon: Server },
        { href: '/services/cybersecurity', label: 'Cybersecurity', icon: Lock },
        { href: '/services/digital-transformation', label: 'Digital Transformation', icon: Rocket },
        { href: '/services/it-infrastructure', label: 'IT Infrastructure', icon: Cpu },
        { href: '/services/ai-business-intelligence', label: 'AI Business Intelligence', icon: BarChart },
        { href: '/services/ai-healthcare-analytics', label: 'AI Healthcare Analytics', icon: Activity }
      ]
    },
    { 
      label: 'Solutions', 
      icon: Target, 
      matches: (path) => path.startsWith('/solutions'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/solutions/healthcare', label: 'Healthcare', icon: Activity },
        { href: '/solutions/financial', label: 'Financial', icon: DollarSign },
        { href: '/solutions/manufacturing', label: 'Manufacturing', icon: Cpu },
        { href: '/solutions/government', label: 'Government', icon: Building2 },
        { href: '/solutions/retail', label: 'Retail', icon: Store },
        { href: '/solutions/quantum-edge-computing', label: 'Quantum Edge', icon: Atom },
        { href: '/solutions/ai-autonomous-business', label: 'AI Autonomous', icon: Brain },
        { href: '/solutions/blockchain-web3', label: 'Blockchain Web3', icon: Network },
        { href: '/solutions/iot-edge-computing', label: 'IoT Edge', icon: Wifi },
        { href: '/solutions/space-tech', label: 'Space Tech', icon: Satellite }
      ]
    },
    { 
      label: 'Company', 
      icon: Users, 
      matches: (path) => path.startsWith('/about') || path.startsWith('/leadership') || path.startsWith('/careers'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/about', label: 'About Us', icon: Users },
        { href: '/leadership', label: 'Leadership', icon: Star },
        { href: '/careers', label: 'Careers', icon: Rocket },
        { href: '/partners', label: 'Partners', icon: Handshake },
        { href: '/news', label: 'News', icon: FileText },
        { href: '/events', label: 'Events', icon: Calendar }
      ]
    },
    { 
      label: 'Resources', 
      icon: FileText, 
      matches: (path) => path.startsWith('/blog') || path.startsWith('/docs') || path.startsWith('/webinars'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/blog', label: 'Blog', icon: FileText },
        { href: '/docs', label: 'Documentation', icon: FileText },
        { href: '/white-papers', label: 'White Papers', icon: FileText },
        { href: '/webinars', label: 'Webinars', icon: Monitor },
        { href: '/training', label: 'Training', icon: Users2 },
        { href: '/case-studies', label: 'Case Studies', icon: BarChart3 },
        { href: '/research-development', label: 'R&D', icon: Lightbulb }
      ]
    },
    { href: '/contact', label: 'Contact', icon: MessageSquare, matches: (path) => path.startsWith('/contact') },
  ];
  
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Mobile menu overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Mobile menu panel */}
      <div className="fixed inset-y-0 right-0 w-80 bg-slate-900 border-l border-cyan-500/20 shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5"/>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.matches(location.pathname);
            
            if (item.hasDropdown) {
              return (
                <div key={item.label} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-white transition-colors ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "hover:bg-cyan-500/10 hover:text-cyan-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5"/>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="ml-4 space-y-1 border-l border-cyan-500/20 pl-4">
                      {item.dropdownItems.map((dropdownItem) => {
                        const DropdownIcon = dropdownItem.icon;
                        const isDropdownActive = location.pathname === dropdownItem.href;
                        return (
                          <Link 
                            key={dropdownItem.href} 
                            to={dropdownItem.href} 
                            onClick={onClose} 
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isDropdownActive
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                            }`}
                          >
                            <DropdownIcon className="w-4 h-4"/>
                            <span>{dropdownItem.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link 
                key={item.href} 
                to={item.href} 
                onClick={onClose} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "hover:bg-cyan-500/10 hover:text-cyan-300"
                }`}
              >
                <Icon className="w-5 h-5"/>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Contact section */}
        <div className="p-4 border-t border-cyan-500/20 space-y-3">
          <Link 
            to="/contact" 
            onClick={onClose} 
            className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
          >
            Get Started Today
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <Link to="/contact" onClick={onClose} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </Link>
            <Link to="/contact" onClick={onClose} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
