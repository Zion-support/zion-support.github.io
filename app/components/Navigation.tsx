import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Brain,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  Users,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Target,
  Calendar,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Package,
  SidebarIcon
} from "lucide-react";

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    {
      name: "AI Solutions",
      href: "/ai-services",
      icon: <Brain className="w-5 h-5" />,
      description: "Advanced AI and machine learning solutions",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Automation", href: "/ai-automation" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Service", href: "/ai-customer-service" },
        { name: "AI Marketing", href: "/ai-marketing" },
        { name: "AI Healthcare", href: "/ai-healthcare" }
      ]
    },
    {
      name: "IT Services",
      href: "/services",
      icon: <Shield className="w-5 h-5" />,
      description: "Comprehensive technology solutions",
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
        { name: "Cybersecurity", href: "/cybersecurity-solutions" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "Database Management", href: "/database-management" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      name: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-5 h-5" />,
      description: "Ready-to-use software solutions",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion Content Studio", href: "/zion-content-studio" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" }
      ]
    },
    {
      name: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-5 h-5" />,
      description: "Next-generation connectivity",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "5G Data Analytics", href: "/5g-data-analytics" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ];

  const mainPages = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Demo", href: "/demo" },
    { name: "Support", href: "/support" }
  ];

  const handleDropdownToggle = (serviceName: string) => {
    setActiveDropdown(activeDropdown === serviceName ? null : serviceName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group/item p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3`}>
                            {service.icon}
                          </div>
                          <span className="font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                            {service.name}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Pages */}
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{service.name}</div>
                        <div className="text-sm text-gray-300">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Pages */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Pages</h3>
                <div className="space-y-2">
                  {mainPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.href}
                      className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-white"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
