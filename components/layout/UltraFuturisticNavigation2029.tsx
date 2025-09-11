
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
=======

import React, { useState, useEffect } from 'react';

=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  Menu,
  X,
  ChevronDown,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  Eye,;
  Timer,;} from 'lucide-react';import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Briefcase, ;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  BookOpen, MessageCircle, Star, TrendingUp, Target;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🧠 2029 AI Consciousness & Innovation'
    icon: Brain
    color: 'from-purple-600 to-pink-600'
    description: 'Beyond human consciousness simulation'
    services: [
=======
=======

    title: '🚀 2029 Space Colonization & Mining',
    icon: Rocket,
    color: 'from - red - 600 to - orange - 600',
    description: 'Interplanetary expansion and resource extraction',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from - green - 600 to - teal - 600',
    description: 'Habitat design and space energy harvesting',
const _serviceCategories = [
  {_title: '🧠 2029 AI Consciousness & Innovation', _icon: Brain, _color: 'from-purple-600 to-pink-600', _description: 'Beyond human consciousness simulation', _services: [
      { name: 'AI Consciousness Simulation Platform', _href: '/ai-consciousness-simulation-platform', _description: 'Simulate human consciousness in AI systems', _price: '$12, _999/month'},
      {_name: 'Autonomous AI Corporation Platform', _href: '/autonomous-ai-corporation-platform', _description: 'AI systems that run entire corporations', _price: '$45, _999/month'},
      {_name: 'AI Reality Augmentation Platform', _href: '/ai-reality-augmentation-platform', _description: 'Real-time AI reality enhancement', _price: '$18, _999/month'}
    ]
  },
  {_title: '⚛️ 2029 Quantum & Neuroscience', _icon: Atom, _color: 'from-indigo-600 to-purple-600', _description: 'Quantum brain-computer interfaces', _services: [
      { name: 'Quantum Brain-Computer Interface', _href: '/quantum-brain-computer-interface', _description: 'Direct quantum communication with brain', _price: '$25, _999/month'},
      {_name: 'Quantum Time Manipulation Platform', _href: '/quantum-time-manipulation-platform', _description: 'Manipulate time perception', _price: '$35, _999/month'}
    ]
  },
  {_title: '🚀 2029 Space Colonization & Mining', _icon: Rocket, _color: 'from-red-600 to-orange-600', _description: 'Interplanetary expansion and resource extraction', _services: [
      { name: 'Mars Colonization Automation Platform', _href: '/mars-colonization-automation-platform', _description: 'Automate Mars colonization process', _price: '$99, _999/month'},
      {_name: 'Interplanetary Communication Network', _href: '/interplanetary-communication-network', _description: 'Real-time solar system communication', _price: '$75, _999/month'},
      {_name: 'Space Mining Automation Platform', _href: '/space-mining-automation-platform', _description: 'Automate asteroid and lunar mining', _price: '$65, _999/month'}
    ]
  },
  {_title: '🏠 2029 Space Architecture & Energy', _icon: Building, _color: 'from-green-600 to-teal-600', _description: 'Habitat design and space energy harvesting', _services: [
      { name: 'Space Habitat Design Platform', _href: '/space-habitat-design-platform', _description: 'Design space habitats for any planet', _price: '$45, _999/month'},
      {_name: 'Space Energy Harvesting Platform', _href: '/space-energy-harvesting-platform', _description: 'Harvest energy from space sources', _price: '$55, _999/month'}
    ]
  },
  {_title: '🤖 Advanced AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Emotional Intelligence Platform', _href: '/ai-emotional-intelligence-platform', _description: 'AI that understands human emotions', _price: '$2, _999/month'},
      {_name: 'AI Multimodal Fusion Platform', _href: '/ai-multimodal-fusion-platform', _description: 'Unified text, _image, _audio, _video AI', _price: '$4, _999/month'},
      {_name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation', _description: 'Intelligent customer support', _price: '$899/month'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized learning with AI', _price: '$1, _499/month'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite', _description: 'Unlimited AI content creation', _price: '$1, _299/month'}
    ]
  },
  {_title: '⛓️ Blockchain & Web3 Solutions', _icon: Layers, _color: 'from-orange-600 to-red-600', _description: 'Decentralized and blockchain solutions', _services: [
      { name: 'Quantum Blockchain Platform', _href: '/quantum-blockchain-platform', _description: 'Quantum-resistant blockchain security', _price: '$6, _999/month'},
      {_name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end supply chain visibility', _price: '$2, _499/month'},
      {_name: 'Smart Contract Automation Platform', _href: '/smart-contract-automation', _description: 'Automated blockchain contracts', _price: '$1, _999/month'},
      {_name: 'DeFi Yield Optimization', _href: '/defi-yield-optimization', _description: 'Maximize DeFi returns', _price: '$3, _999/month'}
    ]
  },
  {_title: '🏥 Healthcare & Biotech Innovation', _icon: Heart, _color: 'from-pink-600 to-rose-600', _description: 'Advanced healthcare solutions', _services: [
      { name: 'AI Personalized Medicine Platform', _href: '/ai-personalized-medicine-platform', _description: 'AI-powered personalized treatment', _price: '$8, _999/month'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform', _description: 'Revolutionary medical diagnosis', _price: '$3, _999/month'},
      {_name: 'Biotech Research Automation', _href: '/biotech-research-automation', _description: 'Automated biotechnology research', _price: '$4, _999/month'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _icon: Building, _color: 'from-slate-600 to-gray-600', _description: 'Intelligent urban management', _services: [
      { name: 'AI Smart City Orchestrator', _href: '/ai-smart-city-orchestrator', _description: 'Comprehensive city infrastructure AI', _price: '$12, _999/month'},
      {_name: 'Smart Traffic Management', _href: '/smart-traffic-management', _description: 'AI-powered traffic optimization', _price: '$3, _999/month'},
      {_name: 'Energy Grid Optimization', _href: '/energy-grid-optimization', _description: 'Smart energy management', _price: '$5, _999/month'}
    ]
  },
  {_title: '🔬 Research & Development', _icon: Microscope, _color: 'from-blue-600 to-indigo-600', _description: 'Advanced research tools and platforms', _services: [
      { name: 'AI Research Assistant', _href: '/ai-research-assistant', _description: 'AI-powered research acceleration', _price: '$1, _999/month'},
      {_name: 'Data Analysis Platform', _href: '/data-analysis-platform', _description: 'Advanced data analytics', _price: '$2, _499/month'},
      {_name: 'Research Collaboration Hub', _href: '/research-collaboration-hub', _description: 'Global research collaboration', _price: '$1, _799/month'}
    ]
  },
  {_title: '💼 Enterprise & Business Solutions', _icon: Briefcase, _color: 'from-emerald-600 to-blue-600', _description: 'Corporate and business automation', _services: [
      { name: 'Enterprise AI Operations Center', _href: '/enterprise-ai-operations-center', _description: 'Centralized AI operations', _price: '$15, _999/month'},
      {_name: 'Business Process Automation', _href: '/business-process-automation', _description: 'End-to-end process automation', _price: '$4, _999/month'},
      {_name: 'Corporate Intelligence Platform', _href: '/corporate-intelligence-platform', _description: 'AI-powered business intelligence', _price: '$7, _999/month'}
    ]
  }
],

const mainNavItems = [

  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },
setScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
const mainNavItems = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'News', href: '/news', icon: TrendingUp },;
  { name: 'Support', href: '/support', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
];
export default function UltraFuturisticNavigation2029() {;
      {
        name: 'Mars Colonization Automation Platform',
        href: '/mars - colonization - automation - platform',
        description: 'Automate Mars colonization process',
        price: '$99, 999 / month',
      },
      {
        name: 'Interplanetary Communication Network',
        href: '/interplanetary - communication - network',
        description: 'Real - time solar system communication',
        price: '$75, 999 / month',
      },
      {
        name: 'Space Mining Automation Platform',
        href: '/space - mining - automation - platform',
        description: 'Automate asteroid and lunar mining',
        price: '$65, 999 / month',
      },
    ],
  },  {      { name: 'Mars Colonization Automation Platform', href: '/mars - colonization - automation - platform', description: 'Automate Mars colonization process', price: '$99, 999 / month' }
      { name: 'Interplanetary Communication Network', href: '/interplanetary - communication - network', description: 'Real - time solar system communication', price: '$75, 999 / month' }
      { name: 'Space Mining Automation Platform', href: '/space - mining - automation - platform', description: 'Automate asteroid and lunar mining', price: '$65, 999 / month' }
    ];
  }

    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from - green - 600 to - teal - 600',
    description: 'Habitat design and space energy harvesting',

    services: [;
      {
        name: 'Space Habitat Design Platform',
        href: '/space - habitat - design - platform',
        description: 'Design space habitats for any planet',
        price: '$45, 999 / month',
      },
      {
        name: 'Space Energy Harvesting Platform',
        href: '/space - energy - harvesting - platform',
        description: 'Harvest energy from space sources',
        price: '$55, 999 / month',
      },
    ],
  },  {      { name: 'Space Habitat Design Platform', href: '/space - habitat - design - platform', description: 'Design space habitats for any planet', price: '$45, 999 / month' }
      { name: 'Space Energy Harvesting Platform', href: '/space - energy - harvesting - platform', description: 'Harvest energy from space sources', price: '$55, 999 / month' }
    ];
  }
    title: '🤖 Advanced AI & Machine Learning',
    icon: Brain,
    color: 'from - emerald - 600 to - teal - 600',
    description: 'Next - generation AI solutions',
    services: [;
      {
        name: 'AI Emotional Intelligence Platform',
        href: '/ai - emotional - intelligence - platform',
        description: 'AI that understands human emotions',
        price: '$2, 999 / month',
      },
      {
        name: 'AI Multimodal Fusion Platform',
        href: '/ai - multimodal - fusion - platform',
        description: 'Unified text, image, audio, video AI',
        price: '$4, 999 / month',
      },
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
    ],
  },  {      { name: 'AI Emotional Intelligence Platform', href: '/ai - emotional - intelligence - platform', description: 'AI that understands human emotions', price: '$2, 999 / month' }
      { name: 'AI Multimodal Fusion Platform', href: '/ai - multimodal - fusion - platform', description: 'Unified text, image, audio, video AI', price: '$4, 999 / month' }
      { name: 'AI Customer Service Automation', href: '/ai - customer - service - automation', description: 'Intelligent customer support', price: '$899 / month' },
      { name: 'AI Education Platform', href: '/ai - education - platform', description: 'Personalized learning with AI', price: '$1, 499 / month' }
      { name: 'AI Content Creation Suite', href: '/ai - content - creation - suite', description: 'Unlimited AI content creation', price: '$1, 299 / month' }
    ];
  }

    title: '⛓️ Blockchain & Web3 Solutions',
    icon: Layers,
    color: 'from - orange - 600 to - red - 600',
    description: 'Decentralized and blockchain solutions',


