<<<<<<< HEAD

<<<<<<< HEAD
=======

import React, { useState, useEffect } from 'react';


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
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
import {
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
=======
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
  BarChart3;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield
  Microscope, DollarSign, Home, Users, Briefcase
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
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
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
  Smartphone,
  BarChart3,} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, DollarSign, Home, Users, Briefcase,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Smartphone,;
  BarChart3,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
<<<<<<< HEAD


      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' };
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' };
=======
  Code, Wrench, Smartphone, BarChart3
<<<<<<< HEAD
} from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
=======

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
<<<<<<< HEAD
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};
const serviceCategories = [;
  {;
    title: '🚀 2028 Futuristic Innovations',;
    icon: Rocket,;
    color: 'from-violet-600 to-purple-600',;
    description: 'Beyond the future of technology',;
    services: [;
      {;
        name: 'AI Climate Prediction Platform',;
        href: '/ai-climate-prediction-platform',;
        description: 'Predict climate changes with 99 && 99.9% accuracy',;
        price: '$2,999/month',;
      },;
      {;
        name: 'Quantum Cybersecurity Firewall',;
        href: '/quantum-cybersecurity-firewall',;
        description: 'Unbreakable quantum encryption',;
        price: '$4,999/month',;
      },;
      {;
        name: 'Autonomous Drone Delivery Network',;
        href: '/autonomous-drone-delivery-network',;
        description: 'AI-powered drone delivery',;
        price: '$1,999/month',;
      },;
      {;
        name: 'AI Healthcare Diagnosis Platform',;
        href: '/ai-healthcare-diagnosis-platform',;
        description: 'Revolutionary medical diagnosis',;
        price: '$3,999/month',;
      },;
    ],;
  },  {      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99 && 99.9% accuracy', price: '$2,999/month' };
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' };
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' };
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' };
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' }
    ];
  };
  {
  Code, Wrench, Smartphone, BarChart3;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const service_categories = [;
  {
    title: '🚀 2028 Futuristic Innovations',
    icon: Rocket,
    color: 'from - violet - 600 to - purple - 600',
    description: 'Beyond the future of technology',
    services: [;
      {
        name: 'AI Climate Prediction Platform',
        href: '/ai - climate - prediction - platform',
        description: 'Predict climate changes with 99.9% accuracy',
        price: '$2, 999 / month',
      },
      {
        name: 'Quantum Cybersecurity Firewall',
        href: '/quantum - cybersecurity - firewall',
        description: 'Unbreakable quantum encryption',
        price: '$4, 999 / month',
      },
      {
        name: 'Autonomous Drone Delivery Network',
        href: '/autonomous - drone - delivery - network',
        description: 'AI - powered drone delivery',
        price: '$1, 999 / month',
      },
      {
        name: 'AI Healthcare Diagnosis Platform',
        href: '/ai - healthcare - diagnosis - platform',
        description: 'Revolutionary medical diagnosis',
        price: '$3, 999 / month',
      },
    ],
  },  {      { name: 'AI Climate Prediction Platform', href: '/ai - climate - prediction - platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2, 999 / month' }
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum - cybersecurity - firewall', description: 'Unbreakable quantum encryption', price: '$4, 999 / month' }
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous - drone - delivery - network', description: 'AI - powered drone delivery', price: '$1, 999 / month' }
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai - healthcare - diagnosis - platform', description: 'Revolutionary medical diagnosis', price: '$3, 999 / month' }
    ];
  }
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from - blue - 600 to - cyan - 600',
    description: 'Intelligent urban solutions',
  {
    services: [;
      {
        name: 'Smart City Infrastructure Management',
        href: '/smart - city - infrastructure - management',
        description: 'IoT and AI urban optimization',
        price: '$5, 999 / month',
      },
      {
        name: 'IoT Energy Management System',
        href: '/iot - energy - management - system',
        description: 'Smart energy optimization',
        price: '$1, 999 / month',
      },
      {
        name: 'Digital Twin Manufacturing Platform',
        href: '/digital - twin - manufacturing - platform',
        description: 'Virtual manufacturing replicas',
        price: '$4, 999 / month',
      },
      {
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous - manufacturing - ai',
        description: 'Self - optimizing factories',
        price: '$6, 999 / month',
      },
    ],
  },  {      { name: 'Smart City Infrastructure Management', href: '/smart - city - infrastructure - management', description: 'IoT and AI urban optimization', price: '$5, 999 / month' }
      { name: 'IoT Energy Management System', href: '/iot - energy - management - system', description: 'Smart energy optimization', price: '$1, 999 / month' }
      { name: 'Digital Twin Manufacturing Platform', href: '/digital - twin - manufacturing - platform', description: 'Virtual manufacturing replicas', price: '$4, 999 / month' }
      { name: 'Autonomous Manufacturing AI', href: '/autonomous - manufacturing - ai', description: 'Self - optimizing factories', price: '$6, 999 / month' }
    ];
  }
    title: '⚛️ Quantum & Advanced Tech',
    icon: Atom,
    color: 'from - indigo - 600 to - blue - 600',
    description: 'Quantum computing and beyond',
  {
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' };
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' };
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ];
  };
  {
    services: [;
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum - financial - trading - platform',
        description: 'Quantum - powered trading',
        price: '$8, 999 / month',
      },
      {
        name: 'Quantum Machine Learning Platform',
        href: '/quantum - machine - learning - platform',
        description: 'Quantum computing for ML',
        price: '$7, 999 / month',
      },
      {
        name: 'Quantum Internet Security Gateway',
        href: '/quantum - internet - security - gateway',
        description: 'Unbreakable internet security',
        price: '$3, 999 / month',
      },
      {
        name: 'Quantum Internet Protocol',
        href: '/quantum - internet - protocol',
        description: 'Next - generation internet',
        price: '$5, 999 / month',
      },
    ],
  },  {      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading - platform', description: 'Quantum - powered trading', price: '$8, 999 / month' }
      { name: 'Quantum Machine Learning Platform', href: '/quantum - machine - learning - platform', description: 'Quantum computing for ML', price: '$7, 999 / month' }
      { name: 'Quantum Internet Security Gateway', href: '/quantum - internet - security - gateway', description: 'Unbreakable internet security', price: '$3, 999 / month' }
      { name: 'Quantum Internet Protocol', href: '/quantum - internet - protocol', description: 'Next - generation internet', price: '$5, 999 / month' }
    ];
  }
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    color: 'from - emerald - 600 to - teal - 600',
    description: 'Next - generation AI solutions',
    services: [;
      {
        name: 'AI Customer Service Automation',
        href: '/ai - customer - service - automation',
        description: 'Intelligent customer support',
        price: '$899 / month',
      },
      {
        name: 'AI Education Platform',
        href: '/ai - education - platform',
        description: 'Personalized learning with AI',
        price: '$1, 499 / month',
      },
      {
        name: 'AI Content Creation Suite',
        href: '/ai - content - creation - suite',
        description: 'Unlimited AI content creation',
        price: '$1, 299 / month',
      },
      {
        name: 'AI Legal Research Platform',
        href: '/ai - legal - research - platform',
        description: 'Intelligent legal research',
        price: '$2, 999 / month',
      },
    ],
  },  {      { name: 'AI Customer Service Automation', href: '/ai - customer - service - automation', description: 'Intelligent customer support', price: '$899 / month' },
      { name: 'AI Education Platform', href: '/ai - education - platform', description: 'Personalized learning with AI', price: '$1, 499 / month' }
      { name: 'AI Content Creation Suite', href: '/ai - content - creation - suite', description: 'Unlimited AI content creation', price: '$1, 299 / month' }
      { name: 'AI Legal Research Platform', href: '/ai - legal - research - platform', description: 'Intelligent legal research', price: '$2, 999 / month' }
    ];
  }
    title: '⛓️ Blockchain & Web3',
    icon: Layers,
    color: 'from - orange - 600 to - red - 600',
    description: 'Decentralized solutions',
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    description: 'Self-driving and mobility solutions',
    services: [
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'Intelligent fleet management', price: '$3,999/month' };
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' };
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' };
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ];
  };
  {
    services: [;
      {
        name: 'Blockchain Supply Chain Transparency',
        href: '/blockchain - supply - chain - transparency',
        description: 'End - to - end supply chain visibility',
        price: '$2, 499 / month',
      },
      {
        name: 'Smart Contract Automation Platform',
        href: '/smart - contract - automation',
        description: 'Automated blockchain contracts',
        price: '$1, 999 / month',
      },
      {
        name: 'DeFi Yield Optimization',
        href: '/defi - yield - optimization',
        description: 'Maximize DeFi returns',
        price: '$3, 999 / month',
      },
      {
        name: 'NFT Marketplace Platform',
        href: '/nft - marketplace - platform',
        description: 'Complete NFT ecosystem',
        price: '$2, 999 / month',
      },
    ],
  },  {      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain - supply - chain - transparency', description: 'End - to - end supply chain visibility', price: '$2, 499 / month' }
      { name: 'Smart Contract Automation Platform', href: '/smart - contract - automation', description: 'Automated blockchain contracts', price: '$1, 999 / month' }
      { name: 'DeFi Yield Optimization', href: '/defi - yield - optimization', description: 'Maximize DeFi returns', price: '$3, 999 / month' }
      { name: 'NFT Marketplace Platform', href: '/nft - marketplace - platform', description: 'Complete NFT ecosystem', price: '$2, 999 / month' }
    ];
  }
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from - red - 600 to - pink - 600',
    description: 'Self - driving and mobility solutions',
    services: [;
      {
        name: 'Autonomous Vehicle Fleet Management',
        href: '/autonomous - vehicle - fleet - management',
        description: 'Intelligent fleet management',
        price: '$3, 999 / month',
      },
      {
        name: 'Smart Traffic Management System',
        href: '/smart - traffic - management',
        description: 'AI traffic optimization',
        price: '$4, 999 / month',
      },
      {
        name: 'Electric Vehicle Charging Network',
        href: '/ev - charging - network',
        description: 'Smart EV infrastructure',
        price: '$2, 999 / month',
      },
      {
        name: 'Mobility as a Service Platform',
        href: '/mobility - as - a-service',
        description: 'Integrated mobility solutions',
        price: '$1, 999 / month',
      },
    ],
  },  {      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous - vehicle - fleet - management', description: 'Intelligent fleet management', price: '$3, 999 / month' }
      { name: 'Smart Traffic Management System', href: '/smart - traffic - management', description: 'AI traffic optimization', price: '$4, 999 / month' }
      { name: 'Electric Vehicle Charging Network', href: '/ev - charging - network', description: 'Smart EV infrastructure', price: '$2, 999 / month' }
      { name: 'Mobility as a Service Platform', href: '/mobility - as - a-service', description: 'Integrated mobility solutions', price: '$1, 999 / month' }
    ];
  }
    title: '🏥 Healthcare & Biotech',
    icon: Heart,
    color: 'from - pink - 600 to - rose - 600',
    description: 'Advanced healthcare solutions',
  {
    title: '🎓 Education & Training',
    icon: GraduationCap,
    color: 'from-green-600 to-emerald-600',
    description: 'Next-generation learning',
    services: [
      { name: 'Virtual Reality Learning Platform', href: '/vr-learning-platform', description: 'Immersive educational experiences', price: '$1,999/month' };
      { name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'Personalized AI tutoring', price: '$899/month' },
      { name: 'Corporate Training AI', href: '/corporate-training-ai', description: 'Intelligent employee training', price: '$2,499/month' };
      { name: 'Language Learning AI', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$1,299/month' }
    ];
  };
  {
    services: [;
      {
        name: 'AI Drug Discovery Platform',
        href: '/ai - drug - discovery - platform',
        description: 'Accelerate drug development',
        price: '$9, 999 / month',
      },
      {
        name: 'Personalized Medicine AI',
        href: '/personalized - medicine - ai',
        description: 'Tailored treatment plans',
        price: '$4, 999 / month',
      },
      {
        name: 'Telemedicine AI Platform',
        href: '/telemedicine - ai - platform',
        description: 'Intelligent remote healthcare',
        price: '$2, 999 / month',
      },
      {
        name: 'Medical Imaging AI',
        href: '/medical - imaging - ai',
        description: 'Advanced diagnostic imaging',
        price: '$3, 999 / month',
      },
    ],
  },  {      { name: 'AI Drug Discovery Platform', href: '/ai - drug - discovery - platform', description: 'Accelerate drug development', price: '$9, 999 / month' }
      { name: 'Personalized Medicine AI', href: '/personalized - medicine - ai', description: 'Tailored treatment plans', price: '$4, 999 / month' }
      { name: 'Telemedicine AI Platform', href: '/telemedicine - ai - platform', description: 'Intelligent remote healthcare', price: '$2, 999 / month' }
      { name: 'Medical Imaging AI', href: '/medical - imaging - ai', description: 'Advanced diagnostic imaging', price: '$3, 999 / month' }
    ];
  }
    title: '🎓 Education & Training',
    icon: GraduationCap,
    color: 'from - green - 600 to - emerald - 600',
    description: 'Next - generation learning',
    services: [;
      {
        name: 'Virtual Reality Learning Platform',
        href: '/vr - learning - platform',
        description: 'Immersive educational experiences',
        price: '$1, 999 / month',
      },
      {
        name: 'AI Tutoring System',
        href: '/ai - tutoring - system',
        description: 'Personalized AI tutoring',
        price: '$899 / month',
      },
      {
        name: 'Corporate Training AI',
        href: '/corporate - training - ai',
        description: 'Intelligent employee training',
        price: '$2, 499 / month',
      },
      {
        name: 'Language Learning AI',
        href: '/language - learning - ai',
        description: 'AI - powered language acquisition',
        price: '$1, 299 / month',
      },
    ],
  },  {      { name: 'Virtual Reality Learning Platform', href: '/vr - learning - platform', description: 'Immersive educational experiences', price: '$1, 999 / month' }
      { name: 'AI Tutoring System', href: '/ai - tutoring - system', description: 'Personalized AI tutoring', price: '$899 / month' },
      { name: 'Corporate Training AI', href: '/corporate - training - ai', description: 'Intelligent employee training', price: '$2, 499 / month' }
      { name: 'Language Learning AI', href: '/language - learning - ai', description: 'AI - powered language acquisition', price: '$1, 299 / month' }
    ];
  }
    title: '⚖️ Legal & Compliance',
    icon: Scale,
    color: 'from - slate - 600 to - gray - 600',
    description: 'Legal technology solutions',
  {
    services: [;
      {
        name: 'Contract Analysis AI',
        href: '/contract - analysis - ai',
        description: 'Intelligent contract review',
        price: '$2, 999 / month',
      },
      {
        name: 'Compliance Monitoring Platform',
        href: '/compliance - monitoring - platform',
        description: 'Automated compliance tracking',
        price: '$3, 999 / month',
      },
      {
        name: 'Legal Document Automation',
        href: '/legal - document - automation',
        description: 'Automated legal documents',
        price: '$1, 999 / month',
      },
      {
        name: 'Regulatory Change Tracker',
        href: '/regulatory - change - tracker',
        description: 'Monitor regulatory updates',
        price: '$1, 499 / month',
      },
    ],
  },  {      { name: 'Contract Analysis AI', href: '/contract - analysis - ai', description: 'Intelligent contract review', price: '$2, 999 / month' }
      { name: 'Compliance Monitoring Platform', href: '/compliance - monitoring - platform', description: 'Automated compliance tracking', price: '$3, 999 / month' }
      { name: 'Legal Document Automation', href: '/legal - document - automation', description: 'Automated legal documents', price: '$1, 999 / month' }
      { name: 'Regulatory Change Tracker', href: '/regulatory - change - tracker', description: 'Monitor regulatory updates', price: '$1, 499 / month' }
    ];
  }
    title: '🌍 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from - emerald - 600 to - green - 600',
    description: 'Environmental solutions',
];

