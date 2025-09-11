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
  Infinity
  Hexagon
  Network;} from 'lucide-react';import {
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
  Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Hexagon,;
  Network,;} from 'lucide-react';import {
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$1,299/month' };
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$1,799/month' };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$3,999/month' }
    ];
  };


    title: '⚛️ 2030 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    description: 'Quantum computing and beyond',


<<<<<<< HEAD
=======
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$3,999/month' }
    ]
  }
    title: '⚛️ 2030 Quantum & Emerging Tech'
    icon: Atom
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: 'Quantum computing and beyond'
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: '/quantum-internet-security-gateway'
        description: 'Unbreakable quantum encryption'
        price: '$3,999/month'
      }
      {
        name: 'Quantum Learning Accelerator'
        href: '/quantum-learning-accelerator'
        description: 'Quantum-enhanced learning paths'
        price: '$899/month'
      }
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading-platform'
        description: 'Quantum-powered trading algorithms'
        price: '$4,999/month'
      }
      {
        name: 'Quantum Cloud Infrastructure'
        href: '/quantum-cloud-infrastructure'
        description: 'Quantum-enhanced cloud performance'
        price: '$4,999/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$3,999/month' }
      { name: 'Quantum Learning Accelerator', href: '/quantum-learning-accelerator', description: 'Quantum-enhanced learning paths', price: '$899/month' }
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$4,999/month' }
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud performance', price: '$4,999/month' }
    ]
  }
    title: '🧬 2030 Biotech & DNA Computing'
    icon: Microscope
    color: 'from-green-600 via-emerald-600 to-teal-600'
    description: 'Biological computing and genetic engineering'
    services: [
      {
        name: 'Biotech DNA Computing Platform'
        href: '/biotech-dna-computing-platform'
        description: 'DNA-based computation'
        price: '$5,999/month'
      }
      {
        name: 'Biotech Personalized Nutrition'
        href: '/biotech-personalized-nutrition'
        description: 'DNA-based nutrition plans'
        price: '$599/month'
      }
      {
        name: 'AI Predictive Health Analytics'
        href: '/ai-predictive-health-analytics'
        description: 'Predictive health outcomes'
        price: '$1,599/month'
      }
      {
        name: 'Advanced Research Automation'
        href: '/advanced-research-automation'
        description: 'Automated research workflows'
        price: '$1,999/month'
      }
    ]
  },  {      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$5,999/month' }
      { name: 'Biotech Personalized Nutrition', href: '/biotech-personalized-nutrition', description: 'DNA-based nutrition plans', price: '$599/month' }
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$1,599/month' }
      { name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Automated research workflows', price: '$1,999/month' }
    ]
  }
    title: '🏙️ 2030 Enterprise IT Solutions'
    icon: Cpu
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: 'Autonomous DevOps Platform'
        href: '/autonomous-devops-platform'
        description: 'Fully autonomous DevOps'
        price: '$2,999/month'
      }
      {
        name: 'Autonomous IT Operations Center'
        href: '/autonomous-it-operations-center'
        description: 'Self-managing IT infrastructure'
        price: '$6,999/month'
      }
      {
        name: 'AI-Powered Enterprise Security'
        href: '/ai-powered-enterprise-security'
        description: 'AI-driven threat detection'
        price: '$2,999/month'
      }
      {
        name: 'Intelligent Data Governance'
        href: '/intelligent-data-governance'
        description: 'AI-powered data management'
        price: '$7,999/month'
      }
    ]
  },  {      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$2,999/month' }
      { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure', price: '$6,999/month' }
      { name: 'AI-Powered Enterprise Security', href: '/ai-powered-enterprise-security', description: 'AI-driven threat detection', price: '$2,999/month' }
      { name: 'Intelligent Data Governance', href: '/intelligent-data-governance', description: 'AI-powered data management', price: '$7,999/month' }
    ]
  }
    title: '🌌 2030 Space & Metaverse Tech'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: 'Space exploration and digital reality'
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: '/space-mining-automation-platform'
        description: 'Automated asteroid mining'
        price: '$8,999/month'
      }
      {
        name: 'Metaverse Digital Reality Platform'
        href: '/metaverse-digital-reality-platform'
        description: 'Immersive virtual worlds'
        price: '$2,499/month'
      }
      {
        name: 'Quantum Research Platform'
        href: '/quantum-research-platform'
        description: 'Quantum computing research'
        price: '$3,999/month'
      }
      {
        name: 'AI Research Assistant'
        href: '/ai-research-assistant'
        description: 'Intelligent research support'
        price: '$899/month'
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$8,999/month' }
      { name: 'Metaverse Digital Reality Platform', href: '/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$2,499/month' }
      { name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum computing research', price: '$3,999/month' }
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Intelligent research support', price: '$899/month' }
    ]
  }
    title: '🎯 2030 Innovative Micro SAAS'
    icon: Target
    color: 'from-green-600 via-yellow-600 to-orange-600'
    description: 'Cutting-edge micro solutions'
    services: [
      {
        name: 'AI Business Intelligence Suite 2030'
        href: '/ai-business-intelligence-suite-2030'
        description: 'AI-powered business analytics and insights'
        price: '$299/month'
      }
      {
        name: 'AI Customer Experience Platform 2030'
        href: '/ai-customer-experience-platform-2030'
        description: 'AI-powered customer experience management'
        price: '$199/month'
      }
      {
        name: 'AI Marketing Automation Suite 2030'
        href: '/ai-marketing-automation-2030'
        description: 'Intelligent marketing automation powered by AI'
        price: '$179/month'
      }
      {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        name: 'AI HR Management Suite 2030',
        href: '/ai-hr-management-suite-2030',
        description: 'Intelligent human resources management powered by AI',
        price: '$149/month',
      },
    ],
  },];      { name: 'AI Business Intelligence Suite 2030', href: '/ai-business-intelligence-suite-2030', description: 'AI-powered business analytics and insights', price: '$299/month' },
      { name: 'AI Customer Experience Platform 2030', href: '/ai-customer-experience-platform-2030', description: 'AI-powered customer experience management', price: '$199/month' },
      { name: 'AI Marketing Automation Suite 2030', href: '/ai-marketing-automation-2030', description: 'Intelligent marketing automation powered by AI', price: '$179/month' },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      { name: 'AI HR Management Suite 2030', href: '/ai-hr-management-suite-2030', description: 'Intelligent human resources management powered by AI', price: '$149/month' }
    ]
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Layers }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
  { name: 'Blog', href: '/blog', icon: MessageCircle }
