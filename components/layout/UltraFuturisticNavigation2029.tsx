import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu
  X
  ChevronDown
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
  Timer;} from 'lucide-react';import {
  Menu, X, ChevronDown, Phone, Mail, MapPin
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield
  Microscope, DollarSign, Home, Briefcase

import {
  Menu,
  X,
  ChevronDown,
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

  Eye,;
  Timer,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Briefcase, ;
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;

    services: [;
      {
        name: 'Mars Colonization Automation Platform',
        href: '/mars - colonization - automation - platform',
        description: 'Automate Mars colonization process',
        price: '$99, 999 / month',
      },
      {
        name: 'Interplanetary Communication Network',
        href: '/interplanetary - communication - network',
        description: 'Real - time solar system communication',
        price: '$75, 999 / month',
      },
      {
        name: 'Space Mining Automation Platform',
        href: '/space - mining - automation - platform',
        description: 'Automate asteroid and lunar mining',
        price: '$65, 999 / month',
      },
    ],
  },  {      { name: 'Mars Colonization Automation Platform', href: '/mars - colonization - automation - platform', description: 'Automate Mars colonization process', price: '$99, 999 / month' }
      { name: 'Interplanetary Communication Network', href: '/interplanetary - communication - network', description: 'Real - time solar system communication', price: '$75, 999 / month' }
      { name: 'Space Mining Automation Platform', href: '/space - mining - automation - platform', description: 'Automate asteroid and lunar mining', price: '$65, 999 / month' }
    ];
  }

];

const mainNavItems = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Target }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'News', href: '/news', icon: TrendingUp }
  { name: 'Support', href: '/support', icon: MessageCircle }
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
    services: [;
      {
        name: 'Enterprise AI Operations Center',
        href: '/enterprise - ai - operations - center',
        description: 'Centralized AI operations',
        price: '$15, 999 / month',
      },
      {
        name: 'Business Process Automation',
        href: '/business - process - automation',
        description: 'End - to - end process automation',
        price: '$4, 999 / month',
      },
      {
        name: 'Corporate Intelligence Platform',
        href: '/corporate - intelligence - platform',
        description: 'AI - powered business intelligence',
        price: '$7, 999 / month',
      },
    ],
  }, ];      { name: 'Enterprise AI Operations Center', href: '/enterprise - ai - operations - center', description: 'Centralized AI operations', price: '$15, 999 / month' }
      { name: 'Business Process Automation', href: '/business - process - automation', description: 'End - to - end process automation', price: '$4, 999 / month' }
      { name: 'Corporate Intelligence Platform', href: '/corporate - intelligence - platform', description: 'AI - powered business intelligence', price: '$7, 999 / month' }
    ];
  }
const mainNavItems = [;

  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },
];
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {

const mainNavItems = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'News', href: '/news', icon: TrendingUp },;
  { name: 'Support', href: '/support', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
];

export default function UltraFuturisticNavigation2029() {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>;
      {/* Top Contact Bar */}
              <Phone size={14} />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{contactInfo.address}</span>
            </div>
          </div>



              {contactInfo.website.replace('https://', '')}

            </a>
          </div>
        </div>
      </div>
              className='hover:text-cyan-300 transition-colors'>              {contactInfo && contactInfo.website.replace('https://', '')}          <div className="flex items-center space-x-4">;
            <a href={contactInfo && contactInfo.website} className="hover:text-cyan-300 transition-colors">;
              {contactInfo && contactInfo.website.replace('https://', '')}
  { name: 'Contact', href: '/contact', icon: Phone }, ];  { name: 'Contact', href: '/contact', icon: Phone }
];
;
export default /**
 * UltraFuturisticNavigation2029 - Function description
 */
