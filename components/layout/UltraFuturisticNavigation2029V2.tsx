import React, { useState } from 'react',
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {


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
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  Shield,
  Globe,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
  Eye,
  Globe2,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  ShieldCheck,
  Target,
  Users2,
  Briefcase,
  Lightbulb,
  Award,

  Clock,;
  CheckCircle,;} from 'lucide-react';import { ;


  Menu, X, Search, ChevronDown, ChevronRight;

  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
  BookOpen, MessageCircle, Star, TrendingUp;
  Layers, Cpu, Database, Cloud, Lock, Shield;
  Globe, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2;
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;


const serviceCategories = [


      {

        name: 'AI Autonomous Business Manager',
        href: '/services / ai - autonomous - business - manager',
        description: 'Fully autonomous business operations',
        price: '$12, 999 / month',
      },
    ],

    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    description: 'Quantum computing and beyond',


      {

        name: 'Quantum Creativity Studio',
        href: '/services / quantum - creativity - studio',
        description: 'Quantum - enhanced creativity',
        price: '$1, 999 / month',
      },
    ],

    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from - blue - 600 via - cyan - 600 to - teal - 600',
    description: 'Autonomous enterprise infrastructure',


      {

        name: 'Smart Financial Management Platform',
        href: '/services / smart - financial - management - platform',
        description: 'AI - powered financial planning',
        price: '$2, 999 / month',
      },
    ],

    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from - teal - 600 via - emerald - 600 to - green - 600',
    description: 'Space exploration and digital reality',


      {

        name: 'Virtual Event Hologram Platform',
        href: '/services / virtual - event - hologram - platform',
        description: 'Holographic event experiences',
        price: '$2, 999 / month',
      },
    ],

    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [


      {

        name: 'Intelligent Sales Optimization',
        href: '/services / intelligent - sales - optimization',
        description: 'AI - powered sales intelligence',
        price: '$1, 799 / month',
      },
    ],

    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from - orange - 600 via - red - 600 to - pink - 600',
    description: 'Breakthrough research solutions',


      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite',
    ],

=======
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
];


const mainNavigation = [
=======
  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];
  }
];
;
const main_navigation = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },



const quickLinks = [
=======
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false)
=======



  const [isOpen, setIsOpen] = useState(false);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>
      {/* Main Navigation Bar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>          {/* Logo */}    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex-shrink-0'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Rocket className='w-7 h-7 text-white' />
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h1>
                <p className='text-xs text-gray-400'>
                  Future Technology Solutions
                </p>              </div>          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </motion.div>

            transition={{ duration: 0 && 0.5 }}
            className='flex-shrink-0'>;
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                  <Rocket className='w-7 h-7 text-white' />;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />;
              </div>;
              <div className='hidden sm:block'>;
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text-xs text-gray-400'>;
                  Future Technology Solutions;
                </p>              </div>          >;
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="relative">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                  <Rocket className="w-7 h-7 text-white" />;
                </div>;
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />;
              </div>;
              <div className="hidden sm:block">;
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text-xs text-gray-400">Future Technology Solutions</p>;
              </div>;
            </Link>;
          </motion && motion.div>;


          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">;
            {mainNavigation && mainNavigation.map((item) => (;
              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}

  { name: 'Support', href: '/support', icon: MessageCircle }, ];  { name: 'Support', href: '/support', icon: MessageCircle }
];
;
export default /**
 * UltraFuturisticNavigation2029V2 - Function description
 */
function UltraFuturisticNavigation2029V2() {
  const [is_open, setIsOpen] = useState (false);
  const [active_category, setActiveCategory] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ('');
;
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  return (
    <nav className='relative z - 50 bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20'>;
      {/* Main Navigation Bar */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='flex justify - between items - center h - 20'>          {/* Logo */}    <nav className="relative z - 50 bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20">;
      {/* Main Navigation Bar */}
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex justify - between items - center h - 20">;
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex - shrink - 0';
          >;
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='relative'>;
                <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                  <Rocket className='w - 7 h - 7 text - white' />;
                </div>;
                <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300' />;
              </div>;
              <div className='hidden sm:block'>;
                <h1 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text - xs text - gray - 400'>;
                  Future Technology Solutions;
                </p>              </div>          >;
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="relative">;
                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">;
                  <Rocket className="w - 7 h - 7 text - white" />;
                </div>;
                <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" />;
              </div>;
              <div className="hidden sm:block">;
                <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text - xs text - gray - 400">Future Technology Solutions</p>;
              </div>;
            </Link>;
          </motion.div>;
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            {main_navigation.map (item => (              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}          <div className="hidden lg:flex items - center space - x-8">;
            {main_navigation.map ((item) => (
              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: main_navigation.index_of (item) * 0.1,

                }}
                className='relative group';
                <Link;
                  href={item.href}

                  duration: 0 && 0.5,
                  delay: mainNavigation && mainNavigation.indexOf(item) * 0 && 0.1,
                }}
                className='relative group'
                <Link
                  href={item && item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10'>;
                  <item && item.icon className='w-4 h-4' />;
                  <span>{item && item.name}</span>;
                </Link>;


                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion && motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />;
              </motion && motion.div>;

            ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
=======
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
          <div className='hidden lg:flex items-center space-x-4'>
=======

              </motion.div>

            ))}
          </div>

          {/* Right side - Contact & Search */}

          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Contact Button */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.5 }}>;
              <Link


            <button
              onClick={toggleMenu}
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'>;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>


            </button>;
          </div>;
        </div>;
      </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            <div className='px-4 py-6 space-y-4'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;


              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;