<<<<<<< HEAD
<<<<<<< HEAD
];

const mainNavigation = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
];

const mainNavigation = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case - studies', icon: BarChart3 },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

];


export default function UltraFuturisticNavigation2030() {
<<<<<<< HEAD


export default function UltraFuturisticNavigation2030() {;

<<<<<<< HEAD
export default function UltraFuturisticNavigation2030() {

export default function UltraFuturisticNavigation2030() {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


export default function UltraFuturisticNavigation2030() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>
            </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <Phone className='w-4 h-4 text-cyan-400' />

<<<<<<< HEAD



=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              <a
                href={contactInfo.website}
                className='hover:text-cyan-400 transition-colors'
              >                {contactInfo.website.replace('https://', '')}              <span>{contactInfo.mobile}</span>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a

      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{contactInfo.mobile}</span>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            {/* Desktop Navigation */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            {/* Desktop Navigation */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='relative group'>;
                <button className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200'>;
                  <Briefcase className='w-4 h-4' />;
                  <span>Services</span>;
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-200' />;
                </button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
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
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">;
                  <Briefcase className="w-4 h-4" />;
                  <span>Services</span>;
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />;
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
<<<<<<< HEAD
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
=======
                                </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

                              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            ))}
                          </div>;
                        </div>;
                      ))}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    </div>
                  </div>
                </div>
              </div>
            </div>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* CTA Buttons */}


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              </button>;
            </div>;
          </div>;
        </div>;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion&& motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD


            >
              <div className='px-4 py-6 space-y-6'>
=======
              className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            >
              <div className='px-4 py-6 space-y-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
            >
              <div className="px-4 py-6 space-y-6">
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg text - gray - 300 hover:text - white hover:bg - purple - 500 / 10 transition - colors duration - 200';
                    >;
                      <item.icon className='w - 5 h - 5' />                      <span>{item.name}</span>            >;
              <div className="px - 4 py - 6 space - y-6">;
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Mobile Navigation Links */}
=======

                {/* Mobile Navigation Links */}
<<<<<<< HEAD
                <div className="space - y-4">;
                  {main_navigation.map ((item) => (
                    <Link;
                      key={item.name}
                      href={item.href}

                </div>;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                {/* Mobile Navigation Links */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    </Link>
                  ))}
                </div>


<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Mobile Services */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white px-3'>
                    Our Services
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {quickLinks.map(link => (                      <Link                <div className="space-y-4">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <h3 className="text-lg font-semibold text-white px-3">Our Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((link) => (

<<<<<<< HEAD
                      <Link

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      <Link

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className={`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          link.color.includes('from-')
                            ? `bg-gradient-to-r ${link.color} text-white`
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <link.icon className='w-6 h-6 mx-auto mb-2' />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-') 
                            ? `bg-gradient-to-r ${link.color} text-white` 


                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
<<<<<<< HEAD
<<<<<<< HEAD
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-')
                            ? `bg-gradient-to-r ${link.color} text-white`
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>                          link.color.includes('from-') 
                            ? `bg-gradient-to-r ${link.color} text-white` 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >;
                        <link && link.icon className='w-6 h-6 mx-auto mb-2' />;
                        <span className='text-sm font-medium'>{link && link.name}</span>                      </Link>                          link && link.color.includes('from-') ;
                            ? `bg-gradient-to-r ${link && link.color} text-white` ;
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                        }`}

                      >
                        <link.icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{link.name}</span>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    ))}
                  </div>
                </div>
                {/* Mobile CTA */}
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Link>

                    ))}

                  </div>;
                </div>;


                {/* Mobile CTA */}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-3 pt-4 border-t border-purple-500/20">
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>
=======
                <div className="space-y-3 pt-4 border-t border-purple-500/20">
=======
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span className='text-sm font-medium'>{link.name}</span>                      </Link>

                      </Link>

                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className='space-y-3 pt-4 border-t border-purple-500/20'>

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
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        </AnimatePresence>;
      </nav>;


<<<<<<< HEAD
          )}

        </AnimatePresence>
      </nav>
=======
=======

          )}
        </AnimatePresence>
      </nav>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}


;

      {/* Spacer for fixed navigation */}
      <div className='h-20'></div>
    </>
  );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </motion.div>)}
        </AnimatePresence>;
      </nav>;
      {/* Spacer for fixed navigation */}
      <div className='h - 20'></div>;
    </>);      <div className="h - 20"></div>;
    </>);
}

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
