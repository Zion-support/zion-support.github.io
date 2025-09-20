<<<<<<< HEAD
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

<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion AI</span>
            </Link>
=======
=======
import React, { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col space-y-4 py-4">
              <Link to="/" className="px-4 py-2 hover:bg-accent transition-colors">Home</Link>
              <Link to="/services" className="px-4 py-2 hover:bg-accent transition-colors">Services</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-accent transition-colors">About</Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-accent transition-colors">Contact</Link>
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </nav>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
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

=======
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
<<<<<<< HEAD
          <span className="text-xl font-bold">Zion Tech Group</span>
=======
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
        </div>
      </nav>
    </header>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

export default Header;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
=======
}

export default Header;
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
