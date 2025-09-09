import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

// Enhanced navigation structure
const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      { name: 'AI Solutions', href: '/ai-solutions', description: 'Cutting-edge AI services' },
      { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security' },
      { name: 'Digital Transformation', href: '/services/transformation', description: 'Business modernization' },
      { name: 'Infrastructure', href: '/services/infrastructure', description: 'IT infrastructure' },
      { name: 'Consulting', href: '/services/consulting', description: 'Strategic guidance' },
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale implementations' },
      { name: 'SMB Solutions', href: '/smb', description: 'Small business focused' },
      { name: 'Startup Solutions', href: '/startup', description: 'Growth acceleration' },
      { name: 'Government Solutions', href: '/government', description: 'Public sector expertise' },
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Globe,
    children: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News', href: '/news', description: 'Latest updates' },
      { name: 'Press', href: '/press', description: 'Media resources' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-xl lg:text-2xl font-bold">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-zion-slate-light">
              <div className="flex items-center space-x-2 hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-zion-cyan transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-zion-cyan hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-4 py-3 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0"
                >
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from '../layout/MainNavigation';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}