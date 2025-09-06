

import React from 'react';


import Link from 'next/link';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD


=======
<<<<<<< HEAD
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Star
  Shield
  Brain
  DollarSign
  Dna
  Rocket
  Users
  Award
  Zap
  Facebook
  Twitter
  Linkedin
  Instagram
  Youtube
  Github;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Brain,
  DollarSign,
  Dna,
  Rocket,
  Users,
  Award,
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,;
  Github,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield, ;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  Brain, DollarSign, Dna, Rocket, Users, Award, Zap;
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
{
  name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics'
}
{
  name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success'
}
{
  name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator'
}
{
  name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence'
}]
}
{
  title: 'Cybersecurity & Quantum', services: [ {
  name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform'
}
{
  name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter'
}
{
  name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security'
}
{
  name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner'
}
{
  name: 'Quantum Secure Communication', href: '/quantum-secure-communication'
}]
}
{
  title: 'Fintech & Blockchain', services: [ {
  name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform'
}
{
  name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management'
}
{
  name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance'
}
{
  name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform'
}
{
  name: 'Quantum Payment Processing', href: '/quantum-payment-processing'
}]
}
{
  title: 'Healthcare & Biotech', services: [ {
  name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics'
}
{
  name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform'
}
{
  name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care'
}
{
  name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis'
}
{
  name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials'
}]
}];
{
  /* Background Effects */
}<div className="absolute inset-0 overflow-hidden" > <div className="absolute inset-0 bg-[radial-gradient (circle at 30% 20%, rgba (6, 182, 212, 0.05), transparent 50%) ]" ></div> <div className="absolute inset-0 bg-[radial-gradient (circle at 70% 80%, rgba (139, 92, 246, 0.05), transparent 50%) ]" ></div> </div> <motion.div initial= {
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


  {
    title: 'AI & Automation'
    services: [
      {
        name: 'AI Autonomous Business Processor'
        href: '/ai-autonomous-business-processor'
      }
      {
        name: 'AI Predictive Enterprise Analytics'
        href: '/ai-predictive-enterprise-analytics'
      }
      {
        name: 'AI Autonomous Customer Success'
        href: '/ai-autonomous-customer-success'
      }
      {
        name: 'AI Autonomous Marketing Orchestrator'
        href: '/ai-autonomous-marketing-orchestrator'
      }
      {
        name: 'AI Autonomous Sales Intelligence'
        href: '/ai-autonomous-sales-intelligence'
      }
    ]
  }
  {
    title: 'Cybersecurity & Quantum'
    services: [
      {
        name: 'Quantum Encryption Platform'
        href: '/quantum-encryption-platform'
      }
      {
        name: 'AI Autonomous Threat Hunter'
        href: '/ai-autonomous-threat-hunter'
      }
      {
        name: 'Quantum Zero Trust Security'
        href: '/quantum-zero-trust-security'
      }
      {
        name: 'AI Autonomous Vulnerability Scanner'
        href: '/ai-autonomous-vulnerability-scanner'
      }
      {
        name: 'Quantum Secure Communication'
        href: '/quantum-secure-communication'
      }
    ]
  }
  {
    title: 'Fintech & Blockchain'
    services: [
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading-platform'
      }
      {
        name: 'AI Autonomous Wealth Management'
        href: '/ai-autonomous-wealth-management'
      }
      {
        name: 'Quantum Blockchain Finance'
        href: '/quantum-blockchain-finance'
      }
      {
        name: 'AI Autonomous Insurance Platform'
        href: '/ai-autonomous-insurance-platform'
      }
      {
        name: 'Quantum Payment Processing'
        href: '/quantum-payment-processing'
      }
    ]
  }
  {
    title: 'Healthcare & Biotech'
    services: [
      {
        name: 'AI Autonomous Medical Diagnostics'
        href: '/ai-autonomous-medical-diagnostics'
      }
      {
        name: 'Quantum Drug Discovery Platform'
        href: '/quantum-drug-discovery-platform'
      }
      {
        name: 'AI Autonomous Patient Care'
        href: '/ai-autonomous-patient-care'
      }
      { name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis' }
      {

        name: 'AI Autonomous Clinical Trials',
        href: '/ai-autonomous-clinical-trials',
      },
    ],
  },]}


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const serviceCategories = [
  {
    title: 'AI & Automation'
    services: [
      { name: 'AI Autonomous Business Processor', href: '/ai-autonomous-business-processor' }
      { name: 'AI Predictive Enterprise Analytics', href: '/ai-predictive-enterprise-analytics' }
      { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success' }
      { name: 'AI Autonomous Marketing Orchestrator', href: '/ai-autonomous-marketing-orchestrator' }
      { name: 'AI Autonomous Sales Intelligence', href: '/ai-autonomous-sales-intelligence' }
    ]
  }
  {
    title: 'Cybersecurity & Quantum'
    services: [
      { name: 'Quantum Encryption Platform', href: '/quantum-encryption-platform' }
      { name: 'AI Autonomous Threat Hunter', href: '/ai-autonomous-threat-hunter' }
      { name: 'Quantum Zero Trust Security', href: '/quantum-zero-trust-security' }
      { name: 'AI Autonomous Vulnerability Scanner', href: '/ai-autonomous-vulnerability-scanner' }
      { name: 'Quantum Secure Communication', href: '/quantum-secure-communication' }
    ]
  }
  {
    title: 'Fintech & Blockchain'
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' }
      { name: 'AI Autonomous Wealth Management', href: '/ai-autonomous-wealth-management' }
      { name: 'Quantum Blockchain Finance', href: '/quantum-blockchain-finance' }
      { name: 'AI Autonomous Insurance Platform', href: '/ai-autonomous-insurance-platform' }
      { name: 'Quantum Payment Processing', href: '/quantum-payment-processing' }
    ]
  }
  {
    title: 'Healthcare & Biotech'
    services: [
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai-autonomous-medical-diagnostics' }
      { name: 'Quantum Drug Discovery Platform', href: '/quantum-drug-discovery-platform' }
      { name: 'AI Autonomous Patient Care', href: '/ai-autonomous-patient-care' }
      { name: 'Quantum Genomic Analysis', href: '/quantum-genomic-analysis' }
      { name: 'AI Autonomous Clinical Trials', href: '/ai-autonomous-clinical-trials' }
    ]
=======
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Brain,
  DollarSign,
  Dna,
  Rocket,
  Users,
  Award,
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, Shield,
  Brain, DollarSign, Dna, Rocket, Users, Award, Zap;
  Facebook, Twitter, Linkedin, Instagram, Youtube, Github;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
{
  name: 'AI Predictive Enterprise Analytics', href: '/ai - predictive - enterprise - analytics';
}
{
  name: 'AI Autonomous Customer Success', href: '/ai - autonomous - customer - success';
}
{
  name: 'AI Autonomous Marketing Orchestrator', href: '/ai - autonomous - marketing - orchestrator';
}
{
  name: 'AI Autonomous Sales Intelligence', href: '/ai - autonomous - sales - intelligence';
}];
}
{
  title: 'Cybersecurity & Quantum', services: [ {
  name: 'Quantum Encryption Platform', href: '/quantum - encryption - platform';
}
{
  name: 'AI Autonomous Threat Hunter', href: '/ai - autonomous - threat - hunter';
}
{
  name: 'Quantum Zero Trust Security', href: '/quantum - zero - trust - security';
}
{
  name: 'AI Autonomous Vulnerability Scanner', href: '/ai - autonomous - vulnerability - scanner';
}
{
  name: 'Quantum Secure Communication', href: '/quantum - secure - communication';
}];
}
{
  title: 'Fintech & Blockchain', services: [ {
  name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading - platform';
}
{
  name: 'AI Autonomous Wealth Management', href: '/ai - autonomous - wealth - management';
}
{
  name: 'Quantum Blockchain Finance', href: '/quantum - blockchain - finance';
}
{
  name: 'AI Autonomous Insurance Platform', href: '/ai - autonomous - insurance - platform';
}
{
  name: 'Quantum Payment Processing', href: '/quantum - payment - processing';
}];
}
{
  title: 'Healthcare & Biotech', services: [ {
  name: 'AI Autonomous Medical Diagnostics', href: '/ai - autonomous - medical - diagnostics';
}
{
  name: 'Quantum Drug Discovery Platform', href: '/quantum - drug - discovery - platform';
}
{
  name: 'AI Autonomous Patient Care', href: '/ai - autonomous - patient - care';
}
{
  name: 'Quantum Genomic Analysis', href: '/quantum - genomic - analysis';
}
{
  name: 'AI Autonomous Clinical Trials', href: '/ai - autonomous - clinical - trials';
}];
}];
{
  /* Background Effects */;
}<div className="absolute inset - 0 overflow - hidden" > <div className="absolute inset - 0 bg-[radial - gradient (circle at 30% 20%, rgba (6, 182, 212, 0.05), transparent 50%) ]" ></div> <div className="absolute inset - 0 bg-[radial - gradient (circle at 70% 80%, rgba (139, 92, 246, 0.05), transparent 50%) ]" ></div> </div> <motion.div initial= {
  {
    title: 'AI & Automation',
    services: [;
      {
        name: 'AI Autonomous Business Processor',
        href: '/ai - autonomous - business - processor',
      },
      {
        name: 'AI Predictive Enterprise Analytics',
        href: '/ai - predictive - enterprise - analytics',
      },
      {
        name: 'AI Autonomous Customer Success',
        href: '/ai - autonomous - customer - success',
      },
      {
        name: 'AI Autonomous Marketing Orchestrator',
        href: '/ai - autonomous - marketing - orchestrator',
      },
      {
        name: 'AI Autonomous Sales Intelligence',
        href: '/ai - autonomous - sales - intelligence',
      },
    ],
  },
  {
    title: 'Cybersecurity & Quantum',
    services: [;
      {
        name: 'Quantum Encryption Platform',
        href: '/quantum - encryption - platform',
      },
      {
        name: 'AI Autonomous Threat Hunter',
        href: '/ai - autonomous - threat - hunter',
      },
      {
        name: 'Quantum Zero Trust Security',
        href: '/quantum - zero - trust - security',
      },
      {
        name: 'AI Autonomous Vulnerability Scanner',
        href: '/ai - autonomous - vulnerability - scanner',
      },
      {
        name: 'Quantum Secure Communication',
        href: '/quantum - secure - communication',
      },
    ],
  },
  {
    title: 'Fintech & Blockchain',
    services: [;
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum - financial - trading - platform',
      },
      {
        name: 'AI Autonomous Wealth Management',
        href: '/ai - autonomous - wealth - management',
      },
      {
        name: 'Quantum Blockchain Finance',
        href: '/quantum - blockchain - finance',
      },
      {
        name: 'AI Autonomous Insurance Platform',
        href: '/ai - autonomous - insurance - platform',
      },
      {
        name: 'Quantum Payment Processing',
        href: '/quantum - payment - processing',
      },
    ],
  },
  {
    title: 'Healthcare & Biotech',
    services: [;
      {
        name: 'AI Autonomous Medical Diagnostics',
        href: '/ai - autonomous - medical - diagnostics',
      },
      {
        name: 'Quantum Drug Discovery Platform',
        href: '/quantum - drug - discovery - platform',
      },
      {
        name: 'AI Autonomous Patient Care',
        href: '/ai - autonomous - patient - care',
      },
      { name: 'Quantum Genomic Analysis', href: '/quantum - genomic - analysis' },
      {
        name: 'AI Autonomous Clinical Trials',
        href: '/ai - autonomous - clinical - trials',
      },
    ],
  }, ];}
