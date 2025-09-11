<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';


import React from 'react',
import React from 'react';
=======

import React from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Brain
  Rocket
  Target
  Shield
  Cpu
  Facebook
  Twitter
  Linkedin
  Instagram
  Youtube
  Github
  MessageCircle
  Star
  Zap
  Sparkles
  Home
  Users
  Briefcase
  BookOpen
  TrendingUp
  MessageSquare
  Calendar
  GraduationCap
  ShieldCheck
  Eye
  Code
  Wrench
  Smartphone
  BarChart3
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
  Globe2
  Bot
  Crown
  Infinity;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight
  Brain, Rocket, Target, Shield, Cpu

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
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

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
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Shield,
  Cpu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  MessageCircle,
  Star,
  Zap,
  Sparkles,
  Home,
  Users,
  Briefcase,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Eye,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
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
  Globe2,
  Bot,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Crown,;
  Infinity,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, 
  Brain, Rocket, Target, Shield, Cpu, ;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, MessageCircle, Star, Zap, Sparkles;
  Home, Users, Briefcase, BookOpen, TrendingUp;
  MessageSquare, Calendar;
  GraduationCap, ShieldCheck, Eye, Code, Wrench;
  Smartphone, BarChart3, Palette, Camera, Video;
  Music, Gamepad2, Heart, Leaf, Sun, Moon, Wind;
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Quantum Internet Security', href: '/services/quantum-internet-security-gateway' },
      { name: 'Biotech DNA Computing', href: '/services/biotech-dna-computing-platform' },
      { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading-platform' },
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio' }
    ]
  };
  {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const serviceCategories = [


    title: 'Quantum Technology',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Space Mining Automation', href: '/services/space-mining-automation-platform' },
      { name: 'Metaverse Digital Reality', href: '/services/metaverse-digital-reality-platform' },
      { name: 'AI Predictive Health', href: '/services/ai-predictive-health-analytics' },
      { name: 'Virtual Event Holograms', href: '/services/virtual-event-hologram-platform' }
    ]
  };
  {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title: 'Enterprise IT',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
<<<<<<< HEAD
<<<<<<< HEAD
  Droplets, Mountain, Globe2, Bot, Crown, Infinity;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
{
  name: 'AI Emotional Intelligence', href: '/services / ai - emotional - intelligence - platform';
}
{
  name: 'AI Creativity Orchestrator', href: '/services / ai - creativity - orchestrator';
}
{
  name: 'AI Autonomous Business Manager', href: '/services / ai - autonomous - business - manager';
}];
}
{
  title: 'Quantum Technology', icon: Globe, color: 'from - indigo - 600 via - blue - 600 to - cyan - 600', services: [ {
  name: 'Quantum Internet Security', href: '/services / quantum - internet - security - gateway';
}
{
  name: 'Biotech DNA Computing', href: '/services / biotech - dna - computing - platform';
}
{
  name: 'Quantum Financial Trading', href: '/services / quantum - financial - trading - platform';
}
{
  name: 'Quantum Creativity Studio', href: '/services / quantum - creativity - studio';
}];
}
{
  title: 'Space & Metaverse', icon: Rocket, color: 'from - teal - 600 via - emerald - 600 to - green - 600', services: [ {
  name: 'Space Mining Automation', href: '/services / space - mining - automation - platform';
}
{
  name: 'Metaverse Digital Reality', href: '/services / metaverse - digital - reality - platform';
}
{
  name: 'AI Predictive Health', href: '/services / ai - predictive - health - analytics';
}
{
  name: 'Virtual Event Holograms', href: '/services / virtual - event - hologram - platform';
}];
}
{
  title: 'Enterprise IT', icon: Cpu, color: 'from - blue - 600 via - cyan - 600 to - teal - 600', services: [ {
  name: 'AI Business Intelligence', href: '/services / ai - business - intelligence - suite';
}
{
  name: 'Smart Supply Chain', href: '/services / smart - supply - chain - optimization';
}
{
  name: 'Intelligent HR Management', href: '/services / intelligent - hr - management - system';
}
{
  name: 'Smart Financial Management', href: '/services / smart - financial - management - platform';
}];
}];
const footer_sections = [ {
  title: 'Services', links: [ {
  name: 'AI & Machine Learning', href: '/services / ai - ml';
}
{
  name: 'Quantum Computing', href: '/services / quantum - computing';
}
{
  name: 'Space Technology', href: '/services / space - technology';
}
{
  name: 'Enterprise IT', href: '/services / enterprise - it';
}
{
  name: 'Micro SAAS', href: '/services / micro - saas';
}
{
  name: 'Cybersecurity', href: '/services / cybersecurity';
}];
}
{
  title: 'Solutions', links: [ {
  name: 'AI Consciousness', href: '/solutions / ai - consciousness';
}
{
  name: 'Quantum Security', href: '/solutions / quantum - security';
}
{
  name: 'Space Mining', href: '/solutions / space - mining';
}
{
  name: 'Metaverse Platform', href: '/solutions / metaverse';
}
{
  name: 'Business Intelligence', href: '/solutions / business - intelligence';
}
{
  name: 'Supply Chain AI', href: '/solutions / supply - chain - ai';
}];
}
{
  title: 'Industries', links: [ {
  name: 'Healthcare', href: '/industries / healthcare';
}
{
  name: 'Finance', href: '/industries / finance';
}
{
  name: 'Manufacturing', href: '/industries / manufacturing';
}
{
  name: 'Retail', href: '/industries / retail';
}
{
  name: 'Education', href: '/industries / education';
}
{
  name: 'Government', href: '/industries / government';
}];
}
{
  title: 'Resources', links: [ {
  name: 'Documentation', href: '/docs';
}
{
  name: 'API Reference', href: '/api';
}
{
  name: 'Case Studies', href: '/case - studies';
}
{
  name: 'White Papers', href: '/white - papers';
}
{
  name: 'Blog', href: '/blog';
}
{
  name: 'Research', href: '/research';
}];
}];
<motion.div initial= {  {  website: 'https://ziontechgroup.com';
}
;
const service_categories = [;
    title: 'AI & Consciousness',
    icon: Brain,
    color: 'from - violet - 600 via - purple - 600 to - indigo - 600',
    services: [;
      {
        name: 'AI Consciousness Evolution',
        href: '/services / ai - consciousness - evolution - platform',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/services / ai - emotional - intelligence - platform',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/services / ai - creativity - orchestrator',
      },
      {
        name: 'AI Autonomous Business Manager',
        href: '/services / ai - autonomous - business - manager',
      },
    ],
  },  {      { name: 'AI Consciousness Evolution', href: '/services / ai - consciousness - evolution - platform' },
      { name: 'AI Emotional Intelligence', href: '/services / ai - emotional - intelligence - platform' },
      { name: 'AI Creativity Orchestrator', href: '/services / ai - creativity - orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/services / ai - autonomous - business - manager' }
    ];
  }
    title: 'Quantum Technology',
    icon: Globe,
    color: 'from - indigo - 600 via - blue - 600 to - cyan - 600',
    services: [;
      {
        name: 'Quantum Internet Security',
        href: '/services / quantum - internet - security - gateway',
      },
      {
        name: 'Biotech DNA Computing',
        href: '/services / biotech - dna - computing - platform',
      },
      {
        name: 'Quantum Financial Trading',
        href: '/services / quantum - financial - trading - platform',
      },
      {
        name: 'Quantum Creativity Studio',
        href: '/services / quantum - creativity - studio',
      },
    ],
  },  {      { name: 'Quantum Internet Security', href: '/services / quantum - internet - security - gateway' },
      { name: 'Biotech DNA Computing', href: '/services / biotech - dna - computing - platform' },
      { name: 'Quantum Financial Trading', href: '/services / quantum - financial - trading - platform' },
      { name: 'Quantum Creativity Studio', href: '/services / quantum - creativity - studio' }
    ];
  }
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from - teal - 600 via - emerald - 600 to - green - 600',
    services: [;
      {
        name: 'Space Mining Automation',
        href: '/services / space - mining - automation - platform',
      },
      {
        name: 'Metaverse Digital Reality',
        href: '/services / metaverse - digital - reality - platform',
      },
      {
        name: 'AI Predictive Health',
        href: '/services / ai - predictive - health - analytics',
      },
      {
        name: 'Virtual Event Holograms',
        href: '/services / virtual - event - hologram - platform',
      },
    ],
  },  {      { name: 'Space Mining Automation', href: '/services / space - mining - automation - platform' },
      { name: 'Metaverse Digital Reality', href: '/services / metaverse - digital - reality - platform' },
      { name: 'AI Predictive Health', href: '/services / ai - predictive - health - analytics' },
      { name: 'Virtual Event Holograms', href: '/services / virtual - event - hologram - platform' }
    ];
  }
    title: 'Enterprise IT',
    icon: Cpu,
    color: 'from - blue - 600 via - cyan - 600 to - teal - 600',
    services: [;
      {
        name: 'AI Business Intelligence',
        href: '/services / ai - business - intelligence - suite',
      },
      {
        name: 'Smart Supply Chain',
        href: '/services / smart - supply - chain - optimization',
      },
      {
        name: 'Intelligent HR Management',
        href: '/services / intelligent - hr - management - system',
      },
      {
=======


      {

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        name: 'Smart Financial Management',
        href: '/services / smart - financial - management - platform',
      },
    ],
<<<<<<< HEAD
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' },
  Droplets, Mountain, Globe2, Bot, Crown, Infinity

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
{
  name: 'AI Emotional Intelligence', href: '/services/ai-emotional-intelligence-platform'
}
{
  name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator'
}
{
  name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager'
}]
}
{
  title: 'Quantum Technology', icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', services: [ {
  name: 'Quantum Internet Security', href: '/services/quantum-internet-security-gateway'
}
{
  name: 'Biotech DNA Computing', href: '/services/biotech-dna-computing-platform'
}
{
  name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading-platform'
}
{
  name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio'
}]
}
{
  title: 'Space & Metaverse', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', services: [ {
  name: 'Space Mining Automation', href: '/services/space-mining-automation-platform'
}
{
  name: 'Metaverse Digital Reality', href: '/services/metaverse-digital-reality-platform'
}
{
  name: 'AI Predictive Health', href: '/services/ai-predictive-health-analytics'
}
{
  name: 'Virtual Event Holograms', href: '/services/virtual-event-hologram-platform'
}]
}
{
  title: 'Enterprise IT', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', services: [ {
  name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite'
}
{
  name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization'
}
{
  name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system'
}
{
  name: 'Smart Financial Management', href: '/services/smart-financial-management-platform'
}]
}];
const footerSections = [ {
  title: 'Services', links: [ {
  name: 'AI & Machine Learning', href: '/services/ai-ml'
}
{
  name: 'Quantum Computing', href: '/services/quantum-computing'
}
{
  name: 'Space Technology', href: '/services/space-technology'
}
{
  name: 'Enterprise IT', href: '/services/enterprise-it'
}
{
  name: 'Micro SAAS', href: '/services/micro-saas'
}
{
  name: 'Cybersecurity', href: '/services/cybersecurity'
}]
}
{
  title: 'Solutions', links: [ {
  name: 'AI Consciousness', href: '/solutions/ai-consciousness'
}
{
  name: 'Quantum Security', href: '/solutions/quantum-security'
}
{
  name: 'Space Mining', href: '/solutions/space-mining'
}
{
  name: 'Metaverse Platform', href: '/solutions/metaverse'
}
{
  name: 'Business Intelligence', href: '/solutions/business-intelligence'
}
{
  name: 'Supply Chain AI', href: '/solutions/supply-chain-ai'
}]
}
{
  title: 'Industries', links: [ {
  name: 'Healthcare', href: '/industries/healthcare'
}
{
  name: 'Finance', href: '/industries/finance'
}
{
  name: 'Manufacturing', href: '/industries/manufacturing'
}
{
  name: 'Retail', href: '/industries/retail'
}
{
  name: 'Education', href: '/industries/education'
}
{
  name: 'Government', href: '/industries/government'
}]
}
{
  title: 'Resources', links: [ {
  name: 'Documentation', href: '/docs'
}
{
  name: 'API Reference', href: '/api'
}
{
  name: 'Case Studies', href: '/case-studies'
}
{
  name: 'White Papers', href: '/white-papers'
}
{
  name: 'Blog', href: '/blog'
}
{
  name: 'Research', href: '/research'
}]
}];
<motion.div initial= {  {  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
    title: 'AI & Consciousness'
    icon: Brain
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    services: [
      {
        name: 'AI Consciousness Evolution'
        href: '/services/ai-consciousness-evolution-platform'
      }
      {
        name: 'AI Emotional Intelligence'
        href: '/services/ai-emotional-intelligence-platform'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/services/ai-creativity-orchestrator'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/services/ai-autonomous-business-manager'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution', href: '/services/ai-consciousness-evolution-platform' }
      { name: 'AI Emotional Intelligence', href: '/services/ai-emotional-intelligence-platform' }
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator' }
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager' }
    ]
  }
    title: 'Quantum Technology'
    icon: Globe
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    services: [
      {
        name: 'Quantum Internet Security'
        href: '/services/quantum-internet-security-gateway'
      }
      {
        name: 'Biotech DNA Computing'
        href: '/services/biotech-dna-computing-platform'
      }
      {
        name: 'Quantum Financial Trading'
        href: '/services/quantum-financial-trading-platform'
      }
      {
        name: 'Quantum Creativity Studio'
        href: '/services/quantum-creativity-studio'
      }
    ]
  },  {      { name: 'Quantum Internet Security', href: '/services/quantum-internet-security-gateway' }
      { name: 'Biotech DNA Computing', href: '/services/biotech-dna-computing-platform' }
      { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading-platform' }
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio' }
    ]
  }
    title: 'Space & Metaverse'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    services: [
      {
=======


      {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        name: 'Space Mining Automation'
        href: '/services/space-mining-automation-platform'
      }
      {
        name: 'Metaverse Digital Reality'
        href: '/services/metaverse-digital-reality-platform'
      }
      {
        name: 'AI Predictive Health'
        href: '/services/ai-predictive-health-analytics'
      }
      {
        name: 'Virtual Event Holograms'
        href: '/services/virtual-event-hologram-platform'
      }
    ]
  },  {      { name: 'Space Mining Automation', href: '/services/space-mining-automation-platform' }
      { name: 'Metaverse Digital Reality', href: '/services/metaverse-digital-reality-platform' }
      { name: 'AI Predictive Health', href: '/services/ai-predictive-health-analytics' }
      { name: 'Virtual Event Holograms', href: '/services/virtual-event-hologram-platform' }
    ]
  }
    title: 'Enterprise IT'
    icon: Cpu
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    services: [
      {
        name: 'AI Business Intelligence'
        href: '/services/ai-business-intelligence-suite'
      }
      {
        name: 'Smart Supply Chain'
        href: '/services/smart-supply-chain-optimization'
      }
      {
        name: 'Intelligent HR Management'
        href: '/services/intelligent-hr-management-system'
      }
      {
<<<<<<< HEAD



=======
        name: 'Smart Financial Management'
        href: '/services/smart-financial-management-platform'
      }
    ]
  },];      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' }
      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' }
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' }
      { name: 'Smart Financial Management', href: '/services/smart-financial-management-platform' }
    ]
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        name: 'Smart Financial Management',
        href: '/services / smart - financial - management - platform',
      },
    ],

