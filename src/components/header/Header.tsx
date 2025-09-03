import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  ChevronDown,
  Brain,
  Server,
  Building2,
  Zap,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Building2 },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Server,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Building2 },
        { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap },
        { name: 'Cloud Migration', href: '/services/cloud-migration-services', icon: Server },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Zap }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: Zap },
    { name: 'Pricing', href: '/pricing', icon: Building2 },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
        : 'bg-zion-slate-dark/90 backdrop-blur-md border-b border-zion-purple/20'
    }`}>
      {/* Contact Information Bar */}
      <div className="bg-zion-slate-darker text-white py-2 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-zion-purple" />
                <a href="tel:+13024640950" className="hover:text-zion-purple transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zion-purple" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-purple transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-zion-purple" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <a 
                href="https://ziontechgroup.com" 
                className="text-zion-purple hover:text-zion-purple-light font-semibold flex items-center"
              >
                Visit Our Website <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-zion-purple" />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-white hover:text-zion-purple transition-colors"
                  onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-purple/30 rounded-lg shadow-xl z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-purple transition-colors"
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent w-64"
              />
            </div>
            <Link
              to="/contact"
              className="bg-zion-purple hover:bg-zion-purple-dark text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-zion-purple transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-slate-dark border-t border-zion-purple/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-zion-purple/20 hover:text-zion-purple transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-8 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-zion-purple transition-colors rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4 pt-4 border-t border-zion-purple/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                />
              </div>
              <Link
                to="/contact"
                className="block mt-4 bg-zion-purple hover:bg-zion-purple-dark text-white px-6 py-3 rounded-lg transition-colors font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}