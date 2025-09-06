
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

  href: string;  icon?: React.ReactNode;import { ;

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin

} from 'lucide-react';
interface NavigationItem {
  name: string
  href: string

  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;

  color?: string;
=======
  color?: string;  color?: string
}
=======
  color?: string;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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


    description: 'Main pages and core information',
    category: 'core',
    color: 'from-emerald-500 to-cyan-500',
    children: [

    description: 'Advanced AI and technology solutions',

    badge: 'Featured',
    category: 'services',
    color: 'from-purple-500 to-pink-500',
    children: [
      {

        name: 'All Services',
        href: '/services',
        description: 'Complete services overview',
        icon: <Grid className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2029',
        description: 'Next-generation AI consciousness',
        icon: <Brain className='w-4 h-4' />,
        color: 'from-purple-500 to-pink-500',
        featured: true,
      },
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className='w-4 h-4' />,
        color: 'from-blue-500 to-cyan-500',
        featured: true,
      },
      {
        name: 'Autonomous Business Operations',
        href: '/autonomous-business-operations-platform',
        description: 'AI-powered business automation',
        icon: <Bot className='w-4 h-4' />,
        color: 'from-emerald-500 to-teal-500',
      },
      {
        name: 'IT Asset Management',
        href: '/ai-powered-it-asset-management',
        description: 'AI-powered IT infrastructure management',
        icon: <Monitor className='w-4 h-4' />,
        color: 'from-indigo-500 to-purple-500',
      },
    ],
  },
  {
    name: 'Advanced Solutions',
    href: '/solutions',
    icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {

    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [

    description: 'Knowledge base and insights',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [

    description: 'Company information and support',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [


  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);        setActiveDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);


      }
    };

    window.addEventListener('resize', handleResize);


                Zion Tech Group
              </span>
            </Link>
          </div>
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
                  <ChevronDown className='w-4 h-4' />                </button>                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    >
                      <div className='space-y-4'>
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200'
                            onClick={closeMenu}
                          >
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
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className='text-sm text-gray-400 mt-1'>
                                {child.description}
                              </p>                            </div>                    >
                      <div className="space-y-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white">{child.name}</span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className='text-sm text-gray-400 mt-1'>
                                {child.description}
                              </p>                              <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                            </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />


                <span>{contactInfo.mobile}</span>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </a>
            </div>
            <Link
              href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>
          </div>
          {/* Mobile menu button */}


              )}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </button>
          </div>
        </div>
      </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                        transition={{ duration: 0.2 }}
                        className='ml-4 mt-2 space-y-1'



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}

                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}

                            onClick={closeMenu}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                    <ArrowRight className='ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}
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
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
