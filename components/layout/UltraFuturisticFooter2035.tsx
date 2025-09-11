<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

import {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Zap
  Globe
  Phone
  Mail
  MapPin
  ArrowRight
  Brain
  Atom
  Shield
  Rocket
  Target
  BookOpen
  Users
  Star
  Sparkles
  Cpu
  Lock
  Cloud
  BarChart3
  Settings
  Eye
  Award
  Clock
  Heart
  Lightbulb
  Twitter
  Linkedin
  Facebook
  Instagram
  Youtube
  Github
  MessageCircle
  MessageSquare
  ArrowUp
  ExternalLink
  Building
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
  HelpCircle
  FileText
  Video
  Headphones;} from 'lucide-react';import {
  Zap, Globe, Phone, Mail, MapPin, ArrowRight

<<<<<<< HEAD
=======

import React from 'react';


import Link from 'next/link';
import { motion } from 'framer-motion';

import {


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
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Zap,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  BookOpen,
  Users,
  Star,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github,
  MessageCircle,
  MessageSquare,
  ArrowUp,
  ExternalLink,
  Building,
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
  HelpCircle,
  FileText,
<<<<<<< HEAD
<<<<<<< HEAD
  Video,
  Headphones,;} from 'lucide-react';import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Video,;
  Headphones,;} from 'lucide-react';import {
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, ;
  Video,
  Headphones,;} from 'lucide-react';import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users;
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare;
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2;
<<<<<<< HEAD
<<<<<<< HEAD
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
=======


  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {

    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',

  {
<<<<<<< HEAD

    title: 'Industry Solutions',


<<<<<<< HEAD
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const footer_sections = [;
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className='w - 5 h - 5 text - yellow - 400' />,
    links: [;
      {
        name: 'AI Customer Success Platform',
        href: '/ai - customer - success - platform',
        featured: true,
      },
      {
        name: 'Supply Chain Optimization',
        href: '/intelligent - supply - chain - optimization',
        featured: true,
      },
      {
        name: 'AI Financial Planning',
        href: '/ai - financial - planning - platform',
        featured: true,
      },
      {
        name: 'AI Sales Intelligence',
        href: '/ai - sales - intelligence - platform',
        featured: true,
      },
      { name: 'HR Analytics Platform', href: '/ai - hr - analytics - platform' },
      { name: 'AI Decision Engine', href: '/ai - powered - decision - engine' },
      {
        name: 'Content Automation',
        href: '/intelligent - content - automation - platform',
      },
      { name: 'CRM Intelligence Suite', href: '/smart - crm - intelligence - suite' },
      {
        name: 'AI Evaluation Orchestrator',
        href: '/ai - evaluation - orchestrator',
        featured: true,
      },      { name: 'SEO Automation Suite', href: '/seo - automation - suite' },    links: [;
      { name: 'AI Customer Success Platform', href: '/ai - customer - success - platform', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent - supply - chain - optimization', featured: true },
      { name: 'AI Financial Planning', href: '/ai - financial - planning - platform', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', featured: true },
      { name: 'HR Analytics Platform', href: '/ai - hr - analytics - platform' },
      { name: 'AI Decision Engine', href: '/ai - powered - decision - engine' },
      { name: 'Content Automation', href: '/intelligent - content - automation - platform' },
      { name: 'CRM Intelligence Suite', href: '/smart - crm - intelligence - suite' },
      { name: 'AI Evaluation Orchestrator', href: '/ai - evaluation - orchestrator', featured: true },
      { name: 'SEO Automation Suite', href: '/seo - automation - suite' },
      { name: 'Helpdesk & Support', href: '/helpdesk - automation' },
      { name: 'Learning Management (LMS)', href: '/lms - platform' },
      { name: 'E‑commerce Returns', href: '/ecommerce - returns - management' },
      { name: 'SEO Content Optimizer', href: '/seo - content - optimizer' },
      { name: 'Keyword Research Engine', href: '/keyword - research - engine' },
      { name: 'Privacy Analytics Suite', href: '/analytics - suite' },
      { name: 'Invoice Studio', href: '/invoice - studio' },
      { name: 'IT Asset Discovery Agent', href: '/it - asset - discovery - agent' },
      { name: 'Managed Postgres HA', href: '/managed - postgres - ha' },
    ],
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className='w - 5 h - 5 text - cyan - 400' />,
    links: [;
      {
        name: 'AI Consciousness Evolution',
        href: '/ai - consciousness - evolution - 2029',
      },
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network' },
      {
        name: 'AI Autonomous Business Operations',
        href: '/ai - autonomous - business - operations',
      },
      {
        name: 'AI Autonomous Research',
        href: '/ai - autonomous - research - assistant',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai - emotional - intelligence - training',
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai - predictive - maintenance - platform',
      },
      {
        name: 'AI Content Personalization',
        href: '/ai - content - personalization - engine',
      },
      {
        name: 'AI Autonomous Ecosystem',
        href: '/ai - autonomous - ecosystem - manager',
      },
      {
        name: 'AI Ethics & Governance',
        href: '/ai - ethics - governance - framework',
      },
    ],
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className='w - 5 h - 5 text - blue - 400' />,
    links: [;
      {
        name: 'Space Resource Mining',
        href: '/space - resource - mining - platform',
      },
      {
        name: 'Quantum Internet Security',
        href: '/quantum - internet - security - platform',
      },
      {
        name: 'Quantum - Secure Cloud Infrastructure',
        href: '/quantum - secure - cloud - infrastructure',
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum - financial - trading',
      },
      {
        name: 'AI - Powered Space Technology',
        href: '/ai - powered - space - technology',
      },
      {
        name: 'Brain - Computer Interface',
        href: '/brain - computer - interface - platform',
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum - materials - discovery - platform',
      },
      {
        name: 'Autonomous Vehicle AI',
        href: '/autonomous - vehicle - ai - platform',
      },
      {
        name: 'Quantum Bio - Computing',
        href: '/quantum - bio - computing - platform',
      },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform' },
      { name: 'Quantum Robotics', href: '/quantum - robotics' },
    ],
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className='w - 5 h - 5 text - purple - 400' />,
    links: [;
      {
        name: 'Quantum - Secure Cloud',
        href: '/quantum - secure - cloud - infrastructure',
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous - it - operations - center',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge - computing - orchestration',
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain - infrastructure - platform',
      },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops - platform' },
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum - cloud - infrastructure',
      },
      { name: 'Zero Trust Security', href: '/zero - trust - security - platform' },
      { name: 'AI - Powered Cybersecurity', href: '/ai - powered - cybersecurity' },
    ],
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
icon: <Rocket className='w - 5 h - 5 text - emerald - 400' />,    links: [;
      { name: 'AI Content Generator', href: '/ai - content - generator' },
      { name: 'AI Code Review', href: '/ai - code - review' },
      { name: 'AI Meeting Transcriber', href: '/ai - meeting - transcriber - pro' },  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w - 5 h - 5 text - cyan - 400" />,
    links: [;
      { name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2029' },
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network' },
      { name: 'AI Autonomous Business Operations', href: '/ai - autonomous - business - operations' },
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training' },
      { name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform' },
      { name: 'AI Content Personalization', href: '/ai - content - personalization - engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework' }
    ];
  }
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w - 5 h - 5 text - blue - 400" />,
    links: [;
      { name: 'Space Resource Mining', href: '/space - resource - mining - platform' },
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - platform' },
      { name: 'Quantum - Secure Cloud Infrastructure', href: '/quantum - secure - cloud - infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading' },
      { name: 'AI - Powered Space Technology', href: '/ai - powered - space - technology' },
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform' },
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform' },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform' },
      { name: 'Quantum Robotics', href: '/quantum - robotics' }
    ];
  }
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w - 5 h - 5 text - purple - 400" />,
    links: [;
      { name: 'Quantum - Secure Cloud', href: '/quantum - secure - cloud - infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous - it - operations - center' },
      { name: 'Edge Computing Orchestration', href: '/edge - computing - orchestration' },
      { name: 'Blockchain Infrastructure', href: '/blockchain - infrastructure - platform' },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops - platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum - cloud - infrastructure' },
      { name: 'Zero Trust Security', href: '/zero - trust - security - platform' },
      { name: 'AI - Powered Cybersecurity', href: '/ai - powered - cybersecurity' }
    ];
  }
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w - 5 h - 5 text - emerald - 400" />,
    links: [;
      { name: 'AI Content Generator', href: '/ai - content - generator' },
      { name: 'AI Code Review', href: '/ai - code - review' },
      { name: 'AI Meeting Transcriber', href: '/ai - meeting - transcriber - pro' },
      {
        name: 'AI Legal Contract Analyzer',
        href: '/ai - legal - contract - analyzer',
      },
      { name: 'AI Sales Automation', href: '/ai - sales - automation' },
      { name: 'AI HR Recruitment', href: '/ai - hr - recruitment' },
      { name: 'AI Customer Service', href: '/ai - customer - service' },
    ],
  },
  {
    title: 'Industry Solutions',
    description: 'Industry - specific technology solutions',
    icon: <Building className='w - 5 h - 5 text - orange - 400' />,    links: [    icon: <Building className="w - 5 h - 5 text - orange - 400" />,
    links: [;
      { name: 'Healthcare Solutions', href: '/healthcare - solutions' },
      { name: 'Financial Services', href: '/financial - solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing - ai - solutions' },
      { name: 'Retail Technology', href: '/retail - technology - solutions' },
      { name: 'Education Technology', href: '/education - technology - solutions' },
      {
        name: 'Government Solutions',
        href: '/government - technology - solutions',
      },
      { name: 'Energy & Utilities', href: '/energy - utilities - solutions' },
      { name: 'Biotech AI Research', href: '/biotech - ai - research - platform' },
    ],
  },
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
icon: <BookOpen className='w - 5 h - 5 text - cyan - 400' />,    links: [      { name: 'Energy & Utilities', href: '/energy - utilities - solutions' },
      { name: 'Biotech AI Research', href: '/biotech - ai - research - platform' }
    ];
  }
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
    icon: <BookOpen className='w - 5 h - 5 text - cyan - 400' />,    description: 'Documentation, support, and learning';
    icon: <BookOpen className="w - 5 h - 5 text - cyan - 400" />,
    links: [;
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api - documentation' },
      { name: 'Case Studies', href: '/case - studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};
const footerSections = [;
  {;
    title: 'Featured Services',;
    description: 'Our most popular and innovative solutions',;
    icon: <Star className='w-5 h-5 text-yellow-400' />,;
    links: [;
      {;
        name: 'AI Customer Success Platform',;
        href: '/ai-customer-success-platform',;
        featured: true,;
      },;
      {;
        name: 'Supply Chain Optimization',;
        href: '/intelligent-supply-chain-optimization',;
        featured: true,;
      },;
      {;
        name: 'AI Financial Planning',;
        href: '/ai-financial-planning-platform',;
        featured: true,;
      },;
      {;
        name: 'AI Sales Intelligence',;
        href: '/ai-sales-intelligence-platform',;
        featured: true,;
      },;
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },;
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },;
      {;
        name: 'Content Automation',;
        href: '/intelligent-content-automation-platform',;
      },;
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },;
      {;
        name: 'AI Evaluation Orchestrator',;
        href: '/ai-evaluation-orchestrator',;
        featured: true,;
      },      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },    links: [;
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },;
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', featured: true },;
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', featured: true },;
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },;
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },;
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },;
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },;
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },;
      { name: 'AI Evaluation Orchestrator', href: '/ai-evaluation-orchestrator', featured: true },;
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },;
      { name: 'Helpdesk & Support', href: '/helpdesk-automation' },;
      { name: 'Learning Management (LMS)', href: '/lms-platform' },;
      { name: 'E‑commerce Returns', href: '/ecommerce-returns-management' },;
      { name: 'SEO Content Optimizer', href: '/seo-content-optimizer' },;
      { name: 'Keyword Research Engine', href: '/keyword-research-engine' },;
      { name: 'Privacy Analytics Suite', href: '/analytics-suite' },;
      { name: 'Invoice Studio', href: '/invoice-studio' },;
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },;
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' },;
    ],;
  },;
  {;
    title: 'AI & Consciousness',;
    description: 'Revolutionary AI platforms and solutions',;
    icon: <Brain className='w-5 h-5 text-cyan-400' />,;
    links: [;
      {;
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-2029',;
      },;
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },;
      {;
        name: 'AI Autonomous Business Operations',;
        href: '/ai-autonomous-business-operations',;
      },;
      {;
        name: 'AI Autonomous Research',;
        href: '/ai-autonomous-research-assistant',;
      },;
      {;
        name: 'AI Emotional Intelligence',;
        href: '/ai-emotional-intelligence-training',;
      },;
      {;
        name: 'AI Predictive Maintenance',;
        href: '/ai-predictive-maintenance-platform',;
      },;
      {;
        name: 'AI Content Personalization',;
        href: '/ai-content-personalization-engine',;
      },;
      {;
        name: 'AI Autonomous Ecosystem',;
        href: '/ai-autonomous-ecosystem-manager',;
      },;
      {;
        name: 'AI Ethics & Governance',;
        href: '/ai-ethics-governance-framework',;
      },;
    ],;
  },;
  {;
    title: 'Quantum & Emerging Tech',;
    description: 'Breakthrough quantum and space technologies',;
    icon: <Atom className='w-5 h-5 text-blue-400' />,;
    links: [;
      {;
        name: 'Space Resource Mining',;
        href: '/space-resource-mining-platform',;
      },;
      {;
        name: 'Quantum Internet Security',;
        href: '/quantum-internet-security-platform',;
      },;
      {;
        name: 'Quantum-Secure Cloud Infrastructure',;
        href: '/quantum-secure-cloud-infrastructure',;
      },;
      {;
        name: 'Quantum Financial Trading Platform',;
        href: '/quantum-financial-trading',;
      },;
      {;
        name: 'AI-Powered Space Technology',;
        href: '/ai-powered-space-technology',;
      },;
      {;
        name: 'Brain-Computer Interface',;
        href: '/brain-computer-interface-platform',;
      },;
      {;
        name: 'Quantum Materials Discovery',;
        href: '/quantum-materials-discovery-platform',;
      },;
      {;
        name: 'Autonomous Vehicle AI',;
        href: '/autonomous-vehicle-ai-platform',;
      },;
      {;
        name: 'Quantum Bio-Computing',;
        href: '/quantum-bio-computing-platform',;
      },;
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },;
      { name: 'Quantum Robotics', href: '/quantum-robotics' },;
    ],;
  },;
  {;
    title: 'Enterprise IT',;
    description: 'Advanced enterprise infrastructure solutions',;
    icon: <Shield className='w-5 h-5 text-purple-400' />,;
    links: [;
      {;
        name: 'Quantum-Secure Cloud',;
        href: '/quantum-secure-cloud-infrastructure',;
      },;
      {;
        name: 'Autonomous IT Operations',;
        href: '/autonomous-it-operations-center',;
      },;
      {;
        name: 'Edge Computing Orchestration',;
        href: '/edge-computing-orchestration',;
      },;
      {;
        name: 'Blockchain Infrastructure',;
        href: '/blockchain-infrastructure-platform',;
      },;
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },;
      {;
        name: 'Quantum Cloud Infrastructure',;
        href: '/quantum-cloud-infrastructure',;
      },;
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },;
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' },;
    ],;
  },;
  {;
    title: 'Micro SAAS',;
    description: 'Innovative business solutions for modern enterprises',;
    icon: <Rocket className='w-5 h-5 text-emerald-400' />,    links: [;
      { name: 'AI Content Generator', href: '/ai-content-generator' },;
      { name: 'AI Code Review', href: '/ai-code-review' },;
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },  {;
    title: 'AI & Consciousness',;
    description: 'Revolutionary AI platforms and solutions',;
    icon: <Brain className="w-5 h-5 text-cyan-400" />,;
    links: [;
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },;
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },;
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },;
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },;
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },;
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },;
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },;
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },;
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ];
  };
  {;
    title: 'Quantum & Emerging Tech',;
    description: 'Breakthrough quantum and space technologies',;
    icon: <Atom className="w-5 h-5 text-blue-400" />,;
    links: [;
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },;
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },;
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },;
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },;
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },;
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },;
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },;
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },;
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },;
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },;
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ];
  };
  {;
    title: 'Enterprise IT',;
    description: 'Advanced enterprise infrastructure solutions',;
    icon: <Shield className="w-5 h-5 text-purple-400" />,;
    links: [;
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },;
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },;
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },;
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },;
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },;
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },;
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },;
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ];
  };
  {;
    title: 'Micro SAAS',;
    description: 'Innovative business solutions for modern enterprises',;
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,;
    links: [;
      { name: 'AI Content Generator', href: '/ai-content-generator' },;
      { name: 'AI Code Review', href: '/ai-code-review' },;
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },;
      {;
        name: 'AI Legal Contract Analyzer',;
        href: '/ai-legal-contract-analyzer',;
      },;
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },;
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },;
      { name: 'AI Customer Service', href: '/ai-customer-service' },;
    ],;
  },;
  {;
    title: 'Industry Solutions',;
    description: 'Industry-specific technology solutions',;
    icon: <Building className='w-5 h-5 text-orange-400' />,    links: [    icon: <Building className="w-5 h-5 text-orange-400" />,;
    links: [;
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },;
      { name: 'Financial Services', href: '/financial-solutions' },;
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },;
      { name: 'Retail Technology', href: '/retail-technology-solutions' },;
      { name: 'Education Technology', href: '/education-technology-solutions' },;
      {;
        name: 'Government Solutions',;
        href: '/government-technology-solutions',;
      },;
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },;
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' },;
    ],;
  },;
  {;
    title: 'Resources',;
    description: 'Documentation, support, and learning',;
    icon: <BookOpen className='w-5 h-5 text-cyan-400' />,    links: [      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },;
=======
    title: 'Quantum & Emerging Tech'
    description: 'Breakthrough quantum and space technologies'
    icon: <Atom className='w-5 h-5 text-blue-400' />
    links: [
      {
        name: 'Space Resource Mining'
        href: '/space-resource-mining-platform'
      }
      {
        name: 'Quantum Internet Security'
        href: '/quantum-internet-security-platform'
      }
      {
        name: 'Quantum-Secure Cloud Infrastructure'
        href: '/quantum-secure-cloud-infrastructure'
      }
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading'
      }
      {
        name: 'AI-Powered Space Technology'
        href: '/ai-powered-space-technology'
      }
      {
        name: 'Brain-Computer Interface'
        href: '/brain-computer-interface-platform'
      }
      {
        name: 'Quantum Materials Discovery'
        href: '/quantum-materials-discovery-platform'
      }
      {
        name: 'Autonomous Vehicle AI'
        href: '/autonomous-vehicle-ai-platform'
      }
      {
        name: 'Quantum Bio-Computing'
        href: '/quantum-bio-computing-platform'
      }
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  }
  {
    title: 'Enterprise IT'
    description: 'Advanced enterprise infrastructure solutions'
    icon: <Shield className='w-5 h-5 text-purple-400' />
    links: [
      {
        name: 'Quantum-Secure Cloud'
        href: '/quantum-secure-cloud-infrastructure'
      }
      {
        name: 'Autonomous IT Operations'
        href: '/autonomous-it-operations-center'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration'
      }
      {
        name: 'Blockchain Infrastructure'
        href: '/blockchain-infrastructure-platform'
      }
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' }
      {
        name: 'Quantum Cloud Infrastructure'
        href: '/quantum-cloud-infrastructure'
      }
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' }
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  }
  {
    title: 'Micro SAAS'
    description: 'Innovative business solutions for modern enterprises'
    icon: <Rocket className='w-5 h-5 text-emerald-400' />,    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' }
      { name: 'AI Code Review', href: '/ai-code-review' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },  {
    title: 'AI & Consciousness'
    description: 'Revolutionary AI platforms and solutions'
    icon: <Brain className="w-5 h-5 text-cyan-400" />
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' }
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' }
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' }
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' }
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' }
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' }
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' }
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  }
  {
    title: 'Quantum & Emerging Tech'
    description: 'Breakthrough quantum and space technologies'
    icon: <Atom className="w-5 h-5 text-blue-400" />
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' }
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' }
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' }
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' }
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' }
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' }
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' }
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' }
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' }
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  }
  {
    title: 'Enterprise IT'
    description: 'Advanced enterprise infrastructure solutions'
    icon: <Shield className="w-5 h-5 text-purple-400" />
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' }
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' }
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' }
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  }
  {
    title: 'Micro SAAS'
    description: 'Innovative business solutions for modern enterprises'
    icon: <Rocket className="w-5 h-5 text-emerald-400" />
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' }
      { name: 'AI Code Review', href: '/ai-code-review' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' }
      {
        name: 'AI Legal Contract Analyzer'
        href: '/ai-legal-contract-analyzer'
      }
      { name: 'AI Sales Automation', href: '/ai-sales-automation' }
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' }
      { name: 'AI Customer Service', href: '/ai-customer-service' }
    ]
  }
  {
    title: 'Industry Solutions'
    description: 'Industry-specific technology solutions'
    icon: <Building className='w-5 h-5 text-orange-400' />,    links: [    icon: <Building className="w-5 h-5 text-orange-400" />
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' }
      { name: 'Financial Services', href: '/financial-solutions' }
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' }
      { name: 'Retail Technology', href: '/retail-technology-solutions' }
      { name: 'Education Technology', href: '/education-technology-solutions' }
      {
        name: 'Government Solutions'
        href: '/government-technology-solutions'
      }
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  }
  {
    title: 'Resources'
    description: 'Documentation, support, and learning'
    icon: <BookOpen className='w-5 h-5 text-cyan-400' />,    links: [      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' }
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  }
  {
    title: 'Resources'
    description: 'Documentation, support, and learning'
    icon: <BookOpen className='w-5 h-5 text-cyan-400' />,    description: 'Documentation, support, and learning';
<<<<<<< HEAD
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,;
    links: [;
      { name: 'Documentation', href: '/docs' },;
      { name: 'API Reference', href: '/api-documentation' },;
      { name: 'Case Studies', href: '/case-studies' },;
      { name: 'Blog & News', href: '/blog' },;
      { name: 'Support Center', href: '/support' },;
      { name: 'Developer Portal', href: '/developer' },;
      { name: 'Training & Certification', href: '/training' },;
      { name: 'Community Forum', href: '/community' },;
      { name: 'Market Pricing', href: '/market-pricing' },;
      { name: 'Services Advertising', href: '/services-advertising' },;
    ],;
  },;
=======
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />
    links: [
      { name: 'Documentation', href: '/docs' }
      { name: 'API Reference', href: '/api-documentation' }
      { name: 'Case Studies', href: '/case-studies' }
      { name: 'Blog & News', href: '/blog' }
      { name: 'Support Center', href: '/support' }
      { name: 'Developer Portal', href: '/developer' }
      { name: 'Training & Certification', href: '/training' }
      { name: 'Community Forum', href: '/community' }
      { name: 'Market Pricing', href: '/market-pricing' }
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
];
  };
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
    icon: <BookOpen className='w-5 h-5 text-cyan-400' />,

    links: [

<<<<<<< HEAD
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Market Pricing', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Twitter'
    href: 'https://twitter.com/ziontechgroup'
    icon: <Twitter className='w-5 h-5' />
  }
  {
    name: 'LinkedIn'
    href: 'https://linkedin.com/company/ziontechgroup'
    icon: <Linkedin className='w-5 h-5' />
  }
  {
    name: 'Facebook'
    href: 'https://facebook.com/ziontechgroup'
    icon: <Facebook className='w-5 h-5' />
  }
  {
    name: 'Instagram'
    href: 'https://instagram.com/ziontechgroup'
    icon: <Instagram className='w-5 h-5' />
  }
  {
    name: 'YouTube'
    href: 'https://youtube.com/@ziontechgroup'
    icon: <Youtube className='w-5 h-5' />
  }
  {
    name: 'GitHub'
    href: 'https://github.com/Zion-Holdings'
    icon: <Github className='w-5 h-5' />
  },];
const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> }
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> }
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> }
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  };

  return (
    <footer className='relative bg-black text-white overflow-hidden'>;
      {/* Background Effects */}
      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black' />;
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' />;
        {/* Animated grid */}
        <motion&& motion.div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px']
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}

          }}
          }}
        />
      </div>
      <div className='relative z-10'>            ease: 'linear'
          }}
        />
      </div>
