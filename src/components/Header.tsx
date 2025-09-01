import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
<<<<<<< HEAD

<<<<<<< HEAD
 * Header function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function Header({ className }: HeaderProps) {

=======
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
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
  MapPin,
  ExternalLink,
  Cloud
} from 'lucide-react';

interface HeaderProps {
<<<<<<< HEAD
  // Add your props here

=======
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
<<<<<<< HEAD
    
=======
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
    // You can add theme switching logic here
  }}};

    // Add search logic here'
    // console.log('Searching for:', searchQuery)};

  return ()
    <header 
      className={cn()
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled "
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
          : "bg-transparent",
        className
      )}
    >"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}"
          <Link to="/" className="flex items-center space-x-3 group">"
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white"  />
            </div>"
            <div className="hidden sm:block">"
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
=======
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions') },
    { name: 'About', href: '/about', current: location.pathname.startsWith('/about') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname.startsWith('/blog') },
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    } ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  item.current
                    ? 'text-cyan-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
<<<<<<< HEAD
              onClick={() => setIsSearchOpen(!isSearchOpen)}"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >"
              <Search className="w-5 h-5"  />
=======
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
            </button>

            {/* Theme toggle */}
            <button
<<<<<<< HEAD
              onClick={toggleTheme}"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >'"
              {theme === 'dark' ? <Sun className="w-5 h-5"  /> : <Moon className="w-5 h-5"  />}
=======
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>

<<<<<<< HEAD
              <AnimatePresence>
                {isUserMenuOpen && (<motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}"
                    className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >"
                    <div className="p-4 border-b border-gray-700">"
                      <div className="flex items-center space-x-3">"
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">"
                          <User className="w-5 h-5 text-white"  />
                        </div>
                        <div>"
                          <p className="text-white font-medium">John Doe</p>"
                          <p className="text-gray-400 text-sm">john@ziontech.com</p>
                        </div>
                      </div>
                    </div>"
                    <div className="py-2">
                      <Link"
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <User className="w-4 h-4"  />
                        <span>Profile</span>
                      </Link>
                      <Link"
                        to="/dashboard"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <BarChart3 className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                      <Link"
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >"
                        <Settings className="w-4 h-4"  />
                        <span>Settings</span>
                      </Link>"
                      <div className="border-t border-gray-700 my-2"></div>
                      <button"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-colors w-full text-left"
                        onClick={() => {
                          // Add logout logic here
                          setIsUserMenuOpen(false) }}
                      >"
                        <LogOut className="w-4 h-4"  />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>) }
              </AnimatePresence>
=======
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400"
                  >
                    Settings
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-cyan-400">
                    Sign out
                  </button>
                </div>
              )}
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
            </div>

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>

            {/* Mobile menu button */}
            <button
<<<<<<< HEAD
              onClick={toggleMobileMenu}"
              className="lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
              
            >"
              {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
=======
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, solutions, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.current
                    ? 'text-cyan-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/request-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

<<<<<<< HEAD
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}"
            className="lg:hidden bg-gray-900 border-t border-gray-700"
          >"
            <div className="px-4 py-6 space-y-6">
              
              {/* Mobile Navigation Links */}"
              <div className="space-y-4">
                <Link"
                  to="/"
                  className="block text-white hover:text-blue-400 transition-colors text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                "
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Services</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/ai-services"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI Services
                    </Link>
                    <Link"
                      to="/it-services"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      IT Services
                    </Link>
                    <Link"
                      to="/micro-saas"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS
                    </Link>
                    <Link"
                      to="/cloud-devops"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cloud & DevOps
                    </Link>
                    <Link"
                      to="/cybersecurity"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cybersecurity
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Solutions</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/enterprise"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Enterprise
                    </Link>
                    <Link"
                      to="/healthcare"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Healthcare
                    </Link>
                    <Link"
                      to="/financial"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Financial
                    </Link>
                    <Link"
                      to="/government"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Government
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Company</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/about"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link"
                      to="/contact"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link"
                      to="/careers"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                    <Link"
                      to="/blog"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
"
                <div className="space-y-2">"
                  <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Support</h3>"
                  <div className="pl-4 space-y-2">
                    <Link"
                      to="/help"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Help Center
                    </Link>
                    <Link"
                      to="/documentation"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Documentation
                    </Link>
                    <Link"
                      to="/api"
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      API Reference
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Info */}"
              <div className="pt-4 border-t border-gray-700 space-y-3">"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Phone className="w-4 h-4"  />"
                  <span className="text-sm">+1(555) 123-4567</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4"  />"
                  <span className="text-sm">contact@ziontechgroup.com</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4"  />"
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Mobile CTA */}"
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link"
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
                <Link"
                  to="/demo"
                  className="block w-full border border-gray-600 text-white text-center py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>
    </header>) }
'"
=======
export default Header;
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