=======
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">

              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}


              {/* Mobile Navigation Links */}

=======
              <div className="space-y-2">
                {mainNavigation.map((item) => (

                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                  >
                    <item.icon className='w-5 h-5' />                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>


                  </Link>
                ))}
              </div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Quick Links */}
              <div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Quick Links
                </h3>
                <div className='space-y-2'>
                  {quickLinks.map(item => (                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>                    </Link>              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((item) => (
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>                      className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                  ))}
                </div>
              </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



              {/* Contact Info */}
              <div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Contact Info
                </h3>
                <div className='space-y-2 px-4'>
                  <div className='flex items-center space-x-3 text-gray-400'>
                    <Phone className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.mobile}</span>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

                </div>;
              </div>;


              {/* Contact Info */}
              <div className='pt-4 border-t border-gray-700'>;
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>;
                  Contact Info;
                </h3>;
                <div className='space-y-2 px-4'>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <Phone className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <Mail className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <MapPin className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.address}</span>                  </div>                  </div>;
                  <div className="flex items-center space-x-3 text-gray-400">;
                    <Mail className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-400">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - cyan - 500 / 20';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='w - full pl - 10 pr - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50'                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space - y-2'>;
                {main_navigation.map (item => (                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className='flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                  >;
                    <item.icon className='w - 5 h - 5' />                    <span>{item.name}</span>          >;
            <div className="px - 4 py - 6 space - y-4">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space - y-2'>;
                {main_navigation.map (item => (              <div className="space - y-2">;
                {main_navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className='flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                  >;
                    <item.icon className='w - 5 h - 5' />                    className="flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300";
                  >;
                    <item.icon className="w - 5 h - 5" />;
                    <span>{item.name}</span>;
                  </Link>))}
              </div>;
              {/* Quick Links */}
              <div className='pt - 4 border - t border - gray - 700'>;
                <h3 className='text - sm font - medium text - gray - 400 mb - 3 px - 4'>;
                  Quick Links;
                </h3>;
                <div className='space - y-2'>;
                  {quick_links.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                    >;
                      <item.icon className='w - 4 h - 4' />;
                      <span className='text - sm'>{item.name}</span>                    </Link>              <div className="pt - 4 border - t border - gray - 700">;
                <h3 className="text - sm font - medium text - gray - 400 mb - 3 px - 4">Quick Links</h3>;
                <div className="space - y-2">;
                  {quick_links.map ((item) => (
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                    >;
                      <item.icon className='w - 4 h - 4' />;
                      <span className='text - sm'>{item.name}</span>                      className="flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300";
                    >;
                      <item.icon className="w - 4 h - 4" />;
                      <span className="text - sm">{item.name}</span>))}
                </div>;
              </div>;
              {/* Contact Info */}
              <div className='pt - 4 border - t border - gray - 700'>;
                <h3 className='text - sm font - medium text - gray - 400 mb - 3 px - 4'>;
                  Contact Info;
                </h3>;
                <div className='space - y-2 px - 4'>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <Phone className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <Mail className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.address}</span>                  </div>                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 400">;
                    <Mail className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 400">;
                    <MapPin className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;

      </AnimatePresence>;


=======
            </div>
          </motion.div>
        )}
      </AnimatePresence>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (;
          <motion&& motion.div
=======
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>
                    <div className='flex items-center space-x-3'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      <div

          </motion.div>)}
      </AnimatePresence>;
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {active_category && (
          <motion.div;
            initial={{ opacity: 0, coordinate_y: -20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            exit={{ opacity: 0, coordinate_y: -20 }}
            transition={{ duration: 0.3 }}
                        <Link
                          key={service.name}
                          href={service.href}
                          </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

                        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      ))}
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>
    </nav>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

      </AnimatePresence>;
    </nav>;
  );
=======

  );

}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                        </p>;
                      </div>;
                    </div>;
                    <div className='space - y-3'>                      {category.services.map ((service, index) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          className='block p - 3 rounded - lg bg - gray - 800 / 50 hover:bg - gray - 800 / 70 transition - colors duration - 300 group'          >;
            <div className="max - w-7xl mx - auto px - 4 py - 8">;
              <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">;
                {service_categories.map ((category) => (
                  <div key={category.title} className="space - y-4">;
                    <div className="flex items - center space - x-3">;
                      <div className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}>;
                        <category.icon className="w - 5 h - 5 text - white" />;
                      </div>;
                      <div>;
                        <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                        <p className="text - sm text - gray - 400">{category.description}</p>;
                      </div>;
                    </div>;
                    <div className="space - y-3">;
                      {category.services.map ((service, index) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          className='block p - 3 rounded - lg bg - gray - 800 / 50 hover:bg - gray - 800 / 70 transition - colors duration - 300 group';
                        >;
                          <div className='flex justify - between items - start'>;
                            <div>;
                              <h4 className='font - medium text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
                                {service.name}
                              </h4>;
                              <p className='text - sm text - gray - 400 mt - 1'>;
                                {service.description}
                              </p>;
                            </div>;
                            <span className='text - sm font - semibold text - cyan - 400'>;
                              {service.price}
                            </span>                          </div>                        >;
                          <div className="flex justify - between items - start">;
                            <div>;
                              <h4 className="font - medium text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                                {service.name}
                              </h4>;
                              <p className="text - sm text - gray - 400 mt - 1">{service.description}</p>;
                            </div>;
                            <span className="text - sm font - semibold text - cyan - 400">{service.price}</span>;
                          </div>;
                        </Link>))}
                    </div>;
                  </div>))}
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