;
const service_categories = [;
  {
    title: 'AI & Automation',
    services: [;
      { name: 'AI Autonomous Business Processor', href: '/ai - autonomous - business - processor' },
      { name: 'AI Predictive Enterprise Analytics', href: '/ai - predictive - enterprise - analytics' },
      { name: 'AI Autonomous Customer Success', href: '/ai - autonomous - customer - success' },
      { name: 'AI Autonomous Marketing Orchestrator', href: '/ai - autonomous - marketing - orchestrator' },
      { name: 'AI Autonomous Sales Intelligence', href: '/ai - autonomous - sales - intelligence' }
    ];
  }

  {
    title: 'Cybersecurity & Quantum',
    services: [;
      { name: 'Quantum Encryption Platform', href: '/quantum - encryption - platform' },
      { name: 'AI Autonomous Threat Hunter', href: '/ai - autonomous - threat - hunter' },
      { name: 'Quantum Zero Trust Security', href: '/quantum - zero - trust - security' },
      { name: 'AI Autonomous Vulnerability Scanner', href: '/ai - autonomous - vulnerability - scanner' },
      { name: 'Quantum Secure Communication', href: '/quantum - secure - communication' }
    ];
  }
  {
    title: 'Fintech & Blockchain',
    services: [;
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading - platform' },
      { name: 'AI Autonomous Wealth Management', href: '/ai - autonomous - wealth - management' },
      { name: 'Quantum Blockchain Finance', href: '/quantum - blockchain - finance' },
      { name: 'AI Autonomous Insurance Platform', href: '/ai - autonomous - insurance - platform' },
      { name: 'Quantum Payment Processing', href: '/quantum - payment - processing' }
    ];
  }
  {
    title: 'Healthcare & Biotech',
    services: [;
      { name: 'AI Autonomous Medical Diagnostics', href: '/ai - autonomous - medical - diagnostics' },
      { name: 'Quantum Drug Discovery Platform', href: '/quantum - drug - discovery - platform' },
      { name: 'AI Autonomous Patient Care', href: '/ai - autonomous - patient - care' },
      { name: 'Quantum Genomic Analysis', href: '/quantum - genomic - analysis' },
      { name: 'AI Autonomous Clinical Trials', href: '/ai - autonomous - clinical - trials' }
    ];

  }


];


]

