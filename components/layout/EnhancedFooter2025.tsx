<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next / link';

=======

import React from 'react';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import Link from 'next/link';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';

<<<<<<< HEAD
import {

=======
import { 

=======

  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  Microscope,
  Zap,
  Globe,
  Database,
  Lock,
  Cloud,
  BarChart3,
  Twitter,
  Linkedin,
  Github,
  Youtube,;
  Instagram,;} from 'lucide-react';import { ;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';
import { 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Phone, Mail, MapPin, Star, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Zap, Globe, Database, Lock, Cloud, BarChart3;
  Twitter, Linkedin, Github, Youtube, Instagram
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const serviceCategories = [
  {
    title: 'AI & Consciousness'
    icon: Brain
    services: [
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import Link from 'next/link';
import { motion } from 'framer-motion';
import {;
  Phone,;
  Mail,;
  MapPin,;
  Star,;
  ArrowRight,;
  Brain,;
  Atom,;
  Shield,;
  Rocket,;
  Target,;
  Microscope,;
  Zap,;
  Globe,;
  Database,;
  Lock,;
  Cloud,;
  BarChart3,;
  Twitter,;
  Linkedin,;
  Github,;
  Youtube,;
  Instagram,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Star, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Zap, Globe, Database, Lock, Cloud, BarChart3;
  Twitter, Linkedin, Github, Youtube, Instagram;
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};
const serviceCategories = [;
  {;
    title: 'AI & Consciousness',;
    icon: Brain,;
    services: [;
      {;
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-2029',;
      },;
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },;
      {;
        name: 'Multimodal AI Orchestrator',;
        href: '/multimodal-ai-orchestrator',;
      },;
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },;
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },;
    ],;
  },  {      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },;
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },;
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },;
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ];
  };
  {;
    title: 'Quantum & Emerging Tech',;
    icon: Atom,;
    services: [;
      { name: 'Space Mining Platform', href: '/space-mining-platform' },;
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },;
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },;
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },;
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },;
    ],;
  },  {;
    title: 'Enterprise IT',;
    icon: Shield,;
    services: [      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ];
  };
  {;
    title: 'Enterprise IT',;
    icon: Shield,;
    services: [;
      {;
        name: 'Quantum Cloud Infrastructure',;
        href: '/quantum-cloud-infrastructure',;
      },;
      {;
        name: 'Edge Computing Orchestrator',;
        href: '/edge-computing-orchestrator',;
      },;
      {;
        name: 'Zero Trust Security Platform',;
        href: '/zero-trust-security-platform',;
      },;
      {;
        name: 'Blockchain Enterprise Platform',;
        href: '/blockchain-enterprise-platform',;
      },;
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },;
    ],;
  },  {      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },;
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },;
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },;
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },;
<<<<<<< HEAD

