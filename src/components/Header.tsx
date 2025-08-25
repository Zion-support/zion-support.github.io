import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight,
  Sun,
  Moon,
  Monitor,
  Bell,
  User,
  ShoppingCart,
  ExternalLink,
  Settings,
  LogOut
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle search
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, navigate]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Navigation items with enhanced structure
  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'AI & Machine Learning',
          icon: Brain,
          description: 'Intelligent solutions powered by artificial intelligence',
          items: [
            { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
            { name: 'Machine Learning Solutions', path: '/services/machine-learning', description: 'Custom ML models and algorithms' },
            { name: 'Natural Language Processing', path: '/services/nlp', description: 'Text and speech processing solutions' },
            { name: 'Computer Vision', path: '/services/computer-vision', description: 'Image and video analysis' }
          ]
        },
        {
          title: 'Quantum Technology',
          icon: Cpu,
          description: 'Next-generation quantum computing solutions',
          items: [
            { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum processing power' },
            { name: 'Quantum Cryptography', path: '/services/quantum-cryptography', description: 'Unbreakable encryption' },
            { name: 'Quantum Machine Learning', path: '/services/quantum-ml', description: 'Quantum-enhanced AI' }
          ]
        },
        {
          title: 'Cybersecurity',
          icon: Shield,
          description: 'Advanced security and compliance solutions',
          items: [
            { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring' },
            { name: 'Compliance Management', path: '/services/compliance', description: 'SOC2, ISO, GDPR compliance' },
            { name: 'Penetration Testing', path: '/services/pen-testing', description: 'Security vulnerability assessment' }
          ]
        },
        {
          title: 'Cloud & DevOps',
          icon: Monitor,
          description: 'Scalable cloud infrastructure and automation',
          items: [
            { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
            { name: 'DevOps Automation', path: '/services/devops', description: 'CI/CD and infrastructure as code' },
            { name: 'Microservices Architecture', path: '/services/microservices', description: 'Scalable service design' }
          ]
        }
      ]
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Enterprise Solutions',
          icon: Building,
          description: 'Large-scale business transformations',
          items: [
            { name: 'Digital Transformation', path: '/solutions/digital-transformation', description: 'Complete business modernization' },
            { name: 'Enterprise Architecture', path: '/solutions/enterprise-architecture', description: 'Strategic IT planning' },
            { name: 'Legacy System Modernization', path: '/solutions/legacy-modernization', description: 'System upgrades and migration' }
          ]
        },
        {
          title: 'Industry Solutions',
          icon: Target,
          description: 'Specialized industry expertise',
          items: [
            { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'HIPAA-compliant solutions' },
            { name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' },
            { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Industry 4.0 and IoT' }
          ]
        }
      ]
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  // Quick actions
  const quickActions = [
    { icon: Phone, label: 'Call Us', action: () => window.open('tel:+1-555-0123', '_self') },
    { icon: Mail, label: 'Email', action: () => window.open('mailto:info@ziontechgroup.com', '_self') },
    { icon: MapPin, label: 'Location', action: () => window.open('https://maps.google.com/?q=San+Francisco+CA', '_blank') }
  ];

  // Notifications (mock data)
  const notifications = [
    { id: 1, title: 'New AI Service Available', message: 'Quantum Neural Network Platform is now live', time: '2 hours ago', unread: true },
    { id: 2, title: 'Security Update', message: 'Latest cybersecurity patches deployed', time: '1 day ago', unread: false },
    { id: 3, title: 'Maintenance Notice', message: 'Scheduled maintenance on Sunday', time: '2 days ago', unread: false }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Innovation • Technology • Future</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.path)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium">
                      {item.label}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.path && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-100 scale-100 transition-all duration-200">
                    <div className="grid grid-cols-1 gap-6">
                      {item.dropdownItems?.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <category.icon className="w-5 h-5 text-cyan-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                          <div className="space-y-2">
                            {category.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                      {subItem.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{subItem.description}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition-colors duration-200" />
                                </div>
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4">
                  <form onSubmit={handleSearch} className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services, solutions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        autoFocus
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {notifications.some(n => n.unread) && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    <button className="text-sm text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
                      Mark all read
                    </button>
                  </div>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-3 rounded-lg ${
                        notification.unread ? 'bg-cyan-50 dark:bg-cyan-900/20' : 'bg-gray-50 dark:bg-gray-800'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">{notification.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{notification.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</p>
                          </div>
                          {notification.unread && (
                            <span className="w-2 h-2 bg-cyan-500 rounded-full ml-2"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                aria-label="User menu"
              >
                <User className="w-5 h-5" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2">
                  <div className="space-y-1">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      <Target className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <hr className="border-gray-200 dark:border-gray-700" />
                    <button className="w-full text-left flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors duration-200">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-6 space-y-4">
            {/* Search in mobile menu */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Mobile navigation items */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.path ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.path && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((category, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="font-medium text-gray-900 dark:text-white text-sm">{category.title}</h4>
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                                >
                                  {subItem.name}
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
                      className="block p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick actions in mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex flex-col items-center space-y-2 p-3 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA in mobile */}
            <Link
              to="/contact"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-center shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