<div className="relative z-10">
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `;
    ]
  }
],

const socialLinks = [

const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
        
        {_/* Animated grid */}
        <motion.div
          className=&quot;absolute inset-0 opacity-5&quot;
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,

            backgroundSize: '200px 200px'
          }}

          animate={{
            backgroundPosition: ['0px 0px200px 200px']}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>


      <div className="relative z-10">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 py-20'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>;
            {/* Company Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0 && 0.6 }}
                className='space-y-6'>;
                <div className='flex items-center gap-3'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'>;
                    <Brain className='w-6 h-6 text-white' />;
                  </div>;
                  <div>;
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                      Zion Tech Group;
                    </h3>;
                    <p className='text-sm text-gray-400'>;
      { name: 'Market Pricing', href: '/market - pricing' },
      { name: 'Services Advertising', href: '/services - advertising' },
    ],
  },
];
<<<<<<< HEAD
;
const social_links = [;
=======

const socialLinks = [
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    name: 'Twitter',
    href: 'https://twitter.com / ziontechgroup',
    icon: <Twitter className='w - 5 h - 5' />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com / company / ziontechgroup',
    icon: <Linkedin className='w - 5 h - 5' />,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com / ziontechgroup',
    icon: <Facebook className='w - 5 h - 5' />,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com / ziontechgroup',
    icon: <Instagram className='w - 5 h - 5' />,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@ziontechgroup',
    icon: <Youtube className='w - 5 h - 5' />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com / Zion - Holdings',
    icon: <Github className='w - 5 h - 5' />,
  }, ];
;
const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () =>: any {
    window.scroll_to ({ top: 0, behavior: 'smooth' });  { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: <Twitter className="w - 5 h - 5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com / company / ziontechgroup', icon: <Linkedin className="w - 5 h - 5" /> },
  { name: 'Facebook', href: 'https://facebook.com / ziontechgroup', icon: <Facebook className="w - 5 h - 5" /> },
  { name: 'Instagram', href: 'https://instagram.com / ziontechgroup', icon: <Instagram className="w - 5 h - 5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w - 5 h - 5" /> },
  { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: <Github className="w - 5 h - 5" /> }
const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () =>: any {
    window.scroll_to ({ top: 0, behavior: 'smooth' });
  }
;
  return (
    <footer className='relative bg - black text - white overflow - hidden'>;
      {/* Background Effects */}
      <div className='absolute inset - 0'>;
        <div className='absolute inset - 0 bg - gradient - to - b from - gray - 900 via - black to - black' />;
        <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 via - purple - 500 / 5 to - pink - 500 / 5' />;
        {/* Animated grid */}
        <motion.div;
          className='absolute inset - 0 opacity - 5';
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.3) 1px, transparent 1px),
              linear - gradient (90deg, rgba (0, 255, 255, 0.3) 1px, transparent 1px);
            `,
            background_size: '200px 200px',
          }}
          animate={{
            background_position: ['0px 0px', '200px 200px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
      </div>;
      <div className='relative z - 10'>            ease: 'linear';
          }}
        />;
      </div>;
      <div className='relative z - 10'>;
        {/* Main Footer Content */}
        <div className='container mx - auto px - 4 py - 20'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 8'>;
            {/* Company Info */}
            <div className='lg:col - span - 2'>              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6 }}
                className='space - y-6'        {/* Main Footer Content */}
        <div className="container mx - auto px - 4 py - 20">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 8">;
            {/* Company Info */}
            <div className="lg:col - span - 2">;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6 }}
                className='space - y-6';
              >;
                <div className='flex items - center gap - 3'>;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items - center justify - center'>;
                    <Brain className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div>;
                    <h3 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                      Zion Tech Group;
                    </h3>;
                    <p className='text - sm text - gray - 400'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      Revolutionary Technology Solutions;
                    </p>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
