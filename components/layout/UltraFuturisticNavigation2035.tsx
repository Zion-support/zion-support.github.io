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

  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, ;
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, ;
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
  Building,
  MessageCircle,
} from 'lucide-react';
;
interface NavigationItem {
  name: string;
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles,
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones,
  Code, Database, Network, Server, Monitor, Smartphone;
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck;
  Building, MessageCircle;
} from 'lucide-react';
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean
}
  featured?: boolean;
  featured?: boolean;  featured?: boolean
}
  featured?: boolean;



const contactInfo = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Plans and average market prices',
    children: [
    ]
  featured?: boolean;  featured?: boolean;
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
        description: 'Compare market averages',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    description: 'Guides, reports and tools',
    children: [;
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      {
        name: 'Case Studies',
        href: '/case - studies',
        description: 'Proven results',
      },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      {
        name: 'Services Advertising',
        href: '/services - advertising',
        description: 'Features, benefits and market pricing links',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
  },    icon: <BookOpen className="w-5 h-5" />
    description: 'Guides, reports and tools';
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' }
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  }
  {
    name: 'All Services',
    href: '/comprehensive - services - showcase - 2025',
    icon: <Globe className="w - 5 h - 5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
      {
        name: 'Zero Trust Security',
        href: '/zero-trust-security-platform',
        description: 'Next-generation security architecture',
      },
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum-cloud-infrastructure',
        description: 'Quantum-enhanced cloud computing',
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous-it-operations-center',
        description: 'Self-managing IT infrastructure',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge-computing-orchestration',
        description: 'Distributed edge computing',
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain-infrastructure-platform',
        description: 'Enterprise blockchain solutions',
      },
      {
        name: 'AI-Powered DevOps',
        href: '/ai-powered-devops-platform',
        description: 'Intelligent development operations',
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-services',
        description: 'Next-gen quantum security',
      },
      {
        name: 'AI-Powered Cybersecurity',
        href: '/ai-powered-cybersecurity',
        description: 'Intelligent threat detection',
      },
    ],
  },
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className='w-5 h-5' />,
    description: 'Industry-specific technology solutions',
    badge: 'Industry',
    children: [
      {
        name: 'Healthcare AI',
        href: '/healthcare-ai-solutions',
        description: 'AI-powered healthcare',
      },
      {
        name: 'Financial Technology',
        href: '/fintech-solutions',
        description: 'Next-gen fintech',
      },
      {
        name: 'Manufacturing AI',
        href: '/manufacturing-ai-solutions',
        description: 'Smart manufacturing',
      },
      {
        name: 'Retail Technology',
        href: '/innovative-business-solutions',
        description: 'Digital retail transformation',
      },
      {
        name: 'Education Technology',
        href: '/training',
        description: 'AI-powered learning',
      },
      {
        name: 'Government Solutions',
        href: '/enterprise-solutions-showcase',
        description: 'Public sector innovation',
      },
      {
        name: 'Energy & Utilities',
        href: '/quantum-energy',
        description: 'Sustainable energy tech',
      },
      {
        name: 'Biotech AI Research',
        href: '/biotech-ai',
        description: 'AI-driven biotech',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Documentation, support, and learning resources',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
      },
      {
        name: 'API Reference',
        href: '/api-documentation',
        description: 'API documentation',
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
      },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
      {
        name: 'Support Center',
        href: '/support',
        description: 'Help and support',
      },
      {
        name: 'Training',
        href: '/training',
        description: 'Learning resources',
      },
      { name: 'Community', href: '/community', description: 'User community' },
    ],
  },
];
  }
  {

    name: 'AI & Consciousness',

  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns();    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  const closeDropdowns = () => {
    setActiveDropdown(null)

  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns()
  };



            {/* Desktop Navigation */}  };


  return (
    <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl'
            {/* Desktop Navigation */}
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
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :

                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (

                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

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
                      <span;
                        className={`px - 2 py - 1 text - xs rounded - full ${
                          item.badge === 'New';
                            ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30';
                            : item.badge === 'Hot';
                              ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30';
                              : item.badge === 'Showcase';
                                ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30';
                                : item.badge === 'Future';
                                  ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30';
                                  : item.badge === 'Enterprise';
                                    ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30';
                                    : item.badge === 'Industry';
                                      ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30';
                                      : 'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
                        }`}
                      >;
                        {item.badge}
                      </span>)}
                    <ChevronDown;
                      className={`w - 4 h - 4 transition - transform duration - 200 ${
                        active_dropdown === item.name ? 'rotate - 180' : '';
                      }`}
                    />                  </button>                      <span className={`px - 2 py - 1 text - xs rounded - full ${
                        item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30' :;
                        item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30' :;
                        item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30' :;
                        item.badge === 'Future' ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30' :;
                        item.badge === 'Enterprise' ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30' :;
                        item.badge === 'Industry' ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30' :;
                        'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
                      }`}>;
                        {item.badge}
                      </span>)}
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${
                      active_dropdown === item.name ? 'rotate - 180' : '';
                    }`} />;
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {active_dropdown === item.name && (
                      <motion.div;
                        initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                        exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 800 / 50 rounded - 2xl shadow - 2xl shadow - black / 50 overflow - hidden';
                        onMouseLeave={close_dropdowns}
                      >;
                        <div className='p - 6'>;
                          <div className='flex items - center gap - 3 mb - 4'>;
                            {item.icon}
                            <div>;
                              <h3 className='font - semibold text - white'>;
                                {item.title || item.name}
                              </h3>;
                              {item.description && (
                                <p className='text - sm text - gray - 400'>;
                                  {item.description}

                        onMouseLeave={closeDropdowns}>;
                        <div className='p-6'>;
                          <div className='flex items-center gap-3 mb-4'>;
                            {item && item.icon}
                            <div>;
                              <h3 className='font-semibold text-white'>;
                                {item && item.title || item && item.name}
                              </h3>;
                              {item && item.description && (;
                                <p className='text-sm text-gray-400'>;
                                  {item && item.description}
                                </p>;
                              )}
                            </div>;
                          </div>;
                          <div className='space-y-2'>;
                            {item && item.children?.map(child => (                              <Link
                                key={child && child.name}
                                href={child && child.href}

                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child && child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}
                              >                        onMouseLeave={closeDropdowns}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{item.title |item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (

                                onClick={closeDropdowns}>                        onMouseLeave={closeDropdowns}
                      >;
                        <div className="p-6">;
                          <div className="flex items-center gap-3 mb-4">;
                            {item && item.icon}
                            <div>;
                              <h3 className="font-semibold text-white">{item && item.title || item && item.name}</h3>;
                              {item && item.description && (;
                                <p className="text-sm text-gray-400">{item && item.description}</p>;
                              )}
                            </div>;
                          </div>;
                          <div className="space-y-2">;
                            {item && item.children?.map((child) => (;

                                onClick={closeDropdowns}

                              >

                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${

                                  child && child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                  child && child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20' 

                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}>;
                                {child && child.featured && (;
                                  <Star className='w-4 h-4 text-cyan-400' />;
                                )}
                                <div className='flex-1'>;
                                  <div className='font-medium'>;
                                    {child && child.name}
                                  </div>;
                                    <div className='text-sm opacity-75'>;
                                      {child && child.description}
                                    </div>;
                                  )}
                                </div>;
                                <ArrowRight className='w-4 h-4 opacity-50' />                              </Link>                                <ArrowRight className="w-4 h-4 opacity-50" />;
                              </Link>;

                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}
                              >
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

                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
            </div>

            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>;
              {/* Quick Actions */}

              <div className='flex items-center gap-2'>
                {quickActions.map(action => (                  <Link            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                {quickActions.map((action) => (
                {quickActions.map(action => (                  <Link

                  <Link

                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >;
                    {action && action.icon}
                    <span>{action && action.name}</span>;
                  </Link>;
                ))}
              </div>

              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>;
                <a
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;
                  <Phone className='w-4 h-4' />;
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a


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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
              aria-label='Toggle mobile menu'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion&& motion.div
    ]
  }
],

const quickActions = [

const UltraFuturisticNavigation2035: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  },

  const closeDropdowns = () => {
    setActiveDropdown(null)
  },

  const closeMobileMenu = () => {
    setIsOpen(false),
    closeDropdowns()
  },

  return (
    <nav aria-label=&quot;Primary&quot; className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background Effects */}
      <div className=&quot;absolute inset-0&quot;>
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className=&quot;absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95&quot; />
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5&quot; />
        </div>
      </div>

      <div className=&quot;relative z-10&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center gap-3 group&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Brain className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center gap-8&quot;>
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className=&quot;flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400&quot;
                  >
                    {_item.icon}
                    <span>{_item.name}</span>
                    {_item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : item.badge === 'Hot'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : item.badge === 'Showcase'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : item.badge === 'Future'
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : item.badge === 'Enterprise'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : item.badge === 'Industry'
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />                  </button>                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={closeDropdowns}
                      >
                        <div className='p-6'>
                          <div className='flex items-center gap-3 mb-4'>
                            {item.icon}
                            <div>
                              <h3 className='font-semibold text-white'>
                                {item.title |item.name}
                              </h3>
                              {item.description && (
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className='space-y-2'>
                            {item.children?.map(child => (                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                onClick={closeDropdowns}
                              >

                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
              <div className='flex items-center gap-2'>

                  <Link

                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >;
                    {action && action.icon}
                    <span>{action && action.name}</span>;
                  </Link>;
                ))}
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>
                <a
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;
                  <Phone className='w-4 h-4' />;
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'
                >
                  <Mail className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200';
              aria-label='Toggle mobile menu';
            >;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200";
              aria-label="Toggle mobile menu";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div

              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}

                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />                      </button>                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                        />                      </button>                        <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item && item.name ? 'rotate-180' : ''
                        }`} />;
                      </button>;




                      {/* Mobile Dropdown */}
                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
                          <motion&& motion.div
                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}>;
                                <div className='font-medium'>{child && child.name}</div>;
                                {child && child.description && (;
                                  <div className='text-sm opacity-75 mt-1'>;
                                    {child && child.description}
                                  </div>                                )}                                <div className="font-medium">{child && child.name}</div>;
                                {child && child.description && (;
                                  <div className="text-sm opacity-75 mt-1">{child && child.description}</div>;
                                )}




                              </Link>
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}
                        <Link




                          key={action.name}
                          href={action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            action && action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                          }`}
                          onClick={closeMobileMenu}>;
                          {action && action.icon}
                          <span>{action && action.name}</span>;
                        </Link>;
                      ))}
                  {/* Mobile Contact Info */}
                  <div className='pt-4 border-t border-gray-800/50'>;
                    <div className='space-y-3 text-sm text-gray-400'>;
                      <a



                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a
                        href={`mailto:${contactInfo && contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'>;
                        <Mail className='w-4 h-4' />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;
                      <div className='flex items-center gap-3 p-3 rounded-lg'>;
                        <MapPin className='w-4 h-4' />;
                        <span className='text-sm'>{contactInfo && contactInfo.address}</span>                      </div>                        <span>{contactInfo && contactInfo.mobile}</span>;
                      </a>;
                      <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">;
                        <Mail className="w-4 h-4" />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;
                      <div className="flex items-center gap-3 p-3 rounded-lg">;
                        <MapPin className="w-4 h-4" />;
                        <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </nav>;
  );
}
}, []);

