<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';


import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
=======

import React, { useState, useEffect } from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD
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
  Network
  Server
  HardDrive
  Monitor
  Laptop
  Watch
  Headphones
  Speaker
  Mic
  Keyboard
  Mouse
  CpuIcon
  DatabaseIcon
  CloudIcon
  LockIcon
  ShieldIcon
  GlobeIcon
  ZapIcon
  SparklesIcon
  BrainIcon
  AtomIcon
  MenuIcon
  CloseIcon
  ChevronRightIcon;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield
  Microscope, DollarSign, Home, Users, Briefcase

=======
=======
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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  MenuIcon,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  CloseIcon,;
  ChevronRightIcon,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;

<<<<<<< HEAD
<<<<<<< HEAD
  Laptop, Watch, Headphones, Speaker, Mic
  Keyboard, Mouse, CpuIcon, DatabaseIcon
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon;
  MenuIcon, CloseIcon, ChevronRightIcon
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const serviceCategories = [
  {
    title: '🧠 AI & Consciousness 2030'
    icon: BrainIcon
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and emotional intelligence'
    services: [
<<<<<<< HEAD
<<<<<<< HEAD
      {
        name: 'AI Consciousness Evolution Platform'
        href: '/ai-consciousness-evolution-platform'
        description: 'Develop genuine AI consciousness'
        price: '$19,999/month'
      }
      {
        name: 'AI Emotional Intelligence Platform'
        href: '/ai-emotional-intelligence-platform'
        description: 'Real-time emotion analysis and response'
        price: '$3,999/month'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/ai-creativity-orchestrator'
        description: 'Multi-model creativity fusion'
        price: '$5,999/month'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/ai-autonomous-business-manager'
        description: 'Fully autonomous business operations'
        price: '$12,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' }
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' }
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Laptop, Watch, Headphones, Speaker, Mic, ;
  Keyboard, Mouse, CpuIcon, DatabaseIcon, ;
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon;
  MenuIcon, CloseIcon, ChevronRightIcon;

const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};

const serviceCategories = [;
  {;
    title: '🧠 AI & Consciousness 2030',;
    icon: BrainIcon,;
    color: 'from-violet-600 via-purple-600 to-indigo-600',;
    description: 'Next-generation AI consciousness and emotional intelligence',;
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
        name: 'AI Autonomous Business Manager',;
        href: '/ai-autonomous-business-manager',;
        description: 'Fully autonomous business operations',;
        price: '$12,999/month',;
      },;
    ],;
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' };

      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ];
  };


    title: '⚛️ Quantum & Emerging Tech 2030',
    icon: AtomIcon,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    description: 'Quantum computing and beyond',


<<<<<<< HEAD
<<<<<<< HEAD
        name: 'Synthetic Biology Automation Platform'
        href: '/synthetic-biology-automation-platform'
        description: 'Automate biology research'
        price: '$3,999/month'
      }
    ]
  },];      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Direct neural interface', price: '$1,299/month' }
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-enhanced ML', price: '$2,999/month' }
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic-biology-automation-platform', description: 'Automate biology research', price: '$3,999/month' }
    ]
  }
        name: 'Synthetic Biology Automation Platform',
        href: '/synthetic-biology-automation-platform',
        description: 'Automate biology research',
        price: '$3,999/month',
      },
    ],
  },];      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Direct neural interface', price: '$1,299/month' };
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-enhanced ML', price: '$2,999/month' };
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic-biology-automation-platform', description: 'Automate biology research', price: '$3,999/month' }
    ]
  }

];

];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Layers }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
];

const mainNavigation = [
    services: [;
      {
        name: 'Swarm Robotics Orchestration',
        href: '/swarm - robotics - orchestration',
        description: 'Coordinate robot swarms',
        price: '$449 / month',
      },
      {
        name: 'Brain - Computer Interface Platform',
        href: '/brain - computer - interface - platform',
        description: 'Direct neural interface',
        price: '$1, 299 / month',
      },
      {
        name: 'Quantum Machine Learning Platform',
        href: '/quantum - machine - learning - platform',
        description: 'Quantum - enhanced ML',
        price: '$2, 999 / month',
      },
      {
        name: 'Synthetic Biology Automation Platform',
        href: '/synthetic - biology - automation - platform',
        description: 'Automate biology research',
        price: '$3, 999 / month',
      },
    ],
  }, ];      { name: 'Swarm Robotics Orchestration', href: '/swarm - robotics - orchestration', description: 'Coordinate robot swarms', price: '$449 / month' },
      { name: 'Brain - Computer Interface Platform', href: '/brain - computer - interface - platform', description: 'Direct neural interface', price: '$1, 299 / month' }
      { name: 'Quantum Machine Learning Platform', href: '/quantum - machine - learning - platform', description: 'Quantum - enhanced ML', price: '$2, 999 / month' }
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic - biology - automation - platform', description: 'Automate biology research', price: '$3, 999 / month' }
    ];
  }
