>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect } from 'react';

=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  BookOpen,
  Truck,
  DollarSign,
  BarChart3,
  Globe,
  Users,
  Star,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Search,
  Grid,
  List,
  TrendingUp,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  User,
  ShoppingCart,
  Bell,
  HelpCircle,
  FileText,
  Video,
  Headphones,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Camera,
  Gamepad2,
  Palette,
  Music,
  Film,
  BookOpenCheck,
  Building,;
  MessageCircle,;
} from 'lucide-react';



import {
  Menu
  ChevronDown
  X
  Phone
  Mail
  MapPin
  ArrowRight
  Brain
  Rocket
  Shield
  Zap
  Target
  Atom
  BookOpen
  Truck
  DollarSign
  BarChart3
  Globe
  Users
  Star
  Sparkles
  Cpu
  Lock
  Cloud
  Settings
  Eye
  Award
  Clock
  Heart
  Lightbulb
  Search
  Grid
  List
  TrendingUp
  Shield as ShieldIcon
  Globe as GlobeIcon
  User
  ShoppingCart
  Bell
  HelpCircle
  FileText
  Video
  Headphones
  Code
  Database
  Network
  Server
  Monitor
  Smartphone
  Camera
  Gamepad2
  Palette
  Music
  Film
  BookOpenCheck
  Building
  MessageCircle;
} from 'lucide-react';
interface NavigationItem {
  name: string;


