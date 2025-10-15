import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Settings, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown,
  Brain,
  Server,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings, hasDropdown: true },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI Solutions',
      services: [
        'AI Analytics Dashboard',
        'AI Content Generation',
        'AI Customer Support',
        'AI Code Assistant',
        'AI Business Intelligence'
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Enterprise IT Solutions',
      services: [
        'Cloud Infrastructure',
        'Cybersecurity Suite',
        'DevOps Automation',
        'Database Solutions',
        'Network Management'
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      description: 'Specialized Software Solutions',
      services: [
        'Project Management Tools',
        'Analytics Platforms',
        'Automation Tools',
        'API Management',
        'Monitoring Solutions'
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI, IT, and Micro SAAS solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, business automation, cloud computing, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div className="relative group">
                        <button
                          className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                          <div 
                            className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 p-6 z-50"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            <div className="grid grid-cols-1 gap-6">
                              {serviceCategories.map((category) => (
                                <Link
                                  key={category.name}
                                  to={category.href}
                                  className="group block p-4 rounded-lg hover:bg-slate-700/50 transition-colors"
                                >
                                  <div className="flex items-start space-x-3">
                                    <category.icon className="w-6 h-6 text-purple-400 mt-1" />
                                    <div>
                                      <h3 className="text-white font-semibold">{category.name}</h3>
                                      <p className="text-gray-400 text-sm">{category.description}</p>
                                      <div className="mt-2">
                                        {category.services.slice(0, 3).map((service) => (
                                          <span key={service} className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded mr-1 mb-1">
                                            {service}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-white bg-purple-500/20'
                            : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-gray-300 hover:text-white p-2"
                >
                  {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
            <div className="fixed top-0 left-0 w-80 h-full bg-slate-900 border-r border-purple-500/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">Zion Tech Group</span>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-white bg-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/90 backdrop-blur-md border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI, IT, and Micro SAAS solutions. Transform your business with cutting-edge technology.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</Link></li>
                  <li><Link to="/services" className="text-gray-300 hover:text-white text-sm transition-colors">Our Services</Link></li>
                  <li><Link to="/ai-services" className="text-gray-300 hover:text-white text-sm transition-colors">AI Solutions</Link></li>
                  <li><Link to="/it-services" className="text-gray-300 hover:text-white text-sm transition-colors">IT Services</Link></li>
                  <li><Link to="/micro-saas" className="text-gray-300 hover:text-white text-sm transition-colors">Micro SAAS</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Services</h3>
                <ul className="space-y-2">
                  <li><span className="text-gray-300 text-sm">AI Analytics Dashboard</span></li>
                  <li><span className="text-gray-300 text-sm">Cloud Infrastructure</span></li>
                  <li><span className="text-gray-300 text-sm">Cybersecurity Suite</span></li>
                  <li><span className="text-gray-300 text-sm">DevOps Automation</span></li>
                  <li><span className="text-gray-300 text-sm">Project Management</span></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white text-sm transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                    <div className="text-gray-300 text-sm">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-purple-500/20 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;