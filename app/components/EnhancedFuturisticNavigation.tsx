import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  ArrowRight,
  Sparkles,
  Star,
  Award,
  Rocket
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  featured?: boolean;
  children?: NavigationItem[];
}

const EnhancedFuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      description: 'Advanced AI Solutions',
      featured: true,
      children: [
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Data Intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'Creative AI' },
        { name: 'AI Customer Support', href: '/ai-customer-support', description: 'Smart Support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI Security' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence', description: 'Smart Analytics' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Process Automation' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision', description: 'Visual Intelligence' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', description: 'Voice AI' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Shield className="w-5 h-5" />,
      description: 'Technology Solutions',
      children: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Cloud Solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity-solutions', description: 'Security Services' },
        { name: 'Web Development', href: '/web-development', description: 'Custom Websites' },
        { name: 'Mobile Development', href: '/mobile-development', description: 'Mobile Apps' },
        { name: 'Database Management', href: '/database-management', description: 'Data Solutions' },
        { name: 'Custom Software', href: '/custom-software', description: 'Bespoke Software' },
        { name: 'Network Infrastructure', href: '/network-infrastructure', description: 'Network Solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-5 h-5" />,
      description: 'Ready-to-Use Solutions',
      featured: true,
      children: [
        { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer', description: 'Email Intelligence', featured: true },
        { name: 'Smart Inventory Optimizer', href: '/smart-inventory-optimizer', description: 'Inventory AI', featured: true },
        { name: 'Customer Sentiment Tracker', href: '/ai-customer-sentiment-tracker', description: 'Sentiment Analysis', featured: true },
        { name: 'Smart Expense Categorizer', href: '/smart-expense-categorizer', description: 'Expense Management', featured: true },
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', description: 'Business Intelligence' },
        { name: 'Zion Security Shield', href: '/zion-security-shield', description: 'Security Suite' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', description: 'Cloud Storage' },
        { name: 'Zion Content Studio', href: '/zion-content-studio', description: 'Content Creation' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-5 h-5" />,
      description: 'Next-Gen Connectivity',
      children: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', description: 'Network Setup' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', description: 'Edge Solutions' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', description: 'IoT Integration' },
        { name: '5G Smart City', href: '/5g-smart-city-solutions', description: 'Smart Cities' },
        { name: '5G Private Networks', href: '/5g-private-networks', description: 'Private Networks' },
        { name: '5G Mobile Apps', href: '/5g-mobile-applications', description: 'Mobile Applications' },
        { name: '5G Data Analytics', href: '/5g-data-analytics', description: 'Data Intelligence' }
      ]
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                AI & Technology Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-white hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.featured && (
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        {item.icon}
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        {item.featured && (
                          <Award className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.featured && (
                                    <Star className="w-3 h-3 text-yellow-400" />
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm">{child.description}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <Link
                          to={item.href}
                          className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All {item.name}
                          <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-500/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center space-x-2 px-3 py-2 text-white font-medium">
                    {item.icon}
                    <span>{item.name}</span>
                    {item.featured && (
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                  {item.children && (
                    <div className="ml-6 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedFuturisticNavigation;