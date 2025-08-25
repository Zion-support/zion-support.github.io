import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { 
      name: 'About', 
      href: '/about', 
      current: location.pathname === '/about',
      submenu: [
        { name: 'Our Mission', href: '/mission' },
        { name: 'Our Team', href: '/team' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname === '/services',
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Cloud & DevOps', href: '/cloud-devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Quantum Technology', href: '/quantum-technology' },
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]
    },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      current: location.pathname === '/ai-services',
      submenu: [
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Content Generation', href: '/ai-content-generation-automation' },
        { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      current: location.pathname.startsWith('/solutions'),
      submenu: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: location.pathname.startsWith('/resources'),
      submenu: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'News', href: '/news' },
        { name: 'Documentation', href: '/docs' }
      ]
    },
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
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
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            onClick={closeDropdowns}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
                  {item.submenu ? (
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
                        <ChevronRight className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              onClick={closeDropdowns}
                            >
                              {subitem.name}
                            </Link>
                          ))}
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
                      onClick={closeDropdowns}
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
                  onClick={closeDropdowns}
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