  href: string;  icon?: React.ReactNode;import { ;


  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


interface NavigationItem {


interface NavigationItem {;
  name: string,;
  href: string,;


}
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const navigation_items: NavigationItem[] = [;
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className='w - 5 h - 5' />,
    children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      {
        name: 'Market Pricing',
        href: '/market - pricing',
        name: 'Market Pricing',
        href: '/market-pricing',>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        description: 'Compare market averages',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Guides, reports and tools',
    children: [
        description: 'Proven results',
      },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      {
        name: 'Services Advertising',

        href: '/services-advertising',

        description: 'Features, benefits and market pricing links',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const navigationItems: NavigationItem[] = [
  {
    name: 'Pricing'
    href: '/pricing'
    icon: <DollarSign className='w-5 h-5' />
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' }
      {
        name: 'Market Pricing'
        href: '/market-pricing'
        description: 'Compare market averages'
      }
    ]
  }
  {
    name: 'Resources'
    href: '/resources'
    icon: <BookOpen className='w-5 h-5' />
    description: 'Guides, reports and tools'
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }
      {
        name: 'Case Studies'
        href: '/case-studies'
        description: 'Proven results'
      }
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }
      {
        name: 'Services Advertising'
        href: '/services-advertising'
        description: 'Features, benefits and market pricing links'
      }
    ]
  }
  {
    name: 'Contact'
    href: '/contact'
    icon: <Phone className='w-5 h-5' />,    description: 'Talk to our team'
    featured: true
    children: [
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' }
=======
=======
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w - 5 h - 5" />,
    description: 'Talk to our team',
    featured: true,
    children: [;
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },

    name: 'Services',
    href: '/services',
    icon: <Grid className='w - 5 h - 5' />,
    description: 'Browse by category',
    badge: 'New',
    children: [;
      {
        name: 'AI & Data',
        href: '/services?filter = ai - consciousness',
        description: 'AI, data, ML services',
      },
      {
        name: 'Enterprise IT',
        href: '/services?filter = enterprise - it',
        description: 'Infra, security, platforms',
      },
      {
        name: 'Quantum & Emerging',
        href: '/services?filter = quantum - emerging',
        description: 'Quantum, space, frontier',
      },
      {
        name: 'Micro SAAS',
        href: '/services?filter = micro - saas',
        description: 'Business accelerators',
      },
      {
        name: 'Creative & Media',
        href: '/services?filter = creative - media',
        description: 'Content, media, design',
      },
    ],
  },
  {
    name: 'All Services',
    href: '/comprehensive - services - showcase - 2025',
    icon: <Globe className='w - 5 h - 5' />,    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [  {
  return (
    <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }`}>;
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />;
        </div>;
      </div>;
      <div className="relative z-10">;
        <div className="container mx-auto px-4">;
          <div className="flex items-center justify-between h-20">;
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                <Brain className="w-6 h-6 text-white" />;
              </div>;
              <div>;
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </div>;
                <div className="text-xs text-gray-400">Revolutionary Technology</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-8'>;
              {navigationItems && navigationItems.map(item => (;
                <div key={item && item.name} className='relative group'>;
                  <button
                    onClick={() => toggleDropdown(item && item.name)}
                    className='flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'                  >;
                    {item && item.icon}
                    <span>{item && item.name}</span>;
                    {item && item.badge && (            <div className="hidden lg:flex items-center gap-8">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  <button
                    onClick={() => toggleDropdown(item && item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400";
                    {item && item.icon}
                    <span>{item && item.name}</span>;
                    {item && item.badge && (;
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item && item.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : item && item.badge === 'Hot'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : item && item.badge === 'Showcase'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : item && item.badge === 'Future'
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : item && item.badge === 'Enterprise'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : item && item.badge === 'Industry'
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>;
                        {item && item.badge}
                      </span>;
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item && item.name ? 'rotate-180' : ''
                      }`}
                    />                  </button>                      <spanclassName={`px-2 py-1 text-xs rounded-full ${
                        item && item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item && item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item && item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item && item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item && item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item && item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
=======

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
=======        : 'bg-transparent'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        </div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
            {/* Desktop Navigation */}
                    {item.icon}
                    <span>{item.name}</span>;
                    {item.badge && (


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Desktop Navigation */}


                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (

                  </button>


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}

                        onMouseLeave={closeDropdowns}
                      >
                        <div className='p-6'>
                          <div className='flex items-center gap-3 mb-4'>
                            {item.icon}
                            <div>
                              <h3 className='font-semibold text-white'>
                                {item.title |item.name}
                              </h3>
=======

                                {child.featured && (
                                  <Star className='w-4 h-4 text-cyan-400' />
                                )}
                                <div className='flex-1'>
                                  <div className='font-medium'>
                                    {child.name}
                                  </div>
                                    <div className='text-sm opacity-75'>
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                                <ArrowRight className='w-4 h-4 opacity-50' />                              </Link>                                <ArrowRight className="w-4 h-4 opacity-50" />
                              </Link>


                              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
            </div>;



=======
=======

            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>;
              {/* Quick Actions */}

              <div className='flex items-center gap-2'>
                  <Link



                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>;
                <a
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;
                  <Phone className='w-4 h-4' />;
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                {quickActions.map((action) => (
                  <Link
                                </p>)}
                            </div>;
                          </div>;
                          <div className='space - y-2'>;
                            {item.children?.map (child => (                              <Link;
                                key={child.name}
                                href={child.href}
                                className={`flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 ${
                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20'                                    : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
                                }`}
                                on_click={close_dropdowns}
                              >                        onMouseLeave={close_dropdowns}
                      >;
                        <div className="p - 6">;
                          <div className="flex items - center gap - 3 mb - 4">;
                            {item.icon}
                            <div>;
                              <h3 className="font - semibold text - white">{item.title || item.name}</h3>;
                              {item.description && (
                                <p className="text - sm text - gray - 400">{item.description}</p>)}
                            </div>;
                          </div>;
                          <div className="space - y-2">;
                            {item.children?.map ((child) => (
                              <Link;
                                key={child.name}
                                href={child.href}
                                className={`flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 ${
                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20'                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20';
                                    : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
                                }`}
                                on_click={close_dropdowns}
                              >;
                                {child.featured && (
                                  <Star className='w - 4 h - 4 text - cyan - 400' />)}
                                <div className='flex - 1'>;
                                  <div className='font - medium'>;
                                    {child.name}
                                  </div>;
                                    <div className='text - sm opacity - 75'>;
                                      {child.description}
                                    </div>)}
                                </div>;
                                <ArrowRight className='w - 4 h - 4 opacity - 50' />                              </Link>                                <ArrowRight className="w - 4 h - 4 opacity - 50" />;
                              </Link>))}
                          </div>;
                        </div>;
                      </motion.div>)}
                  </AnimatePresence>;
                </div>))}
            </div>;
            {/* Right Side Actions */}
            <div className='hidden lg:flex items - center gap - 4'>;
              {/* Quick Actions */}
              <div className='flex items - center gap - 2'>;
                {quick_actions.map (action => (                  <Link            <div className="hidden lg:flex items - center gap - 4">;
              {/* Quick Actions */}
              <div className="flex items - center gap - 2">;
                {quick_actions.map ((action) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    key={action.name}
                    href={action.href}
                    className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 ${
                      action.primary;
                        ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25';
                        : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
                    }`}
                  >;
                    {action.icon}
                    <span>{action.name}</span>;
                  </Link>))}
              </div>;
              {/* Contact Info */}

                </a>
              </div>
            </div>


=======
==============




                                )}
=======

                                )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




                              </Link>
                              </Link>
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39                        <Link




