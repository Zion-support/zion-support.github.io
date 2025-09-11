
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
=======

import React, { useState, useEffect } from 'react';

=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
=======
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

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  Menu,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  BrainIcon,;
  AtomIcon,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};

const serviceCategories = [;
  {;
    title: '🚀 2031 Revolutionary AI Services',;
    icon: BrainIcon,;
    color: 'from-violet-600 via-purple-600 to-indigo-600',;
    description: 'Next-generation AI consciousness and creativity',;
    services: [;
      {;
        name: 'AI Consciousness Evolution Platform',;
        href: '/ai-consciousness-evolution-platform',;
        description: 'Develop genuine AI consciousness',;
        price: '$19,999/month',;
      },;
      {;
        name: 'AI Emotional Intelligence Platform',;
        href: '/ai-emotional-intelligence-platform',;
        description: 'Real-time emotion analysis and response',;
        price: '$3,999/month',;
      },;
      {;
        name: 'AI Creativity Orchestrator',;
        href: '/ai-creativity-orchestrator',;
        description: 'Multi-model creativity fusion',;
        price: '$5,999/month',;
      },;
      {;
        name: 'AI Dream Interpreter Platform',;
        href: '/ai-dream-interpreter-platform',;
        description: 'Dream analysis with AI psychology',;
        price: '$299/month',;
      },;
    ],;
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' };

      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' };
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  {
    name: '2030 Services'
    href: '/services/2030-futuristic-services'
    icon: Rocket
  },  { name: 'AI Solutions', href: '/ai-services', icon: Brain },  { name: '2030 Services', href: '/services/2030-futuristic-services', icon: Rocket }
  { name: 'AI Solutions', href: '/ai-services', icon: Brain }
  { name: 'IT Solutions', href: '/it-services', icon: Cpu }
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom }
  { name: 'Space Tech', href: '/space-tech', icon: Rocket }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'About', href: '/about', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle }
  { name: 'Resources', href: '/resources', icon: BookOpen },];  { name: 'Resources', href: '/resources', icon: BookOpen }
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: '2030 Services', href: '/services/2030-futuristic-services', icon: Rocket },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'IT Solutions', href: '/it-services', icon: Cpu },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen }

];
export default function UltraFuturisticNavigation2031() {
];


export default function UltraFuturisticNavigation2031() {;

export default function UltraFuturisticNavigation2031() {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const mainNavigation = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  {;
    name: '2030 Services',;
    href: '/services/2030-futuristic-services',;
    icon: Rocket,;
  },  { name: 'AI Solutions', href: '/ai-services', icon: Brain },  { name: '2030 Services', href: '/services/2030-futuristic-services', icon: Rocket },;
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },;
  { name: 'IT Solutions', href: '/it-services', icon: Cpu },;
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },;
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'About', href: '/about', icon: Users },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },;
  { name: 'Resources', href: '/resources', icon: BookOpen },];  { name: 'Resources', href: '/resources', icon: BookOpen }
];
export default function UltraFuturisticNavigation2031() {;
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

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  return (
    <>;
      {/* Top Contact Bar */}

=======

==============

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <span>{contactInfo.mobile}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='w-4 h-4 text-purple-400' />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <MapPin className='w-4 h-4 text-pink-400' />
            <span className='text-xs'>{contactInfo.address}</span>          </div>              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-xs">{contactInfo.address}</span>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Main Navigation */}


        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'


=======

                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'




                >                  <Link

                    href={item && item.href}
                    className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'>;
                    <item && item.icon className='w-4 h-4' />;
                    <span>{item && item.name}</span>;
                  </Link>;


                  {/* Hover effect */}

=======
                  <Link

className="relative group"
                >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    href={item && item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400">;
                    <item && item.icon className="w-4 h-4" />;
                    <span>{item && item.name}</span>;
                  </Link>;
=======                  className='relative group'

                >
                  <Link
                    href={item.href}
                    className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'
                  >
                    <item.icon className='w-4 h-4' />
                    <span>{item.name}</span>
                  </Link>
                  {/* Hover effect */}
                  <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>                </motion.div>

                </motion.div>

                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </motion.div>
              ))}
            </div>
            </div>
=======

            {/* CTA Buttons */}


                </motion.div>

              ))}
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'              >            <div className="hidden lg:flex items-center space-x-4">
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'              >
=======
=======
                  <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>                </motion.div>

                </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  {/* Hover effect */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>;
                </motion && motion.div>;
              ))}

            </div>;


