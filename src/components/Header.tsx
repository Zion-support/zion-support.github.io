import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Cloud,
  Lock,
  Workflow,
  Eye,
  Key,
  Sparkles,
  Heart,
  Target as TargetIcon,
  ArrowUpRight,
  CheckCircle2,
  Star as StarIcon,
  ShoppingBag,
  Building
} from 'lucide-react';

interface NavigationItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    category: string;
    items: {
      label: string;
      path: string;
      description: string;
      icon: React.ComponentType<any>;
    }[];
  }[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'AI & Machine Learning',
          items: [
            { label: 'AI Solutions', path: '/services/ai-solutions', description: 'Cutting-edge AI services', icon: Brain },
            { label: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Self-operating AI platforms', icon: Workflow },
            { label: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Data-driven insights', icon: BarChart3 },
            { label: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior analysis', icon: Users }
          ]
        },
        {
          category: 'Cybersecurity',
          items: [
            { label: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions', icon: Shield },
            { label: 'SOC2 Compliance', path: '/services/soc2-compliance', description: 'Compliance automation', icon: CheckCircle2 },
            { label: 'Quantum Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof security', icon: Lock }
          ]
        },
        {
          category: 'Infrastructure',
          items: [
            { label: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure', icon: Cpu },
            { label: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud solutions & automation', icon: Cloud },
            { label: '5G Enterprise Solutions', path: '/services/5g-enterprise-solutions', description: 'Next-gen connectivity', icon: Network }
          ]
        },
        {
          category: 'Emerging Tech',
          items: [
            { label: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions', icon: Zap },
            { label: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Distributed ledger technology', icon: Key },
            { label: 'IoT & Data Analytics', path: '/services/iot-data-analytics', description: 'Connected intelligence', icon: Database }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Industry Solutions',
          items: [
            { label: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health transformation', icon: Heart },
            { label: 'Financial Services', path: '/solutions/financial-services', description: 'Fintech innovation', icon: TrendingUp },
            { label: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart manufacturing', icon: Target },
            { label: 'Retail & E-commerce', path: '/solutions/retail-ecommerce', description: 'Digital commerce', icon: ShoppingBag }
          ]
        },
        {
          category: 'Business Solutions',
          items: [
            { label: 'Digital Transformation', path: '/solutions/digital-transformation', description: 'Business modernization', icon: Rocket },
            { label: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade platforms', icon: Building },
            { label: 'Micro SAAS Solutions', path: '/solutions/micro-saas', description: 'Scalable software solutions', icon: Code }
          ]
        }
      ]
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white neon-text-cyan">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium">Innovation • Intelligence • Impact</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 ${
                      location.pathname === item.path ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10">
                    <div className="p-6 space-y-6">
                      {item.dropdownItems?.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                to={subItem.path}
                                onClick={closeDropdowns}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-200">
                                  <subItem.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {subItem.label}
                                  </div>
                                  <div className="text-gray-400 text-sm">
                                    {subItem.description}
                                  </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
              />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-futuristic"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleSidebar} />
          <div className="fixed right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-3"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdownItems?.map((category, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
                                  {category.category}
                                </h4>
                                {category.items.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    onClick={toggleSidebar}
                                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-2 pl-4"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={toggleSidebar}
                        className={`block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-3 ${
                          location.pathname === item.path ? 'text-cyan-400' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-cyan-500/20 space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={toggleSidebar}
                  className="btn-futuristic w-full text-center"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
