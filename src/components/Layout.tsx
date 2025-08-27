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
=======
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
            {/* CTA Button and Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <Search />
              <ThemeToggle />
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                title="Open Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-700 hover:text-blue-600 p-2"
                title="Open Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 p-2 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Navigation */}
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
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Navigation</h2>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 h-0 flex-1 px-4 sm:px-6 overflow-y-auto">
                    <nav className="space-y-1">
                      {sidebarNavigation.map((item) => (
                        <div key={item.label}>
                          <button
                            onClick={() => toggleSidebarDropdown(item.label)}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <div className="flex items-center">
                              {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                              {item.label}
                            </div>
                            {item.children && (
                              <ChevronRight 
                                className={`w-4 h-4 transition-transform ${
                                  sidebarDropdownOpen === item.label ? 'rotate-90' : ''
                                }`} 
                              />
                            )}
                          </button>
                          {item.children && sidebarDropdownOpen === item.label && (
                            <div className="ml-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {child.icon && <child.icon className="w-4 h-4 mr-2" />}
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Building autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services#ai" className="text-slate-400 hover:text-white transition-colors flex items-center"><Brain className="w-4 h-4 mr-2" />AI Systems</a></li>
                <li><a href="/services#cloud" className="text-slate-400 hover:text-white transition-colors flex items-center"><Cloud className="w-4 h-4 mr-2" />Cloud Platforms</a></li>
                <li><a href="/services#cybersecurity" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Cybersecurity</a></li>
                <li><a href="/services#saas" className="text-slate-400 hover:text-white transition-colors flex items-center"><Code className="w-4 h-4 mr-2" />Micro SaaS</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Consulting</a></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center"><Phone className="w-4 h-4 mr-2" />Contact</a></li>
                <li><a href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Privacy</a></li>
                <li><a href="/terms" className="text-slate-400 hover:text-white transition-colors flex items-center"><FileText className="w-4 h-4 mr-2" />Terms</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Building className="w-4 h-4 mr-2" />About</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Careers</a></li>
              </ul>
            </div>
          </div>
=======
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-slate-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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