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
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Phone
  Mail
  MapPin
  Globe
  Zap
  Brain
  Atom
  Rocket
  Shield
  Cpu
  Target
  Microscope
  Users
  Facebook
  Twitter
  Linkedin
  Instagram
  Youtube
  Github
  ArrowRight
  Heart
  Star
  Award
  CheckCircle
  Home
  Briefcase
  BookOpen
  MessageCircle
  DollarSign
  TrendingUp
  Target as TargetIcon
  Users as UsersIcon
  Briefcase as BriefcaseIcon
  BookOpen as BookOpenIcon
  MessageCircle as MessageCircleIcon
  Star as StarIcon;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom

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
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cpu,
  Target,
  Microscope,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Heart,
  Star,
  Award,
  CheckCircle,
  Home,
  Briefcase,
  BookOpen,
  MessageCircle,
  DollarSign,
  TrendingUp,
  Target as TargetIcon,
  Users as UsersIcon,
  Briefcase as BriefcaseIcon,
  BookOpen as BookOpenIcon,
<<<<<<< HEAD
<<<<<<< HEAD
  MessageCircle as MessageCircleIcon,;
  Star as StarIcon,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  MessageCircle as MessageCircleIcon,;
  Star as StarIcon,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, ;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Rocket, Shield, Cpu, Target, Microscope, Users;
  Facebook, Twitter, Linkedin, Instagram, Youtube;
  Github, ArrowRight, Heart, Star, Award, CheckCircle;
  Home, Briefcase, BookOpen, MessageCircle, DollarSign;
  TrendingUp, Target as TargetIcon, Users as UsersIcon;
  Briefcase as BriefcaseIcon, BookOpen as BookOpenIcon;
