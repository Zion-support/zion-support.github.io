"use client";

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';

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



  CloseIcon,;
  ChevronRightIcon,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;







  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;

} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


const serviceCategories = [
  {
    title: ' AI & Consciousness 2030'
    icon: BrainIcon
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and emotional intelligence'
    services: [

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
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }

    ]
  }
    title: ' Quantum & Emerging Tech 2030'
    icon: AtomIcon
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: 'Quantum computing and beyond'
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: '/quantum-internet-security-gateway'
        description: 'Unbreakable quantum encryption'
        price: '$15,999/month'
      }
      {
        name: 'Biotech DNA Computing Platform'
        href: '/biotech-dna-computing-platform'
        description: 'DNA-based computation'
        price: '$25,999/month'
      }
      {
        name: 'Neuromorphic Computing Platform'
        href: '/neuromorphic-computing-platform'
        description: 'Brain-inspired computing'
        price: '$899/month'
      }
      {
        name: 'Photonic Computing Infrastructure'
        href: '/photonic-computing-infrastructure'
        description: 'Light-speed computing'
        price: '$699/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' }
      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' }
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' }
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' }
    ]
  }
    title: ' Space & Metaverse 2030'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: 'Space exploration and digital reality'
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: '/space-mining-automation-platform'
        description: 'Automated asteroid mining'
        price: '$45,999/month'
      }
      {
        name: 'Metaverse Development Platform'
        href: '/metaverse-development-platform'
        description: 'Build immersive virtual worlds'
        price: '$499/month'
      }
      {
        name: 'Virtual Event Hologram Platform'
        href: '/virtual-event-hologram-platform'
        description: 'Immersive holographic events'
        price: '$799/month'
      }
      {
        name: 'AI Predictive Health Analytics'
        href: '/ai-predictive-health-analytics'
        description: 'Predictive health outcomes'
        price: '$7,999/month'
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' }
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' }
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Immersive holographic events', price: '$799/month' }
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
    ]
  }
    title: ' Enterprise IT 2030'
    icon: CpuIcon
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: 'Autonomous DevOps Platform'
        href: '/autonomous-devops-platform'
        description: 'Fully autonomous DevOps'
        price: '$799/month'
      }
      {
        name: 'Zero Trust Network Architecture'
        href: '/zero-trust-network-architecture'
        description: 'Never trust, always verify'
        price: '$599/month'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration'
        description: 'Distributed edge computing'
        price: '$449/month'
      }
      {
        name: 'AI-Powered IT Operations Center'
        href: '/ai-it-operations-center'
        description: 'Intelligent IT operations'
        price: '$699/month'
      }
    ]
  },  {      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' }
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' }
      { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' }
    ]
  }
    title: ' Business Solutions 2030'
    icon: Target
    color: 'from-green-600 via-yellow-600 to-orange-600'
    description: 'Practical business solutions with AI'
    services: [
      {
        name: 'AI Business Intelligence Suite'
        href: '/ai-business-intelligence-suite'
        description: 'Intelligent business insights'
        price: '$299/month'
      }
      {
        name: 'AI Customer Success Automation'
        href: '/ai-customer-success-automation'
        description: 'Automate customer success'
        price: '$199/month'
      }
      {
        name: 'Blockchain Supply Chain Transparency'
        href: '/blockchain-supply-chain-transparency'
        description: 'End-to-end traceability'
        price: '$399/month'
      }
      {
        name: 'AI Meeting Transcriber Pro'
        href: '/ai-meeting-transcriber-pro'
        description: 'Professional transcription'
        price: '$149/month'
      }
    ]
  },  {      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' }
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' }
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' }
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Professional transcription', price: '$149/month' }
    ]
  }
    title: ' Research & Development 2030'
    icon: Microscope
    color: 'from-orange-600 via-red-600 to-pink-600'
    description: 'Breakthrough research solutions'
    services: [
      {
        name: 'Swarm Robotics Orchestration'
        href: '/swarm-robotics-orchestration'
        description: 'Coordinate robot swarms'
        price: '$449/month'
      }
      {
        name: 'Brain-Computer Interface Platform'
        href: '/brain-computer-interface-platform'
        description: 'Direct neural interface'
        price: '$1,299/month'
      }
      {
        name: 'Quantum Machine Learning Platform'
        href: '/quantum-machine-learning-platform'
        description: 'Quantum-enhanced ML'
        price: '$2,999/month'
      }
      {
        name: 'Synthetic Biology Automation Platform'
        href: '/synthetic-biology-automation-platform'
        description: 'Automate biology research'
        price: '$3,999/month'
      }
    ]
  },];      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Direct neural interface', price: '$1,299/month' }
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-enhanced ML', price: '$2,999/month' }
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' };
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  }
    title: '⚛️ Quantum & Emerging Tech 2030'
    icon: AtomIcon
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: 'Quantum computing and beyond'
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: '/quantum-internet-security-gateway'
        description: 'Unbreakable quantum encryption'
        price: '$15,999/month'
      }
      {
        name: 'Biotech DNA Computing Platform'
        href: '/biotech-dna-computing-platform'
        description: 'DNA-based computation'
        price: '$25,999/month'
      }
      {
        name: 'Neuromorphic Computing Platform'
        href: '/neuromorphic-computing-platform'
        description: 'Brain-inspired computing'
        price: '$899/month'
      }
      {
        name: 'Photonic Computing Infrastructure'
        href: '/photonic-computing-infrastructure'
        description: 'Light-speed computing'
        price: '$699/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' }
      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' }
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' }
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' }
    ]
  }
    title: '🚀 Space & Metaverse 2030'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: 'Space exploration and digital reality'
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: '/space-mining-automation-platform'
        description: 'Automated asteroid mining'
        price: '$45,999/month'
      }
      {
        name: 'Metaverse Development Platform'
        href: '/metaverse-development-platform'
        description: 'Build immersive virtual worlds'
        price: '$499/month'
      }
      {
        name: 'Virtual Event Hologram Platform'
        href: '/virtual-event-hologram-platform'
        description: 'Immersive holographic events'
        price: '$799/month'
      }
      {
        name: 'AI Predictive Health Analytics'
        href: '/ai-predictive-health-analytics'
        description: 'Predictive health outcomes'
        price: '$7,999/month'
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' }
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' }
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Immersive holographic events', price: '$799/month' }
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
    ]
  }
    title: '⚙️ Enterprise IT 2030'
    icon: CpuIcon
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: 'Autonomous DevOps Platform'
        href: '/autonomous-devops-platform'
        description: 'Fully autonomous DevOps'
        price: '$799/month'
      }
      {
        name: 'Zero Trust Network Architecture'
        href: '/zero-trust-network-architecture'
        description: 'Never trust, always verify'
        price: '$599/month'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration'
        description: 'Distributed edge computing'
        price: '$449/month'
      }
      {
        name: 'AI-Powered IT Operations Center'
        href: '/ai-it-operations-center'
        description: 'Intelligent IT operations'
        price: '$699/month'
      }
    ]
  },  {      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' }
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' }
      { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' }
    ]
  }
    title: '🎯 Business Solutions 2030'
    icon: Target
    color: 'from-green-600 via-yellow-600 to-orange-600'
    description: 'Practical business solutions with AI'
    services: [
      {
        name: 'AI Business Intelligence Suite'
        href: '/ai-business-intelligence-suite'
        description: 'Intelligent business insights'
        price: '$299/month'
      }
      {
        name: 'AI Customer Success Automation'
        href: '/ai-customer-success-automation'
        description: 'Automate customer success'
        price: '$199/month'
      }
      {
        name: 'Blockchain Supply Chain Transparency'
        href: '/blockchain-supply-chain-transparency'
        description: 'End-to-end traceability'
        price: '$399/month'
      }
      {
        name: 'AI Meeting Transcriber Pro'
        href: '/ai-meeting-transcriber-pro'
        description: 'Professional transcription'
        price: '$149/month'
      }
    ]
  },  {      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' }
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' }
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' }
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Professional transcription', price: '$149/month' }
    ]
  }
    title: '🔬 Research & Development 2030'
    icon: Microscope
    color: 'from-orange-600 via-red-600 to-pink-600'
    description: 'Breakthrough research solutions'
    services: [
      {
        name: 'Swarm Robotics Orchestration'
        href: '/swarm-robotics-orchestration'
        description: 'Coordinate robot swarms'
        price: '$449/month'
      }
      {
        name: 'Brain-Computer Interface Platform'
        href: '/brain-computer-interface-platform'
        description: 'Direct neural interface'
        price: '$1,299/month'
      }
      {
        name: 'Quantum Machine Learning Platform'
        href: '/quantum-machine-learning-platform'
        description: 'Quantum-enhanced ML'
        price: '$2,999/month'
      }
      {

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





const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Layers }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Partners', href: '/partners' }
  { name: 'Support', href: '/support' }
  { name: 'Status', href: '/status' },];  { name: 'Status', href: '/status' }
];