=======
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ];
  };
    title: 'Micro SAAS',;
    icon: Target,;
    services: [;
      { name: 'AI Content Factory Pro', href: '/ai-content-factory' },;
      { name: 'Quantum CRM Suite', href: '/quantum-crm' },;
      { name: 'CyberShield Pro', href: '/cyber-shield-pro' },;
      { name: 'DataVault Hub', href: '/data-vault-hub' },;
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' },;
    ],;
  },];      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
    ];
  }
];
const companyLinks = [;
  { name: 'About Us', href: '/about' },;
  { name: 'Careers', href: '/careers' },;
  { name: 'News', href: '/news' },;
  { name: 'Case Studies', href: '/case-studies' },;
  { name: 'Blog', href: '/blog' },;
  { name: 'Resources', href: '/resources' },];  { name: 'Resources', href: '/resources' }
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  };
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  };
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ]
  };

  {
    title: 'Micro SAAS',
    icon: Target,
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm' },
      { name: 'CyberShield Pro', href: '/cyber-shield-pro' },
      { name: 'DataVault Hub', href: '/data-vault-hub' },
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
    ]
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Phone
  Mail
  MapPin
  Star
  ArrowRight
  Brain
  Atom
  Shield
  Rocket
  Target
  Microscope
  Zap
  Globe
  Database
  Lock
  Cloud
  BarChart3
  Twitter
  Linkedin
  Github
  Youtube
  Instagram;} from 'lucide-react';import {
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  Microscope,
  Zap,
  Globe,
  Database,
  Lock,
  Cloud,
  BarChart3,
  Twitter,
  Linkedin,
  Github,
<<<<<<< HEAD
  Youtube,
  Instagram,} from 'lucide-react';import {
  Phone, Mail, MapPin, Star, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Zap, Globe, Database, Lock, Cloud, BarChart3;
  Twitter, Linkedin, Github, Youtube, Instagram;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const service_categories = [;
  {
    title: 'AI & Consciousness',
    icon: Brain,

    services: [;
      {
        name: 'AI Consciousness Evolution',
        href: '/ai - consciousness - evolution - 2029',
      },
      { name: 'Quantum AI Fusion', href: '/quantum - ai - fusion' },
      {
        name: 'Multimodal AI Orchestrator',
        href: '/multimodal - ai - orchestrator',
      },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance' },
    ],
  },  {      { name: 'Quantum AI Fusion', href: '/quantum - ai - fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal - ai - orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance' }
    ];
  }
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    services: [;
      { name: 'Space Mining Platform', href: '/space - mining - platform' },
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing' },
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface' },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai' },
    ],
  },  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai' }
    ];
  }
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [;
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum - cloud - infrastructure',
      },
      {
        name: 'Edge Computing Orchestrator',
        href: '/edge - computing - orchestrator',
      },
      {
        name: 'Zero Trust Security Platform',
        href: '/zero - trust - security - platform',
      },
      {
        name: 'Blockchain Enterprise Platform',
        href: '/blockchain - enterprise - platform',
      },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops' },
    ],
  },  {      { name: 'Quantum Cloud Infrastructure', href: '/quantum - cloud - infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge - computing - orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero - trust - security - platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain - enterprise - platform' },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops' }
    ];
  }
    title: 'Micro SAAS',
    icon: Target,
    services: [;
      { name: 'AI Content Factory Pro', href: '/ai - content - factory' },
      { name: 'Quantum CRM Suite', href: '/quantum - crm' },
      { name: 'CyberShield Pro', href: '/cyber - shield - pro' },
      { name: 'DataVault Hub', href: '/data - vault - hub' },
      { name: 'DevOps Automation Studio', href: '/devops - automation - studio' },
    ],
  }, ];      { name: 'DevOps Automation Studio', href: '/devops - automation - studio' }
    ];
  }
];
<<<<<<< HEAD
<<<<<<< HEAD
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' },];  { name: 'Resources', href: '/resources' }
];
const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' }
  { name: 'Terms of Service', href: '/terms' }
  { name: 'Cookie Policy', href: '/cookies' }
  { name: 'GDPR Compliance', href: '/gdpr' },];  { name: 'GDPR Compliance', href: '/gdpr' }
];
const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' }
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' }
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' }
  {
    name: 'Instagram'
    href: '#'
    icon: Instagram
    color: 'hover:text-pink-400'
  },];  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
];

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5'></div>
      <div className='relative z-10'>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
const company_links = [;
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case - studies' },
  { name: 'Blog', href: '/blog' },
<<<<<<< HEAD

  { name: 'Resources', href: '/resources' }, ];  { name: 'Resources', href: '/resources' }

