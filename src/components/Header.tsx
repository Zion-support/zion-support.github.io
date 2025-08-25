import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, Users, Phone, Globe, Shield, Zap, Brain, Database, Cloud, Lock } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname.startsWith('/services'),
      dropdown: [
        { name: 'AI & Autonomous Systems', href: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'Quantum Technology', href: '/services/quantum-technology', icon: Zap },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Database },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Cloud },
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions', icon: Globe },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Zap },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
        { name: 'Blockchain Solutions', href: '/blockchain-enterprise-solutions', icon: Lock },
        { name: 'IoT Data Analytics', href: '/iot-data-analytics', icon: Database },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Globe },
        { name: 'Industry Solutions', href: '/services/industry-solutions', icon: Briefcase }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions/enterprise', 
      current: location.pathname.startsWith('/solutions'),
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Users },
        { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', icon: Zap },
        { name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform', icon: Zap },
        { name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management', icon: Database },
        { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions', icon: Globe }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: location.pathname.startsWith('/about') || location.pathname.startsWith('/team') || location.pathname.startsWith('/partners'),
      dropdown: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Mission & Vision', href: '/mission', icon: Globe },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
        { name: 'News & Updates', href: '/news', icon: Globe },
        { name: 'Blog', href: '/blog', icon: Globe }
      ]
    },
    { 
      name: 'Resources', 
      href: '/help', 
      current: location.pathname.startsWith('/help') || location.pathname.startsWith('/docs') || location.pathname.startsWith('/events'),
      dropdown: [
        { name: 'Help Center', href: '/help', icon: Users },
        { name: 'Documentation', href: '/docs', icon: Globe },
        { name: 'Events', href: '/events', icon: Globe },
        { name: 'Webinars', href: '/webinars', icon: Globe },
        { name: 'White Papers', href: '/white-papers', icon: Globe },
        { name: 'FAQ', href: '/faq', icon: Users },
        { name: 'Support', href: '/support', icon: Users },
        { name: 'Pricing', href: '/pricing', icon: Briefcase }
      ]
    },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            <Icon className="w-4 h-4 text-zion-cyan" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Theme Toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                          item.current
                            ? 'text-zion-cyan bg-zion-cyan/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => {
                            const Icon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <Icon className="w-4 h-4 text-zion-cyan" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;