const _serviceCategories = [
  {_title: '🚀 2028 Futuristic Innovations', _icon: Rocket, _color: 'from-violet-600 to-purple-600', _description: 'Beyond the future of technology', _services: [
      { name: 'AI Climate Prediction Platform', _href: '/ai-climate-prediction-platform', _description: 'Predict climate changes with 99.9% accuracy', _price: '$2, _999/month'},
      {_name: 'Quantum Cybersecurity Firewall', _href: '/quantum-cybersecurity-firewall', _description: 'Unbreakable quantum encryption', _price: '$4, _999/month'},
      {_name: 'Autonomous Drone Delivery Network', _href: '/autonomous-drone-delivery-network', _description: 'AI-powered drone delivery', _price: '$1, _999/month'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform', _description: 'Revolutionary medical diagnosis', _price: '$3, _999/month'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _icon: Building, _color: 'from-blue-600 to-cyan-600', _description: 'Intelligent urban solutions', _services: [
      { name: 'Smart City Infrastructure Management', _href: '/smart-city-infrastructure-management', _description: 'IoT and AI urban optimization', _price: '$5, _999/month'},
      {_name: 'IoT Energy Management System', _href: '/iot-energy-management-system', _description: 'Smart energy optimization', _price: '$1, _999/month'},
      {_name: 'Digital Twin Manufacturing Platform', _href: '/digital-twin-manufacturing-platform', _description: 'Virtual manufacturing replicas', _price: '$4, _999/month'},
      {_name: 'Autonomous Manufacturing AI', _href: '/autonomous-manufacturing-ai', _description: 'Self-optimizing factories', _price: '$6, _999/month'}
    ]
  },
  {_title: '⚛️ Quantum & Advanced Tech', _icon: Atom, _color: 'from-indigo-600 to-blue-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform', _description: 'Quantum-powered trading', _price: '$8, _999/month'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform', _description: 'Quantum computing for ML', _price: '$7, _999/month'},
      {_name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable internet security', _price: '$3, _999/month'},
      {_name: 'Quantum Internet Protocol', _href: '/quantum-internet-protocol', _description: 'Next-generation internet', _price: '$5, _999/month'}
    ]
  },
  {_title: '🤖 AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation', _description: 'Intelligent customer support', _price: '$899/month'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized learning with AI', _price: '$1, _499/month'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite', _description: 'Unlimited AI content creation', _price: '$1, _299/month'},
      {_name: 'AI Legal Research Platform', _href: '/ai-legal-research-platform', _description: 'Intelligent legal research', _price: '$2, _999/month'}
    ]
  },
  {_title: '⛓️ Blockchain & Web3', _icon: Layers, _color: 'from-orange-600 to-red-600', _description: 'Decentralized solutions', _services: [
      { name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end supply chain visibility', _price: '$2, _499/month'},
      {_name: 'Smart Contract Automation Platform', _href: '/smart-contract-automation', _description: 'Automated blockchain contracts', _price: '$1, _999/month'},
      {_name: 'DeFi Yield Optimization', _href: '/defi-yield-optimization', _description: 'Maximize DeFi returns', _price: '$3, _999/month'},
      {_name: 'NFT Marketplace Platform', _href: '/nft-marketplace-platform', _description: 'Complete NFT ecosystem', _price: '$2, _999/month'}
    ]
  },
  {_title: '🚗 Autonomous & Mobility', _icon: Car, _color: 'from-red-600 to-pink-600', _description: 'Self-driving and mobility solutions', _services: [
      { name: 'Autonomous Vehicle Fleet Management', _href: '/autonomous-vehicle-fleet-management', _description: 'Intelligent fleet management', _price: '$3, _999/month'},
      {_name: 'Smart Traffic Management System', _href: '/smart-traffic-management', _description: 'AI traffic optimization', _price: '$4, _999/month'},
      {_name: 'Electric Vehicle Charging Network', _href: '/ev-charging-network', _description: 'Smart EV infrastructure', _price: '$2, _999/month'},
      {_name: 'Mobility as a Service Platform', _href: '/mobility-as-a-service', _description: 'Integrated mobility solutions', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏥 Healthcare & Biotech', _icon: Heart, _color: 'from-pink-600 to-rose-600', _description: 'Advanced healthcare solutions', _services: [
      { name: 'AI Drug Discovery Platform', _href: '/ai-drug-discovery-platform', _description: 'Accelerate drug development', _price: '$9, _999/month'},
      {_name: 'Personalized Medicine AI', _href: '/personalized-medicine-ai', _description: 'Tailored treatment plans', _price: '$4, _999/month'},
      {_name: 'Telemedicine AI Platform', _href: '/telemedicine-ai-platform', _description: 'Intelligent remote healthcare', _price: '$2, _999/month'},
      {_name: 'Medical Imaging AI', _href: '/medical-imaging-ai', _description: 'Advanced diagnostic imaging', _price: '$3, _999/month'}
    ]
  },
  {_title: '🎓 Education & Training', _icon: GraduationCap, _color: 'from-green-600 to-emerald-600', _description: 'Next-generation learning', _services: [
      { name: 'Virtual Reality Learning Platform', _href: '/vr-learning-platform', _description: 'Immersive educational experiences', _price: '$1, _999/month'},
      {_name: 'AI Tutoring System', _href: '/ai-tutoring-system', _description: 'Personalized AI tutoring', _price: '$899/month'},
      {_name: 'Corporate Training AI', _href: '/corporate-training-ai', _description: 'Intelligent employee training', _price: '$2, _499/month'},
      {_name: 'Language Learning AI', _href: '/language-learning-ai', _description: 'AI-powered language acquisition', _price: '$1, _299/month'}
    ]
  },
  {_title: '⚖️ Legal & Compliance', _icon: Scale, _color: 'from-slate-600 to-gray-600', _description: 'Legal technology solutions', _services: [
      { name: 'Contract Analysis AI', _href: '/contract-analysis-ai', _description: 'Intelligent contract review', _price: '$2, _999/month'},
      {_name: 'Compliance Monitoring Platform', _href: '/compliance-monitoring-platform', _description: 'Automated compliance tracking', _price: '$3, _999/month'},
      {_name: 'Legal Document Automation', _href: '/legal-document-automation', _description: 'Automated legal documents', _price: '$1, _999/month'},
      {_name: 'Regulatory Change Tracker', _href: '/regulatory-change-tracker', _description: 'Monitor regulatory updates', _price: '$1, _499/month'}
    ]
  },
  {_title: '🌍 Sustainability & Green Tech', _icon: Leaf, _color: 'from-emerald-600 to-green-600', _description: 'Environmental solutions', _services: [
      { name: 'Carbon Footprint Tracking', _href: '/carbon-footprint-tracking', _description: 'Monitor environmental impact', _price: '$1, _499/month'},
      {_name: 'Renewable Energy Management', _href: '/renewable-energy-management', _description: 'Optimize green energy', _price: '$2, _999/month'},
      {_name: 'Waste Management AI', _href: '/waste-management-ai', _description: 'Intelligent waste optimization', _price: '$1, _999/month'},
      {_name: 'Sustainable Supply Chain', _href: '/sustainable-supply-chain', _description: 'Green supply chain solutions', _price: '$3, _999/month'}
    ]
  }
],

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
services: [;
      {
        name: 'Carbon Footprint Tracking',
        href: '/carbon - footprint - tracking',
        description: 'Monitor environmental impact',
        price: '$1, 499 / month',
      },
      {
        name: 'Renewable Energy Management',
        href: '/renewable - energy - management',
        description: 'Optimize green energy',
        price: '$2, 999 / month',
      },
      {
        name: 'Waste Management AI',
        href: '/waste - management - ai',
        description: 'Intelligent waste optimization',
        price: '$1, 999 / month',
      },
      {
        name: 'Sustainable Supply Chain',
        href: '/sustainable - supply - chain',
        description: 'Green supply chain solutions',
        price: '$3, 999 / month',
      },
    ],
  }, ];      { name: 'Carbon Footprint Tracking', href: '/carbon - footprint - tracking', description: 'Monitor environmental impact', price: '$1, 499 / month' }
      { name: 'Renewable Energy Management', href: '/renewable - energy - management', description: 'Optimize green energy', price: '$2, 999 / month' }
      { name: 'Waste Management AI', href: '/waste - management - ai', description: 'Intelligent waste optimization', price: '$1, 999 / month' }
      { name: 'Sustainable Supply Chain', href: '/sustainable - supply - chain', description: 'Green supply chain solutions', price: '$3, 999 / month' }
    ];
  }
