
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';


=======
import React, { useState, useEffect } from 'react';


import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD


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
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Hexagon,;
  Network,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
<<<<<<< HEAD


      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$1,299/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$1,799/month' };
=======
  Infinity, Hexagon, Network

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 2030 Ultra-Futuristic AI Services'
    icon: Brain
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and creativity'
    services: [
      {
        name: 'AI Consciousness Evolution Platform'
        href: '/ai-consciousness-evolution-platform'
        description: 'Develop genuine AI consciousness'
        price: '$19,999/month'
      }
      {
        name: 'AI Emotional Intelligence Platform'
        href: '/ai-emotion-intelligence-platform'
        description: 'Real-time emotion analysis and response'
        price: '$1,299/month'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/ai-creativity-orchestrator'
        description: 'Multi-model creativity fusion'
        price: '$1,799/month'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/ai-autonomous-business-manager'
        description: 'Fully autonomous business operations'
        price: '$3,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' }
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$1,299/month' }
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$1,799/month' }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$3,999/month' }
    ];
  };


    title: '⚛️ 2030 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    description: 'Quantum computing and beyond',


<<<<<<< HEAD
=======
        name: 'AI HR Management Suite 2030'
        href: '/ai-hr-management-suite-2030'
        description: 'Intelligent human resources management powered by AI'
        price: '$149/month'
      }
    ]
  },];      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030', description: 'AI-powered business analytics and insights', price: '$299/month' }
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030', description: 'AI-powered customer experience management', price: '$199/month' }
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030', description: 'Intelligent marketing automation powered by AI', price: '$179/month' }
      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030', description: 'Intelligent human resources management powered by AI', price: '$149/month' }
    ]
  }
        name: 'AI HR Management Suite 2030',
        href: '/ai-hr-management-suite-2030',
        description: 'Intelligent human resources management powered by AI',
        price: '$149/month',
      },
    ],
  },];      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030', description: 'AI-powered business analytics and insights', price: '$299/month' },
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030', description: 'AI-powered customer experience management', price: '$199/month' },
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030', description: 'Intelligent marketing automation powered by AI', price: '$179/month' },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030', description: 'Intelligent human resources management powered by AI', price: '$149/month' }
    ]
  }




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Layers }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
<<<<<<< HEAD
=======
];

const mainNavigation = [
=======
=======
];

const mainNavigation = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    services: [;
      {
        name: 'Space Mining Automation Platform',
        href: '/space - mining - automation - platform',
        description: 'Automated asteroid mining',
        price: '$8, 999 / month',
      },
      {
        name: 'Metaverse Digital Reality Platform',
        href: '/metaverse - digital - reality - platform',
        description: 'Immersive virtual worlds',
        price: '$2, 499 / month',
      },
      {
        name: 'Quantum Research Platform',
        href: '/quantum - research - platform',
        description: 'Quantum computing research',
        price: '$3, 999 / month',
      },
      {
        name: 'AI Research Assistant',
        href: '/ai - research - assistant',
        description: 'Intelligent research support',
        price: '$899 / month',
      },
    ],
  },  {      { name: 'Space Mining Automation Platform', href: '/space - mining - automation - platform', description: 'Automated asteroid mining', price: '$8, 999 / month' }
      { name: 'Metaverse Digital Reality Platform', href: '/metaverse - digital - reality - platform', description: 'Immersive virtual worlds', price: '$2, 499 / month' }
      { name: 'Quantum Research Platform', href: '/quantum - research - platform', description: 'Quantum computing research', price: '$3, 999 / month' }
      { name: 'AI Research Assistant', href: '/ai - research - assistant', description: 'Intelligent research support', price: '$899 / month' }
    ];
  }
    title: '🎯 2030 Innovative Micro SAAS',
    icon: Target,
    color: 'from - green - 600 via - yellow - 600 to - orange - 600',
    description: 'Cutting - edge micro solutions',
    services: [;
      {
        name: 'AI Business Intelligence Suite 2030',
        href: '/ai - business - intelligence - suite - 2030',
        description: 'AI - powered business analytics and insights',
        price: '$299 / month',
      },
      {
        name: 'AI Customer Experience Platform 2030',
        href: '/ai - customer - experience - platform - 2030',
        description: 'AI - powered customer experience management',
        price: '$199 / month',
      },
      {
        name: 'AI Marketing Automation Suite 2030',
        href: '/ai - marketing - automation - 2030',
        description: 'Intelligent marketing automation powered by AI',
        price: '$179 / month',
      },
      {
        name: 'AI HR Management Suite 2030',
        href: '/ai - hr - management - suite - 2030',
        description: 'Intelligent human resources management powered by AI',
        price: '$149 / month',
      },
    ],
  }, ];      { name: 'AI Business Intelligence Suite 2030', href: '/ai - business - intelligence - suite - 2030', description: 'AI - powered business analytics and insights', price: '$299 / month' },
      { name: 'AI Customer Experience Platform 2030', href: '/ai - customer - experience - platform - 2030', description: 'AI - powered customer experience management', price: '$199 / month' },
      { name: 'AI Marketing Automation Suite 2030', href: '/ai - marketing - automation - 2030', description: 'Intelligent marketing automation powered by AI', price: '$179 / month' },
      { name: 'AI HR Management Suite 2030', href: '/ai - hr - management - suite - 2030', description: 'Intelligent human resources management powered by AI', price: '$149 / month' }
    ];
  }
