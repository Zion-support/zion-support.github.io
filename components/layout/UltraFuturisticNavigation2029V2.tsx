<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

import React, { useState } from 'react';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
import {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react',
import React, { useState } from 'react';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Menu
  X
  Search
  ChevronDown
  ChevronRight
  Home
  Users
  Settings
  HelpCircle
  Mail
  Phone
  MapPin
  BookOpen
  MessageCircle
  Star
  TrendingUp
  Layers
  Cpu
  Database
  Cloud
  Lock
  Shield
  Globe
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
  Globe2
  Zap
  Rocket
  Brain
  Sparkles
  ShieldCheck
  Target
  Users2
  Briefcase
  Lightbulb
  Award
  Clock
  CheckCircle;} from 'lucide-react';import {
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

  Clock,;
  CheckCircle,;} from 'lucide-react';import { ;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  Clock,
  CheckCircle,} from 'lucide-react';import {
  Menu, X, Search, ChevronDown, ChevronRight;
=======
  Clock,;
  CheckCircle,;} from 'lucide-react';import { ;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Menu, X, Search, ChevronDown, ChevronRight;

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
  BookOpen, MessageCircle, Star, TrendingUp;
  Layers, Cpu, Database, Cloud, Lock, Shield;
  Globe, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2;
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
<<<<<<< HEAD


const serviceCategories = [


      {

=======
<<<<<<< HEAD
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
} from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
{;
  name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3, 999/month' ;
};
{;
  name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5, 999/month' ;
};
{;
  name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12, 999/month' ;
}] ;
};
{;
  title: '⚛️ 2029 Quantum & Emerging Tech', icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', description: 'Quantum computing and beyond', services: [ {;
  name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15, 999/month' ;
};
{;
  name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25, 999/month' ;
};
{;
  name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35, 999/month' ;
};
{;
  name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1, 999/month' ;
}] ;
};
{;
  title: '🏙️ 2029 Enterprise IT Solutions', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', description: 'Autonomous enterprise infrastructure', services: [ {;
  name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2, 499/month' ;
};
{;
  name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3, 999/month' ;
};
{;
  name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1, 599/month' ;
};
{;
  name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2, 999/month' ;
}] ;
};
{;
  title: '🌌 2029 Space & Metaverse Tech', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', description: 'Space exploration and digital reality', services: [ {;
  name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45, 999/month' ;
};
{;
  name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8, 999/month' ;
};
{;
  name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7, 999/month' ;
};
{;
  name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2, 999/month' ;
}] ;
};
{;
  title: '🎯 2029 Innovative Micro SAAS', icon: Target, color: 'from-green-600 via-yellow-600 to-orange-600', description: 'Cutting-edge micro solutions', services: [ {;
  name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1, 899/month' ;
};
{;
  name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1, 299/month' ;
};
{;
  name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' ;
};
{;
  name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1, 799/month' ;
}] ;
};
> <Link href="/" className="flex items-center space-x-3 group" > <div className="relative" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" > <Rocket className="w-7 h-7 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" /> </div> <div className="hidden sm:block" > <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </h1> <p className="text-xs text-gray-400" >Future Technology Solutions</p> </div> </a> </motion && motion.div> </motion && motion.div>) ) ;
}</div> /> </div> {;
  /* Contact Button */ ;
}<motion&& motion.div initial= {  {  website: 'https://ziontechgroup && ziontechgroup.com'
}
const serviceCategories = [
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
{
  name: 'AI Emotional Intelligence Platform', href: '/services / ai - emotional - intelligence - platform', description: 'Real - time emotion analysis and response', price: '$3, 999 / month';
}
{
  name: 'AI Creativity Orchestrator', href: '/services / ai - creativity - orchestrator', description: 'Multi - model creativity fusion', price: '$5, 999 / month';
}
{
  name: 'AI Autonomous Business Manager', href: '/services / ai - autonomous - business - manager', description: 'Fully autonomous business operations', price: '$12, 999 / month';
}];
}
{
  title: '⚛️ 2029 Quantum & Emerging Tech', icon: Globe, color: 'from - indigo - 600 via - blue - 600 to - cyan - 600', description: 'Quantum computing and beyond', services: [ {
  name: 'Quantum Internet Security Gateway', href: '/services / quantum - internet - security - gateway', description: 'Unbreakable quantum encryption', price: '$15, 999 / month';
}
{
  name: 'Biotech DNA Computing Platform', href: '/services / biotech - dna - computing - platform', description: 'DNA - based computation', price: '$25, 999 / month';
}
{
  name: 'Quantum Financial Trading Platform', href: '/services / quantum - financial - trading - platform', description: 'Quantum - powered trading algorithms', price: '$35, 999 / month';
}
{
  name: 'Quantum Creativity Studio', href: '/services / quantum - creativity - studio', description: 'Quantum - enhanced creativity', price: '$1, 999 / month';
}];
}
{
  title: '🏙️ 2029 Enterprise IT Solutions', icon: Cpu, color: 'from - blue - 600 via - cyan - 600 to - teal - 600', description: 'Autonomous enterprise infrastructure', services: [ {
  name: 'AI Business Intelligence Suite', href: '/services / ai - business - intelligence - suite', description: 'Intelligent insights and analytics', price: '$2, 499 / month';
}
{
  name: 'Smart Supply Chain Optimization', href: '/services / smart - supply - chain - optimization', description: 'AI - powered supply chain intelligence', price: '$3, 999 / month';
}
{
  name: 'Intelligent HR Management System', href: '/services / intelligent - hr - management - system', description: 'AI - powered HR optimization', price: '$1, 599 / month';
}
{
  name: 'Smart Financial Management Platform', href: '/services / smart - financial - management - platform', description: 'AI - powered financial planning', price: '$2, 999 / month';
}];
}
{
  title: '🌌 2029 Space & Metaverse Tech', icon: Rocket, color: 'from - teal - 600 via - emerald - 600 to - green - 600', description: 'Space exploration and digital reality', services: [ {
  name: 'Space Mining Automation Platform', href: '/services / space - mining - automation - platform', description: 'Automated asteroid mining', price: '$45, 999 / month';
}
{
  name: 'Metaverse Digital Reality Platform', href: '/services / metaverse - digital - reality - platform', description: 'Immersive virtual worlds', price: '$8, 999 / month';
}
{
  name: 'AI Predictive Health Analytics', href: '/services / ai - predictive - health - analytics', description: 'Predictive health outcomes', price: '$7, 999 / month';
}
{
  name: 'Virtual Event Hologram Platform', href: '/services / virtual - event - hologram - platform', description: 'Holographic event experiences', price: '$2, 999 / month';
}];
}
{
  title: '🎯 2029 Innovative Micro SAAS', icon: Target, color: 'from - green - 600 via - yellow - 600 to - orange - 600', description: 'Cutting - edge micro solutions', services: [ {
  name: 'Intelligent Customer Experience Platform', href: '/services / intelligent - customer - experience - platform', description: 'AI - powered customer journey optimization', price: '$1, 899 / month';
}
{
  name: 'Intelligent Marketing Automation', href: '/services / intelligent - marketing - automation', description: 'AI - powered marketing optimization', price: '$1, 299 / month';
}
{
  name: 'Smart Project Management', href: '/services / smart - project - management', description: 'AI - powered project optimization', price: '$899 / month';
}
{
  name: 'Intelligent Sales Optimization', href: '/services / intelligent - sales - optimization', description: 'AI - powered sales intelligence', price: '$1, 799 / month';
}];
}
> <Link href="/" className="flex items - center space - x-3 group" > <div className="relative" > <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300" > <Rocket className="w - 7 h - 7 text - white" /> </div> <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" /> </div> <div className="hidden sm:block" > <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent" > Zion Tech Group </h1> <p className="text - xs text - gray - 400" >Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) );
}</div> /> </div> {
  /* Contact Button */;
}<motion.div initial= {  {  website: 'https://ziontechgroup.com';
}
;
const service_categories = [;
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from - violet - 600 via - purple - 600 to - indigo - 600',
    description: 'Next - generation AI consciousness and creativity',
    services: [;
      {
        name: 'AI Consciousness Evolution Platform',
        href: '/services / ai - consciousness - evolution - platform',
        description: 'Develop genuine AI consciousness',
        price: '$19, 999 / month',
      },
      {
        name: 'AI Emotional Intelligence Platform',
        href: '/services / ai - emotional - intelligence - platform',
        description: 'Real - time emotion analysis and response',
        price: '$3, 999 / month',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/services / ai - creativity - orchestrator',
        description: 'Multi - model creativity fusion',
        price: '$5, 999 / month',
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        name: 'AI Autonomous Business Manager',
        href: '/services / ai - autonomous - business - manager',
        description: 'Fully autonomous business operations',
        price: '$12, 999 / month',
      },
    ],
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' };
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' };
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' };
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  };
  {
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/services / ai - consciousness - evolution - platform', description: 'Develop genuine AI consciousness', price: '$19, 999 / month' }
      { name: 'AI Emotional Intelligence Platform', href: '/services / ai - emotional - intelligence - platform', description: 'Real - time emotion analysis and response', price: '$3, 999 / month' }
      { name: 'AI Creativity Orchestrator', href: '/services / ai - creativity - orchestrator', description: 'Multi - model creativity fusion', price: '$5, 999 / month' }
      { name: 'AI Autonomous Business Manager', href: '/services / ai - autonomous - business - manager', description: 'Fully autonomous business operations', price: '$12, 999 / month' }
    ];
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    description: 'Quantum computing and beyond',
<<<<<<< HEAD


      {

=======
    services: [;
      {
        name: 'Quantum Internet Security Gateway',
        href: '/services / quantum - internet - security - gateway',
        description: 'Unbreakable quantum encryption',
        price: '$15, 999 / month',
      },
      {
        name: 'Biotech DNA Computing Platform',
        href: '/services / biotech - dna - computing - platform',
        description: 'DNA - based computation',
        price: '$25, 999 / month',
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/services / quantum - financial - trading - platform',
        description: 'Quantum - powered trading algorithms',
        price: '$35, 999 / month',
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        name: 'Quantum Creativity Studio',
        href: '/services / quantum - creativity - studio',
        description: 'Quantum - enhanced creativity',
        price: '$1, 999 / month',
      },
    ],
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' };
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' };
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' };
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  };
  {
  },  {      { name: 'Quantum Internet Security Gateway', href: '/services / quantum - internet - security - gateway', description: 'Unbreakable quantum encryption', price: '$15, 999 / month' }
      { name: 'Biotech DNA Computing Platform', href: '/services / biotech - dna - computing - platform', description: 'DNA - based computation', price: '$25, 999 / month' }
      { name: 'Quantum Financial Trading Platform', href: '/services / quantum - financial - trading - platform', description: 'Quantum - powered trading algorithms', price: '$35, 999 / month' }
      { name: 'Quantum Creativity Studio', href: '/services / quantum - creativity - studio', description: 'Quantum - enhanced creativity', price: '$1, 999 / month' }
    ];
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from - blue - 600 via - cyan - 600 to - teal - 600',
    description: 'Autonomous enterprise infrastructure',
<<<<<<< HEAD


      {

=======
    services: [;
      {
        name: 'AI Business Intelligence Suite',
        href: '/services / ai - business - intelligence - suite',
        description: 'Intelligent insights and analytics',
        price: '$2, 499 / month',
      },
      {
        name: 'Smart Supply Chain Optimization',
        href: '/services / smart - supply - chain - optimization',
        description: 'AI - powered supply chain intelligence',
        price: '$3, 999 / month',
      },
      {
        name: 'Intelligent HR Management System',
        href: '/services / intelligent - hr - management - system',
        description: 'AI - powered HR optimization',
        price: '$1, 599 / month',
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        name: 'Smart Financial Management Platform',
        href: '/services / smart - financial - management - platform',
        description: 'AI - powered financial planning',
        price: '$2, 999 / month',
      },
    ],
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' };
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' };
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' };
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  };
  {
  },  {      { name: 'AI Business Intelligence Suite', href: '/services / ai - business - intelligence - suite', description: 'Intelligent insights and analytics', price: '$2, 499 / month' }
      { name: 'Smart Supply Chain Optimization', href: '/services / smart - supply - chain - optimization', description: 'AI - powered supply chain intelligence', price: '$3, 999 / month' }
      { name: 'Intelligent HR Management System', href: '/services / intelligent - hr - management - system', description: 'AI - powered HR optimization', price: '$1, 599 / month' }
      { name: 'Smart Financial Management Platform', href: '/services / smart - financial - management - platform', description: 'AI - powered financial planning', price: '$2, 999 / month' }
    ];
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from - teal - 600 via - emerald - 600 to - green - 600',
    description: 'Space exploration and digital reality',
<<<<<<< HEAD


      {

=======
    services: [;
      {
        name: 'Space Mining Automation Platform',
        href: '/services / space - mining - automation - platform',
        description: 'Automated asteroid mining',
        price: '$45, 999 / month',
      },
      {
        name: 'Metaverse Digital Reality Platform',
        href: '/services / metaverse - digital - reality - platform',
        description: 'Immersive virtual worlds',
        price: '$8, 999 / month',
      },
      {
        name: 'AI Predictive Health Analytics',
        href: '/services / ai - predictive - health - analytics',
        description: 'Predictive health outcomes',
        price: '$7, 999 / month',
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        name: 'Virtual Event Hologram Platform',
        href: '/services / virtual - event - hologram - platform',
        description: 'Holographic event experiences',
        price: '$2, 999 / month',
      },
    ],
<<<<<<< HEAD

=======
      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' };
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' };
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' };
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  };
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
<<<<<<< HEAD


      {

=======
  },  {      { name: 'Space Mining Automation Platform', href: '/services / space - mining - automation - platform', description: 'Automated asteroid mining', price: '$45, 999 / month' }
      { name: 'Metaverse Digital Reality Platform', href: '/services / metaverse - digital - reality - platform', description: 'Immersive virtual worlds', price: '$8, 999 / month' }
      { name: 'AI Predictive Health Analytics', href: '/services / ai - predictive - health - analytics', description: 'Predictive health outcomes', price: '$7, 999 / month' }
      { name: 'Virtual Event Hologram Platform', href: '/services / virtual - event - hologram - platform', description: 'Holographic event experiences', price: '$2, 999 / month' }
    ];
  }
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from - green - 600 via - yellow - 600 to - orange - 600',
    description: 'Cutting - edge micro solutions',
    services: [;
      {
        name: 'Intelligent Customer Experience Platform',
        href: '/services / intelligent - customer - experience - platform',
        description: 'AI - powered customer journey optimization',
        price: '$1, 899 / month',
      },
      {
        name: 'Intelligent Marketing Automation',
        href: '/services / intelligent - marketing - automation',
        description: 'AI - powered marketing optimization',
        price: '$1, 299 / month',
      },
      {
        name: 'Smart Project Management',
        href: '/services / smart - project - management',
        description: 'AI - powered project optimization',
        price: '$899 / month',
      },
      {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        name: 'Intelligent Sales Optimization',
        href: '/services / intelligent - sales - optimization',
        description: 'AI - powered sales intelligence',
        price: '$1, 799 / month',
      },
    ],
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' };
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' };
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' },
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
  };
  {
  },  {      { name: 'Intelligent Customer Experience Platform', href: '/services / intelligent - customer - experience - platform', description: 'AI - powered customer journey optimization', price: '$1, 899 / month' }
      { name: 'Intelligent Marketing Automation', href: '/services / intelligent - marketing - automation', description: 'AI - powered marketing optimization', price: '$1, 299 / month' }
      { name: 'Smart Project Management', href: '/services / smart - project - management', description: 'AI - powered project optimization', price: '$899 / month' },
      { name: 'Intelligent Sales Optimization', href: '/services / intelligent - sales - optimization', description: 'AI - powered sales intelligence', price: '$1, 799 / month' }
    ];
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from - orange - 600 via - red - 600 to - pink - 600',
    description: 'Breakthrough research solutions',
