import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Solutions', href: '/solutions/enterprise', current: location.pathname.startsWith('/solutions') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const servicesMenu = [
    { name: 'AI & Autonomous Systems', href: '/services/ai-autonomous-systems' },
    { name: 'Quantum Technology', href: '/services/quantum-technology' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
    { name: 'Cloud & DevOps', href: '/cloud-devops' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions' },
    { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions' },
    { name: 'AI Research Assistant', href: '/ai-autonomous-research-assistant' },
    { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
    { name: 'Autonomous Business Platform', href: '/autonomous-business-operations-platform' },
    { name: 'AI Asset Management', href: '/ai-powered-it-asset-management' },
    { name: 'SOC2 Compliance', href: '/soc2-compliance-automation' },
  ];

  const solutionsMenu = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
    { name: 'Industry Solutions', href: '/services/industry-solutions' },
    { name: 'Financial Solutions', href: '/financial-solutions' },
    { name: 'Manufacturing Solutions', href: '/manufacturing-solutions' },
    { name: 'Green IT Solutions', href: '/green-it' },
  ];

  const companyMenu = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const DropdownMenu = ({ items, isOpen, onToggle, title }: {
    items: Array<{ name: string; href: string }>;
    isOpen: boolean;
    onToggle: () => void;
    title: string;
  }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 grid grid-cols-1 gap-2">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => onToggle()}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

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
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu
              items={servicesMenu}
              isOpen={servicesDropdownOpen}
              onToggle={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              title="Services"
            />
            
            {/* Solutions Dropdown */}
            <DropdownMenu
              items={solutionsMenu}
              isOpen={solutionsDropdownOpen}
              onToggle={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              title="Solutions"
            />
            
            {/* Company Dropdown */}
            <DropdownMenu
              items={companyMenu}
              isOpen={companyDropdownOpen}
              onToggle={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              title="Company"
            />
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
                <Link
                  key={item.name}
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
              ))}
              
              {/* Mobile Services Menu */}
              <div className="border-t border-border pt-4">
                <h3 className="px-3 py-2 text-sm font-semibold text-foreground">Services</h3>
                {servicesMenu.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Solutions Menu */}
              <div className="border-t border-border pt-4">
                <h3 className="px-3 py-2 text-sm font-semibold text-foreground">Solutions</h3>
                {solutionsMenu.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Company Menu */}
              <div className="border-t border-border pt-4">
                <h3 className="px-3 py-2 text-sm font-semibold text-foreground">Company</h3>
                {companyMenu.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
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