const companyLinks = [
=======
;
const company_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: 'About Us', href: '/about' },
  { name: 'Leadership Team', href: '/leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Press', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Investors', href: '/investors' },
  { name: 'Contact Us', href: '/contact' },



const resourceLinks = [
=======
  { name: 'Locations', href: '/locations' }, ];  { name: 'Locations', href: '/locations' }
];
;
const resource_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api - documentation' },
  { name: 'Case Studies', href: '/case - studies' },
  { name: 'Blog & News', href: '/blog' },
  { name: 'Support Center', href: '/support' },
  { name: 'Training & Certification', href: '/training' },
  { name: 'Community Forum', href: '/community' },



const socialLinks = [
=======
  { name: 'Developer Resources', href: '/developer - resources' }, ];  { name: 'Developer Resources', href: '/developer - resources' }
];
;
const social_links = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },


export default function UltraFuturisticFooter2026() {
  return (


export default function UltraFuturisticFooter2026() {;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return (
    <footer className='relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800'>;
      {/* Background Effects */}

      <div className='absolute inset-0 overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0 && 0.05),transparent_50%)]'></div>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.05),transparent_50%)]'></div>;
      </div>;

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12'>;
          {/* Company Info */}


          <div className='lg:col-span-2'>            <motion && motion.div      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0 && 0.05),transparent_50%)]"></div>;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.05),transparent_50%)]"></div>;
      </div>;

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">;
          {/* Company Info */}

          <div className="lg:col-span-2">
