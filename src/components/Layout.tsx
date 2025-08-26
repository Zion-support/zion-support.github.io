import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Home, Briefcase, Phone, Shield, FileText, Users, Building, Globe, Brain, Cloud, Lock, Code, Rocket, Target, Lightbulb, Zap, Database, Network, Server, Settings, HelpCircle, MessageSquare, BarChart3, ShoppingCart, Wrench, Star, Award, TrendingUp, Palette, Monitor, Key, Eye, ShieldCheck, Bug, Activity, PieChart, LineChart, Map, Calendar, Clock, Mail, MapPin, Linkedin, Twitter, Github, Youtube, BookOpen, Video, GraduationCap, Handshake, Cookie } from 'lucide-react';
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
      { label: 'Micro SaaS', href: '/services#saas', icon: Code }
    ]
  },
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
    { label: 'Partners', href: '/', icon: Handshake }
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
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
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
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                        {item.label}
                      </Link>
                    )}
                    
                    {/* Dropdown Menu */}
                    {item.children && dropdownOpen === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
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

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
                className="text-gray-700 hover:text-blue-600 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-base font-medium">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
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

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services#ai" className="text-slate-400 hover:text-white transition-colors flex items-center"><Brain className="w-4 h-4 mr-2" />AI Systems</a></li>
                <li><a href="/services#cloud" className="text-slate-400 hover:text-white transition-colors flex items-center"><Cloud className="w-4 h-4 mr-2" />Cloud Platforms</a></li>
                <li><a href="/services#cybersecurity" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Cybersecurity</a></li>
                <li><a href="/services#saas" className="text-slate-400 hover:text-white transition-colors flex items-center"><Code className="w-4 h-4 mr-2" />Micro SaaS</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Consulting</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center"><Phone className="w-4 h-4 mr-2" />Contact</a></li>
                <li><a href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Privacy</a></li>
                <li><a href="/terms" className="text-slate-400 hover:text-white transition-colors flex items-center"><FileText className="w-4 h-4 mr-2" />Terms</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Building className="w-4 h-4 mr-2" />About</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Careers</a></li>
              </ul>
            </div>
          </div>

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
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}