<<<<<<< HEAD
<<<<<<< HEAD
  MessageCircle as MessageCircleIcon, Star as StarIcon
} from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
}
const mainNavigationRoutes = [
  MessageCircle as MessageCircleIcon, Star as StarIcon;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const mainNavigationRoutes = [;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    name: 'Home'
    href: '/'
    icon: Home
    description: 'Welcome to Zion Tech Group'
  }
  {
    name: 'Services'
    href: '/services'
    icon: Briefcase
    description: 'Our comprehensive service portfolio'
  }
  {
    name: 'Solutions'
    href: '/solutions'
    icon: TargetIcon
    description: 'Tailored solutions for your business'
  }
  {
    name: 'Pricing'
    href: '/pricing'
    icon: DollarSign
    description: 'Transparent pricing and packages'
  }
  {
    name: 'Resources'
    href: '/resources'
    icon: BookOpen
    description: 'Knowledge base and documentation'
  }
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Case Studies',
    href: '/case - studies',
    icon: Users,
    description: 'Success stories and implementations',
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    name: 'Blog'
    href: '/blog'
    icon: MessageCircle
    description: 'Latest insights and updates'
  }
  {
<<<<<<< HEAD
<<<<<<< HEAD
];
=======

];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const serviceCategories = [
  {
    title: '🚀 2032 Revolutionary AI Services',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ]
  }
  {
    title: '⚛️ 2032 Quantum & Emerging Tech'
    services: [
      {
        name: 'Quantum DNA Computing'
        href: '/quantum-dna-computing-platform'
      }
      {
        name: 'Quantum Internet Security'
        href: '/quantum-internet-security-gateway'
      }
      {
        name: 'Quantum Financial Trading'
        href: '/quantum-financial-trading-platform'
      }
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' }
    ]
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center' }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ]
  }
    title: '🏙️ 2032 Enterprise IT Solutions'
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' }
      {
        name: 'Zero Trust Architecture'
        href: '/zero-trust-network-architecture'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration'
      }
      {
        name: 'AI IT Operations Center'
        href: '/ai-powered-it-operations-center'
      }
    ]
  }
    title: '🌌 2032 Space & Metaverse Tech'
    services: [
      {
        name: 'Space Mining Automation'
        href: '/space-mining-automation-platform'
      }
      {
        name: 'Metaverse Development'
        href: '/metaverse-development-platform'
      }
      { name: 'AI Predictive Health', href: '/ai-predictive-health-analytics' }
      {
        name: 'AI Autonomous Business'
        href: '/ai-autonomous-business-manager'
      }
    ]
  }
  {
    title: '🎯 2032 Innovative Micro SAAS'
    services: [
      {
        name: 'AI Business Intelligence'
        href: '/ai-business-intelligence-suite'
      }
      {
        name: 'Quantum-Secure Communication'
        href: '/quantum-secure-communication-platform'
      }
      { name: 'AI Customer Success', href: '/ai-customer-success-automation' }
      {
        name: 'Blockchain Supply Chain'
        href: '/blockchain-supply-chain-transparency'
      }
    ]
  }
  {
    title: '🔬 2032 Research & Development'
    services: [
      {
        name: 'Neuromorphic Computing'
        href: '/neuromorphic-computing-platform'
      }
      { name: 'DNA Computing Platform', href: '/dna-computing-platform' }
      {
        name: 'Photonic Computing'
        href: '/photonic-computing-infrastructure'
      }
      { name: 'Swarm Robotics', href: '/swarm-robotics-orchestration' }
    ]
  }
];
const quickLinks = [
  {
    name: '2032 Services'
    href: '/2032-futuristic-services-showcase'
    icon: Star
    description: 'Revolutionary 2032 services'
  }
  {
    name: 'Enhanced Pricing'
    href: '/enhanced-market-pricing-2032'
    icon: DollarSign
    description: 'Comprehensive pricing analysis'
  }
  {
    name: 'Market Pricing'
    href: '/market-pricing'
    icon: DollarSign
    description: 'Competitive pricing references'
  }
  {
    name: 'Enhanced Services'
    href: '/enhanced-services-showcase'
    icon: Star
    description: 'Premium service showcase'
  }
  {
    name: 'Revolutionary 2026'
    href: '/revolutionary-2026-services'
    icon: TrendingUp
    description: '2026 breakthrough services'
  }
  {
    name: 'Ultimate 2026'
    href: '/ultimate-2026-services-showcase'
    icon: Target
    description: 'Ultimate service portfolio'
  }
    name: 'Contact',
    href: '/contact',
    icon: MessageCircle,
    description: 'Get in touch with our team',
  }, ];  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service portfolio' },
  { name: 'Solutions', href: '/solutions', icon: TargetIcon, description: 'Tailored solutions for your business' },
  { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing and packages' },
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base and documentation' },
{ name: 'Case Studies', href: '/case - studies', icon: Users, description: 'Success stories and implementations' },
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and updates' },
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }
const service_categories = [;
  {
    title: '🚀 2032 Revolutionary AI Services',
    services: [;
      {
        name: 'AI Consciousness Evolution',
        href: '/ai - consciousness - evolution - platform',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai - emotional - intelligence - platform',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/ai - creativity - orchestrator',
      },
      {
        name: 'AI Autonomous Business Manager',
        href: '/ai - autonomous - business - manager',
      },
    ],
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
    services: [;
      {
        name: 'Quantum DNA Computing',
        href: '/quantum - dna - computing - platform',
      },
      {
        name: 'Quantum Internet Security',
        href: '/quantum - internet - security - gateway',
      },
      {
        name: 'Quantum Financial Trading',
        href: '/quantum - financial - trading - platform',
      },
      { name: 'Quantum Creativity Studio', href: '/quantum - creativity - studio' },
    ],
  },  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous - devops - platform' },      { name: 'Quantum DNA Computing', href: '/quantum - dna - computing - platform' },
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - gateway' },
      { name: 'Quantum Financial Trading', href: '/quantum - financial - trading - platform' },
      { name: 'Quantum Creativity Studio', href: '/quantum - creativity - studio' }
    ];
  }
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous - devops - platform' },
      {
        name: 'Zero Trust Architecture',
        href: '/zero - trust - network - architecture',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge - computing - orchestration',
      },
      {
        name: 'AI IT Operations Center',
        href: '/ai - powered - it - operations - center',
      },
    ],
  },
    title: '🌌 2032 Space & Metaverse Tech',
    services: [;
      {
        name: 'Space Mining Automation',
        href: '/space - mining - automation - platform',
      },
      {
        name: 'Metaverse Development',
        href: '/metaverse - development - platform',
      },
      { name: 'AI Predictive Health', href: '/ai - predictive - health - analytics' },
      {
        name: 'AI Autonomous Business',
        href: '/ai - autonomous - business - manager',
      },
    ],
  },
  {
    title: '🎯 2032 Innovative Micro SAAS',
    services: [;
      {
        name: 'AI Business Intelligence',
        href: '/ai - business - intelligence - suite',
      },
      {
        name: 'Quantum - Secure Communication',
        href: '/quantum - secure - communication - platform',
      },
      { name: 'AI Customer Success', href: '/ai - customer - success - automation' },
      {
        name: 'Blockchain Supply Chain',
        href: '/blockchain - supply - chain - transparency',
      },
    ],
  },
  {
    title: '🔬 2032 Research & Development',
    services: [;
      {
        name: 'Neuromorphic Computing',
        href: '/neuromorphic - computing - platform',
      },
      { name: 'DNA Computing Platform', href: '/dna - computing - platform' },
      {
        name: 'Photonic Computing',
        href: '/photonic - computing - infrastructure',
      },
      { name: 'Swarm Robotics', href: '/swarm - robotics - orchestration' },
    ],
  },
];
;
const quick_links = [;
  {
    name: '2032 Services',
    href: '/2032 - futuristic - services - showcase',
    icon: Star,
    description: 'Revolutionary 2032 services',
  },
  {
    name: 'Enhanced Pricing',
    href: '/enhanced - market - pricing - 2032',
    icon: DollarSign,
    description: 'Comprehensive pricing analysis',
  },
  {
    name: 'Market Pricing',
    href: '/market - pricing',
    icon: DollarSign,
    description: 'Competitive pricing references',
  },
  {
    name: 'Enhanced Services',
    href: '/enhanced - services - showcase',
    icon: Star,
    description: 'Premium service showcase',
  },
  {
    name: 'Revolutionary 2026',
    href: '/revolutionary - 2026 - services',
    icon: TrendingUp,
    description: '2026 breakthrough services',
  },
  {
    name: 'Ultimate 2026',
    href: '/ultimate - 2026 - services - showcase',
    icon: Target,
    description: 'Ultimate service portfolio',
  },
  {
    name: 'News & Updates'
    href: '/news'
    icon: MessageCircle
    description: 'Latest company news'
  }
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
];
const companyInfo = [
    name: 'Support',
    href: '/support',
    icon: Users,
    description: 'Technical support and help',
  }, ];  { name: '2032 Services', href: '/2032 - futuristic - services - showcase', icon: Star, description: 'Revolutionary 2032 services' },
  { name: 'Enhanced Pricing', href: '/enhanced - market - pricing - 2032', icon: DollarSign, description: 'Comprehensive pricing analysis' },
  { name: 'Market Pricing', href: '/market - pricing', icon: DollarSign, description: 'Competitive pricing references' },
  { name: 'Enhanced Services', href: '/enhanced - services - showcase', icon: Star, description: 'Premium service showcase' },
  { name: 'Revolutionary 2026', href: '/revolutionary - 2026 - services', icon: TrendingUp, description: '2026 breakthrough services' },
  { name: 'Ultimate 2026', href: '/ultimate - 2026 - services - showcase', icon: Target, description: 'Ultimate service portfolio' },
  { name: 'News & Updates', href: '/news', icon: MessageCircle, description: 'Latest company news' },
  { name: 'Support', href: '/support', icon: Users, description: 'Technical support and help' }
