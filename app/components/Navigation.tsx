import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Users, BarChart3, Settings, ArrowRight } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const serviceCategories = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
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
      name: 'IT Services',
      href: '/services',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      submenu: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops-services' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Software Development', href: '/software-development' },
        { name: 'System Integration', href: '/system-integration' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Managed Services', href: '/managed-services' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      submenu: [
        { name: 'Zion Content Studio', href: '/zion-content-studio' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
        { name: 'Zion AI Invoice Generator', href: '/zion-ai-invoice-generator' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      submenu: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Implementation', href: '/5g-implementation' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const resourceLinks = [
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Demo', href: '/demo' },
    { name: 'Pricing', href: '/pricing' }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="space-y-3">
                          <Link
                            to={category.href}
                            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors group"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold">{category.name}</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <div className="space-y-1 ml-10">
                            {category.submenu.slice(0, 4).map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.href}
                                className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                            {category.submenu.length > 4 && (
                              <Link
                                to={category.href}
                                className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-1 font-medium"
                              >
                                View All →
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2">
                <span>Company</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  {resourceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;