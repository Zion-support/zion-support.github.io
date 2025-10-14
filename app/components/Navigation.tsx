import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
  Zap,
  ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  dropdown?: NavigationItem[];
}const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false); cursor/analyze-improve-and-deploy-application-30da
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]); cursor/analyze-improve-and-deploy-application-30da
    return location.pathname === path;
  };

  const services = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Marketing', path: '/ai-marketing', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Project Management', path: '/ai-project-management', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Mobile Development', path: '/mobile-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Database Management', path: '/database-management', icon: <Shield className="w-4 h-4" /> },
        { name: 'Custom Software', path: '/custom-software', icon: <Shield className="w-4 h-4" /> },
        { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20"> cursor/analyze-improve-and-deploy-application-30da
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={item.dropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                                isActive(child.path)
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {child.icon}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} cursor/analyze-improve-and-deploy-application-30da
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => {
                                closeDropdown();
                                setIsMobileMenuOpen(false);
                              }}
                              className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                                isActive(child.path)
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {child.icon}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} cursor/analyze-improve-and-deploy-application-c573

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navigation;
