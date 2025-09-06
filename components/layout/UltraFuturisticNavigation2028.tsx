<<<<<<< HEAD

=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

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
  BarChart3;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield
  Microscope, DollarSign, Home, Users, Briefcase

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
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

  Smartphone,;
  BarChart3,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, ;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;
  Microscope, DollarSign, Home, Users, Briefcase;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;
  Microscope, DollarSign, Home, Users, Briefcase;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  Code, Wrench, Smartphone, BarChart3

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' };
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' };
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ];
  };
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' };
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' };
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ];
  };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' };
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' };
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ]
};
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' };
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' };
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ]
};

<<<<<<< HEAD
    ];
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    ]
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home }
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket }
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  Code, Wrench, Smartphone, BarChart3
 } from 'lucide-react';
const contactInfo = null;
const serviceCategories = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    title: '🚀 2028 Futuristic Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
{
        name: 'AI Climate Prediction Platform',
        href: '/ai-climate-prediction-platform',
        description: 'Predict climate changes with 99.9% accuracy',
        price: '$2,999/month',
      },
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
        name: 'AI Healthcare Diagnosis Platform',
        href: '/ai-healthcare-diagnosis-platform',
        description: 'Revolutionary medical diagnosis',
        price: '$3,999/month',
      },
    ],
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    description: 'Intelligent urban solutions',
    services: [
{
        name: 'Smart City Infrastructure Management',
        href: '/smart-city-infrastructure-management',
        description: 'IoT and AI urban optimization',
        price: '$5,999/month',
      },
      {
        name: 'IoT Energy Management System'
        href: '/iot-energy-management-system'
        description: 'Smart energy optimization'
        price: '$1,999/month'
      }
      {
        name: 'Digital Twin Manufacturing Platform'
        href: '/digital-twin-manufacturing-platform'
        description: 'Virtual manufacturing replicas'
        price: '$4,999/month'
      }
      {
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous-manufacturing-ai',
        description: 'Self-optimizing factories',
        price: '$6,999/month',
      },
    ],
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and beyond',
    services: [
{
        name: 'Quantum Financial Trading Platform',
        href: '/quantum-financial-trading-platform',
        description: 'Quantum-powered trading',
        price: '$8,999/month',
      },
      {
        name: 'Quantum Machine Learning Platform'
        href: '/quantum-machine-learning-platform'
        description: 'Quantum computing for ML'
        price: '$7,999/month'
      }
      {
        name: 'Quantum Internet Security Gateway'
        href: '/quantum-internet-security-gateway'
        description: 'Unbreakable internet security'
        price: '$3,999/month'
      }
      {
        name: 'Quantum Internet Protocol',
        href: '/quantum-internet-protocol',
        description: 'Next-generation internet',
        price: '$5,999/month',
      },
    ],
  },
  {
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
{
        name: 'AI Customer Service Automation',
        href: '/ai-customer-service-automation',
        description: 'Intelligent customer support',
        price: '$899/month',
      },
      {
        name: 'AI Education Platform'
        href: '/ai-education-platform'
        description: 'Personalized learning with AI'
        price: '$1,499/month'
      }
      {
        name: 'AI Content Creation Suite'
        href: '/ai-content-creation-suite'
        description: 'Unlimited AI content creation'
        price: '$1,299/month'
      }
      {
        name: 'AI Legal Research Platform',
        href: '/ai-legal-research-platform',
        description: 'Intelligent legal research',
        price: '$2,999/month',
      },
    ],
  },
  {
    title: '⛓️ Blockchain & Web3',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized solutions',
    services: [
{
        name: 'Blockchain Supply Chain Transparency',
        href: '/blockchain-supply-chain-transparency',
        description: 'End-to-end supply chain visibility',
        price: '$2,499/month',
      },
      {
        name: 'Smart Contract Automation Platform'
        href: '/smart-contract-automation'
        description: 'Automated blockchain contracts'
        price: '$1,999/month'
      }
      {
        name: 'DeFi Yield Optimization'
        href: '/defi-yield-optimization'
        description: 'Maximize DeFi returns'
        price: '$3,999/month'
      }
      {
        name: 'NFT Marketplace Platform',
        href: '/nft-marketplace-platform',
        description: 'Complete NFT ecosystem',
        price: '$2,999/month',
      },
    ],
  },
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    description: 'Self-driving and mobility solutions',
    services: [
{
        name: 'Autonomous Vehicle Fleet Management',
        href: '/autonomous-vehicle-fleet-management',
        description: 'Intelligent fleet management',
        price: '$3,999/month',
      },
      {
        name: 'Smart Traffic Management System'
        href: '/smart-traffic-management'
        description: 'AI traffic optimization'
        price: '$4,999/month'
      }
      {
        name: 'Electric Vehicle Charging Network'
        href: '/ev-charging-network'
        description: 'Smart EV infrastructure'
        price: '$2,999/month'
      }
      {
        name: 'Mobility as a Service Platform',
        href: '/mobility-as-a-service',
        description: 'Integrated mobility solutions',
        price: '$1,999/month',
      },
    ],
  },
  {
    title: '🏥 Healthcare & Biotech',
    icon: Heart,
    color: 'from-pink-600 to-rose-600',
    description: 'Advanced healthcare solutions',
    services: [
{
        name: 'AI Drug Discovery Platform',
        href: '/ai-drug-discovery-platform',
        description: 'Accelerate drug development',
        price: '$9,999/month',
      },
      {
        name: 'Personalized Medicine AI'
        href: '/personalized-medicine-ai'
        description: 'Tailored treatment plans'
        price: '$4,999/month'
      }
      {
        name: 'Telemedicine AI Platform'
        href: '/telemedicine-ai-platform'
        description: 'Intelligent remote healthcare'
        price: '$2,999/month'
      }
      {
        name: 'Medical Imaging AI',
        href: '/medical-imaging-ai',
        description: 'Advanced diagnostic imaging',
        price: '$3,999/month',
      },
    ],
  },
  {
    title: '🎓 Education & Training',
    icon: GraduationCap,
    color: 'from-green-600 to-emerald-600',
    description: 'Next-generation learning',
    services: [
{
        name: 'Virtual Reality Learning Platform',
        href: '/vr-learning-platform',
        description: 'Immersive educational experiences',
        price: '$1,999/month',
      },
      {
        name: 'AI Tutoring System'
        href: '/ai-tutoring-system'
        description: 'Personalized AI tutoring'
        price: '$899/month'
      }
      {
        name: 'Corporate Training AI'
        href: '/corporate-training-ai'
        description: 'Intelligent employee training'
        price: '$2,499/month'
      }
      {
        name: 'Language Learning AI',
        href: '/language-learning-ai',
        description: 'AI-powered language acquisition',
        price: '$1,299/month',
      },
    ],
  },
  {
    title: '⚖️ Legal & Compliance',
    icon: Scale,
    color: 'from-slate-600 to-gray-600',
    description: 'Legal technology solutions',
    services: [
{
        name: 'Contract Analysis AI',
        href: '/contract-analysis-ai',
        description: 'Intelligent contract review',
        price: '$2,999/month',
      },
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
        name: 'Regulatory Change Tracker',
        href: '/regulatory-change-tracker',
        description: 'Monitor regulatory updates',
        price: '$1,499/month',
      },
    ],
  },
  {
    title: '🌍 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from-emerald-600 to-green-600',
    description: 'Environmental solutions',
    services: [
{
        name: 'Carbon Footprint Tracking',
        href: '/carbon-footprint-tracking',
        description: 'Monitor environmental impact',
        price: '$1,499/month',
      },
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
        name: 'Sustainable Supply Chain',
        href: '/sustainable-supply-chain',
        description: 'Green supply chain solutions',
        price: '$3,999/month',
      },
    ],
  },
];

