import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Users, BarChart3, Settings, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Cybersecurity Platform', href: '/ai-cybersecurity-platform' },
        { name: 'AI Data Analytics Platform', href: '/ai-data-analytics-platform' }
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
        { name: 'Web Development', href: '/web-development' },
        { name: 'Managed Services', href: '/managed-services' },
        { name: 'Cloud Migration Solutions', href: '/cloud-migration-solutions' },
        { name: 'DevOps Consulting Services', href: '/devops-consulting-services' }
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
        { name: 'AI Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
        { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
        { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
        { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
        { name: 'Zion AI Business Intelligence Pro', href: '/zion-ai-business-intelligence-pro' },
        { name: 'Zion AI Social Media Pro', href: '/zion-ai-social-media-pro' },
        { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' }
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
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Implementation', href: '/5g-implementation' }
      ]
    }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown(category.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {category.icon}
                  <span>{category.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === category.title && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50"
                    onMouseEnter={() => setActiveDropdown(category.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <Link
                        to={category.href}
                        className="block px-4 py-2 text-cyan-400 font-semibold hover:bg-cyan-400/10 rounded-lg transition-colors"
                      >
                        View All {category.title}
                      </Link>
                      <div className="border-t border-white/10 my-2"></div>
                      <div className="space-y-1">
                        {category.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors text-sm"
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
            
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => toggleDropdown(category.title)}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === category.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === category.title && (
                    <div className="ml-6 space-y-2 mt-2">
                      <Link
                        to={category.href}
                        className="block text-cyan-400 font-semibold py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View All {category.title}
                      </Link>
                      {category.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors py-1 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-white/10 pt-4 space-y-2">
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;