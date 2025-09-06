import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu
  X
  ChevronDown
  Search
  Phone
  Mail
  MapPin
  Rocket
  Brain
  Atom
  Globe
  Zap
  Sparkles
  Shield
  Microscope
  DollarSign
  Home
  Users
  Briefcase
  BookOpen
  MessageCircle
  Star
  TrendingUp
  Target
  Layers
  Cpu
  Database
  Cloud
  Lock
  ShieldCheck
  Earth
  Factory
  Car
  Building
  GraduationCap
  Scale
  Palette
  Camera
  Video
  Music
  Gamepad2
  Heart
  Leaf
  Sun
  Moon
  Wind
  Droplets
  Mountain
  Code
  Wrench
  Smartphone
  BarChart3
  Eye
  Infinity
  Hexagon
  Network;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield
  Microscope, DollarSign, Home, Users, Briefcase

import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Microscope,
  DollarSign,
  Home,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Target,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Earth,
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
  Infinity,

  Hexagon,;
  Network,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$1,299/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$1,799/month' };
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$3,999/month' }
    ];
  };

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Layers }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case - studies', icon: BarChart3 },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
export default function UltraFuturisticNavigation2030() {


export default function UltraFuturisticNavigation2030() {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
const mainNavigation = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Layers },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },;
  { name: 'Blog', href: '/blog', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },;
];