<<<<<<< HEAD


=======
    services: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite',
    ],
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
];
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
<<<<<<< HEAD

export default function UltraFuturisticNavigation2029V2() {

export default function UltraFuturisticNavigation2029V2() {;
=======
;
const quick_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false)
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const [isOpen, setIsOpen] = useState(false);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const mainNavigation = [
  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];
  }
];
;
const main_navigation = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
;
const quick_links = [;
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },

const _serviceCategories = [
  {_title: '🚀 2029 Futuristic AI Services', _icon: Brain, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and creativity', _services: [
      { name: 'AI Consciousness Evolution Platform', _href: '/services/ai-consciousness-evolution-platform', _description: 'Develop genuine AI consciousness', _price: '$19, _999/month'},
      {_name: 'AI Emotional Intelligence Platform', _href: '/services/ai-emotional-intelligence-platform', _description: 'Real-time emotion analysis and response', _price: '$3, _999/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/services/ai-creativity-orchestrator', _description: 'Multi-model creativity fusion', _price: '$5, _999/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/services/ai-autonomous-business-manager', _description: 'Fully autonomous business operations', _price: '$12, _999/month'}
    ]
  },
  {_title: '⚛️ 2029 Quantum & Emerging Tech', _icon: Globe, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Internet Security Gateway', _href: '/services/quantum-internet-security-gateway', _description: 'Unbreakable quantum encryption', _price: '$15, _999/month'},
      {_name: 'Biotech DNA Computing Platform', _href: '/services/biotech-dna-computing-platform', _description: 'DNA-based computation', _price: '$25, _999/month'},
      {_name: 'Quantum Financial Trading Platform', _href: '/services/quantum-financial-trading-platform', _description: 'Quantum-powered trading algorithms', _price: '$35, _999/month'},
      {_name: 'Quantum Creativity Studio', _href: '/services/quantum-creativity-studio', _description: 'Quantum-enhanced creativity', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏙️ 2029 Enterprise IT Solutions', _icon: Cpu, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'AI Business Intelligence Suite', _href: '/services/ai-business-intelligence-suite', _description: 'Intelligent insights and analytics', _price: '$2, _499/month'},
      {_name: 'Smart Supply Chain Optimization', _href: '/services/smart-supply-chain-optimization', _description: 'AI-powered supply chain intelligence', _price: '$3, _999/month'},
      {_name: 'Intelligent HR Management System', _href: '/services/intelligent-hr-management-system', _description: 'AI-powered HR optimization', _price: '$1, _599/month'},
      {_name: 'Smart Financial Management Platform', _href: '/services/smart-financial-management-platform', _description: 'AI-powered financial planning', _price: '$2, _999/month'}
    ]
  },
  {_title: '🌌 2029 Space & Metaverse Tech', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Space exploration and digital reality', _services: [
      { name: 'Space Mining Automation Platform', _href: '/services/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$45, _999/month'},
      {_name: 'Metaverse Digital Reality Platform', _href: '/services/metaverse-digital-reality-platform', _description: 'Immersive virtual worlds', _price: '$8, _999/month'},
      {_name: 'AI Predictive Health Analytics', _href: '/services/ai-predictive-health-analytics', _description: 'Predictive health outcomes', _price: '$7, _999/month'},
      {_name: 'Virtual Event Hologram Platform', _href: '/services/virtual-event-hologram-platform', _description: 'Holographic event experiences', _price: '$2, _999/month'}
    ]
  },
  {_title: '🎯 2029 Innovative Micro SAAS', _icon: Target, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Cutting-edge micro solutions', _services: [
      { name: 'Intelligent Customer Experience Platform', _href: '/services/intelligent-customer-experience-platform', _description: 'AI-powered customer journey optimization', _price: '$1, _899/month'},
      {_name: 'Intelligent Marketing Automation', _href: '/services/intelligent-marketing-automation', _description: 'AI-powered marketing optimization', _price: '$1, _299/month'},
      {_name: 'Smart Project Management', _href: '/services/smart-project-management', _description: 'AI-powered project optimization', _price: '$899/month'},
      {_name: 'Intelligent Sales Optimization', _href: '/services/intelligent-sales-optimization', _description: 'AI-powered sales intelligence', _price: '$1, _799/month'}
    ]
  },
  {
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
],

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },

  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: MessageCircle }
