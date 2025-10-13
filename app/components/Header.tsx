import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Code,
  Users,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "AI Services",
      icon: <Brain className="w-5 h-5" />,
      color: "text-cyan-400",
      href: "/ai-services",
      submenu: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Automation", href: "/ai-automation" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Service", href: "/ai-customer-service" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "AI Business Intelligence", href: "/ai-business-intelligence" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-5 h-5" />,
      color: "text-green-400",
      href: "/it-services",
      submenu: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", href: "/cybersecurity-solutions" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "Database Management", href: "/database-management" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-5 h-5" />,
      color: "text-purple-400",
      href: "/micro-saas",
      submenu: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion Content Studio", href: "/zion-content-studio" },
        { name: "Zion Project Master", href: "/zion-project-master" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-5 h-5" />,
      color: "text-orange-400",
      href: "/5g-solutions",
      submenu: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart City Solutions", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" }
  ];

  const supportLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "Pricing", href: "/pricing" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300">24/7 Support Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                AI & IT Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-6"
                     onMouseEnter={() => setActiveDropdown('services')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <Link
                          to={service.href}
                          className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors group"
                        >
                          <span className={service.color}>{service.icon}</span>
                          <span className="font-semibold">{service.title}</span>
                        </Link>
                        <div className="space-y-2 ml-7">
                          {service.submenu.slice(0, 3).map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.href}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {service.submenu.length > 3 && (
                            <Link
                              to={service.href}
                              className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              View all {service.title.toLowerCase()}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white hover:text-cyan-400 transition-colors py-2 ${
                  isActive(link.href) ? 'text-cyan-400' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Support Links */}
            {supportLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white hover:text-cyan-400 transition-colors py-2 ${
                  isActive(link.href) ? 'text-cyan-400' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Get Demo
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</div>
                {services.map((service, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <Link
                      to={service.href}
                      className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={service.color}>{service.icon}</span>
                      <span>{service.title}</span>
                    </Link>
                    <div className="ml-6 space-y-1">
                      {service.submenu.slice(0, 3).map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Company</div>
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-white hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Support */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Support</div>
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-white hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-2">
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Contact Us
                </FuturisticButton>
                <FuturisticButton
                  href="/demo"
                  variant="primary"
                  size="sm"
                  className="w-full"
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Get Demo
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
