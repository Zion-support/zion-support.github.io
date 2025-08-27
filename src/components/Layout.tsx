import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Users, 
  Settings, 
  LogOut,
  User,
  Bell,
  Search,
  Zap,
  Brain,
  Shield,
  Rocket,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Globe,
  TrendingUp,
  HardDrive
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      { label: 'AI Solutions', href: '/services/ai', icon: Brain },
      { label: 'Cloud & DevOps', href: '/services/cloud', icon: HardDrive },
      { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { label: 'IT Infrastructure', href: '/services/infrastructure', icon: Building2 },
      { label: 'Digital Transformation', href: '/services/transformation', icon: TrendingUp },
      { label: 'Consulting', href: '/services/consulting', icon: Users }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: Rocket,
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
      { label: 'SMB Solutions', href: '/solutions/smb', icon: Users },
      { label: 'Startup Accelerator', href: '/solutions/startup', icon: Rocket },
      { label: 'Industry-Specific', href: '/solutions/industry', icon: Globe },
      { label: 'Custom Development', href: '/solutions/custom', icon: Settings }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: Building2,
    children: [
      { label: 'About Us', href: '/about', icon: Users },
      { label: 'Our Team', href: '/team', icon: Users },
      { label: 'Careers', href: '/careers', icon: Users },
      { label: 'Partners', href: '/partners', icon: Users },
      { label: 'News & Updates', href: '/news', icon: FileText }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { label: 'Blog & Insights', href: '/blog', icon: FileText },
      { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { label: 'Whitepapers', href: '/whitepapers', icon: FileText },
      { label: 'Webinars', href: '/webinars', icon: Users },
      { label: 'Documentation', href: '/documentation', icon: FileText },
      { label: 'Support Center', href: '/support', icon: HelpCircle }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Users
  }
];

const sidebarNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      { label: 'AI Solutions', href: '/services/ai', icon: Brain },
      { label: 'Cloud & DevOps', href: '/services/cloud', icon: HardDrive },
      { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { label: 'IT Infrastructure', href: '/services/infrastructure', icon: Building2 },
      { label: 'Digital Transformation', href: '/services/transformation', icon: TrendingUp },
      { label: 'Consulting', href: '/services/consulting', icon: Users }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: Rocket,
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
      { label: 'SMB Solutions', href: '/solutions/smb', icon: Users },
      { label: 'Startup Accelerator', href: '/solutions/startup', icon: Rocket },
      { label: 'Industry-Specific', href: '/solutions/industry', icon: Globe },
      { label: 'Custom Development', href: '/solutions/custom', icon: Settings }
    ]
  },
  {
    label: 'Company',
    href: '/about',
    icon: Building2,
    children: [
      { label: 'About Us', href: '/about', icon: Users },
      { label: 'Our Team', href: '/team', icon: Users },
      { label: 'Careers', href: '/careers', icon: Users },
      { label: 'Partners', href: '/partners', icon: Users },
      { label: 'News & Updates', href: '/news', icon: FileText }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { label: 'Blog & Insights', href: '/blog', icon: FileText },
      { label: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { label: 'Whitepapers', href: '/whitepapers', icon: FileText },
      { label: 'Webinars', href: '/webinars', icon: Users },
      { label: 'Documentation', href: '/documentation', icon: FileText },
      { label: 'Support Center', href: '/support', icon: HelpCircle }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Users
  }
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.children ? (
                      <div
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                        onMouseEnter={() => setDropdownOpen(item.label)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50 shadow-sm'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                        {item.label}
                      </Link>
                    )}
                    
                    {/* Dropdown Menu */}
                    {item.children && dropdownOpen === item.label && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200 animate-in fade-in-0 zoom-in-95">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {child.icon && <child.icon className="w-4 h-4 mr-2" />}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Search, Notifications, User Menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
              </div>

              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">User</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSidebarDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <div className="flex items-center">
                          {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                          {item.label}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          sidebarDropdownOpen === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {sidebarDropdownOpen === item.label && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {child.icon && <child.icon className="w-4 h-4 mr-2 inline" />}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3 inline" />}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Transforming businesses with cutting-edge technology solutions. From AI and quantum computing to cloud infrastructure and cybersecurity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>+1 302 464 0950</li>
                <li>kleber@ziontechgroup.com</li>
                <li>364 E Main St STE 1008<br />Middletown DE 19709</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}