=======
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
{
  name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3, 999/month'
}
{
  name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5, 999/month'
}
{
  name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12, 999/month'
}]
}
{
  title: '⚛️ 2029 Quantum & Emerging Tech', icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', description: 'Quantum computing and beyond', services: [ {
  name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15, 999/month'
}
{
  name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25, 999/month'
}
{
  name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35, 999/month'
}
{
  name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1, 999/month'
}]
}
{
  title: '🏙️ 2029 Enterprise IT Solutions', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', description: 'Autonomous enterprise infrastructure', services: [ {
  name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2, 499/month'
}
{
  name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3, 999/month'
}
{
  name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1, 599/month'
}
{
  name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2, 999/month'
}]
}
{
  title: '🌌 2029 Space & Metaverse Tech', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', description: 'Space exploration and digital reality', services: [ {
  name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45, 999/month'
}
{
  name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8, 999/month'
}
{
  name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7, 999/month'
}
{
  name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2, 999/month'
}]
}
{
  title: '🎯 2029 Innovative Micro SAAS', icon: Target, color: 'from-green-600 via-yellow-600 to-orange-600', description: 'Cutting-edge micro solutions', services: [ {
  name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1, 899/month'
}
{
  name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1, 299/month'
}
{
  name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month'
}
{
  name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1, 799/month'
}]
}
> <Link href="/" className="flex items-center space-x-3 group" > <div className="relative" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" > <Rocket className="w-7 h-7 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" /> </div> <div className="hidden sm:block" > <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </h1> <p className="text-xs text-gray-400" >Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) )
}</div> /> </div> {
  /* Contact Button */
}<motion.div initial= {  {  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
    title: '🚀 2029 Futuristic AI Services'
    icon: Brain
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and creativity'
    services: [
      {
        name: 'AI Consciousness Evolution Platform'
        href: '/services/ai-consciousness-evolution-platform'
        description: 'Develop genuine AI consciousness'
        price: '$19,999/month'
      }
      {
        name: 'AI Emotional Intelligence Platform'
        href: '/services/ai-emotional-intelligence-platform'
        description: 'Real-time emotion analysis and response'
        price: '$3,999/month'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/services/ai-creativity-orchestrator'
        description: 'Multi-model creativity fusion'
        price: '$5,999/month'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/services/ai-autonomous-business-manager'
        description: 'Fully autonomous business operations'
        price: '$12,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' }
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' }
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' }
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  }
    title: '⚛️ 2029 Quantum & Emerging Tech'
    icon: Globe
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: 'Quantum computing and beyond'
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: '/services/quantum-internet-security-gateway'
        description: 'Unbreakable quantum encryption'
        price: '$15,999/month'
      }
      {
        name: 'Biotech DNA Computing Platform'
        href: '/services/biotech-dna-computing-platform'
        description: 'DNA-based computation'
        price: '$25,999/month'
      }
      {
        name: 'Quantum Financial Trading Platform'
        href: '/services/quantum-financial-trading-platform'
        description: 'Quantum-powered trading algorithms'
        price: '$35,999/month'
      }
      {
        name: 'Quantum Creativity Studio'
        href: '/services/quantum-creativity-studio'
        description: 'Quantum-enhanced creativity'
        price: '$1,999/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' }
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' }
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' }
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  }
    title: '🏙️ 2029 Enterprise IT Solutions'
    icon: Cpu
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: 'AI Business Intelligence Suite'
        href: '/services/ai-business-intelligence-suite'
        description: 'Intelligent insights and analytics'
        price: '$2,499/month'
      }
      {
        name: 'Smart Supply Chain Optimization'
        href: '/services/smart-supply-chain-optimization'
        description: 'AI-powered supply chain intelligence'
        price: '$3,999/month'
      }
      {
        name: 'Intelligent HR Management System'
        href: '/services/intelligent-hr-management-system'
        description: 'AI-powered HR optimization'
        price: '$1,599/month'
      }
      {
        name: 'Smart Financial Management Platform'
        href: '/services/smart-financial-management-platform'
        description: 'AI-powered financial planning'
        price: '$2,999/month'
      }
    ]
  },  {      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' }
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' }
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' }
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  }
    title: '🌌 2029 Space & Metaverse Tech'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: 'Space exploration and digital reality'
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: '/services/space-mining-automation-platform'
        description: 'Automated asteroid mining'
        price: '$45,999/month'
      }
      {
        name: 'Metaverse Digital Reality Platform'
        href: '/services/metaverse-digital-reality-platform'
        description: 'Immersive virtual worlds'
        price: '$8,999/month'
      }
      {
        name: 'AI Predictive Health Analytics'
        href: '/services/ai-predictive-health-analytics'
        description: 'Predictive health outcomes'
        price: '$7,999/month'
      }
      {
        name: 'Virtual Event Hologram Platform'
        href: '/services/virtual-event-hologram-platform'
        description: 'Holographic event experiences'
        price: '$2,999/month'
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' }
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' }
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  }
    title: '🎯 2029 Innovative Micro SAAS'
    icon: Target
    color: 'from-green-600 via-yellow-600 to-orange-600'
    description: 'Cutting-edge micro solutions'
    services: [
      {
        name: 'Intelligent Customer Experience Platform'
        href: '/services/intelligent-customer-experience-platform'
        description: 'AI-powered customer journey optimization'
        price: '$1,899/month'
      }
      {
        name: 'Intelligent Marketing Automation'
        href: '/services/intelligent-marketing-automation'
        description: 'AI-powered marketing optimization'
        price: '$1,299/month'
      }
      {
        name: 'Smart Project Management'
        href: '/services/smart-project-management'
        description: 'AI-powered project optimization'
        price: '$899/month'
      }
      {
        name: 'Intelligent Sales Optimization'
        href: '/services/intelligent-sales-optimization'
        description: 'AI-powered sales intelligence'
        price: '$1,799/month'
      }
    ]
  },  {      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' }
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' }
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' }
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
  }
    title: '🔬 2029 Research & Development'
    icon: Eye
    color: 'from-orange-600 via-red-600 to-pink-600'
    description: 'Breakthrough research solutions'
    services: [
      'Advanced Research Automation'
      'Quantum Research Platform'
      'AI Research Assistant'
      'Biotech Research Suite'
    ]
  },];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
];
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain }
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe }
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu }
  { name: 'Space Tech', href: '/space-tech', icon: Rocket }
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target }
  { name: 'Innovations', href: '/innovations', icon: Sparkles }
  { name: 'About', href: '/about', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users }
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
  { name: 'Blog', href: '/blog', icon: BookOpen }
  { name: 'News', href: '/news', icon: TrendingUp }
  { name: 'Careers', href: '/careers', icon: GraduationCap }
  { name: 'Support', href: '/support', icon: MessageCircle },];  { name: 'Support', href: '/support', icon: MessageCircle }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
];

