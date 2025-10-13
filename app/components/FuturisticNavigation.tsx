import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Brain, Shield, Zap, Globe, Users, Settings, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const FuturisticNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      name: "AI Services",
      href: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: "AI Consulting", href: "/ai-consulting-services" },
        { name: "Machine Learning", href: "/machine-learning-solutions" },
        { name: "Natural Language Processing", href: "/natural-language-processing" },
        { name: "Computer Vision", href: "/computer-vision-solutions" },
        { name: "AI Analytics", href: "/ai-powered-analytics" },
        { name: "AI Automation", href: "/ai-automation-solutions" },
        { name: "AI Security", href: "/ai-security-solutions" },
        { name: "AI Customer Service", href: "/ai-customer-service" }
      ]
    },
    {
      name: "IT Services",
      href: "/it-services",
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure-services" },
        { name: "Cybersecurity", href: "/cybersecurity-solutions" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Network Infrastructure", href: "/network-infrastructure" },
        { name: "Database Management", href: "/database-management" },
        { name: "Web Development", href: "/web-development-services" },
        { name: "Mobile App Development", href: "/mobile-app-development" },
        { name: "IT Support", href: "/it-support-maintenance" }
      ]
    },
    {
      name: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Marketing Pro", href: "/zion-ai-marketing-automation-pro" },
        { name: "Zion AI Project Manager", href: "/zion-ai-project-manager-pro" },
        { name: "Zion AI Code Assistant", href: "/zion-ai-code-assistant-pro" },
        { name: "Zion AI Content Studio", href: "/zion-ai-content-studio-pro" }
      ]
    },
    {
      name: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G Smart City Solutions", href: "/5g-smart-city-solutions" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
        { name: "5G Private Networks", href: "/5g-private-networks" },
        { name: "5G Data Analytics", href: "/5g-data-analytics" },
        { name: "5G Implementation", href: "/5g-implementation" }
      ]
    },
    {
      name: "About",
      href: "/about",
      icon: <Users className="w-4 h-4" />
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                AI & IT Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transition-all duration-300 ${
                    activeDropdown === item.name 
                      ? "opacity-100 visible translate-y-0" 
                      : "opacity-0 invisible -translate-y-2"
                  }`}>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </h3>
                      <div className="grid grid-cols-1 gap-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-sm">{dropdownItem.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
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
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen 
            ? "max-h-screen opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 mt-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`} />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={`ml-8 transition-all duration-300 ${
                    activeDropdown === item.name 
                      ? "max-h-96 opacity-100 visible" 
                      : "max-h-0 opacity-0 invisible"
                  }`}>
                    <div className="space-y-1 mt-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  icon={<Phone className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Contact Us
                </FuturisticButton>
                <FuturisticButton
                  href="/demo"
                  variant="primary"
                  size="sm"
                  icon={<Sparkles className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Get Demo
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-t border-cyan-500/20 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="text-cyan-400 font-semibold">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FuturisticNavigation;