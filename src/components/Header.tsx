import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderPromoBanner from './HeaderPromoBanner';

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
    <>
      <HeaderPromoBanner />
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/ai-micro-saas"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
            >
              AI Micro SAAS
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                NEW
              </span>
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
            >
              Blog
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                NEW
              </span>
            </Link>
            <Link
              to="/insights"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
            >
              Insights
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                HOT
              </span>
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              to="/tools"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Tools
            </Link>
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
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/ai-micro-saas"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Micro SAAS
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                  NEW
                </span>
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                  NEW
                </span>
              </Link>
              <Link
                to="/insights"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                  HOT
                </span>
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/tools"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
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
    </>
  );
}