<<<<<<< HEAD
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' },

      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' },
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' },
=======

=======
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' },

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' },
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' },

      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' },
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { name: 'Smart Financial Management', href: '/services/smart-financial-management-platform' }
    ]
  }



<<<<<<< HEAD
<<<<<<< HEAD
const mainNavigation = [

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const mainNavigation = [

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, ];      { name: 'AI Business Intelligence', href: '/services / ai - business - intelligence - suite' },
      { name: 'Smart Supply Chain', href: '/services / smart - supply - chain - optimization' },
      { name: 'Intelligent HR Management', href: '/services / intelligent - hr - management - system' },
      { name: 'Smart Financial Management', href: '/services / smart - financial - management - platform' }
    ];
  }
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


<<<<<<< HEAD
<<<<<<< HEAD
        name: 'Smart Financial Management'
        href: '/services/smart-financial-management-platform'
      }
    ]
  },];      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' }
      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' }
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' }
      { name: 'Smart Financial Management', href: '/services/smart-financial-management-platform' }
    ]
  }
        name: 'Smart Financial Management',
        href: '/services/smart-financial-management-platform',
      },
    ],
  },];      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-suite' },
      { name: 'Smart Supply Chain', href: '/services/smart-supply-chain-optimization' },
      { name: 'Intelligent HR Management', href: '/services/intelligent-hr-management-system' },
      { name: 'Smart Financial Management', href: '/services/smart-financial-management-platform' }
    ]
  }
  { name: 'Support', href: '/support', icon: MessageCircle }
];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },

  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const resources = [
  { name: 'Support', href: '/support', icon: MessageCircle }, ];  { name: 'Support', href: '/support', icon: MessageCircle }
];
;
const resources = [;
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },
  { name: 'White Papers', href: '/white - papers', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Events', href: '/events', icon: Calendar },
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Webinars', href: '/webinars', icon: Video }
];
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const company = [
  { name: 'Webinars', href: '/webinars', icon: Video }, ];  { name: 'Webinars', href: '/webinars', icon: Video }
];
;
const company = [;
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Our Team', href: '/team', icon: Users },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Partners', href: '/partners', icon: Users },
  { name: 'Investors', href: '/investors', icon: Star },
  { name: 'Press', href: '/press', icon: BookOpen },
  { name: 'Legal', href: '/legal', icon: Shield },