=======
        name: 'AI Reality Augmentation Platform'
        href: '/ai-reality-augmentation-platform'
        description: 'Real-time AI reality enhancement'
        price: '$18,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Simulation Platform', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness in AI systems', price: '$12,999/month' }
      { name: 'Autonomous AI Corporation Platform', href: '/autonomous-ai-corporation-platform', description: 'AI systems that run entire corporations', price: '$45,999/month' }
      { name: 'AI Reality Augmentation Platform', href: '/ai-reality-augmentation-platform', description: 'Real-time AI reality enhancement', price: '$18,999/month' }
    ]
  }
    title: '⚛️ 2029 Quantum & Neuroscience'
    icon: Atom
    color: 'from-indigo-600 to-purple-600'
    description: 'Quantum brain-computer interfaces'
    services: [
      {
        name: 'Quantum Brain-Computer Interface'
        href: '/quantum-brain-computer-interface'
        description: 'Direct quantum communication with brain'
        price: '$25,999/month'
      }
      {
        name: 'Quantum Time Manipulation Platform'
        href: '/quantum-time-manipulation-platform'
        description: 'Manipulate time perception'
        price: '$35,999/month'
      }
    ]
  },  {      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Direct quantum communication with brain', price: '$25,999/month' }
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform', description: 'Manipulate time perception', price: '$35,999/month' }
    ]
  }
    title: '🚀 2029 Space Colonization & Mining'
    icon: Rocket
    color: 'from-red-600 to-orange-600'
    description: 'Interplanetary expansion and resource extraction'
    services: [
      {
        name: 'Mars Colonization Automation Platform'
        href: '/mars-colonization-automation-platform'
        description: 'Automate Mars colonization process'
        price: '$99,999/month'
      }
      {
        name: 'Interplanetary Communication Network'
        href: '/interplanetary-communication-network'
        description: 'Real-time solar system communication'
        price: '$75,999/month'
      }
      {
        name: 'Space Mining Automation Platform'
        href: '/space-mining-automation-platform'
        description: 'Automate asteroid and lunar mining'
        price: '$65,999/month'
      }
    ]
  },  {      { name: 'Mars Colonization Automation Platform', href: '/mars-colonization-automation-platform', description: 'Automate Mars colonization process', price: '$99,999/month' }
      { name: 'Interplanetary Communication Network', href: '/interplanetary-communication-network', description: 'Real-time solar system communication', price: '$75,999/month' }
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automate asteroid and lunar mining', price: '$65,999/month' }
    ]
  }
    title: '🏠 2029 Space Architecture & Energy'
    icon: Building
    color: 'from-green-600 to-teal-600'
    description: 'Habitat design and space energy harvesting'
    services: [
      {
        name: 'Space Habitat Design Platform'
        href: '/space-habitat-design-platform'
        description: 'Design space habitats for any planet'
        price: '$45,999/month'
      }
      {
        name: 'Space Energy Harvesting Platform'
        href: '/space-energy-harvesting-platform'
        description: 'Harvest energy from space sources'
        price: '$55,999/month'
      }
    ]
  },  {      { name: 'Space Habitat Design Platform', href: '/space-habitat-design-platform', description: 'Design space habitats for any planet', price: '$45,999/month' }
      { name: 'Space Energy Harvesting Platform', href: '/space-energy-harvesting-platform', description: 'Harvest energy from space sources', price: '$55,999/month' }
    ]
  }
    title: '🤖 Advanced AI & Machine Learning'
    icon: Brain
    color: 'from-emerald-600 to-teal-600'
    description: 'Next-generation AI solutions'
    services: [
      {
        name: 'AI Emotional Intelligence Platform'
        href: '/ai-emotional-intelligence-platform'
        description: 'AI that understands human emotions'
        price: '$2,999/month'
      }
      {
        name: 'AI Multimodal Fusion Platform'
        href: '/ai-multimodal-fusion-platform'
        description: 'Unified text, image, audio, video AI'
        price: '$4,999/month'
      }
      {
        name: 'AI Customer Service Automation'
        href: '/ai-customer-service-automation'
        description: 'Intelligent customer support'
        price: '$899/month'
      }
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
    ]
  },  {      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'AI that understands human emotions', price: '$2,999/month' }
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified text, image, audio, video AI', price: '$4,999/month' }
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' }
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' }
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' }
    ]
  }
    title: '⛓️ Blockchain & Web3 Solutions'
    icon: Layers
    color: 'from-orange-600 to-red-600'
    description: 'Decentralized and blockchain solutions'
    services: [
      {
        name: 'Quantum Blockchain Platform'
        href: '/quantum-blockchain-platform'
        description: 'Quantum-resistant blockchain security'
        price: '$6,999/month'
      }
      {
        name: 'Blockchain Supply Chain Transparency'
        href: '/blockchain-supply-chain-transparency'
        description: 'End-to-end supply chain visibility'
        price: '$2,499/month'
      }
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
    ]
  },  {      { name: 'Quantum Blockchain Platform', href: '/quantum-blockchain-platform', description: 'Quantum-resistant blockchain security', price: '$6,999/month' }
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' }
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' }
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' }
    ]
  }
    title: '🏥 Healthcare & Biotech Innovation'
    icon: Heart
    color: 'from-pink-600 to-rose-600'
    description: 'Advanced healthcare solutions'
    services: [
      {
        name: 'AI Personalized Medicine Platform'
        href: '/ai-personalized-medicine-platform'
        description: 'AI-powered personalized treatment'
        price: '$8,999/month'
      }
      {
        name: 'AI Healthcare Diagnosis Platform'
        href: '/ai-healthcare-diagnosis-platform'
        description: 'Revolutionary medical diagnosis'
        price: '$3,999/month'
      }
      {
        name: 'Biotech Research Automation'
        href: '/biotech-research-automation'
        description: 'Automated biotechnology research'
        price: '$4,999/month'
      }
    ]
  },  {      { name: 'AI Personalized Medicine Platform', href: '/ai-personalized-medicine-platform', description: 'AI-powered personalized treatment', price: '$8,999/month' }
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' }
      { name: 'Biotech Research Automation', href: '/biotech-research-automation', description: 'Automated biotechnology research', price: '$4,999/month' }
    ]
  }
    title: '🏙️ Smart City & Infrastructure'
    icon: Building
    color: 'from-slate-600 to-gray-600'
    description: 'Intelligent urban management'
    services: [
      {
        name: 'AI Smart City Orchestrator'
        href: '/ai-smart-city-orchestrator'
        description: 'Comprehensive city infrastructure AI'
        price: '$12,999/month'
      }
      {
        name: 'Smart Traffic Management'
        href: '/smart-traffic-management'
        description: 'AI-powered traffic optimization'
        price: '$3,999/month'
      }
      {
        name: 'Energy Grid Optimization'
        href: '/energy-grid-optimization'
        description: 'Smart energy management'
        price: '$5,999/month'
      }
    ]
  },  {      { name: 'AI Smart City Orchestrator', href: '/ai-smart-city-orchestrator', description: 'Comprehensive city infrastructure AI', price: '$12,999/month' }
      { name: 'Smart Traffic Management', href: '/smart-traffic-management', description: 'AI-powered traffic optimization', price: '$3,999/month' }
      { name: 'Energy Grid Optimization', href: '/energy-grid-optimization', description: 'Smart energy management', price: '$5,999/month' }
    ]
  }
    title: '🔬 Research & Development'
    icon: Microscope
    color: 'from-blue-600 to-indigo-600'
    description: 'Advanced research tools and platforms'
    services: [
      {
        name: 'AI Research Assistant'
        href: '/ai-research-assistant'
        description: 'AI-powered research acceleration'
        price: '$1,999/month'
      }
      {
        name: 'Data Analysis Platform'
        href: '/data-analysis-platform'
        description: 'Advanced data analytics'
        price: '$2,499/month'
      }
      {
        name: 'Research Collaboration Hub'
        href: '/research-collaboration-hub'
        description: 'Global research collaboration'
        price: '$1,799/month'
      }
    ]
  },  {      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'AI-powered research acceleration', price: '$1,999/month' }
      { name: 'Data Analysis Platform', href: '/data-analysis-platform', description: 'Advanced data analytics', price: '$2,499/month' }
      { name: 'Research Collaboration Hub', href: '/research-collaboration-hub', description: 'Global research collaboration', price: '$1,799/month' }
    ]
  }
    title: '💼 Enterprise & Business Solutions'
    icon: Briefcase
    color: 'from-emerald-600 to-blue-600'
    description: 'Corporate and business automation'
    services: [
      {
        name: 'Enterprise AI Operations Center'
        href: '/enterprise-ai-operations-center'
        description: 'Centralized AI operations'
        price: '$15,999/month'
      }
      {
        name: 'Business Process Automation'
        href: '/business-process-automation'
        description: 'End-to-end process automation'
        price: '$4,999/month'
      }
      {        name: 'Corporate Intelligence Platform'
        href: '/corporate-intelligence-platform'
        description: 'AI-powered business intelligence'
        price: '$7,999/month'
      }
    ]
  },];      { name: 'Enterprise AI Operations Center', href: '/enterprise-ai-operations-center', description: 'Centralized AI operations', price: '$15,999/month' }
      { name: 'Business Process Automation', href: '/business-process-automation', description: 'End-to-end process automation', price: '$4,999/month' }
      { name: 'Corporate Intelligence Platform', href: '/corporate-intelligence-platform', description: 'AI-powered business intelligence', price: '$7,999/month' }
    ]
  }
        name: 'Corporate Intelligence Platform',
        href: '/corporate-intelligence-platform',
        description: 'AI-powered business intelligence',
        price: '$7,999/month',
      },
    ],
];

];

