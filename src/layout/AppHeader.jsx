import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Users, 
  Code, 
  Lock, 
  Rocket,
  Search,
  Phone,
  Mail
} from 'lucide-react';
export function AppHeader() {};
  return null;
}
};
      setScrolled(window.scrollY > 20);,
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  // Close mobile menu when route changes;
  useEffect(() => {};
}, [location.pathname]);
;
  const navigationItems = [;
    { name: 'Home', path: '/', icon: null },;
    {};
        { name: 'AI & Machine Learning', path: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },;
        { name: 'Quantum Computing', path: '/services?category=quantum', icon: Zap, color: 'from-blue-500 to-cyan-500' },;
        { name: 'Blockchain & Web3', path: '/services?category=blockchain', icon: Lock, color: 'from-green-500 to-emerald-500' },;
        { name: 'IoT & Edge Computing', path: '/services?category=iot', icon: Cloud, color: 'from-orange-500 to-red-500' },;
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Users, color: 'from-indigo-500 to-purple-500' },;
        { name: 'FinTech Solutions', path: '/services?category=fintech', icon: Database, color: 'from-yellow-500 to-orange-500' },;
        { name: 'Green Technology', path: '/services?category=green-tech', icon: Shield, color: 'from-green-400 to-teal-500' },;
        { name: 'Cybersecurity', path: '/services?category=cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },;
      ]},;
    { name: 'About', path: '/about', icon: null },;
    { name: 'Contact', path: '/contact', icon: null },;
  ];

  const isActive = (path) => location.pathname === path;

  return (;
    <div>Broken JSX</div>
    >;
      <div className="container mx-auto px-4">;
        <div className="flex items-center justify-between h-16 lg:h-20">;
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
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
            {navigationItems.map(((((((item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, index, index, index, index, index) => ({ ...(((((item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, index, index, index, index, key: index })) => ({ ...((((item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, index, index, index, key: index })) => ({ ...(((item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, index, index, key: index })) => ({ ...((item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, index, key: index })) => ({ ...(item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, index, key: index })) => ({ ...item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan cursor-pointer transition-colors"
                    onMouseEnter={(, key: index })) => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4"       />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-zion-cyan/30 rounded-lg shadow-2xl shadow-zion-cyan/10 p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.dropdown.map(((((((dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, index, index, index, index, index) => ({ ...(((((dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, index, index, index, index, key: index })) => ({ ...((((dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, index, index, index, key: index })) => ({ ...(((dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, index, index, key: index })) => ({ ...((dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, index, key: index })) => ({ ...(dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , index, key: index })) => ({ ...dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}
                          >
                            <dropdownItem.icon className="w-4 h-4 text-white"       />
                          </div>
                          <span className="text-white group-hover:text-zion-cyan transition-colors">
                            {dropdownItem.name}
                          </span>
                        </Link>
                      , key: index })))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search button */}
            <motion.button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5"       />
              ) : (
                <Moon className="w-5 h-5"       />
              )}
            </button>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button 
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6"       />
              ) : (
                <Menu className="w-6 h-6"       />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zion-cyan/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map(((((((item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, index, index, index) => ({ ...(((((item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, index, index, key: index })) => ({ ...((((item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, index, key: index }, index) => ({ ...dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, index, key: index }, key: index }))) => ({ ...(((item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map(((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, key: index }, index, index) => ({ ...(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, key: index }, index, key: index })) => ({ ...dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, index, key: index }, key: index }))) => ({ ...((item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, key: index }, index, index, index) => ({ ...((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, key: index }, index, index, key: index })) => ({ ...(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, key: index }, index, key: index })) => ({ ...dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, index, key: index }, key: index }))) => ({ ...(item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map(((((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, key: index }, index, index, index, index) => ({ ...(((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, key: index }, index, index, index, key: index })) => ({ ...((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, key: index }, index, index, key: index })) => ({ ...(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, key: index }, index, key: index })) => ({ ...dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, index, key: index }, key: index }))) => ({ ...item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-white font-medium mb-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((((((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, index, index, index, index, index) => ({ ...((((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, index, index, index, index, key: index })) => ({ ...(((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, index, index, index, key: index })) => ({ ...((dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, index, index, key: index })) => ({ ...(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, index, key: index })) => ({ ...dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-zion-cyan hover:text-white transition-colors"
                            onClick={(, key: index }, key: index }))) => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-white hover:text-zion-cyan transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>;
              ))}
              <div className="pt-4 border-t border-zion-cyan/30">;
                <div>Broken JSX</div>
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </motion.header>;
  )}