<<<<<<< HEAD
<<<<<<< HEAD
];
;
const social_links = [;
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com / company / ziontechgroup',
    icon: Linkedin,
    color: 'hover:text - blue - 500',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com / ziontechgroup',
    icon: Twitter,
    color: 'hover:text - blue - 400',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com / ziontechgroup',
    icon: Facebook,
    color: 'hover:text - blue - 600',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com / ziontechgroup',
    icon: Instagram,
    color: 'hover:text - pink - 500',
  },
  {
    name: 'YouTube',
    href: 'https://youtube && youtube.com/@ziontechgroup',
    icon: Youtube,
    color: 'hover:text - red - 500',
  },
  {
    name: 'GitHub',
  { name: 'Privacy', href: '/privacy', icon: ShieldCheck }
];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' }

];
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
const footerSections = [
  {
    title: 'Services'
    links: [
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { name: 'AI & Machine Learning', href: '/services/ai-ml' },
      { name: 'Quantum Computing', href: '/services/quantum-computing' },
      { name: 'Space Technology', href: '/services/space-technology' },
      { name: 'Enterprise IT', href: '/services/enterprise-it' },
      { name: 'Micro SAAS', href: '/services/micro-saas' },
<<<<<<< HEAD
<<<<<<< HEAD
      { name: 'Cybersecurity', href: '/services/cybersecurity' }
    ]
  };
  {
    title: 'Solutions'
    links: [
  }
    title: 'Industries',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  {
    title: 'Solutions'
    links: [

  }
    title: 'Industries',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    links: [
      { name: 'Healthcare', href: '/industries/healthcare' }
      { name: 'Finance', href: '/industries/finance' }
      { name: 'Manufacturing', href: '/industries/manufacturing' }
      { name: 'Retail', href: '/industries/retail' }
      { name: 'Education', href: '/industries/education' }
      { name: 'Government', href: '/industries/government' }
    ]
  },  {      { name: 'Government', href: '/industries/government' }
    ]
  }
      { name: 'AI Consciousness', href: '/solutions/ai-consciousness' },
      { name: 'Quantum Security', href: '/solutions/quantum-security' },
      { name: 'Space Mining', href: '/solutions/space-mining' },
      { name: 'Metaverse Platform', href: '/solutions/metaverse' },

      { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
      { name: 'Supply Chain AI', href: '/solutions/supply-chain-ai' }
    ]
  };
  {

    title: 'Industries',
    links: [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Education', href: '/industries/education' },

      { name: 'Government', href: '/industries/government' }
    ]
  };
