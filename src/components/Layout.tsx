import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Briefcase, 
  Phone, 
  Shield, 
  FileText, 
  Users, 
  Building, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  Code, 
  Rocket, 
  Target, 
  Lightbulb, 
  Zap, 
  Database, 
  Network, 
  Server, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  BarChart3, 
  ShoppingCart, 
  Wrench, 
  Star, 
  Award, 
  TrendingUp, 
  Palette, 
  Monitor, 
  Key, 
  Eye, 
  ShieldCheck, 
  Bug, 
  Activity, 
  PieChart, 
  LineChart, 
  Map, 
  Calendar, 
  Clock, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  BookOpen, 
  Video, 
  GraduationCap, 
  Users2, 
  Cookie,
  Zap as ZapIcon
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Search from './Search';
import ScrollToTop from './ScrollToTop';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: React.ComponentType<{ className?: string }>;
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { 
    label: 'Services', 
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI Systems', href: '/services#ai', icon: Brain },
      { label: 'Cloud Platforms', href: '/services#cloud', icon: Cloud },
      { label: 'Cybersecurity', href: '/services#cybersecurity', icon: Shield },
      { label: 'Micro SaaS', href: '/services#saas', icon: Code },
      { label: 'Quantum Technology', href: '/services#quantum', icon: Rocket },
      { label: 'Space Technology', href: '/services#space', icon: Globe }
    ]
  },
  { label: 'Blog', href: '/blog', icon: FileText },
  { label: 'About', href: '/about', icon: Building },
  { label: 'Contact', href: '/contact', icon: Phone }
];

const sidebarNavigation: NavItem[] = [
  { 
    label: 'Main', 
    icon: Home, 
    href: '/', 
    children: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Services', href: '/services', icon: Briefcase },
      { label: 'Contact', href: '/contact', icon: Phone }
    ]
  },
  { 
    label: 'Services', 
    icon: Briefcase, 
    href: '/services', 
    children: [
      { label: 'AI Autonomous Systems', href: '/services#ai', icon: Brain },
      { label: 'Cloud Platforms', href: '/services#cloud', icon: Cloud },
      { label: 'Cybersecurity', href: '/services#cybersecurity', icon: Shield },
      { label: 'Micro SaaS', href: '/services#saas', icon: Code },
      { label: 'Technical Consulting', href: '/services', icon: Users },
      { label: 'System Integration', href: '/services', icon: Network }
    ]
  },
  { 
    label: 'Company', 
    icon: Building, 
    href: '#', 
    children: [
      { label: 'About Us', href: '/', icon: Building },
      { label: 'Our Team', href: '/', icon: Users },
      { label: 'Careers', href: '/', icon: Target },
      { label: 'Partners', href: '/', icon: Users2 }
    ]
  },
  { 
    label: 'Resources', 
    icon: BookOpen, 
    href: '#', 
    children: [
      { label: 'Blog', href: '/', icon: FileText },
      { label: 'Case Studies', href: '/', icon: BarChart3 },
      { label: 'White Papers', href: '/', icon: FileText },
      { label: 'Webinars', href: '/', icon: Video },
      { label: 'Documentation', href: '/', icon: HelpCircle }
    ]
  },
  { 
    label: 'Support', 
    icon: HelpCircle, 
    href: '#', 
    children: [
      { label: 'Help Center', href: '/', icon: HelpCircle },
      { label: 'Contact Support', href: '/contact', icon: MessageSquare },
      { label: 'Training', href: '/', icon: GraduationCap },
      { label: 'Status Page', href: '/', icon: Activity }
    ]
  },
  { 
    label: 'Legal', 
    icon: Shield, 
    href: '#', 
    children: [
      { label: 'Privacy Policy', href: '/privacy', icon: Shield },
      { label: 'Terms of Service', href: '/terms', icon: FileText },
      { label: 'Cookie Policy', href: '/', icon: Cookie },
      { label: 'GDPR Compliance', href: '/', icon: Lock }
    ]
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
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
    setSidebarOpen(false);
  }, [location]);

  const toggleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-foreground rounded-lg flex items-center justify-center">
                <ZapIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg z-50">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                          >
                            {child.icon && <child.icon className="w-4 h-4" />}
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Search />
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                        >
                          <span className="flex items-center space-x-2">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.label}</span>
                          </span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            dropdownOpen === item.label ? 'rotate-90' : ''
                          }`} />
                        </button>
                        {dropdownOpen === item.label && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                              >
                                {child.icon && <child.icon className="w-4 h-4" />}
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors ${
                          isActive(item.href) ? 'bg-accent text-accent-foreground' : ''
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-full w-64 bg-background border-r transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarNavigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSidebarDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          sidebarDropdownOpen === item.label ? 'rotate-90' : ''
                        }`} />
                      </button>
                      {sidebarDropdownOpen === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                            >
                              {child.icon && <child.icon className="w-4 h-4" />}
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors ${
                        isActive(item.href) ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content area */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        } md:ml-64`}>
          {children}
        </main>
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-4 right-4 md:hidden w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
}