const company_links = [;
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028 - services - showcase', icon: Rocket },
  {
    name: '⭐ Ultimate 2028',
    href: '/ultimate - 2028 - services - showcase',
    icon: Star,
  },
  {
    name: '💰 2028 Pricing',
    href: '/revolutionary - 2028 - pricing',
    icon: DollarSign,
  },  { name: '📊 Case Studies', href: '/case - studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }, ];  { name: '⭐ Ultimate 2028', href: '/ultimate - 2028 - services - showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary - 2028 - pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case - studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
];
const companyLinks = [;
  { name: '🏠 Home', href: '/', icon: Home },;
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },;
  {;
    name: '⭐ Ultimate 2028',;
    href: '/ultimate-2028-services-showcase',;
    icon: Star,;
  },;
  {;
    name: '💰 2028 Pricing',;
    href: '/revolutionary-2028-pricing',;
    icon: DollarSign,;
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },];  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },;
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },;
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
;
const resource_links = [;
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev - tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },
  const handleCategoryHover = (categoryTitle: string) => {;
    setActiveCategory(categoryTitle);
  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle)
  };
  const handleCategoryLeave = () => {;
=======
      {
        name: 'AI Climate Prediction Platform'
        href: '/ai-climate-prediction-platform'
        description: 'Predict climate changes with 99.9% accuracy'
        price: '$2,999/month'
      }
      {
        name: 'Quantum Cybersecurity Firewall'
        href: '/quantum-cybersecurity-firewall'
        description: 'Unbreakable quantum encryption'
        price: '$4,999/month'
      }
      {
        name: 'Autonomous Drone Delivery Network'
        href: '/autonomous-drone-delivery-network'
        description: 'AI-powered drone delivery'
        price: '$1,999/month'
      }
      {
        name: 'AI Healthcare Diagnosis Platform'
        href: '/ai-healthcare-diagnosis-platform'
        description: 'Revolutionary medical diagnosis'
        price: '$3,999/month'
      }
    ]
  },  {      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' }
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' }
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' }
    ];
  };


    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from - blue - 600 to - cyan - 600',
    description: 'Intelligent urban solutions',


      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' };
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' };
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ];
  };


      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' };
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' };
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ];
  };


      { name: 'Corporate Training AI', href: '/corporate-training-ai', description: 'Intelligent employee training', price: '$2,499/month' };
      { name: 'Language Learning AI', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$1,299/month' }
<<<<<<< HEAD
    ]
  }
    title: '⚖️ Legal & Compliance'
    icon: Scale
    color: 'from-slate-600 to-gray-600'
    description: 'Legal technology solutions'
    services: [
      {
        name: 'Contract Analysis AI'
        href: '/contract-analysis-ai'
        description: 'Intelligent contract review'
        price: '$2,999/month'
      }
      {
        name: 'Compliance Monitoring Platform'
        href: '/compliance-monitoring-platform'
        description: 'Automated compliance tracking'
        price: '$3,999/month'
      }
      {
        name: 'Legal Document Automation'
        href: '/legal-document-automation'
        description: 'Automated legal documents'
        price: '$1,999/month'
      }
      {
        name: 'Regulatory Change Tracker'
        href: '/regulatory-change-tracker'
        description: 'Monitor regulatory updates'
        price: '$1,499/month'
      }
    ]
  },  {      { name: 'Contract Analysis AI', href: '/contract-analysis-ai', description: 'Intelligent contract review', price: '$2,999/month' }
      { name: 'Compliance Monitoring Platform', href: '/compliance-monitoring-platform', description: 'Automated compliance tracking', price: '$3,999/month' }
      { name: 'Legal Document Automation', href: '/legal-document-automation', description: 'Automated legal documents', price: '$1,999/month' }
      { name: 'Regulatory Change Tracker', href: '/regulatory-change-tracker', description: 'Monitor regulatory updates', price: '$1,499/month' }
    ]
  }
    title: '🌍 Sustainability & Green Tech'
    icon: Leaf
    color: 'from-emerald-600 to-green-600'
    description: 'Environmental solutions'
    services: [
      {
        name: 'Carbon Footprint Tracking'
        href: '/carbon-footprint-tracking'
        description: 'Monitor environmental impact'
        price: '$1,499/month'
      }
      {
        name: 'Renewable Energy Management'
        href: '/renewable-energy-management'
        description: 'Optimize green energy'
        price: '$2,999/month'
      }
      {
        name: 'Waste Management AI'
        href: '/waste-management-ai'
        description: 'Intelligent waste optimization'
        price: '$1,999/month'
      }
      {
<<<<<<< HEAD

=======
    ];
  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        name: 'Sustainable Supply Chain'
        href: '/sustainable-supply-chain'
        description: 'Green supply chain solutions'
        price: '$3,999/month'
      }
    ]
  },];      { name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking', description: 'Monitor environmental impact', price: '$1,499/month' }
      { name: 'Renewable Energy Management', href: '/renewable-energy-management', description: 'Optimize green energy', price: '$2,999/month' }
      { name: 'Waste Management AI', href: '/waste-management-ai', description: 'Intelligent waste optimization', price: '$1,999/month' }
      { name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain solutions', price: '$3,999/month' }
    ]
  }