=======                  {/* Mobile Quick Actions */}
                  <div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3'>
                      {quickActions.map(action => (                        <Link                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link



                          key={action.name}
                          href={action.href}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




=======

=======
                    </div>
                  </div>
                    </div>;
                  </div>;


=======



                        href={`tel:${contactInfo.mobile}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200'
                      >
                        <Phone className='w-4 h-4' />



                        <span>{contactInfo.mobile}</span>
                      </a>
                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3 text-sm text-gray-400">
                      <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Phone className="w-4 h-4" />
==============                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Mail className="w-4 h-4" />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 rounded-lg">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  )
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default UltraFuturisticNavigation2035;


=======
                            <span;
                              className={`px - 2 py - 1 text - xs rounded - full ${
                                item.badge === 'New';
                                  ? 'bg - green - 500 / 20 text - green - 400';
                                  : item.badge === 'Hot';
                                    ? 'bg - red - 500 / 20 text - red - 400';
                                    : item.badge === 'Showcase';
                                      ? 'bg - cyan - 500 / 20 text - cyan - 400';
                                      : 'bg - gray - 500 / 20 text - gray - 400';
                              }`}
                            >                              {item.badge}
                            </span>)}
                        </div>                            <span className={`px - 2 py - 1 text - xs rounded - full ${
                              item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400' :;
                              item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400' :;
                              item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400' :;
                              'bg - gray - 500 / 20 text - gray - 400';
                            }`}>;
                            </span>)}
                        </div>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 200 ${
                            active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />                      </button>                        <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${
                          active_dropdown === item.name ? 'rotate - 180' : '';
                        }`} />;
                      </button>;
                      {/* Mobile Dropdown */}
                      <AnimatePresence>;
                        {active_dropdown === item.name && (
                          <motion.div;
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className='ml - 6 mt - 2 space - y-2';
                          >;
                            {item.children?.map (child => (                              <Link;
                                key={child.name}
                                href={child.href}
                                className={`block p - 3 rounded - lg transition - colors duration - 200 ${
                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400'                                    : 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';
                                }`}
                                on_click={closeMobileMenu}
                              >                            className="ml - 6 mt - 2 space - y-2";
                          >;
                            {item.children?.map ((child) => (
                              <Link;
                                key={child.name}
                                href={child.href}
                                className={`block p - 3 rounded - lg transition - colors duration - 200 ${
                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400'                                  child.featured;
                                    ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400';
                                    : 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';
                                }`}
                                on_click={closeMobileMenu}
                              >;
                                <div className='font - medium'>{child.name}</div>;
                                {child.description && (
                                  <div className='text - sm opacity - 75 mt - 1'>;
                                    {child.description}
                                  </div>                                )}                                <div className="font - medium">{child.name}</div>;
                                {child.description && (
                                  <div className="text - sm opacity - 75 mt - 1">{child.description}</div>)}
                              </Link>))}
                          </motion.div>)}
                      </AnimatePresence>;
                    </div>))}
                  {/* Mobile Quick Actions */}
                  <div className='pt - 4 border - t border - gray - 800 / 50'>;
                    <div className='space - y-3'>;
                      {quick_actions.map (action => (                        <Link                  <div className="pt - 4 border - t border - gray - 800 / 50">;
                    <div className="space - y-3">;
                      {quick_actions.map ((action) => (
                        <Link;
                          key={action.name}
                          href={action.href}
                          className={`flex items - center gap - 3 p - 3 rounded - xl text - sm font - medium transition - all duration - 200 ${
                            action.primary;
                              ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white';
                              : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
                          }`}
                          on_click={closeMobileMenu}
                        >;
                          {action.icon}
                          <span>{action.name}</span>;
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Mobile Contact Info */}
                  <div className='pt - 4 border - t border - gray - 800 / 50'>;
                    <div className='space - y-3 text - sm text - gray - 400'>;
                      <a;
                        href={`tel:${contact_info.mobile}`}
                        className='flex items - center gap - 3 p - 3 rounded - lg hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - all duration - 200';
                      >;
                        <Phone className='w - 4 h - 4' />;
                        <span>{contact_info.mobile}</span>;
                      </a>;
                      <a;
                        href={`mailto:${contact_info.email}`}
                        className='flex items - center gap - 3 p - 3 rounded - lg hover:text - purple - 400 hover:bg - gray - 800 / 50 transition - all duration - 200';
                      >;
                        <Mail className='w - 4 h - 4' />;
                        <span>{contact_info.email}</span>;
                      </a>;
                      <div className='flex items - center gap - 3 p - 3 rounded - lg'>;
                        <MapPin className='w - 4 h - 4' />;
                        <span className='text - sm'>{contact_info.address}</span>                      </div>                        <span>{contact_info.mobile}</span>;
                      </a>;
                      <a href={`mailto:${contact_info.email}`} className="flex items - center gap - 3 p - 3 rounded - lg hover:text - purple - 400 hover:bg - gray - 800 / 50 transition - all duration - 200">;
                        <Mail className="w - 4 h - 4" />;
                        <span>{contact_info.email}</span>;
                      </a>;
                      <div className="flex items - center gap - 3 p - 3 rounded - lg">;
                        <MapPin className="w - 4 h - 4" />;
                        <span className="text - sm">{contact_info.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </div>;
    </nav>);
=======

  closeMobileMenu 
}>) ) 
}</div> </div> </div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </div> </nav>) 
};
export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;  )
};

export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;
=======
;=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
