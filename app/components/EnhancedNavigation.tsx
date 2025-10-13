import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Code,
  Database,
  Smartphone,
  Server,
  Lock,
  Target,
  Users,
  Settings,
  TrendingUp,
  FileText,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { 
          label: 'AI Business Intelligence', 
          href: '/ai-business-intelligence',
          description: 'Advanced analytics and insights',
          price: 'From $299/month'
        },
        { 
          label: 'AI Content Generation', 
          href: '/ai-content-generation',
          description: 'Automated content creation',
          price: 'From $199/month'
        },
        { 
          label: 'AI Customer Support', 
          href: '/ai-customer-support',
          description: '24/7 intelligent support',
          price: 'From $399/month'
        },
        { 
          label: 'AI Cybersecurity', 
          href: '/ai-cybersecurity',
          description: 'AI-powered threat detection',
          price: 'From $499/month'
        },
        { 
          label: 'AI Data Analytics', 
          href: '/ai-data-analytics',
          description: 'Predictive analytics platform',
          price: 'From $349/month'
        },
        { 
          label: 'AI Marketing Automation', 
          href: '/ai-marketing-automation',
          description: 'Intelligent marketing campaigns',
          price: 'From $249/month'
        },
        { 
          label: 'AI Code Assistant', 
          href: '/ai-code-assistant',
          description: 'AI-powered development tools',
          price: 'From $199/month'
        },
        { 
          label: 'AI Document Processing', 
          href: '/ai-document-processing',
          description: 'Intelligent document analysis',
          price: 'From $149/month'
        },
        { 
          label: 'View All AI Services', 
          href: '/ai-services',
          featured: true
        }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { 
          label: 'Cloud Infrastructure', 
          href: '/cloud-infrastructure',
          description: 'Scalable cloud solutions',
          price: 'From $199/month'
        },
        { 
          label: 'Cybersecurity Solutions', 
          href: '/cybersecurity-solutions',
          description: 'Comprehensive security suite',
          price: 'From $299/month'
        },
        { 
          label: 'Web Development', 
          href: '/web-development',
          description: 'Custom web applications',
          price: 'From $2,999/project'
        },
        { 
          label: 'Mobile Development', 
          href: '/mobile-development',
          description: 'iOS & Android apps',
          price: 'From $4,999/project'
        },
        { 
          label: 'Database Management', 
          href: '/database-management',
          description: 'Optimized database solutions',
          price: 'From $149/month'
        },
        { 
          label: 'Custom Software', 
          href: '/custom-software',
          description: 'Tailored software solutions',
          price: 'From $5,999/project'
        },
        { 
          label: 'Network Infrastructure', 
          href: '/network-infrastructure',
          description: 'Enterprise networking',
          price: 'From $399/month'
        },
        { 
          label: 'DevOps Solutions', 
          href: '/devops-solutions',
          description: 'Automated deployment & monitoring',
          price: 'From $249/month'
        },
        { 
          label: 'View All IT Services', 
          href: '/it-services',
          featured: true
        }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { 
          label: 'Zion Analytics Pro', 
          href: '/zion-analytics-pro',
          description: 'AI-powered business intelligence',
          price: 'From $299/month'
        },
        { 
          label: 'Zion Security Shield', 
          href: '/zion-security-shield',
          description: 'Advanced cybersecurity protection',
          price: 'From $499/month'
        },
        { 
          label: 'Zion Cloud Vault', 
          href: '/zion-cloud-vault',
          description: 'Secure cloud storage solution',
          price: 'From $99/month'
        },
        { 
          label: 'Zion AI CRM Pro', 
          href: '/zion-ai-crm-pro',
          description: 'AI-powered customer management',
          price: 'From $199/month'
        },
        { 
          label: 'Zion Content Studio', 
          href: '/zion-content-studio',
          description: 'AI content creation platform',
          price: 'From $149/month'
        },
        { 
          label: 'Zion Project Manager Pro', 
          href: '/zion-ai-project-manager-pro',
          description: 'AI project management tools',
          price: 'From $99/month'
        },
        { 
          label: 'Zion Marketing Automation Pro', 
          href: '/zion-ai-marketing-automation-pro',
          description: 'Intelligent marketing platform',
          price: 'From $149/month'
        },
        { 
          label: 'Zion Financial Analytics Pro', 
          href: '/zion-financial-analytics-pro',
          description: 'AI financial insights & reporting',
          price: 'From $249/month'
        },
        { 
          label: 'View All Micro SAAS', 
          href: '/micro-saas',
          featured: true
        }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500',
      dropdown: [
        { 
          label: '5G Network Infrastructure', 
          href: '/5g-network-infrastructure',
          description: 'Next-gen network deployment',
          price: 'From $9,999/setup'
        },
        { 
          label: '5G IoT Solutions', 
          href: '/5g-iot-solutions',
          description: 'Connected device management',
          price: 'From $1,999/month'
        },
        { 
          label: '5G Edge Computing', 
          href: '/5g-edge-computing',
          description: 'Ultra-low latency processing',
          price: 'From $2,999/month'
        },
        { 
          label: '5G Smart City Solutions', 
          href: '/5g-smart-city-solutions',
          description: 'Urban infrastructure automation',
          price: 'From $19,999/project'
        },
        { 
          label: '5G Mobile Applications', 
          href: '/5g-mobile-applications',
          description: 'High-speed mobile apps',
          price: 'From $4,999/project'
        },
        { 
          label: '5G Private Networks', 
          href: '/5g-private-networks',
          description: 'Dedicated enterprise networks',
          price: 'From $7,999/month'
        },
        { 
          label: 'View All 5G Solutions', 
          href: '/5g-solutions',
          featured: true
        }
      ]
    }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg font-bold">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                      : 'text-white hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  <span className={`text-${item.color.split('-')[1]}-400`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden z-50">
                    <div className="p-4">
                      <div className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                        {item.label}
                      </div>
                      <div className="space-y-1">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.href}
                            className={`block p-3 rounded-lg transition-all duration-300 group ${
                              dropdownItem.featured
                                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                                : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className={`font-medium ${
                                  dropdownItem.featured ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                                } transition-colors`}>
                                  {dropdownItem.label}
                                </div>
                                {dropdownItem.description && (
                                  <div className="text-sm text-gray-300 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                )}
                              </div>
                              {dropdownItem.price && (
                                <div className="text-sm text-cyan-400 font-medium ml-2">
                                  {dropdownItem.price}
                                </div>
                              )}
                            </div>
                            {dropdownItem.featured && (
                              <div className="flex items-center text-cyan-400 text-sm mt-2">
                                <ArrowRight className="w-4 h-4 mr-1" />
                                Explore All Services
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Company Links */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                        : 'text-white hover:text-cyan-400 hover:bg-white/10'
                    } transition-all duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`text-${item.color.split('-')[1]}-400`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <div className="ml-6 space-y-1">
                    {item.dropdown.slice(0, 3).map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.href}
                        className="block px-3 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                    <Link
                      to={item.href}
                      className="block px-3 py-1 text-sm text-cyan-400 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Mobile Company Links */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Company
                </div>
                <div className="space-y-1">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;