const company_info = [;

<<<<<<< HEAD
<<<<<<< HEAD
const _serviceCategories = [
  {_title: '🚀 2032 Revolutionary AI Services', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '⚛️ 2032 Quantum & Emerging Tech', _services: [
      { name: 'Quantum DNA Computing', _href: '/quantum-dna-computing-platform'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Creativity Studio', _href: '/quantum-creativity-studio'}
    ]
  },
  {_title: '🏙️ 2032 Enterprise IT Solutions', _services: [
      { name: 'Autonomous DevOps', _href: '/autonomous-devops-platform'},
      {_name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration'},
      {_name: 'AI IT Operations Center', _href: '/ai-powered-it-operations-center'}
    ]
  },
  {_title: '🌌 2032 Space & Metaverse Tech', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform'},
      {_name: 'Metaverse Development', _href: '/metaverse-development-platform'},
      {_name: 'AI Predictive Health', _href: '/ai-predictive-health-analytics'},
      {_name: 'AI Autonomous Business', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '🎯 2032 Innovative Micro SAAS', _services: [
      { name: 'AI Business Intelligence', _href: '/ai-business-intelligence-suite'},
      {_name: 'Quantum-Secure Communication', _href: '/quantum-secure-communication-platform'},
      {_name: 'AI Customer Success', _href: '/ai-customer-success-automation'},
      {_name: 'Blockchain Supply Chain', _href: '/blockchain-supply-chain-transparency'}
    ]
  },
  {_title: '🔬 2032 Research & Development', _services: [
      { name: 'Neuromorphic Computing', _href: '/neuromorphic-computing-platform'},
      {_name: 'DNA Computing Platform', _href: '/dna-computing-platform'},
      {_name: 'Photonic Computing', _href: '/photonic-computing-infrastructure'},
      {_name: 'Swarm Robotics', _href: '/swarm-robotics-orchestration'}
    ]
  }
],

const quickLinks = [
  { name: '2032 Services', href: '/2032-futuristic-services-showcase', icon: Star, description: 'Revolutionary 2032 services' },
  { name: 'Enhanced Pricing', href: '/enhanced-market-pricing-2032', icon: DollarSign, description: 'Comprehensive pricing analysis' },
  { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Competitive pricing references' },
  { name: 'Enhanced Services', href: '/enhanced-services-showcase', icon: Star, description: 'Premium service showcase' },
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: TrendingUp, description: '2026 breakthrough services' },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Target, description: 'Ultimate service portfolio' },
  { name: 'News & Updates', href: '/news', icon: MessageCircle, description: 'Latest company news' },
  { name: 'Support', href: '/support', icon: Users, description: 'Technical support and help' }
],

const companyInfo = [

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Status', href: '/status' }
];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  { name: 'Status', href: '/status' }
];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
      duration: 0.8,
      staggerChildren: 0.1
    }
  },}
const itemVariants = {
<<<<<<< HEAD
  hidden: { opacity: 0, y: 20 }
  visible: { opacity: 1, y: 0 },}
export default function UltraFuturisticFooter2032() {
  return (
    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden'>      staggerChildren: 0.1
    }
  }
}
  };
};

  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
