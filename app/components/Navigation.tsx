import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Users, BarChart3, Settings, Phone, Mail } from 'lucide-react';

const Navigation = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      submenu: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-4 h-4" />,
      href: '/services',
      submenu: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Software Development', href: '/software-development' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'Web Development', href: '/web-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-4 h-4" />,
      href: '/micro-saas',
      submenu: [
        { name: 'Zion Content Studio', href: '/zion-content-studio' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Zion AI Marketing', href: '/zion-ai-marketing-automation' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-4 h-4" />,
      href: '/5g-solutions',
      submenu: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
      ]
    }
  ];

  const mainPages = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-cyan-500/20 relative z-50 cyber-grid-advanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 holographic-text">
              Zion Tech Group
            </span>
            <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300"></div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(category.title)}
                onMouseLeave={() => setIsDropdownOpen(null)}
              >
                <Link
                  to={category.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group-hover:neon-cyan"
                >
                  {category.icon}
                  <span>{category.title}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Menu */}
                {isDropdownOpen === category.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10 z-50">
                    <div className="p-4">
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        {category.icon}
                        <span className="ml-2">{category.title}</span>
                      </h3>
                      <div className="space-y-2">
                        {category.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {mainPages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:neon-cyan"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="cyber-button px-6 py-2 text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="lg:hidden border-t border-cyan-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;