export default function UltraFuturisticNavigation2029V2() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false)
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function UltraFuturisticNavigation2029V2() {;
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>
      {/* Main Navigation Bar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>          {/* Logo */}    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
=======
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
<<<<<<< HEAD
          {/* Logo */}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
            className='flex-shrink-0'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
className="flex-shrink-0"
          >
=======
            className='flex-shrink-0'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">;
            {mainNavigation && mainNavigation.map((item) => (;
              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

=======
                transition={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                }}
                className='relative group';
                <Link;
                  href={item.href}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion && motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />;
              </motion && motion.div>;

            ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion && motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />;
              </motion && motion.div>;
            ))}
          </div>;
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items-center space-x-4'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
<<<<<<< HEAD


=======
                onChange={e => setSearchQuery(e && e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
=======
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                transition={{ duration: 0.5, delay: mainNavigation.indexOf(item) * 0.1 }}
className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10"
                >
                  <item.icon className="w-4 h-4" />
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                transition={{
                  duration: 0.5
                  delay: mainNavigation.indexOf(item) * 0.1
                }}
                className='relative group'
                <Link
                  href={item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10'
                >
                  <item.icon className='w-4 h-4' />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <span>{item.name}</span>
                </Link>
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.div>

            ))}
          </div>
          {/* Right side - Contact & Search */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
=======
          <div className='hidden lg:flex items-center space-x-4'>

              </motion.div>

            ))}
          </div>

          {/* Right side - Contact & Search */}