<<<<<<< HEAD
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. 
                  Transform your business with our revolutionary technology.
                </p>
                {/* Contact Info */}
<<<<<<< HEAD
                className='space-y-6'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'>
                    <Brain className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                      Zion Tech Group
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Revolutionary Technology Solutions
                    </p>
                  </div>
                </div>
                <p className='text-gray-300 leading-relaxed max-w-md'>
                  Leading the future with cutting-edge AI consciousness, quantum
                  computing, and innovative micro SAAS solutions. Transform your
                  business with our revolutionary technology.
                </p>
                {/* Contact Info */}
                <div className='space-y-3'>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                  >
                    <Phone className='w-4 h-4' />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200'
                  >
                    <Mail className='w-4 h-4' />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.address}</span>                  </div>                </div>
                {/* Social Links */}                {/* Contact Info */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200'>;
                    <Mail className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className='flex items-center gap-3 text-gray-300'>;
                    <MapPin className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.address}</span>                  </div>                </div>;
                {/* Social Links */}                {/* Contact Info */}
                <div className="space-y-3">;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">;
                    <Phone className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200">;
                    <Mail className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className="flex items-center gap-3 text-gray-300">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (

                {/* Social Links */}

                </div>;
              </motion && motion.div>;
            </div>;





                    >
                      {social.icon}
                    </a>
                  ))}
                </div>;
              </motion && motion.div>;
            </div>;
