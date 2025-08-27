import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Home, Briefcase, Phone, Shield, FileText, Users, Building, Globe, Brain, Cloud, Lock, Code, Rocket, Target, Lightbulb, Zap, Database, Network, Server, Settings, HelpCircle, MessageSquare, BarChart3, ShoppingCart, Wrench, Star, Award, TrendingUp, Palette, Monitor, Key, Eye, ShieldCheck, Bug, Activity, PieChart, LineChart, Map, Calendar, Clock, Mail, MapPin, Linkedin, Twitter, Github, Youtube, BookOpen, Video, GraduationCap, Users2, Cookie } from 'lucide-react';
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
  { label: 'Main', icon: Home, href: '/', children: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Contact', href: '/contact', icon: Phone }
  ]},
  { label: 'Services', icon: Briefcase, href: '/services', children: [
    { label: 'AI Autonomous Systems', href: '/services#ai', icon: Brain },
    { label: 'Cloud Platforms', href: '/services#cloud', icon: Cloud },
    { label: 'Cybersecurity', href: '/services#cybersecurity', icon: Shield },
    { label: 'Micro SaaS', href: '/services#saas', icon: Code },
    { label: 'Technical Consulting', href: '/services', icon: Users },
    { label: 'System Integration', href: '/services', icon: Network }
  ]},
  { label: 'Company', icon: Building, href: '#', children: [
    { label: 'About Us', href: '/', icon: Building },
    { label: 'Our Team', href: '/', icon: Users },
    { label: 'Careers', href: '/', icon: Target },
    { label: 'Partners', href: '/', icon: Users2 }
  ]},
  { label: 'Resources', icon: BookOpen, href: '#', children: [
    { label: 'Blog', href: '/', icon: FileText },
    { label: 'Case Studies', href: '/', icon: BarChart3 },
    { label: 'White Papers', href: '/', icon: FileText },
    { label: 'Webinars', href: '/', icon: Video },
    { label: 'Documentation', href: '/', icon: HelpCircle }
  ]},
  { label: 'Support', icon: HelpCircle, href: '#', children: [
    { label: 'Help Center', href: '/', icon: HelpCircle },
    { label: 'Contact Support', href: '/contact', icon: MessageSquare },
    { label: 'Training', href: '/', icon: GraduationCap },
    { label: 'Status Page', href: '/', icon: Activity }
  ]},
  { label: 'Legal', icon: Shield, href: '#', children: [
    { label: 'Privacy Policy', href: '/privacy', icon: Shield },
    { label: 'Terms of Service', href: '/terms', icon: FileText },
    { label: 'Cookie Policy', href: '/', icon: Cookie },
    { label: 'GDPR Compliance', href: '/', icon: Lock }
  ]}
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
    setDropdownOpen(null);
  }, [location]);

  const toggleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-1 text-zion-slate-light hover:text-white transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`transition-colors ${
                        isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-cyan/20 rounded-lg shadow-xl backdrop-blur-sm">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center space-x-3 px-4 py-2 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 transition-colors"
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
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zion-slate-light hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zion-slate-dark border-t border-zion-cyan/20">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-md transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.children && dropdownOpen === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center space-x-3 px-3 py-2 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-md transition-colors"
                        >
                          {child.icon && <child.icon className="w-4 h-4" />}
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-zion-slate-dark border-r border-zion-cyan/20 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-zion-cyan/20">
          <span className="text-white font-semibold">Navigation</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="px-4 py-4 space-y-2">
          {sidebarNavigation.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <button
                  onClick={() => toggleSidebarDropdown(item.label)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-md transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/10'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              )}

              {/* Sidebar Dropdown */}
              {item.children && sidebarDropdownOpen === item.label && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="flex items-center space-x-3 px-3 py-2 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-md transition-colors"
                    >
                      {child.icon && <child.icon className="w-4 h-4" />}
                      <span>{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zion-slate-dark border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </div>
              <p className="text-zion-slate-light mb-4 max-w-md">
                Leading technology solutions provider specializing in AI, cloud platforms, cybersecurity, and digital transformation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About</Link></li>
                <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
                <li><Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors">System Status</Link></li>
                <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Support</Link></li>
                <li><Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Training</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zion-cyan/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}