=======

=======
  },  {      { name: 'Mars Colonization Automation Platform', href: '/mars - colonization - automation - platform', description: 'Automate Mars colonization process', price: '$99, 999 / month' }
      { name: 'Interplanetary Communication Network', href: '/interplanetary - communication - network', description: 'Real - time solar system communication', price: '$75, 999 / month' }
      { name: 'Space Mining Automation Platform', href: '/space - mining - automation - platform', description: 'Automate asteroid and lunar mining', price: '$65, 999 / month' }
    ];
  }

    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from - green - 600 to - teal - 600',
    description: 'Habitat design and space energy harvesting',

    services: [;
      {
        name: 'Space Habitat Design Platform',
        href: '/space - habitat - design - platform',
        description: 'Design space habitats for any planet',
        price: '$45, 999 / month',
      },
      {
        name: 'Space Energy Harvesting Platform',
        href: '/space - energy - harvesting - platform',
        description: 'Harvest energy from space sources',
        price: '$55, 999 / month',
      },
    ],
  },  {      { name: 'Space Habitat Design Platform', href: '/space - habitat - design - platform', description: 'Design space habitats for any planet', price: '$45, 999 / month' }
      { name: 'Space Energy Harvesting Platform', href: '/space - energy - harvesting - platform', description: 'Harvest energy from space sources', price: '$55, 999 / month' }
    ];
  }
    title: '🤖 Advanced AI & Machine Learning',
    icon: Brain,
    color: 'from - emerald - 600 to - teal - 600',
    description: 'Next - generation AI solutions',
    services: [;
      {
        name: 'AI Emotional Intelligence Platform',
        href: '/ai - emotional - intelligence - platform',
        description: 'AI that understands human emotions',
        price: '$2, 999 / month',
      },
      {
        name: 'AI Multimodal Fusion Platform',
        href: '/ai - multimodal - fusion - platform',
        description: 'Unified text, image, audio, video AI',
        price: '$4, 999 / month',
      },
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
    ],
  },  {      { name: 'AI Emotional Intelligence Platform', href: '/ai - emotional - intelligence - platform', description: 'AI that understands human emotions', price: '$2, 999 / month' }
      { name: 'AI Multimodal Fusion Platform', href: '/ai - multimodal - fusion - platform', description: 'Unified text, image, audio, video AI', price: '$4, 999 / month' }
      { name: 'AI Customer Service Automation', href: '/ai - customer - service - automation', description: 'Intelligent customer support', price: '$899 / month' },
      { name: 'AI Education Platform', href: '/ai - education - platform', description: 'Personalized learning with AI', price: '$1, 499 / month' }
      { name: 'AI Content Creation Suite', href: '/ai - content - creation - suite', description: 'Unlimited AI content creation', price: '$1, 299 / month' }
    ];
  }

    title: '⛓️ Blockchain & Web3 Solutions',
    icon: Layers,
    color: 'from - orange - 600 to - red - 600',
    description: 'Decentralized and blockchain solutions',