<<<<<<< HEAD
<<<<<<< HEAD
  {
    title: 'Resources'
    links: [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  {
    title: 'Resources'
    links: [

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    href: 'https://github.com / Zion - Holdings',
    icon: Github,
    color: 'hover:text - gray - 400',
  }, ];  { name: 'LinkedIn', href: 'https://linkedin.com / company / ziontechgroup', icon: Linkedin, color: 'hover:text - blue - 500' },
  { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: Twitter, color: 'hover:text - blue - 400' },
  { name: 'Facebook', href: 'https://facebook.com / ziontechgroup', icon: Facebook, color: 'hover:text - blue - 600' },
  { name: 'Instagram', href: 'https://instagram.com / ziontechgroup', icon: Instagram, color: 'hover:text - pink - 500' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text - red - 500' },
  { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: Github, color: 'hover:text - gray - 400' }
const footer_sections = [;
  {
    title: 'Services',
    links: [;
      { name: 'AI & Machine Learning', href: '/services / ai - ml' },
      { name: 'Quantum Computing', href: '/services / quantum - computing' },
      { name: 'Space Technology', href: '/services / space - technology' },
      { name: 'Enterprise IT', href: '/services / enterprise - it' },
      { name: 'Micro SAAS', href: '/services / micro - saas' },
      { name: 'Cybersecurity', href: '/services / cybersecurity' },
    ],
  },  {      { name: 'Cybersecurity', href: '/services / cybersecurity' }
    ];
  }
  {
    title: 'Solutions',
    links: [;
      { name: 'AI Consciousness', href: '/solutions / ai - consciousness' },
      { name: 'Quantum Security', href: '/solutions / quantum - security' },
      { name: 'Space Mining', href: '/solutions / space - mining' },
      { name: 'Metaverse Platform', href: '/solutions / metaverse' },
      {
        name: 'Business Intelligence',
        href: '/solutions / business - intelligence',
      },
      { name: 'Supply Chain AI', href: '/solutions / supply - chain - ai' },
    ],
  },  {      { name: 'Business Intelligence', href: '/solutions / business - intelligence' },
      { name: 'Supply Chain AI', href: '/solutions / supply - chain - ai' }
    ];
  }
    title: 'Industries',
    links: [;
      { name: 'Healthcare', href: '/industries / healthcare' },
      { name: 'Finance', href: '/industries / finance' },
      { name: 'Manufacturing', href: '/industries / manufacturing' },
      { name: 'Retail', href: '/industries / retail' },
      { name: 'Education', href: '/industries / education' },
      { name: 'Government', href: '/industries / government' },
    ],
  },  {      { name: 'Government', href: '/industries / government' }
    ];

  }
  {
    title: 'Resources',
    links: [;
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Case Studies', href: '/case - studies' },
      { name: 'White Papers', href: '/white - papers' },
      { name: 'Blog', href: '/blog' },
<<<<<<< HEAD
<<<<<<< HEAD
export default function UltraFuturisticFooter2029V2() {;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <footer className='relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20'>;
      { name: 'Research', href: '/research' }
    ]
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, ];
;
export default /**
 * UltraFuturisticFooter2029V2 - Function description
 */
function UltraFuturisticFooter2029V2() {
<<<<<<< HEAD
=======
  },];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <footer className='relative bg - black / 90 backdrop - blur - xl border - t border - cyan - 500 / 20'>      { name: 'Research', href: '/research' }
    ];
  }
];
<<<<<<< HEAD
;
export default /**
 * UltraFuturisticFooter2029V2 - Function description
 */