const mainNavigation = [


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

      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)


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

const companyLinks = [;
  { name: 'About Us', href: '/about' },;
  { name: 'Careers', href: '/careers' },;
  { name: 'News', href: '/news' },;
  { name: 'Partners', href: '/partners' },;
  { name: 'Support', href: '/support' },;
  { name: 'Status', href: '/status' },];  { name: 'Status', href: '/status' }
];





>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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


              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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

              {mainNavigation.map(item => (            {/* Logo */}
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


              {/* Services Dropdown */}

              <div className='relative group'>;
                <button className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'>;
                  <Briefcase className='w-4 h-4 group-hover:scale-110 transition-transform' />;
                  <span>Services</span>;
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform' />;
                </button>;


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


              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group">;
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />;
                  <span>Services</span>;
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />;
                </button>;


                {/* Mega Menu */}

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

              {mainNavigation.map(item => (


              </div>
            </Link>

            {/* Desktop Navigation */}


              </div>
            </Link>




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}

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







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

                              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

                            ))}
                          </div>;
                        </div>;
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">


            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>                  Get Started






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


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

                  Get Started;
                </button>;
              </Link>;
            </div>;








>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



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








>>>>>>> cursor/fix-website-loading-errors-and-merge-6662







      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 lg:hidden'










>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






          >
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

                    className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'>;
                    <X className='w-6 h-6' />                  </button>;
                </div>;


                {/* Mobile Navigation */}
                <div className='space-y-6'>;
                  {mainNavigation && mainNavigation.map(item => (                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}

                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'>;
                      <item && item.icon className='w-5 h-5' />                      <span>{item && item.name}</span>                  <button onClick={closeMenu} className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">;
                    <X className="w-6 h-6" />;
                  </button>;
                </div>;


                {/* Mobile Navigation */}

                {/* Mobile Navigation */}
                <div className='space-y-6'>;

                  {mainNavigation && mainNavigation.map(item => (                <div className="space-y-6">;
                  {mainNavigation && mainNavigation.map((item) => (;
                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50'
                    >
                      <item.icon className='w-5 h-5' />                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>

                    </Link>
                  ))}
                  {/* Services Accordion */}
                  <div className='space-y-2'>

                    </Link>
                  ))}

                  {/* Services Accordion */}





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


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


                              <Link
                                key={serviceIndex}
                                href={service && service.href}
                                onClick={closeMenu}


                            ))}
                          </div>;
                        ))}
                      </div>;
                    )}
                  </div>






                  </div>;






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


                  {/* Company Links */}
                  <div className='pt-4 border-t border-gray-700/50'>;
                    <div className='text-sm font-medium text-gray-400 mb-3'>;
                      Company;
                    </div>;
                    <div className='space-y-2'>;
                      {companyLinks && companyLinks.map(link => (                        <Link
                          key={link && link.name}
                          href={link && link.href}
                          onClick={closeMenu}
                          className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1'>                  <div className="pt-4 border-t border-gray-700/50">;
                    <div className="text-sm font-medium text-gray-400 mb-3">Company</div>;
                    <div className="space-y-2">;
                      {companyLinks && companyLinks.map((link) => (;
                          key={link && link.name}
                          href={link && link.href}
                          onClick={closeMenu}
                          className='block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1'                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1";
                        >;
                          {link && link.name}
                        </Link>;
                      ))}
                    </div>
                  </div>






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



                  {/* Contact Info */}
                  <div className='pt-4 border-t border-gray-700/50'>
                    <div className='text-sm font-medium text-gray-400 mb-3'>
                      Contact
                    </div>
                    <div className='space-y-2 text-sm text-gray-400'>
                      <div className='flex items-center space-x-2'>
                        <Phone className='w-4 h-4 text-cyan-400' />






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Mail className='w-4 h-4 text-purple-400' />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <MapPin className='w-4 h-4 text-pink-400' />
                        <span className='text-xs'>{contactInfo.address}</span>                      </div>                        <span>{contactInfo.mobile}</span>




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45


                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Mail className='w-4 h-4 text-purple-400' />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <MapPin className='w-4 h-4 text-pink-400' />
                        <span className='text-xs'>{contactInfo.address}</span>                      </div>                        <span>{contactInfo.mobile}</span>
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
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>


);      <div className="h-20" />
    </>
  );
}



      {/* Spacer for fixed navigation */}
      <div className='h-20' />;
    </>;
  );      <div className="h-20" />;
    </>;


  );




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



}




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