<<<<<<< HEAD

          <div className="hidden lg:flex items-center space-x-4">
=======
          <div className='hidden lg:flex items-center space-x-4'>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />            {/* Search */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
<<<<<<< HEAD


=======
                onChange={e => setSearchQuery(e.target.value)}

                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />

=======
<<<<<<< HEAD
                onChange={(e) => setSearchQuery(e && e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64";
              />;
            </div>;
=======
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64"
              />
            </div>
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              />

            </div>

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {/* Contact Button */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.5 }}>;
              <Link
<<<<<<< HEAD


=======
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                <MessageCircle className='w-4 h-4 mr-2' />                Get Started                href="/contact";
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";
              >;
                <MessageCircle className="w-4 h-4 mr-2" />;
              </Link>;
            </motion && motion.div>;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>;
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
className='flex items - center space - x-2 px - 4 py - 2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 rounded - lg hover:bg - cyan - 500 / 10';
                >;
                  <item.icon className='w - 4 h - 4' />;
                  <span>{item.name}</span>;
                </Link>;
                {/* Hover effect */}
                <div className='absolute bottom - 0 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 400 to - purple - 500 group - hover:w - full transition - all duration - 300' />              </motion.div>                <div className="absolute bottom - 0 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 400 to - purple - 500 group - hover:w - full transition - all duration - 300" />;
              </motion.div>))}
          </div>;
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items - center space - x-4'>;
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_query}
                on_change={e => setSearchQuery (e.target.value)}
                className='pl - 10 pr - 4 py - 2 bg - gray - 900 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 w - 64'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_query}
                on_change={(e) => setSearchQuery (e.target.value)}
                className="pl - 10 pr - 4 py - 2 bg - gray - 900 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 w - 64";
              />;
            </div>;
            {/* Contact Button */}
            <motion.div;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >;
              <Link;
                href='/contact';
                className='inline - flex items - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25';
              >;
                <MessageCircle className='w - 4 h - 4 mr - 2' />                Get Started                href="/contact";
                className="inline - flex items - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25";
              >;
                <MessageCircle className="w - 4 h - 4 mr - 2" />;
              </Link>;
            </motion.div>;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>;
            <button;
              on_click={toggle_menu}
              className='p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 transition - colors duration - 300';
            >;
              {is_open ? (
                <X className='w - 6 h - 6' />) : (
                <Menu className='w - 6 h - 6' />)}            </button>            <button;
              on_click={toggle_menu}
              className="p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 transition - colors duration - 300";
            >;
              {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <div className='px-4 py-6 space-y-4'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>;
                {mainNavigation && mainNavigation.map(item => (                  <Link
                    key={item && item.name}
                    href={item && item.href}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'

          >
            <div className='px-4 py-6 space-y-4'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
<<<<<<< HEAD

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;


=======
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (                  <Link
                    key={item.name}
                    href={item.href}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
<<<<<<< HEAD


              {/* Mobile Navigation Links */}

=======
              <div className="space-y-2">
                {mainNavigation.map((item) => (

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;
              {/* Mobile Navigation Links */}
<<<<<<< HEAD
              <div className="space-y-2">
=======
              <div className='space-y-2'>
                {mainNavigation.map(item => (              <div className="space-y-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {mainNavigation.map((item) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                  >
                    <item.icon className='w-5 h-5' />                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
<<<<<<< HEAD

=======
                  </Link>
                ))}
              </div>

                  </Link>
                ))}
              </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
=======
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                  >
                    <item.icon className='w-5 h-5' />                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
<<<<<<< HEAD
                  </Link>
                ))}
<<<<<<< HEAD
              </div>;
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>

                  </Link>
                ))}
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-700">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((item) => (
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
<<<<<<< HEAD