</div> <div> <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400" >Revolutionary Technology</div> </div> </a> > {;
  item && item.icon ;
}<span> {;
  item && item.name ;
}</span> {;
  item && item.badge && (<spanclassName= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
}`
}> {
  item.badge
}</span>)
}<ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : ''
}`
}/> </button> {
  /* Dropdown Menu */
}<AnimatePresence> {
  activeDropdown === item.name && (<motion.div)
}</div> </div> <Link key= {
  child.name
}href= {
  child.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeDropdowns
}>)
}</div> <ArrowRight className="w-4 h-4 opacity-50" /> </a>) )
}</div> </div> </motion.div>)
}</AnimatePresence> </div>) )
}</div> <Link key= {
  action.name
}href= {
  action.href
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}> </a> </div> </div> {
  /* Mobile Menu Button */
}<button </button> </div> </div> {
  /* Mobile Menu */
}<AnimatePresence> <span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New'? 'bg-green-500/20 text-green-400': item.badge === 'Hot'? 'bg-red-500/20 text-red-400': item.badge === 'Showcase'? 'bg-cyan-500/20 text-cyan-400': 'bg-gray-500/20 text-gray-400'
}`
}> {
  item.badge
}</span>)
}</div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180': ''
}`
}/> </button> {
  /* Mobile Dropdown */
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name
}href= {
  child.href
}className= {
  `block p-3 rounded-lg transition-colors duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400': 'text-gray-400 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
}href= {
  action.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
}
;
}, []);
</div> <div> <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Zion Tech Group </div> <div className="text - xs text - gray - 400" >Revolutionary Technology</div> </div> </a> > {
  item.icon;
}<span> {
  item.name;
}</span> {
  item.badge && (<span className= {
  `px - 2 py - 1 text - xs rounded - full $ {
  item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30' : item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30' : item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30' : item.badge === 'Future' ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30' : item.badge === 'Enterprise' ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30' : item.badge === 'Industry' ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30' : 'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
}`;
}> {
  item.badge;
}</span>);
}<ChevronDown className= {
  `w - 4 h - 4 transition - transform duration - 200 $ {
  active_dropdown === item.name ? 'rotate - 180' : '';
}`;
}/> </button> {
  /* Dropdown Menu */;
}<AnimatePresence> {
  active_dropdown === item.name && (<motion.div);
}</div> </div> <Link key= {
  child.name;
}href= {
  child.href;
}className= {
  `flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 $ {
  child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {
  close_dropdowns;
}>);
}</div> <ArrowRight className="w - 4 h - 4 opacity - 50" /> </a>) );
}</div> </div> </motion.div>);
}</AnimatePresence> </div>) );
}</div> <Link key= {
  action.name;
}href= {
  action.href;
}className= {
  `flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 $ {
  action.primary ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}> </a> </div> </div> {
  /* Mobile Menu Button */;
}<button </button> </div> </div> {
  /* Mobile Menu */;
}<AnimatePresence> <span className= {
  `px - 2 py - 1 text - xs rounded - full $ {
  item.badge === 'New'? 'bg - green - 500 / 20 text - green - 400': item.badge === 'Hot'? 'bg - red - 500 / 20 text - red - 400': item.badge === 'Showcase'? 'bg - cyan - 500 / 20 text - cyan - 400': 'bg - gray - 500 / 20 text - gray - 400';
}`;
}> {
  item.badge;
}</span>);
}</div> <ChevronDown className= {
  `w - 4 h - 4 transition - transform duration - 200 $ {
  active_dropdown === item.name ? 'rotate - 180': '';
}`;
}/> </button> {
  /* Mobile Dropdown */;
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name;
}href= {
  child.href;
}className= {
  `block p - 3 rounded - lg transition - colors duration - 200 $ {
  child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400': 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {
  closeMobileMenu;
}>);
}</a>) );
}</motion.div>);
}</AnimatePresence> </div>) );
}<Link key= {
  action.name;
}href= {
  action.href;
}className= {
}
export default UltraFuturisticNavigation2035);
}
;
export default UltraFuturisticNavigation2035;

export default UltraFuturisticNavigation2035;  )
};

export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;
