>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

=======import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,;
  MapPin,;
} from 'lucide-react';

import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,;
  MapPin,;
} from 'lucide-react';


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

  href: string;  icon?: React.ReactNode;import { ;

  href: string;  icon?: React.ReactNode;import { ;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
} from 'lucide-react';
interface NavigationItem {
  name: string
  href: string

=======
=======
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin;
} from 'lucide-react';


interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const navigationItems: NavigationItem[] = [
  {

    name: 'Home & Core'
    href: '/'
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {    icon: <Home className="w-5 h-5" />
    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {
                Zion Tech Group
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0">;
            <Link href="/" className="flex items-center space-x-2">;
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">;
                <Rocket className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;

=======
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;


          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8'>;
            {navigationItems && navigationItems.map(item => (;
              <div key={item && item.name} className='relative group'>;

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    >
                      <div className='space-y-4'>
                        {item.children?.map(child => (
          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items - center lg:space - x-8'>;
            {navigation_items.map (item => (
              <div key={item.name} className='relative group'>;
                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className='flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200';
                >;
                  {item.icon}
                  <span>{item.name}</span>;
                  <ChevronDown className='w - 4 h - 4' />                </button>                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className="flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200";
                >;
                  {item.icon}
                  <span>{item.name}</span>;
                  <ChevronDown className="w - 4 h - 4" />;
                </button>;
                <AnimatePresence>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top - full left - 0 w - 80 bg - slate - 800 / 95 backdrop - blur - md border border - slate - 700 / 50 rounded - xl shadow - 2xl p - 6 z - 50';
                    >;
                      <div className='space - y-4'>;
                        {item.children?.map (child => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className='flex items - start space - x-3 p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200';
                            on_click={close_menu}
                          >;
                            <div;
                              className={`p - 2 rounded - lg bg - gradient - to - r ${child.color || 'from - gray - 500 to - slate - 500'}`}
                            >;


                <span>{contactInfo.mobile}</span>


              </a>
            </div>
            <Link
              href='/contact'


          {/* Contact Info & CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
              href="/contact"

            </Link>
=======

            </Link>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>;
              Get Started;
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>;
          </div>;
          {/* Mobile menu button */}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              )}


=======

              )}
              )}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </button>
          </div>
        </div>
      </div>

=======
                                  <span className="px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full">;
                                    Featured;
                                  </span>)}
                              </div>;
                              <p className='text - sm text - gray - 400 mt - 1'>;
                                {child.description}
                              </p>                              <p className="text - sm text - gray - 400 mt - 1">{child.description}</p>;
                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </div>;
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex lg:items - center lg:space - x-4'>;
            <div className='flex items - center space - x-4 text - sm text - gray - 400'>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className='flex items - center space - x-1 hover:text - white transition - colors';
              >;
                <Phone className='w - 4 h - 4' />                <span>{contact_info.mobile}</span>;
              </a>;
            </div>;
            <Link          <div className="hidden lg:flex lg:items - center lg:space - x-4">;
            <div className="flex items - center space - x-4 text - sm text - gray - 400">;
              <a href={`tel:${contact_info.mobile}`} className="flex items - center space - x-1 hover:text - white transition - colors">;
                <Phone className="w - 4 h - 4" />;
              </a>;
            </div>;
            <Link;
              href='/contact';
              className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200';
            >;
              Get Started;
              <ArrowRight className='ml - 2 w - 4 h - 4' />            </Link>;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>              href="/contact";
              className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200";
            >;
              Get Started;
              <ArrowRight className="ml - 2 w - 4 h - 4" />;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>;
            <button;
              on_click={toggle_menu}
              className='inline - flex items - center justify - center p - 2 rounded - md text - gray - 400 hover:text - white hover:bg - slate - 700 focus:outline - none focus:ring - 2 focus:ring - inset focus:ring - white';
            >;
              <span className='sr - only'>Open main menu</span>;
              {is_open ? (
                <X className='block h - 6 w - 6' />) : (
                <Menu className='block h - 6 w - 6' />              )}            <button;
              on_click={toggle_menu}
              className="inline - flex items - center justify - center p - 2 rounded - md text - gray - 400 hover:text - white hover:bg - slate - 700 focus:outline - none focus:ring - 2 focus:ring - inset focus:ring - white";
            >;
              <span className="sr - only">Open main menu</span>;
              {is_open ? (
                <X className="block h - 6 w - 6" />) : (
                <Menu className="block h - 6 w - 6" />)}




      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
=======
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  
=======

                  

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
              )}

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'

          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                  >
                    <div className='flex items-center space-x-2'>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
=======                        transition={{ duration: 0.2 }}

                          <Link
                            key={child && child.name}
                            href={child && child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"


                          >
                            {child.name}
                          </Link>
=======

=======
                        transition={{ duration: 0.2 }}
                        className='ml-4 mt-2 space-y-1'

                          <Link
                            key={child.name}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                            onClick={closeMenu}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}

                          >
                            {child.name}
                          </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}

                      href={`mailto:${contactInfo && contactInfo.email}`}
                      className='hover:text-white transition-colors'>;
                      {contactInfo && contactInfo.email}
                    </a>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;

                <div className='px-3 pt-2'>;

                  <Link
                    href='/contact'
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}>;
                    Get Started;
                    <ArrowRight className='ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}

              
              {/* Mobile Contact Info */}

              <div className="pt-4 pb-3 border-t border-slate-700/50">
                <div className="px-3 py-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">
                            onClick={closeMenu}

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
                  <Link=======
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                        className='ml - 4 mt - 2 space - y-1';
                      >;
                        {item.children?.map (child => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className='block px - 3 py - 2 text - sm text - gray - 400 hover:text - white hover:bg - slate - 700 / 50 rounded - md transition - colors duration - 200'                            on_click={close_menu}                      >;
                        {item.children?.map ((child) => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className="block px - 3 py - 2 text - sm text - gray - 400 hover:text - white hover:bg - slate - 700 / 50 rounded - md transition - colors duration - 200";
                            on_click={close_menu}
                          >;
                            {child.name}
                          </Link>))}
                      </motion.div>)}
                  </AnimatePresence>;
                </div>))}
              {/* Mobile Contact Info */}
              <div className='pt - 4 pb - 3 border - t border - slate - 700 / 50'>;
                <div className='px - 3 py - 2 text - sm text - gray - 400'>;
                  <div className='flex items - center space - x-2 mb - 2'>;
                    <Phone className='w - 4 h - 4' />;
                    <a;
                      href={`tel:${contact_info.mobile}`}
                      className='hover:text - white transition - colors';
                    >;
                      {contact_info.mobile}
                    </a>;
                  </div>;
                  <div className='flex items - center space - x-2 mb - 2'>;
                    <Mail className='w - 4 h - 4' />;
                    <a;
                      href={`mailto:${contact_info.email}`}
                      className='hover:text - white transition - colors';
                    >;
                      {contact_info.email}
                    </a>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <div className='px - 3 pt - 2'>;
                  <Link;
                    href='/contact';
                    className='w - full inline - flex items - center justify - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200';
                    on_click={close_menu}
                  >;
                    Get Started;
                    <ArrowRight className='ml - 2 w - 4 h - 4' />                  </Link>              {/* Mobile Contact Info */}
              <div className="pt - 4 pb - 3 border - t border - slate - 700 / 50">;
                <div className="px - 3 py - 2 text - sm text - gray - 400">;
                  <div className="flex items - center space - x-2 mb - 2">;
                    <Phone className="w - 4 h - 4" />;
                    <a href={`tel:${contact_info.mobile}`} className="hover:text - white transition - colors">;
                      {contact_info.mobile}
                    </a>;
                  </div>;
                  <div className="flex items - center space - x-2 mb - 2">;
                    <Mail className="w - 4 h - 4" />;
                    <a href={`mailto:${contact_info.email}`} className="hover:text - white transition - colors">;
                      {contact_info.email}
                    </a>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <MapPin className="w - 4 h - 4" />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <div className="px - 3 pt - 2">;
                  <Link;
                    href="/contact";
                    className="w - full inline - flex items - center justify - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200";
                    on_click={close_menu}
                  >;
                    Get Started;
                    <ArrowRight className="ml - 2 w - 4 h - 4" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  </Link>;
                </div>;
              </div>;
            </div>;

};
export default UltraFuturisticNavigation2047;  );
};

=======
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
