import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our service offerings'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions'
    },
    { 
      path: '/case-studies', 
      label: 'Case Studies', 
      icon: '📊',
      description: 'Success stories and results'
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems' },
        { name: 'AI Business Intelligence', path: '/services#ai-bi' },
        { name: 'AI Marketing Automation', path: '/services#ai-marketing' },
        { name: 'AI HR & Recruitment', path: '/services#ai-hr' },
        { name: 'AI Legal Tech', path: '/services#ai-legal' }
      ]
    },
    {
      title: 'Cybersecurity',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity' },
        { name: 'Quantum-Safe Security', path: '/services#quantum-security' },
        { name: 'Security Assessment', path: '/services#security-assessment' },
        { name: 'Compliance & Audit', path: '/services#compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud & DevOps', path: '/cloud-devops' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure' },
        { name: 'Cloud Migration', path: '/services#cloud-migration' },
        { name: 'Network Infrastructure', path: '/services#network' },
        { name: 'Managed IT Services', path: '/services#managed-it' }
      ]
    },
    {
      title: 'Emerging Tech',
      services: [
        { name: 'Quantum Technology', path: '/services/quantum-technology' },
        { name: 'Blockchain Solutions', path: '/services#blockchain' },
        { name: 'IoT Integration', path: '/services#iot' },
        { name: 'Emerging Technology', path: '/emerging-tech' }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/ziontechgroup',
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ziontechgroup',
      icon: '💻',
      fallback: 'https://github.com'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ziontechgroup',
      icon: '📺',
      fallback: 'https://youtube.com'
    }
  ];

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      // Use a proper phone number format that works across devices
      window.location.href = 'tel:+13024640950';
    } else {
      window.location.href = 'mailto:kleber@ziontechgroup.com';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.path === '/services' ? (
                  <>
                    {/* Services dropdown */}
                    <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <span className="text-xs">▼</span>
                    </button>
                    
                    {/* Services Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {serviceCategories.map((category) => (
                            <div key={category.title}>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category.title}</h4>
                              <ul className="space-y-1">
                                {category.services.map((service) => (
                                  <li key={service.name}>
                                    <Link
                                      to={service.path}
                                      className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <Link
                            to="/services"
                            className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-center"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Regular navigation item */}
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                    
                    {/* Tooltip for non-dropdown items */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Contact & Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Buttons */}
            <button
              onClick={() => handleContactClick('phone')}
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors duration-200"
            >
              <span>📞</span>
              <span className="hidden sm:block">Call Us</span>
            </button>
            
            <button
              onClick={() => handleContactClick('email')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
            >
              <span>✉️</span>
              <span className="hidden sm:block">Email</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                </Link>
              ))}
              
              {/* Mobile Contact & Social */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      handleContactClick('phone');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors duration-200"
                  >
                    <span>📞</span>
                    <span>Call Us</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      handleContactClick('email');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                  >
                    <span>✉️</span>
                    <span>Email Us</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-center space-x-4 pt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      onClick={(e) => {
                        handleSocialLinkClick(link, e);
                        setIsMenuOpen(false);
                      }}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                      title={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}