=======
  { name: 'Resources', href: '/resources' }, ];  { name: 'Resources', href: '/resources' }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
];
;
const legal_links = [;
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5'></div>;
      <div className='relative z-10'>;
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>;
            {/* Company Info */}
            <div className='lg:col-span-1'>;
              <div className='flex items-center space-x-3 mb-6'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center'>;
                  <Star className='w-7 h-7 text-white' />;
                </div>;
                <div>;
                  <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </div>;
                  <div className='text-sm text-gray-400'>;
  { name: 'GDPR Compliance', href: '/gdpr' }, ];  { name: 'GDPR Compliance', href: '/gdpr' }
];
;
const social_links = [;
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text - blue - 400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text - blue - 600' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text - gray - 400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text - red - 400' },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    color: 'hover:text - pink - 400',
  }, ];  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text - pink - 400' }
];
;
const EnhancedFooter2025: React.FC = () => {
  const current_year = new Date ().getFullYear (),
  return (
    <footer className='relative bg - gradient - to - br from - gray - 900 via - black to - gray - 900 border - t border - gray - 800 / 50'>;
      {/* Background Effects */}
      <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 via - purple - 500 / 5 to - pink - 500 / 5'></div>;
      <div className='relative z - 10'>;
        {/* Main Footer Content */}
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8 lg:gap - 12'>;
            {/* Company Info */}
            <div className='lg:col - span - 1'>;
              <div className='flex items - center space - x-3 mb - 6'>;
                <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center'>;
                  <Star className='w - 7 h - 7 text - white' />;
                </div>;
                <div>;
                  <div className='text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                    Zion Tech Group;
                  </div>;
                  <div className='text - sm text - gray - 400'>;
                    Future Technology Solutions;
                  </div>;
                </div>;
              </div>;
              <p className='text - gray - 400 mb - 6 leading - relaxed'>;
                Leading the future with revolutionary AI, quantum computing, and;
                emerging technology solutions that transform businesses;
                worldwide.;
              </p>;
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="relative z-10">
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='hover:text-purple-400 transition-colors'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-pink-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>;
      <div className="relative z-10">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">;
            {/* Company Info */}
<<<<<<< HEAD

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
<<<<<<< HEAD

=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <div className="lg:col-span-1">;
              <div className="flex items-center space-x-3 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">;
                  <Star className="w-7 h-7 text-white" />;
                </div>;
                <div>;
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </div>;
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>;
                </div>;
              </div>;
              <p className="text-gray-400 mb-6 leading-relaxed">;
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.;
              </p>;
              {/* Contact Info */}
              <div className="space-y-3">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-4 h-4 text-purple-400" />;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-purple-400 transition-colors">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <MapPin className="w-4 h-4 text-pink-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Service Categories */}
            {serviceCategories && serviceCategories.map((category, index) => (;
              <motion&& motion.div
                key={category && category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='space-y-4'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                    <category.icon className='w-4 h-4 text-white' />
                  </div>
                  <h3 className='text-lg font-semibold text-white'>
                    {category.title}
                  </h3>
                </div>
                <div className='space-y-2'>
                  {category.services.map(service => (
                    <Link
                      key={service.name}
                      href={service.href}
<<<<<<< HEAD

                      {service.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

=======

                className="space-y-4"
              >

=======
                className="space-y-4"
              >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.services.map((service) => (
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='space-y-4'>;
                <div className='flex items-center space-x-3'>;
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>;
                    <category && category.icon className='w-4 h-4 text-white' />;
                  </div>;
                  <h3 className='text-lg font-semibold text-white'>;
                    {category && category.title}
                  </h3>;
                </div>;
                <div className='space-y-2'>;
                  {category && category.services.map(service => (;
                    <Link
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Contact Info */}
              <div className='space - y-3'>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='hover:text - cyan - 400 transition - colors';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='hover:text - purple - 400 transition - colors';
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <MapPin className='w - 4 h - 4 text - pink - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>                </div>      {/* Background Effects */}
      <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 5 via - purple - 500 / 5 to - pink - 500 / 5"></div>;
      <div className="relative z - 10">;
        {/* Main Footer Content */}
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8 lg:gap - 12">;
            {/* Company Info */}
            <div className="lg:col - span - 1">;
              <div className="flex items - center space - x-3 mb - 6">;
                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center">;
                  <Star className="w - 7 h - 7 text - white" />;
                </div>;
                <div>;
                  <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent">;
                    Zion Tech Group;
                  </div>;
                  <div className="text - sm text - gray - 400">Future Technology Solutions</div>;
                </div>;
              </div>;
              <p className="text - gray - 400 mb - 6 leading - relaxed">;
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.;
              </p>;
              {/* Contact Info */}
              <div className="space - y-3">;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Phone className="w - 4 h - 4 text - cyan - 400" />;
                  <a href={`tel:${contact_info.mobile}`} className="hover:text - cyan - 400 transition - colors">;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Mail className="w - 4 h - 4 text - purple - 400" />;
                  <a href={`mailto:${contact_info.email}`} className="hover:text - purple - 400 transition - colors">;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <MapPin className="w - 4 h - 4 text - pink - 400" />;
                  <span className="text - sm">{contact_info.address}</span>;
                </div>;
              </div>;
            </div>;
            {/* Service Categories */}
            {service_categories.map ((category, index) => (
              <motion.div;
                key={category.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='space - y-4';
              >;
                <div className='flex items - center space - x-3'>;
                  <div className='w - 8 h - 8 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center'>;
                    <category.icon className='w - 4 h - 4 text - white' />;
                  </div>;
                  <h3 className='text - lg font - semibold text - white'>;
                    {category.title}
                  </h3>;
                </div>;
                <div className='space - y-2'>;
                  {category.services.map (service => (
                    <Link;
                      key={service.name}
                      href={service.href}
                      className='block text - gray - 400 hover:text - cyan - 400 transition - colors duration - 200 text - sm'                    >              >;
                <div className="flex items - center space - x-3">;
                  <div className="w - 8 h - 8 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center">;
                    <category.icon className="w - 4 h - 4 text - white" />;
                  </div>;
                  <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                </div>;
                <div className="space - y-2">;
                  {category.services.map ((service) => (
                    <Link;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      key={service.name}
                      href={service.href}
                      className="block text - gray - 400 hover:text - cyan - 400 transition - colors duration - 200 text - sm";
                    >;
<<<<<<< HEAD
=======

                      className='block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm'                    >

                    >


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {service.name}

          </div>;
=======



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Additional Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Company Links */}
            <div>;
              <h4 className='text-white font-semibold mb-4'>Company</h4>;
              <div className='space-y-2'>;
                {companyLinks && companyLinks.map(link => (;
                  <Link
<<<<<<< HEAD
                    key={link.name}
                    href={link.href}

                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

=======

=======
=======
                      {service.name}
          </div>;
          {/* Additional Links */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50">
            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    </Link>))}
                </div>;
              </motion.div>))}
          </div>;
          {/* Additional Links */}
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8 mt - 12 pt - 8 border - t border - gray - 800 / 50'>;
            {/* Company Links */}
            <div>;
              <h4 className='text - white font - semibold mb - 4'>Company</h4>;
              <div className='space - y-2'>;
                {company_links.map (link => (
                  <Link;
                    key={link.name}
                    href={link.href}
                    className='block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm'                  >            {/* Company Links */}
            <div>;
              <h4 className="text - white font - semibold mb - 4">Company</h4>;
              <div className="space - y-2">;
                {company_links.map ((link) => (
                  <Link;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    key={link.name}
                    href={link.href}
                    className="block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm";
                  >;
<<<<<<< HEAD
=======
                    key={link.name}
                    href={link.href}

                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'                  >

                  >


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {link.name}

              </div>;
            </div>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Legal Links */}


                  <Link
<<<<<<< HEAD
                    key={link.name}
                    href={link.href}

=======
                    key={link && link.name}
                    href={link && link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {link.name}
                  </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
<<<<<<< HEAD
              </div>
            </div>

=======
                    {link.name}
              </div>;
            </div>;
            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link && link.name}
                    href={link && link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>;
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Social Links */}
            <div>
              <h4 className='text-white font-semibold mb-4'>Follow Us</h4>
              <div className='flex space-x-4'>
                {socialLinks.map(social => (                  <a              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a

=======

              </div>;
            </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Social Links */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
<<<<<<< HEAD

<<<<<<< HEAD
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='border-t border-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='text-center'>              <motion.h3        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h3

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                ))}

=======
=======
                ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Link>))}
              </div>;
            </div>;
            {/* Legal Links */}
            <div>;
              <h4 className='text - white font - semibold mb - 4'>Legal</h4>;
              <div className='space - y-2'>;
                {legal_links.map (link => (
                  <Link;
                    key={link.name}
                    href={link.href}
                    className='block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm'                  >              <h4 className="text - white font - semibold mb - 4">Legal</h4>;
              <div className="space - y-2">;
                {legal_links.map ((link) => (
                  <Link;
                    key={link.name}
                    href={link.href}
                    className="block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm";
                    {link.name}
                  </Link>))}
              </div>;
            </div>;
            {/* Social Links */}
            <div>;
              <h4 className='text - white font - semibold mb - 4'>Follow Us</h4>;
              <div className='flex space - x-4'>;
                {social_links.map (social => (                  <a              <h4 className="text - white font - semibold mb - 4">Follow Us</h4>;
              <div className="flex space - x-4">;
                {social_links.map ((social) => (
                  <a;
                    key={social.name}
                    href={social.href}
                    className={`w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gray - 700 / 50 rounded - lg flex items - center justify - center text - gray - 400 ${social.color} transition - all duration - 200 border border - gray - 700 hover:border - gray - 600`}
                    aria - label={social.name}
                  >;
                    <social.icon className='w - 5 h - 5' />                  </a>                    <social.icon className="w - 5 h - 5" />;
                  </a>))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Newsletter Section */}


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h3
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6 }}
                viewport={{ once: true }}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                className="text-2xl md:text-3xl font-bold text-white mb-4"

const _serviceCategories = [
  {_title: 'AI & Consciousness', _icon: Brain, _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029'},
      {_name: 'Quantum AI Fusion', _href: '/quantum-ai-fusion'},
      {_name: 'Multimodal AI Orchestrator', _href: '/multimodal-ai-orchestrator'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance'}
    ]
  },
  {_title: 'Quantum & Emerging Tech', _icon: Atom, _services: [
      { name: 'Space Mining Platform', _href: '/space-mining-platform'},
      {_name: 'Quantum Bio-Computing', _href: '/quantum-bio-computing'},
      {_name: 'Brain-Computer Interface', _href: '/brain-computer-interface'},
      {_name: 'Quantum Energy Platform', _href: '/quantum-energy-platform'},
      {_name: 'Autonomous Vehicle AI', _href: '/autonomous-vehicle-ai'}
    ]
  },
  {_title: 'Enterprise IT', _icon: Shield, _services: [
      { name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'},
      {_name: 'Edge Computing Orchestrator', _href: '/edge-computing-orchestrator'},
      {_name: 'Zero Trust Security Platform', _href: '/zero-trust-security-platform'},
      {_name: 'Blockchain Enterprise Platform', _href: '/blockchain-enterprise-platform'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops'}
    ]
  },
  {_title: 'Micro SAAS', _icon: Target, _services: [
      { name: 'AI Content Factory Pro', _href: '/ai-content-factory'},
      {_name: 'Quantum CRM Suite', _href: '/quantum-crm'},
      {_name: 'CyberShield Pro', _href: '/cyber-shield-pro'},
      {_name: 'DataVault Hub', _href: '/data-vault-hub'},
      {_name: 'DevOps Automation Studio', _href: '/devops-automation-studio'}
    ]
  }
],

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
],

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' }
],

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
],

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50&quot;>
      {/* Background Effects */}
      <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5&quot;></div>
      
      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12&quot;>
            {/* Company Info */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;flex items-center space-x-3 mb-6&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center&quot;>
                  <Star className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <div>
                  <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </div>
                  <div className=&quot;text-sm text-gray-400&quot;>Future Technology Solutions</div>
                </div>
              </div>
              
              <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {_/* Service Categories */}
            {_serviceCategories.map((category, _index) => (_<motion.div
=======
  Youtube,;
  Instagram,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Star, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Zap, Globe, Database, Lock, Cloud, BarChart3;
  Twitter, Linkedin, Github, Youtube, Instagram
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'AI & Consciousness'
    icon: Brain
    services: [
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-2029'
      }
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' }
      {
        name: 'Multimodal AI Orchestrator'
        href: '/multimodal-ai-orchestrator'
      }
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  },  {      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' }
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' }
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  }
  {
    title: 'Quantum & Emerging Tech'
    icon: Atom
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' }
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' }
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' }
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' }
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  },  {
    title: 'Enterprise IT'
    icon: Shield
    services: [      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  }
  {
    title: 'Enterprise IT'
    icon: Shield
    services: [
      {
        name: 'Quantum Cloud Infrastructure'
        href: '/quantum-cloud-infrastructure'
      }
      {
        name: 'Edge Computing Orchestrator'
        href: '/edge-computing-orchestrator'
      }
      {
        name: 'Zero Trust Security Platform'
        href: '/zero-trust-security-platform'
      }
      {
        name: 'Blockchain Enterprise Platform'
        href: '/blockchain-enterprise-platform'
      }
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ]
  },  {      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' }
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' }
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' }
    ]
  }
    title: 'Micro SAAS'
    icon: Target
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory' }
      { name: 'Quantum CRM Suite', href: '/quantum-crm' }
      { name: 'CyberShield Pro', href: '/cyber-shield-pro' }
      { name: 'DataVault Hub', href: '/data-vault-hub' }
      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
    ]
  },];      { name: 'DevOps Automation Studio', href: '/devops-automation-studio' }
    ]
  }
];
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' },];  { name: 'Resources', href: '/resources' }
];
const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' }
  { name: 'Terms of Service', href: '/terms' }
  { name: 'Cookie Policy', href: '/cookies' }
  { name: 'GDPR Compliance', href: '/gdpr' },];  { name: 'GDPR Compliance', href: '/gdpr' }
];
const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' }
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' }
  { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' }
  {
    name: 'Instagram'
    href: '#'
    icon: Instagram
    color: 'hover:text-pink-400'
  },];  { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' }
];

const EnhancedFooter2025: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5'></div>
      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center'>
                  <Star className='w-7 h-7 text-white' />
                </div>
                <div>
                  <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                    Zion Tech Group
                  </div>
                  <div className='text-sm text-gray-400'>
                    Future Technology Solutions
                  </div>
                </div>
              </div>
              <p className='text-gray-400 mb-6 leading-relaxed'>
                Leading the future with revolutionary AI, quantum computing, and
                emerging technology solutions that transform businesses
                worldwide.
              </p>
              {/* Contact Info */}
              <div className='space-y-3'>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Phone className='w-4 h-4 text-cyan-400' />
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='hover:text-cyan-400 transition-colors'
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Mail className='w-4 h-4 text-purple-400' />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='hover:text-purple-400 transition-colors'
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <MapPin className='w-4 h-4 text-pink-400' />
                  <span className='text-sm'>{contactInfo.address}</span>                </div>      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Future Technology Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the future with revolutionary AI, quantum computing, and emerging technology solutions that transform businesses worldwide.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;space-y-4&quot;
              >
                <div className=&quot;flex items-center space-x-3&quot;>
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                    <category.icon className=&quot;w-4 h-4 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white&quot;>{category.title}</h3>
                </div>
                
                <div className=&quot;space-y-2&quot;>
=======
                className='space-y-4'

              >
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                    <category.icon className='w-4 h-4 text-white' />
                  </div>
                  <h3 className='text-lg font-semibold text-white'>
                    {category.title}
                  </h3>
                </div>
                <div className='space-y-2'>
                  {category.services.map(service => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className='block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm'                    >              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
<<<<<<< HEAD
                      className=&quot;block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm&quot;
                    >
                      {service.name}
                    </a>
=======
                      className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      className='block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm'                    >

                    >

                      {service.name}
                    </Link>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Additional Links */}
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50&quot;>
            {/* Company Links */}
            <div>
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Company</h4>
              <div className=&quot;space-y-2&quot;>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {/* Additional Links */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50'>

          {/* Additional Links */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50'>

            {/* Company Links */}
            <div>
              <h4 className='text-white font-semibold mb-4'>Company</h4>
              <div className='space-y-2'>
                {companyLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'                  >            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
<<<<<<< HEAD
                    className=&quot;block text-gray-400 hover:text-white transition-colors duration-200 text-sm&quot;
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {_/* Legal Links */}
            <div>
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Legal</h4>
              <div className=&quot;space-y-2&quot;>
=======
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'                  >

                  >

                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className='text-white font-semibold mb-4'>Legal</h4>
              <div className='space-y-2'>
                {legalLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'                  >              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
<<<<<<< HEAD
                    className=&quot;block text-gray-400 hover:text-white transition-colors duration-200 text-sm&quot;
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {_/* Social Links */}
            <div>
              <h4 className=&quot;text-white font-semibold mb-4&quot;>Follow Us</h4>
              <div className=&quot;flex space-x-4&quot;>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={_social.href}
                    className={_`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={_social.name}
                  >
                    <social.icon className=&quot;w-5 h-5&quot; />
=======
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'                  >

                  >

                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className='text-white font-semibold mb-4'>Follow Us</h4>
              <div className='flex space-x-4'>
                {socialLinks.map(social => (                  <a              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a

                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={social.name}
                  >
                    <social.icon className='w-5 h-5' />                  </a>                    <social.icon className="w-5 h-5" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>

                ))}
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Newsletter Section */}
        <div className=&quot;border-t border-gray-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
            <div className=&quot;text-center&quot;>
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

        {/* Newsletter Section */}
        <div className='border-t border-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='text-center'>              <motion.h3        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.h3

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className=&quot;text-2xl md:text-3xl font-bold text-white mb-4&quot;

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className='text-2xl md:text-3xl font-bold text-white mb-4'              >                className="text-2xl md:text-3xl font-bold text-white mb-4"
                className='text-2xl md:text-3xl font-bold text-white mb-4'              >

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              >
                Stay Ahead of the Future
              </motion.h3>
              <motion.p
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-gray-400 mb-6 max-w-2xl mx-auto'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                className="text-gray-400 mb-6 max-w-2xl mx-auto"
              >
=======
                className='text-gray-400 mb-6 max-w-2xl mx-auto'

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
                Get the latest insights on AI, quantum computing, and emerging
                technologies delivered to your inbox.
              </motion.p>              >
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
              </motion.p>
              <motion.div
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='text-gray-400 mb-6 max-w-2xl mx-auto'>;
                Get the latest insights on AI, quantum computing, and emerging;
                technologies delivered to your inbox.;
              </motion && motion.p>              >;
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.;
              </motion && motion.p>;
              <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                />;
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                  Subscribe              >;

=======
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
=======
                className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'

              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                />
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                  Subscribe              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='border-t border-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='text-gray-400 text-sm'>
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className='flex items-center space-x-6 text-sm text-gray-400'>                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Trusted by 1000+ companies worldwide</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />
                  <span>Trusted by 1000+ companies worldwide</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full'></div>                  <span>99.9% Uptime Guarantee</span>                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  );

export default EnhancedFooter2025;  )
}
export default EnhancedFooter2025;

}

export default EnhancedFooter2025;

=======


=======
<<<<<<< HEAD
/>;
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">;
                  Subscribe;
                </button>;
              </motion && motion.div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Bar */}
        <div className='border-t border-gray-800/50'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>;
              <div className='text-gray-400 text-sm'>;
                © {currentYear} Zion Tech Group. All rights reserved.;
              </div>;
              <div className='flex items-center space-x-6 text-sm text-gray-400'>                © {currentYear} Zion Tech Group. All rights reserved.;
              </div>;
              <div className="flex items-center space-x-6 text-sm text-gray-400">;
                <div className="flex items-center space-x-2">;
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                  <span>Trusted by 1000+ companies worldwide</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                  <span>Trusted by 1000+ companies worldwide</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <div className='w-2 h-2 bg-green-400 rounded-full'></div>                  <span>99 && 99.9% Uptime Guarantee</span>                <div className="flex items-center space-x-2">;
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>;
                  <span>99 && 99.9% Uptime Guarantee</span>;
        {/* Newsletter Section */}
        <div className='border - t border - gray - 800 / 50'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
            <div className='text - center'>              <motion.h3        <div className="border - t border - gray - 800 / 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
            <div className="text - center">;
              <motion.h3;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text - 2xl md:text - 3xl font - bold text - white mb - 4'              >                className="text - 2xl md:text - 3xl font - bold text - white mb - 4";
              >;
                Stay Ahead of the Future;
              </motion.h3>;
              <motion.p;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='text - gray - 400 mb - 6 max - w-2xl mx - auto';
              >;
                Get the latest insights on AI, quantum computing, and emerging;
                technologies delivered to your inbox.;
              </motion.p>              >;
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.;
              </motion.p>;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex flex - col sm:flex - row gap - 4 max - w-md mx - auto';
              >;
                <input;
                  type='email';
                  placeholder='Enter your email';
                  className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                />;
                <button className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 600 hover:to - purple - 700 text - white font - semibold rounded - xl transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'>                  Subscribe              >;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                />;
                <button className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 600 hover:to - purple - 700 text - white font - semibold rounded - xl transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30">;
                  Subscribe;
                </button>;
              </motion.div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Bar */}
        <div className='border - t border - gray - 800 / 50'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
            <div className='flex flex - col md:flex - row items - center justify - between space - y-4 md:space - y-0'>;
              <div className='text - gray - 400 text - sm'>;
                © {current_year} Zion Tech Group. All rights reserved.;
              </div>;
              <div className='flex items - center space - x-6 text - sm text - gray - 400'>                © {current_year} Zion Tech Group. All rights reserved.;
              </div>;
              <div className="flex items - center space - x-6 text - sm text - gray - 400">;
                <div className="flex items - center space - x-2">;
                  <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;
                  <span > Trusted by 1000+ companies worldwide</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                  <span > Trusted by 1000+ companies worldwide</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <div className='w - 2 h - 2 bg - green - 400 rounded - full'></div>                  <span > 99.9% Uptime Guarantee</span>                <div className="flex items - center space - x-2">;
                  <div className="w - 2 h - 2 bg - green - 400 rounded - full"></div>;
                  <span > 99.9% Uptime Guarantee</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
  )

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default EnhancedFooter2025;
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </footer>);
}
;
export default EnhancedFooter2025);
}
;
export default EnhancedFooter2025;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  );
}
};

export default EnhancedFooter2025;  )
}
export default EnhancedFooter2025;

export default EnhancedFooter2025;

}
export default EnhancedFooter2025;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