const mainNavItems = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'Solutions', href: '/solutions', icon: Target }
  { name: 'Pricing', href: '/pricing', icon: DollarSign }
  { name: 'Resources', href: '/resources', icon: BookOpen }
  { name: 'News', href: '/news', icon: TrendingUp }
  { name: 'Support', href: '/support', icon: MessageCircle }
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
];
const mainNavItems = [
=======

];

const mainNavItems = [
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    services: [;
      {
        name: 'Enterprise AI Operations Center',
        href: '/enterprise - ai - operations - center',
        description: 'Centralized AI operations',
        price: '$15, 999 / month',
      },
      {
        name: 'Business Process Automation',
        href: '/business - process - automation',
        description: 'End - to - end process automation',
        price: '$4, 999 / month',
      },
      {
        name: 'Corporate Intelligence Platform',
        href: '/corporate - intelligence - platform',
        description: 'AI - powered business intelligence',
        price: '$7, 999 / month',
      },
    ],
  }, ];      { name: 'Enterprise AI Operations Center', href: '/enterprise - ai - operations - center', description: 'Centralized AI operations', price: '$15, 999 / month' }
      { name: 'Business Process Automation', href: '/business - process - automation', description: 'End - to - end process automation', price: '$4, 999 / month' }
      { name: 'Corporate Intelligence Platform', href: '/corporate - intelligence - platform', description: 'AI - powered business intelligence', price: '$7, 999 / month' }
    ];
  }
