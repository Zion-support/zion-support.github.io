import React from 'react';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/resources", label: "Resources" },
    { to: "/pricing", label: "Pricing" },
    { to: "/insights", label: "Insights" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-zion-slate-dark/95 backdrop-blur-lg border-b border-zion-slate-light/10 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-blue to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium transition-all duration-300 hover:text-zion-cyan ${
                  isActive(item.to)
                    ? 'text-zion-cyan border-b-2 border-zion-cyan'
                    : 'text-zion-slate-light hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary ml-4 flex items-center gap-2 group"
            >
              Get Started
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zion-slate-light hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zion-slate-light/10 bg-zion-slate-dark/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`font-medium transition-colors hover:text-zion-cyan ${
                    isActive(item.to)
                      ? 'text-zion-cyan'
                      : 'text-zion-slate-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary w-fit mt-4 flex items-center gap-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
