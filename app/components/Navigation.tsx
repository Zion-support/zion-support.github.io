import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Brain, Shield, Zap, Globe, Phone, Mail, MapPin } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI & Machine Learning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Technology Solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Business Tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'DevOps Services', href: '/devops-services' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Network Security', href: '/network-security' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'System Integration', href: '/system-integration' },
    { name: 'Web Development', href: '/web-development' }
  ];

  const microSaasServices = [
    { name: 'Zion Content Studio', href: '/zion-content-studio' },
    { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
    { name: 'AI Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
    { name: '5G Edge Computing', href: '/5g-edge-computing' },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
    { name: '5G Private Networks', href: '/5g-private-networks' },
    { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
  ];

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support', href: '/support' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
        : 'bg-black/20 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
              <div className="text-xs text-gray-400 -mt-1">Advanced AI & IT Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(service.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={service.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(service.href)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-5 h-5 bg-gradient-to-r ${service.color} rounded flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <span className="font-medium">{service.title}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === service.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{service.title}</h3>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {(service.title === 'AI Services' ? aiServices :
                          service.title === 'IT Services' ? itServices :
                          service.title === 'Micro SAAS' ? microSaasServices :
                          fiveGServices).map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('Company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300">
                <span className="font-medium">Company</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {activeDropdown === 'Company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-3">Company</h3>
                    <div className="space-y-1">
                      {companyPages.map((page) => (
                        <Link
                          key={page.name}
                          to={page.href}
                          className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Contact Us</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Contact Bar */}
        <div className="lg:hidden border-t border-white/10 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Middletown, DE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;