origin/cursor/automate-test-improve-and-merge-code-2533
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
{
    name: '⭐ Ultimate 2028',
    href: '/ultimate-2028-services-showcase',
    icon: Star,
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    name: '⭐ Ultimate 2028'
    href: '/ultimate-2028-services-showcase'
    icon: Star
  }
  {
<<<<<<< HEAD
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

=======
    services: [;
      {;
        name: 'Carbon Footprint Tracking',;
        href: '/carbon-footprint-tracking',,
  description: 'Monitor environmental impact',;
        price: '$1,499/month',;
      },;
      {;
        name: 'Renewable Energy Management',;
        href: '/renewable-energy-management',,
  description: 'Optimize green energy',;
        price: '$2,999/month',;
      },;
      {;
        name: 'Waste Management AI',;
        href: '/waste-management-ai',,
  description: 'Intelligent waste optimization',;
        price: '$1,999/month',;
      },;
      {;
        name: 'Sustainable Supply Chain',;
        href: '/sustainable-supply-chain',,
  description: 'Green supply chain solutions',;
        price: '$3,999/month',;
      },;
    ],;
  },];      { name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking', description: 'Monitor environmental impact', price: '$1,499/month' };
    title: '🌍 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from - emerald - 600 to - green - 600',
    description: 'Environmental solutions',
      { name: 'Renewable Energy Management', href: '/renewable-energy-management', description: 'Optimize green energy', price: '$2,999/month' };
      { name: 'Waste Management AI', href: '/waste-management-ai', description: 'Intelligent waste optimization', price: '$1,999/month' };
      { name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain solutions', price: '$3,999/month' }
    ];
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    name: '💰 2028 Pricing',
    href: '/revolutionary-2028-pricing',
    icon: DollarSign,
  },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
{ name: '🔒 Support', href: '/support', icon: ShieldCheck },
];
const resourceLinks = [
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev-tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },
{ name: '📊 Analytics', href: '/analytics', icon: BarChart3 },
origin/cursor/automate-test-improve-and-merge-code-2533
];

