<<<<<<< HEAD
import React from 'react';


import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-4">

          <div className="space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>

        </nav>
=======
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, 
  Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, 
  Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, 
  Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, 
  TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, 
  LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  BarChart3, 
  ShoppingCart, 
  Wrench, 
  Globe, 
  Building, 
  Code, 
  Shield, 
  Zap, 
  ChevronRight, 
  ChevronDown,
  Star,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Brain,
  Leaf,
  Smartphone,
  DollarSign,
  BookOpen,
  Video,
  FileSearch,
  Lightbulb,
  Target,
  Users2,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Mail,
  MapPin
} from 'lucide-react';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Database, Network, Zap, Target, Rocket, Cloud, Github } from 'lucide-react';
    }
  };
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };
  // Fixed contact information
  const contactInfo = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Navigation Menu</p>
                  </div>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={onClose}
            />
            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 shadow-2xl border-r border-cyan-500/30"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    Z
                  </div>
                  <span className="text-lg font-semibold text-cyan-400">Zion Tech Group</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-background border-r border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  const handleSocialLinkClick = (social: typeof socialLinks[0]) => {
    try {
      window.open(social.href, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Failed to open ${social.label}:`, error);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text hover:bg-white/10 rounded-lg p-2 transition-colors"
                    >
                      <span>{section.title}</span>
                      {expandedSections.includes(section.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedSections.includes(section.title) && (
                      <div className="space-y-1 ml-4">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                                isActive
                                  ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                  : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${
                                isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                              }`} />
                              <span className="flex-1 text-sm">{item.name}</span>
                              {isActive && (
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
              {/* Navigation */}
              <nav className="space-y-8">
                {navigationItems.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'text-zion-cyan bg-zion-cyan/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                            onClick={onClose}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center"
                    >
                      Get Free Quote
                    </Link>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, index) => (
                <div key={index}>
                  <h3 className="text-zion-cyan font-semibold mb-4 text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            isActive
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
                          }`}
                          onClick={onClose}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-white'}`} />
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      );
                    })}
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                    <Link 
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center block"
                    >
                      Get Free Quote
                    </Link>
                    <Link 
                      to="/pricing"
                      className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors text-center block"
                    >
                      View Pricing
                    </Link>
            </div>
            {/* Navigation Items */}
            <div className="p-4 space-y-6">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-400/50'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        {location.pathname === item.path && (
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                    <Link to="/contact" className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center block">
                      Get Free Quote
                    </Link>
                    <Link to="/contact" className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors text-center block">
                      Schedule Demo
                    </Link>
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>
            {/* Navigation Content */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider neon-text-cyan">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        onClick={onClose}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <contact.icon className="h-4 w-4 text-zion-cyan" />
                      <a href={contact.href} className="hover:text-zion-cyan transition-colors">
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-8">
                  {navigationItems.map((section, index) => (
                    <div key={index} className="px-6">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.path}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                location.pathname === item.path
                                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] z-50 overflow-hidden"
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 futuristic-bg opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            {/* Neural Network Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-line" style={{ top: '20%', width: '60%', left: '20%', animationDelay: '0s' }}></div>
              <div className="neural-line" style={{ top: '40%', width: '40%', left: '10%', animationDelay: '1s' }}></div>
              <div className="neural-line" style={{ top: '60%', width: '70%', left: '15%', animationDelay: '2s' }}></div>
              <div className="neural-line" style={{ top: '80%', width: '50%', left: '25%', animationDelay: '3s' }}></div>
            </div>
            {/* Floating Quantum Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="quantum-particle" style={{ top: '15%', left: '80%', animationDelay: '0s' }}></div>
              <div className="quantum-particle" style={{ top: '35%', left: '85%', animationDelay: '1s' }}></div>
              <div className="quantum-particle" style={{ top: '55%', left: '90%', animationDelay: '2s' }}></div>
              <div className="quantum-particle" style={{ top: '75%', left: '88%', animationDelay: '3s' }}></div>
            </div>
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center animate-quantum-float">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold neon-text">Zion Tech</h2>
                    <p className="text-sm text-zion-slate-light">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hover:neon-text transition-colors" />
                </button>
              </div>
              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        const isFeatured = item.featured;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative ${
                              isActive
                                ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                            } ${isFeatured ? 'border-l-2 border-zion-cyan/50' : ''}`}
                          >
                            {isFeatured && (
                              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                            )}
                            <Icon className={`w-4 h-4 ${
                              isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                            }`} />
                            <span className="flex-1">{item.name}</span>
                            {isActive && (
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                            {isFeatured && (
                              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </nav>
              </div>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zion-slate-light hover:text-zion-cyan transition-colors" />
                  </a>
                ))}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Navigation */}
            <div className="p-6 space-y-6">
              {navigationItems.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.title);
                return (
                  <div key={section.title} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-800/50 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                isActive 
                                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400' 
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                              onClick={onClose}
                            >
                              <ItemIcon className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-400 mt-1 truncate">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Contact & Social */}
            <div className="p-6 border-t border-gray-800/50 space-y-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{contact.label}</span>
                      </a>
                    );
                  })}
            <div className="p-6 border-t border-gray-800 space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                      title={social.label}
              {/* Social Links */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 border border-cyan-500/20 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
              </div>
              {/* Footer */}
              <div className="border-t border-gray-700/50 p-6 space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Contact Information</h4>
                  <div className="space-y-2">
            className="fixed left-0 top-0 h-full w-80 bg-background/95 backdrop-blur-md border-r border-border z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-lg font-bold text-gradient">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform">
                      Get Free Quote
                    </button>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-sm text-zion-slate-light hover:neon-text transition-colors group"
                        >
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
                      );
                    })}
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <contact.icon className="w-3 h-3" />
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4 text-zion-slate-light group-hover:neon-text transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>
                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-zion-cyan transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
                ))}
              </div>
            </div>
            role="complementary"
            aria-label="Navigation sidebar"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                          }`}
                          onClick={onClose}
                        >
                          <item.icon className={`w-4 h-4 flex-shrink-0 ${
                            location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Social Links */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            {/* Contact Information */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">{contact.text}</span>
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* CTA Button */}
            <div className="p-6 border-t border-gray-800">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.aside>
            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={onClose}
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={onClose}
                >
                  Request Demo
                </Link>
              </div>
            </div>
            {/* Footer */}
            <div className="p-6 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <p className="text-gray-600 text-xs mt-1">
                AI-Powered Innovation
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
                </div>
                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2025 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
              ))}
            </div>
            {/* Contact Information */}
            <div className="p-4 border-t border-cyan-500/30 mt-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Social Links */}
            <div className="p-4 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 px-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-400/30 hover:to-blue-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            {/* Quick Actions */}
            <div className="p-4 border-t border-cyan-500/30">
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.aside>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
            {/* Social Links */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleSocialLinkClick(social)}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Stay Updated</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  const quickActions = [
    { name: 'Get Started', href: '/contact', icon: Rocket, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Request Demo', href: '/request-quote', icon: Video, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Support Chat', href: '/support', icon: MessageSquare, color: 'from-green-400 to-emerald-400' }
  ];
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <motion.aside 
      className={cn("w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 min-h-screen overflow-y-auto", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="sticky top-0 bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-zion-cyan rounded-xl blur-xl opacity-60"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-zion-cyan/70 text-xs font-medium">Innovation • Intelligence • Impact</p>
          </div>
        </div>
        {/* Quick Actions */}
        <div className="space-y-2">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              to={action.href}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                {action.name}
              </span>
            </Link>
          ))}
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>
    </aside>
  );
}
// Add missing icons
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 20c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V16c0 2.21-3.58 4-8 4z"/>
    <path d="M12 16c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V12c0 2.21-3.58 4-8 4z"/>
    <path d="M12 12c-4.42 0-8-1.79-8-4V6.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V8c0 2.21-3.58 4-8 4z"/>
  </svg>
);
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
  MessageSquare, 
  BarChart3,
  ShoppingCart,
  Wrench,
  Globe,
  Building,
  Code,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
  external?: boolean;
}
export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();
  const sidebarItems: SidebarItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Space Technology', path: '/space-tech', icon: Rocket },
        { name: 'Cybersecurity', path: '/security', icon: Shield },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/transformation', icon: Zap },
        { name: 'Green IT', path: '/green-it', icon: Leaf },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: DollarSign },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', icon: Building }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      icon: Users,
      children: [
        { name: 'Browse Talents', path: '/talents', icon: Users2 },
        { name: 'Talent Directory', path: '/talent-directory', icon: FileSearch },
        { name: 'AI Matcher', path: '/ai-matcher', icon: Brain },
        { name: 'Hire Now', path: '/hire-now', icon: Briefcase },
        { name: 'Post a Job', path: '/post-job', icon: FileText }
      ]
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      icon: ShoppingCart,
      children: [
        { name: 'Equipment', path: '/equipment', icon: Wrench },
        { name: 'Categories', path: '/categories', icon: Settings },
        { name: 'Featured', path: '/featured', icon: Star },
        { name: 'Deals', path: '/deals', icon: Zap }
      ]
    },
    {
      name: 'Company',
      path: '/company',
      icon: Building,
      children: [
        { name: 'About Us', path: '/about', icon: Building },
        { name: 'Our Team', path: '/team', icon: Users2 },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Press', path: '/press', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: Lightbulb }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: Target },
        { name: 'White Papers', path: '/white-papers', icon: FileSearch },
        { name: 'Documentation', path: '/documentation', icon: Code },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Code }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact Support', path: '/contact', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: BarChart3 },
        { name: 'Request Quote', path: '/request-quote', icon: MessageSquare }
      ]
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      icon: Building,
      children: [
        { name: 'Enterprise Solutions', path: '/solutions', icon: Target },
        { name: 'Custom Solutions', path: '/solutions', icon: Target },
        { name: 'Community', path: '/community', icon: Users2 }
      ]
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3,
      children: [
        { name: 'Performance Metrics', path: '/analytics/performance', icon: Activity },
        { name: 'User Analytics', path: '/analytics/users', icon: Users },
        { name: 'Business Intelligence', path: '/analytics/bi', icon: PieChart },
        { name: 'Reports', path: '/reports', icon: BarChart }
      ]
    }
  ];
  const toggleItem = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };
  const isActive = (path: string) => location.pathname === path;
  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const isItemActive = isActive(item.path);
    return (
      <div key={item.name}>
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
          isItemActive
            ? 'bg-blue-600 text-white shadow-lg'
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }`}>
          <Link 
            to={item.path} 
            className={`flex items-center space-x-3 flex-1 ${level > 0 ? 'ml-4' : ''}`}
          >
            <item.icon className={`h-5 w-5 ${isItemActive ? 'text-white' : 'text-gray-500'}`} />
            <span className="font-medium">{item.name}</span>
            {item.badge && (
              <span className="ml-auto px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleItem(item.name)}
              className={`p-1 rounded transition-colors ${
                isItemActive
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto shadow-lg">
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>
        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Request Quote</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">Get Help</span>
            </Link>
            <Link
              to="/pricing"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span className="font-medium">View Pricing</span>
            </Link>
          </div>
        </div>
        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