=======


                ))}

              </div>;


=======


                  </Link>
                ))}
              </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Quick Links */}

=======
<<<<<<< HEAD
className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
=======
<<<<<<< HEAD
                      className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>                      className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
=======

                    </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

                  ))}
                </div>
              </div>

<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {/* Contact Info */}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {/* Contact Info */}
<<<<<<< HEAD
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Contact Info</h3>
                <div className="space-y-2 px-4">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Contact Info
                </h3>
                <div className='space-y-2 px-4'>
                  <div className='flex items-center space-x-3 text-gray-400'>
                    <Phone className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.mobile}</span>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

                </div>;
              </div>;


=======
<<<<<<< HEAD
                </div>;
              </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

      </AnimatePresence>;


=======
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      </AnimatePresence>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.3 }}
            className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'
<<<<<<< HEAD

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>
                    <div className='flex items-center space-x-3'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      <div

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            className='absolute top - full left - 0 right - 0 bg - gray - 900 / 95 backdrop - blur - xl border - t border - cyan - 500 / 20 z - 40';
          >;
            <div className='max - w-7xl mx - auto px - 4 py - 8'>;
              <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8'>;
                {service_categories.map (category => (
                  <div key={category.title} className='space - y-4'>;
                    <div className='flex items - center space - x-3'>;
                      <div;
                        className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}
                      >;
                        <category.icon className='w - 5 h - 5 text - white' />;
                      </div>;
                      <div>;
                        <h3 className='text - lg font - semibold text - white'>;
<<<<<<< HEAD

=======
=======
            className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-white'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          {category.title}
                        </h3>;
                        <p className='text - sm text - gray - 400'>;
                          {category.description}
<<<<<<< HEAD

            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >

=======
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {category.services.map((service, index) => (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                    <div className='space-y-3'>                      {category && category.services.map((service, index) => (;
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
            <div className="max-w-7xl mx-auto px-4 py-8">;
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
                {serviceCategories && serviceCategories.map((category) => (;
                  <div key={category && category.title} className="space-y-4">;
                    <div className="flex items-center space-x-3">;
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                        <category && category.icon className="w-5 h-5 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-lg font-semibold text-white">{category && category.title}</h3>;
                        <p className="text-sm text-gray-400">{category && category.description}</p>;
                      </div>;
                    </div>;
                    <div className="space-y-3">;
                      {category && category.services.map((service, index) => (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
                          <div className='flex justify-between items-start'>;
                            <div>;
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                                {service && service.name}
                              </h4>;
                              <p className='text-sm text-gray-400 mt-1'>;
                                {service && service.description}
                              </p>;
                            </div>;
                            <span className='text-sm font-semibold text-cyan-400'>;
                              {service && service.price}
                            </span>                          </div>                        >;
                          <div className="flex justify-between items-start">;
                            <div>;
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">;
                                {service && service.name}
                              </h4>;
                              <p className="text-sm text-gray-400 mt-1">{service && service.description}</p>;
                            </div>;
                            <span className="text-sm font-semibold text-cyan-400">{service && service.price}</span>;
                          </div>;
                        </Link>;
<<<<<<< HEAD

=======
                        <Link
                          key={service.name}
                          href={service.href}
<<<<<<< HEAD

                        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                        <Link
                          key={service.name}
                          href={service.href}
<<<<<<< HEAD
                          className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group"
                        >
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'
                        >
                          <div className='flex justify-between items-start'>
                            <div>
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'>
                                {service.name}
                              </h4>
                              <p className='text-sm text-gray-400 mt-1'>
                                {service.description}
                              </p>
                            </div>
                            <span className='text-sm font-semibold text-cyan-400'>
                              {service.price}
                            </span>                          </div>                        >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                            <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                          </div>

                          </div>

                        </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      ))}
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </AnimatePresence>
    </nav>

}

}

  );
}

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </AnimatePresence>;
    </nav>;
  );
=======

  );

}
=======

}
  );
}
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      </AnimatePresence>
    </nav>
);
  );
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
