
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
  Network,
  Server,
  HardDrive,
  Monitor,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Mic,
  Keyboard,
  Mouse,
  CpuIcon,
  DatabaseIcon,
  CloudIcon,
  LockIcon,
  ShieldIcon,
  GlobeIcon,
  ZapIcon,
  SparklesIcon,
  BrainIcon,
  AtomIcon,
  HeartIcon,
  RocketIcon,
  ShieldIcon as ShieldIcon2,
  TargetIcon,
  MicroscopeIcon,
  StarIcon,
  ArrowRight,
  Infinity,
  Crown,
  Gem,
  Sparkles as SparklesIcon2,
  ShoppingCart,
  UserCheck,
  FileText,
  BarChart,
  PaletteIcon,
  VideoIcon,
  LockIcon as LockIcon2,
  GlobeIcon as GlobeIcon2,
  CpuIcon as CpuIcon2,
  Handshake,
  LifeBuoy,
  Activity,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,

  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;

  CloudIcon, LockIcon, ShieldIcon, GlobeIcon;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon;
  HeartIcon, RocketIcon, ShieldIcon as ShieldIcon2;
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight;
  Infinity, Crown, Gem, Sparkles as SparklesIcon2;
  ShoppingCart, UserCheck, FileText, BarChart;
  PaletteIcon, VideoIcon, LockIcon as LockIcon2;
  GlobeIcon as GlobeIcon2, CpuIcon as CpuIcon2;
  Handshake, LifeBuoy, Activity;
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services'
    icon: BrainIcon
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and creativity'
    services: [

const quickLinks = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Target }
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: FileText }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users }
  { name: 'Careers', href: '/careers', icon: Briefcase }
  { name: 'News', href: '/news', icon: FileText }
  { name: 'Partners', href: '/partners', icon: Handshake }
  { name: 'Support', href: '/support', icon: LifeBuoy }
  { name: 'Status', href: '/status', icon: Activity }
];
const socialLinks = [
  {
    name: 'LinkedIn'
    href: 'https://linkedin.com/company/ziontechgroup'
    icon: Linkedin
  }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  {
    name: 'Instagram'
    href: 'https://instagram.com/ziontechgroup'
    icon: Instagram
  }
  {
    name: 'YouTube'
    href: 'https://youtube.com/@ziontechgroup'
    icon: Youtube
  }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];
const certifications = [
  'ISO 27001 Certified'
  'SOC 2 Type II Compliant'
  'GDPR Compliant'
  'HIPAA Compliant'
  'PCI DSS Level 1'
  'FedRAMP Authorized'
  'Quantum Security Certified'
  'AI Ethics Compliant',];];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];
const certifications = [
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP AuthorizedQuantum Security CertifiedAI Ethics Compliant'
];

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  }
  const closeDropdown = () => {
    setActiveDropdown(null);  };    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category)
  }
  const closeDropdown = () => {
    setActiveDropdown(null)
const quickLinks = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'Case Studies', href: '/case-studies', icon: FileText },;
  { name: 'Blog', href: '/blog', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const companyLinks = [;
  { name: 'About Us', href: '/about', icon: Users },;
  { name: 'Careers', href: '/careers', icon: Briefcase },;
  { name: 'News', href: '/news', icon: FileText },;
  { name: 'Partners', href: '/partners', icon: Handshake },;
  { name: 'Support', href: '/support', icon: LifeBuoy },;
  { name: 'Status', href: '/status', icon: Activity },;
];
const socialLinks = [;
  {;
    name: 'LinkedIn',;
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
    icon: Linkedin,;
  },;
  { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github },;
  {;
    name: 'Instagram',;
    href: 'https://instagram && instagram.com/ziontechgroup',;
    icon: Instagram,;
  },;
  {;
    name: 'YouTube',;
    href: 'https://youtube && youtube.com/@ziontechgroup',;
    icon: Youtube,;
  },;
  { name: 'Twitter', href: 'https://twitter && twitter.com/ziontechgroup', icon: Twitter },;
];
const certifications = [;
  'ISO 27001 Certified',;
  'SOC 2 Type II Compliant',;
  'GDPR Compliant',;
  'HIPAA Compliant',;
  'PCI DSS Level 1',;
  'FedRAMP Authorized',;
  'Quantum Security Certified',;
  'AI Ethics Compliant',];];