const main_navigation = [;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case - studies', icon: BarChart3 },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
=======
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  {
    name: 'AI Services'
    href: '/services/ai'
    icon: Brain
    color: 'from-purple-500 to-pink-500'
  }
  {
    name: 'Quantum Tech'
    href: '/services/quantum'
    icon: Atom
    color: 'from-blue-500 to-cyan-500'
  }
  {
    name: 'Biotech Solutions'
    href: '/services/biotech'
    icon: Microscope
    color: 'from-green-500 to-emerald-500'
  }
  {
    name: 'Space Technology'
    href: '/services/space'
    icon: Rocket
    color: 'from-indigo-500 to-purple-500'
  }
  {
    name: 'Enterprise IT'
    href: '/services/enterprise'
    icon: Cpu
    color: 'from-gray-500 to-slate-500'
  }
  {
    name: 'Micro SAAS'
    href: '/services/micro-saas'
    icon: Target
    color: 'from-orange-500 to-red-500'
  },];  { name: 'AI Services', href: '/services/ai', icon: Brain, color: 'from-purple-500 to-pink-500' }
  { name: 'Quantum Tech', href: '/services/quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' }
  { name: 'Biotech Solutions', href: '/services/biotech', icon: Microscope, color: 'from-green-500 to-emerald-500' }
  { name: 'Space Technology', href: '/services/space', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  { name: 'Enterprise IT', href: '/services/enterprise', icon: Cpu, color: 'from-gray-500 to-slate-500' }
  { name: 'Micro SAAS', href: '/services/micro-saas', icon: Target, color: 'from-orange-500 to-red-500' }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

];