export default function UltraFuturisticNavigation2028() {
export default function UltraFuturisticNavigation2028() {;

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev - tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const handleCategoryHover = (categoryTitle: string) => {;
    setActiveCategory(categoryTitle);
  }
  const handleCategoryLeave = () => {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setActiveCategory(null);
  };
=======
    setActiveCategory(null)
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const filteredServices = serviceCategories && serviceCategories.flatMap(category =>;
    category && category.services.filter(;
      service =>;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())    );
  );
  return (
<<<<<<< HEAD

=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  }
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>  };
    <nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
<<<<<<< HEAD

    )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );

  return (
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const handleCategoryHover = (categoryTitle: string) => {
setActiveCategory(categoryTitle);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  }
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(
      service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
<nav className='relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30'>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-10 text-xs text-purple-200'>
            <div className='flex items-center space-x-6'>
              <div className='flex items-center space-x-2'>
                <Phone className='h-3 w-3 text-purple-400' />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-3 w-3 text-purple-400' />
                <span>{contactInfo.email}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-3 w-3 text-purple-400' />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <a
                href={contactInfo.website}
                className='text-purple-300 hover:text-white transition-colors'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Main Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                </p>              </div>          {/* Logo */}

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


          {/* Desktop Navigation */}

            <div className='relative group'>;
              <button className='flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2'>;
                <Sparkles className='w-5 h-5' />;
                <span>Services</span>;
                <ChevronDown className='w-4 h-4' />;
              </button>;


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                </p>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'>
            {/* Service Categories */}
            <div className='relative group'>
              <button className='flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2'>
                <Sparkles className='w-5 h-5' />
                <span>Services</span>
                <ChevronDown className='w-4 h-4' />
              </button>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD

                                </span>                              </div>            {/* Service Categories */}
              {/* Mega Menu */}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-6 pt-6 border-t border-purple-500/20'>
                    <div className='flex items-center justify-between'>
                      <p className='text-purple-300'>
                        Explore all our cutting-edge services
                      </p>
                      <Link
                        href='/services'
                        className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'                      >                  <div className="mt-6 pt-6 border-t border-purple-500/20">

=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                                </span>
                              </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                            </Link>
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>
<div className='mt-6 pt-6 border-t border-purple-500/20'>
                    <div className='flex items-center justify-between'>
                      <p className='text-purple-300'>
                        Explore all our cutting-edge services
                      </p>
origin/cursor/automate-test-improve-and-merge-code-2533
                      <Link
                        href='/services'
<<<<<<< HEAD
                        className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'                      >                  <div className="mt-6 pt-6 border-t border-purple-500/20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <div className="flex items-center justify-between">
                      <p className="text-purple-300">Explore all our cutting-edge services</p>
                      <Link
                        href="/services"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
<<<<<<< HEAD
                      >
                        View All Services
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
=======
                        className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'
                      >
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        View All Services
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            {/* Company Links */}
<<<<<<< HEAD
<<<<<<< HEAD
            {companyLinks.slice(1, 5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
            >;
              Get Started;
            </Link>;
          </div>;
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            </button>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
{companyLinks.slice(1, 5).map(link => (
              <Link
                key={link.name}
                href={link.href}
                className='text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2'
              >
                <link.icon className='w-4 h-4' />
                <span>
                  {link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                </span>
              </Link>
            ))}
          </div>
          {/* Search and Actions */}
<div className='hidden lg:flex items-center space-x-4'>
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-64 pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
            {/* CTA Button */}
            <Link
href='/contact'
              className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25'
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
<div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-purple-200 hover:text-white transition-colors p-2'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          >
            <div className='px-4 py-6 space-y-6'>
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400' />;
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Mobile Service Categories */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>          >;
            <div className="px-4 py-6 space-y-6">;
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          >
            <div className="px-4 py-6 space-y-6">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                />
              </div>
              {/* Mobile Service Categories */}
<div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>
                  Services
                </h3>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-2'>
                    <div className='flex items-center space-x-3 text-purple-200'>
                      <category.icon className='w-5 h-5' />
                      <span className='font-medium'>{category.title}</span>
                    </div>
                    <div className='ml-8 space-y-2'>
                      {category.services.map(service => (
origin/cursor/automate-test-improve-and-merge-code-2533
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={closeMenu}
<<<<<<< HEAD
<<<<<<< HEAD

                        >
                          <h4 className="text-sm font-medium text-white">{service.name}</h4>
                          <p className="text-xs text-purple-300">{service.description}</p>
                          <span className="text-xs text-purple-400 font-medium">{service.price}</span>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

                        </Link>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                          </span>
                        </Link>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      ))}
                    </div>;
                  </div>;
                ))}
<<<<<<< HEAD
              </div>

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
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}

                    >
                      <link.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-200">{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
                    </Link>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Mobile Company Links */}