const socialLinks = [;
  { name: 'LinkedIn', href: 'https://linkedin && linkedin.com/company/ziontechgroup', icon: Linkedin },;
  { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github },;
  { name: 'Instagram', href: 'https://instagram && instagram.com/ziontechgroup', icon: Instagram },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/@ziontechgroup', icon: Youtube },;
  { name: 'Twitter', href: 'https://twitter && twitter.com/ziontechgroup', icon: Twitter }
];
const certifications = [;
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP AuthorizedQuantum Security CertifiedAI Ethics Compliant';
];
export default function UltraFuturisticNavigation2034() {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (category: string) => {;
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  const closeDropdown = () => {;
    setActiveDropdown(null);  };    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (category: string) => {;
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  const closeDropdown = () => {;
    setActiveDropdown(null);
  };
  return (
    <>;
      {/* Top Contact Bar */}

                {contactInfo.mobile}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="hover:text-blue-400 transition-colors">
                {contactInfo.email}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="hover:text-purple-400 transition-colors">
                {contactInfo.address}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">50K+ Customers</span>
            </div>
          </div>
        </div>
      </div>
<div className='bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-2 px-4 text-sm'>;
        <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>;
          <div className='flex items-center space-x-6'>;
            <div className='flex items-center space-x-2'>;
              <Phone className='w-4 h-4 text-cyan-400' />;
              <span className='hover:text-cyan-400 transition-colors'>;
                {contactInfo && contactInfo.mobile}
              </span>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <Mail className='w-4 h-4 text-blue-400' />;
              <span className='hover:text-blue-400 transition-colors'>;
                {contactInfo && contactInfo.email}
              </span>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <MapPin className='w-4 h-4 text-purple-400' />;
              <span className='hover:text-purple-400 transition-colors'>                {contactInfo && contactInfo.address}
              </span>;
            </div>;
          </div>                {contactInfo && contactInfo.mobile}
              </span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-4 h-4 text-blue-400" />;
              <span className="hover:text-blue-400 transition-colors">;
                {contactInfo && contactInfo.email}
              </span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4 text-purple-400" />;
              <span className="hover:text-purple-400 transition-colors">;
                {contactInfo && contactInfo.address}
              </span>;
            </div>;
          </div>;
          <div className='flex items-center space-x-4'>;
            <div className='flex items-center space-x-2'>;
              <Star className='w-4 h-4 text-yellow-400' />;
              <span className='text-yellow-400 font-semibold'>5 && 5.0 Rating</span>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <Users className='w-4 h-4 text-green-400' />;
              <span className='text-green-400 font-semibold'>;
                50K+ Customers;
              </span>            </div>          <div className="flex items-center space-x-4">;
            <div className="flex items-center space-x-2">;
              <Star className="w-4 h-4 text-yellow-400" />;
              <span className="text-yellow-400 font-semibold">5 && 5.0 Rating</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Users className="w-4 h-4 text-green-400" />;
              <span className="text-green-400 font-semibold">50K+ Customers</span>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
        }`}>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex items-center justify-between h-20'>            {/* Logo */}      <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}

            >
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>
                  <Rocket className='w-7 h-7 text-white' />
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse'></div>
              </div>
              <div>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h1>
                <p className='text-xs text-gray-400'>
                  Future Technology Solutions
                </p>              </div>
            </motion.div>
            {/* Desktop Navigation */}            >

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </motion.div>
              transition={{ duration: 0 && 0.5 }}
              className='flex items-center space-x-3'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>;
                  <Rocket className='w-7 h-7 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse'></div>;
              </div>;
              <div>;
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text-xs text-gray-400'>;
                  Future Technology Solutions;
                </p>              </div>;
            </motion && motion.div>;
            {/* Desktop Navigation */}            >;
              <div className="relative">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">;
                  <Rocket className="w-7 h-7 text-white" />;
                </div>;
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>;
              </div>;
              <div>;
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text-xs text-gray-400">Future Technology Solutions</p>;
              </div>;
            </motion && motion.div>;
            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center space-x-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}

                  {link.name}
                </Link>
              ))}

                  {link.name}
                </Link>
              ))}

                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-4 pt-4 border-t border-cyan-500/20'>
                    <Link
                      href='/services'
                      className='flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200'
                    >
                      View All Services
                      <ArrowRight className='w-4 h-4 ml-2' />                    </Link>                    <Link

                      href="/services"
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Get Started
              </Link>
            </div>
                      className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">;
                      View All Services;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                </div>;
              </div>;
              {/* Contact Button */}
              <Link
                href='/contact'
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium'>                href="/contact";
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium";
                            </Link>))}
                        </div>;
                      </div>))}
                  </div>;
                  <div className='mt - 4 pt - 4 border - t border - cyan - 500 / 20'>;
                    <Link;
                      href='/services';
                      className='flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200';
                    >;
                      View All Services;
                      <ArrowRight className='w - 4 h - 4 ml - 2' />                    </Link>                    <Link;
                      href="/services";
                      className="flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200";
                    >;
                      View All Services;
                      <ArrowRight className="w - 4 h - 4 ml - 2" />;
                    </Link>;
                  </div>;
                </div>;
              </div>;
              {/* Contact Button */}
              <Link;
                href='/contact';
                className='px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 font - medium'              >                href="/contact";
                className="px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 font - medium";
              >;
                Get Started;
              </Link>;
            </div>;
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-cyan-400 transition-colors';
              >;
                {isOpen ? (;
                  <X className='w-6 h-6' />;
                ) : (;
                  <Menu className='w-6 h-6' />;
                )}              </button>              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors";
              >;
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20'
            >
              <div className='px-4 py-6 space-y-4'>
                {quickLinks.map(link => (                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium'                  >
                    {link.name}
                  </Link>
                ))}

              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {quickLinks.map((link) => (

                  >
                    {link.name}
                  </Link>
                ))}

                    </button>
                    <AnimatePresence>
                      {activeDropdown === category.title && (
                        <motion.div
{/* Mobile Menu */}
        <AnimatePresence>;
          {is_open && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - cyan - 500 / 20';
            >;
              <div className='px - 4 py - 6 space - y-4'>;
                {quick_links.map (link => (                  <Link;
                    key={link.name}
                    href={link.href}
                    on_click={() => setIsOpen (false)}
                    className='block text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 font - medium'                  >;
                    {link.name}
                  </Link>))}
              className="lg:hidden bg - black / 95 backdrop - blur - xl border - t border - cyan - 500 / 20";
            >;
              <div className="px - 4 py - 6 space - y-4">;
                {quick_links.map ((link) => (
                    key={link.name}
                    href={link.href}
                    on_click={() => setIsOpen (false)}
                    className='block text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 font - medium'                    className="block text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 font - medium";
                  >;
                    {link.name}
                  </Link>))}
                {/* Mobile Services Accordion */}
                {service_categories.map (category => (
                  <div;
                    key={category.title}
                    className='border - b border - cyan - 500 / 20 pb - 4';
                  >;
                    <button;
                      on_click={() => toggle_dropdown (category.title)}
                      className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 font - medium';
                    >;
                      <span>{category.title}</span>;
                      <ChevronDown;
                        className={`w - 4 h - 4 transition - transform duration - 200 ${
                          active_dropdown === category.title ? 'rotate - 180' : '';
                        }`}
                      />                    </button>                {/* Mobile Services Accordion */}
                {service_categories.map ((category) => (
                  <div key={category.title} className="border - b border - cyan - 500 / 20 pb - 4">;
                    <button;
                      on_click={() => toggle_dropdown (category.title)}
                      className="flex items - center justify - between w - full text - left text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 font - medium";
                    >;
                      <span>{category.title}</span>;
                      <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${
                        active_dropdown === category.title ? 'rotate - 180' : '';
                      }`} />;
                    </button>;
                    <AnimatePresence>;
                      {active_dropdown === category.title && (
                        <motion.div;
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}

                <Link
                  href='/contact'
                  onClick={() => setIsOpen(false)}
                  className='block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center'                >                <Link

                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