const mainNavigationRoutes = [;
  {;
    name: 'Home',;
    href: '/',;
    icon: Home,;
    description: 'Welcome to Zion Tech Group',;
  },;
  {;
    name: 'Services',;
    href: '/services',;
    icon: Briefcase,;
    description: 'Our comprehensive service portfolio',;
  },;
  {;
    name: 'Solutions',;
    href: '/solutions',;
    icon: TargetIcon,;
    description: 'Tailored solutions for your business',;
  },;
  {;
    name: 'Pricing',;
    href: '/pricing',;
    icon: DollarSign,;
    description: 'Transparent pricing and packages',;
  },;
  {;
    name: 'Resources',;
    href: '/resources',;
    icon: BookOpen,;
    description: 'Knowledge base and documentation',;
  },;
  {;
    name: 'Case Studies',;
    href: '/case-studies',;
    icon: Users,;
    description: 'Success stories and implementations',;
  },;
  {;
    name: 'Blog',;
    href: '/blog',;
    icon: MessageCircle,;
    description: 'Latest insights and updates',;
  },;
  {;
    name: 'Contact',;
    href: '/contact',;
    icon: MessageCircle,;
    description: 'Get in touch with our team',;
  },];  { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },;
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Our comprehensive service portfolio' },;
  { name: 'Solutions', href: '/solutions', icon: TargetIcon, description: 'Tailored solutions for your business' },;
  { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing and packages' },;
  { name: 'Resources', href: '/resources', icon: BookOpen, description: 'Knowledge base and documentation' },;
  { name: 'Case Studies', href: '/case-studies', icon: Users, description: 'Success stories and implementations' },;
  { name: 'Blog', href: '/blog', icon: MessageCircle, description: 'Latest insights and updates' },;
  { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }
const serviceCategories = [;
  {;
    title: '🚀 2032 Revolutionary AI Services',;
    services: [;
      {;
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-platform',;
      },;
      {;
        name: 'AI Emotional Intelligence',;
        href: '/ai-emotional-intelligence-platform',;
      },;
      {;
        name: 'AI Creativity Orchestrator',;
        href: '/ai-creativity-orchestrator',;
      },;
      {;
        name: 'AI Autonomous Business Manager',;
        href: '/ai-autonomous-business-manager',;
      },;
    ],;
  },;
  {;
    title: '⚛️ 2032 Quantum & Emerging Tech',;
    services: [;
      {;
        name: 'Quantum DNA Computing',;
        href: '/quantum-dna-computing-platform',;
      },;
      {;
        name: 'Quantum Internet Security',;
        href: '/quantum-internet-security-gateway',;
      },;
      {;
        name: 'Quantum Financial Trading',;
        href: '/quantum-financial-trading-platform',;
      },;
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' },;
    ],;
  },  {;
    title: '🏙️ 2032 Enterprise IT Solutions',;
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-platform' },;
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway' },;
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform' },;
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' }
    ];
  };
    title: '🏙️ 2032 Enterprise IT Solutions',;
    services: [;
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },;
      {;
        name: 'Zero Trust Architecture',;
        href: '/zero-trust-network-architecture',;
      },;
      {;
        name: 'Edge Computing Orchestration',;
        href: '/edge-computing-orchestration',;
      },;
      {;
        name: 'AI IT Operations Center',;
        href: '/ai-powered-it-operations-center',;
      },;
    ],;
  },;
    title: '🌌 2032 Space & Metaverse Tech',;
    services: [;
      {;
        name: 'Space Mining Automation',;
        href: '/space-mining-automation-platform',;
      },;
      {;
        name: 'Metaverse Development',;
        href: '/metaverse-development-platform',;
      },;
      { name: 'AI Predictive Health', href: '/ai-predictive-health-analytics' },;
      {;
        name: 'AI Autonomous Business',;
        href: '/ai-autonomous-business-manager',;
      },;
    ],;
  },;
  {;
    title: '🎯 2032 Innovative Micro SAAS',;
    services: [;
      {;
        name: 'AI Business Intelligence',;
        href: '/ai-business-intelligence-suite',;
      },;
      {;
        name: 'Quantum-Secure Communication',;
        href: '/quantum-secure-communication-platform',;
      },;
      { name: 'AI Customer Success', href: '/ai-customer-success-automation' },;
      {;
        name: 'Blockchain Supply Chain',;
        href: '/blockchain-supply-chain-transparency',;
      },;
    ],;
  },;
  {;
    title: '🔬 2032 Research & Development',;
    services: [;
      {;
        name: 'Neuromorphic Computing',;
        href: '/neuromorphic-computing-platform',;
      },;
      { name: 'DNA Computing Platform', href: '/dna-computing-platform' },;
      {;
        name: 'Photonic Computing',;
        href: '/photonic-computing-infrastructure',;
      },;
      { name: 'Swarm Robotics', href: '/swarm-robotics-orchestration' },;
    ],;
  },;
];
const quickLinks = [;
  {;
    name: '2032 Services',;
    href: '/2032-futuristic-services-showcase',;
    icon: Star,;
    description: 'Revolutionary 2032 services',;
  },;
  {;
    name: 'Enhanced Pricing',;
    href: '/enhanced-market-pricing-2032',;
    icon: DollarSign,;
    description: 'Comprehensive pricing analysis',;
  },;
  {;
    name: 'Market Pricing',;
    href: '/market-pricing',;
    icon: DollarSign,;
    description: 'Competitive pricing references',;
  },;
  {;
    name: 'Enhanced Services',;
    href: '/enhanced-services-showcase',;
    icon: Star,;
    description: 'Premium service showcase',;
  },;
  {;
    name: 'Revolutionary 2026',;
    href: '/revolutionary-2026-services',;
    icon: TrendingUp,;
    description: '2026 breakthrough services',;
  },;
  {;
    name: 'Ultimate 2026',;
    href: '/ultimate-2026-services-showcase',;
    icon: Target,;
    description: 'Ultimate service portfolio',;
  },;
  {;
    name: 'News & Updates',;
    href: '/news',;
    icon: MessageCircle,;
    description: 'Latest company news',;
  },;
  {;
    name: 'Support',;
    href: '/support',;
    icon: Users,;
    description: 'Technical support and help',;
  },];  { name: '2032 Services', href: '/2032-futuristic-services-showcase', icon: Star, description: 'Revolutionary 2032 services' },;
  { name: 'Enhanced Pricing', href: '/enhanced-market-pricing-2032', icon: DollarSign, description: 'Comprehensive pricing analysis' },;
  { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Competitive pricing references' },;
  { name: 'Enhanced Services', href: '/enhanced-services-showcase', icon: Star, description: 'Premium service showcase' },;
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services', icon: TrendingUp, description: '2026 breakthrough services' },;
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Target, description: 'Ultimate service portfolio' },;
  { name: 'News & Updates', href: '/news', icon: MessageCircle, description: 'Latest company news' },;
  { name: 'Support', href: '/support', icon: Users, description: 'Technical support and help' }
const companyInfo = [;
  { name: 'About Us', href: '/about' },;
  { name: 'Careers', href: '/careers' },;
  { name: 'Press', href: '/press' },;
  { name: 'Partners', href: '/partners' },;
  { name: 'Support', href: '/support' },;
  { name: 'Status', href: '/status' },;
];
const socialLinks = [;
  {;
    name: 'LinkedIn',;
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
    icon: Linkedin,;
  },;
  { name: 'Twitter', href: 'https://twitter && twitter.com/ziontechgroup', icon: Twitter },;
  {;
    name: 'Facebook',;
    href: 'https://facebook && facebook.com/ziontechgroup',;
    icon: Facebook,;
  },;
  {;
    name: 'Instagram',;
    href: 'https://instagram && instagram.com/ziontechgroup',;
    icon: Instagram,;
  },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/ziontechgroup', icon: Youtube },;
  { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github },];];
const socialLinks = [;
  { name: 'LinkedIn', href: 'https://linkedin && linkedin.com/company/ziontechgroup', icon: Linkedin },;
  { name: 'Twitter', href: 'https://twitter && twitter.com/ziontechgroup', icon: Twitter },;
  { name: 'Facebook', href: 'https://facebook && facebook.com/ziontechgroup', icon: Facebook },;
  { name: 'Instagram', href: 'https://instagram && instagram.com/ziontechgroup', icon: Instagram },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/ziontechgroup', icon: Youtube },;
  { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github }
];
const footerVariants = {;
  hidden: { opacity: 0, y: 50 },;
  visible: {;
    opacity: 1,;
    y: 0,;
    transition: {;
      duration: 0 && 0.8,;
      staggerChildren: 0 && 0.1,;
    },;
  },};
const itemVariants = {;
  hidden: { opacity: 0, y: 20 },;
  visible: { opacity: 1, y: 0 },};