const mainNavItems = [;

  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },

];


export default function UltraFuturisticNavigation2029() {;


export default function UltraFuturisticNavigation2029() {;
=======  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {


const mainNavItems = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'Services', href: '/services', icon: Briefcase },;
  { name: 'Solutions', href: '/solutions', icon: Target },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign },;
  { name: 'Resources', href: '/resources', icon: BookOpen },;
  { name: 'News', href: '/news', icon: TrendingUp },;
  { name: 'Support', href: '/support', icon: MessageCircle },;
  { name: 'Contact', href: '/contact', icon: Phone },];  { name: 'Contact', href: '/contact', icon: Phone }
];
export default function UltraFuturisticNavigation2029() {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>;
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white text-sm py-2 px-4'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
          <div className='flex items-center space-x-6'>
            <a
              href={`tel:${contactInfo.mobile}`}
              className='flex items-center space-x-2 hover:text-cyan-300 transition-colors'
            >

              <Phone size={14} />
              <span>{contactInfo.mobile}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className='flex items-center space-x-2 hover:text-cyan-300 transition-colors'
            >
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </a>
            <div className='flex items-center space-x-2'>              <MapPin size={14} />
              <span>{contactInfo.address}</span>
            </div>
          </div>              <Phone size={14} />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{contactInfo.address}</span>
            </div>
          </div>

              {contactInfo.website.replace('https://', '')}



              {contactInfo.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-transparent'
      }`}>
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} className="group-hover:text-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
=======
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavItems.map(item => (
              </div>
            </motion.div>

            {/* Desktop Navigation */}

                </Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
              {/* Services Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200'>
                  <Briefcase
                    size={16}
                    className='group-hover:text-cyan-400 transition-colors'
                  />
                  <ChevronDown
                    size={14}
                    className='group-hover:rotate-180 transition-transform duration-200'
                  />
                </button>
                {/* Mega Menu */}
              ))}
              {/* Services Dropdown */}

                  />;
                </button>;


                {/* Mega Menu */}
=======                <div className='absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>;
                  <div className='p-6 grid grid-cols-2 lg:grid-cols-3 gap-6'>                    {serviceCategories && serviceCategories.map((category, index) => (                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">;
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">;
                    {serviceCategories && serviceCategories.map((category, index) => (;
                      <motion&& motion.div
                        key={category && category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0 && 0.1 }}
                        className='group'>;
=======
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavItems.map(item => (

              </div>
            </motion.div>

            {/* Desktop Navigation */}


                </Link>
              ))}

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='group'

                      >
=======
                      >


                      >>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className='flex items-center space-x-3 mb-3'>;
                            <category&& category.icon
                              size={20}
                              className='text-cyan-400'
                            />;
                            <h3 className='font-semibold text-white group-hover:text-cyan-300 transition-colors'>;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className='text-sm text-gray-400 mb-4'>;
                            {category && category.description}
                          </p>;
                          <div className='space-y-2'>;
                            {category && category.services.slice(0, 3).map(service => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className='block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group'>;
                                <div className='flex items-center justify-between'>;
                                  <span className='text-sm text-gray-300 group-hover:text-white transition-colors'>;
                                    {service && service.name}
                                  </span>;
                                  <span className='text-xs text-cyan-400 font-mono'>;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className='text-xs text-gray-500 mt-1'>;
                                  {service && service.description}
                                </p>                              </Link>                      >;
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category && category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>;
                          <div className="flex items-center space-x-3 mb-3">;
                            <category && category.icon size={20} className="text-cyan-400" />;
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">;
                              {category && category.title}
                            </h3>;
                          </div>;
                          <p className="text-sm text-gray-400 mb-4">{category && category.description}</p>;
                          <div className="space-y-2">;
                            {category && category.services.slice(0, 3).map((service) => (;
                              <Link
                                key={service && service.name}
                                href={service && service.href}
                                className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group">;
                                <div className="flex items-center justify-between">;
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">;
                                    {service && service.name}
                                  </span>;
                                  <span className="text-xs text-cyan-400 font-mono">;
                                    {service && service.price}
                                  </span>;
                                </div>;
                                <p className="text-xs text-gray-500 mt-1">{service && service.description}</p>;
                              </Link>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Briefcase size={16} className="group-hover:text-cyan-400 transition-colors" />
                  <span>All Services</span>
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceCategories.map((category, index) => (
                      <motion.div
      {/* Main Navigation */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
          scrolled;
            ? 'bg - black / 90 backdrop - blur - xl border - b border - cyan - 500 / 30 shadow - 2xl shadow - cyan - 500 / 20';
            : 'bg - transparent';
        }`}
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 20'>;
            {/* Logo */}
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              className='flex items - center space - x-3';
            >;
              <div className='relative'>;
                <div className='w - 10 h - 10 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg flex items - center justify - center'>;
                  <Rocket className='w - 6 h - 6 text - white' />;
                </div>;
                <div className='absolute -inset - 1 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg blur opacity - 75 animate - pulse'></div>;
              </div>;
              <div className='flex flex - col'>;
                <span className='text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </span>;
                <span className='text - xs text - gray - 400'>;
                  2029 Innovation Hub;
                </span>              </div>;
            </motion.div>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {mainNavItems.map (item => (            {/* Logo */}
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              className="flex items - center space - x-3";
            >;
              <div className="relative">;
                <div className="w - 10 h - 10 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg flex items - center justify - center">;
                  <Rocket className="w - 6 h - 6 text - white" />;
                </div>;
                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - lg blur opacity - 75 animate - pulse"></div>;
              </div>;
              <div className="flex flex - col">;
                <span className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </span>;
                <span className="text - xs text - gray - 400">2029 Innovation Hub</span>;
              </div>;
            </motion.div>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {mainNavItems.map (item => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className='group relative text - gray - 300 hover:text - white transition - colors duration - 200';
                >;
                  <div className='flex items - center space - x-2'>;
                    <item.icon;
                      size={16}
                      className='group - hover:text - cyan - 400 transition - colors';
                    />;
                    <span>{item.name}</span>;
                  </div>;
                  <div className='absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 400 to - purple - 500 transition - all duration - 300 group - hover:w - full'></div>                </Link>))}
              {/* Services Dropdown */}                <Link;
                  key={item.name}
                  href={item.href}
                  className="group relative text - gray - 300 hover:text - white transition - colors duration - 200";
                >;
                  <div className="flex items - center space - x-2">;
                    <item.icon size={16} className="group - hover:text - cyan - 400 transition - colors" />;
                    <span>{item.name}</span>;
                  </div>;
                  <div className="absolute -bottom - 1 left - 0 w - 0 h - 0.5 bg - gradient - to - r from - cyan - 400 to - purple - 500 transition - all duration - 300 group - hover:w - full"></div>;
                </Link>))}
              {/* Services Dropdown */}
              <div className='relative group'>;
                <button className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200'>;
                  <Briefcase;
                    size={16}
                    className='group - hover:text - cyan - 400 transition - colors';
                  />;
                  <ChevronDown;
                    size={14}
                    className='group - hover:rotate - 180 transition - transform duration - 200';
                  />;
                </button>;
                {/* Mega Menu */}
                <div className='absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 30 rounded - lg shadow - 2xl shadow - cyan - 500 / 20 opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0'>;
                  <div className='p - 6 grid grid - cols - 2 lg:grid - cols - 3 gap - 6'>                    {service_categories.map ((category, index) => (                <div className="absolute top - full left - 0 w - screen max - w-6xl bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 30 rounded - lg shadow - 2xl shadow - cyan - 500 / 20 opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 transform translate - y-2 group - hover:translate - y-0">;
                  <div className="p - 6 grid grid - cols - 2 lg:grid - cols - 3 gap - 6">;
                    {service_categories.map ((category, index) => (
                      <motion.div;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        key={category.title}
                        initial={{ opacity: 0, coordinate_y: 20 }}
                        animate={{ opacity: 1, coordinate_y: 0 }}
                        transition={{ delay: index * 0.1 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        className='group';
                      >;
                        <div;
                          className={`p - 4 rounded - lg bg - gradient - to - br ${category.color} bg - opacity - 10 border border - cyan - 500 / 20 hover:border - cyan - 500 / 40 transition - all duration - 300`}
                        >;
                          <div className='flex items - center space - x-3 mb - 3'>;
                            <category.icon;
                              size={20}
                              className='text - cyan - 400';
                            />;
                            <h3 className='font - semibold text - white group - hover:text - cyan - 300 transition - colors'>;
                              {category.title}
                            </h3>;
                          </div>;
                          <p className='text - sm text - gray - 400 mb - 4'>;
                            {category.description}
                          </p>;
                          <div className='space - y-2'>;
                            {category.services.slice (0, 3).map (service => (
                              <Link;
                                key={service.name}
                                href={service.href}
                                className='block p - 2 rounded bg - black / 30 hover:bg - cyan - 500 / 20 transition - all duration - 200 group';
                              >;
                                <div className='flex items - center justify - between'>;
                                  <span className='text - sm text - gray - 300 group - hover:text - white transition - colors'>;
                                    {service.name}
                                  </span>;
                                  <span className='text - xs text - cyan - 400 font - mono'>;
                                    {service.price}
                                  </span>;
                                </div>;
                                <p className='text - xs text - gray - 500 mt - 1'>;
                                  {service.description}
                                </p>                              </Link>                      >;
                        <div className={`p - 4 rounded - lg bg - gradient - to - br ${category.color} bg - opacity - 10 border border - cyan - 500 / 20 hover:border - cyan - 500 / 40 transition - all duration - 300`}>;
                          <div className="flex items - center space - x-3 mb - 3">;
                            <category.icon size={20} className="text - cyan - 400" />;
                            <h3 className="font - semibold text - white group - hover:text - cyan - 300 transition - colors">;
=======

                              {category.title}



                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
=======

                              {category.title}




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'              >


=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'              >                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
                className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'              >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Get Started
              </motion.button>
            </div>
=======
=======            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors"
              >=======
                className='text-gray-300 hover:text-white transition-colors'              >

              >


                {isOpen ? <X size={24} /> : <Menu size={24} />}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {isOpen ? <X size={24} /> : <Menu size={24} />}

=======                                  </span>;
                                </div>;
                                <p className="text - xs text - gray - 500 mt - 1">{service.description}</p>;
                              </Link>))}
                          </div>;
                        </div>;
                      </motion.div>))}
                  </div>;
                </div>;
              </div>;
              {/* CTA Button */}
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40'              >                className="px - 6 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40";
              >;
                Get Started;
              </motion.button>;
            </div>;
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <button;
                on_click={toggle_menu}
                className='text - gray - 300 hover:text - white transition - colors'              >            <div className="lg:hidden">;
              <button;
                on_click={toggle_menu}
                className="text - gray - 300 hover:text - white transition - colors";
                {is_open ? <X size={24} /> : <Menu size={24} />}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </button>;
            </div>;
          </div>;
        </div>;
      </nav>;


              >

                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className='fixed inset-0 z-50 lg:hidden'

          >
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className='fixed inset-0 z-50 lg:hidden'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div
              className='absolute inset-0 bg-black/80 backdrop-blur-sm'
              onClick={closeMenu}
            />
            <div className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto'>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'>
                      <Rocket className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-lg font-bold text-white'>
                      Zion Tech
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
            className="fixed inset-0 z-50 lg:hidden"
          >

=======
                <div className="space-y-4">                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662                {/* Mobile Services */}
                <div className='mt-8'>
                  <h3 className='text-lg font-semibold text-white mb-4'>
                    Our Services
                  </h3>
                  <div className='space-y-3'>
                    {serviceCategories.slice(0, 6).map(category => (
                      <div
                        key={category.title}
                        className='p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20'
                      >
                        <h4 className='font-medium text-white mb-2'>
                          {category.title}
                        </h4>
                        <p className='text-sm text-gray-400 mb-3'>
                          {category.description}
                        </p>
                        <div className='space-y-2'>
                          {category.services.slice(0, 2).map(service => (                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}                <div className="mt-8">
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="mt-8">
=======                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                        <h4 className="font-medium text-white mb-2">{category.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                        <div className="space-y-2">
                          {category.services.slice(0, 2).map((service) => (
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                  ))}

                </div>;


=======
                            </Link>>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                </div>;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Mobile CTA */}
                <div className='mt-8'>;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'>                <div className="mt-8">;
                  <motion&& motion.button
                    whileHover={{ scale: 1 && 1.02 }}
                    whileTap={{ scale: 0 && 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    Get Started
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}

                {/* Mobile CTA */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
  );

}

=======
      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>
);      <div className="h-20" />
    </>
  );
}

      {/* Spacer for fixed navigation */}
      <div className='h-20' />
    </>
  );
==============

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
