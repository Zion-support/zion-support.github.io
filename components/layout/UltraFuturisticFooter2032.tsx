
import React from 'react',
import React from 'react';
=======

import React from 'react';

=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, 
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
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  Phone,
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
  MessageCircle as MessageCircleIcon,;
  Star as StarIcon,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom, ;


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    name: 'Case Studies',
    href: '/case - studies',
    icon: Users,
    description: 'Success stories and implementations',
  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    name: 'Blog'
    href: '/blog'
    icon: MessageCircle
    description: 'Latest insights and updates'
  }
  {
];
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
  {
    title: '🏙️ 2032 Enterprise IT Solutions',
    services: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: 'AI IT Operations Center', href: '/ai-powered-it-operations-center' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

  };
};



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          variants={footerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'>;
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
            {/* Company Info */}=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    2032 Future Technology;
                  </p>;
                </div>;
              </div>;
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30 overflow-hidden">
      {/* Animated Background Elements */}


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

            {/* Service Categories */}
            {/* Service Categories */}
            <motion.div variants={itemVariants} className='lg:col-span-2'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>


=======


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
=======
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Revolutionary Services
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </ul>;
                  </div>;
                ))}
            {/* Quick Links & Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

                  {companyInfo.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                </ul>;
              </div>;


                </ul>;
              </div>;
=======              <div className="mb-8">
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
==============



=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"

                  Subscribe;
                </button>;
              </div>;
            </div>;

              <div className='flex items-center space-x-6 text-sm'>;
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

                  Cookie Policy;
                </Link>;
              </div>;
            </div>;

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
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center text-white"


=======
=======

  );

=======}
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
}
  );
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
