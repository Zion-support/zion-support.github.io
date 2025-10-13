import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      children: [
        { name: "AI Services", href: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "IT Services", href: "/services", icon: <Shield className="w-4 h-4" /> },
        { name: "Micro SAAS", href: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
        { name: "5G Solutions", href: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/10"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4">
                      <div className="space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                          >
                            <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                              {child.icon}
                            </span>
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
            >
              Get Quote
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Project
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-white/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-cyan-400">{child.icon}</span>
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  icon={<Phone className="w-4 h-4" />}
                >
                  Get Quote
                </FuturisticButton>
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Project
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
