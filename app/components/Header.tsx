import { Zap, Users, Mail, Phone, Globe, Brain, Search, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const [searchQuery, setSearchQuery] = useState('');

const [showSearch, setShowSearch] = useState(false);

const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
  return;
};
    window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',"
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      href: '/ai-services',"
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',"
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Software Development', href: '/software-development' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'Web Development', href: '/web-development' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',"
      icon: <Wifi className="w-4 h-4" />,
      dropdown: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Data Analytics', href: '/5g-data-analytics' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',"
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Content Studio', href: '/zion-content-studio' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'AI Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',"
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',"
      icon: <Phone className="w-4 h-4" />
    }
  ];

const isActive = (href: string) => location.pathname === href;
  return (
    <header className="{`fixed" top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      ""
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4">
        ""
        <div className="container mx-auto flex justify-between items-center text-sm">
          ""
        <div className="flex items-center space-x-6">
            ""
        <div className="flex items-center space-x-2">"
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            ""
        <div className="flex items-center space-x-2">"
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            ""
        <div className="flex items-center space-x-2">"
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          ""
        <div className="hidden md:flex items-center space-x-4">"
            <span className="text-cyan-200">24/7 Support Available</span>
            ""
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}"
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20">
        ""
        <div className="container mx-auto px-4">
          ""
        <div className="flex justify-between items-center h-16">
            {/* Logo */}"
            <Link to="/" className="flex items-center space-x-2 group">
              ""
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                <Zap className="w-6 h-6 text-white" />
              </div>
              ""
        <div className="flex flex-col">"
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>"
                <span className="text-xs text-cyan-400 -mt-1">Advanced AI & IT Solutions</span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            ""
        <div className="hidden xl:flex items-center space-x-1">
              {navigationItems.map((item) => ("
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="{`flex" items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.icon}"
                    <span className="font-medium">{item.name}</span>"
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="{`absolute" top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}>
                      ""
        <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            ""
        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>"
                            <span className="text-sm">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Search and CTA Buttons */}
            ""
        <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}"
                className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >"
                <Search className="w-5 h-5" />
              </button>
              {/* Search Bar */}
              {showSearch && (
                ""
        <div className="absolute top-full right-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl z-50">
                  ""
        <div className="p-4">
                    <input"
                      type="text""
                      placeholder="Search services, pages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      autoFocus
                    />
                    ""
        <div className="mt-2 text-sm text-gray-400">
                      Press Enter to search
                    </div>
                  </div>
                </div>
              )}"
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get Quote
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}"
              className="xl:hidden p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >"
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="{`xl:hidden" transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          ""
        <div className="bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
            ""
        <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="{`flex" items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}"
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    ""
        <div className="ml-8 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/30 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          ""
        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              ""
        <div className="pt-4 border-t border-cyan-500/20">"
                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;"