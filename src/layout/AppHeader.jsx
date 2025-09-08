import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, ChevronRight } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle the theme
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { 
      name: 'Services', 
      path: '/services', 
      icon: null,
      dropdown: [
        { name: 'AI & Machine Learning', path: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },
        { name: 'Quantum Computing', path: '/services?category=quantum', icon: Zap, color: 'from-blue-500 to-cyan-500' },
        { name: 'Blockchain & Web3', path: '/services?category=blockchain', icon: Lock, color: 'from-green-500 to-emerald-500' },
        { name: 'IoT & Edge Computing', path: '/services?category=iot', icon: Cloud, color: 'from-orange-500 to-red-500' },
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Users, color: 'from-indigo-500 to-purple-500' },
        { name: 'FinTech Solutions', path: '/services?category=fintech', icon: Database, color: 'from-yellow-500 to-orange-500' },
        { name: 'Green Technology', path: '/services?category=green-tech', icon: Shield, color: 'from-green-400 to-teal-500' },
        { name: 'Cybersecurity', path: '/services?category=cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },
      ]
    },
    { 
      name: 'Marketplace', 
      href: '/marketplace', 
      current: false,
      dropdown: [
        { name: 'Products', href: '/marketplace' },
        { name: 'Services', href: '/services' },
        { name: 'Talent', href: '/talent' },
        { name: 'Equipment', href: '/equipment' },
        { name: 'Categories', href: '/categories' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: false,
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: false,
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Sitemap', href: '/sitemap' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' }
      ]
    },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-slate-900 shadow-lg border-b border-slate-700 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs lg:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Future Technology Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        item.current
                          ? 'text-cyan-400 bg-slate-800'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-cyan-400 bg-slate-800'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* User menu */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-cyan-400 bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Search */}
            <div className="px-2 pt-2 pb-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close dropdowns */}
      {activeDropdown !== null && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}