=======
            </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'              >
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* CTA Buttons */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}              </motion.button>                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
        {/* Service Categories Bar */}
        <div className='hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center space-x-8 py-3'>              {serviceCategories.map((category, index) => (        <div className="hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group';
                >;
                  <Link;
                    href={item.href}
                    className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group - hover:text - cyan - 400';
                  >;
                    <item.icon className='w - 4 h - 4' />;
                    <span>{item.name}</span>;
                  </Link>;
                  {/* Hover effect */}
                  <div className='absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 500 to - purple - 500 transition - all duration - 300 group - hover:w - full'></div>                </motion.div>                >;
                  <Link;
                    href={item.href}
                    className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group - hover:text - cyan - 400";
                  >;
                    <item.icon className="w - 4 h - 4" />;
                    <span>{item.name}</span>;
                  </Link>;
                  {/* Hover effect */}
                  <div className="absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 500 to - purple - 500 transition - all duration - 300 group - hover:w - full"></div>;
                </motion.div>))}
            </div>;
            {/* CTA Buttons */}
            <div className='hidden lg:flex items - center space - x-4'>              <motion.button;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}              </motion.button>                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
        {/* Service Categories Bar */}
        <div className="hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
=======

                initial={{ opacity: 0, scale: 0.8 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                initial={{ opacity: 0, scale: 0.8 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                animate={{ opacity: 1, scale: 1 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {active_category === category.title && (
                      <motion.div;
                        initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                        exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden'




                                transition={{
                                  duration: 0.2
                                  delay: serviceIndex * 0.05
                                }}
                                className='group cursor-pointer'




      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          >
            <div className='p-6'>
              <div className='flex justify-between items-center mb-8'>
                <h2 className='text-xl font-bold text-white'>Menu</h2>
                  className='text-gray-400 hover:text-white transition-colors duration-200';
                >;
                  <X className='w-6 h-6' />;
                </button>;
              </div>;

              <div className='space-y-6'>;
                {mainNavigation && mainNavigation.map(item => (                  <Link
                    key={item && item.name}
                    href={item && item.href}

              <div className="space-y-6">;
                {mainNavigation && mainNavigation.map((item) => (;

                <div className='pt-6 border-t border-gray-800'>;
                  <div className='space-y-4'>;
                    <button className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200'>;
                      Get Started;
                    </button>;
                    <button className='w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200'>                      Contact Us                  >;
                    <item && item.icon className="w-5 h-5" />;
                    <span className="text-lg">{item && item.name}</span>;
                  </Link>;
                ))}
                <div className="pt-6 border-t border-gray-800">;
                  <div className="space-y-4">;
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">;
                      Get Started;
                    </button>;
                    <button className="w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200">;
                      Contact Us;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}

      <div className='h-32 lg:h-40'></div>
    </>
  );

}
}      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top - 0 right - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - cyan - 500 / 20 z - 50 lg:hidden';
          >;
            <div className='p - 6'>;
              <div className='flex justify - between items - center mb - 8'>;
                <h2 className='text - xl font - bold text - white'>Menu</h2>;
                <button;
                  on_click={() => setIsOpen (false)}
                  className='text - gray - 400 hover:text - white transition - colors duration - 200';
                >;
                  <X className='w - 6 h - 6' />;
                </button>;
              </div>;
              <div className='space - y-6'>;
                {main_navigation.map (item => (                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={() => setIsOpen (false)}
                    className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 hover:text - cyan - 400'          >;
            <div className="p - 6">;
              <div className="flex justify - between items - center mb - 8">;
                <h2 className="text - xl font - bold text - white">Menu</h2>;
                <button;
                  on_click={() => setIsOpen (false)}
                  className="text - gray - 400 hover:text - white transition - colors duration - 200";
                >;
                  <X className="w - 6 h - 6" />;
                </button>;
              </div>;
              <div className="space - y-6">;
                {main_navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={() => setIsOpen (false)}
                    className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 hover:text - cyan - 400';
                  >;
                    <item.icon className='w - 5 h - 5' />;
                    <span className='text - lg'>{item.name}</span>;
                  </Link>))}
                <div className='pt - 6 border - t border - gray - 800'>;
                  <div className='space - y-4'>;
                    <button className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200'>;
                      Get Started;
                    </button>;
                    <button className='w - full px - 6 py - 3 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 200'>                      Contact Us                  >;
                    <item.icon className="w - 5 h - 5" />;
                    <span className="text - lg">{item.name}</span>;
                  </Link>))}
                <div className="pt - 6 border - t border - gray - 800">;
                  <div className="space - y-4">;
                    <button className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200">;
                      Get Started;
                    </button>;
                    <button className="w - full px - 6 py - 3 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 200">;
                      Contact Us;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className='h - 32 lg:h - 40'></div>;
    </>);      <div className="h - 32 lg: h - 40"></div>;
    </>),
    </>
  )

}
      {/* Spacer for fixed navigation */}
      <div className='h-32 lg:h-40'></div>
    </>
  );
      {/* Spacer for fixed navigation */}
      <div className='h-32 lg:h-40'></div>
    </>
);      <div className="h-32 lg: h-40"></div>
    </>
  ),
}

      {/* Spacer for fixed navigation */}
      <div className='h-32 lg:h-40'></div>
    </>
  );
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      <div className='h-32 lg:h-40'></div>
    </>
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