const quickLinks = [;
  {;
    name: 'AI Services',;
    href: '/services/ai',;
    icon: Brain,;
    color: 'from-purple-500 to-pink-500',;
  },;
  {;
    name: 'Quantum Tech',;
    href: '/services/quantum',;
    icon: Atom,;
    color: 'from-blue-500 to-cyan-500',;
  },;
  {;
    name: 'Biotech Solutions',;
    href: '/services/biotech',;
    icon: Microscope,;
    color: 'from-green-500 to-emerald-500',;
  },;
  {;
    name: 'Space Technology',;
    href: '/services/space',;
    icon: Rocket,;
    color: 'from-indigo-500 to-purple-500',;
  },;
  {;
    name: 'Enterprise IT',;
    href: '/services/enterprise',;
    icon: Cpu,;
    color: 'from-gray-500 to-slate-500',;
  },;
  {;
    name: 'Micro SAAS',;
    href: '/services/micro-saas',;
    icon: Target,;
    color: 'from-orange-500 to-red-500',;
  },];  { name: 'AI Services', href: '/services/ai', icon: Brain, color: 'from-purple-500 to-pink-500' },;
  { name: 'Quantum Tech', href: '/services/quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },;
  { name: 'Biotech Solutions', href: '/services/biotech', icon: Microscope, color: 'from-green-500 to-emerald-500' },;
  { name: 'Space Technology', href: '/services/space', icon: Rocket, color: 'from-indigo-500 to-purple-500' },;
  { name: 'Enterprise IT', href: '/services/enterprise', icon: Cpu, color: 'from-gray-500 to-slate-500' },;
  { name: 'Micro SAAS', href: '/services/micro-saas', icon: Target, color: 'from-orange-500 to-red-500' }

export default function UltraFuturisticNavigation2030() {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>;
      {/* Top Contact Bar */}
              <span>{contactInfo.mobile}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='w-4 h-4 text-cyan-400' />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <MapPin className='w-4 h-4 text-cyan-400' />
              <span>{contactInfo.address}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Globe className='w-4 h-4 text-cyan-400' />
              <a
                href={contactInfo.website}
                className='hover:text-cyan-400 transition-colors'
              >                {contactInfo.website.replace('https://', '')}              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>
                className='hover:text-cyan-400 transition-colors'>                {contactInfo && contactInfo.website.replace('https://', '')}              <span>{contactInfo && contactInfo.mobile}</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-4 h-4 text-cyan-400" />;
              <span>{contactInfo && contactInfo.email}</span>;
            </div>;
          </div>;
          <div className="flex items-center space-x-4">;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4 text-cyan-400" />;
              <span>{contactInfo && contactInfo.address}</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Globe className="w-4 h-4 text-cyan-400" />;
              <a href={contactInfo && contactInfo.website} className="hover:text-cyan-400 transition-colors">;
                {contactInfo && contactInfo.website.replace('https://', '')}
;
const quick_links = [;
  {
    name: 'AI Services',
    href: '/services / ai',
    icon: Brain,
    color: 'from - purple - 500 to - pink - 500',
  },
  {
    name: 'Quantum Tech',
    href: '/services / quantum',
    icon: Atom,
    color: 'from - blue - 500 to - cyan - 500',
  },
  {
    name: 'Biotech Solutions',
    href: '/services / biotech',
    icon: Microscope,
    color: 'from - green - 500 to - emerald - 500',
  },
  {
    name: 'Space Technology',
    href: '/services / space',
    icon: Rocket,
    color: 'from - indigo - 500 to - purple - 500',
  },
  {
    name: 'Enterprise IT',
    href: '/services / enterprise',
    icon: Cpu,
    color: 'from - gray - 500 to - slate - 500',
  },
  {
    name: 'Micro SAAS',
    href: '/services / micro - saas',
    icon: Target,
    color: 'from - orange - 500 to - red - 500',
  }, ];  { name: 'AI Services', href: '/services / ai', icon: Brain, color: 'from - purple - 500 to - pink - 500' },
  { name: 'Quantum Tech', href: '/services / quantum', icon: Atom, color: 'from - blue - 500 to - cyan - 500' },
  { name: 'Biotech Solutions', href: '/services / biotech', icon: Microscope, color: 'from - green - 500 to - emerald - 500' },
  { name: 'Space Technology', href: '/services / space', icon: Rocket, color: 'from - indigo - 500 to - purple - 500' },
  { name: 'Enterprise IT', href: '/services / enterprise', icon: Cpu, color: 'from - gray - 500 to - slate - 500' },
  { name: 'Micro SAAS', href: '/services / micro - saas', icon: Target, color: 'from - orange - 500 to - red - 500' }
export default /**
 * UltraFuturisticNavigation2030 - Function description
 */
function UltraFuturisticNavigation2030() {
  const [is_open, setIsOpen] = useState (false);
  const [active_category, setActiveCategory] = useState < number | null>(null);
  const [is_scrolled, setIsScrolled] = useState (false);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      setIsScrolled (window.scroll_y > 20);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  return (
    <>;
      {/* Top Contact Bar */}
      <div className='bg - gradient - to - r from - slate - 900 via - purple - 900 to - slate - 900 text - white py - 2 px - 4 text - sm'>;
        <div className='max - w-7xl mx - auto flex flex - wrap items - center justify - between'>;
          <div className='flex items - center space - x-6'>;
            <div className='flex items - center space - x-2'>;
              <Phone className='w - 4 h - 4 text - cyan - 400' />;
              <span>{contact_info.mobile}</span>;
            </div>;
            <div className='flex items - center space - x-2'>;
              <Mail className='w - 4 h - 4 text - cyan - 400' />;
              <span>{contact_info.email}</span>;
            </div>;
          </div>;
          <div className='flex items - center space - x-4'>;
            <div className='flex items - center space - x-2'>;
              <MapPin className='w - 4 h - 4 text - cyan - 400' />;
              <span>{contact_info.address}</span>;
            </div>;
            <div className='flex items - center space - x-2'>;
              <Globe className='w - 4 h - 4 text - cyan - 400' />;
              <a;
                href={contact_info.website}
                className='hover:text - cyan - 400 transition - colors';
              >                {contact_info.website.replace ('https://', '')}              <span>{contact_info.mobile}</span>;
            </div>;
            <div className="flex items - center space - x-2">;
              <Mail className="w - 4 h - 4 text - cyan - 400" />;
              <span>{contact_info.email}</span>;
            </div>;
          </div>;
          <div className="flex items - center space - x-4">;
            <div className="flex items - center space - x-2">;
              <MapPin className="w - 4 h - 4 text - cyan - 400" />;
              <span>{contact_info.address}</span>;
            </div>;
            <div className="flex items - center space - x-2">;
              <Globe className="w - 4 h - 4 text - cyan - 400" />;
              <a href={contact_info.website} className="hover:text - cyan - 400 transition - colors">;
                {contact_info.website.replace ('https://', '')}
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>

            {/* Logo */}
            <div className='flex items-center space-x-4'>;
              <Link href='/' className='flex items-center space-x-3 group'>;
                <div className='relative'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300'>;
                    <Zap className='w-6 h-6 text-white' />;
                  </div>;
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>;
                </div>;
                <div className='flex flex-col'>;
                  <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </span>;
                  <span className='text-xs text-gray-400 font-mono'>;
                    2030 Future Technology;
                  </span>                </div>            {/* Logo */}
                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4'>;
                  <div className='p-8'>;
                    <div className='grid grid-cols-2 gap-8'>;
                      {serviceCategories && serviceCategories.map((category, index) => (;
                        <div key={index} className='space-y-4'>;
                          <div className='flex items-center space-x-3'>;
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                              <category && category.icon className='w-5 h-5 text-white' />;
                            </div>;
                            <div>;
                              <h3 className='text-lg font-semibold text-white'>;
                                {category && category.title}
                              </h3>;
                              <p className='text-sm text-gray-400'>;
                                {category && category.description}
                              </p>;
                            </div>;
                          </div>;
                          <div className='space-y-2'>                            {category && category.services.map((service, serviceIndex) => (;
                              <Link
                                key={serviceIndex}
                                href={service && service.href}
                                className='block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group'                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group">;
                  <item && item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />;
                  <span>{item && item.name}</span>;
                </Link>;
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              ))}
                              <Link
                                key={serviceIndex}
                              </Link>
                            ))}
                          </div>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>;
              <Link
                href='/contact'
                className='px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25'>;
                Get Started;
              </Link>;
              <Link
                href='/pricing'
                className='px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200'>            <div className="hidden lg:flex items-center space-x-4">;
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25">;
                Get Started;
              </Link>;
              <Link
                href='/pricing'
                className='px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200'                href="/pricing"
                className="px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
                className="px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200">;
                View Pricing;
              </Link>;
            </div>;

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className='p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors duration-200'>;
                {isOpen ? (;
                  <X className='w-6 h-6' />;
                ) : (;
                  <Menu className='w-6 h-6' />;
                )}              </button>              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors duration-200">;
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className='px-4 py-6 space-y-6'>
                {/* Mobile Navigation Links */}
                <div className='space-y-4'>;
                  {mainNavigation && mainNavigation.map(item => (                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200'>;
                      <item && item.icon className='w-5 h-5' />                      <span>{item && item.name}</span>            >;
              <div className="px-4 py-6 space-y-6">;
                {/* Mobile Navigation Links */}
                <div className="space-y-4">;
                  {mainNavigation && mainNavigation.map((item) => (;
                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200'>;
                      <item && item.icon className='w-5 h-5' />                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200";
                    >;
                      <item && item.icon className="w-5 h-5" />;
                      <span>{item && item.name}</span>;
                    </Link>;
                {/* Mobile Services */}
                <div className='space-y-4'>;
                  <h3 className='text-lg font-semibold text-white px-3'>;
                    Our Services;
                  </h3>;
                  <div className='grid grid-cols-2 gap-3'>;
                    {quickLinks && quickLinks.map(link => (                      <Link                <div className="space-y-4">;
                  <h3 className="text-lg font-semibold text-white px-3">Our Services</h3>;
                  <div className="grid grid-cols-2 gap-3">;
                    {quickLinks && quickLinks.map((link) => (;
                        key={link && link.name}
                        href={link && link.href}
                        onClick={closeMenu}
                        className={`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                          link && link.color.includes('from-');
                            ? `bg-gradient-to-r ${link && link.color} text-white`;
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700';
                        }`}
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className={`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${

                          link.color.includes('from-')
                            ? `bg-gradient-to-r ${link.color} text-white`
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <link.icon className='w-6 h-6 mx-auto mb-2' />
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      >;
                        <link && link.icon className='w-6 h-6 mx-auto mb-2' />;
                        <span className='text-sm font-medium'>{link && link.name}</span>                      </Link>                          link && link.color.includes('from-') ;
                            ? `bg-gradient-to-r ${link && link.color} text-white` ;
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700';
                        }`}
                      >;
                        <link && link.icon className="w-6 h-6 mx-auto mb-2" />;
                        <span className="text-sm font-medium">{link && link.name}</span>;
                        }`}
                      >;
                        <link && link.icon className="w-6 h-6 mx-auto mb-2" />;
                        <span className="text-sm font-medium">{link && link.name}</span>;
                    ))}
                  </div>
                </div>
                {/* Mobile CTA */}
                  <Link
                    href='/contact'
                    onClick={closeMenu}
                    className='block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200'>;
                    Get Started;
                  </Link>                  <Link
                    href='/pricing'
                    onClick={closeMenu}
                    className='block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200'>                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200";
                  >;
                    Get Started;
                  </Link>;
                  <Link
                    href='/pricing'
                    onClick={closeMenu}
                    className='block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200'                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200">;
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - purple - 500 / 10 transition - colors duration - 200';
                    >;
                      <item.icon className='w - 5 h - 5' />                      className="flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - purple - 500 / 10 transition - colors duration - 200";
                    >;
                      <item.icon className="w - 5 h - 5" />;
                      <span>{item.name}</span>;
                    </Link>))}
                </div>;
                {/* Mobile Services */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white px - 3'>;
                    Our Services;
                  </h3>;
                  <div className='grid grid - cols - 2 gap - 3'>;
                    {quick_links.map (link => (                      <Link                <div className="space - y-4">;
                  <h3 className="text - lg font - semibold text - white px - 3">Our Services</h3>;
                  <div className="grid grid - cols - 2 gap - 3">;
                    {quick_links.map ((link) => (
                        key={link.name}
                        href={link.href}
                        on_click={close_menu}
                        className={`p - 3 rounded - lg text - center transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 ${
                          link.color.includes ('from-');
                            ? `bg - gradient - to - r ${link.color} text - white`;
                            : 'bg - gray - 800 text - gray - 300 hover:bg - gray - 700';
                        }`}
                      >;
                        <link.icon className='w - 6 h - 6 mx - auto mb - 2' />;
                        <span className='text - sm font - medium'>{link.name}</span>                      </Link>                          link.color.includes ('from-');
                            ? `bg - gradient - to - r ${link.color} text - white`;
                            : 'bg - gray - 800 text - gray - 300 hover:bg - gray - 700';
                        }`}
                      >;
                        <link.icon className="w - 6 h - 6 mx - auto mb - 2" />;
                        <span className="text - sm font - medium">{link.name}</span>))}
                  </div>;
                </div>;
                {/* Mobile CTA */}
                <div className='space - y-3 pt - 4 border - t border - purple - 500 / 20'>;
                  <Link;
                    href='/contact';
                    on_click={close_menu}
                    className='block w - full px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - cyan - 500 text - white text - center rounded - lg hover:from - purple - 600 hover:to - cyan - 600 transition - all duration - 200'                  >;
                    Get Started;
                  </Link>                  <Link;
                    href='/pricing';
                    on_click={close_menu}
                    className='block w - full px - 6 py - 3 border border - purple - 500 / 30 text - purple - 400 text - center rounded - lg hover:bg - purple - 500 / 10 transition - all duration - 200'                  >                    className="block w - full px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - cyan - 500 text - white text - center rounded - lg hover:from - purple - 600 hover:to - cyan - 600 transition - all duration - 200";
                  >;
                    Get Started;
                  </Link>;
                  <Link;
                    href='/pricing';
                    on_click={close_menu}
                    className='block w - full px - 6 py - 3 border border - purple - 500 / 30 text - purple - 400 text - center rounded - lg hover:bg - purple - 500 / 10 transition - all duration - 200'                    href="/pricing";
                    on_click={close_menu}
                    className="block w - full px - 6 py - 3 border border - purple - 500 / 30 text - purple - 400 text - center rounded - lg hover:bg - purple - 500 / 10 transition - all duration - 200";
                  >;
                    View Pricing;
                  </Link>;
                </div>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer for fixed navigation */}
      <div className='h-20'></div>;
    </>;
  );      <div className="h-20"></div>;
    </>;
  );
}

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
            </motion.div>)}
        </AnimatePresence>;
      </nav>;
      {/* Spacer for fixed navigation */}
      <div className='h - 20'></div>;
    </>);      <div className="h - 20"></div>;
    </>);
}


