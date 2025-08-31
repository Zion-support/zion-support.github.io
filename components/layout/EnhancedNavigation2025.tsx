import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Sparkles, Zap, ChevronDown, ChevronRight } from 'lucide-react';

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'AI Solutions', href: '/services/ai-solutions', description: 'Autonomous AI systems and workflows' },
        { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure and automation' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Zero-trust security frameworks' },
        { name: 'Data & Analytics', href: '/services/data', description: 'Data pipelines and ML ops' },
        { name: 'Micro SaaS', href: '/services/micro-saas', description: 'Rapid product development' },
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale implementations' },
        { name: 'SMB', href: '/solutions/smb', description: 'Small business focused' },
        { name: 'Startup', href: '/solutions/startup', description: 'Growth acceleration' },
        { name: 'Government', href: '/solutions/government', description: 'Public sector expertise' },
      ]
    },
    {
      name: 'Company',
      href: '/about',
      children: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-semibold">Revolutionary Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl">
                    <div className="p-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <div className="font-medium text-white">{child.name}</div>
                          <div className="text-sm text-gray-400">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-white py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block text-gray-300 py-2 hover:text-white transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-white py-2 hover:text-cyan-400 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-medium"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