export default function UltraFuturisticNavigation2030() {


export default function UltraFuturisticNavigation2030() {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default function UltraFuturisticNavigation2030() {

export default function UltraFuturisticNavigation2030() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>;
      {/* Top Contact Bar */}
<<<<<<< HEAD


=======
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>
            </div>
      <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <Phone className='w-4 h-4 text-cyan-400' />




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a

      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>

=======
              <a
                href={contactInfo.website}
                className='hover:text-cyan-400 transition-colors'
              >                {contactInfo.website.replace('https://', '')}              <span>{contactInfo.mobile}</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
                href={contactInfo && contactInfo.website}
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="flex items-center space-x-4">;
              <Link href="/" className="flex items-center space-x-3 group">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">;
                    <Zap className="w-6 h-6 text-white" />;
                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
                </div>;
                <div className="flex flex-col">;
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </span>;
                  <span className="text-xs text-gray-400 font-mono">2030 Future Technology</span>;
                </div>;
              </Link>;
            </div>;
<<<<<<< HEAD


            {/* Desktop Navigation */}

=======
            {/* Desktop Navigation */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className='relative group'>;
                <button className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200'>;
                  <Briefcase className='w-4 h-4' />;
                  <span>Services</span>;
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />;
                </button>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
=======
className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl'
            : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-sm'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>

            {/* Logo */}
            <div className='flex items-center space-x-4'>
              <Link href='/' className='flex items-center space-x-3 group'>
                <div className='relative'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300'>
                    <Zap className='w-6 h-6 text-white' />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Zion Tech Group
                  </span>
                  <span className='text-xs text-gray-400 font-mono'>
                    2030 Future Technology
                  </span>                </div>            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400 font-mono">2030 Future Technology</span>
                </div>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group'
                >
                  <item.icon className='w-4 h-4 group-hover:text-purple-400 transition-colors' />
                  <span>{item.name}</span>
                </Link>
              ))}
              {/* Services Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200'>
                  <Briefcase className='w-4 h-4' />
                  <span>Services</span>
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />
                </button>
                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4'>
                  <div className='p-8'>
                    <div className='grid grid-cols-2 gap-8'>
                      {serviceCategories.map((category, index) => (
                        <div key={index} className='space-y-4'>
                          <div className='flex items-center space-x-3'>
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
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
                                className='block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group'                <Link
                  key={item.name}
                  href={item.href}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  <span>{item.name}</span>
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              ))}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">;
                  <Briefcase className="w-4 h-4" />;
                  <span>Services</span>;
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />;
                </button>;
<<<<<<< HEAD


                {/* Mega Menu */}

=======
=======
                {/* Mega Menu */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
<<<<<<< HEAD

                              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                                className='block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group'
                              >
                                <div className='flex items-center justify-between'>
                                  <div>
                                    <h4 className='text-sm font-medium text-white group-hover:text-purple-400 transition-colors'>
                                      {service.name}
                                    </h4>
                                    <p className='text-xs text-gray-400'>
                                      {service.description}
                                    </p>
                                  </div>
                                  <span className='text-xs font-mono text-purple-400'>
                                    {service.price}
                                  </span>                                </div>                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-xs text-gray-400">{service.description}</p>
                                  </div>
                                  <span className="text-xs font-mono text-purple-400">{service.price}</span>
                                </div>

                                </div>

                              </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                            ))}
                          </div>;
                        </div>;
                      ))}

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Main Navigation */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
          is_scrolled;
            ? 'bg - black / 90 backdrop - blur - xl border - b border - purple - 500 / 20 shadow - 2xl';
            : 'bg - gradient - to - r from - black / 95 via - purple - 900 / 95 to - black / 95 backdrop - blur - sm';
        }`}
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 20'>;
            {/* Logo */}
            <div className='flex items - center space - x-4'>;
              <Link href='/' className='flex items - center space - x-3 group'>;
                <div className='relative'>;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl flex items - center justify - center transform group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300'>;
                    <Zap className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300'></div>;
                </div>;
                <div className='flex flex - col'>;
                  <span className='text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                    Zion Tech Group;
                  </span>;
                  <span className='text - xs text - gray - 400 font - mono'>;
                    2030 Future Technology;
                  </span>                </div>            {/* Logo */}
            <div className="flex items - center space - x-4">;
              <Link href="/" className="flex items - center space - x-3 group">;
                <div className="relative">;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl flex items - center justify - center transform group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300">;
                    <Zap className="w - 6 h - 6 text - white" />;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - purple - 500 to - cyan - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300"></div>;
                </div>;
                <div className="flex flex - col">;
                  <span className="text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - cyan - 400 bg - clip - text text - transparent">;
                    Zion Tech Group;
                  </span>;
                  <span className="text - xs text - gray - 400 font - mono">2030 Future Technology</span>;
                </div>;
              </Link>;
            </div>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {main_navigation.map (item => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group';
                >;
                  <item.icon className='w - 4 h - 4 group - hover:text - purple - 400 transition - colors' />;
                  <span>{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}
              <div className='relative group'>;
                <button className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200'>;
                  <Briefcase className='w - 4 h - 4' />;
                  <span > Services</span>;
                  <ChevronDown className='w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 200' />;
                </button>;
                {/* Mega Menu */}
                <div className='absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform group - hover:translate - y-0 translate - y-4'>;
                  <div className='p - 8'>;
                    <div className='grid grid - cols - 2 gap - 8'>;
                      {service_categories.map ((category, index) => (
                        <div key={index} className='space - y-4'>;
                          <div className='flex items - center space - x-3'>;
                            <div;
                              className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}
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
                                className='block p - 3 rounded - lg hover:bg - purple - 500 / 10 transition - colors duration - 200 group'                <Link;
                  key={item.name}
                  href={item.href}
                  className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 group";
                >;
                  <item.icon className="w - 4 h - 4 group - hover:text - purple - 400 transition - colors" />;
                  <span>{item.name}</span>;
                </Link>))}
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200">;
                  <Briefcase className="w - 4 h - 4" />;
                  <span > Services</span>;
                  <ChevronDown className="w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 200" />;
                </button>;
                {/* Mega Menu */}
                <div className="absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform group - hover:translate - y-0 translate - y-4">;
                  <div className="p - 8">;
                    <div className="grid grid - cols - 2 gap - 8">;
                      {service_categories.map ((category, index) => (
                        <div key={index} className="space - y-4">;
                          <div className="flex items - center space - x-3">;
                            <div className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}>;
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
                                className='block p - 3 rounded - lg hover:bg - purple - 500 / 10 transition - colors duration - 200 group';
                              >;
                                <div className='flex items - center justify - between'>;
                                  <div>;
                                    <h4 className='text - sm font - medium text - white group - hover:text - purple - 400 transition - colors'>;
                                      {service.name}
                                    </h4>;
                                    <p className='text - xs text - gray - 400'>;
                                      {service.description}
                                    </p>;
                                  </div>;
                                  <span className='text - xs font - mono text - purple - 400'>;
                                    {service.price}
                                  </span>                                </div>                              >;
                                <div className="flex items - center justify - between">;
                                  <div>;
                                    <h4 className="text - sm font - medium text - white group - hover:text - purple - 400 transition - colors">;
                                      {service.name}
                                    </h4>;
                                    <p className="text - xs text - gray - 400">{service.description}</p>;
                                  </div>;
                                  <span className="text - xs font - mono text - purple - 400">{service.price}</span>;
                                </div>;
                              </Link>))}
                          </div>;
                        </div>))}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* CTA Buttons */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            <div className="hidden lg:flex items-center space-x-4">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link
                href='/contact'
                className='px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25'              >
                Get Started
              </Link>
              <Link
                href='/pricing'
                className='px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200'              >            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
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
            <div className="lg:hidden">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


              </button>;
            </div>;
          </div>;
        </div>;


=======
=======
              </button>
            </div>
          </div>
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df





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

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
            >
              <div className="px-4 py-6 space-y-6">
=======
        {/* Mobile Menu */}
        <AnimatePresence>;
          {is_open && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - purple - 500 / 20';
            >;
              <div className='px - 4 py - 6 space - y-6'>;
                {/* Mobile Navigation Links */}
                <div className='space - y-4'>;
                  {main_navigation.map (item => (                    <Link;
<<<<<<< HEAD
=======

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20'

            >
              <div className='px-4 py-6 space-y-6'>
                {/* Mobile Navigation Links */}
                <div className='space-y-4'>
                  {mainNavigation.map(item => (                    <Link
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - purple - 500 / 10 transition - colors duration - 200';
                    >;
                      <item.icon className='w - 5 h - 5' />                      <span>{item.name}</span>            >;
              <div className="px - 4 py - 6 space - y-6">;
<<<<<<< HEAD

                {/* Mobile Navigation Links */}
                <div className="space - y-4">;
                  {main_navigation.map ((item) => (
                    <Link;
                      key={item.name}
                      href={item.href}

                </div>;


=======
=======
                {/* Mobile Navigation Links */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


                    </Link>
                  ))}
                </div>


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
                <div className="space-y-4">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200'
                    >
                      <item.icon className='w-5 h-5' />                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>

                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white px-3">Our Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((link) => (

                      <Link

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                      <Link

                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className={`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          link.color.includes('from-')
                            ? `bg-gradient-to-r ${link.color} text-white`
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <link.icon className='w-6 h-6 mx-auto mb-2' />
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-') 
                            ? `bg-gradient-to-r ${link.color} text-white` 


                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-')
                            ? `bg-gradient-to-r ${link.color} text-white`
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-') 
                            ? `bg-gradient-to-r ${link.color} text-white` 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      >;
                        <link && link.icon className='w-6 h-6 mx-auto mb-2' />;
                        <span className='text-sm font-medium'>{link && link.name}</span>                      </Link>                          link && link.color.includes('from-') ;
                            ? `bg-gradient-to-r ${link && link.color} text-white` ;
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700';
<<<<<<< HEAD


                        }`}

                      >
                        <link.icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{link.name}</span>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      </Link>

                    ))}

                  </div>;
                </div>;


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
<<<<<<< HEAD
=======
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        }`}
                      >
                        <link.icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    ))}
                  </div>;
                </div>;
                {/* Mobile CTA */}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    View Pricing;
                  </Link>;
                </div>;
              </div>;

=======
                <div className="space-y-3 pt-4 border-t border-purple-500/20">
=======
                <div className="space-y-3 pt-4 border-t border-purple-500/20">
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>

                      </Link>

                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        </AnimatePresence>;
      </nav>;


<<<<<<< HEAD
      {/* Spacer for fixed navigation */}
      <div className='h-20'></div>;
    </>;
  );      <div className="h-20"></div>;
    </>;
  );
}
=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
          )}

        </AnimatePresence>
      </nav>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
<<<<<<< HEAD

            </motion.div>)}
        </AnimatePresence>;
      </nav>;
      {/* Spacer for fixed navigation */}
      <div className='h - 20'></div>;
    </>);      <div className="h - 20"></div>;
    </>);
}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}


;

      {/* Spacer for fixed navigation */}
      <div className='h-20'></div>
    </>
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
