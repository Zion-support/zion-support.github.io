<<<<<<< HEAD
import React from "react";

export function Header() {
  return (
    <header className="bg-zion-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">Z</span>
=======

import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown, Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
  const location = useLocation();
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'Talent', href: '/talent', icon: Users },
    { name: 'About', href: '/about', icon: Building },
    { name: 'Contact', href: '/contact', icon: Heart }];

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
          </div>
          <span className="text-xl font-bold">Zion Tech Group</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-zion-cyan">Home</a>
          <a href="/services" className="hover:text-zion-cyan">Services</a>
          <a href="/about" className="hover:text-zion-cyan">About</a>
          <a href="/contact" className="hover:text-zion-cyan">Contact</a>
        </nav>
      </div>
    </header>
  );
<<<<<<< HEAD
}
=======
};

export default Header;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