=======
        name: 'Sustainable Supply Chain',
        href: '/sustainable-supply-chain',
        description: 'Green supply chain solutions',
        price: '$3,999/month',
      },
    ],
  },];      { name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking', description: 'Monitor environmental impact', price: '$1,499/month' };
      { name: 'Renewable Energy Management', href: '/renewable-energy-management', description: 'Optimize green energy', price: '$2,999/month' };
      { name: 'Waste Management AI', href: '/waste-management-ai', description: 'Intelligent waste optimization', price: '$1,999/month' };
      { name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain solutions', price: '$3,999/month' }
    ]
  }
<<<<<<< HEAD

];
=======
<<<<<<< HEAD
=======

];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home }
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket }
  {
    name: '⭐ Ultimate 2028'
    href: '/ultimate-2028-services-showcase'
    icon: Star
  }
  {
    name: '💰 2028 Pricing'
    href: '/revolutionary-2028-pricing'
    icon: DollarSign
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase }
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen }
  { name: '🎯 About Us', href: '/about', icon: Users }
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },];  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star }
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign }
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase }
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen }
  { name: '🎯 About Us', href: '/about', icon: Users }
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
];
<<<<<<< HEAD

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
=======
    services: [;
      {
        name: 'Carbon Footprint Tracking',
        href: '/carbon - footprint - tracking',
        description: 'Monitor environmental impact',
        price: '$1, 499 / month',
      },
      {
        name: 'Renewable Energy Management',
        href: '/renewable - energy - management',
        description: 'Optimize green energy',
        price: '$2, 999 / month',
      },
      {
        name: 'Waste Management AI',
        href: '/waste - management - ai',
        description: 'Intelligent waste optimization',
        price: '$1, 999 / month',
      },
      {
        name: 'Sustainable Supply Chain',
        href: '/sustainable - supply - chain',
        description: 'Green supply chain solutions',
        price: '$3, 999 / month',
      },
    ],
  }, ];      { name: 'Carbon Footprint Tracking', href: '/carbon - footprint - tracking', description: 'Monitor environmental impact', price: '$1, 499 / month' }
      { name: 'Renewable Energy Management', href: '/renewable - energy - management', description: 'Optimize green energy', price: '$2, 999 / month' }
      { name: 'Waste Management AI', href: '/waste - management - ai', description: 'Intelligent waste optimization', price: '$1, 999 / month' }
      { name: 'Sustainable Supply Chain', href: '/sustainable - supply - chain', description: 'Green supply chain solutions', price: '$3, 999 / month' }
    ];
  }
const company_links = [;
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028 - services - showcase', icon: Rocket },
  {
    name: '⭐ Ultimate 2028',
    href: '/ultimate - 2028 - services - showcase',
    icon: Star,
  },
  {
    name: '💰 2028 Pricing',
    href: '/revolutionary - 2028 - pricing',
    icon: DollarSign,
  },  { name: '📊 Case Studies', href: '/case - studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }, ];  { name: '⭐ Ultimate 2028', href: '/ultimate - 2028 - services - showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary - 2028 - pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case - studies', icon: Briefcase },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
];
<<<<<<< HEAD

export default function UltraFuturisticNavigation2028() {

export default function UltraFuturisticNavigation2028() {;

=======



const companyLinks = [;
  { name: '🏠 Home', href: '/', icon: Home },;
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },;
  {;
    name: '⭐ Ultimate 2028',;
    href: '/ultimate-2028-services-showcase',;
    icon: Star,;
  },;
  {;
    name: '💰 2028 Pricing',;
    href: '/revolutionary-2028-pricing',;
    icon: DollarSign,;
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },];  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },;
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },;
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: '🎯 About Us', href: '/about', icon: Users },;
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },;
  { name: '🔒 Support', href: '/support', icon: ShieldCheck },  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
=======
=======
;
const resource_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev - tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const resourceLinks = [
  { name: '📖 Documentation', href: '/docs', icon: BookOpen }
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video }
  { name: '💡 API Reference', href: '/api', icon: Code }
  { name: '🛠️ Developer Tools', href: '/dev-tools', icon: Wrench }
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone }
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud }
  { name: '🔐 Security Center', href: '/security', icon: Shield }
  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 },];  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 }
];
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function UltraFuturisticNavigation2028() {
=======
export default function UltraFuturisticNavigation2028() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
<<<<<<< HEAD


  const handleCategoryHover = (categoryTitle: string) => {;
    setActiveCategory(categoryTitle);
=======

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle)

  };

  const handleCategoryLeave = () => {;
=======
  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  }
  const handleCategoryLeave = () => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setActiveCategory(null);
  };
  const filteredServices = serviceCategories && serviceCategories.flatMap(category =>;
    category && category.services.filter(;
      service =>;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())    );
  );
  return (
<<<<<<< HEAD
<<<<<<< HEAD

=======


    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
<<<<<<< HEAD

    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    )
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
  const handleCategoryLeave = () => {;
    setActiveCategory(null);
  };
  const filteredServices = serviceCategories && serviceCategories.flatMap(category =>;
    category && category.services.filter(service =>;
      service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

  return (

    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  }
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    )
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  );
  return (
    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-purple-200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.website} className="text-purple-300 hover:text-white transition-colors">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

                href={contactInfo && contactInfo.website}
=======
<<<<<<< HEAD
href={contactInfo && contactInfo.website}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='text-purple-300 hover:text-white transition-colors'>                {contactInfo && contactInfo.website}      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-10 text-xs text-purple-200">;
            <div className="flex items-center space-x-6">;
              <div className="flex items-center space-x-2">;
                <Phone className="h-3 w-3 text-purple-400" />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="h-3 w-3 text-purple-400" />;
                <span>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="h-3 w-3 text-purple-400" />;
                <span>{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-4">;
              <a href={contactInfo && contactInfo.website} className="text-purple-300 hover:text-white transition-colors">;
                {contactInfo && contactInfo.website}
  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 }, ];  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 }
];
;
export default /**
 * UltraFuturisticNavigation2028 - Function description
 */
function UltraFuturisticNavigation2028() {
  const [is_open, setIsOpen] = useState (false);
  const [active_category, setActiveCategory] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ('');
;
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  const handleCategoryHover = (category_title: string) =>: any {
    setActiveCategory (category_title);
  }
;
  const handleCategoryLeave = () =>: any {
    setActiveCategory (null);
  }
;
  const filtered_services = service_categories.flat_map (category =>;
    category.services.filter (
      service =>;
        service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_query.toLowerCase ())    ));
;
  return (
    <nav className='relative z - 50 bg - black / 90 backdrop - blur - xl border - b border - purple - 500 / 30'>  }
;
  const handleCategoryLeave = () =>: any {
    setActiveCategory (null);
  }
;
  const filtered_services = service_categories.flat_map (category =>;
    category.services.filter (service =>;
      service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_query.toLowerCase ())));