export default function UltraFuturisticFooter2032() {;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };
};



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const itemVariants = {
  hidden: { opacity: 0, y: 20 }
  visible: { opacity: 1, y: 0 },  visible: { opacity: 1, y: 0 }
}
export default function UltraFuturisticFooter2032() {
<<<<<<< HEAD
<<<<<<< HEAD

    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden'>;
    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden'>
      {/* Animated Background Elements */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
};
const itemVariants = {;
  hidden: { opacity: 0, y: 20 },;
  visible: { opacity: 1, y: 0 },  visible: { opacity: 1, y: 0 }
};
export default function UltraFuturisticFooter2032() {;
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>;
      </div>;
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10'>;
        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variants={footerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'>;
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
            {/* Company Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion && motion.div variants={itemVariants} className='lg:col-span-1'>;
              <div className='flex items-center space-x-3 mb-6'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30'>;
                  <Rocket className='w-7 h-7 text-white' />;
                </div>;
                <div>;
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text-sm text-cyan-300 font-medium'>;
;
const social_links = [;
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com / company / ziontechgroup',
    icon: Linkedin,
  },
  { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: Twitter },
  {
    name: 'Facebook',
    href: 'https://facebook.com / ziontechgroup',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com / ziontechgroup',
    icon: Instagram,
  },
  { name: 'YouTube', href: 'https://youtube.com / ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: Github }, ];];
;
const social_links = [;
  { name: 'LinkedIn', href: 'https://linkedin.com / company / ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com / ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com / ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com / ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: Github }
];
;
const footer_variants = {
  hidden: { opacity: 0, coordinate_y: 50 },
  visible: {
    opacity: 1,
    coordinate_y: 0,
    transition: {
      duration: 0.8,
      stagger_children: 0.1,
    },
  }, }
;
const item_variants = {
  hidden: { opacity: 0, coordinate_y: 20 },
  visible: { opacity: 1, coordinate_y: 0 }, }
;
export default /**
 * UltraFuturisticFooter2032 - Function description
 */
function UltraFuturisticFooter2032() {
  return (
    <footer className='relative bg - gradient - to - b from - black via - gray - 900 to - black border - t border - cyan - 500 / 30 overflow - hidden'>      stagger_children: 0.1;
    }
  }
}
;
const item_variants = {
  hidden: { opacity: 0, coordinate_y: 20 },
  visible: { opacity: 1, coordinate_y: 0 },  visible: { opacity: 1, coordinate_y: 0 }
}
;
export default /**
 * UltraFuturisticFooter2032 - Function description
 */
function UltraFuturisticFooter2032() {
  return (
    <footer className='relative bg - gradient - to - b from - black via - gray - 900 to - black border - t border - cyan - 500 / 30 overflow - hidden'>;
      {/* Animated Background Elements */}
      <div className='absolute inset - 0'>;
        <div className='absolute top - 0 left - 0 w - 96 h - 96 bg - cyan - 500 / 5 rounded - full blur - 3xl'></div>;
        <div className='absolute top - 0 right - 0 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl'></div>;
        <div className='absolute bottom - 0 left - 1/4 w - 96 h - 96 bg - pink - 500 / 5 rounded - full blur - 3xl'></div>;
      </div>;
      <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 pt - 20 pb - 10'>;
        <motion.div;
          variants={footer_variants}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }}
          className='space - y-16';
        >;
          {/* Main Footer Content */}
          <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 12'>;
            {/* Company Info */}
            <motion.div variants={item_variants} className='lg:col - span - 1'>;
              <div className='flex items - center space - x-3 mb - 6'>;
                <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items - center justify - center shadow - lg shadow - cyan - 500 / 30'>;
                  <Rocket className='w - 7 h - 7 text - white' />;
                </div>;
                <div>;
                  <h3 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text - sm text - cyan - 300 font - medium'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    2032 Future Technology;
                  </p>;
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background Elements */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background Elements */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
                    className='hover:text-cyan-300 transition-colors'>                    {contactInfo && contactInfo.website}      {/* Animated Background Elements */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">;
        <motion&& motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16">;
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
            {/* Company Info */}
<<<<<<< HEAD


=======
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">2032 Future Technology</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading the future of technology with revolutionary AI, quantum computing, space technology, and autonomous systems.
                Empowering businesses with cutting-edge solutions for tomorrow's challenges.
              </p>
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {contactInfo.website}
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </a>
                </div>
              </div>
            </motion.div>

            <motion && motion.div variants={itemVariants} className="lg:col-span-1">;
              <div className="flex items-center space-x-3 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">;
                  <Rocket className="w-7 h-7 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text-sm text-cyan-300 font-medium">2032 Future Technology</p>;
                </div>;
              </div>;
              <p className="text-slate-300 mb-6 leading-relaxed">;
                Leading the future of technology with revolutionary AI, quantum computing, space technology, and autonomous systems. ;
                Empowering businesses with cutting-edge solutions for tomorrow's challenges.;
              </p>;
              {/* Contact Information */}
<<<<<<< HEAD
<<<<<<< HEAD



            {/* Service Categories */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {contactInfo.website}
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },};

export default function UltraFuturisticFooter2032() {
  return (
    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden'>

};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },

};

export default function UltraFuturisticFooter2032() {
  return (

                    {contactInfo.website}


                    {contactInfo.website}

                  </a>
                </div>
              </div>
            </motion.div>
=======
<<<<<<< HEAD
              <div className="space-y-3">;
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">;
                  <Mail className="w-4 h-4 text-cyan-400" />;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-cyan-300 transition-colors">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-slate-300">;
                  <MapPin className="w-4 h-4 text-cyan-400" />;
                  <span>{contactInfo && contactInfo.address}</span>;
                </div>;
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">;
                  <Globe className="w-4 h-4 text-cyan-400" />;
                  <a href={contactInfo && contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">;
                    {contactInfo && contactInfo.website}
                  </a>;
                </div>;
              </div>;
            </motion && motion.div>;


            {/* Service Categories */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Service Categories */}
            <motion.div variants={itemVariants} className='lg:col-span-2'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Our Revolutionary Services
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {serviceCategories.map((category, index) => (
                  <div key={index} className='space-y-4'>
                    <h4 className='text-lg font-medium text-white'>
                      {category.title}
                    </h4>
                    <ul className='space-y-2'>                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
                          <Link
                            href={service.href}
                            className='text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform'                          >                Our Revolutionary Services
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          <Link
                            href={service && service.href}
                            className='text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform'>                Our Revolutionary Services;
              </h3>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {serviceCategories && serviceCategories.map((category, index) => (;
                  <div key={index} className="space-y-4">;
                    <h4 className="text-lg font-medium text-white">{category && category.title}</h4>;
                    <ul className="space-y-2">;
                      {category && category.services.map((service, serviceIndex) => (;
                        <li key={serviceIndex}>;
                          <Link
                            href={service && service.href}
                            className='text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform'                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform">;
                            {service && service.name}
                          </Link>;
                        </li>;

=======
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-medium text-white">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
<<<<<<< HEAD
<<<<<<< HEAD
                            className='text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform'                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform"
=======
                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                            className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          >
                            {service.name}
                          </Link>
                        </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </ul>;
                  </div>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </div>
            </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

<<<<<<< HEAD
                Quick Access
              </h3>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                Quick Access
              </h3>
=======
              </div>;
            </motion && motion.div>;
            {/* Quick Links & Company Info */}
            <motion && motion.div variants={itemVariants} className='lg:col-span-1'>;
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Quick Access;
              </h3>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Quick Links */}
              <div className='mb-8'>
                <h4 className='text-lg font-medium text-white mb-4'>
                  Quick Links
                </h4>
                <ul className='space-y-2'>                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        <span>{link.name}</span>                Quick Access
              </h3>
<<<<<<< HEAD
              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        className="flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>



                Quick Access
              </h3>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
            </motion && motion.div>;
            {/* Quick Links & Company Info */}
            <motion && motion.div variants={itemVariants} className='lg:col-span-1'>;
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Quick Access;
              </h3>;
              {/* Quick Links */}
              <div className='mb-8'>;
                <h4 className='text-lg font-medium text-white mb-4'>;
                  Quick Links;
                </h4>;
                <ul className='space-y-2'>                  {quickLinks && quickLinks.map((link, index) => (;
                    <li key={index}>;
                      <Link
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        href={link && link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'>;
                        <link && link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        <span>{link && link.name}</span>                Quick Access;
              </h3>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Quick Links */}
              <div className="mb-8">;
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>;
                <ul className="space-y-2">;
                  {quickLinks && quickLinks.map((link, index) => (;
                    <li key={index}>;
                      <Link
                        href={link && link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'>;
                        <link && link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        className="flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group";
                      >;
                        <link && link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />;
                        <span>{link && link.name}</span>;
                      </Link>;
                    </li>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Access
              </h3>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className='text - slate - 300 mb - 6 leading - relaxed'>;
                Leading the future of technology with revolutionary AI, quantum;
                computing, space technology, and autonomous systems. Empowering;
                businesses with cutting - edge solutions for tomorrow's;
                challenges.;
              </p>;
              {/* Contact Information */}
              <div className='space - y-3'>;
                <div className='flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='hover:text - cyan - 300 transition - colors';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors'>;
                  <Mail className='w - 4 h - 4 text - cyan - 400' />;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='hover:text - cyan - 300 transition - colors';
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className='flex items - center space - x-3 text - slate - 300'>;
                  <MapPin className='w - 4 h - 4 text - cyan - 400' />;
                  <span>{contact_info.address}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors'>;
                  <Globe className='w - 4 h - 4 text - cyan - 400' />;
                  <a;
                    href={contact_info.website}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='hover:text - cyan - 300 transition - colors';
                  >                    {contact_info.website}      {/* Animated Background Elements */}
      <div className="absolute inset - 0">;
        <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - cyan - 500 / 5 rounded - full blur - 3xl"></div>;
        <div className="absolute top - 0 right - 0 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl"></div>;
        <div className="absolute bottom - 0 left - 1/4 w - 96 h - 96 bg - pink - 500 / 5 rounded - full blur - 3xl"></div>;
      </div>;
      <div className="relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 pt - 20 pb - 10">;
        <motion.div;
          variants={footer_variants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="space - y-16";
        >;
          {/* Main Footer Content */}
          <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 12">;
            {/* Company Info */}
            <motion.div variants={item_variants} className="lg:col - span - 1">;
              <div className="flex items - center space - x-3 mb - 6">;
                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items - center justify - center shadow - lg shadow - cyan - 500 / 30">;
                  <Rocket className="w - 7 h - 7 text - white" />;
                </div>;
                <div>;
                  <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text - sm text - cyan - 300 font - medium">2032 Future Technology</p>;
                </div>;
              </div>;
              <p className="text - slate - 300 mb - 6 leading - relaxed">;
                Leading the future of technology with revolutionary AI, quantum computing, space technology, and autonomous systems.;
                Empowering businesses with cutting - edge solutions for tomorrow's challenges.;
              </p>;
              {/* Contact Information */}
              <div className="space - y-3">;
                <div className="flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors">;
                  <Phone className="w - 4 h - 4 text - cyan - 400" />;
                  <a href={`tel:${contact_info.mobile}`} className="hover:text - cyan - 300 transition - colors">;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className="flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors">;
                  <Mail className="w - 4 h - 4 text - cyan - 400" />;
                  <a href={`mailto:${contact_info.email}`} className="hover:text - cyan - 300 transition - colors">;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className="flex items - center space - x-3 text - slate - 300">;
                  <MapPin className="w - 4 h - 4 text - cyan - 400" />;
                  <span>{contact_info.address}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - slate - 300 hover:text - cyan - 300 transition - colors">;
                  <Globe className="w - 4 h - 4 text - cyan - 400" />;
                  <a href={contact_info.website} target="_blank" rel="noopener noreferrer" className="hover:text - cyan - 300 transition - colors">;
                    {contact_info.website}
                  </a>;
                </div>;
              </div>;
            </motion.div>;
            {/* Service Categories */}
            <motion.div variants={item_variants} className='lg:col - span - 2'>;
              <h3 className='text - xl font - semibold text - white mb - 8 bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Our Revolutionary Services;
              </h3>;
              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
                {service_categories.map ((category, index) => (
                  <div key={index} className='space - y-4'>;
                    <h4 className='text - lg font - medium text - white'>;
                      {category.title}
                    </h4>;
                    <ul className='space - y-2'>                      {category.services.map ((service, service_index) => (
                        <li key={service_index}>;
                          <Link;
                            href={service.href}
                            className='text - slate - 300 hover:text - cyan - 300 transition - colors duration - 200 text - sm hover:translate - x-1 inline - block transform transition - transform'                          >                Our Revolutionary Services;
              </h3>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
                {service_categories.map ((category, index) => (
                  <div key={index} className="space - y-4">;
                    <h4 className="text - lg font - medium text - white">{category.title}</h4>;
                    <ul className="space - y-2">;
                      {category.services.map ((service, service_index) => (
                        <li key={service_index}>;
                          <Link;
                            href={service.href}
                            className='text - slate - 300 hover:text - cyan - 300 transition - colors duration - 200 text - sm hover:translate - x-1 inline - block transform transition - transform'                            className="text - slate - 300 hover:text - cyan - 300 transition - colors duration - 200 text - sm hover:translate - x-1 inline - block transform transition - transform";
                          >;
                            {service.name}
                          </Link>;
                        </li>))}
                    </ul>;
                  </div>))}
              </div>;
            </motion.div>;
            {/* Quick Links & Company Info */}
            <motion.div variants={item_variants} className='lg:col - span - 1'>;
              <h3 className='text - xl font - semibold text - white mb - 8 bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Quick Access;
              </h3>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>

            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

                Quick Access
              </h3>
              {/* Quick Links */}
<<<<<<< HEAD
              <div className='mb - 8'>;
                <h4 className='text - lg font - medium text - white mb - 4'>;
                  Quick Links;
                </h4>;
                <ul className='space - y-2'>                  {quick_links.map ((link, index) => (
                    <li key={index}>;
                      <Link;
=======
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        href={link.href}
                        className='flex items - center space - x-2 text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm group';
                      >;
                        <link.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />                        <span>{link.name}</span>                Quick Access;
              </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Quick Links */}
=======

              {/* Quick Links */}
<<<<<<< HEAD
              <div className="mb - 8">;
                <h4 className="text - lg font - medium text - white mb - 4">Quick Links</h4>;
                <ul className="space - y-2">;
                  {quick_links.map ((link, index) => (
                    <li key={index}>;
                      <Link;
                        href={link.href}




=======

              {/* Quick Links */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Company Info */}
              <div className='mb-8'>
                <h4 className='text-lg font-medium text-white mb-4'>Company</h4>
                <ul className='space-y-2'>                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >


=======
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2">
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
<<<<<<< HEAD
                  ))}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}
                </ul>
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </ul>;
              </div>;


<<<<<<< HEAD
<<<<<<< HEAD
                </ul>;
              </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Company Info */}
              <div className='mb-8'>;
                <h4 className='text-lg font-medium text-white mb-4'>Company</h4>;
                <ul className='space-y-2'>                  {companyInfo && companyInfo.map((item, index) => (;
                    <li key={index}>;
                      <Link
                        href={item && item.href}
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'>              <div className="mb-8">;
                <h4 className="text-lg font-medium text-white mb-4">Company</h4>;
                <ul className="space-y-2">;
                  {companyInfo && companyInfo.map((item, index) => (;
                    <li key={index}>;
                      <Link
                        href={item && item.href}
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm">;
                        {item && item.name}
                      </Link>;
                    </li>;
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </ul>;
              </div>;
=======

                </ul>;
              </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className='flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group'
                      >
                        <link.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />                        className="flex items-center space-x-2 text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm group"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


<<<<<<< HEAD
<<<<<<< HEAD



              {/* Company Info */}
              <div className='mb-8'>
                <h4 className='text-lg font-medium text-white mb-4'>Company</h4>
                <ul className='space-y-2'>                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >              <div className="mb-8">
                <h4 className="text-lg font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2">
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                      >

                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm'                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              {/* Social Links */}
              <div>;
                <h4 className='text-lg font-medium text-white mb-4'>;
                  Follow Us;
                </h4>;
                <div className='flex space-x-4'>                  {socialLinks && socialLinks.map((social, index) => (;
                    <a
                      key={index}
                      href={social && social.href}                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>;
                <div className="flex space-x-4">;
                  {socialLinks && socialLinks.map((social, index) => (;
                    <a
                      key={index}
                      href={social && social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20'>;
                      <social && social.icon className='w-5 h-5' />                    </a>                      target="_blank";
                      rel="noopener noreferrer";
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20";
                    >;
                      <social && social.icon className="w-5 h-5" />;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
<<<<<<< HEAD

<<<<<<< HEAD


                    </a>


                  ))}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20'
                    >
                      <social.icon className='w-5 h-5' />                    </a>                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <social.icon className="w-5 h-5" />
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          {/* Newsletter Signup */}


                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'

<<<<<<< HEAD
          {/* Newsletter Signup */}
                        className='flex items - center space - x-2 text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm group';
                      >;
                        <link.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform' />                        className="flex items - center space - x-2 text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm group";
                      >;
                        <link.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                        <span>{link.name}</span>;
                      </Link>;
                    </li>))}
                </ul>;
              </div>;
              {/* Company Info */}
              <div className='mb - 8'>;
                <h4 className='text - lg font - medium text - white mb - 4'>Company</h4>;
                <ul className='space - y-2'>                  {company_info.map ((item, index) => (
                    <li key={index}>;
                      <Link;
                        href={item.href}
                        className='text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm'                      >              <div className="mb - 8">;
                <h4 className="text - lg font - medium text - white mb - 4">Company</h4>;
                <ul className="space - y-2">;
                  {company_info.map ((item, index) => (
                    <li key={index}>;
                      <Link;
                        href={item.href}
                        className='text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm'                        className="text - slate - 300 hover:text - purple - 300 transition - colors duration - 200 text - sm";
                      >;
                        {item.name}
                      </Link>;
                    </li>))}
                </ul>;
              </div>;
              {/* Social Links */}
              <div>;
                <h4 className='text - lg font - medium text - white mb - 4'>;
                  Follow Us;
                </h4>;
                <div className='flex space - x-4'>                  {social_links.map ((social, index) => (
                    <a;
                      key={index}
                      href={social.href}                <h4 className="text - lg font - medium text - white mb - 4">Follow Us</h4>;
                <div className="flex space - x-4">;
                  {social_links.map ((social, index) => (
                    <a;
                      key={index}
                      href={social.href}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='w - 10 h - 10 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded - lg flex items - center justify - center text - cyan - 400 hover:text - cyan - 300 hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 110 hover:shadow - lg hover:shadow - cyan - 500 / 20';
                    >;
                      <social.icon className='w - 5 h - 5' />                    </a>                      target="_blank";
                      rel="noopener noreferrer";
                      className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded - lg flex items - center justify - center text - cyan - 400 hover:text - cyan - 300 hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 110 hover:shadow - lg hover:shadow - cyan - 500 / 20";
                    >;
                      <social.icon className="w - 5 h - 5" />))}
                </div>;
              </div>;
            </motion.div>;
          </div>;
          {/* Newsletter Signup */}
          <motion.div;
            variants={item_variants}
            className='border - t border - cyan - 500 / 30 pt - 12';
          >;
            <div className='text - center'>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Stay Ahead with Future Technology;
              </h3>;
              <p className='text - slate - 300 mb - 8 max - w-2xl mx - auto'>;
                Get the latest insights on AI breakthroughs, quantum computing;
                advances, space technology innovations, and autonomous systems;
                development. Join our community of future technology pioneers.;
              </p>;
=======
=======


                    </a>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Newsletter Signup */}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-12'
          >
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <motion.div variants={itemVariants} className="border-t border-cyan-500/30 pt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
=======
          <motion.div variants={itemVariants} className="border-t border-cyan-500/30 pt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    </a>

                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-12'
          >
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-4'>

                Stay Ahead with Future Technology
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI breakthroughs, quantum computing advances, space technology innovations, and autonomous systems development. Join our community of future technology pioneers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                />;
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105'>                  Subscribe                Stay Ahead with Future Technology;
              </h3>;
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">;
                Get the latest insights on AI breakthroughs, quantum computing advances, space technology innovations, and autonomous systems development. Join our community of future technology pioneers.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  Subscribe;
                </button>;
              </div>;
            </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='border-t border-cyan-500/30 pt-8'>;
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>;
              <div className='flex items-center space-x-2 text-slate-400 text-sm'>;
                <span>© 2024 Zion Tech Group. All rights reserved.</span>;
                <span className='text-cyan-400'>|</span>;
                <span>Leading the Future of Technology</span>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center space-x-6 text-sm'>;
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className='border-t border-cyan-500/30 pt-8'
          >
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='flex items-center space-x-2 text-slate-400 text-sm'>
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className='text-cyan-400'>|</span>
                <span>Leading the Future of Technology</span>
              </div>
              <div className='flex items-center space-x-6 text-sm'>
=======

              <div className='flex items-center space-x-6 text-sm'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <div className='flex items-center space-x-6 text-sm'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  href='/privacy'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'>;
                  Privacy Policy;
                </Link>;
                <Link
                  href='/terms'
                  className='text-slate-400 hover:text-cyan-300 transition-colors'>;
                  Terms of Service;
                </Link>;
                <Link
                  href='/cookies'
<<<<<<< HEAD
<<<<<<< HEAD
          <motion.div variants={itemVariants} className="border-t border-cyan-500/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
                <span className="text-cyan-400">|</span>
                <span>Leading the Future of Technology</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  Cookie Policy;
                </Link>;
              </div>;
            </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      {/* Floating Action Button */}
=======

      {/* Floating Action Button */}
      <div className='fixed bottom-8 right-8 z-50'>;
        <motion&& motion.button
          whileHover={{ scale: 1 && 1.1 }}
          whileTap={{ scale: 0 && 0.9 }}
          className='w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white'
          onClick={() => window && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >;
          <ArrowRight className='w-6 h-6 transform rotate-[-90deg]' />        </motion && motion.button>;
      </div>;
    </footer>;
  );
}        <motion&& motion.button
          whileHover={{ scale: 1 && 1.1 }}
          whileTap={{ scale: 0 && 0.9 }}

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={() => window && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >;
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />;
        </motion && motion.button>;
      </div>;
    </footer>;
  );
<<<<<<< HEAD

  );


=======
=======

  );

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  );
}
          </motion.div>;
        </motion.div>;
      </div>;
      {/* Floating Action Button */}
      <div className='fixed bottom - 8 right - 8 z - 50'>;
        <motion.button;
          while_hover={{ scale: 1.1 }}
          while_tap={{ scale: 0.9 }}
          className='w - 14 h - 14 bg - gradient - to - r from - cyan - 500 to - purple - 500 rounded - full shadow - 2xl shadow - cyan - 500 / 30 hover:shadow - cyan - 500 / 50 transition - all duration - 300 flex items - center justify - center text - white';
          on_click={() => window.scroll_to ({ top: 0, behavior: 'smooth' })}
        >;
          <ArrowRight className='w - 6 h - 6 transform rotate-[-90deg]' />        </motion.button>;
      </div>;
    </footer>);
}        <motion.button;
          while_hover={{ scale: 1.1 }}
          while_tap={{ scale: 0.9 }}
          className="w - 14 h - 14 bg - gradient - to - r from - cyan - 500 to - purple - 500 rounded - full shadow - 2xl shadow - cyan - 500 / 30 hover:shadow - cyan - 500 / 50 transition - all duration - 300 flex items - center justify - center text - white";
          on_click={() => window.scroll_to ({ top: 0, behavior: 'smooth' })}
        >;
          <ArrowRight className="w - 6 h - 6 transform rotate-[-90deg]" />;
        </motion.button>;
      </div>;
    </footer>);
}
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Floating Action Button */}
      <div className='fixed bottom-8 right-8 z-50'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className='w-6 h-6 transform rotate-[-90deg]' />        </motion.button>
      </div>
    </footer>;
  );
}        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
);
}
  );

}
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