function UltraFuturisticFooter2029V2() {
  return (
<<<<<<< HEAD
    <footer className='relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20'>

  },];

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className='relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20'>      { name: 'Research', href: '/research' }
    ]
  };
];
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className='relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-2 xl:col-span-1'>            <motion.div      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <motion.div
<<<<<<< HEAD
=======

          <div className="lg:col-span-2 xl:col-span-1">
            <motion.div

=======
    <footer className='relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20'>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

];

export default function UltraFuturisticFooter2029V2() {
  return (

            <motion.div

<<<<<<< HEAD
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions.
                Transforming businesses through next-generation technology.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

              transition={{ duration: 0 && 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
transition={{ duration: 0 && 0.6 }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              viewport={{ once: true }}>;
              <Link href='/' className='flex items-center space-x-3 mb-6 group'>;
                <div className='relative'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                    <Rocket className='w-7 h-7 text-white' />;
                  </div>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />;
                </div>;
                <div>;
                  <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text-sm text-gray-400'>;
                    Future Technology Solutions;
                  </p>;
                </div>;
              </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className='text-gray-300 mb-6 leading-relaxed'>;
                Leading the future with cutting-edge AI, quantum computing,;
                space technology, and innovative micro SAAS solutions.;
                Transforming businesses through next-generation technology.;
              </p>;
              {/* Contact Info */}
              <div className='space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Mail className='w-4 h-4 text-cyan-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-cyan-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Globe className='w-4 h-4 text-cyan-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.website}</span>                </div>                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />;
                </div>;
                <div>;
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>;
                </div>;
              </Link>;
              <p className="text-gray-300 mb-6 leading-relaxed">;
                Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions. ;
                Transforming businesses through next-generation technology.;
              </p>;
              {/* Contact Info */}
              <div className="space-y-3">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-4 h-4 text-cyan-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <MapPin className="w-4 h-4 text-cyan-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Globe className="w-4 h-4 text-cyan-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.website}</span>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD





=======
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Service Categories */}
          {footerSections && footerSections.map((section, index) => (;
            <motion&& motion.div
              key={section && section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className='text-lg font-semibold text-white mb-6 flex items-center'>
                <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3' />
                {section.title}
              </h4>
              <ul className='space-y-3'>
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group'
                    >
                      <ArrowRight className='w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />                      {link.name}                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
<<<<<<< HEAD


        {/* Service Showcase */}
        <motion&& motion.div
    <footer className='relative bg - black / 90 backdrop - blur - xl border - t border - cyan - 500 / 20'>;
      {/* Main Footer Content */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 4 gap - 12'>;
          {/* Company Info */}
          <div className='lg:col - span - 2 xl:col - span - 1'>            <motion.div      {/* Main Footer Content */}
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16">;
        <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 4 gap - 12">;
          {/* Company Info */}
          <div className="lg:col - span - 2 xl:col - span - 1">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >;
              <Link href='/' className='flex items - center space - x-3 mb - 6 group'>;
                <div className='relative'>;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                    <Rocket className='w - 7 h - 7 text - white' />;
                  </div>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300' />;
                </div>;
                <div>;
                  <h3 className='text - xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text - sm text - gray - 400'>;
                    Future Technology Solutions;
                  </p>;
                </div>;
              </Link>;
              <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                Leading the future with cutting - edge AI, quantum computing,
                space technology, and innovative micro SAAS solutions.;
                Transforming businesses through next - generation technology.;
              </p>;
              {/* Contact Info */}
              <div className='space - y-3'>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span className='text - sm'>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Mail className='w - 4 h - 4 text - cyan - 400' />;
                  <span className='text - sm'>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <MapPin className='w - 4 h - 4 text - cyan - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Globe className='w - 4 h - 4 text - cyan - 400' />;
                  <span className='text - sm'>{contact_info.website}</span>                </div>                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" />;
                </div>;
                <div>;
                  <h3 className="text - xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text - sm text - gray - 400">Future Technology Solutions</p>;
                </div>;
              </Link>;
              <p className="text - gray - 300 mb - 6 leading - relaxed">;
                Leading the future with cutting - edge AI, quantum computing, space technology, and innovative micro SAAS solutions.;
                Transforming businesses through next - generation technology.;
              </p>;
              {/* Contact Info */}
              <div className="space - y-3">;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Phone className="w - 4 h - 4 text - cyan - 400" />;
                  <span className="text - sm">{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Mail className="w - 4 h - 4 text - cyan - 400" />;
                  <span className="text - sm">{contact_info.email}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <MapPin className="w - 4 h - 4 text - cyan - 400" />;
                  <span className="text - sm">{contact_info.address}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Globe className="w - 4 h - 4 text - cyan - 400" />;
                  <span className="text - sm">{contact_info.website}</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
          {/* Service Categories */}
          {footer_sections.map ((section, index) => (
            <motion.div;
              key={section.title}
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >;
              <h4 className='text - lg font - semibold text - white mb - 6 flex items - center'>;
                <div className='w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - full mr - 3' />;
                {section.title}
              </h4>;
              <ul className='space - y-3'>;
                {section.links.map (link => (
                  <li key={link.name}>;
                    <Link;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Service Showcase */}
        <motion.div
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Service Showcase */}
        <motion&& motion.div
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
          viewport={{ once: true }}
<<<<<<< HEAD


        >
<<<<<<< HEAD
          className="mt-16 pt-12 border-t border-gray-800"
        >
          className='mt-16 pt-12 border-t border-gray-800'

        >
          <h3 className='text-2xl font-bold text-white text-center mb-8'>
            Featured 2029 Services
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>            {serviceCategories.map((category, index) => (        >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='mt-16 pt-12 border-t border-gray-800'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Featured 2029 Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                    </Link>;
                  </li>))}
              </ul>;
            </motion.div>))}
        </div>;
        {/* Service Showcase */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt - 16 pt - 12 border - t border - gray - 800';
        >;
          <h3 className='text - 2xl font - bold text - white text - center mb - 8'>;
            Featured 2029 Services;
          </h3>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>            {service_categories.map ((category, index) => (        >;
          <h3 className="text - 2xl font - bold text - white text - center mb - 8">;
            Featured 2029 Services;
          </h3>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
            {service_categories.map ((category, index) => (
              <motion.div;
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

                className='group'




              >
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                  <div className='flex items-center space-x-3 mb-3'>;
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                      <category && category.icon className='w-5 h-5 text-white' />;
                    </div>;
                    <h4 className='font-semibold text-white text-sm'>;
                      {category && category.title}
                    </h4>;
                  </div>;
                  <ul className='space-y-2'>;
                    {category && category.services.slice(0, 3).map(service => (;
                      <li key={service && service.name}>;
                        <Link
                          href={service && service.href}
                          className='text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block'>              >;
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                  <div className="flex items-center space-x-3 mb-3">;
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                      <category && category.icon className="w-5 h-5 text-white" />;
                    </div>;
                    <h4 className="font-semibold text-white text-sm">{category && category.title}</h4>;
                  </div>;
                  <ul className="space-y-2">;
                    {category && category.services.slice(0, 3).map((service) => (;
                      <li key={service && service.name}>;
                        <Link
                          href={service && service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block">;
                          {service && service.name}
                        </Link>;
                      </li>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className="group"
              >
=======
=======
                className="group"
              >
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='group'

              >
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}
                >
                  <div className='flex items-center space-x-3 mb-3'>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <category.icon className='w-5 h-5 text-white' />
                    </div>
                    <h4 className='font-semibold text-white text-sm'>
                      {category.title}
                    </h4>
                  </div>
                  <ul className='space-y-2'>
                    {category.services.slice(0, 3).map(service => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className='text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block'                        >              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.slice(0, 3).map((service) => (
                      <li key={service.name}>
                        <Link
                className='group';
              >;
                <div;
                  className={`p - 4 rounded - xl bg - gradient - to - br ${category.color} bg - opacity - 10 border border - cyan - 500 / 20 hover:border - cyan - 500 / 40 transition - all duration - 300`}
                >;
                  <div className='flex items - center space - x-3 mb - 3'>;
                    <div;
                      className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}
                    >;
                      <category.icon className='w - 5 h - 5 text - white' />;
                    </div>;
                    <h4 className='font - semibold text - white text - sm'>;
                      {category.title}
                    </h4>;
                  </div>;
                  <ul className='space - y-2'>;
                    {category.services.slice (0, 3).map (service => (
                      <li key={service.name}>;
                        <Link;
                          href={service.href}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className='text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 text - xs block'                        >              >;
                <div className={`p - 4 rounded - xl bg - gradient - to - br ${category.color} bg - opacity - 10 border border - cyan - 500 / 20 hover:border - cyan - 500 / 40 transition - all duration - 300`}>;
                  <div className="flex items - center space - x-3 mb - 3">;
                    <div className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}>;
                      <category.icon className="w - 5 h - 5 text - white" />;
                    </div>;
                    <h4 className="font - semibold text - white text - sm">{category.title}</h4>;
                  </div>;
                  <ul className="space - y-2">;
                    {category.services.slice (0, 3).map ((service) => (
                      <li key={service.name}>;
                        <Link;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          href={service.href}
                          className="text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 text - xs block";
                        >;
                          {service.name}
<<<<<<< HEAD
=======
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </motion && motion.div>;
      </div>;


<<<<<<< HEAD



<<<<<<< HEAD
          </div>;
        </motion && motion.div>;
      </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Bottom Footer */}
      <div className='border-t border-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>;
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>            {/* Copyright */}      <div className="border-t border-gray-800">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Copyright */}
            <motion&& motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-gray-400 text-sm'
            >
              © 2025 Zion Tech Group. All rights reserved.
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300 ml-2'>;
                Privacy Policy;
              </Link>{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300 ml-2'
              >
                Terms of Service
<<<<<<< HEAD

              className="text-gray-400 text-sm"

              </Link>            </motion.div>              className="text-gray-400 text-sm"
=======

              className="text-gray-400 text-sm"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </Link>            </motion.div>              className="text-gray-400 text-sm"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              © 2025 Zion Tech Group. All rights reserved.
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Terms of Service</Link>
<<<<<<< HEAD

<<<<<<< HEAD
=======
              |;
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300 ml-2'>;
                Terms of Service;
              </Link>            </motion && motion.div>              className="text-gray-400 text-sm";
            >;
              © 2025 Zion Tech Group. All rights reserved. | ;
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Privacy Policy</Link> | ;
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Terms of Service</Link>;


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Link>            </motion.div>

            </motion.div>


<<<<<<< HEAD
<<<<<<< HEAD
            {/* Social Links */}
            <motion&& motion.div
            </motion.div>
            {/* Social Links */}
            <motion&& motion.div
              </Link>            </motion.div>

            </motion.div>

            {/* Social Links */}
            <motion.div
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Social Links */}
            <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Social Links */}
            <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD


            >
              {socialLinks.map(social => (
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className='flex items-center space-x-4'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            >
              {socialLinks.map(social => (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  key={social && social.name}
                  href={social && social.href}
                  target='_blank'
                  rel='noopener noreferrer'
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (

<<<<<<< HEAD
              className="flex items-center space-x-4"
            >
              className='flex items-center space-x-4'

            >
              {socialLinks.map(social => (
                <Link
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className='w-4 h-4' />                </Link>            >
              {socialLinks.map((social) => (
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >

=======


=======
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <social.icon className='w-4 h-4' />                </Link>

                </Link>


<<<<<<< HEAD

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <motion&& motion.div
      {/* Newsletter Signup */}
      <motion&& motion.div
                  <social.icon className='w-4 h-4' />                </Link>

                </Link>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </motion.div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Newsletter Signup */}
      <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Newsletter Signup */}
      <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
        viewport={{ once: true }}
<<<<<<< HEAD


<<<<<<< HEAD
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20"
      >
        className='bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        className='bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Stay Ahead with Future Tech
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Get the latest updates on AI breakthroughs, quantum computing
              advances, space technology innovations, and cutting-edge micro
              SAAS solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'
<<<<<<< HEAD
<<<<<<< HEAD
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20"
      >
              />
              <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>                Subscribe      >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;
              <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>                Subscribe      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
          <div className="text-center">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Stay Ahead with Future Tech;
            </h3>;
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting-edge micro SAAS solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">;

=======
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20"
      >
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Future Tech
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting-edge micro SAAS solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"


<<<<<<< HEAD
<<<<<<< HEAD
              />;
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                        </Link>;
                      </li>))}
                  </ul>;
                </div>;
              </motion.div>))}
          </div>;
        </motion.div>;
      </div>;
      {/* Bottom Footer */}
      <div className='border - t border - gray - 800'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8'>;
          <div className='flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0'>            {/* Copyright */}      <div className="border - t border - gray - 800">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8">;
          <div className="flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0">;
            {/* Copyright */}
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text - gray - 400 text - sm';
            >;
              © 2025 Zion Tech Group. All rights reserved. |;
              <Link;
                href='/privacy';
                className='hover:text - cyan - 400 transition - colors duration - 300 ml - 2';
              >;
                Privacy Policy;
              </Link>{' '}
              |;
              <Link;
                href='/terms';
                className='hover:text - cyan - 400 transition - colors duration - 300 ml - 2';
              >;
                Terms of Service;
              </Link>            </motion.div>              className="text - gray - 400 text - sm";
            >;
              © 2025 Zion Tech Group. All rights reserved. |;
              <Link href="/privacy" className="hover:text - cyan - 400 transition - colors duration - 300 ml - 2">Privacy Policy</Link> |;
              <Link href="/terms" className="hover:text - cyan - 400 transition - colors duration - 300 ml - 2">Terms of Service</Link>;
            {/* Social Links */}
            <motion.div;
              initial={{ opacity: 0, coordinate_x: 20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items - center space - x-4';
            >;
              {social_links.map (social => (
                <Link;
                  key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className={`p - 2 rounded - lg bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 text - gray - 400 ${social.color} transition - all duration - 300 hover:scale - 110`}
                >;
                  <social.icon className='w - 4 h - 4' />                </Link>            >;
              {social_links.map ((social) => (
                <Link;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className={`p - 2 rounded - lg bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 text - gray - 400 ${social.color} transition - all duration - 300 hover:scale - 110`}
                >;
                  <social.icon className="w - 4 h - 4" />;
                </Link>))}
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Newsletter Signup */}
      <motion.div;
        initial={{ opacity: 0, coordinate_y: 20 }}
        whileInView={{ opacity: 1, coordinate_y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 border - t border - cyan - 500 / 20';
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8'>;
          <div className='text - center'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Stay Ahead with Future Tech;
            </h3>;
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Get the latest updates on AI breakthroughs, quantum computing;
              advances, space technology innovations, and cutting - edge micro;
              SAAS solutions.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 max - w-md mx - auto'>;
              <input;
                type='email';
                placeholder='Enter your email';
                className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50';
              />;
              <button className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105'>                Subscribe      >;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8">;
          <div className="text - center">;
            <h3 className="text - 2xl font - bold text - white mb - 4">;
              Stay Ahead with Future Tech;
            </h3>;
            <p className="text - gray - 300 mb - 6 max - w-2xl mx - auto">;
              Get the latest updates on AI breakthroughs, quantum computing advances, space technology innovations, and cutting - edge micro SAAS solutions.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 max - w-md mx - auto">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
              />;
              <button className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </motion.div>;
    </footer>);
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50&quot;
              />
<<<<<<< HEAD
=======
              />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
<<<<<<< HEAD

  );

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

  );

}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </footer>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
    </footer>
);
  );
}
    </footer>;
);
}
    </footer>
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
