import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, Users, Phone, Globe, Shield, Brain, Zap } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Solutions', href: '/solutions/enterprise', current: location.pathname.startsWith('/solutions') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    {
      category: "AI & Autonomous Systems",
      items: [
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Content Generation', href: '/ai-content-generator' },
        { name: 'AI Code Review', href: '/ai-code-review' },
        { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' },
        { name: 'AI Autonomous Business Platform', href: '/ai-autonomous-business-platform' },
      ]
    },
    {
      category: "Quantum Technology",
      items: [
        { name: 'Quantum Technology', href: '/services/quantum-technology' },
        { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { name: 'Quantum Services', href: '/quantum-services' },
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      items: [
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'SOC2 Compliance', href: '/soc2-compliance-automation' },
        { name: 'AI-Powered Security', href: '/ai-powered-enterprise-security' },
        { name: 'Autonomous Security', href: '/ai-autonomous-security' },
      ]
    },
    {
      category: "Infrastructure & Solutions",
      items: [
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions' },
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Blockchain Solutions', href: '/blockchain-enterprise-solutions' },
        { name: 'IoT Data Analytics', href: '/iot-data-analytics' },
        { name: 'Space Technology', href: '/space-tech' },
      ]
    }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' },
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
    { name: 'Financial Solutions', href: '/solutions/financial' },
    { name: 'Government Solutions', href: '/solutions/government' },
    { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
    { name: 'Retail Solutions', href: '/solutions/retail' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);

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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((category) => (
                            <div key={category.category}>
                              <h3 className="font-semibold text-foreground mb-2 text-sm">{category.category}</h3>
                              <div className="space-y-1">
                                {category.items.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-2 py-1 rounded transition-colors"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.name === 'Company' ? (
                  <div className="relative">
                    <button
                      onClick={toggleCompany}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isCompanyOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-4">
                        <div className="space-y-1">
                          {company.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-2 py-1 rounded transition-colors"
                              onClick={() => setIsCompanyOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.name === 'Solutions' ? (
                  <div className="relative">
                    <button
                      onClick={toggleSolutions}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-4">
                        <div className="space-y-1">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-2 py-1 rounded transition-colors"
                              onClick={() => setIsSolutionsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
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
              {/* Mobile Services Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Services</h3>
                  <div className="space-y-1 ml-4">
                    {services.map((category) => (
                      <div key={category.category} className="mb-3">
                        <h4 className="font-medium text-muted-foreground text-sm mb-1">{category.category}</h4>
                        <div className="space-y-1 ml-4">
                          {category.items.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block text-sm text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Company Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Company</h3>
                  <div className="space-y-1 ml-4">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Solutions Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Solutions</h3>
                  <div className="space-y-1 ml-4">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

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