=======
export default function UltraFuturisticFooter2026() {
  return (
    <footer className='relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800'>  { name: 'GitHub', href: '#', icon: Github };
];
export default function UltraFuturisticFooter2026() {
  return (
    <footer className='relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800'>


];

export default function UltraFuturisticFooter2026() {
  return (



            <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

              transition={{ duration: 0 && 0.6 }}>;
              <div className='flex items-center mb-6'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4'>;
                  <Zap className='w-6 h-6 text-white' />;
                </div>;
                <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h3>;
              </div>;
              <p className='text-gray-300 mb-6 leading-relaxed'>;
                Leading provider of revolutionary AI automation, quantum;
                cybersecurity, fintech blockchain, and healthcare biotech;
                solutions. Transforming businesses with cutting-edge technology.;
              </p>;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
              transition={{ duration: 0.6 }}
            >
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4'>
                  <Zap className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h3>
              </div>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                Leading provider of revolutionary AI automation, quantum
                cybersecurity, fintech blockchain, and healthcare biotech
                solutions. Transforming businesses with cutting-edge technology.
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              </p>
              {/* Contact Info */}


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {/* Service Categories */}
          {serviceCategories && serviceCategories.map((category, index) => (;
            <motion&& motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}


                      href={service.href}
                      className="text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 text - sm flex items - center group";
                    >;
                      <ArrowRight className="w - 3 h - 3 mr - 2 group - hover:translate - x-1 transition - transform duration - 300" />;
                      {service.name}

                      href={service && service.href}
                      className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group'>;
                      <ArrowRight className='w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300' />                      {service && service.name}                {category && category.title}
              </h4>;
              <ul className="space-y-2">;
                {category && category.services.map((service, serviceIndex) => (;
                  <li key={serviceIndex}>;
                    <Link
                      href={service && service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group">;
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />;
                      {service && service.name}
                    </Link>;
                  </li>;

                ))}
              </ul>;
            </motion && motion.div>;
          ))}

        </div>;
=======



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Additional Links */}


          {/* Company Links */}
          <motion&& motion.div
=======
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>          {/* Company Links */}

          {/* Company Links */}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


                    href={link.href}
                    className="text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 text - sm";
                  >;
                    {link.name}

                    href={link && link.href}
                    className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm'>              Company;
            </h4>;
            <ul className="space-y-2">;
              {companyLinks && companyLinks.map((link, index) => (;
                <li key={index}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </motion && motion.div>;


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {/* Resources */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


                    href={link.href}
                    className="text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 text - sm";
                  >;
                    {link.name}

                    href={link && link.href}
                    className='text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm'>              Resources;
            </h4>;
            <ul className="space-y-2">;
              {resourceLinks && resourceLinks.map((link, index) => (;
                <li key={index}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </motion && motion.div>;


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {/* Social Media */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


=======


                </Link>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              ))}

            </div>;
          </motion && motion.div>;
        </div>;


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        {/* Newsletter Signup */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        >
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Stay Updated with Latest Innovations
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Get exclusive access to our latest AI, quantum computing, and
              emerging technology insights. Be the first to know about
              breakthrough solutions and industry trends.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'

          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-12"
        >

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest AI, quantum computing, and emerging technology insights.
              Be the first to know about breakthrough solutions and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
=======
              />;
              <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300'>                Subscribe        >;
          <div className="text-center">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Stay Updated with Latest Innovations;
            </h3>;
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Get exclusive access to our latest AI, quantum computing, and emerging technology insights. ;
              Be the first to know about breakthrough solutions and industry trends.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"


                Subscribe;
              </button>;
            </div>;
          </div>;


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        {/* Bottom Bar */}
        <motion&& motion.div
=======
        </motion.div>;
        {/* Bottom Bar */}
        <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>
              © 2026 Zion Tech Group. All rights reserved.
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
          className='border-t border-gray-800 pt-8'>;
          <div className='flex flex-col md:flex-row justify-between items-center'>;
            <div className='text-gray-400 text-sm mb-4 md:mb-0'>;
              © 2026 Zion Tech Group. All rights reserved. |;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300 ml-2'>;
                Privacy Policy;
              </Link>;
              <span className='mx-2'>|</span>;
              <Link
                href='/terms'

          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >

          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Zion Tech Group. All rights reserved.
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                Trusted by 2500+ Companies
              </div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-cyan-400 text-sm font-semibold">
                99.9% Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD

                className='hover:text-cyan-400 transition-colors duration-300'>;
                Terms of Service;
              </Link>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <div className='flex items-center text-gray-400 text-sm'>;
                <Star className='w-4 h-4 text-yellow-400 mr-1' />;
                Trusted by 2500+ Companies;
              </div>;
              <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></div>;
              <div className='text-cyan-400 text-sm font-semibold'>                99 && 99.9% Uptime        >;
          <div className="flex flex-col md: flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © 2026 Zion Tech Group. All rights reserved. | ;
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">;
                Privacy Policy;
              </Link>;
              <span className="mx-2">|</span>;
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">;
                Terms of Service;
              </Link>;
            </div>;
            <div className="flex items-center space-x-2">;
              <div className="flex items-center text-gray-400 text-sm">;
                <Star className="w-4 h-4 text-yellow-400 mr-1" />;
                Trusted by 2500+ Companies;
              </div>;
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>;
              <div className="text-cyan-400 text-sm font-semibold">;
                99 && 99.9% Uptime;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;
      </div>;
=======
<<<<<<< HEAD
    </footer>
<<<<<<< HEAD
);
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    </footer>;
  );
}

<<<<<<< HEAD
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          className='border - t border - gray - 800 pt - 8';
        >;
          <div className='flex flex - col md:flex - row justify - between items - center'>;
            <div className='text - gray - 400 text - sm mb - 4 md:mb - 0'>;
              © 2026 Zion Tech Group. All rights reserved. |;
              <Link;
                href='/privacy';
                className='hover:text - cyan - 400 transition - colors duration - 300 ml - 2';
              >;
                Privacy Policy;
              </Link>;
              <span className='mx - 2'>|</span>;
              <Link;
                href='/terms';
                className='hover:text - cyan - 400 transition - colors duration - 300';
              >;
                Terms of Service;
              </Link>;
            </div>;
            <div className='flex items - center space - x-2'>;
              <div className='flex items - center text - gray - 400 text - sm'>;
                <Star className='w - 4 h - 4 text - yellow - 400 mr - 1' />;
                Trusted by 2500+ Companies;
              </div>;
              <div className='w - 2 h - 2 bg - cyan - 400 rounded - full animate - pulse'></div>;
              <div className='text - cyan - 400 text - sm font - semibold'>                99.9% Uptime        >;
          <div className="flex flex - col md: flex - row justify - between items - center">;
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">;
              © 2026 Zion Tech Group. All rights reserved. |;
              <Link href="/privacy" className="hover:text - cyan - 400 transition - colors duration - 300 ml - 2">;
                Privacy Policy;
              </Link>;
              <span className="mx - 2">|</span>;
              <Link href="/terms" className="hover:text - cyan - 400 transition - colors duration - 300">;
                Terms of Service;
              </Link>;
            </div>;
            <div className="flex items - center space - x-2">;
              <div className="flex items - center text - gray - 400 text - sm">;
                <Star className="w - 4 h - 4 text - yellow - 400 mr - 1" />;
                Trusted by 2500+ Companies;
              </div>;
              <div className="w - 2 h - 2 bg - cyan - 400 rounded - full animate - pulse"></div>;
              <div className="text - cyan - 400 text - sm font - semibold">;
                99.9% Uptime;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </footer>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

=======

    </footer>
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
}
=======
    </footer>
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