=======



                {/* Social Links */}

=======
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <a
                      key={social && social.name}
                      href={social && social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"


                      {social.icon}
                    </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}
=======
                  ))}
                </div>
              </motion.div>
            </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>;
              </motion && motion.div>;
            </div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Footer Sections */}
            {footerSections && footerSections.map((section, index) => (;
              <motion&& motion.div
                key={section && section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


<<<<<<< HEAD
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
=======
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='space-y-4'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

              >
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='flex items-center gap-4'>
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110'                    >                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Social Links */}

                    >

                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='space-y-4'

              >
                <div className='flex items-center gap-2'>
                  {section.icon}
                  <h4 className='font-semibold text-white'>{section.title}</h4>
                </div>
                <p className='text-sm text-gray-400'>{section.description}</p>
                <ul className='space-y-2'>
                  {section.links.map(link => (                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                            : 'text-gray-400 hover:text-white'              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h4 className="font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Link
                        href={link && link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link && link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                            : 'text-gray-400 hover:text-white'>;
                <div className="flex items-center gap-2">;
                  {section && section.icon}
                  <h4 className="font-semibold text-white">{section && section.title}</h4>;
                </div>;
                <p className="text-sm text-gray-400">{section && section.description}</p>;
                <ul className="space-y-2">;
                  {section && section.links.map((link) => (;
                    <li key={link && link.name}>;
                      <Link
                        href={link && link.href}
                        className={`text-sm transition-colors duration-200 ${

                          link && link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                          link && link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 

<<<<<<< HEAD
<<<<<<< HEAD
                          link && link.featured
                            ? 'text-cyan-400 hover:text-cyan-300'                          link && link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-400 hover:text-white'


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}
                </ul>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
=======
          </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;


<<<<<<< HEAD



<<<<<<< HEAD
          </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Bottom Section */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

=======
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-16 pt-8 border-t border-gray-800/50'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          >
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-sm text-gray-400'>
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className='flex items-center gap-6 text-sm text-gray-400'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
            className='mt-16 pt-8 border-t border-gray-800/50'>;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>;
              <div className='text-sm text-gray-400'>;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className='flex items-center gap-6 text-sm text-gray-400'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-16 pt-8 border-t border-gray-800/50'

          >
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-sm text-gray-400'>
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className='flex items-center gap-6 text-sm text-gray-400'>
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors duration-200'>;
                  Privacy Policy;
                </Link>;
                <Link
                  href='/terms'
                  className='hover:text-white transition-colors duration-200'>;
                  Terms of Service;
                </Link>;
                <Link
                  href='/cookies'
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-800/50"
          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-800/50"
          >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2025 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
                  className='hover:text-white transition-colors duration-200'>                  Cookie Policy          >;
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">;
              <div className="text-sm text-gray-400">;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className="flex items-center gap-6 text-sm text-gray-400">;
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">;
                  Privacy Policy;
                </Link>;
                <Link href="/terms" className="hover:text-white transition-colors duration-200">;
                  Terms of Service;
                </Link>;
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">;
                  Cookie Policy;
                </Link>;
              </div>;
              <button
                onClick={scrollToTop}
<<<<<<< HEAD


=======
                className='p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110'
                aria-label='Scroll to top'
              >
                <ArrowUp className='w-5 h-5' />              </button>                className="p-2 bg-gray-800/50 hover: bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
/* Animated grid */
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};



}<motion.div > <div className="flex items-center gap-3" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text-gray-300 leading-relaxed max-w-md" > Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {
  social.icon
}</a>) )
}</div> </motion.div> </div> {
  /* Footer Sections */
}{
  footerSections.map ( (section, index) => (<motion.div key= {
  section.title
}<li key= {
  link.name
}> <Link href= {
  link.href
}className= {
  `text-sm transition-colors duration-200 $ {
  link.featured ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white'
}`
}> </li>) )
}</ul> </motion.div>) )
}</div> {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="p-2 bg-gray-800/50 hover: bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </button>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )

};
  /* Animated grid */ ;
}<motion && motion.div > <div className="flex items-center gap-3" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text-gray-300 leading-relaxed max-w-md" > Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {;
  social && social.icon ;
}</a>) ) ;
}</div> </motion && motion.div> </div> {;
  /* Footer Sections */ ;
}{;
  footerSections && footerSections.map ( (section, index) => (<motion&& motion.div key= {
  section && section.title 
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
/* Animated grid */
};

  /* Animated grid */ 
/* Animated grid */ 
  /* Animated grid */ 
=======
  );
};

  /* Animated grid */ 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}<motion.div > <div className="flex items-center gap-3" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <div> <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-gray-400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text-gray-300 leading-relaxed max-w-md" > Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {
  social.icon
}</a>) )
}</div> </motion.div> </div> {
  /* Footer Sections */
}{
  footerSections.map ( (section, index) => (<motion.div key= {
  section.title
}<li key= {
  link && link.name 
}> <Linkhref= {
  link && link.href 
}className= {
  `text-sm transition-colors duration-200 $ {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  link && link.featured ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white' 
}` 
}> </li>) ) ;
}</ul> </motion && motion.div>) ) ;
}</div> {;
  /* Bottom Section */ ;
}<motion && motion.div > <div className="flex flex-col md:flex-row items-center justify-between gap-4" > <div className="text-sm text-gray-400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items-center gap-6 text-sm text-gray-400" > <Link href="/privacy" className="hover:text-white transition-colors duration-200" > Privacy Policy </a> <Link href="/terms" className="hover:text-white transition-colors duration-200" > Terms of Service </a> <Link href="/cookies" className="hover:text-white transition-colors duration-200" > Cookie Policy </a> </div> <button aria-label="Scroll to top" w-5 h-5" /> </button> </div> </motion && motion.div> </div> </div> </footer>) ;
};
export default UltraFuturisticFooter2035;  );
};
export default UltraFuturisticFooter2035;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <p className='text - gray - 300 leading - relaxed max - w-md'>;
                  Leading the future with cutting - edge AI consciousness, quantum;
                  computing, and innovative micro SAAS solutions. Transform your;
                  business with our revolutionary technology.;
                </p>;
                {/* Contact Info */}
                <div className='space - y-3'>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='flex items - center gap - 3 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Phone className='w - 4 h - 4' />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='flex items - center gap - 3 text - gray - 300 hover:text - purple - 400 transition - colors duration - 200';
                  >;
                    <Mail className='w - 4 h - 4' />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className='flex items - center gap - 3 text - gray - 300'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.address}</span>                  </div>                </div>;
                {/* Social Links */}                {/* Contact Info */}
                <div className="space - y-3">;
                  <a href={`tel:${contact_info.mobile}`} className="flex items - center gap - 3 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200">;
                    <Phone className="w - 4 h - 4" />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contact_info.email}`} className="flex items - center gap - 3 text - gray - 300 hover:text - purple - 400 transition - colors duration - 200">;
                    <Mail className="w - 4 h - 4" />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className="flex items - center gap - 3 text - gray - 300">;
                    <MapPin className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.address}</span>;
                  </div>;
                </div>;
                {/* Social Links */}
                <div className='flex items - center gap - 4'>;
                  {social_links.map (social => (
                    <a;
                      key={social.name}
                      href={social.href}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110'                    >                <div className="flex items - center gap - 4">;
                  {social_links.map ((social) => (
                    <a;
                      key={social.name}
                      href={social.href}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110";
                      {social.icon}
                    </a>))}
                </div>;
              </motion.div>;
            </div>;
            {/* Footer Sections */}
            {footer_sections.map ((section, index) => (
              <motion.div;
                key={section.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='space - y-4';
              >;
                <div className='flex items - center gap - 2'>;
                  {section.icon}
                  <h4 className='font - semibold text - white'>{section.title}</h4>;
                </div>;
                <p className='text - sm text - gray - 400'>{section.description}</p>;
                <ul className='space - y-2'>;
                  {section.links.map (link => (                    <li key={link.name}>;
                      <Link;
                        href={link.href}
                        className={`text - sm transition - colors duration - 200 ${
                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300'                            : 'text - gray - 400 hover:text - white'              >;
                <div className="flex items - center gap - 2">;
                  {section.icon}
                  <h4 className="font - semibold text - white">{section.title}</h4>;
                </div>;
                <p className="text - sm text - gray - 400">{section.description}</p>;
                <ul className="space - y-2">;
                  {section.links.map ((link) => (
                    <li key={link.name}>;
                      <Link;
                        href={link.href}
                        className={`text - sm transition - colors duration - 200 ${
                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300'                          link.featured;
                            ? 'text - cyan - 400 hover:text - cyan - 300';
                            : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        {link.name}
                      </Link>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </div>;
          {/* Bottom Section */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt - 16 pt - 8 border - t border - gray - 800 / 50';
          >;
            <div className='flex flex - col md:flex - row items - center justify - between gap - 4'>;
              <div className='text - sm text - gray - 400'>;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className='flex items - center gap - 6 text - sm text - gray - 400'>;
                <Link;
                  href='/privacy';
                  className='hover:text - white transition - colors duration - 200';
                >;
                  Privacy Policy;
                </Link>;
                <Link;
                  href='/terms';
                  className='hover:text - white transition - colors duration - 200';
                >;
                  Terms of Service;
                </Link>;
                <Link;
                  href='/cookies';
                  className='hover:text - white transition - colors duration - 200';
                >                  Cookie Policy          >;
            <div className="flex flex - col md:flex - row items - center justify - between gap - 4">;
              <div className="text - sm text - gray - 400">;
                © 2025 Zion Tech Group. All rights reserved.;
              </div>;
              <div className="flex items - center gap - 6 text - sm text - gray - 400">;
                <Link href="/privacy" className="hover:text - white transition - colors duration - 200">;
                  Privacy Policy;
                </Link>;
                <Link href="/terms" className="hover:text - white transition - colors duration - 200">;
                  Terms of Service;
                </Link>;
                <Link href="/cookies" className="hover:text - white transition - colors duration - 200">;
                  Cookie Policy;
                </Link>;
              </div>;
              <button;
                on_click={scrollToTop}
                className='p - 2 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110';
                aria - label='Scroll to top';
              >;
                <ArrowUp className='w - 5 h - 5' />              </button>                className="p - 2 bg - gray - 800 / 50 hover: bg - gray - 700 / 50 rounded - lg text - gray - 400 hover:text - white transition - all duration - 200 hover:scale - 110";
                aria - label="Scroll to top";
              >;
                <ArrowUp className="w - 5 h - 5" />;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </footer>);
}
;
/* Animated grid */;
}<motion.div > <div className="flex items - center gap - 3" > <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items - center justify - center" > <Brain className="w - 6 h - 6 text - white" /> </div> <div> <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Zion Tech Group </h3> <p className="text - sm text - gray - 400" >Revolutionary Technology Solutions</p> </div> </div> <p className="text - gray - 300 leading - relaxed max - w-md" > Leading the future with cutting - edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with our revolutionary technology. </p> > {
  social.icon;
}</a>) );
}</div> </motion.div> </div> {
  /* Footer Sections */;
}{
  footer_sections.map ( (section, index) => (<motion.div key= {
  section.title;
}<li key= {
  link.name;
}> <Link href= {
  link.href;
}className= {
  `text - sm transition - colors duration - 200 $ {
  link.featured ? 'text - cyan - 400 hover:text - cyan - 300' : 'text - gray - 400 hover:text - white';
}`;
}> </li>) );
}</ul> </motion.div>) );
}</div> {
  /* Bottom Section */;
}<motion.div > <div className="flex flex - col md:flex - row items - center justify - between gap - 4" > <div className="text - sm text - gray - 400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items - center gap - 6 text - sm text - gray - 400" > <Link href="/privacy" className="hover:text - white transition - colors duration - 200" > Privacy Policy </a> <Link href="/terms" className="hover:text - white transition - colors duration - 200" > Terms of Service </a> <Link href="/cookies" className="hover:text - white transition - colors duration - 200" > Cookie Policy </a> </div> <button aria - label="Scroll to top" w - 5 h - 5" /> </button> </div> </motion.div> </div> </div> </footer>);
}
export default UltraFuturisticFooter2035);
}
;
export default UltraFuturisticFooter2035;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  /* Bottom Section */ 
}<motion.div > <div className="flex flex-col md:flex-row items-center justify-between gap-4" > <div className="text-sm text-gray-400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items-center gap-6 text-sm text-gray-400" > <Link href="/privacy" className="hover:text-white transition-colors duration-200" > Privacy Policy </a> <Link href="/terms" className="hover:text-white transition-colors duration-200" > Terms of Service </a> <Link href="/cookies" className="hover:text-white transition-colors duration-200" > Cookie Policy </a> </div> <button aria-label="Scroll to top" w-5 h-5" /> </button> </div> </motion.div> </div> </div> </footer>) 
};

<<<<<<< HEAD
  link.featured ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white'
}`
}> </li>) )
}</ul> </motion.div>) )
}</div> {
  /* Bottom Section */
}<motion.div > <div className="flex flex-col md:flex-row items-center justify-between gap-4" > <div className="text-sm text-gray-400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items-center gap-6 text-sm text-gray-400" > <Link href="/privacy" className="hover:text-white transition-colors duration-200" > Privacy Policy </a> <Link href="/terms" className="hover:text-white transition-colors duration-200" > Terms of Service </a> <Link href="/cookies" className="hover:text-white transition-colors duration-200" > Cookie Policy </a> </div> <button aria-label="Scroll to top" w-5 h-5" /> </button> </div> </motion.div> </div> </div> </footer>)
}
export default UltraFuturisticFooter2035;  )
}
export default UltraFuturisticFooter2035;

  /* Bottom Section */ 
}<motion.div > <div className="flex flex-col md:flex-row items-center justify-between gap-4" > <div className="text-sm text-gray-400" > © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items-center gap-6 text-sm text-gray-400" > <Link href="/privacy" className="hover:text-white transition-colors duration-200" > Privacy Policy </a> <Link href="/terms" className="hover:text-white transition-colors duration-200" > Terms of Service </a> <Link href="/cookies" className="hover:text-white transition-colors duration-200" > Cookie Policy </a> </div> <button aria-label="Scroll to top" w-5 h-5" /> </button> </div> </motion.div> </div> </div> </footer>) 
};
export default UltraFuturisticFooter2035;
export default UltraFuturisticFooter2035;  )
};

export default UltraFuturisticFooter2035;
export default UltraFuturisticFooter2035;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