<div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white border-b border-purple-500/30 pb-2'>
                  Company
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {companyLinks.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
className='flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'
                    >
                      <link.icon className='w-5 h-5 text-purple-400' />
                      <span className='text-purple-200'>
                        {link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile CTA */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='pt-4 border-t border-purple-500/30'>

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  ))}
              {/* Mobile CTA */}
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
              <div className='pt-4 border-t border-purple-500/30'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'>                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">;
<<<<<<< HEAD

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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
      </AnimatePresence>

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      </AnimatePresence>;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='pt-4 border-t border-purple-500/30'>
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
=======
                    </span>
                  </div>
                    </span>                  </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </Link>
      {/* Search Results Dropdown */}
      {searchQuery && filteredServices && filteredServices.length > 0 && (;
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50'>;
          <div className='p-4'>;
            <div className='space-y-2'>;
              {filteredServices && filteredServices.slice(0, 8).map(service => (;
                <Link
                  key={service && service.name}
                  href={service && service.href}
                  className='block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors'>;
                  <div className='flex items-center justify-between'>;
                    <div>;
                      <h4 className='text-sm font-medium text-white'>;
                        {service && service.name}
                      </h4>;
                      <p className='text-xs text-purple-300'>;
                        {service && service.description}
                      </p>;
                    </div>;
                    <span className='text-xs text-purple-400 font-medium'>;
                      {service && service.price}
                    </span>                  </div>                <Link
                  key={service && service.name}
                  href={service && service.href}
                  className="block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors">;
                  <div className="flex items-center justify-between">;
                    <div>;
                      <h4 className="text-sm font-medium text-white">{service && service.name}</h4>;
                      <p className="text-xs text-purple-300">{service && service.description}</p>;
                    </div>;
                    <span className="text-xs text-purple-400 font-medium">{service && service.price}</span>;
                  </div>;
                </Link>;
              ))}
            </div>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
}
  );
}
<<<<<<< HEAD
    </nav>

}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                  className="block p - 3 rounded - lg bg - purple - 900 / 20 hover:bg - purple-900 / 40 transition-colors";
                >;
                  <div className="flex items-center justify-between">;
                    <div>;
                      <h4 className="text - sm font-medium text-white">{service.name}</h4>;
                      <p className="text - xs text-purple-300">{service.description}</p>;
                    </div>;
                    <span className="text - xs text - purple-400 font-medium">{service.price}</span>;
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
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    </nav>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </nav>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
