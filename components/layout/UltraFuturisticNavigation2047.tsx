import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Menu
  ChevronDown
  X
  Phone
  Mail
  ArrowRight
  Brain
  Rocket
  Target
  Atom
  Shield
  DollarSign
  BarChart3
  Globe
  Grid
  Heart
  Database
  Cpu
  Palette
  Cloud
  Network
  TrendingUp
  ShoppingCart
  Settings
  Building
  Monitor
  Zap
  Eye
  Infinity
  Sparkles
  Users
  Lock
  Code
  Server
  Layers
  Globe2
  Star
  Award
  Clock
  CheckCircle
  Zap as ZapIcon
  Phone as PhoneIcon
  Search
  User
  Bell
  Cog
  LogOut
  Home
  Info
  FileText
  Users as UsersIcon
  Bot
  MessageCircle
  Linkedin
  Twitter
  Github
  Youtube
  MapPin;
} from 'lucide-react';
interface NavigationItem {
  name: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin
 } from 'lucide-react';
interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
} from 'lucide-react';
interface NavigationItem {
  name: string
  href: string
origin/cursor/automate-test-improve-and-merge-code-2533
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
    name: 'Home & Core';
    href: '/';
    icon: <Home className;
const UltraFuturisticNavigation2047 = () => {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleDropdownToggle = (name: string) => {
setActiveDropdown(activeDropdown === name ? null : name);
origin/cursor/automate-test-improve-and-merge-code-2533
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
origin/cursor/automate-test-improve-and-merge-code-2533
  }, []);
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Rocket className='w-5 h-5 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Zion Tech Group
              </span>
            </Link>
          </div>
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
<div className='hidden lg:flex lg:items-center lg:space-x-8'>
            {navigationItems.map(item => (
              <div key={item.name} className='relative group'>
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'
origin/cursor/automate-test-improve-and-merge-code-2533
                    >
                      <div className='space-y-4'>
                        {item.children?.map(child => (
                      transition={{ duration: 0 && 0.2 }}
                      className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'>;
                      <div className='space-y-4'>;
                        {item && item.children?.map(child => (;
                          <Link
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}
                            >
                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>
                                  {child.name}
                                </span>
                                {child.featured && (
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>
                                    Featured
                                  </span>
                                )}
origin/cursor/automate-test-improve-and-merge-code-2533
                              </div>
<p className='text-sm text-gray-400 mt-1'>
                                {child.description}
                              </p>
                            </div>

                          </Link>
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
          {/* Contact Info & CTA */}
<div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <a

                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />
            </Link>
          </div>
          {/* Mobile menu button */}
<div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </button>
          </div>
        </div>
      </div>

            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200';
                  >;
                    <div className='flex items-center space-x-2'>;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200";
                  >;
                    <div className="flex items-center space-x-2">;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`} />;
                  </button>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}

                        transition={{ duration: 0.2 }}
className='ml-4 mt-2 space-y-1'
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                            onClick={closeMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
{/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>
                <div className='px-3 py-2 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Phone className='w-4 h-4' />
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Mail className='w-4 h-4' />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-4 h-4' />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className='px-3 pt-2'>
                  <Link
                    href='/contact'
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className='ml-2 w-4 h-4' />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
);
};

export default UltraFuturisticNavigation2047;
origin/cursor/automate-test-improve-and-merge-code-2533