function UltraFuturisticNavigation2029() {
  const [is_open, setIsOpen] = useState (false);
  const [active_category, setActiveCategory] = useState < string | null>(null);
  const [scrolled, set_scrolled] = useState (false);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      set_scrolled (window.scroll_y > 50);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      set_scrolled (window.scroll_y > 50);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  return (
    <>;
      {/* Top Contact Bar */}
      <div className='bg - gradient - to - r from - cyan - 900 via - blue - 900 to - purple - 900 text - white text - sm py - 2 px - 4'>;
        <div className='max - w-7xl mx - auto flex flex - wrap items - center justify - between'>;
          <div className='flex items - center space - x-6'>;
            <a;
              href={`tel:${contact_info.mobile}`}
              className='flex items - center space - x-2 hover:text - cyan - 300 transition - colors';
            >;
              <Phone size={14} />;
              <span>{contact_info.mobile}</span>;
            </a>;
            <a;
              href={`mailto:${contact_info.email}`}
              className='flex items - center space - x-2 hover:text - cyan - 300 transition - colors';
            >;
              <Mail size={14} />;
              <span>{contact_info.email}</span>;
            </a>;
            <div className='flex items - center space - x-2'>              <MapPin size={14} />;
              <span>{contact_info.address}</span>;
            </div>;
          </div>              <Phone size={14} />;
              <span>{contact_info.mobile}</span>;
            </a>;
            <a href={`mailto:${contact_info.email}`} className="flex items - center space - x-2 hover:text - cyan - 300 transition - colors">;
              <Mail size={14} />;
              <span>{contact_info.email}</span>;
            </a>;
            <div className="flex items - center space - x-2">;
              <MapPin size={14} />;
              <span>{contact_info.address}</span>;
            </div>;
          </div>;
          <div className='flex items - center space - x-4'>;
            <a;
              href={contact_info.website}
              className='hover:text - cyan - 300 transition - colors';
            >              {contact_info.website.replace ('https://', '')}          <div className="flex items - center space - x-4">;
            <a href={contact_info.website} className="hover:text - cyan - 300 transition - colors">;
              {contact_info.website.replace ('https://', '')}
            </a>;
          </div>;
        </div>;
      </div>;

              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2029 Innovation Hub</span>
              </div>
            </motion.div>
              className='flex items-center space-x-3'>;
              <div className='relative'>;
                <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse'></div>;
              </div>;
              <div className='flex flex-col'>;
                <span className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </span>;
                <span className='text-xs text-gray-400'>;
                  2029 Innovation Hub;
                </span>              </div>;
            </motion && motion.div>;

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {mainNavItems && mainNavItems.map(item => (            {/* Logo */}
            <motion&& motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3">;
              <div className="relative">;
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">;
                  <Rocket className="w-6 h-6 text-white" />;
                </div>;
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>;
              </div>;
              <div className="flex flex-col">;
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
                <span className="text-xs text-gray-400">2029 Innovation Hub</span>;
              </div>;
            </motion && motion.div>;

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {mainNavItems && mainNavItems.map(item => (;
                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className='group relative text-gray-300 hover:text-white transition-colors duration-200'>;
                  <div className='flex items-center space-x-2'>;
                    <item&& item.icon
                      size={16}
                      className='group-hover:text-cyan-400 transition-colors'
                    />;
                    <span>{item && item.name}</span>;
                  </div>;
                  <div className='absolute -bottom-1 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full'></div>                </Link>;
              ))}
              {/* Services Dropdown */}                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className="group relative text-gray-300 hover:text-white transition-colors duration-200">;
                  <div className="flex items-center space-x-2">;
                    <item && item.icon size={16} className="group-hover:text-cyan-400 transition-colors" />;
                    <span>{item && item.name}</span>;
                  </div>;
                  <div className="absolute -bottom-1 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>;
                </Link>;
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} className="group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>

              </div>
            </motion.div>

            {/* Desktop Navigation */}

                </Link>
                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>;
                  <div className='p-6 grid grid-cols-2 lg:grid-cols-3 gap-6'>                    {serviceCategories && serviceCategories.map((category, index) => (                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">;
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">;
                    {serviceCategories && serviceCategories.map((category, index) => (;
                      <motion&& motion.div
                        key={category && category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0 && 0.1 }}
                        className='group'>;

              </div>
            </motion.div>

            {/* Desktop Navigation */}


                </Link>
              ))}
              {/* Services Dropdown */}


                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='group'



                      >
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className='flex items-center space-x-3 mb-3'>;
                            <category&& category.icon
                              size={20}
                              className='text-cyan-400'
                            />;
                            <h3 className='font-semibold text-white group-hover:text-cyan-300 transition-colors'>;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className='text-sm text-gray-400 mb-4'>;
                            {category && category.description}
                          </p>;
                          <div className='space-y-2'>;
                            {category && category.services.slice(0, 3).map(service => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className='block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group'>;
                                <div className='flex items-center justify-between'>;
                                  <span className='text-sm text-gray-300 group-hover:text-white transition-colors'>;
                                    {service && service.name}
                                  </span>;
                                  <span className='text-xs text-cyan-400 font-mono'>;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className='text-xs text-gray-500 mt-1'>;
                                  {service && service.description}
                                </p>                              </Link>                      >;
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className="flex items-center space-x-3 mb-3">;
                            <category && category.icon size={20} className="text-cyan-400" />;
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className="text-sm text-gray-400 mb-4">{category && category.description}</p>;
                          <div className="space-y-2">;
                            {category && category.services.slice(0, 3).map((service) => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group">;
                                <div className="flex items-center justify-between">;
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">;
                                    {service && service.name}
                                  </span>;
                                  <span className="text-xs text-cyan-400 font-mono">;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className="text-xs text-gray-500 mt-1">{service && service.description}</p>;
                              </Link>;
                        key={category.title}
                        initial={{ opacity: 0, coordinate_y: 20 }}
                        animate={{ opacity: 1, coordinate_y: 0 }}
                        transition={{ delay: index * 0.1 }}
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    ))}
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
                  </div>;
                </div>;
              </div>;

              {/* CTA Button */}
              <motion&& motion.button
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'>                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40";
              >;
                Get Started;
              </motion && motion.button>;
            </div>;
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors"
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
              </button>;
            </div>;
          </div>;
        </div>;
      </nav>;

      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}

          >
            <div
              className='absolute inset-0 bg-black/80 backdrop-blur-sm'
              onClick={closeMenu}
            />;
            <div className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto'>;
              <div className='p-6'>;
                <div className='flex items-center justify-between mb-8'>;
                  <div className='flex items-center space-x-3'>;
                    <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'>;
                      <Rocket className='w-5 h-5 text-white' />;
                    </div>;
                    <span className='text-lg font-bold text-white'>;
                      Zion Tech;
                    </span>;
                  </div>;
                  <button
                    onClick={closeMenu}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech</span>
                  </div>
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                    className='text-gray-400 hover:text-white'>                    <X size={24} />          >;
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />;
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">;
              <div className="p-6">;
                <div className="flex items-center justify-between mb-8">;
                  <div className="flex items-center space-x-3">;
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">;
                      <Rocket className="w-5 h-5 text-white" />;
                    </div>;
                    <span className="text-lg font-bold text-white">Zion Tech</span>;
                  </div>;
                  <button onClick={closeMenu} className="text-gray-400 hover:text-white">;
                    <X size={24} />;
                  </button>;
                </div>;

                {/* Mobile Navigation Items */}
                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
                {/* Mobile Services */}


                            </Link>
                          ))}
                        </div>;
                      </div>;
                    ))}

                  </div>;
                </div>;



                {/* Mobile CTA */}
                <div className='mt-8'>;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>                <div className="mt-8">;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    Get Started
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
    </>
      </AnimatePresence>;

      {/* Spacer for fixed navigation */}
      <div className='h-20' />;
    </>;
  );      <div className="h-20" />;
    </>;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            className='fixed inset - 0 z - 50 lg:hidden';
          >;
            <div;
              className='absolute inset - 0 bg - black / 80 backdrop - blur - sm';
              on_click={close_menu}
            />;
            <div className='absolute right - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - cyan - 500 / 30 overflow - y-auto'>;
              <div className='p - 6'>;
                <div className='flex items - center justify - between mb - 8'>;
                  <div className='flex items - center space - x-3'>;
                    <div className='w - 8 h - 8 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg flex items - center justify - center'>;
                      <Rocket className='w - 5 h - 5 text - white' />;
                    </div>;
                    <span className='text - lg font - bold text - white'>;
                      Zion Tech;
                    </span>;
                  </div>;
                  <button;
                    on_click={close_menu}
                    className='text - gray - 400 hover:text - white';
                  >                    <X size={24} />          >;
            <div className="absolute inset - 0 bg - black / 80 backdrop - blur - sm" on_click={close_menu} />;
            <div className="absolute right - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - cyan - 500 / 30 overflow - y-auto">;
              <div className="p - 6">;
                <div className="flex items - center justify - between mb - 8">;
                  <div className="flex items - center space - x-3">;
                    <div className="w - 8 h - 8 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg flex items - center justify - center">;
                      <Rocket className="w - 5 h - 5 text - white" />;
                    </div>;
                    <span className="text - lg font - bold text - white">Zion Tech</span>;
                  </div>;
                  <button on_click={close_menu} className="text - gray - 400 hover:text - white">;
                    <X size={24} />;
                  </button>;
                </div>;
                {/* Mobile Navigation Items */}
                <div className='space - y-4'>;
                  {mainNavItems.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - cyan - 500 / 20 transition - all duration - 200';
                    >;
                      <item.icon size={20} className='text - cyan - 400' />                      <span>{item.name}</span>                <div className="space - y-4">;
                  {mainNavItems.map ((item) => (
                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - cyan - 500 / 20 transition - all duration - 200';
                    >;
                      <item.icon size={20} className='text - cyan - 400' />                      className="flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - cyan - 500 / 20 transition - all duration - 200";
                    >;
                      <item.icon size={20} className="text - cyan - 400" />;
                      <span>{item.name}</span>;
                    </Link>))}
                </div>;
                {/* Mobile Services */}
                <div className='mt - 8'>;
                  <h3 className='text - lg font - semibold text - white mb - 4'>;
                    Our Services;
                  </h3>;
                  <div className='space - y-3'>;
                    {service_categories.slice (0, 6).map (category => (
                      <div;
                        key={category.title}
                        className='p - 3 rounded - lg bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 border border - cyan - 500 / 20';
                      >;
                        <h4 className='font - medium text - white mb - 2'>;
                          {category.title}
                        </h4>;
                        <p className='text - sm text - gray - 400 mb - 3'>;
                          {category.description}
                        </p>;
                        <div className='space - y-2'>;
                          {category.services.slice (0, 2).map (service => (                            <Link;
                              key={service.name}
                              href={service.href}
                              on_click={close_menu}                <div className="mt - 8">;
                  <h3 className="text - lg font - semibold text - white mb - 4">Our Services</h3>;
                  <div className="space - y-3">;
                    {service_categories.slice (0, 6).map ((category) => (
                      <div key={category.title} className="p - 3 rounded - lg bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 border border - cyan - 500 / 20">;
                        <h4 className="font - medium text - white mb - 2">{category.title}</h4>;
                        <p className="text - sm text - gray - 400 mb - 3">{category.description}</p>;
                        <div className="space - y-2">;
                          {category.services.slice (0, 2).map ((service) => (
                              key={service.name}
                              href={service.href}
                              on_click={close_menu}
                              className='block p - 2 rounded bg - black / 30 hover:bg - cyan - 500 / 20 transition - all duration - 200';
                            >;
                              <div className='flex items - center justify - between'>;
                                <span className='text - sm text - gray - 300'>;
                                  {service.name}
                                </span>;
                                <span className='text - xs text - cyan - 400 font - mono'>;
                                  {service.price}
                                </span>                              </div>                              className="block p - 2 rounded bg - black / 30 hover:bg - cyan - 500 / 20 transition - all duration - 200";
                            >;
                              <div className="flex items - center justify - between">;
                                <span className="text - sm text - gray - 300">{service.name}</span>;
                                <span className="text - xs text - cyan - 400 font - mono">{service.price}</span>;
                            </Link>))}
                        </div>;
                      </div>))}
                  </div>;
                </div>;
                {/* Mobile CTA */}
                <div className='mt - 8'>;
                  <motion.button;
                    while_hover={{ scale: 1.02 }}
                    while_tap={{ scale: 0.98 }}
                    className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'                  >                <div className="mt - 8">;
                  <motion.button;
                    while_hover={{ scale: 1.02 }}
                    while_tap={{ scale: 0.98 }}
                    className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                    Get Started;
                  </motion.button>;
                </div>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className='h - 20' />;
    </>);      <div className="h - 20" />;
    </>);
}

