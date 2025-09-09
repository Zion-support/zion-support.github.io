import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [marketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle the theme
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/services', 
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services', label: 'All Services' },
        { path: '/enhanced-services', label: 'Enhanced Services' },
        { path: '/services#ai', label: 'AI & Analytics' },
        { path: '/services#cybersecurity', label: 'Cybersecurity' },
        { path: '/services#cloud', label: 'Cloud Solutions' },
        { path: '/services#consulting', label: 'IT Consulting' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-black/80 backdrop-blur-md border-b border-zion-cyan/20'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-8 left-1/2 w-0.5 h-0.5 bg-zion-cyan rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-12 right-1/4 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple rounded-xl opacity-20 animate-pulse"></div>
            </motion.div>
            <div className="hidden sm:block">
              <motion.div 
                className="text-xl lg:text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                ZION TECH GROUP
              </motion.div>
              <motion.div 
                className="text-xs text-zion-cyan font-medium bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                INNOVATION • TECHNOLOGY • FUTURE
              </motion.div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      All Services
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      AI & Analytics
                    </Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Cybersecurity
                    </Link>
                    <Link to="/cloud-solutions" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Cloud Solutions
                    </Link>
                    <Link to="/quantum-technology" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Quantum Technology
                    </Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Blockchain & Web3
                    </Link>
                    <Link to="/green-it" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Green IT
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Marketplace Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setMarketplaceDropdownOpen(true)}
                onMouseLeave={() => setMarketplaceDropdownOpen(false)}
              >
                Marketplace
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {marketplaceDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl"
                  onMouseEnter={() => setMarketplaceDropdownOpen(true)}
                  onMouseLeave={() => setMarketplaceDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/marketplace" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Products
                    </Link>
                    <Link to="/talent" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Talent
                    </Link>
                    <Link to="/equipment" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Equipment
                    </Link>
                    <Link to="/categories" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Categories
                    </Link>
                    <Link to="/it-onsite-services" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      IT Onsite Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-white hover:text-zion-cyan transition-colors duration-300"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                Company
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {companyDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl"
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/about" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      About Us
                    </Link>
                    <Link to="/blog" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Blog
                    </Link>
                    <Link to="/partners" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Partners
                    </Link>
                    <Link to="/careers" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Careers
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-white hover:bg-zion-cyan/10 hover:text-zion-cyan transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/faq" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={closeAllDropdowns}>
              FAQ
            </Link>
          </nav>

          {/* Enhanced Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium" onClick={closeAllDropdowns}>
              Login
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform" onClick={closeAllDropdowns}>
              Get Started
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <div className="text-zion-cyan font-medium mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  <Link to="/services" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    AI & Analytics
                  </Link>
                  <Link to="/cybersecurity" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Cybersecurity
                  </Link>
                  <Link to="/cloud-solutions" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Cloud Solutions
                  </Link>
                </div>
              </div>

              {/* Mobile Marketplace Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <div className="text-zion-cyan font-medium mb-2">Marketplace</div>
                <div className="space-y-2 ml-4">
                  <Link to="/marketplace" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Products
                  </Link>
                  <Link to="/talent" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Talent
                  </Link>
                  <Link to="/equipment" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Equipment
                  </Link>
                </div>
              </div>

              {/* Mobile Company Section */}
              <div className="border-l-2 border-zion-cyan/30 pl-4">
                <div className="text-zion-cyan font-medium mb-2">Company</div>
                <div className="space-y-2 ml-4">
                  <Link to="/about" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link to="/blog" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/partners" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Partners
                  </Link>
                  <Link to="/careers" className="block text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                    Careers
                  </Link>
                </div>
              </div>

              <Link to="/faq" className="text-white hover:text-zion-cyan transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              
              <div className="pt-4 border-t border-zion-cyan/20">
                <Link to="/login" className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium mb-2" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/contact" className="block px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
