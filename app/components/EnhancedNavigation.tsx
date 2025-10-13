import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X, Brain, Shield, Zap, Globe, BarChart3, Cloud, Sparkles } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced AI Solutions',
      dropdown: [
        { label: 'Business Intelligence Pro', href: '/ai-business-intelligence-pro', featured: true },
        { label: 'Content Generation Studio', href: '/ai-content-generation-pro', featured: true },
        { label: 'Customer Support Suite', href: '/ai-customer-support', featured: true },
        { label: 'Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor-pro' },
        { label: 'Marketing Automation Pro', href: '/ai-marketing-automation-pro' },
        { label: 'Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { label: 'Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
        { label: 'View All AI Services', href: '/ai-services', divider: true }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Technology Solutions',
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', featured: true },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', featured: true },
        { label: 'Web Development', href: '/web-development', featured: true },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'DevOps Solutions', href: '/devops-solutions' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' },
        { label: 'IT Support & Helpdesk', href: '/it-support' },
        { label: 'View All IT Services', href: '/it-services', divider: true }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Ready-to-Use Solutions',
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', featured: true, price: '$299/mo' },
        { label: 'Zion Security Shield', href: '/zion-security-shield', featured: true, price: '$499/mo' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', featured: true, price: '$99/mo' },
        { label: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', price: '$199/mo' },
        { label: 'Zion AI Marketing Pro', href: '/zion-ai-marketing-automation-pro', price: '$149/mo' },
        { label: 'Zion AI Project Manager', href: '/zion-ai-project-manager-pro', price: '$99/mo' },
        { label: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant-pro', price: '$79/mo' },
        { label: 'Zion AI Content Studio', href: '/zion-ai-content-studio-pro', price: '$129/mo' },
        { label: 'View All Micro SAAS', href: '/micro-saas', divider: true }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500',
      description: 'Next-Gen Connectivity',
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', featured: true },
        { label: '5G Edge Computing', href: '/5g-edge-computing', featured: true },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: 'View All 5G Solutions', href: '/5g-solutions', divider: true }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'About Zion Tech',
      dropdown: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'News', href: '/news' },
        { label: 'Press', href: '/press' },
        { label: 'Partners', href: '/partners' }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'Support', href: '/support' },
    { label: 'Consultation', href: '/consultation' }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{item.label}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <div key={dropdownItem.href}>
                          {dropdownItem.divider && (
                            <div className="border-t border-white/10 my-2"></div>
                          )}
                          <Link
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {dropdownItem.featured && (
                                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                )}
                                <span className={dropdownItem.featured ? 'font-medium' : ''}>
                                  {dropdownItem.label}
                                </span>
                              </div>
                              {dropdownItem.price && (
                                <span className="text-cyan-400 text-xs font-medium">
                                  {dropdownItem.price}
                                </span>
                              )}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <div className="ml-6 space-y-2">
                    {item.dropdown.slice(0, 4).map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                    {item.dropdown.length > 4 && (
                      <Link
                        to={item.href}
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedNavigation;