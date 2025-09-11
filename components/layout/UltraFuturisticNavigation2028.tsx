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
  BarChart3;} from 'lucide-react';import {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Smartphone,;
  BarChart3,;} from 'lucide-react';import {
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
<<<<<<< HEAD
<<<<<<< HEAD
  Code, Wrench, Smartphone, BarChart3

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' };
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    ];
  };


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

];

<<<<<<< HEAD
];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    ];
  };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
const resource_links = [;
=======
=======
=======
;
const resource_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev - tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },


<<<<<<< HEAD



<<<<<<< HEAD
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

export default function UltraFuturisticNavigation2028() {
export default function UltraFuturisticNavigation2028() {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const handleCategoryHover = (categoryTitle: string) => {;
    setActiveCategory(categoryTitle);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle)

  };

  const handleCategoryLeave = () => {;
<<<<<<< HEAD
<<<<<<< HEAD
  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  }
  const handleCategoryLeave = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setActiveCategory(null);
  };
  const filteredServices = serviceCategories && serviceCategories.flatMap(category =>;
    category && category.services.filter(;
      service =>;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())    );
  );
  return (


    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
<<<<<<< HEAD
    )
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

    )
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  }
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

    )
  );
  return (
    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

  return (

    <nav className="relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30">
      {/* Top Contact Bar */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                href={contactInfo && contactInfo.website}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Main Navigation */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>



<<<<<<< HEAD
<<<<<<< HEAD
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      {/* Main Navigation */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>

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
                </p>              </div>          {/* Logo */}
=======
                </p>              </div>          {/* Logo */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </p>              </div>          {/* Logo */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <button className='flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2'>;
                <Sparkles className='w-5 h-5' />;
                <span>Services</span>;
                <ChevronDown className='w-4 h-4' />;
              </button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}

<<<<<<< HEAD
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                                </span>                              </div>            {/* Service Categories */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-8">
            {/* Service Categories */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              {/* Mega Menu */}
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
=======



              {/* Mega Menu */}
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
                            <Link
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              key={service.name}
                              href={service.href}
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
                                </span>                              </div>

<<<<<<< HEAD
                              </div>

                            </Link>
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              {/* Mega Menu */}
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
                            <Link


                            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          ))}
                        </div>
                      </div>
                    ))}

<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
                  <div className='mt-6 pt-6 border-t border-purple-500/20'>
                    <div className='flex items-center justify-between'>
                      <p className='text-purple-300'>
                        Explore all our cutting-edge services
                      </p>
                      <Link
                        href='/services'
                        className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'                      >                  <div className="mt-6 pt-6 border-t border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <p className="text-purple-300">Explore all our cutting-edge services</p>
                      <Link
                        href="/services"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        View All Services
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        View All Services

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
          {/* Search and Actions */}
          <div className='hidden lg:flex items-center space-x-4'>

            ))}
          </div>

          {/* Search and Actions */}
          <div className='hidden lg:flex items-center space-x-4'>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              Get Started;
            </Link>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          {/* Mobile Menu Button */}
          <div className="lg:hidden">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            <div className='px-4 py-6 space-y-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'                />;
              </div>;
              {/* Mobile Service Categories */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>          >;
            <div className="px-4 py-6 space-y-6">;
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30"

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'

          >
            <div className="px-4 py-6 space-y-6">
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >
            <div className="px-4 py-6 space-y-6">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
          >
            <div className="px-4 py-6 space-y-6">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
                />;
              </div>;
              {/* Mobile Service Categories */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              {/* Mobile Service Categories */}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={closeMenu}
<<<<<<< HEAD


<<<<<<< HEAD


                        </Link>


                          className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                        >
                          <h4 className="text-sm font-medium text-white">{service.name}</h4>
                          <p className="text-xs text-purple-300">{service.description}</p>
                          <span className="text-xs text-purple-400 font-medium">{service.price}</span>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        </Link>


<<<<<<< HEAD
<<<<<<< HEAD
                        </Link>

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </div>;
                  </div>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
              {/* Mobile Company Links */}
              <div className="space-y-4">
              </div>

=======
              </div>

              </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Company Links */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>
                  Company
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {companyLinks.map(link => (                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}              <div className="space-y-4">
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </div>;


<<<<<<< HEAD



              {/* Mobile Company Links */}


=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Mobile Company Links */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className='flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                    >
                      <link.icon className='w-5 h-5 text-purple-400' />
                      <span className='text-purple-200'>
                        {link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                      </span>                    </Link>                      className="flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
                    >
                      <link.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-200">{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
<<<<<<< HEAD
                    </Link>
                  ))}
                </div>;
              </div>;
              {/* Mobile CTA */}
=======
=======
                  ))}
                </div>
              </div>
              {/* Mobile CTA */}
              <div className='pt-4 border-t border-purple-500/30'>


                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="pt-4 border-t border-purple-500/30">
              <div className='pt-4 border-t border-purple-500/30'>
=======
              <div className="pt-4 border-t border-purple-500/30">
=======
              <div className='pt-4 border-t border-purple-500/30'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    </Link>

                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className='pt-4 border-t border-purple-500/30'>

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
<<<<<<< HEAD
        )}
      </AnimatePresence>

=======

        )}
      </AnimatePresence>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      </AnimatePresence>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                    </span>                  </div>                <Link
                  key={service.name}
                  href={service.href}
                  className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
                >
<<<<<<< HEAD
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-sm font-medium text-white'>
                        {service.name}
                      </h4>
                      <p className='text-xs text-purple-300'>
                        {service.description}
                      </p>
                    </div>
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      </AnimatePresence>;


      {/* Search Results Dropdown */}


                </Link>
<<<<<<< HEAD
=======
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-white">{service.name}</h4>
                      <p className="text-xs text-purple-300">{service.description}</p>
                    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span className="text-xs text-purple-400 font-medium">{service.price}</span>
                  </div>
                    </span>                  </div>

<<<<<<< HEAD
                  </div>

                </Link>
=======
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
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  );

}
=======

}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </nav>;
  );
}
    </nav>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
