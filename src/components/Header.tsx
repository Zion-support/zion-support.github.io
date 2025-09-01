import React, { useState, useEffect } from 'react';''
import { Link, useLocation } from 'react-router-dom';
import {

  Menu,
  X,
  Search,
  User,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Phone,
  Mail,
  MapPin,'
  ExternalLink,''
  Cloud''''
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);'
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);''
  const [isSearchOpen, setIsSearchOpen] = useState(false);'''
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');'''
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };'
''
    window.addEventListener('scroll', handleScroll);''
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect ( () => {
    };'
''
'''
    window.addEventListener('scroll', handleScroll);'''
    return () => window.removeEventListener('scroll', handleScroll)}, []);'
''
  '''
    // Add search logic here''''
    // console.log('Searching for:', searchQuery)};

  return ()
    <header 
      className={cn()
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300","""
        isScrolled """"
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg""""
          : "bg-transparent","
        className""
      )}"""
    >""""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
        <div className="flex items-center justify-between h-16 lg:h-20">""
          """
          {/* Logo */}""""
          <Link to="/" className="flex items-center space-x-3 group">""""
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""""
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white"  />"""
            </div>""""
            <div className="hidden sm:block">""""
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
  const toggleTheme = () => {
'
''
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
'
  const navigation = [''
    { name: 'Home', href: '/', current: location.pathname === '/' },''
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },''
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions') },''
    { name: 'About', href: '/about', current: location.pathname.startsWith('/about') },''
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },''
    { name: 'Blog', href: '/blog', current: location.pathname.startsWith('/blog') },''
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' }
  ];

  return()
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
'
      isScrolled ''
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' ''`
        : 'bg-transparent''`'"`
    } ${className || ''}`}>""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
        <div className="flex justify-between items-center h-16">"
          {/* Logo */}""
          <div className="flex-shrink-0">""
            <Link to="/" className="flex items-center space-x-2">""
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">""
                <Zap className="w-5 h-5 text-white" />"
              </div>""
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>
"
          {/* Desktop Navigation */}""
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}`
                to={item.href}``
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
'
                  item.current''
                    ? 'text-cyan-400 bg-gray-800/50'''`
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'``
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
"
          {/* Right side actions */}""
          <div className="flex items-center space-x-4">
            {/* Search */}"
            <button""
                Zion Tech Group"""
              </h1>""""
              <p className="text-xs lg:text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                Innovation Group
              </p>
            </div>"
          </Link>""
"""
          {/* Desktop Navigation */}""""
          <div className="hidden lg:block">
            <MainNavigation  />"
          </div>""
"""
          {/* Right Side Actions */}""""
          <div className="flex items-center space-x-4">
            "
            {/* Search Button */}""
            <button"""
              onClick={() => setIsSearchOpen(!isSearchOpen)}""""
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors""""
              aria-label="Search""""
            >""""
              <Search className="w-5 h-5"  />"
              onClick={() => setIsSearchOpen(!isSearchOpen)}""
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200""
            >""
              <Search className="w-5 h-5" />
            </button>
"
            {/* Theme Toggle */}""
            <button"""
              onClick={toggleTheme}"""'"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors""'"'"
              aria-label="Toggle theme"'"'"'"
            >'"'"'"'"
              {theme === 'dark' ? <Sun className="w-5 h-5"  /> : <Moon className="w-5 h-5"  />}"
              onClick={toggleTheme}""
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"'"
            >'"'"
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}"
            </button>""
"""
            {/* Notifications */}""""
            <button className="p-2 text-gray-300 hover:text-blue-400 transition-colors relative">""""
              <Bell className="w-5 h-5"  />""""
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>"
            </button>""
"""
            {/* User Menu */}""""
            <div className="relative">""
              <button"""
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}""""
                className="flex items-center space-x-2 p-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800/50""""
              >""""
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">""""
                  <User className="w-4 h-4 text-white"  />"""
                </div>""""
                <ChevronDown className="w-4 h-4"  />
              </button>"
""
                          setIsUserMenuOpen (false) }}"""
                      >""""
                        <LogOut className="w-4 h-4"  />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>) }
              </AnimatePresence>"
              {isUserMenuOpen && (""
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">"
                  <Link""
                    to="/profile"""
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400"
                  >
                    Profile
                  </Link>"
                  <Link""
                    to="/settings"""
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400"
                  >
                    Settings"
                  </Link>""
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400">
                    Sign out
                  </button>
                </div>
              )}
            </div>
"
            {/* Mobile Menu Button */}""
            <button"""
              onClick={toggleMobileMenu}""""
              className="lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors""""
              aria-label="Toggle mobile menu""""
            >""""
              {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}""
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200""
            >""
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search bar */}"
        {isSearchOpen && (""
          <div className="pb-4">""
            <div className="relative">"
              <input""
                type="text"""
                placeholder="Search services, solutions, or content..."
                value={searchQuery}"
                onChange={(e) => setSearchQuery(e.target.value)}""
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              />""
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Search Bar */}
      <AnimatePresence>
        {isSearchOpen && ('
          <motion.div''"
            initial={{ opacity: 0, height: 0 }}''"'"
            animate={{ opacity: 1, height: 'auto' }}"""
            exit={{ opacity: 0, height: 0 }}""""
            className="bg-gray-900 border-t border-gray-700""""
          >""""
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">""""
              <form onSubmit={handleSearch} className="space-y-4">""""
                <div className="relative">""""
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"  />"""
                  <input""""
                    type="text"""
                    value={searchQuery}"""
                    onChange={(e) => setSearchQuery(e.target.value)}""""
                    placeholder="Search services, solutions, or resources...""""
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />"
                </div>""
                """
                {/* Quick Links */}""""
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                  {quickLinks.map((link) => ("
                    <Link""
                      key={link.name}"""
                      to={link.href}""""
                      className="flex items-center space-x-2 p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"""
                      onClick={() => setIsSearchOpen(false)}"""
                    >""""
                      <link.icon className="w-4 h-4" />""""
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}"
""
"""
              {/* Contact Info */}""""
              <div className="pt-4 border-t border-gray-700 space-y-3">""""
                <div className="flex items-center space-x-3 text-gray-300">""""
                  <Phone className="w-4 h-4"  />""""
                  <span className="text-sm">+1 (555) 123-4567</span>"""
                </div>""""
                <div className="flex items-center space-x-3 text-gray-300">""""
                  <Mail className="w-4 h-4"  />""""
                  <span className="text-sm">contact@ziontechgroup.com</span>"""
                </div>""""
                <div className="flex items-center space-x-3 text-gray-300">""""
                  <MapPin className="w-4 h-4"  />""""
                  <span className="text-sm">San Francisco, CA</span>
                </div>"
              </div>""
"""
              {/* Mobile CTA */}""""
              <div className="pt-4 border-t border-gray-700 space-y-3">"""
                <Link""""
                  to="/contact""""
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMobileMenu}
                >"
                  Get Started""
                </Link>"""
                <Link""""
                  to="/demo""""
                  className="block w-full border border-gray-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>'"
export default Header;'"'"
    </header>) }'"'"'"
'"'"'"`
'"`'"`