const main_navigation = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case - studies', icon: TrendingUp },
  { name: 'Blog', href: '/blog', icon: MessageCircle },

  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
=======
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Partners', href: '/partners' }
  { name: 'Support', href: '/support' }
  { name: 'Status', href: '/status' },];  { name: 'Status', href: '/status' }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
];
;
const company_links = [;

  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },

];


export default function UltraFuturisticNavigation2032() {;


  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);


const mainNavigation = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Layers },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },;
  { name: 'Blog', href: '/blog', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const companyLinks = [;
  { name: 'About Us', href: '/about' },;
  { name: 'Careers', href: '/careers' },;
  { name: 'News', href: '/news' },;
  { name: 'Partners', href: '/partners' },;
  { name: 'Support', href: '/support' },;
  { name: 'Status', href: '/status' },];  { name: 'Status', href: '/status' }
];
<<<<<<< HEAD
export default function UltraFuturisticNavigation2032() {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function UltraFuturisticNavigation2032() {;
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-b border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-2 text-sm'>
            <div className='flex items-center space-x-6 text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-cyan-400' />
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors'
                >
                  {contactInfo.mobile}
                </a>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='w-4 h-4 text-purple-400' />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='hover:text-purple-400 transition-colors'
                >                  {contactInfo.email}
                </a>
              </div>
            </div>      <div className="bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <a
                href='https://github.com/Zion-Holdings'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
              <a
                href='https://linkedin.com/company/ziontechgroup'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />                </svg>            <div className="flex items-center space-x-4">
              <a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
<<<<<<< HEAD
<<<<<<< HEAD
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Rocket className='w-7 h-7 text-white' />
              </div>
              <div>
                <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>
                  2030 Future Technology
                </div>              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
<<<<<<< HEAD

              {mainNavigation.map(item => (            {/* Logo */}
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {mainNavigation.map(item => (            {/* Logo */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">2030 Future Technology</div>
              </div>
            </Link>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                <Rocket className='w-7 h-7 text-white' />;
              </div>;
              <div>;
                <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>;
                  2030 Future Technology;
                </div>              </div>;
            </Link>;
            {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'
                >
                  <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                  <span>{item.name}</span>
                </Link>
              ))}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




              {/* Services Dropdown */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='relative group'>;
                <button className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'>;
                  <Briefcase className='w-4 h-4 group-hover:scale-110 transition-transform' />;
                  <span>Services</span>;
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform' />;
                </button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4'>;
                  <div className='bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20'>;
                    <div className='grid grid-cols-2 gap-8'>;
                      {serviceCategories && serviceCategories.map((category, index) => (;
                        <div key={index} className='space-y-4'>;
                          <div className='flex items-center space-x-3'>;
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${category && category.color} rounded-xl flex items-center justify-center`}>;
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
                                className='block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group'                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group">;
                  <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />;
                  <span>{item && item.name}</span>;
                </Link>;
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'
                >
                  <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className='relative group'>
                <button className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'>
                  <Briefcase className='w-4 h-4 group-hover:scale-110 transition-transform' />
                  <span>Services</span>
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform' />
                </button>
                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4'>
                  <div className='bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20'>
                    <div className='grid grid-cols-2 gap-8'>
                      {serviceCategories.map((category, index) => (
                        <div key={index} className='space-y-4'>
                          <div className='flex items-center space-x-3'>
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                            >
                              <category.icon className='w-5 h-5 text-white' />
                            </div>
                            <div>
                              <h3 className='text-lg font-semibold text-white'>
                                {category.title}
                              </h3>
                              <p className='text-sm text-gray-400'>
                                {category.description}
                              </p>
                            </div>
                          </div>
                          <div className='space-y-2'>                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                className='block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group'                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group">;
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />;
                  <span>Services</span>;
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />;
                </button>;
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Mega Menu */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                {/* Mega Menu */}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                  <div className="bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20">
                    <div className="grid grid-cols-2 gap-8">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {mainNavigation.map(item => (

              </div>
            </Link>

            {/* Desktop Navigation */}

<<<<<<< HEAD

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
<<<<<<< HEAD



                                </div>



<<<<<<< HEAD
                              </Link>
className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{service.description}</div>
                                  </div>
                                  <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                className='block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group'
                              >
                                <div className='flex items-center justify-between'>
                                  <div>
                                    <div className='text-white group-hover:text-cyan-400 transition-colors font-medium'>
                                      {service.name}
                                    </div>
                                    <div className='text-sm text-gray-400'>
                                      {service.description}                                    </div>
                                  </div>
                                  <div className='text-cyan-400 font-semibold text-sm'>
                                    {service.price}
                                  </div>                                </div>                                  <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                                </div>

                                </div>

<<<<<<< HEAD
                              </Link>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            ))}
                          </div>;
                        </div>;
                      ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD

            <div className="hidden lg:flex items-center space-x-4">

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">
<<<<<<< HEAD
=======

            <div className="hidden lg:flex items-center space-x-4">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>                  Get Started

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Get Started
                </button>
              </Link>
            </div>

                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>;
              <Link href='/contact'>;
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">;
              <Link href="/contact">;
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">;
      {/* Main Navigation */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
          is_scrolled;
            ? 'bg - black / 95 backdrop - blur - xl border - b border - cyan - 500 / 20 shadow - 2xl shadow - cyan - 500 / 10';
            : 'bg - transparent';
        }`}
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 20'>;
            {/* Logo */}
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                <Rocket className='w - 7 h - 7 text - white' />;
              </div>;
              <div>;
                <div className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text - xs text - gray - 400'>;
                  2030 Future Technology;
                </div>              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {main_navigation.map (item => (            {/* Logo */}
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">;
                <Rocket className="w - 7 h - 7 text - white" />;
              </div>;
              <div>;
                <div className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </div>;
                <div className="text - xs text - gray - 400">2030 Future Technology</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {main_navigation.map (item => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className='text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group';
                >;
                  <item.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />;
                  <span>{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}
              <div className='relative group'>;
                <button className='text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group'>;
                  <Briefcase className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />;
                  <span > Services</span>;
                  <ChevronDown className='w - 4 h - 4 group - hover:rotate - 180 transition - transform' />;
                </button>;
                {/* Mega Menu */}
                <div className='absolute top - full left - 0 w - screen max - w-7xl transform -translate - x-1 / 2 left - 1/2 opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 pt - 4'>;
                  <div className='bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 8 shadow - 2xl shadow - cyan - 500 / 20'>;
                    <div className='grid grid - cols - 2 gap - 8'>;
                      {service_categories.map ((category, index) => (
                        <div key={index} className='space - y-4'>;
                          <div className='flex items - center space - x-3'>;
                            <div;
                              className={`w - 10 h - 10 bg - gradient - to - r ${category.color} rounded - xl flex items - center justify - center`}
                            >;
                              <category.icon className='w - 5 h - 5 text - white' />;
                            </div>;
                            <div>;
                              <h3 className='text - lg font - semibold text - white'>;
                                {category.title}
                              </h3>;
                              <p className='text - sm text - gray - 400'>;
                                {category.description}
                              </p>;
                            </div>;
                          </div>;
                          <div className='space - y-2'>                            {category.services.map ((service, service_index) => (
                              <Link;
                                key={service_index}
                                href={service.href}
                                className='block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors group'                <Link;
                  key={item.name}
                  href={item.href}
                  className="text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group";
                >;
                  <item.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                  <span>{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group">;
                  <Briefcase className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                  <span > Services</span>;
                  <ChevronDown className="w - 4 h - 4 group - hover:rotate - 180 transition - transform" />;
                </button>;
                {/* Mega Menu */}
                <div className="absolute top - full left - 0 w - screen max - w-7xl transform -translate - x-1 / 2 left - 1/2 opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 pt - 4">;
                  <div className="bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 8 shadow - 2xl shadow - cyan - 500 / 20">;
                    <div className="grid grid - cols - 2 gap - 8">;
                      {service_categories.map ((category, index) => (
                        <div key={index} className="space - y-4">;
                          <div className="flex items - center space - x-3">;
                            <div className={`w - 10 h - 10 bg - gradient - to - r ${category.color} rounded - xl flex items - center justify - center`}>;
                              <category.icon className="w - 5 h - 5 text - white" />;
                            </div>;
                            <div>;
                              <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                              <p className="text - sm text - gray - 400">{category.description}</p>;
                            </div>;
                          </div>;
                          <div className="space - y-2">;
                            {category.services.map ((service, service_index) => (
                              <Link;
                                key={service_index}
                                href={service.href}
                                className='block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors group';
                              >;
                                <div className='flex items - center justify - between'>;
                                  <div>;
                                    <div className='text - white group - hover:text - cyan - 400 transition - colors font - medium'>;
                                      {service.name}
                                    </div>;
                                    <div className='text - sm text - gray - 400'>;
                                      {service.description}                                    </div>;
                                  </div>;
                                  <div className='text - cyan - 400 font - semibold text - sm'>;
                                    {service.price}
                                  </div>                                </div>                                  <div className="text - cyan - 400 font - semibold text - sm">{service.price}</div>;
                                </div>;
                              </Link>))}
                          </div>;
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
            {/* CTA Buttons */}
            <div className='hidden lg:flex items - center space - x-4'>;
              <Link href='/contact'>;
                <button className='px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - lg hover:shadow - xl'>                  Get Started            <div className="hidden lg:flex items - center space - x-4">;
              <Link href="/contact">;
                <button className="px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - lg hover:shadow - xl">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Get Started;
                </button>;
              </Link>;
            </div>;


<<<<<<< HEAD
<<<<<<< HEAD

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}


              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"

=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className='lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>


<<<<<<< HEAD

=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </button>;
          </div>;
        </div>;
      </nav>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
<<<<<<< HEAD


          >
=======
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 lg:hidden'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div
              className='absolute inset-0 bg-black/80 backdrop-blur-xl'
              onClick={closeMenu}
            />;
            <div className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto'>;
              <div className='p-6'>;
                <div className='flex items-center justify-between mb-8'>;
                  <div className='flex items-center space-x-3'>;
                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center'>;
                      <Rocket className='w-6 h-6 text-white' />;
                    </div>;
                    <div>;
                      <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>                        Zion Tech Group;
                      </div>;
                    </div>;
                  </div>          >;
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeMenu} />;
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto">;
              <div className="p-6">;
                <div className="flex items-center justify-between mb-8">;
                  <div className="flex items-center space-x-3">;
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">;
                      <Rocket className="w-6 h-6 text-white" />;
                    </div>;
                    <div>;
                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset - 0 z - 50 lg:hidden';
          >;
            <div;
              className='absolute inset - 0 bg - black / 80 backdrop - blur - xl';
              on_click={close_menu}
            />;
            <div className='absolute right - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - cyan - 500 / 20 overflow - y-auto'>;
              <div className='p - 6'>;
                <div className='flex items - center justify - between mb - 8'>;
                  <div className='flex items - center space - x-3'>;
                    <div className='w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center'>;
                      <Rocket className='w - 6 h - 6 text - white' />;
                    </div>;
                    <div>;
                      <div className='text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>                        Zion Tech Group;
                      </div>;
                    </div>;
                  </div>          >;
            <div className="absolute inset - 0 bg - black / 80 backdrop - blur - xl" on_click={close_menu} />;
            <div className="absolute right - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - cyan - 500 / 20 overflow - y-auto">;
              <div className="p - 6">;
                <div className="flex items - center justify - between mb - 8">;
                  <div className="flex items - center space - x-3">;
                    <div className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center">;
                      <Rocket className="w - 6 h - 6 text - white" />;
                    </div>;
                    <div>;
                      <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                        Zion Tech Group;
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'>;
                    <X className='w-6 h-6' />                  </button>;
                </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'>;
                    <X className='w-6 h-6' />                  </button>;
                </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Mobile Navigation */}
                <div className='space-y-6'>;
                  {mainNavigation && mainNavigation.map(item => (                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'>;
                      <item && item.icon className='w-5 h-5' />                      <span>{item && item.name}</span>                  <button onClick={closeMenu} className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">;
                    <X className="w-6 h-6" />;
                  </button>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 lg:hidden'

          >
            <div
              className='absolute inset-0 bg-black/80 backdrop-blur-xl'
              onClick={closeMenu}
            />
            <div className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto'>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center'>
                      <Rocket className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>                        Zion Tech Group
                      </div>
                    </div>
                  </div>          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Zion Tech Group
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  >
                    <X className='w-6 h-6' />                  </button>
                </div>
                {/* Mobile Navigation */}
                <div className='space-y-6'>
                  {mainNavigation.map(item => (                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'
                    >
                      <item.icon className='w-5 h-5' />                      <span>{item.name}</span>                  <button onClick={closeMenu} className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {/* Mobile Navigation */}
                <div className='space-y-6'>
                  {mainNavigation.map(item => (                <div className="space-y-6">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Mobile Navigation */}
                <div className='space-y-6'>;
                  {mainNavigation && mainNavigation.map(item => (                <div className="space-y-6">;
                  {mainNavigation && mainNavigation.map((item) => (;
                    <Link
                      key={item && item.name}
                      href={item && item.href}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onClick={closeMenu}
                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'
                    >
                      <item.icon className='w-5 h-5' />                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Mobile Navigation */}
                <div className='space-y-6'>;
                  {mainNavigation && mainNavigation.map(item => (                <div className="space-y-6">;
                  {mainNavigation && mainNavigation.map((item) => (;
                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'>;
                      <item && item.icon className='w-5 h-5' />                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50";
                    >;
                      <item && item.icon className="w-5 h-5" />;
                      <span>{item && item.name}</span>;
                    </Link>;
                  ))}

                  {/* Services Accordion */}
<<<<<<< HEAD
=======
                  {/* Services Accordion */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='space-y-2'>

                    </Link>
                  ))}

                  {/* Services Accordion */}
<<<<<<< HEAD
                  <div className='space-y-2'>

                    <button
                      onClick={() => setActiveCategory(activeCategory === 0 ? null : 0)}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5" />
                        <span>Services</span>
                      </span>
                      <ChevronRightIcon className={`w-5 h-5 transition-transform ${activeCategory === 0 ? 'rotate-90' : ''}`} />
                    </button>
                    {activeCategory === 0 && (
                      <div className="pl-8 space-y-2">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <div className="text-sm font-medium text-cyan-400 py-2">{category.title}</div>
                            {category.services.map((service, serviceIndex) => (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <button
                      onClick={() =>;
                        setActiveCategory(activeCategory === 0 ? null : 0);
                      }
                      className='w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors';
                    >;
                      <span className='flex items-center space-x-3'>;
                        <Briefcase className='w-5 h-5' />;
                        <span>Services</span>;
                      </span>;
                      <ChevronRightIcon
                        className={`w-5 h-5 transition-transform ${activeCategory === 0 ? 'rotate-90' : ''}`}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                    </button>;
                    {activeCategory === 0 && (;
                      <div className='pl-8 space-y-2'>;
                        {serviceCategories && serviceCategories.map((category, index) => (;
                          <div key={index} className='space-y-2'>;
                            <div className='text-sm font-medium text-cyan-400 py-2'>;
                              {category && category.title}
                            </div>                            {category && category.services.map((service, serviceIndex) => (                    <button
                      onClick={() => setActiveCategory(activeCategory === 0 ? null : 0)}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors";
                    >;
                      <span className="flex items-center space-x-3">;
                        <Briefcase className="w-5 h-5" />;
                        <span>Services</span>;
                      </span>;
                      <ChevronRightIcon className={`w-5 h-5 transition-transform ${activeCategory === 0 ? 'rotate-90' : ''}`} />;
                    </button>;
                    {activeCategory === 0 && (;
                      <div className="pl-8 space-y-2">;
                        {serviceCategories && serviceCategories.map((category, index) => (;
                          <div key={index} className="space-y-2">;
                            <div className="text-sm font-medium text-cyan-400 py-2">{category && category.title}</div>;
                            {category && category.services.map((service, serviceIndex) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              <Link
                                key={serviceIndex}
                                href={service && service.href}
                                onClick={closeMenu}
<<<<<<< HEAD
<<<<<<< HEAD
                                className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1'                              >                                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                              >
                                {service.name}
                              </Link>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            ))}
                          </div>;
                        ))}
                      </div>;
                    )}
<<<<<<< HEAD

                  </div>;


<<<<<<< HEAD



                  {/* Company Links */}


                  </div>;
                  {/* Company Links */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="text-sm font-medium text-gray-400 mb-3">Company</div>
                    <div className="space-y-2">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                  </div>

                  {/* Company Links */}
                  <div className='pt-4 border-t border-gray-700/50'>
                    <div className='text-sm font-medium text-gray-400 mb-3'>
                      Company
                    </div>
                    <div className='space-y-2'>
                      {companyLinks.map(link => (                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1'                        >                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="text-sm font-medium text-gray-400 mb-3">Company</div>
                    <div className="space-y-2">
                      {companyLinks.map((link) => (
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1'                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        >
                          {link.name}
                        </Link>
=======
                  </div>

                  </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Company Links */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </div>
                  </div>


<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Contact Info */}
                  <div className='pt-4 border-t border-gray-700/50'>
                    <div className='text-sm font-medium text-gray-400 mb-3'>
                      Contact
                    </div>
                    <div className='space-y-2 text-sm text-gray-400'>
                      <div className='flex items-center space-x-2'>
                        <Phone className='w-4 h-4 text-cyan-400' />
<<<<<<< HEAD
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Company Links */}


                      ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





                  {/* Contact Info */}






=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Mail className='w-4 h-4 text-purple-400' />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <MapPin className='w-4 h-4 text-pink-400' />
                        <span className='text-xs'>{contactInfo.address}</span>                      </div>                        <span>{contactInfo.mobile}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-purple-400" />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-pink-400" />
                        <span className="text-xs">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                  {/* Contact Info */}
                  <div className='pt-4 border-t border-gray-700/50'>;
                    <div className='text-sm font-medium text-gray-400 mb-3'>;
                      Contact;
                    </div>;
                    <div className='space-y-2 text-sm text-gray-400'>;
                      <div className='flex items-center space-x-2'>;
                        <Phone className='w-4 h-4 text-cyan-400' />;
                        <span>{contactInfo && contactInfo.mobile}</span>;
                      </div>;
                      <div className='flex items-center space-x-2'>;
                        <Mail className='w-4 h-4 text-purple-400' />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </div>;
                      <div className='flex items-center space-x-2'>;
                        <MapPin className='w-4 h-4 text-pink-400' />;
                        <span className='text-xs'>{contactInfo && contactInfo.address}</span>                      </div>                        <span>{contactInfo && contactInfo.mobile}</span>;
                      </div>;
                      <div className="flex items-center space-x-2">;
                        <Mail className="w-4 h-4 text-purple-400" />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </div>;
                      <div className="flex items-center space-x-2">;
                        <MapPin className="w-4 h-4 text-pink-400" />;
                        <span className="text-xs">{contactInfo && contactInfo.address}</span>;
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* CTA Button */}
                  <div className='pt-4'>;
                    <Link href='/contact' onClick={closeMenu}>;
                      <button className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'>                        Get Started Today                  <div className="pt-4">;
                    <Link href="/contact" onClick={closeMenu}>;
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">;
                        Get Started Today;
                      </button>;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;

        )}
<<<<<<< HEAD

<<<<<<< HEAD
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link href="/contact" onClick={closeMenu}>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                        Get Started Today
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
    </>
      </AnimatePresence>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </AnimatePresence>
      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>
      </AnimatePresence>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Spacer for fixed navigation */}
      <div className='h-20' />;
    </>;
  );      <div className="h-20" />;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
}

  );
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <button;
                    on_click={close_menu}
                    className='p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50';
                  >;
                    <X className='w - 6 h - 6' />                  </button>;
                </div>;
                {/* Mobile Navigation */}
                <div className='space - y-6'>;
                  {main_navigation.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50';
                    >;
                      <item.icon className='w - 5 h - 5' />                      <span>{item.name}</span>                  <button on_click={close_menu} className="p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50">;
                    <X className="w - 6 h - 6" />;
                  </button>;
                </div>;
                {/* Mobile Navigation */}
                <div className='space - y-6'>;
                  {main_navigation.map (item => (                <div className="space - y-6">;
                  {main_navigation.map ((item) => (
                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50';
                    >;
                      <item.icon className='w - 5 h - 5' />                      className="flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50";
                    >;
                      <item.icon className="w - 5 h - 5" />;
                      <span>{item.name}</span>;
                    </Link>))}
                  {/* Services Accordion */}
                  <div className='space - y-2'>;
                    <button;
                      on_click={() =>;
                        setActiveCategory (active_category === 0 ? null : 0);
                      }
                      className='w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors';
                    >;
                      <span className='flex items - center space - x-3'>;
                        <Briefcase className='w - 5 h - 5' />;
                        <span > Services</span>;
                      </span>;
                      <ChevronRightIcon;
                        className={`w - 5 h - 5 transition - transform ${active_category === 0 ? 'rotate - 90' : ''}`}
                      />;
                    </button>;
                    {active_category === 0 && (
                      <div className='pl - 8 space - y-2'>;
                        {service_categories.map ((category, index) => (
                          <div key={index} className='space - y-2'>;
                            <div className='text - sm font - medium text - cyan - 400 py - 2'>;
                              {category.title}
                            </div>                            {category.services.map ((service, service_index) => (                    <button;
                      on_click={() => setActiveCategory (active_category === 0 ? null : 0)}
                      className="w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors";
                    >;
                      <span className="flex items - center space - x-3">;
                        <Briefcase className="w - 5 h - 5" />;
                        <span > Services</span>;
                      </span>;
                      <ChevronRightIcon className={`w - 5 h - 5 transition - transform ${active_category === 0 ? 'rotate - 90' : ''}`} />;
                    </button>;
                    {active_category === 0 && (
                      <div className="pl - 8 space - y-2">;
                        {service_categories.map ((category, index) => (
                          <div key={index} className="space - y-2">;
                            <div className="text - sm font - medium text - cyan - 400 py - 2">{category.title}</div>;
                            {category.services.map ((service, service_index) => (
                              <Link;
                                key={service_index}
                                href={service.href}
                                on_click={close_menu}
                                className='block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                              >                                className="block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1";
                              >;
                                {service.name}
                              </Link>))}
                          </div>))}
                      </div>)}
                  </div>;
                  {/* Company Links */}
                  <div className='pt - 4 border - t border - gray - 700 / 50'>;
                    <div className='text - sm font - medium text - gray - 400 mb - 3'>;
                      Company;
                    </div>;
                    <div className='space - y-2'>;
                      {company_links.map (link => (                        <Link;
                          key={link.name}
                          href={link.href}
                          on_click={close_menu}
                          className='block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                        >                  <div className="pt - 4 border - t border - gray - 700 / 50">;
                    <div className="text - sm font - medium text - gray - 400 mb - 3">Company</div>;
                    <div className="space - y-2">;
                      {company_links.map ((link) => (
                          key={link.name}
                          href={link.href}
                          on_click={close_menu}
                          className='block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                          className="block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1";
                        >;
                          {link.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Contact Info */}
                  <div className='pt - 4 border - t border - gray - 700 / 50'>;
                    <div className='text - sm font - medium text - gray - 400 mb - 3'>;
                      Contact;
                    </div>;
                    <div className='space - y-2 text - sm text - gray - 400'>;
                      <div className='flex items - center space - x-2'>;
                        <Phone className='w - 4 h - 4 text - cyan - 400' />;
                        <span>{contact_info.mobile}</span>;
                      </div>;
                      <div className='flex items - center space - x-2'>;
                        <Mail className='w - 4 h - 4 text - purple - 400' />;
                        <span>{contact_info.email}</span>;
                      </div>;
                      <div className='flex items - center space - x-2'>;
                        <MapPin className='w - 4 h - 4 text - pink - 400' />;
                        <span className='text - xs'>{contact_info.address}</span>                      </div>                        <span>{contact_info.mobile}</span>;
                      </div>;
                      <div className="flex items - center space - x-2">;
                        <Mail className="w - 4 h - 4 text - purple - 400" />;
                        <span>{contact_info.email}</span>;
                      </div>;
                      <div className="flex items - center space - x-2">;
                        <MapPin className="w - 4 h - 4 text - pink - 400" />;
                        <span className="text - xs">{contact_info.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                  {/* CTA Button */}
                  <div className='pt - 4'>;
                    <Link href='/contact' on_click={close_menu}>;
                      <button className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200'>                        Get Started Today                  <div className="pt - 4">;
                    <Link href="/contact" on_click={close_menu}>;
                      <button className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200">;
                        Get Started Today;
                      </button>;
                    </Link>;
                  </div>;
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
<<<<<<< HEAD
<<<<<<< HEAD


      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>
);      <div className="h-20" />
    </>
  );
}

}

      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>
  );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
