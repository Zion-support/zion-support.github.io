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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

<<<<<<< HEAD
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
=======
  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259

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
<<<<<<< HEAD
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
=======
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
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
<<<<<<< HEAD
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
=======
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
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
<<<<<<< HEAD
            <div className="lg:hidden">
=======
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-700 hover:text-blue-600 p-2"
                title="Open Sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 p-2 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-base font-medium flex items-center justify-between">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
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
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
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
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
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
<<<<<<< HEAD
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-2">
<<<<<<< HEAD
                <li><a href="/services#ai" className="text-slate-300 hover:text-white transition-colors">AI Systems</a></li>
                <li><a href="/services#cloud" className="text-slate-300 hover:text-white transition-colors">Cloud Platforms</a></li>
                <li><a href="/services#cybersecurity" className="text-slate-300 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="/services#saas" className="text-slate-300 hover:text-white transition-colors">Micro SaaS</a></li>
=======
                <li><a href="/services#ai" className="text-slate-400 hover:text-white transition-colors flex items-center"><Brain className="w-4 h-4 mr-2" />AI Systems</a></li>
                <li><a href="/services#cloud" className="text-slate-400 hover:text-white transition-colors flex items-center"><Cloud className="w-4 h-4 mr-2" />Cloud Platforms</a></li>
                <li><a href="/services#cybersecurity" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Cybersecurity</a></li>
                <li><a href="/services#saas" className="text-slate-400 hover:text-white transition-colors flex items-center"><Code className="w-4 h-4 mr-2" />Micro SaaS</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Consulting</a></li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-2">
<<<<<<< HEAD
                <li className="text-slate-300">+1 302 464 0950</li>
                <li className="text-slate-300">kleber@ziontechgroup.com</li>
                <li className="text-slate-300">Middletown, DE</li>
=======
                <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center"><Phone className="w-4 h-4 mr-2" />Contact</a></li>
                <li><a href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-2" />Privacy</a></li>
                <li><a href="/terms" className="text-slate-400 hover:text-white transition-colors flex items-center"><FileText className="w-4 h-4 mr-2" />Terms</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Building className="w-4 h-4 mr-2" />About</a></li>
                <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center"><Users className="w-4 h-4 mr-2" />Careers</a></li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
              </ul>
            </div>
          </div>

<<<<<<< HEAD
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm text-center">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}