;
  return (
    <nav className='relative z - 50 bg - black / 90 backdrop - blur - xl border - b border - purple - 500 / 30'>;
      {/* Top Contact Bar */}
      <div className='bg - gradient - to - r from - purple - 900 / 50 to - blue - 900 / 50 border - b border - purple - 500 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 10 text - xs text - purple - 200'>;
            <div className='flex items - center space - x-6'>;
              <div className='flex items - center space - x-2'>;
                <Phone className='h - 3 w - 3 text - purple - 400' />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <Mail className='h - 3 w - 3 text - purple - 400' />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <MapPin className='h - 3 w - 3 text - purple - 400' />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className='flex items - center space - x-4'>;
              <a;
                href={contact_info.website}
                className='text - purple - 300 hover:text - white transition - colors';
              >                {contact_info.website}      {/* Top Contact Bar */}
      <div className="bg - gradient - to - r from - purple - 900 / 50 to - blue - 900 / 50 border - b border - purple - 500 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="flex items - center justify - between h - 10 text - xs text - purple - 200">;
            <div className="flex items - center space - x-6">;
              <div className="flex items - center space - x-2">;
                <Phone className="h - 3 w - 3 text - purple - 400" />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <Mail className="h - 3 w - 3 text - purple - 400" />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <MapPin className="h - 3 w - 3 text - purple - 400" />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className="flex items - center space - x-4">;
              <a href={contact_info.website} className="text - purple - 300 hover:text - white transition - colors">;
                {contact_info.website}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD


      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

=======
      {/* Main Navigation */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Logo */}
          <div className='flex items-center'>;
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>;
              </div>;
              <div className='hidden md:block'>;
                <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text-xs text-purple-300'>;
                  2028 Future Technology;
<<<<<<< HEAD
                </p>              </div>          {/* Logo */}

=======
=======
      {/* Main Navigation */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300'>
                  <Rocket className='w-6 h-6 text-white' />
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
              </div>
              <div className='hidden md:block'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h1>
                <p className='text-xs text-purple-300'>
                  2028 Future Technology
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </p>              </div>          {/* Logo */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex items-center">;
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="relative">;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">;
                  <Rocket className="w-6 h-6 text-white" />;
                </div>;
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>;
              </div>;
              <div className="hidden md:block">;
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text-xs text-purple-300">2028 Future Technology</p>;
              </div>;
            </Link>;
          </div>;
<<<<<<< HEAD


          {/* Desktop Navigation */}

=======
          {/* Desktop Navigation */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className='relative group'>;
              <button className='flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2'>;
                <Sparkles className='w-5 h-5' />;
                <span>Services</span>;
                <ChevronDown className='w-4 h-4' />;
              </button>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Mega Menu */}
              <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>;
                <div className='p-6'>;
                  <div className='grid grid-cols-3 gap-6'>;
                    {serviceCategories && serviceCategories.slice(0, 6).map(category => (;
                      <div key={category && category.title} className='space-y-3'>;
                        <div className='flex items-center space-x-3'>;
                          <category&& category.icon
                            className={`w-6 h-6 bg-gradient-to-r ${category && category.color} bg-clip-text text-transparent`}
                          />;
                          <h3 className='font-semibold text-white'>;
                            {category && category.title}
                          </h3>;
                        </div>;
                        <p className='text-sm text-purple-300'>;
                          {category && category.description}
                        </p>;
                        <div className='space-y-2'>;
                          {category && category.services.slice(0, 2).map(service => (;
                            <Link
<<<<<<< HEAD
<<<<<<< HEAD
                              key={service.name}
                              href={service.href}
                              className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors group'
                            >
                              <div className='flex items-center justify-between'>
                                <div>
                                  <h4 className='text-sm font-medium text-white group-hover:text-purple-300 transition-colors'>
                                    {service.name}
                                  </h4>
                                  <p className='text-xs text-purple-300'>
                                    {service.description}
                                  </p>
                                </div>
                                <span className='text-xs text-purple-400 font-medium'>
                                  {service.price}

=======

          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}

=======
                              key={service && service.name}
                              href={service && service.href}
                              className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors group'>;
                              <div className='flex items-center justify-between'>;
                                <div>;
                                  <h4 className='text-sm font-medium text-white group-hover:text-purple-300 transition-colors'>;
                                    {service && service.name}
                                  </h4>;
                                  <p className='text-xs text-purple-300'>;
                                    {service && service.description}
                                  </p>;
                                </div>;
                                <span className='text-xs text-purple-400 font-medium'>;
                                  {service && service.price}
=======
                              key={service.name}
                              href={service.href}
                              className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors group'
                            >
                              <div className='flex items-center justify-between'>
                                <div>
                                  <h4 className='text-sm font-medium text-white group-hover:text-purple-300 transition-colors'>
                                    {service.name}
                                  </h4>
                                  <p className='text-xs text-purple-300'>
                                    {service.description}
                                  </p>
                                </div>
                                <span className='text-xs text-purple-400 font-medium'>
                                  {service.price}
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                </span>                              </div>            {/* Service Categories */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="relative group">
              <button className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2">
                <Sparkles className="w-5 h-5" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            <div className="relative group">;
              <button className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2">;
                <Sparkles className="w-5 h-5" />;
                <span>Services</span>;
                <ChevronDown className="w-4 h-4" />;
              </button>;
<<<<<<< HEAD



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              {/* Mega Menu */}
=======
              {/* Mega Menu */}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">;
                <div className="p-6">;
                  <div className="grid grid-cols-3 gap-6">;
                    {serviceCategories && serviceCategories.slice(0, 6).map((category) => (;
                      <div key={category && category.title} className="space-y-3">;
                        <div className="flex items-center space-x-3">;
                          <category && category.icon className={`w-6 h-6 bg-gradient-to-r ${category && category.color} bg-clip-text text-transparent`} />;
                          <h3 className="font-semibold text-white">{category && category.title}</h3>;
                        </div>;
                        <p className="text-sm text-purple-300">{category && category.description}</p>;
                        <div className="space-y-2">;
                          {category && category.services.slice(0, 2).map((service) => (;
<<<<<<< HEAD
                            <Link


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
              <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                          <h3 className="font-semibold text-white">{category.title}</h3>
                        </div>
                        <p className="text-sm text-purple-300">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.slice(0, 2).map((service) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                            <Link
      {/* Main Navigation */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='flex items - center justify - between h - 20'>;
          {/* Logo */}
          <div className='flex items - center'>;
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='relative'>;
                <div className='w - 12 h - 12 bg - gradient - to - br from - purple - 500 to - blue - 600 rounded - xl flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300'>;
                  <Rocket className='w - 6 h - 6 text - white' />;
                </div>;
                <div className='absolute -inset - 1 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - xl blur opacity - 75 group - hover:opacity - 100 transition - opacity duration - 300 -z - 10'></div>;
              </div>;
              <div className='hidden md:block'>;
                <h1 className='text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text - xs text - purple - 300'>;
                  2028 Future Technology;
                </p>              </div>          {/* Logo */}
          <div className="flex items - center">;
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="relative">;
                <div className="w - 12 h - 12 bg - gradient - to - br from - purple - 500 to - blue - 600 rounded - xl flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300">;
                  <Rocket className="w - 6 h - 6 text - white" />;
                </div>;
                <div className="absolute -inset - 1 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - xl blur opacity - 75 group - hover:opacity - 100 transition - opacity duration - 300 -z - 10"></div>;
              </div>;
              <div className="hidden md:block">;
                <h1 className="text - 2xl font - bold bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text - xs text - purple - 300">2028 Future Technology</p>;
              </div>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            {/* Service Categories */}
            <div className='relative group'>;
              <button className='flex items - center space - x-2 text - purple - 200 hover:text - white transition - colors py - 2'>;
                <Sparkles className='w - 5 h - 5' />;
                <span > Services</span>;
                <ChevronDown className='w - 4 h - 4' />;
              </button>;
              {/* Mega Menu */}
              <div className='absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 30 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0'>;
                <div className='p - 6'>;
                  <div className='grid grid - cols - 3 gap - 6'>;
                    {service_categories.slice (0, 6).map (category => (
                      <div key={category.title} className='space - y-3'>;
                        <div className='flex items - center space - x-3'>;
                          <category.icon;
                            className={`w - 6 h - 6 bg - gradient - to - r ${category.color} bg - clip - text text - transparent`}
                          />;
                          <h3 className='font - semibold text - white'>;
                            {category.title}
                          </h3>;
                        </div>;
                        <p className='text - sm text - purple - 300'>;
                          {category.description}
                        </p>;
                        <div className='space - y-2'>;
                          {category.services.slice (0, 2).map (service => (
                            <Link;
                              key={service.name}
                              href={service.href}
<<<<<<< HEAD
                              className='block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors group';
                            >;
                              <div className='flex items - center justify - between'>;
                                <div>;
                                  <h4 className='text - sm font - medium text - white group - hover:text - purple - 300 transition - colors'>;
                                    {service.name}
                                  </h4>;
                                  <p className='text - xs text - purple - 300'>;
                                    {service.description}
                                  </p>;
                                </div>;
                                <span className='text - xs text - purple - 400 font - medium'>;
                                  {service.price}
                                </span>                              </div>            {/* Service Categories */}
            <div className="relative group">;
              <button className="flex items - center space - x-2 text - purple - 200 hover:text - white transition - colors py - 2">;
                <Sparkles className="w - 5 h - 5" />;
                <span > Services</span>;
                <ChevronDown className="w - 4 h - 4" />;
              </button>;
              {/* Mega Menu */}
              <div className="absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - purple - 500 / 30 rounded - 2xl shadow - 2xl opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0">;
                <div className="p - 6">;
                  <div className="grid grid - cols - 3 gap - 6">;
                    {service_categories.slice (0, 6).map ((category) => (
                      <div key={category.title} className="space - y-3">;
                        <div className="flex items - center space - x-3">;
                          <category.icon className={`w - 6 h - 6 bg - gradient - to - r ${category.color} bg - clip - text text - transparent`} />;
                          <h3 className="font - semibold text - white">{category.title}</h3>;
                        </div>;
                        <p className="text - sm text - purple - 300">{category.description}</p>;
                        <div className="space - y-2">;
                          {category.services.slice (0, 2).map ((service) => (
                            <Link;
                              key={service.name}
                              href={service.href}
                              className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors group";
                            >;
                              <div className="flex items - center justify - between">;
                                <div>;
                                  <h4 className="text - sm font - medium text - white group - hover:text - purple - 300 transition - colors">;
                                    {service.name}
                  </div>
                  <div className="mt-6 pt-6 border-t border-purple-500/20">
=======
                              className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-purple-300">{service.description}</p>
                                </div>
                                <span className="text-xs text-purple-400 font-medium">{service.price}</span>
                              </div>
=======
                                </span>                              </div>

                              </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                            </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          ))}
                        </div>
                      </div>
                    ))}
<<<<<<< HEAD


                        View All Services
<<<<<<< HEAD
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======

=======
=======
                  </div>
                  <div className='mt-6 pt-6 border-t border-purple-500/20'>
                    <div className='flex items-center justify-between'>
                      <p className='text-purple-300'>
                        Explore all our cutting-edge services
                      </p>
                      <Link
                        href='/services'
                        className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'                      >                  <div className="mt-6 pt-6 border-t border-purple-500/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <div className="flex items-center justify-between">
                      <p className="text-purple-300">Explore all our cutting-edge services</p>
                      <Link
                        href="/services"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        View All Services
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                                  </h4>;
                                  <p className="text - xs text - purple - 300">{service.description}</p>;
                                </div>;
                                <span className="text - xs text - purple - 400 font - medium">{service.price}</span>;
                              </div>;
                            </Link>))}
                        </div>;
                      </div>))}
                  </div>;
                  <div className='mt - 6 pt - 6 border - t border - purple - 500 / 20'>;
                    <div className='flex items - center justify - between'>;
                      <p className='text - purple - 300'>;
                        Explore all our cutting - edge services;
                      </p>;
                      <Link;
                        href='/services';
                        className='px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'                      >                  <div className="mt - 6 pt - 6 border - t border - purple - 500 / 20">;
                    <div className="flex items - center justify - between">;
                      <p className="text - purple - 300">Explore all our cutting - edge services</p>;
                      <Link;
                        href="/services";
                        className="px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                        View All Services;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Company Links */}
            {companyLinks && companyLinks.slice(1, 5).map(link => (;
              <Link
                key={link && link.name}
                href={link && link.href}
                className='text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2'>;
                <link && link.icon className='w-4 h-4' />;
                <span>;
                  {link && link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                </span>              </Link>              <Link
                key={link && link.name}
                href={link && link.href}
                className="text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2">;
                <link && link.icon className="w-4 h-4" />;
                <span>{link && link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>;
              </Link>;
            ))}

          </div>;


=======
          </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Search and Actions */}
          <div className='hidden lg:flex items-center space-x-4'>;
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e && e.target.value)}
                className='w-64 pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Company Links */}
            {companyLinks.slice(1, 5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
              </Link>
<<<<<<< HEAD

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
            ))}
          </div>
          {/* Search and Actions */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-4">
=======
          <div className='hidden lg:flex items-center space-x-4'>
=======

            ))}
          </div>

          {/* Search and Actions */}
          <div className='hidden lg:flex items-center space-x-4'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
<<<<<<< HEAD


=======
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
            </Link>
          </div>
                onChange={(e) => setSearchQuery(e && e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              />;
            </div>;
            {/* CTA Button */}
            <Link
              href='/contact'
              className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25'>              href="/contact";
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25";
            {/* Company Links */}
            {company_links.slice (1, 5).map (link => (
              <Link;
                key={link.name}
                href={link.href}
                className='text - purple - 200 hover:text - white transition - colors py - 2 flex items - center space - x-2';
              >;
                <link.icon className='w - 4 h - 4' />;
                <span>;
                  {link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}
                </span>              </Link>              <Link;
                key={link.name}
                href={link.href}
                className="text - purple - 200 hover:text - white transition - colors py - 2 flex items - center space - x-2";
              >;
                <link.icon className="w - 4 h - 4" />;
                <span>{link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}</span>;
              </Link>))}
          </div>;
          {/* Search and Actions */}
          <div className='hidden lg:flex items - center space - x-4'>;
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_query}
                on_change={e => setSearchQuery (e.target.value)}
                className='w - 64 pl - 10 pr - 4 py - 2 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_query}
                on_change={(e) => setSearchQuery (e.target.value)}
                className="w - 64 pl - 10 pr - 4 py - 2 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
              />;
            </div>;
            {/* CTA Button */}
            <Link;
              href='/contact';
              className='px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg hover:shadow - purple - 500 / 25'            >              href="/contact";
              className="px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg hover:shadow - purple - 500 / 25";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              Get Started;
            </Link>;
          </div>;
<<<<<<< HEAD


          {/* Mobile Menu Button */}
          <div className="lg:hidden">

=======
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <button
              onClick={toggleMenu}
              className='text-purple-200 hover:text-white transition-colors p-2'>;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={toggleMenu}
              className="text-purple-200 hover:text-white transition-colors p-2">;
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

=======


=======
<<<<<<< HEAD
{/* Mobile Menu Button */}
          <div className='lg:hidden'>;
            <button;
              on_click={toggle_menu}
              className='text - purple - 200 hover:text - white transition - colors p - 2';
            >;
              {is_open ? (
                <X className='w - 6 h - 6' />) : (
                <Menu className='w - 6 h - 6' />)}            </button>            <button;
              on_click={toggle_menu}
              className="text - purple - 200 hover:text - white transition - colors p - 2";
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
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <div className='px-4 py-6 space-y-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />;
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'                />;
              </div>;


              {/* Mobile Service Categories */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>          >;
            <div className="px-4 py-6 space-y-6">;

=======
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>          >;
            <div className="px-4 py-6 space-y-6">;
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <div className="px-4 py-6 space-y-6">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
<<<<<<< HEAD


              {/* Mobile Service Categories */}

=======
=======
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
                />;
              </div>;
              {/* Mobile Service Categories */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  Services
                </h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center space-x-3 text-purple-200">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <div className="ml-8 space-y-2">
                      {category.services.map((service) => (
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={closeMenu}
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======


                        </Link>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                          className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
=======
<<<<<<< HEAD
                          className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                        >
                          <h4 className='text-sm font-medium text-white'>
                            {service.name}
                          </h4>
                          <p className='text-xs text-purple-300'>
                            {service.description}
                          </p>
                          <span className='text-xs text-purple-400 font-medium'>
                            {service.price}
                          </span>                        </Link>                          className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        >
                          <h4 className="text-sm font-medium text-white">{service.name}</h4>
                          <p className="text-xs text-purple-300">{service.description}</p>
                          <span className="text-xs text-purple-400 font-medium">{service.price}</span>
<<<<<<< HEAD
                        </Link>
=======
=======

                        </Link>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      ))}
                    </div>;
                  </div>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>

              {/* Mobile Company Links */}
=======
              </div>;
              {/* Mobile Company Links */}
              <div className="space-y-4">
=======
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {/* Mobile Company Links */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>
                  Company
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {companyLinks.map(link => (                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}              <div className="space-y-4">
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  Company
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {companyLinks.map((link) => (
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
<<<<<<< HEAD

=======

              </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Mobile Company Links */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">;
=======
=======
<<<<<<< HEAD
className="flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
=======
<<<<<<< HEAD
                      className='flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                    >
                      <link.icon className='w-5 h-5 text-purple-400' />
                      <span className='text-purple-200'>
                        {link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                      </span>                    </Link>                      className="flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    >
                      <link.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-200">{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
                    </Link>
                  ))}
                </div>;
              </div>;
              {/* Mobile CTA */}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - purple - 500 / 30';
          >;
            <div className='px - 4 py - 6 space - y-6'>;
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='w - full pl - 10 pr - 4 py - 3 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent'                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>          >;
            <div className="px - 4 py - 6 space - y-6">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - purple - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - lg text - white placeholder - purple - 300 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>;
                  Services;
                </h3>;
                {service_categories.map (category => (
                  <div key={category.title} className='space - y-2'>;
                    <div className='flex items - center space - x-3 text - purple - 200'>;
                      <category.icon className='w - 5 h - 5' />;
                      <span className='font - medium'>{category.title}</span>;
                    </div>;
                    <div className='ml - 8 space - y-2'>;
                      {category.services.map (service => (                        <Link;
                          key={service.name}
                          href={service.href}
                          on_click={close_menu}                  Services;
                </h3>;
                {service_categories.map ((category) => (
                  <div key={category.title} className="space - y-2">;
                    <div className="flex items - center space - x-3 text - purple - 200">;
                      <category.icon className="w - 5 h - 5" />;
                      <span className="font - medium">{category.title}</span>;
                    </div>;
                    <div className="ml - 8 space - y-2">;
                      {category.services.map ((service) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          on_click={close_menu}
                          className='block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                        >;
                          <h4 className='text - sm font - medium text - white'>;
                            {service.name}
                          </h4>;
                          <p className='text - xs text - purple - 300'>;
                            {service.description}
                          </p>;
                          <span className='text - xs text - purple - 400 font - medium'>;
                            {service.price}
                          </span>                        </Link>                          className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                        >;
                          <h4 className="text - sm font - medium text - white">{service.name}</h4>;
                          <p className="text - xs text - purple - 300">{service.description}</p>;
                          <span className="text - xs text - purple - 400 font - medium">{service.price}</span>))}
                    </div>;
                  </div>))}
              </div>;
              {/* Mobile Company Links */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2'>;
                  Company;
                </h3>;
                <div className='grid grid - cols - 2 gap - 4'>;
                  {company_links.map (link => (                    <Link;
                      key={link.name}
                      href={link.href}
                      on_click={close_menu}              <div className="space - y-4">;
                <h3 className="text - lg font - semibold text - white border - b border - purple - 500 / 30 pb - 2">;
                  Company;
                </h3>;
                <div className="grid grid - cols - 2 gap - 4">;
                  {company_links.map ((link) => (
                      key={link.name}
                      href={link.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                    >;
                      <link.icon className='w - 5 h - 5 text - purple - 400' />;
                      <span className='text - purple - 200'>;
                        {link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}
                      </span>                    </Link>                      className="flex items - center space - x-3 p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                    >;
                      <link.icon className="w - 5 h - 5 text - purple - 400" />;
                      <span className="text - purple - 200">{link.name.replace (/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim ()}</span>))}
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt - 4 border - t border - purple - 500 / 30'>;
                <Link;
                  href='/contact';
                  on_click={close_menu}
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300'                >                <Link;
                  href="/contact";
                  on_click={close_menu}
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300";
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="pt-4 border-t border-purple-500/30">
=======
              <div className='pt-4 border-t border-purple-500/30'>
=======

                    </Link>

                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className='pt-4 border-t border-purple-500/30'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
<<<<<<< HEAD
      </AnimatePresence>

      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50'>
          <div className='p-4'>
            <div className='space-y-2'>
              {filteredServices.slice(0, 8).map(service => (
                <Link
                  key={service.name}
                  href={service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
=======
        )}
<<<<<<< HEAD
</AnimatePresence>;
      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50">
          <div className="p-4">
            <div className="space-y-2">
              {filteredServices.slice(0, 8).map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
=======
      </AnimatePresence>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50'>
          <div className='p-4'>
            <div className='space-y-2'>
              {filteredServices.slice(0, 8).map(service => (
                <Link
                  key={service.name}
                  href={service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-sm font-medium text-white'>
                        {service.name}
                      </h4>
                      <p className='text-xs text-purple-300'>
                        {service.description}
                      </p>
                    </div>
                    <span className='text-xs text-purple-400 font-medium'>
                      {service.price}
<<<<<<< HEAD
                    </span>                  </div>                <Link
                  key={service.name}
                  href={service.href}
                  className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-sm font-medium text-white'>
                        {service.name}
                      </h4>
                      <p className='text-xs text-purple-300'>
                        {service.description}
                      </p>
                    </div>
<<<<<<< HEAD
                    <span className='text-xs text-purple-400 font-medium'>
                      {service.price}

=======

      </AnimatePresence>;


      {/* Search Results Dropdown */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                    <span className="text-xs text-purple-400 font-medium">{service.price}</span>
                  </div>
=======
                    </span>                  </div>

                  </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              ))}
            </div>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD


  );

}
=======

}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </nav>;
  );
}
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD

}

}

  );
}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
          </motion.div>)}
      </AnimatePresence>;
      {/* Search Results Dropdown */}
      {search_query && filtered_services.length > 0 && (
        <div className='absolute top - full left - 0 right - 0 bg - black / 95 backdrop - blur - xl border border - purple - 500 / 30 rounded - 2xl shadow - 2xl z - 50'>;
          <div className='p - 4'>;
            <div className='space - y-2'>;
              {filtered_services.slice (0, 8).map (service => (
                <Link;
                  key={service.name}
                  href={service.href}
                  className='block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors';
                >;
                  <div className='flex items - center justify - between'>;
                    <div>;
                      <h4 className='text - sm font - medium text - white'>;
                        {service.name}
                      </h4>;
                      <p className='text - xs text - purple - 300'>;
                        {service.description}
                      </p>;
                    </div>;
                    <span className='text - xs text - purple - 400 font - medium'>;
                      {service.price}
                    </span>                  </div>                <Link;
                  key={service.name}
                  href={service.href}
                  className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple - 900 / 40 transition - colors";
                >;
                  <div className="flex items - center justify - between">;
                    <div>;
                      <h4 className="text - sm font - medium text - white">{service.name}</h4>;
                      <p className="text - xs text - purple - 300">{service.description}</p>;
                    </div>;
                    <span className="text - xs text - purple - 400 font - medium">{service.price}</span>;
                  </div>;
                </Link>))}
            </div>;
          </div>;
        </div>)}
    </nav>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
